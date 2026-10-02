# Proposed source-led course outline

Status: Revised Step 1 proposal incorporating the requested teaching standards. Stop here for outline review. No lesson MDX, starter code, solution code, course configuration, or site implementation has been written.

## Recommended scope

Propose **18 units in two chapters: 14 teaching lessons and four project milestones**. These are planned units, not finished products or publishable landing-page counts. Only lesson 01 will be free. The supplied source supports an HL7 v2 and CDA fundamentals course with practical exercises. A suitable working display title is **Healthcare Interoperability: HL7 v2, XML, and CDA**. Keep `hl7-fhir` as the technical course identifier if needed, while avoiding a promise of an implemented FHIR course.

Hold FHIR teaching and the current advanced integration projects outside the active outline until substantive source exists. The FHIR study guide can be an optional exam-reading roadmap, clearly labeled as such. Its links and short UML illustrations are not a source for complete R4 implementation lessons.

Do not carry the placeholder durations forward. Estimate each lesson from its finished reading and exercise content; label totals as estimated study time. Use measured runtime only for an actual supplied video. Project time includes working through the project and is not video time. No duration totals are claimed at this stage.

## Ordered units and source mapping

Source IDs link to exact relative paths in `source-inventory.md`. Each row identifies its primary teaching reading first, followed by supporting assets or specification references. Order is also the proposed prerequisite order; projects name their prerequisites below.

### Chapter 1: Fundamentals (`fundamentals`, directory `01-fundamentals`)

| ID / order | Title | Proposed slug | Source files | Scope |
| --- | --- | --- | --- | --- |
| 01 | Map the healthcare exchange | `healthcare-data-landscape` | [S40](source-inventory.md#s40), [S34](source-inventory.md#s34), [S29](source-inventory.md#s29), [S08](source-inventory.md#s08), [S33](source-inventory.md#s33) | Use pp. 5-20 of the standards reading and its supplied scenarios. Separate application boundaries, exchanges, and standards. First and only free lesson. |
| 02 | Specify codes without losing their meaning | `controlled-vocabularies` | [S40](source-inventory.md#s40), [S11](source-inventory.md#s11), [S33](source-inventory.md#s33) | Use pp. 21-41: SNOMED CT, ICD, LOINC, other vocabularies, and CTS concepts. Do not expand this into a FHIR terminology integration. |
| 03 | Draw the exchange responsibilities | `reading-uml-models` | [S41](source-inventory.md#s41), [S35](source-inventory.md#s35) | Use class, use case, sequence, and state diagrams. Use the activity as a modeling-method reference; learner work stays in the supplied interoperability scenario. FHIR diagrams on pp. 30-31 are historical illustrations, not verified R4 JSON definitions. |
| 04 | Validate XML against the supplied schema | `xml-structure-and-schemas` | [S42](source-inventory.md#s42), [S39](source-inventory.md#s39), [S38](source-inventory.md#s38), [S36](source-inventory.md#s36), [S37](source-inventory.md#s37) | Use well-formedness, namespaces, DOM, XSD, XPath, and XSLT sections. Replace all patient/facility values before using examples. |
| 05 | Locate fields in a complete HL7 message | `hl7v2-anatomy` | [S43](source-inventory.md#s43), [S12](source-inventory.md#s12), [S52](source-inventory.md#s52), [S54](source-inventory.md#s54) | Use pp. 8-18 of the v2 introduction. Explain message/segment structure and field positions using source-grounded synthetic examples. |
| 06 | Decode fields and match acknowledgments | `hl7v2-encoding-and-acknowledgments` | [S43](source-inventory.md#s43), [S12](source-inventory.md#s12), [S09](source-inventory.md#s09), [S03](source-inventory.md#s03), [S05](source-inventory.md#s05), [S53](source-inventory.md#s53) | Use the remaining encoding, data-type, escape, and acknowledgment sections. Keep source versions explicit. This is the parsing prerequisite. |
| 07 | Trace the supplied ADT events | `patient-identity-and-adt` | [S45](source-inventory.md#s45), [S55](source-inventory.md#s55), [S13](source-inventory.md#s13), [S51](source-inventory.md#s51), [S53](source-inventory.md#s53) | Use the teaching reading pp. 8-19 and ADT definitions: A01/A02/A03/A08, patient identifiers, and visit information. Recreate example values synthetically. |
| 08 | Link an order to its observations | `orders-and-observation-results` | [S45](source-inventory.md#s45), [S15](source-inventory.md#s15), [S18](source-inventory.md#s18) | Use pp. 20-37 and 40-60: placer/filler, ORC, OBR, OBX, and source-specified order/result messages. No dashboard or FHIR mapping is supplied. |
| 09 | Distinguish pharmacy message responsibilities | `pharmacy-messages` | [S45](source-inventory.md#s45), [S14](source-inventory.md#s14) | Use pp. 38-39 and the pharmacy reference. Teach v2 pharmacy structures and relationships, without inventing FHIR medication behavior. |
| 10 | Write an interface test and handoff plan | `planning-and-testing-interfaces` | [S44](source-inventory.md#s44), [S34](source-inventory.md#s34), [S10](source-inventory.md#s10), [S04](source-inventory.md#s04) | Use planning, functional/technical design, testing, rollout, and documentation. The two one-page standard files are pointers to missing companion specifications, not full conformance or transport guides. |
| 11 | Justify a local extension | `local-extensions-and-z-segments` | [S47](source-inventory.md#s47), [S12](source-inventory.md#s12) | Use pp. 3-11: when extensions are appropriate and how the source describes them. Preserve any example as a teaching convention, without claims about vendor-specific behavior. |
| 12 | Inspect a message encoded in XML | `hl7v2-xml` | [S48](source-inventory.md#s48), [S42](source-inventory.md#s42) | Use pp. 5-28: message wrappers, segment groups, fields/components, processing rules, and local extensions. This is v2 XML, not FHIR JSON. |
| 13 | Choose message or document exchange | `clinical-documents-and-cda` | [S49](source-inventory.md#s49), [S20](source-inventory.md#s20) | Use messages versus documents, CDA R2 structure, document exchange, and validation levels. This does not teach CDA-to-FHIR conversion. |
| 14 | Inspect a CDA document for handoff | `cda-headers-narrative-and-entries` | [S50](source-inventory.md#s50), [S49](source-inventory.md#s49) | Use the supplied educational scenario, header/body/entry sections, and OID appendix. Do not claim implementation-guide conformance or reproduce original identity values. |

### Chapter 2: Build and hand off the integration workbench (`projects`, directory `02-projects`)

These four milestones assemble one integration workbench and its analyst handoff. Each consumes the previous outputs. They will be authored from the source rules and examples; no starter or reference solution exists in the supplied folder. Lesson 18 is the rubric-graded capstone, scoped to the supplied order/result workflow.

| ID / order | Title | Proposed slug | Source files | Scope |
| --- | --- | --- | --- | --- |
| 15 | Build the XML validation stage | `xml-patient-list-validator` | [S42](source-inventory.md#s42), [S39](source-inventory.md#s39), [S38](source-inventory.md#s38), [S36](source-inventory.md#s36), [S37](source-inventory.md#s37) | Create a local XML/XSD validator around the supplied schema rules with synthetic fixtures. The source has two passing XML files and one failing XML file; preserve those structural cases, not their values. |
| 16 | Build the HL7 inspection stage | `hl7v2-message-inspector` | [S43](source-inventory.md#s43), [S12](source-inventory.md#s12), [S09](source-inventory.md#s09), [S05](source-inventory.md#s05) | Create a local inspector for the taught delimiter hierarchy and selected fields, with whole synthetic messages. Acceptance checks are limited to source-defined cases; no claim of complete HL7 conformance. |
| 17 | Build the ADT trace stage | `adt-event-sequence` | [S45](source-inventory.md#s45), [S55](source-inventory.md#s55), [S44](source-inventory.md#s44), [S53](source-inventory.md#s53) | Create an offline exercise that inspects source-defined ADT events and acknowledgment relationships. No MLLP listener, production feed, or novel merge policy. |
| 18 | Hand off a verified order/result interface | `order-result-trace` | [S45](source-inventory.md#s45), [S15](source-inventory.md#s15), [S18](source-inventory.md#s18), [S44](source-inventory.md#s44) | Create a local trace of source-defined order/result examples and their identifiers. No live LIS, dashboard, conversion, or vendor connection. |

| Project | Prerequisites | Proposed deliverable and acceptance boundary |
| --- | --- | --- |
| 15 | 04, 10 | Local validator, supplied XSD, and rewritten synthetic fixtures. Distinguish XML parsing from schema validation. Match the observed source outcomes: `patients.xml` and `patient_list_001.xml` pass; `patient_list_002.xml` fails with element-content errors at lines 4, 19, and 34. |
| 16 | 05, 06, 10, 15 | Local message inspector. Preserve empty fields and source-defined separators, identify MSH/message version/type, inspect selected data types, and recognize the source's acknowledgment examples. This is a limited teaching tool, not a standards validator. |
| 17 | 05, 06, 07, 10, 16 | Offline ADT sequence exercise with synthetic identifiers, source-grounded event expectations, and acknowledgments. No invented state transitions or patient-matching rules. |
| 18 | 05, 06, 08, 10, 15, 16, 17 | Capstone: offline order/result trace using synthetic identifiers and source-defined order/result relationships. No clinical interpretation, live hospital data, FHIR conversion, or dashboard promise. |

Later implementation will add requirements, starter, solution, explanatory answer keys, and acceptance checks under `projects/<slug>/`. Each milestone extends the same workbench with a cumulative solution checkpoint. Lesson 18 assesses the assembled work, rather than starting a new application. See `teaching-quality.md` for the grading rubric and release criteria.

## Observable outcomes and the continuing project

The table below is the authoring contract for every unit. Each future lesson must open with its observable outcome, make the stated problem concrete using a source-grounded case, and end with evidence that the learner can perform the action. These are design requirements, not drafted lesson content or claims that failures have already been reproduced in a sandbox.

Use **one integration analyst workbench and handoff dossier**, anchored in Scenario 1 of the supplied standards activity ([S34](source-inventory.md#s34), page 5): patient administration information and laboratory order/status exchanges. Use neutral, synthetic application labels and one consistent synthetic patient fixture. Original names, IDs, birth dates, and facility values stay excluded.

The dossier carries the exchange brief, vocabulary register, diagrams, field maps, fixtures, checks, and diagnostics through the whole course. Pharmacy and CDA use separate source-defined case packets within that same review dossier. A shared synthetic identity is a teaching convention, not evidence of a clinical relationship or an implied v2/XML/CDA conversion. Only source-specified behavior belongs in the final executable trace.

| Unit | Observable outcome | Problem that earns the concept | Checkable output | How it feeds the project |
| --- | --- | --- | --- | --- |
| 01 | By the end, the learner can produce an exchange brief naming the applications, triggers, exchanged data, and standard choices in the supplied scenario. | A scope discussion leaves the sender, receiver, or trigger unstated. | 01 exchange brief | Approved brief opens the workbench dossier and constrains every later task. |
| 02 | By the end, the learner can annotate a source example with its code system and explain why a code alone is insufficient to identify its meaning. | A value is recorded without its vocabulary context. | 02 code-system register | Attach to 01; later message inspection and the capstone use this register. |
| 03 | By the end, the learner can draw a use-case or sequence diagram for source-defined interactions and justify each actor and arrow from the source. | An interface diagram assigns work to the wrong application or omits a responsibility. | 03 annotated diagram | Attach to 01-02; use it to review the event and order/result traces. |
| 04 | By the end, the learner can run XML parsing and XSD validation separately, locate a reported structural failure, and repair it to match the supplied schema. | A document parses but fails the supplied XSD. The source has an observed failing case. | 04 fixture review and validation transcript | Attach to the dossier; reuse its synthetic passing/failing cases in milestone 15. |
| 05 | By the end, the learner can locate the version, message type, control ID, and selected patient/order fields in a complete source-grounded synthetic message. | A field is attributed to the wrong position in the source message. | 05 annotated message and field map | Reuse 01-04 conventions; this map becomes the inspector input contract. |
| 06 | By the end, the learner can preserve empty fields, decode the source-defined delimiter hierarchy, and match an acknowledgment to its originating message. | A delimiter or empty field is lost, or an acknowledgment is assigned to the wrong message. | 06 decoding cases and acknowledgment checklist | Extend 05; use the same cases and checklist in milestones 16-18. |
| 07 | By the end, the learner can classify the supplied A01/A02/A03/A08 examples and distinguish the patient identifier from visit information. | A source event or identity field is misclassified. | 07 annotated ADT trace | Reuse 05-06 field conventions and synthetic identities; consume in milestone 17. |
| 08 | By the end, the learner can trace source-defined placer/filler identifiers and explain the roles of ORC, OBR, and OBX in the selected order/result examples. | A result is linked using the wrong source-defined identifier. | 08 order/result trace worksheet | Extend 07 with the source-specified order/result case; consume in the final capstone. |
| 09 | By the end, the learner can distinguish order, dispense, and administration responsibilities in the supplied pharmacy examples and select the relevant source message family. | Order, dispense, and administration are treated as the same operation. | 09 pharmacy interface review | Add a source-case appendix to the same dossier. Do not insert pharmacy events into the laboratory scenario. |
| 10 | By the end, the learner can write an interface test plan with source-defined scope, inputs, expected results, and a documented failure-response approach. | A team cannot decide whether an interface test passed or who should handle a failure. | 10 test and handoff plan | Consolidate 01-09; milestones 15-18 implement its bounded checks. |
| 11 | By the end, the learner can review a source extension example, document its meaning, and justify whether a standard element or local extension is appropriate. | A local field has no documented meaning or justification. | 11 extension decision record | Add to 10; the inspector and capstone report their supported-field boundary explicitly. |
| 12 | By the end, the learner can locate the message, segment-group, field, and component structures in the supplied v2 XML examples. | v2 XML is mistaken for arbitrary XML or a FHIR resource. | 12 v2 XML structure checklist | Apply 04-06 conventions; add checks to the workbench without asserting a universal conversion. |
| 13 | By the end, the learner can justify message or CDA document exchange for a supplied source case using its stated requirements. | Message and document exchange are treated as interchangeable without checking the requirement. | 13 exchange-choice decision | Add a separate source-case decision to 01/10. Do not invent a CDA event in the laboratory workflow. |
| 14 | By the end, the learner can identify the header, patient/author context, narrative, and entries in a synthetic version of the supplied CDA example and state the limits of its validation. | A CDA review ignores context or equates a readable document with complete conformance. | 14 CDA review checklist | Combine with 13 in the dossier; reuse its synthetic identity conventions, without converting CDA to v2 or FHIR. |
| 15 | By the end, the learner can run a local validator that reports reproducible pass/fail results for synthetic versions of the supplied XML structural cases. | The source XSD failures cannot be reproduced or distinguished from parse failures. | 15 XML validator and result report | Consume 04/10; publish fixture IDs and reports consumed by the next milestones. |
| 16 | By the end, the learner can run an inspector that preserves source-defined field structure and reports the selected message fields and acknowledgment checks correctly. | An inspector silently drops empty fields or cannot explain its field selection. | 16 inspector and result report | Use the same fixture manifest and reporting format as 15; consume 05-06/10-12. |
| 17 | By the end, the learner can use the inspector to produce and check an offline trace of the source-defined ADT examples and their acknowledgment relationships. | A trace shows a wrong event or unmatched acknowledgment without a useful diagnostic. | 17 ADT trace and diagnostic log | Consume 16, 07, and 10. Keep all previous dossier outputs for the capstone. |
| 18 | By the end, the learner can reproduce a source-bounded order/result trace, diagnose a controlled failure, and submit an analyst handoff with runnable checks, evidence, and documented limits. | An interface handoff has results but no reproducible checks, source trace, or explanation of failures. | 18 final workbench and analyst handoff | Consume milestones 15-17 plus 08/10 and the complete dossier. Grade against the capstone rubric; introduce no new clinical workflow. |

Use application tasks in place of recall-only questions: diagnose a field-position error, repair a schema mismatch, match an acknowledgment, or justify a source-defined exchange choice. Provide expected output, an explanation, and common wrong approaches. Each long unit must alternate a short explanation, an attempt, and a check within ten minutes. Detailed lesson templates, grading, troubleshooting evidence, and verification metadata are specified in `teaching-quality.md`.

## Current landing page: lesson-by-lesson source gaps

Baseline: repository `abtranet/health-it-journey`, commit `a8293b94abc1dc87a134cfa66e0a9fad7a059a78`, `index.html` lines 731-765. The repository contains only `README.md` and `index.html`. It is currently a static Vercel site, with no Next.js app, package file, lesson routes, content layer, or working purchase/access system.

**Supported** means substantive reading exists for the teaching topic. **Partial** means underlying standards material exists, but the advertised lesson or project goes beyond it. **Outline only** means the topic is named or linked without implementation content. **No substantive source** means no supplied teaching or implementation source for the claim; incidental keyword matches are not support.

| Current ID | Current title | Evidence and gap | Proposed treatment |
| --- | --- | --- | --- |
| 01 | The healthcare data landscape | Supported by the standards reading and requirements activity. | New 01. |
| 02 | HL7v2 anatomy: segments, fields, messages | Supported by v2 introduction and Control. | New 05. |
| 03 | Parsing pipe-delimited messages | Partial: delimiter rules exist; no supplied parser code or guided implementation. | New 06 and bounded project 16. |
| 04 | Patient identity & ADT workflows | Supported by teaching reading and v2.8/v2.9.1 patient administration; no vendor matching policy. | New 07 and bounded project 17. |
| 05 | FHIR resources 101 | Outline only: three-page study guide and brief UML diagrams; no R4 resource examples or full teaching unit. | Hold outside active outline. |
| 06 | REST & search: reading data | Outline only: study guide links to R4 HTTP and search; linked contents are not supplied. | Hold. v2 queries are not a replacement for FHIR REST. |
| 07 | Writing data: create, update, transactions | Outline only: HTTP link; no transaction examples, implementation notes, or code. | Hold. |
| 08 | Terminologies: SNOMED, LOINC, ICD-10 | Supported as vocabulary concepts in the standards reading. | New 02, without FHIR service claims. |
| 09 | Real-time ADT feed listener | Partial: ADT definitions and transport overview; no listener, framing specification, or feed project. | Replace with offline project 17. |
| 10 | Lab results dashboard | Partial: order/result structures; no dashboard, FHIR model, code, or product requirements. | Replace with project 18. |
| 11 | Scheduling: appointments & slots | Partial: v2 scheduling reference exists; no FHIR Appointment/Slot source or project. | Put v2 scheduling in a reference-backed future lesson; hold FHIR project. |
| 12 | Medication orders & dispense | Partial: substantive v2 pharmacy reference exists; no FHIR medication implementation or code. | New v2 lesson 09; hold FHIR project. |
| 13 | Clinical documents: CDA to FHIR | Partial: strong CDA material; no CDA-to-FHIR mapping or conversion source. | New 13-14 cover CDA. Hold conversion. |
| 14 | SMART on FHIR app | No substantive source for SMART authorization, app launch, or implementation. | Hold. |
| 15 | Terminology service integration | Partial: CTS overview and typical calls; no runnable service integration, FHIR endpoint examples, or code. | New 02 covers concepts. Hold service project. |
| 16 | Bulk data export | No substantive FHIR Bulk Data source. v2 references to bulk information are unrelated. | Hold. |
| 17 | Audit events & provenance | Outline only: security/module links; no FHIR AuditEvent/Provenance lesson or implementation. | Hold. |
| 18 | Subscriptions & webhooks | No substantive FHIR subscription/webhook source. v2 subscription references do not support this project. | Hold. |
| 19 | Consent management | Outline only: security/privacy links and v2 access-restriction references; no FHIR Consent implementation. | Hold. |
| 20 | EHR sandbox integration | No substantive source: no vendor sandbox, credentials, setup, documented behavior, or project code. | Hold. |
| 21 | Capstone: hospital integration hub | Partial: requirements scenarios and interface planning; no hub architecture, implementation, code, or acceptance criteria. | Use source planning in 01/10; hold capstone. |

## Source topics missing from the current curriculum

| Source topic | Proposed coverage / disposition |
| --- | --- |
| Standard selection and interoperability requirements | 01 and 10. |
| UML class/use-case/sequence/state models | 03. |
| XML, XSD, namespaces, DOM, XPath, and XSLT | 04 and 15; keep overview scope manageable and leave detailed transformations to a later source-based extension. |
| v2 data types, delimiter/escape handling, and acknowledgments | 06 and 16. |
| Explicit v2 orders, placer/filler roles, OBR/OBX and result structures | 08 and 18. |
| v2 pharmacy messages | 09. |
| Interface planning, test strategy, rollout, documentation, and profiles overview | 10; complete conformance methodology is missing. |
| Z-elements | 11, with duplicate excluded from counts. |
| v2 XML encoding | 12. |
| CDA messages-versus-documents, header/body/narrative/entries, OIDs, and validation levels | 13-14. Advanced implementation-guide conformance is not covered by the supplied unit set. |
| v2 queries | Future reference-backed lesson from the Queries chapter; outside this focused first course. |
| v2 financial management, master files, document-management messaging, scheduling, referrals, patient care, lab automation, application management, personnel, claims, and materials management | Reference-backed future topics. The full standard's scope does not mean every chapter must become a lesson in this first course. |
| HL7 organizational strategy | Optional dated context in 01, not a stand-alone technical lesson. |
| FHIR conformance, safety/security, maintenance process, licensing/IP, and healthcare resource domains | Exam-roadmap backlog only; guide lists competencies and reading links rather than substantive teaching content. |
| External program's V3/RIM/data types and advanced CDA/FHIR modules | Program-only gaps. Existing CDA/UML readings provide limited context, not those complete modules. |
| Claude skill authoring and personal receipt | Excluded. |

## Landing-page truth review and proposed flags

No landing-page changes or config flags have been implemented in Step 1. The later `course.json` should default the following unsupported claims to false, and every copy location must respect the corresponding flag, including FAQ, pricing, footer, and repeated CTAs.

| Claim | Current location in `index.html` | Evidence / later behavior | Proposed flag |
| --- | --- | --- | --- |
| 21 lessons, 2 chapters, 13 projects | 615-618, 718, 724, 746, 788 | Placeholder counts. Replace with counts of actual validated lesson content; do not publish this proposal as completed content. | Computed from content, no manual count flag. |
| 23 hours of video | 616, 789 | No video files. Existing row durations even sum to 1,520 minutes (25h 20m), not 23h. Replace with estimated study time after authoring. | `features.video` = false |
| Course trailer, 7:36 runtime | 633-639 | Illustrated placeholder, no supplied trailer or measured runtime. | `features.trailer` = false |
| Trustpilot stars/badge | 930-936 | No review evidence in supplied sources or repository. | `features.trustpilot` = false |
| Certificate | 790, 836-837, 901-904 | No site certificate system. The external course's certificate and FHIR proficiency exam credential are separate from this site. | `features.certificate` = false |
| Community / Discord | 791, 843-844, 977 | No supplied evidence or working community link. | `features.discordCommunity` = false |
| VAT incl. | 593, 785, 804 | No basis in source or site configuration. Keep tax wording hidden until configured. | `features.vatIncluded` = false |
| Health IT Fundamentals bundle and member pricing | 794, 799-812, 941 | No second course exists. Remove its pricing card, 87 lessons, 116 video hours, discounts, and member-pricing messages by default. | `features.bundle` = false |
| Access for life / free future updates | 776, 850-858, 911 | Operational promises not established by source or current product. | `features.lifetimeAccess` and `features.futureUpdates` = false |
| Refund policy | 986 | Placeholder link. Do not advertise an available policy until a real destination exists. | `features.refundPolicy` = false |

Keep the current single-course $45 price only as a configurable draft price, with a clearly labeled purchase stub. Do not imply checkout works. The before/after code demos, clinical-equivalence claims, vendor/production claims, and auto-translation FAQ also need to be reviewed against the source during implementation; current landing copy is not course evidence.

## Authoring and validation boundaries after outline review

- Proposed paths: `content/hl7-fhir/course.json`, 14 MDX lessons in `01-fundamentals/`, and four MDX projects in `02-projects/`; continuous IDs/orders 01-18. Routes follow `/course/hl7-fhir/[chapter]/[slug]`.
- Preserve source version context. Teaching readings explicitly use v2.8; supporting references are v2.9.1. Do not silently mix required fields, data types, or message structures across versions. Confirm each example against its declared version.
- Source-based XML/UML/CDA lessons need XML and diagram examples. Do not force unrelated HL7 or FHIR snippets into them to meet an example format mechanically. If a required example is unsupported, leave a source-needed callout. Add XML syntax support for these lessons alongside HL7 and JSON.
- Rewrite all identity values synthetically, including facility/application identifiers and OIDs where they identify an organization. See `phi-review.md`. Preserve the source's structural mistakes only in explicitly invalid exercise fixtures.
- Before lessons reference local `sourceFiles`, stage reviewed source snapshots and a path/hash/page crosswalk under `course-source/`. Leave raw identity-bearing assets and the personal receipt outside Git. A file existing locally is not proof its contents are safe to publish.
- Required JSON parsing plus `resourceType` checks are structural checks, not proof of full FHIR R4 validity. R4 conformance requires additional version-aware validation if R4 examples are later sourced. No FHIR validator or externally linked specifications have been introduced in Step 1.
- After authoring, add the requested validation script, source path checks, TODO summary, Quiz/access/sidebar/navigation, and content-driven landing page. The Next.js foundation itself will need to be added to this currently static repository. Build and click tests belong to that implementation step.

## Source-needed backlog

These callouts define future gaps. User-requested HAPI and Synthea are preferred tools for a future FHIR track, not assets already supplied or tested. They require recorded setup, data provenance, and tested exercises before a FHIR unit can be release-ready. This revision keeps the source corpus unchanged.

> TODO(abdel): source needed for a complete FHIR R4 fundamentals unit with version-specific resource definitions and synthetic JSON examples.

> TODO(abdel): source needed for FHIR R4 read/search, create/update, transactions, profiles, extensions, validation, and terminology-service implementation exercises.

> TODO(abdel): source needed for SMART on FHIR, Bulk Data, subscriptions/webhooks, AuditEvent/Provenance, and Consent implementation projects.

> TODO(abdel): source needed for FHIR Appointment/Slot and medication workflow examples, without inferring their behavior from v2 chapters.

> TODO(abdel): source needed for CDA-to-FHIR mapping and transformation rules, fixtures, and acceptance criteria.

> TODO(abdel): source needed for the lower-layer framing specification and a bounded ADT listener implementation project.

> TODO(abdel): source needed for the replacement v2 conformance methodology and complete profile-authoring rules referenced by the supplied placeholder.

> TODO(abdel): source needed for dedicated V3/RIM/data-type units and advanced CDA implementation guides, clinical statements, schemas, and conformance fixtures described but not supplied.

> TODO(abdel): source needed for a lab-results dashboard, EHR sandbox setup, vendor behavior, and hospital integration hub requirements, implementation, and acceptance criteria.

> TODO(abdel): source needed for FHIR safety/security, maintenance, and licensing/IP lesson content beyond the supplied exam competency list.

> TODO(abdel): source needed for the preferred HAPI FHIR sandbox setup, pinned Synthea dataset/generation manifest, shared synthetic patient fixture, and reproducible FHIR exercises and error evidence.

## Pause checkpoint

Review this outline before lesson authoring or changes to the application. Step 1 produces inventory, proposal, outcomes/project progression, teaching-quality standards, gaps, preliminary PHI review, source manifest, and a TODO index only. Branch: `course-content-v1`. No push, deployment, or change to main is part of this checkpoint.
