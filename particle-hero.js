/* ParticleHero: interactive WebGPU particle sphere behind the hero copy.
 *
 * About 2,000 instanced spheres sit on a Fibonacci sphere. The pointer is
 * raycast onto an invisible sphere; particles near the hit point gain heat,
 * shift from the base color to the hot color, and are pushed outward along a
 * curl-noise field so they stream away. A spring pulls them home while heat
 * decays.
 *
 * The simulation runs entirely in a TSL compute shader over instancedArray
 * storage buffers (position, velocity, heat, base position). The CPU only
 * updates a handful of uniforms per frame.
 *
 * WebGPURenderer falls back to WebGL2 automatically when WebGPU is missing.
 *
 * Usage: const hero = await mountParticleHero(sectionEl); hero.dispose();
 */
import * as THREE from 'three/webgpu';
import {
  Fn, instancedArray, instanceIndex, uniform, float, vec2, vec3, vec4, color,
  mix, smoothstep, exp, sqrt, sin, cos, max, min, length, normalize, hash,
  positionLocal, screenUV, screenSize, mx_noise_vec3, pass
} from 'three/tsl';
import { bloom } from 'three/addons/tsl/display/BloomNode.js';

/* ------------------------------------------------------------------ */
/* Tunables                                                            */
/* ------------------------------------------------------------------ */
export const CONFIG = {
  count: 2000,            // number of particles
  ballRadius: 2.4,        // world units (camera sits 10 units away)
  particleSize: 0.034,    // sphere radius of each particle, world units
  sizeJitter: 0.45,       // 0 = all equal, 1 = sizes vary 0.5x..1.5x

  pushStrength: 9,        // outward + curl-noise force on hot particles
  pushRadius: 0.95,       // how far from the cursor hit particles heat up
  noiseScale: 1.3,        // spatial frequency of the curl-noise trails
  noiseSpeed: 0.35,       // how fast the noise field evolves
  spring: 5.5,            // pull back toward the base position
  damping: 2.4,           // velocity damping, per second
  heatGain: 7,            // how fast particles heat up under the cursor
  heatDecay: 1.4,         // seconds for heat to fall to ~37%
  rotationSpeed: 0.07,    // idle spin, radians per second

  colors: {
    base: '#2a2235',      // cold particle
    hot: '#ff5a1f',       // hot particle
    bgCenter: '#1a1129',  // vignette center
    bgEdge: '#0d0718'     // vignette edge (matches page --bg)
  },
  emissive: { base: 0.35, hot: 2.2 },
  bloom: { strength: 1.1, radius: 0.45, threshold: 0.22 },

  layout: {
    mobileBreakpoint: 768,  // px; below this the ball is centered
    desktopOffsetX: 0.42,   // fraction of half view width, right of center
    mobileScale: 0.8,       // ball diameter as a fraction of view width on mobile
    fitHeight: 0.82         // ball diameter as a fraction of view height (max)
  },

  maxDpr: 2,
  minFps: 24,               // below this (sustained) the ball freezes to a static frame
  forceWebGL: false         // set true (or add ?webgl to the URL) to test the fallback
};

const CAMERA_Z = 10;
const FOV = 35;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

/* Curl of a 3D noise vector potential, via central differences. */
const curlNoise = Fn(([p]) => {
  const e = 0.1;
  const dx = vec3(e, 0, 0), dy = vec3(0, e, 0), dz = vec3(0, 0, e);
  const x0 = mx_noise_vec3(p.sub(dx)), x1 = mx_noise_vec3(p.add(dx));
  const y0 = mx_noise_vec3(p.sub(dy)), y1 = mx_noise_vec3(p.add(dy));
  const z0 = mx_noise_vec3(p.sub(dz)), z1 = mx_noise_vec3(p.add(dz));
  const cx = y1.z.sub(y0.z).sub(z1.y.sub(z0.y));
  const cy = z1.x.sub(z0.x).sub(x1.z.sub(x0.z));
  const cz = x1.y.sub(x0.y).sub(y1.x.sub(y0.x));
  return vec3(cx, cy, cz).div(2 * e);
});

export async function mountParticleHero(section, overrides = {}) {
  const cfg = { ...CONFIG, ...overrides };
  const count = cfg.count;

  /* ---------- Canvas ---------- */
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.className = 'particle-hero-canvas';
  Object.assign(canvas.style, {
    position: 'absolute', inset: '0', width: '100%', height: '100%',
    display: 'block', pointerEvents: 'none', opacity: '0',
    transition: 'opacity 0.8s ease'
  });
  section.insertBefore(canvas, section.firstChild);

  const forceWebGL = cfg.forceWebGL || new URLSearchParams(location.search).has('webgl');
  const renderer = new THREE.WebGPURenderer({ canvas, antialias: true, forceWebGL });
  renderer.setClearColor(new THREE.Color(cfg.colors.bgEdge), 1);

  let disposed = false;
  const cleanups = [];
  function dispose() {
    if (disposed) return;
    disposed = true;
    renderer.setAnimationLoop(null);
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
    mesh.dispose();
    geometry.dispose();
    material.dispose();
    bloomPass.dispose();
    scenePass.dispose();
    pipeline.dispose();
    renderer.dispose();
    canvas.remove();
  }

  /* ---------- Scene ---------- */
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.1, 100);
  camera.position.set(0, 0, CAMERA_Z);

  const ball = new THREE.Group();
  scene.add(ball);

  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(-3, 4, 6);
  scene.add(key);

  /* ---------- Uniforms ---------- */
  const uDelta = uniform(0);
  const uTime = uniform(0);
  const uHit = uniform(new THREE.Vector3());
  const uActive = uniform(0);
  const uPush = uniform(cfg.pushStrength);
  const uPushRadius = uniform(cfg.pushRadius);
  const uNoiseScale = uniform(cfg.noiseScale);
  const uNoiseSpeed = uniform(cfg.noiseSpeed);
  const uSpring = uniform(cfg.spring);
  const uDamping = uniform(cfg.damping);
  const uHeatGain = uniform(cfg.heatGain);
  const uHeatDecay = uniform(cfg.heatDecay);
  const uBaseColor = uniform(new THREE.Color(cfg.colors.base));
  const uHotColor = uniform(new THREE.Color(cfg.colors.hot));
  const uBgCenter = uniform(new THREE.Color(cfg.colors.bgCenter));
  const uBgEdge = uniform(new THREE.Color(cfg.colors.bgEdge));
  const uBallScreen = uniform(new THREE.Vector2(0.5, 0.5)); // ball center, screen UV
  const uBallScreenRadius = uniform(0.4);                    // ball radius, fraction of height

  /* ---------- Storage buffers ---------- */
  const positions = instancedArray(count, 'vec3');
  const velocities = instancedArray(count, 'vec3');
  const basePositions = instancedArray(count, 'vec3');
  const heats = instancedArray(count, 'float');

  /* Fibonacci sphere, computed on the GPU once. */
  const computeInit = Fn(() => {
    const i = float(instanceIndex);
    const y = float(1).sub(i.add(0.5).div(count).mul(2));
    const r = sqrt(max(float(0), float(1).sub(y.mul(y))));
    const theta = i.mul(GOLDEN_ANGLE);
    const p = vec3(cos(theta).mul(r), y, sin(theta).mul(r)).mul(cfg.ballRadius);
    basePositions.element(instanceIndex).assign(p);
    positions.element(instanceIndex).assign(p);
    velocities.element(instanceIndex).assign(vec3(0));
    heats.element(instanceIndex).assign(0);
  })().compute(count);

  const computeUpdate = Fn(() => {
    const pos = positions.element(instanceIndex);
    const vel = velocities.element(instanceIndex);
    const base = basePositions.element(instanceIndex);
    const heat = heats.element(instanceIndex);
    const dt = uDelta;

    /* Heat: rises near the cursor hit point, decays exponentially. */
    const toP = pos.sub(uHit).toVar();
    const dist = length(toP);
    const influence = float(1).sub(smoothstep(0, uPushRadius, dist)).mul(uActive).toVar();
    const h = heat.add(influence.mul(uHeatGain).mul(dt)).mul(exp(dt.negate().div(uHeatDecay)));
    heat.assign(min(h, 1));

    /* Forces: outward push near the cursor + curl-noise streaming while hot. */
    const outward = normalize(toP.add(normalize(base).mul(0.6)));
    const curl = curlNoise(pos.mul(uNoiseScale).add(vec3(0, uTime.mul(uNoiseSpeed), 0)));
    const push = outward.mul(influence).add(curl.mul(heat).mul(0.6)).mul(uPush);

    /* Spring back home; softened while hot so trails can stretch out. */
    const spring = base.sub(pos).mul(uSpring).mul(float(1).sub(heat.mul(0.75)));

    const v = vel.add(push.add(spring).mul(dt)).mul(exp(uDamping.negate().mul(dt))).toVar();
    vel.assign(v);
    pos.addAssign(v.mul(dt));
  })().compute(count);

  /* ---------- Particles ---------- */
  const geometry = new THREE.IcosahedronGeometry(1, 1);
  const material = new THREE.MeshStandardNodeMaterial({ roughness: 0.55, metalness: 0.1 });
  const heatNode = heats.toAttribute();
  const jitter = hash(instanceIndex).sub(0.5).mul(cfg.sizeJitter * 2).add(1);
  const scaleNode = jitter.mul(cfg.particleSize).mul(heatNode.mul(0.35).add(1));
  material.positionNode = positionLocal.mul(scaleNode).add(positions.toAttribute());
  material.colorNode = mix(uBaseColor, uHotColor, heatNode);
  material.emissiveNode = mix(
    uBaseColor.mul(cfg.emissive.base),
    uHotColor.mul(cfg.emissive.hot),
    smoothstep(0, 1, heatNode)
  );

  const mesh = new THREE.InstancedMesh(geometry, material, count);
  mesh.frustumCulled = false;
  ball.add(mesh);

  /* ---------- Background: dark radial vignette around the ball ---------- */
  const aspect = screenSize.x.div(screenSize.y);
  const offset = screenUV.sub(uBallScreen).mul(vec2(aspect, 1));
  const vignette = smoothstep(uBallScreenRadius.mul(0.4), uBallScreenRadius.mul(2.6), length(offset));
  scene.backgroundNode = vec4(mix(uBgCenter, uBgEdge, vignette), 1);

  /* ---------- Post-processing: bloom ---------- */
  const pipeline = new THREE.RenderPipeline(renderer);
  const scenePass = pass(scene, camera);
  const sceneColor = scenePass.getTextureNode('output');
  const bloomPass = bloom(sceneColor, cfg.bloom.strength, cfg.bloom.radius, cfg.bloom.threshold);
  pipeline.outputNode = sceneColor.add(bloomPass);

  /* ---------- Init (may fail if neither WebGPU nor WebGL2 is available) ---------- */
  try {
    await renderer.init();
  } catch (err) {
    dispose();
    throw err;
  }
  if (disposed) return { dispose, config: cfg };
  // Compile the particle pipeline off the main thread where the backend allows it.
  await renderer.compileAsync(scene, camera);
  if (disposed) return { dispose, config: cfg };
  renderer.compute(computeInit);

  /* ---------- Sizing & layout ---------- */
  let width = 0, height = 0, dpr = 0;
  const sphereWorld = new THREE.Sphere(new THREE.Vector3(), cfg.ballRadius);
  const ballNdc = new THREE.Vector3();

  function layout() {
    const w = section.clientWidth, h = section.clientHeight;
    const nextDpr = Math.min(window.devicePixelRatio || 1, cfg.maxDpr);
    if (w === width && h === height && nextDpr === dpr) return false;
    width = w; height = h; dpr = nextDpr;
    if (!w || !h) return false;

    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    const halfH = Math.tan(THREE.MathUtils.degToRad(FOV / 2)) * CAMERA_Z;
    const halfW = halfH * camera.aspect;
    const L = cfg.layout;
    const fit = Math.min(1, (halfH * L.fitHeight) / cfg.ballRadius);
    if (w < L.mobileBreakpoint) {
      ball.position.set(0, 0, 0);
      ball.scale.setScalar(Math.min(fit, L.mobileScale * Math.min(1, halfW / cfg.ballRadius)));
    } else {
      ball.position.set(halfW * L.desktopOffsetX, 0, 0);
      ball.scale.setScalar(fit);
    }
    sphereWorld.center.copy(ball.position);
    sphereWorld.radius = cfg.ballRadius * ball.scale.x;

    ballNdc.copy(ball.position).project(camera);
    uBallScreen.value.set(ballNdc.x * 0.5 + 0.5, 0.5 - ballNdc.y * 0.5);
    uBallScreenRadius.value = sphereWorld.radius / (2 * halfH);
    return true;
  }

  /* ---------- Pointer → raycast onto the invisible sphere ---------- */
  const raycaster = new THREE.Raycaster();
  const pointerNdc = new THREE.Vector2();
  const hitWorld = new THREE.Vector3();
  let pointerInside = false;
  let touchReleaseAt = 0; // a touch keeps heating briefly after lift so quick taps register
  const TOUCH_LINGER_MS = 300;

  function updateHit() {
    if (!pointerInside && performance.now() > touchReleaseAt) { uActive.value = 0; return; }
    raycaster.setFromCamera(pointerNdc, camera);
    if (raycaster.ray.intersectSphere(sphereWorld, hitWorld)) {
      ball.worldToLocal(uHit.value.copy(hitWorld));
      uActive.value = 1;
    } else {
      uActive.value = 0;
    }
  }

  function onPointerMove(e) {
    const rect = section.getBoundingClientRect();
    pointerNdc.set(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1
    );
    pointerInside = true;
  }
  function onPointerEnd(e) {
    // Touch/pen lift ends the interaction; a mouse keeps heating until it leaves.
    if (e.pointerType !== 'mouse') {
      if (pointerInside) touchReleaseAt = performance.now() + TOUCH_LINGER_MS;
      pointerInside = false;
    } else if (e.type === 'pointerleave') {
      pointerInside = false;
    }
  }
  const listen = (target, type, fn, opts) => {
    target.addEventListener(type, fn, opts);
    cleanups.push(() => target.removeEventListener(type, fn, opts));
  };
  listen(section, 'pointermove', onPointerMove, { passive: true });
  listen(section, 'pointerdown', onPointerMove, { passive: true });
  listen(section, 'pointerup', onPointerEnd, { passive: true });
  listen(section, 'pointercancel', onPointerEnd, { passive: true });
  listen(section, 'pointerleave', onPointerEnd, { passive: true });

  /* ---------- Frame loop ---------- */
  const reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = reducedMq.matches;
  let onScreen = true;
  let lastT = -1;
  let shown = false;
  let tooSlow = false;
  const fpsProbe = { frames: 0, time: 0 }; // frame-rate watchdog for weak GPUs

  function renderFrame() {
    pipeline.render();
    if (!shown) {
      shown = true;
      canvas.style.opacity = '1';
    }
  }

  function frame(now) {
    layout();
    const t = now / 1000;
    const raw = lastT < 0 ? 0 : t - lastT;
    const dt = lastT < 0 ? 1 / 60 : Math.min(raw, 1 / 30);
    lastT = t;

    // Skip a few warm-up frames, then average ~1s; freeze if it can't keep up.
    if (raw > 0 && ++fpsProbe.frames > 10 && fpsProbe.frames <= 70) {
      fpsProbe.time += raw;
      if (fpsProbe.frames === 70 && fpsProbe.time / 60 > 1 / cfg.minFps) {
        tooSlow = true;
        console.info('Particle hero: frame rate too low, showing a static frame.');
        updateLoop();
        renderer.compute(computeInit); // snap back to the clean ball
        renderStatic();
        return;
      }
    }

    ball.rotation.y += cfg.rotationSpeed * dt;
    ball.updateMatrixWorld();
    updateHit();

    uDelta.value = dt;
    uTime.value += dt;
    renderer.compute(computeUpdate);
    renderFrame();
  }

  function renderStatic() {
    layout();
    ball.updateMatrixWorld();
    renderFrame();
  }

  function updateLoop() {
    if (disposed) return;
    const run = !reduced && !tooSlow && onScreen && document.visibilityState === 'visible';
    if (run) {
      lastT = -1;
      fpsProbe.frames = 0;
      fpsProbe.time = 0;
      renderer.setAnimationLoop(frame);
    } else {
      renderer.setAnimationLoop(null);
    }
  }

  const io = new IntersectionObserver((entries) => {
    onScreen = entries[entries.length - 1].isIntersecting;
    updateLoop();
  });
  io.observe(section);
  cleanups.push(() => io.disconnect());

  const ro = new ResizeObserver(() => {
    if ((reduced || tooSlow) && layout()) renderStatic();
  });
  ro.observe(section);
  cleanups.push(() => ro.disconnect());

  listen(document, 'visibilitychange', updateLoop);
  listen(reducedMq, 'change', (e) => {
    reduced = e.matches;
    if (reduced) {
      renderer.setAnimationLoop(null);
      renderer.compute(computeInit); // snap back to the clean ball
      uActive.value = 0;
      renderStatic();
    }
    updateLoop();
  });

  if (reduced) renderStatic();
  updateLoop();

  return { dispose, config: cfg };
}
