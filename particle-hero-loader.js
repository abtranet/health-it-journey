/* Loader for the particle hero (particle-hero.js).
 *
 * Kept tiny and three-free so the page pays nothing up front:
 * - waits for window load + an idle slot before downloading three.js;
 * - skips the effect entirely on software rasterizers (SwiftShader, llvmpipe,
 *   WARP...), where every frame would block the main thread. The CSS vignette
 *   on .hero remains as the static fallback;
 * - disposes on pagehide and remounts when restored from the back/forward cache.
 *
 * Add ?particles=force to the URL to skip the hardware check (for testing).
 */
const SOFTWARE_GPU = /swiftshader|llvmpipe|softpipe|software|basic render|microsoft basic|mesa offscreen/i;

async function hasHardwareGpu() {
  if (new URLSearchParams(location.search).get('particles') === 'force') return true;

  if (navigator.gpu) {
    try {
      const adapter = await navigator.gpu.requestAdapter();
      if (adapter) {
        const info = adapter.info || {};
        const fallback = adapter.isFallbackAdapter || info.isFallbackAdapter;
        if (!fallback && !SOFTWARE_GPU.test(`${info.vendor} ${info.architecture} ${info.description}`)) return true;
      }
    } catch { /* fall through to the WebGL probe */ }
  }

  const gl = document.createElement('canvas').getContext('webgl2', { failIfMajorPerformanceCaveat: true });
  if (!gl) return false;
  const ext = gl.getExtension('WEBGL_debug_renderer_info');
  const name = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
  gl.getExtension('WEBGL_lose_context')?.loseContext();
  return !SOFTWARE_GPU.test(String(name));
}

const hero = document.getElementById('top');
let mounted = null;

async function mount() {
  if (mounted || !hero) return;
  const pending = (async () => {
    if (!(await hasHardwareGpu())) return null;
    const { mountParticleHero } = await import('./particle-hero.js');
    return mountParticleHero(hero);
  })().catch((err) => {
    console.warn('Particle hero unavailable:', err);
    return null;
  });
  mounted = pending;
  if (!(await pending) && mounted === pending) mounted = null;
}

function scheduleMount() {
  if ('requestIdleCallback' in window) requestIdleCallback(mount, { timeout: 2000 });
  else setTimeout(mount, 200);
}

if (document.readyState === 'complete') scheduleMount();
else window.addEventListener('load', scheduleMount, { once: true });

window.addEventListener('pagehide', () => {
  if (!mounted) return;
  const pending = mounted;
  mounted = null;
  pending.then((h) => h && h.dispose());
});
window.addEventListener('pageshow', (e) => { if (e.persisted) scheduleMount(); });
