# Proposed FHIR course outline

Status: Step 1 review proposal. Pause here before lesson content, MDX, projects or site changes. This outline supplements the earlier HL7 source review; it does not claim that either track has been implemented.

## Scope and order

Propose **17 units in two chapters: four fundamentals lessons and 13 cumulative project milestones**, including the capstone. Project classification is an editorial proposal, not a claim that 13 runnable projects were supplied. The source explicitly labels some exercises as projects and describes others as builds; implementation files are still missing.

Working track title: **FHIR R4 Integration Workbench**. Keep R4 4.0.1 as the intended baseline, with pinned SMART, Bulk Data, terminology and document-conversion versions. The attachment uses multiple release conventions and requires the corrections in `technical-review.md` before lesson authoring. Its verification dates cannot be carried forward.

The source's lessons 5-21 are numbered F01-F17 here for review. Final course IDs and the single free lesson are decided only after choosing whether this is a standalone FHIR course or a continuation of the earlier HL7 proposal. If standalone, F01 would be the sole free lesson. If combined, only global lesson 01 would be free; F01 would retain its global paid status. Do not create two free lessons or claim a combined 35-lesson course from two proposals.

This order moves source lesson 17 earlier so ADT writes gain lineage before downstream features. Source lesson 19 precedes bulk export and notifications so its test policy is reused across disclosure paths. Everything else retains the source's progression. Prerequisites are the earlier numbered units, plus bounded v2/XML/CDA preparation from the separately reviewed HL7 sources where indicated.

## One continuing project

Retain the source's analyst integration-hub scenario as an explicitly fictional teaching scenario. Replace the unproven patient/facility identities with a provenance-documented synthetic fixture set. Vendor names in the story do not establish vendor behavior. The same hub, patient crosswalk, terminology register, request client, policy adapter and evidence dossier continue through all units.

The resource fixture from F01 becomes F02's search input. F03 supplies writes and rollback/retry checks. F04 supplies vocabulary conventions. F05 adds ADT ingestion; F06 attaches lineage. F07-F10 add bounded views and document review to that same hub. F11 secures the existing dashboard; F12 replaces manual terminology checks with an adapter. F13 defines the sourced test policy consumed by F14-F15. F16 adapts the same client to a declared EHR environment. F17 grades the accumulated hub. Scheduling, medication and document case packets share conventions without inventing clinical relationships between them.

## Chapter 1: Fundamentals (`fundamentals`)

| Order | Title / proposed slug | Observable outcome | Why it earns its place | Checkable output | Source |
| --- | --- | --- | --- | --- | --- |
| F01 | Inspect and validate a Patient / `fhir-resources` | By the end, the learner can distinguish a resource from its datatype fragments and validate a controlled synthetic Patient against the declared R4 baseline. | A parseable payload is mistaken for a conformant resource. | Patient fixture, identifier crosswalk, validation report | `fhir-course-material.md`, source lesson 5, lines 38-105 |
| F02 | Retrieve a complete result set / `rest-and-search` | By the end, the learner can run a patient-scoped Observation search, follow every next link, and explain which time and reference fields the response uses. | The dashboard silently loses results after the first page. | Search client and pagination checks | `fhir-course-material.md`, source lesson 6, lines 106-160 |
| F03 | Write without duplicate patients or partial transactions / `safe-fhir-writes` | By the end, the learner can send a correct conditional Patient create and a transaction, then prove retry and rollback behavior with controlled test cases. | Retries duplicate identities; independent writes can leave partial state. | Write harness with zero, one, multiple-match and failed-transaction cases | `fhir-course-material.md`, source lesson 7, lines 161-212 |
| F04 | Preserve code meaning / `terminology-basics` | By the end, the learner can compare system, code and version, verify a display against its terminology source, and distinguish a translation result from proven equivalence. | A display and code disagree, or a broader concept is treated as equivalent. | Versioned terminology register and review decisions | `fhir-course-material.md`, source lesson 8, lines 213-286 |

## Chapter 2: Build and hand off the integration hub (`projects`)

| Order | Title / proposed slug | Observable outcome | Why it earns its place | Checkable output | Source |
| --- | --- | --- | --- | --- | --- |
| F05 | Ingest a bounded ADT sequence / `adt-feed-listener` | By the end, the learner can process sourced synthetic ADT fixtures into Patient and Encounter updates and prove the agreed replay behavior. | A replay produces another encounter or an update loses stored fields. | ADT stage extending the write harness | `fhir-course-material.md`, source lesson 9, lines 287-343 |
| F06 | Trace a hub write to its source / `audit-and-provenance` | By the end, the learner can attach Provenance to a hub-created record and follow its versioned target and source entity through the review log. | A changed record cannot be tied to the input that produced it. | Provenance checkpoint and audit design record | `fhir-course-material.md`, source lesson 17, lines 697-747 |
| F07 | Build a complete lab results view / `lab-results-dashboard` | By the end, the learner can display the synthetic patient's paginated results with system-aware grouping, effective-time handling and supported units. | Grouping by code alone combines different concepts or drops time variants. | Dashboard consuming the shared search client and trace IDs | `fhir-course-material.md`, source lesson 10, lines 344-396 |
| F08 | Check appointment and slot behavior / `appointments-and-slots` | By the end, the learner can build a structurally valid booked Appointment and test the sandbox's documented slot conflict and cancellation behavior. | A booking omits actual times or assumes the server reserves a slot automatically. | Scheduling checkpoint with observed behavior and explicit limitations | `fhir-course-material.md`, source lesson 11, lines 397-452 |
| F09 | Trace medication orders and dispensing / `medication-orders-and-dispense` | By the end, the learner can verify the example medication coding and follow the different order references used by dispense and administration records. | A drug display contradicts its code or the wrong reference field is queried. | Medication view plus terminology and reference checks | `fhir-course-material.md`, source lesson 12, lines 453-505 |
| F10 | Review a document conversion / `cda-to-fhir` | By the end, the learner can run a pinned converter on a synthetic C-CDA fixture and report its output version, retained context and declared validation limits. | Conversion is treated as proof of R4 conformance or entry ingestion. | Document review checkpoint retaining the original narrative and identifiers | `fhir-course-material.md`, source lesson 13, lines 506-550 |
| F11 | Launch a patient-scoped SMART app / `smart-on-fhir` | By the end, the learner can complete a tested SMART launch with state and PKCE and use returned context with only the granted scopes. | The app uses a hardcoded patient or accepts a mismatched authorization response. | Dashboard launch adapter and negative authorization checks | `fhir-course-material.md`, source lesson 14, lines 551-595 |
| F12 | Use a terminology service deliberately / `terminology-service` | By the end, the learner can expand a pinned ValueSet with the operation's paging parameters and review translate and validate-code responses against their declared scope. | A large expansion is truncated or translation confidence is overstated. | Terminology adapter extending the register from unit 04 | `fhir-course-material.md`, source lesson 15, lines 596-650 |
| F13 | Apply a sourced disclosure policy / `consent-management` | By the end, the learner can evaluate a sourced test policy over valid Consent fixtures and show allowed and denied outcomes through a shared disclosure check. | A stored Consent exists but the application never applies it. | Policy checkpoint used by the existing app and subsequent export/notification stages | `fhir-course-material.md`, source lesson 19, lines 794-850 |
| F14 | Complete a bulk export / `bulk-data-export` | By the end, the learner can start an asynchronous export, poll its job, read every output file and demonstrate the shared test policy's effect. | The client treats a job response as data or a disclosure path bypasses checks. | Export adapter, NDJSON manifest checks and policy tests | `fhir-course-material.md`, source lesson 16, lines 651-696 |
| F15 | Receive and deduplicate notifications / `subscriptions-and-webhooks` | By the end, the learner can create a valid R4 Subscription in a capable environment and demonstrate safe processing of repeated notifications under the shared test policy. | The receiver treats repeated delivery as another result or assumes a delivery guarantee. | Webhook adapter with observed payloads, retry cases and policy tests | `fhir-course-material.md`, source lesson 18, lines 748-793 |
| F16 | Adapt to a declared EHR sandbox / `ehr-sandbox-integration` | By the end, the learner can inspect the target CapabilityStatement and adapt the same app to its documented search, profile and authorization constraints. | The app assumes every endpoint has the same capabilities and credentials. | Capability matrix and sandbox adapter for the existing app | `fhir-course-material.md`, source lesson 20, lines 851-884 |
| F17 | Demonstrate and hand off the integration hub / `hospital-integration-hub` | By the end, the learner can run the sourced integration flows, reproduce a controlled failure, and submit a traceable handoff with replay, scope and disclosure evidence. | A polished demo hides duplicate data, missing lineage or a bypassed policy. | Assembled hub, evidence dossier, runbook and rubric submission | `fhir-course-material.md`, source lesson 21, lines 885-916 |

## Prerequisite and source boundaries

- F05 requires complete, version-pinned synthetic v2 fixtures, documented Patient/Encounter mappings and a replay policy. The earlier HL7 inventory supports message anatomy and ADT concepts, but it does not supply this executable mapping or transport implementation.
- F08 is a capability/behavior test until actual slot-reservation behavior is documented and reproduced. Do not promise conflict prevention from generic FHIR writes.
- F10 requires a synthetic C-CDA document and a pinned converter. The cited converter describes R4B; output is not silently relabeled R4. Decide on a sourced R4 conversion path or keep the task a reviewed conversion comparison.
- F11, F12, F14 and F15 need their specialized servers and configuration. A basic local HAPI server is not an established fallback for all of them.
- F13 teaches an explicit, sourced test policy. The attachment does not establish legal compliance, universal deny precedence or automatic enforcement by FHIR servers.
- F17's proposed lab-order demo lacks an order creation/result ingestion source path. Keep that flow on hold or scope the finale to supplied result fixtures after outline review. Do not invent the missing workflow.

## Authoring contract after outline review

Every lesson needs three to five observable objective bullets, pain before the mechanism, source-grounded content, valid resource/message examples, attempt/check cycles within ten minutes, explanatory answer keys, actual troubleshooting evidence, three to five application MCQs with explanations for every option, and key takeaways. Every project also needs requirements, cumulative starter and reference-solution checkpoints and reproducible acceptance checks.

The first draft must retain `TODO(abdel)` callouts for missing source. Estimated study time will combine finished reading and measured exercise work; there is no video-time claim. `lastVerified` remains null until the actual task and answer key pass in the recorded environment. Shared source paths must point to approved, sanitized repository assets rather than an uncommitted Downloads path.

See `teaching-quality.md` for the proposed capstone rubric, verification cadence and beta feedback plan; see `gap-review.md` for which old source gaps this attachment now fills. Review this proposal before content authoring. No lesson files, app changes, deployment or public sandbox writes belong to this checkpoint.

## Acquired source supplement (2026-10-02)

The later request to find sources adds the primary materials in `source-acquisition.md` and the repository source package. Earlier rows retain the original attachment ranges. Use both those drafts and the following sources when authoring after outline review. Acquisition does not supply course run results, complete cumulative projects or beta observations.

| Unit | Additional source IDs / assets |
| --- | --- |
| F01 | E01,E05; MITRE synthetic R4 fixture; pinned Synthea generator |
| F02 | E03,E10,E36; controlled Observation records and client-js |
| F03 | E02,E04; synthetic transaction Bundle as an input, not proof of retry correctness |
| F04 | E21,E30-E33; retained NLM version/corrected coding responses |
| F05 | E02,E06-E09; Microsoft ADT templates; bounded synthetic messages still need authoring |
| F06 | E07,E24,E25; converter Provenance source and synthetic Provenance |
| F07 | E03,E06,E07,E10,E12; synthetic Observation/DiagnosticReport records |
| F08 | E13,E14; selected server behavior still needs execution evidence |
| F09 | E15-E17,E30,E31; synthetic MedicationRequest/Administration and corrected NLM products |
| F10 | E05,E18,E39; MITRE synthetic C-CDA and Microsoft R4 extraction candidate; document/Composition behavior still requires verification |
| F11 | E19,E20,E36; SMART client-js and MITRE example app |
| F12 | E21,E22,E30-E33; target terminology release/maps remain implementation checks |
| F13 | E27-E29; published policy examples need a bounded course test contract |
| F14 | E23; SMART bulk-data-server, with its distinct data/REST limitations |
| F15 | E26; HAPI JPA starter REST-hook configuration |
| F16 | E03,E19,E20,E34,E36; actual EHR access/launch remains untested |
| F17 | All relevant earlier sources, especially E02,E06-E12,E23-E29; the order/result mappings now exist but the demo flow remains implementation work |

Source availability now supports selecting a sourced R4 document-conversion path and order/result mapping instead of leaving those items without reference material. The other earlier scope boundaries remain until their source-specific fixtures and checks exist. Keep `lastVerified` null and unsupported marketing features disabled.
