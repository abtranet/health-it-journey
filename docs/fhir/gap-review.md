# FHIR source and landing-page gap review

Baseline landing page: `index.html`, repository commit `a8293b94abc1dc87a134cfa66e0a9fad7a059a78`, curriculum lines 731-765. The repository is a static HTML site with a README. It has no Next.js application, package manifest, lesson pages or runnable projects at this review checkpoint.

## Every current curriculum lesson

“Draft coverage” means this attachment has substantive teaching prose and exercises, not verified or implemented lesson content. Line ranges and proposed units are listed in `source-inventory.md`. Technical and provenance blockers appear in the companion reviews.

| Current ID | Current landing-page title | Source status after this attachment |
| --- | --- | --- |
| 01 | The healthcare data landscape | No source in this attachment; supported separately by the earlier HL7 inventory. |
| 02 | HL7v2 anatomy: segments, fields, messages | No source in this attachment; supported separately by earlier v2 readings. |
| 03 | Parsing pipe-delimited messages | No source in this attachment; earlier v2 readings support selected parsing rules, not a supplied finished parser. |
| 04 | Patient identity & ADT workflows | No dedicated source in this attachment; earlier ADT readings support a bounded teaching scope. |
| 05 | FHIR resources 101 | Draft coverage in source lesson 5; proposed F01. Corrections, fixtures and execution checks still required. |
| 06 | REST & search: reading data | Draft coverage in source lesson 6; proposed F02. Corrections, fixtures and execution checks still required. |
| 07 | Writing data: create, update, transactions | Draft coverage in source lesson 7; proposed F03. Corrections, fixtures and execution checks still required. |
| 08 | Terminologies: SNOMED, LOINC, ICD-10 | Draft coverage in source lesson 8; proposed F04. Corrections, fixtures and execution checks still required. |
| 09 | Real-time ADT feed listener | Draft coverage in source lesson 9; proposed F05. Corrections, fixtures and execution checks still required. |
| 10 | Lab results dashboard | Draft coverage in source lesson 10; proposed F07. Corrections, fixtures and execution checks still required. |
| 11 | Scheduling: appointments & slots | Draft coverage in source lesson 11; proposed F08. Corrections, fixtures and execution checks still required. |
| 12 | Medication orders & dispense | Draft coverage in source lesson 12; proposed F09. Corrections, fixtures and execution checks still required. |
| 13 | Clinical documents: CDA to FHIR | Draft coverage in source lesson 13; proposed F10. Corrections, fixtures and execution checks still required. |
| 14 | SMART on FHIR app | Draft coverage in source lesson 14; proposed F11. Corrections, fixtures and execution checks still required. |
| 15 | Terminology service integration | Draft coverage in source lesson 15; proposed F12. Corrections, fixtures and execution checks still required. |
| 16 | Bulk data export | Draft coverage in source lesson 16; proposed F14. Corrections, fixtures and execution checks still required. |
| 17 | Audit events & provenance | Draft coverage in source lesson 17; proposed F06. Corrections, fixtures and execution checks still required. |
| 18 | Subscriptions & webhooks | Draft coverage in source lesson 18; proposed F15. Corrections, fixtures and execution checks still required. |
| 19 | Consent management | Draft coverage in source lesson 19; proposed F13. Corrections, fixtures and execution checks still required. |
| 20 | EHR sandbox integration | Draft coverage in source lesson 20; proposed F16. Corrections, fixtures and execution checks still required. |
| 21 | Capstone: hospital integration hub | Draft coverage in source lesson 21; proposed F17. Corrections, fixtures and execution checks still required. |

The earlier statement “no substantive FHIR source” was accurate for the original HL7 folder. This attachment changes that finding for the 17 FHIR topics. It does not establish that the earlier four lessons already exist as working course pages, despite the attachment's introduction. Keep the old reports as historical evidence of the original source review.

## Source topics without a dedicated current lesson

| Source coverage | Proposed destination / unresolved scope |
| --- | --- |
| Shared scenario, patient identity, endpoints and version note, lines 5-37 | Cross-course setup/fixture/environment manifest, not an extra counted lesson. Needs provenance and dated capability evidence. |
| Resource profiles and conformance, source lesson 5 and EHR lesson 20 | F01/F16 checkpoints; source is insufficient for a full profiling/US Core implementation lesson. |
| Conditional operations, pagination, transaction rollback and version behavior | F02/F03 checkpoints; repair the protocol examples before authoring. |
| Notification retry/deduplication, privacy across exports and webhooks | F13-F15 acceptance cases; source lacks executable fixtures and concrete policy behavior. |
| AuditEvent alongside Provenance | F06 review scope; Provenance has an example but AuditEvent has no supplied implementation. |
| Payer feeds and homegrown scheduler in introductory story | No supplied payer interface or v2 scheduling implementation; retain only clearly fictional context, not a promised build. |
| Lab order placement in capstone demo | Missing sourced order-to-result ingestion path. Hold this part of the demo. |
| Quick reference, lines 917-929 | Reference index; external links do not become authored units or implementation assets by themselves. |

## Claims to keep disabled in future course configuration

These are proposed config requirements, not flags already implemented. All named marketing features default false until backed by evidence. Future counts and total estimated study time are computed from authored frontmatter; today's proposal counts must not become sales claims.

| Claim | Evidence supplied? | Proposed course.json treatment |
| --- | --- | --- |
| “23 hours of video” | No supplied videos, runtime manifest or recording assets | `features.videoHours: false`; omit the claim. Later display measured supplied video time only. |
| 21 lessons / 2 chapters / 13 projects | Existing labels are placeholders. New proposal has 17 units, not publishable files | Compute counts from content; disable `features.publishedCurriculumCounts` until implemented. |
| Trustpilot badge / reviews | No verified profile or authorized review data | `features.trustpilot: false` |
| Certificate, including “with distinction” in attachment | No issuing process or evidence; proposed rubric needs stronger gates | `features.certificate: false` |
| Discord community | No supplied active community/access process | `features.community: false` |
| “VAT incl.” | No tax or checkout configuration evidence | `features.vatIncluded: false` |
| “Health IT Fundamentals” bundle | No existing bundled course supplied | `features.bundle: false` |
| Live sandbox verification | Future verification labels without logs; metadata reads are not lesson runs | `features.verifiedLessonBadge: false`; null `lastVerified` until task evidence exists |

Do not set price, completed learner counts, completion certificates or test results from the attachment's prose. Retain any site price only as a separately confirmed product decision; the source does not establish it. The data-driven site, route/access stub, Quiz component, content validator and build/click checks remain future implementation work after outline review.

## Missing-source backlog

> TODO(abdel): source needed for complete synthetic v2 input messages, a versioned ADT-to-Patient/Encounter mapping, replay/identity rules and the runnable listener transport contract.

> TODO(abdel): source needed for the lab-order placement and order/result ingestion path promised by the capstone, or a confirmed scope limited to supplied synthetic result fixtures.

> TODO(abdel): source needed for a pinned synthetic C-CDA fixture, converter instructions, output-version decision and validation profiles for document conversion.

> TODO(abdel): source needed for a reviewed test disclosure policy and expected outcomes across REST, export and notification paths; the attachment's legal assertions and conflict rule are not an implementation policy.

> TODO(abdel): source needed for a synthetic dataset manifest, stable patient/resource crosswalk, system/code/time/unit variants and expected query outputs.

> TODO(abdel): source needed for reproducible SMART/EHR registration and launch configuration, specialized server capabilities and a documented fallback environment for each exercise.

> TODO(abdel): source needed for observed sandbox requests, responses and errors with versions, dates, synthetic fixture IDs, fixes and successful reruns.

> TODO(abdel): source needed for terminology versions and verified medication codes, ValueSet/ConceptMap fixtures, licensing constraints where applicable and expected operation results.

> TODO(abdel): source needed for measured appointment/slot reservation behavior, webhook delivery/payload behavior and export job/file examples on the selected servers.

> TODO(abdel): source needed for concrete AuditEvent cases and the source-entity traceability contract needed to substantiate the promised lineage.

> TODO(abdel): source needed for complete cumulative starter/solution projects, run instructions and acceptance evidence; existing snippets and pseudocode are not implementation assets.

> TODO(abdel): source needed for dated primary evidence before retaining version-adoption, vendor-deprecation, sandbox-population, certificate, community, reviews, bundle or tax claims.
