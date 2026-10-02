# Preliminary PHI and synthetic-data review: FHIR attachment

Review date: 2026-10-01. Scope: all 929 lines of the single attachment, including prose, tables, code fences and links. This is an identity/provenance screening review, not a legal classification or a complete de-identification determination. No identity values from the source are reproduced here.

The draft labels its main person a test patient. No generation manifest, seed, dataset hash or other provenance confirms that the name, MRN, birth date and address were generated together. Treat those values as unresolved until provenance is established or the fixture is replaced. Nothing in this review asserts that they are real patient records.

| Location in `fhir-course-material.md` | Identity-like or sensitive pattern | Disposition before lesson authoring |
| --- | --- | --- |
| 7 | Named facility and vendors assigned a specific workflow | Establish explicitly fictional scenario status; use synthetic facility labels and do not attribute unverified behavior to a real organization. |
| 11 | Named test person combined with MRN and date of birth | Exclude original values; replace from a documented synthetic fixture or establish generation provenance. |
| 56-75, especially 59-73 | Full Patient object with name, identifier, birth date and street address | Exclude complete original object from lessons and public sandboxes; generate a safe fixture with the same required structural teaching cases. |
| 79 | Exercise tells learners to fetch a real patient from public sandbox state | Replace with a controlled synthetic fixture selection; public accessibility is not evidence of synthetic origin. |
| 181-187 | Secondary demonstration name and identifier | Replace with deliberate, labeled variants of the same generated fixture set; document which fields differ and why. |
| 416-429, 466-482, 710-724, 807-819 | Patient/resource references used in example records | Do not resolve references to uncontrolled public records; remap to controlled fixture IDs. |
| 748-793 | Notification/webhook handling could disclose resource payloads | Publish only generated fixture payloads and redacted logs. The placeholder webhook URL is not a working endpoint. |
| 794-850 | Patient-specific privacy preferences in narrative | Keep only a declared fictional policy test case tied to generated fixtures; avoid claiming real consent or legal status. |
| 885-913 | Repeated patient scenario and certificate assessment story | Use the shared generated scenario without original identity values or implied real clinical events. |

The document repeats the main name throughout lessons, so replacing line 11 alone is insufficient. Use fixture references consistently across objectives, examples, questions, answer keys and the finale. Numeric resource IDs by themselves are not proof of PHI, but they must not silently connect to public patient state.

No actual access token, client secret or password was found in this attachment. Token flow discussion and endpoint URLs are configuration references. Verify future screenshots, logs, headers and generated assets separately before publication. External datasets and downloaded references were not screened; they were not supplied as local files in this review.

## Required disposition

> TODO(abdel): source needed for synthetic provenance of the primary patient/facility scenario, or a pinned generated replacement fixture with stable identifiers, seed/settings and a dataset hash.

Keep the original attachment outside the repository. Later `sourceFiles` entries must point to approved source excerpts or sanitized repository assets whose relationships to the original hash and line ranges remain documented. Do not solve traceability by publishing this raw attachment.
