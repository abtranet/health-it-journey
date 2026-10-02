# Teaching quality and verification contract

Status: Proposal revision, October 1, 2026. Apply these requirements during later lesson authoring and implementation. No lesson, sandbox fixture, observed FHIR error, learner result, or live verification is claimed by this document.

## Outcomes and source evidence

Each lesson starts with “By the end, the learner can” followed by an observable action and success condition. Use verbs such as run, repair, trace, select, justify, annotate, and submit. The outcome/output matrix in `proposed-outline.md` covers all 18 units.

Work backwards from the checkable output: select only the concepts needed to produce it. Every standards detail and clinical interaction still needs a source reference. Instructional scaffolding, synthetic identity values, rubric criteria, and tool code can be authored; they must not introduce unsupported clinical or vendor behavior.

## Professional tasks with synthetic data

Realistic work means complete messages/documents, named fields, meaningful identifiers, runnable commands, and observable results. All patient data remains synthetic. Keep the source's workflow meaning while replacing its identifying values. Avoid filler values such as `foo/bar`, incomplete fragments presented as valid messages, and undocumented magical clients.

For the currently supported course, use one reproducible local tool environment for XML/XSD validation and source-bounded HL7 inspection. Record dependency versions, setup, one command per task, expected artifacts, and validation limits. Version-pin the environment when it is built; no supported version has been selected or tested at this proposal stage.

The user has requested HAPI and Synthea for future FHIR work. Record them as preferred tools, pending substantive R4 source, a selected endpoint/environment, capabilities, and a versioned synthetic data manifest. Do not generate arbitrary FHIR lessons from their names or pretend they were used in the initial review. Public-sandbox failure and downtime must be distinguishable from learner mistakes, with reproducible local fixtures for retrying the exercise.

A future FHIR exercise must state the request, expected response, standards version, server conditions, and success check. An outcome such as “write a conditional create that does not duplicate the selected patient when repeated” needs a specified identity predicate, controlled fixtures, verified server behavior, and an explicit claim boundary. Do not promise unconditional duplicate prevention. Transaction failure exercises must reproduce the actual sourced response and state changes; do not assume a server accepts an encounter without its referenced patient.

## Failure, explanation, attempt, check

Every concept begins with a problem from the lesson's source and case. Demonstrate it or show recorded evidence, then ask the learner to predict the consequence before explaining the tool. Distinguish an observed tool failure from a hypothetical review mistake.

Target each learning cycle to finish within ten minutes:

| Part | Target minutes | Required evidence |
| --- | --- | --- |
| Show the problem and ask for a prediction | 1 | Source-grounded input and a concrete consequence or observed failure |
| Explain only the needed concept | 2-3 | Link between the concept and the problem |
| Learner attempts the task | 3-4 | A runnable command or an analyst artifact to produce |
| Check, explain, and retry | 1-2 | Expected result, rationale, a common wrong approach, and a repair |

Longer lessons repeat the cycle. Break a large exercise into checkpoints; there must be no reading stretch longer than ten estimated minutes without learner action. Reading time estimates are planning estimates until beta learners provide timing evidence.

Keep the requested MDX sections: objectives, core content, examples, hands-on work, quiz, and takeaways. Inside core content, interleave short attempts and checks. Add an explanatory answer key and troubleshooting section. Project units also include requirements, cumulative starter/solution checkpoints, and acceptance criteria.

## One continuing workbench

Use the source-defined laboratory/patient-administration scenario and progression in `proposed-outline.md`. Every lesson produces a named artifact in the same dossier. The four projects are successive workbench milestones: validate XML, inspect v2 messages, trace ADT, and submit the order/result handoff.

Each milestone names the earlier artifact it consumes, explains how to verify it, and documents the newly added capability. Provide an equivalent checkpoint for learners who need to restart. Retain previous outputs instead of introducing a fresh repository or patient at each milestone.

The CDA and pharmacy readings remain bounded source-case reviews. They contribute analyst decisions and checklists to the handoff without inventing a combined clinical journey. The final capstone uses source-defined order/result behavior and assesses the accumulated work.

## Assessments and explanations

Use three to five application questions per lesson. Give the learner a message, document, request, transcript, or requirement and ask what to repair, run, select, or conclude. Distractors should represent common reasoning errors, not obviously absurd options.

After submission, explain the correct choice and why each wrong choice fails. Tie explanations to the supplied evidence. For practical exercises, provide the expected output, the reasoning, a diagnostic for common errors, and a way to retry. A reference solution alone is not an answer key.

Cumulative checks should use controlled variants of earlier fixtures so the learner must apply the rules. Mark deliberately invalid inputs clearly. All complete HL7 examples still require MSH first and valid delimiters; broken-message assessments must be tagged as invalid assessment fixtures and excluded from valid-example checks. Apply the same separation to invalid FHIR JSON/resource fixtures if sourced later.

## Proposed capstone rubric

Lesson 18 submits the continuing workbench, run instructions, reports, source/version references, and the analyst handoff. Proposed passing mark: 80/100, subject to calibration with the beta cohort. In addition, identity values must be synthetic, stated supported cases must pass, and every claimed fix must be reproduced. These are assessment requirements, not promises of a certificate.

Score each dimension at 0, 1, 2, or 3; awarded points = weight × level / 3. Sum first and round the total to one decimal place. Review the submitted evidence, not the appearance of the code.

| Dimension | Weight | Evidence |
| --- | --- | --- |
| Source-bounded order/result trace | 25 | Correct selected relationships and fields, tied to source examples and declared version |
| Reproducible validator/inspector runs | 20 | One documented run produces the expected fixture outcomes and preserves field structure |
| ADT/acknowledgment evidence | 15 | Earlier milestone checks are retained and their outcomes explained |
| Troubleshooting and repair | 15 | A controlled failure is diagnosed, the fix is justified, and the rerun verifies it |
| Analyst handoff and decision records | 15 | Exchange brief, diagrams, vocabulary register, scope, and validation limits support the final conclusion |
| Fixture provenance and consistency | 10 | Synthetic provenance, stable identity/fixture references, and consistent terminology and versions |

| Level | General standard |
| --- | --- |
| 0 | Missing evidence, incorrect result, or an unsupported claim |
| 1 | Partial artifact; important cases or explanations are missing |
| 2 | Main checks pass and are explained; minor reproducibility or documentation gaps remain |
| 3 | Every scoped check is reproducible, correctly explained, and traceable; limitations are explicit |

Provide a worked scoring example and common unsuccessful approaches during capstone authoring. Grade reasoning as well as results. Avoid rewarding a hardcoded successful report over a reproducible run.

## Troubleshooting evidence

Every lesson that runs a tool needs a troubleshooting section. Maintain an error log with the lesson/task, tool/server version, fixture ID, command/request, observed error, cause, fix, rerun outcome, date, and evidence path. Store raw logs privately until identifiers and credentials are removed; publish only safe evidence. Exact errors must come from actual runs, not be invented from memory.

The preliminary source review observed `SCHEMAV_ELEMENT_CONTENT` for `patient_list_002.xml` at lines 4, 19, and 34. The two other patient XML files passed the supplied XSD. This is the existing structural-error evidence; it is not evidence of a HAPI run, and the original patient values remain excluded. Reproduce the same structural cases with synthetic fixtures in the future chosen tool environment before publishing its error wording or fixes.

If a real error has not been observed yet, keep the example unverified and record the needed evidence. A timeout, endpoint outage, changed capability, or unavailable dependency belongs in the environment troubleshooting path. Avoid grading those conditions as a learner's standards error.

## Consistency contract

Create one glossary, fixture manifest, and environment manifest during implementation. Every lesson uses them.

| Item | Required convention |
| --- | --- |
| Synthetic identity | One primary synthetic patient, stable case/fixture IDs, and a crosswalk of its deliberate variant records |
| Clinical relationships | Only source-specified relationships; shared fixture labels do not assert conversions or clinical causality |
| Message versions | v2.8 teaching scope by default where supported; v2.9.1 comparisons are explicitly labeled |
| FHIR scope | R4 remains the proposed baseline; use of a later release requires a separate source and capability review |
| Code and commands | One language/style per tool stage, pinned dependencies, consistent naming, and identical setup variables |
| Sandbox | One documented FHIR environment if the future FHIR track is sourced; record endpoint and capabilities rather than scattering hardcoded URLs |
| Data provenance | Source path/hash/page for teaching behavior; generation version/seed/settings and dataset hash for generated synthetic fixtures |
| Assessment fixtures | Explicit valid/invalid roles; broken cases must not weaken checks on valid teaching examples |
| Terminology | Stable glossary terms for identifiers, events, message control IDs, placer/filler, and validation layers |

## Verification metadata and cadence

Do not use the source review date as a lesson verification date. Add `lastVerified`, `verificationStatus`, and a verification evidence reference to lesson metadata during authoring. Set `lastVerified` to null until the task and answer key have actually been run or reviewed. Set it to a calendar date only after the declared checks pass in the recorded environment.

The verification evidence records tool/server versions, standard version, fixture hash, checked commands, results, known limits, and reviewer. Non-executable analyst tasks are checked against their source and scoring guide. Runnable tasks require run evidence. The later content validator should reject a “verified” status without a date and evidence reference, while permitting clearly labeled drafts.

Proposed cadence: retest local runnable content on each content/dependency change and before release; retest live FHIR exercises monthly once that track exists, plus after a sandbox capability change. Prefer controlled fixtures and a local fallback so changing public state does not make tests misleading. A failed verification marks the lesson as needing review and records the failure instead of silently updating its date. Schedule implementation follows creation of the actual exercises and verification scripts; this document defines the cadence and does not claim that scheduled tests are running.

Track standards developments without silently changing the course baseline. An announced or future release does not make the current R4 tasks validated against that release.

## Beta feedback and revision

Run a beta with five to ten learners after the first complete draft and its verification pass. Observe attempts, including first-run setup, failed checks, time to a successful output, retries, and points where help is needed. Record consented observations without collecting patient data, credentials, or unnecessary personal information.

Use a feedback table: lesson/checkpoint, learner-reported or observed blocker, expected outcome, actual outcome, evidence, likely cause, proposed revision, owner, and retest status. Prioritize repeated blockers and failures that prevent completion. Distinguish wording, setup, tool availability, conceptual misunderstanding, and an incorrect answer key.

Revise the affected explanation/checkpoint, rerun its commands and answer key, and observe another learner attempt before closing the issue. Calibrate durations and the capstone rubric from these results. Label this stage as beta until complete; do not claim enrolled learners or observed results before they exist. Recruitment and scheduling are later delivery steps, not messages sent to learners by this proposal revision.

## Release checklist

A lesson is ready when its outcome is observable, every concept has a demonstrated reason to exist, action/check cycles fit the ten-minute target, commands and answer keys reproduce, assessments explain wrong choices, examples are synthetic and source-traceable, troubleshooting has actual evidence, terminology and fixtures are consistent, and verification metadata is honest. The first course release also needs the capstone rubric and a documented beta revision pass. Unsupported FHIR tasks stay in the source-needed backlog.
