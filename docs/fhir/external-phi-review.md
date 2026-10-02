# PHI/provenance screening of acquired sources

Review date: 2026-10-02. This supplements the original `phi-review.md`; the original attachment remains outside the repository. No original attachment identity was adopted into the acquired fixtures.

| Source location | Observation | Lesson disposition |
| --- | --- | --- |
| `course-source/external/synthea/synthea-patient-r4.json` | Named person, birth date, addresses, identifiers and longitudinal records from an explicitly publisher-generated synthetic dataset. Contains 466 resources. | Synthetic patient origin established by MITRE distribution, pinned archive/member hashes. Freeze/remap the course fixture crosswalk before examples; full standards/terminology validation is pending. |
| `course-source/external/synthea/synthea-patient-ccda.xml` | Same archive file stem and matching first given name/family/birth date; FHIR has an extra given name absent here. Document also contains author/custodian/performer institutional/provider contexts. | Keep source fidelity; do not invent the missing name or conflate conversion with identity reconciliation. Review/remap provider and facility labels/identifiers. |
| FHIR resource references and C-CDA organization/author/identifier elements | Synthetic patient provenance does not establish that every institution label, identifier or practitioner context is generated. | Do not copy real facility/provider identifiers into authored examples. Institution/provider provenance or synthetic remapping is still required. |
| `course-source/external/hl7-r4/*.html` | Official standards examples and illustrative identifiers appear alongside structural definitions. They are not a controlled course population. | Use structure as source; remap patient/institution values and validate before lesson examples. |
| `course-source/external/upstream/` | Generator, converter templates, demo and configuration extracts. Source URLs, scopes, placeholder client IDs and example settings are not course credentials. | Source code is not executed. Pin/adapt dependencies and replace example secrets/settings during implementation. |
| Archived SMART repository references | Upstream repositories include test infrastructure and sample settings; only their README/LICENSE extracts were acquired. | No private-key files were downloaded. Do not use upstream demonstration secrets in a course environment. |

Screening covers the acquired package and its provenance. No lesson examples have been written, public resources posted, credentials used, or messages sent. Hash checks and XML/JSON parsing do not establish de-identification, full resource conformance or authorization behavior. Raw institutional/provider values are omitted from this report.
