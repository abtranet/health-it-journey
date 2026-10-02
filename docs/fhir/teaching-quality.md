# FHIR authoring and release standards

These requirements apply after outline review. They implement the user's ten teaching standards while keeping the supplied attachment as evidence and avoiding unsupported workflow or vendor assumptions. No lesson content or runnable project is created at this checkpoint.

## 1. Observable outcomes

Each unit opens with “By the end, the learner can” followed by an observable action and a checkable output. The 17 outcome contracts and source mappings are in `proposed-outline.md`. Convert each contract into three to five objective bullets when authoring. Avoid “understand,” “learn about” and untestable claims. Completion means the learner can produce the stated result and explain a failed case, not merely read it.

## 2. Real tools and controlled synthetic data

Use realistic requests, resources and tasks grounded in the source, backed by a controlled synthetic dataset. Pin generation tool/version, seed/settings, dataset hash and identifiers. A realistic example can be synthetic; “real data” must not mean uncontrolled patient records. Keep one primary fixture plus clearly labeled variants for match, pagination, vocabulary, time and failure cases. Do not copy original identity values without provenance review.

Use one primary R4 store and explicit adapters for specialized SMART, terminology, bulk and notification environments. Record their versions and tested capabilities. HAPI metadata availability does not establish a SMART authorization server or a working local fallback. Prefer a pinned isolated environment for reproducible work; public examples must use controlled fixtures and record permission/setup requirements.

Make the requests runnable in one chosen style. Postman `{{hapi}}` placeholders are not shell variables. Show environment setup once and use the same conventions throughout. Complete payloads and executable code are required for runnable checkpoints; label conceptual fragments and pseudocode clearly.

## 3. Pain before the tool

Open with a bounded analyst failure from the source, then show the mechanism that addresses it. F03 begins with duplicate or partial writes; F02 with incomplete result sets; F06 with missing lineage. Do not present the source's death, breach or vendor behavior stories as observed real events. Label fictional cases and avoid clinical or legal conclusions unsupported by supplied evidence.

A failure demonstration must be reproduced against a controlled fixture before publishing its exact error or result. Until then, call it a proposed case rather than an observed sandbox failure.

## 4. Action and explanatory answer keys

Use a short concept, an attempt and a check within every ten minutes of estimated study. Each attempt names the earlier artifact it consumes and the new artifact it produces. Provide expected output, the reason it is correct, common wrong approaches, why they fail and how to retry. Existing source answer keys are draft evidence; correct the protocol errors before using them.

Maintain the requested MDX structure: objectives, source-grounded core content, examples, hands-on work, three to five Quiz MCQs and key takeaways. Add explanatory answer keys and troubleshooting; interleave attempts within longer core sections. Measure the exercise time during beta instead of assigning landing-page placeholder durations.

## 5. One cumulative hub

Use the progression in `proposed-outline.md`. Every milestone extends the same hub and evidence dossier. Keep stable fixtures, clients, IDs, terminology, lineage and policy checks. Provide cumulative starter/solution checkpoints so a learner can recover without beginning an unrelated project.

Do not claim that sharing a patient label proves a clinical relationship between lab, medication, scheduling and document case packets. Each remains bounded to its sourced contract. The capstone consumes earlier work; it must introduce no unsourced workflow or new integration stack.

## 6. Application assessments and capstone rubric

The attachment's 16 teaching lessons each have two open-ended self-check questions. They are not the requested three to five multiple-choice questions. Author application questions that ask the learner to debug a request, distinguish a resource from a datatype, interpret a response, choose a safe retry or diagnose a missing policy path. Every correct option and distractor gets an explanation. Keep deliberately invalid assessment fixtures separate from valid teaching examples.

Proposed capstone pass: 80/100 after calibration with five to ten beta learners, plus all mandatory gates below. Use the six source rubric dimensions, strengthened to reject duplicated data and incomplete disclosure/scope coverage. Score each at level 0-3; points = weight × level / 3. Sum before rounding to one decimal place.

| Dimension | Weight | Evidence |
| --- | --- | --- |
| Source-bounded flow correctness | 25 | Every agreed flow works on controlled fixtures; no silently stubbed source claim |
| Replay and idempotence | 20 | Repeat ADT and notification cases have the agreed effect; conditional matching and multiple-match failures are explained |
| Source traceability | 15 | Scoped hub writes connect through Provenance to source fixture/version and retained evidence |
| Test-policy enforcement | 15 | Allowed/denied cases pass across REST, export and notification paths under the same sourced policy |
| SMART access boundaries | 15 | Requested/granted scopes, patient context, state and PKCE checks reproduce; secrets are excluded |
| Demo and handoff | 10 | Runbook reproduces the assembled hub and a controlled failure with explanation and recovery evidence |

| Level | Scoring standard |
| --- | --- |
| 0 | Missing, materially wrong or unsupported result |
| 1 | Partial artifact; important cases fail or lack explanation |
| 2 | Main scoped checks pass with minor documentation gaps |
| 3 | All scoped checks pass, reproduce and have source/evidence links; limits are explicit |

Mandatory gates: no unproven identity values; no duplicated Patient/Encounter effect under the agreed replay cases; no silent partial transaction success; all three disclosure paths satisfy the sourced test policy; authorization rejects wrong context/state and respects granted scopes; no embedded credentials; every claimed fix has a successful rerun. A high score cannot override a failed gate. Compliance and certificate issuance are not claimed by this rubric.

During authoring, provide a worked scoring example, common unsuccessful submissions and their explanations. Ensure the agreed capstone scope is achievable from the earlier checkpoints and required source assets.

## 7. Troubleshooting with actual evidence

The attachment's troubleshooting tables are useful draft prompts, not proof that the errors were observed. Several include false causes or fixes (Observation search, conditional writes, scheduling, terminology and Consent). Do not publish them unchanged.

Record task, fixture ID/hash, tool/server version, request, actual response/error, cause, repair, rerun result, date and evidence path. Redact identifiers and credentials before publishing logs. Distinguish standards errors, application-policy errors and unavailable infrastructure. An outage must not be graded as a learner mistake. Use `TODO(abdel)` where an observed example is missing.

## 8. Consistency

Maintain one glossary, fixture manifest and environment manifest. Fix terms for resource logical ID versus business identifier, patient versus subject search, authorizingPrescription versus request, document versus transaction Bundle, CodeSystem validation versus ValueSet membership, and profile declaration versus conformance validation.

Use one code style and endpoint-variable convention. Treat synthetic variants as named test cases, not arbitrary new people. Record FHIR R4 4.0.1 and each chosen IG version; keep R4B converter output explicitly separate until a sourced version decision is made. Reset/seed data so exercises do not depend on yesterday's public sandbox state.

## 9. Honest verification and update cadence

All 17 source “last verified” labels say 2026-10-02. They are unsupported by supplied logs and later than this local review date. Set future lesson `lastVerified` to null and `verificationStatus` to draft until the task and explanatory answer key have actually passed. Source review and GET metadata checks are not lesson verification.

Verification evidence must record source hash/range, standard/IG versions, fixtures, dependencies, endpoint capabilities, requests, outputs, reviewer and limits. JSON parsing is only the first layer: run an R4 validator with pinned packages and terminology scope; also check the source-specific business and policy acceptance cases. A resourceType field alone does not establish conformance.

Proposed cadence: run local fixtures and acceptance checks on content/dependency changes and before release; retest live integrations monthly and after changed capabilities; recheck version/vendor claims before publication. Store failures and mark affected lessons as needing review rather than refreshing their dates. A later standards release does not silently change the course baseline. Scheduling begins after executable checks exist; no automation was created during this source review.

## 10. Beta feedback and revision

Recruit five to ten learners after the first verified draft. Observe setup, each attempt/check cycle, time to a correct result, retries and blockers. Record lesson/checkpoint, expected and actual result, evidence, likely cause, revision, owner and retest status without collecting patient data or credentials.

Prioritize blockers that prevent completion or reveal incorrect answer keys. Revise the relevant section, rerun the task and observe another attempt before closing the issue. Calibrate timing and rubric scores from those results. Keep course status beta until the review and revision pass is recorded; no recruitment, learner messaging or completed beta results are implied by this plan.

## Source still needed

> TODO(abdel): source needed for beta attempt observations and timing evidence before claiming calibrated lesson durations, completed learner feedback or validated capstone thresholds.

## Source acquisition update (2026-10-02)

The user subsequently requested external sources. See `source-acquisition.md`, `source-gap-status.md` and `external-source-inventory.md` for newly acquired primary references, pinned code and synthetic assets. The earlier source-only findings and callouts above remain a historical checkpoint. Retrieval is not lesson verification.
