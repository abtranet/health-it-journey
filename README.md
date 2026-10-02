# Health IT Journey — HL7 & FHIR Course Landing Page

Course landing page for learning HL7 & FHIR healthcare interoperability, styled after the three.js Journey course pages.

## Live site
https://health-it-journey.vercel.app

## Deploy
Static files deployed directly to Vercel (`health-it-journey` project, production).

## Files
- `index.html` — the full landing page (single file; the hero illustration loads from the live Vercel deployment)
- `particle-hero.js` — interactive WebGPU particle-sphere hero background (three.js `three/webgpu` + TSL, falls back to WebGL2). Tunables live in the `CONFIG` object at the top.
- `particle-hero-loader.js` — tiny loader: waits for page load + idle, skips the effect on software-only GPUs, disposes on navigation.

three.js is pinned via the import map in `index.html` (`three@0.186.1` on jsDelivr); there is no build step.

## Local preview
ES modules need HTTP (not `file://`):

```sh
python3 -m http.server 8000   # or: npx serve .
# open http://localhost:8000
```

Debug flags: `?particles=force` skips the hardware-GPU check, `?webgl` forces the WebGL2 backend.
