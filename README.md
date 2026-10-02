# Health IT Journey — HL7 & FHIR Course Landing Page

Course landing page for learning HL7 & FHIR healthcare interoperability, styled after the three.js Journey course pages.

## Live site
https://health-it-journey.vercel.app

## Deploy
Static files deployed directly to Vercel (`health-it-journey` project, production).

## Files
- `index.html` — the full landing page (single file; the hero illustration loads from the live Vercel deployment)

## Hero fireball
The hero background is a port of the WebGPU & TSL fireball from three.js Journey: 6000 GPU-simulated spheres that heat up when the cursor pushes them. It loads three.js r184 from jsDelivr and only runs where WebGPU is available (and motion isn't reduced); other browsers keep the 2D particle field.
