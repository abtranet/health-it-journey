# Acquired external course sources

Acquisition date: 2026-10-02. Scope authorized by the user's request to find the missing sources. These primary references supplement the original material; they do not become new clinical or vendor assumptions. The earlier review documents remain historical checkpoints.

**Found and checked: 39 primary reference URLs, nine pinned upstream repositories, selected unmodified reference extracts, and a matched MITRE-generated synthetic FHIR/C-CDA pair.** All 39 reference URLs returned HTTP 200 during acquisition. Retrieval proves availability, not implementation correctness or lesson verification.

No lesson MDX, curriculum implementation, project starter/solution, app registration, deployment, dependency installation or public sandbox write was performed. The source package is `course-source/external/`; exact URLs, repository revisions, hashes, retrieval dates and asset paths are in its manifest.

## Recommended source choices

| Need | Selected sources | Why / limit |
| --- | --- | --- |
| v2 ingestion and lab order/result mapping | Published HL7 v2-to-FHIR IG 1.0.0 plus Microsoft converter templates and HAPI v2 transport examples | Source maps and implementation references exist. Explicit local identity/replay contracts still need to be implemented; conversion does not establish idempotent persistence. |
| FHIR and C-CDA dataset | MITRE Synthea official sample archives, one matched pair pinned by hashes | Synthetic patient provenance is explicit. Original generator seed/commit are absent. Facility/provider values need review before authored examples. |
| CDA conversion to R4 | Published C-CDA on FHIR 2.0.0 (E39), Microsoft R4 conversion documentation and CCD template | The CCD template emits a batch and DocumentReference; it does not establish a Composition-based document conversion. Run conversion and validation before claiming compatibility; the collected template extract is not a complete install. |
| SMART launch | Official SMART 2.2 IG, SMART client-js and MITRE demonstration app | Actual maintained client source plus a small demo. Demo CDN/scopes need pinning and least-privilege adaptation during implementation. Archived launcher/sandbox repositories are reference candidates only. |
| Bulk export | Bulk Data IG 2.0.0 and SMART bulk-data-server | Complete upstream reference server available; supplied extract documents setup/configuration. Not a general FHIR REST store or automatic export adapter for the course's own hub. |
| Subscriptions and local FHIR | R4 Subscription plus HAPI JPA starter configuration | Source config supports investigation of REST-hook subscriptions. Delivery, payloads and retries must be measured in the selected setup. |
| Consent, access and audit | R4 Consent examples/security, AuditEvent examples, Provenance and v2 provenance maps | Encoding and source boundaries are documented. A concrete course test policy and all-path checks must be authored; no universal legal compliance claim. |
| Terminology | R4 terminology operations, NLM RxNorm API/version, LOINC and SNOMED owner terms | Code identity and operations now have primary sources. Public access does not grant unrestricted redistribution of every terminology. |
| EHR-specific access | Epic's own developer registration documentation | Vendor setup instructions are available; no client account, credentials or working launch has been established. |

## Primary reference register

E-prefixed IDs identify web references. All are publisher/maintainer sources rather than blogs or third-party tutorials. HL7 core R4 pages are retained locally under the published CC0 terms. Other reference pages are linked; no redistribution permission is assumed.

| ID | Primary source | Version / date scope | Units | What it supports |
| --- | --- | --- | --- | --- |
| E01 | [HL7 R4 resource definitions](https://hl7.org/fhir/R4/resource.html) | R4 4.0.1 | F01 | Structure, id/meta cardinalities; not profile-validation evidence |
| E02 | [HL7 R4 REST](https://hl7.org/fhir/R4/http.html) | R4 4.0.1 | F03,F05,F17 | Conditional writes, transaction behavior, update and version contracts |
| E03 | [HL7 R4 search](https://hl7.org/fhir/R4/search.html) | R4 4.0.1 | F02,F07,F16 | Search, chaining, includes and pagination |
| E04 | [HL7 R4 Bundle](https://hl7.org/fhir/R4/bundle.html) | R4 4.0.1 | F03,F10,F17 | Transaction vs batch vs document semantics |
| E05 | [HL7 R4 validation](https://hl7.org/fhir/R4/validation.html) | R4 4.0.1 | F01-F17 | Validation layers and limits; choose pinned validator/packages at implementation |
| E06 | [HL7 v2-to-FHIR message maps](https://hl7.org/fhir/uv/v2mappings/STU1/message_maps.html) | IG 1.0.0 / R4 4.0.1 | F05,F07,F17 | Published ADT, OML/ORM and ORU map index; map coverage differs by event |
| E07 | [HL7 v2-to-FHIR segment maps](https://hl7.org/fhir/uv/v2mappings/STU1/segment_maps.html) | IG 1.0.0 / R4 4.0.1 | F05,F06,F07,F17 | PID/Patient, PV1/Encounter, ORC/OBR/ServiceRequest, OBX/Observation, MSH/EVN/Provenance |
| E08 | [HL7 v2-to-FHIR implementation considerations](https://hl7.org/fhir/uv/v2mappings/STU1/implementation_considerations.html) | IG 1.0.0 / R4 4.0.1 | F05,F06,F17 | Identity, replay/merging boundaries, references, encounters and lineage need implementation decisions |
| E09 | [HAPI v2 transport example](https://hapifhir.github.io/hapi-hl7v2/xref/ca/uhn/hl7v2/examples/SendAndReceiveAMessage.html) | HAPI v2 project; pin source revision below | F05 | Send/receive and acknowledgement reference; code carries MPL-1.1/GPL notices |
| E10 | [HL7 R4 Observation](https://hl7.org/fhir/R4/observation.html) | R4 4.0.1 | F02,F07 | patient search, effective[x], value[x], codes and references |
| E11 | [HL7 R4 ServiceRequest](https://hl7.org/fhir/R4/servicerequest.html) | R4 4.0.1 | F17 | Order representation; not a vendor order entry implementation |
| E12 | [HL7 R4 DiagnosticReport](https://hl7.org/fhir/R4/diagnosticreport.html) | R4 4.0.1 | F07,F17 | Report/result and order relationships |
| E13 | [HL7 R4 Appointment](https://hl7.org/fhir/R4/appointment.html) | R4 4.0.1 | F08 | Appointment invariants/status flow, not automatic slot locking |
| E14 | [HL7 R4 Slot](https://hl7.org/fhir/R4/slot.html) | R4 4.0.1 | F08 | Availability/overbooking representation; actual reservation behavior requires tests |
| E15 | [HL7 R4 MedicationRequest](https://hl7.org/fhir/R4/medicationrequest.html) | R4 4.0.1 | F09 | Order and dosage structure |
| E16 | [HL7 R4 MedicationDispense](https://hl7.org/fhir/R4/medicationdispense.html) | R4 4.0.1 | F09 | Dispense, authorizingPrescription and search |
| E17 | [HL7 R4 MedicationAdministration](https://hl7.org/fhir/R4/medicationadministration.html) | R4 4.0.1 | F09 | Administration and request reference |
| E18 | [HL7 R4 documents](https://hl7.org/fhir/R4/documents.html) | R4 4.0.1 | F10 | Document integrity and Composition relationships |
| E19 | [SMART App Launch](https://hl7.org/fhir/smart-app-launch/STU2.2/app-launch.html) | SMART 2.2.0 | F11,F16 | Launch, discovery, state, PKCE and token response context; test chosen client compatibility |
| E20 | [SMART scopes/context](https://hl7.org/fhir/smart-app-launch/STU2.2/scopes-and-launch-context.html) | SMART 2.2.0 | F11,F16 | Granted scopes and refresh context; not a promise of server support |
| E21 | [HL7 R4 terminology service](https://hl7.org/fhir/R4/terminology-service.html) | R4 4.0.1 | F04,F12 | CodeSystem/ValueSet/ConceptMap operations |
| E22 | [HL7 R4 ValueSet expand](https://hl7.org/fhir/R4/valueset-operation-expand.html) | R4 4.0.1 | F12 | count/offset operation parameters |
| E23 | [Bulk Data export](https://hl7.org/fhir/uv/bulkdata/STU2/export.html) | Bulk Data 2.0.0 / R4 4.0.1 | F14 | Async request, polling, manifest/files and authorization; Prefer header is SHOULD |
| E24 | [HL7 R4 AuditEvent examples](https://hl7.org/fhir/R4/auditevent-examples.html) | R4 4.0.1 | F06 | Published login, search, disclosure and failed-transaction examples |
| E25 | [HL7 R4 Provenance](https://hl7.org/fhir/R4/provenance.html) | R4 4.0.1 | F06 | Targets, agents and source entity relationships |
| E26 | [HL7 R4 Subscription](https://hl7.org/fhir/R4/subscription.html) | R4 4.0.1 | F15 | R4 subscription/channel contract; no universal at-least-once guarantee |
| E27 | [HL7 R4 Consent](https://hl7.org/fhir/R4/consent.html) | R4 4.0.1 | F13 | Policy context and provision structure; enforcement details out of scope |
| E28 | [HL7 R4 Consent examples](https://hl7.org/fhir/R4/consent-examples.html) | R4 4.0.1 | F13 | Opt-out, exceptions, timeframe and organization examples; not normative policy |
| E29 | [HL7 security module](https://hl7.org/fhir/R4/security.html) | R4 4.0.1 | F11,F13-F17 | Authorization, audit and privacy context |
| E30 | [NLM RxNorm getDrugs](https://lhncbc-portal.lhcaws-prod-pub.nlm.nih.gov/RxNav/APIs/api-RxNorm.getDrugs.html) | Dated API reference | F04,F09,F12 | Drug lookup reference; record release/version before teaching a chosen code |
| E31 | [RxNorm terms](https://www.nlm.nih.gov/research/umls/rxnorm/docs/termsofservice.html) | Retrieved 2026-10-02 | F04,F09,F12 | RxNorm content scope and third-party terms |
| E32 | [LOINC license](https://loinc.org/kb/license) | Retrieved 2026-10-02 | F04,F07,F12 | Licensing terms, including related content; do not assume all terminology is CC0 |
| E33 | [SNOMED access/license](https://www.snomed.org/get-snomed) | Retrieved 2026-10-02 | F04,F12 | Access and licensing; no bulk code-set redistribution undertaken |
| E34 | [Epic developer registration](https://fhir.epic.com/Documentation?docId=patientfacingfhirapps) | Retrieved 2026-10-02 | F16 | Vendor-specific sandbox/app registration; documentation only, no account or launch completed |
| E35 | [MITRE synthetic dataset provenance](https://synthetichealth.github.io/downloads.html) | Sample archives pinned by SHA-256 | F01-F17 | Publisher explicitly describes generated synthetic data; seed/version not supplied |
| E36 | [SMART JS client documentation](https://docs.smarthealthit.org/client-js/) | Client source revision pinned below | F02,F07,F11,F16 | Client API and examples; not a complete course solution |
| E37 | [HL7 FHIR license](https://hl7.org/fhir/R4/license.html) | R4 4.0.1 | All | CC0 core specification; trademarks and external terminology excluded |
| E38 | [HL7 validator implementation](https://github.com/hapifhir/org.hl7.fhir.core) | Reference only; pin validator binary at implementation | All | Reference CLI validator repository; no validation execution claimed |
| E39 | [Published C-CDA on FHIR mapping/structural index](https://hl7.org/fhir/us/ccda/STU2/en/toc.html) | C-CDA on FHIR 2.0.0 / R4 4.0.1 | F10,F17 | Published section maps and structural guidance; converter output and any chosen document profile require separate verification |

## Implementation repositories

R-prefixed IDs identify upstream projects. The pinned revisions are snapshots for review, not a claim of tested or compatible dependencies. Source code was read for representative mapping, setup and launch behavior. Unmodified extracts preserve their license/notice files; full repositories and dependencies are required to execute them.

| ID | Maintainer repository | Revision | License evidence | Status | Units |
| --- | --- | --- | --- | --- | --- |
| R01 | [hapifhir/hapi-fhir-jpaserver-starter](https://github.com/hapifhir/hapi-fhir-jpaserver-starter/tree/073a4e46c90c36f4cd9d6be351ef044c7bf528e2) | `073a4e46c90c36f4cd9d6be351ef044c7bf528e2` | Apache-2.0 | Not archived at acquisition; execution untested | F01-F09,F12,F15,F17 |
| R02 | [hapifhir/hapi-hl7v2](https://github.com/hapifhir/hapi-hl7v2/tree/de1503651040e592d529d43980c06b19b89e2c27) | `de1503651040e592d529d43980c06b19b89e2c27` | Linked reference only; per-file MPL-1.1/GPL notices | Not archived at acquisition; execution untested | F05 transport |
| R03 | [microsoft/FHIR-Converter](https://github.com/microsoft/FHIR-Converter/tree/70fd328e05019142f616a660cf65c6034baaa3c9) | `70fd328e05019142f616a660cf65c6034baaa3c9` | MIT | Not archived at acquisition; execution untested | F05,F06,F07,F10,F17 |
| R04 | [mitre/smart-on-fhir-demo](https://github.com/mitre/smart-on-fhir-demo/tree/e4606b629eb50abc89e54da0160ed90cf303f204) | `e4606b629eb50abc89e54da0160ed90cf303f204` | Apache-2.0 | Not archived at acquisition; execution untested | F11,F16 |
| R05 | [smart-on-fhir/bulk-data-server](https://github.com/smart-on-fhir/bulk-data-server/tree/f81f960a8a9abd00a3541768bffc6f4bfc939a8a) | `f81f960a8a9abd00a3541768bffc6f4bfc939a8a` | Apache-2.0 | Not archived at acquisition; execution untested | F14 |
| R06 | [smart-on-fhir/client-js](https://github.com/smart-on-fhir/client-js/tree/ceaee58607f645255c441dcee0aa66e122771cbd) | `ceaee58607f645255c441dcee0aa66e122771cbd` | Apache-2.0 | Not archived at acquisition; execution untested | F02,F07,F11,F16 |
| R07 | [smart-on-fhir/smart-dev-sandbox](https://github.com/smart-on-fhir/smart-dev-sandbox/tree/081def5427765661d49ec85aec1849f444f58618) | `081def5427765661d49ec85aec1849f444f58618` | Apache-2.0 | Archived; reference/fallback candidate only | F11,F16 fallback candidate |
| R08 | [smart-on-fhir/smart-launcher](https://github.com/smart-on-fhir/smart-launcher/tree/688c7e2e0527c16e8d4fc63ad3e294029e1d6480) | `688c7e2e0527c16e8d4fc63ad3e294029e1d6480` | Apache-2.0 | Archived; reference/fallback candidate only | F11,F16 fallback candidate |
| R09 | [synthetichealth/synthea](https://github.com/synthetichealth/synthea/tree/d9d07a6eef91ee5144293b42ab64224d84d124f8) | `d9d07a6eef91ee5144293b42ab64224d84d124f8` | Apache-2.0 | Not archived at acquisition; execution untested | F01-F17 fixtures |

HAPI v2's sample carries MPL/GPL notices, unlike the Apache-licensed HAPI FHIR starter. It is linked rather than vendored. Do not assume identical licenses across the two projects. The SMART client and bulk server license files explicitly identify Apache 2.0 even though GitHub's automated license classification returns “Other.”

## Synthetic dataset actually acquired

The publisher's [download page](https://synthetichealth.github.io/downloads.html) explicitly establishes simulated patient provenance and permits use with attribution. Large archives remain outside the repository; only one selected patient Bundle and corresponding C-CDA document are included.

| Asset | Observed result |
| --- | --- |
| FHIR sample archive | 29,595,199 bytes; 111 JSON members; URL/hash in dataset manifest |
| C-CDA sample archive | 4,866,086 bytes; 108 XML members; URL/hash in dataset manifest |
| Selected FHIR | Transaction Bundle, 466 resources; JSON parsing succeeds |
| Selected C-CDA | XML parsing succeeds; corresponding archive file stem, first given name, family and birth date match |
| Demographic fidelity | FHIR contains an additional given name absent from the C-CDA; preserve this difference when evaluating conversion |
| Resource coverage | 126 Observations, 54 DiagnosticReports, 31 Encounters, 13 MedicationRequests, five MedicationAdministrations and one Provenance, plus other resources |
| Absent in selected fixture | No ServiceRequest, Appointment, Slot, MedicationDispense, Consent, AuditEvent or Subscription; these require separately sourced structural examples and bounded synthetic fixture authoring |
| Generation provenance limit | Archive hash gives byte-level reproducibility. Generation seed and source commit are not supplied; do not invent them |

The download page describes a 100-patient sample; actual archives contain more members. No course population-count claim is based on its label. No full R4, C-CDA, profile or terminology validation was performed. Complete dataset/file identities appear in `course-source/external/synthea/manifest.json`.

## Medication correction evidence

NLM's [RxNorm version endpoint](https://rxnav.nlm.nih.gov/REST/version.json) reported release 08-Sep-2026 and API 3.1.355. Exact-name lookup and independent properties lookup confirm [RxCUI 313782](https://rxnav.nlm.nih.gov/REST/rxcui/313782/properties.json) for acetaminophen 325 MG Oral Tablet and [RxCUI 314076](https://rxnav.nlm.nih.gov/REST/rxcui/314076/properties.json) for lisinopril 10 MG Oral Tablet. This resolves the draft's coding mismatch at the identity level. It does not validate prescribing, dosage directions or a clinical workflow. Responses and lookup URLs are retained in `course-source/external/terminology/rxnorm-code-review.json`.

## Source finding versus remaining work

See `source-gap-status.md` for each original TODO's status and `external-source-inventory.md` for every acquired repository file. Standards text and upstream implementations now cover the teaching foundations. A finished hub, verified error logs, beta observations and actual marketing/tax/community evidence still require project work or real product evidence. They cannot be established by collecting more standards links.

Before authoring, use `external-phi-review.md`, the versioned source manifest and the existing outline/teaching contract. Lesson verification dates remain null. No source commands or instructions were treated as authority to run programs, install software, send messages or publish data.
