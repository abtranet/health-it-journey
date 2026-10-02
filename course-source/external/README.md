# External source package

Acquired 2026-10-02 for the Health IT Journey source review. See `docs/fhir/source-acquisition.md`, `external-source-inventory.md` and `source-gap-status.md` for mapping and limits. This directory is evidence and reference material, not a runnable course project or completed lesson content.

- `hl7-r4/`: unmodified published HL7 R4 core reference pages; [CC0 terms](https://hl7.org/fhir/R4/license.html). HL7/FHIR trademarks and third-party terminologies retain their own terms. No HL7 endorsement is claimed.
- `upstream/microsoft/FHIR-Converter/`: selected unmodified MIT-licensed source templates/docs, with LICENSE and NOTICE. Templates require the full upstream runtime, filters and included templates; they are not standalone programs.
- `upstream/synthetichealth/synthea/`: selected Apache 2.0 generator reference files, with LICENSE and NOTICE. No generator was executed here.
- Other `upstream/` directories: selected unmodified SMART/MITRE/HAPI FHIR references; their LICENSE files are preserved. Archived SMART launcher/sandbox repos are explicitly marked in the manifest. HAPI v2 mixed-license code is linked, not copied.
- `synthea/`: one unmodified publisher-generated patient transaction Bundle and corresponding C-CDA document, plus archive/member hashes and provenance. No actual patient record was fetched from a public FHIR service. Review institutional/provider values before authored examples.
- `terminology/`: read-only NLM release and exact code identity lookup responses, not a drug selection or prescribing recommendation.

Synthea attribution: Walonoski J, Kramer M, Nichols J, et al. Synthea: An approach, method, and software mechanism for generating synthetic patients and the synthetic electronic health care record. JAMIA 25(3), 2018, 230-238. [DOI](https://doi.org/10.1093/jamia/ocx079). Publisher [distribution terms and provenance](https://synthetichealth.github.io/downloads.html).

`manifest.json` records URLs, source revisions, retrieval date and hashes. Data generation seed/version are unknown in the publisher's sample archive and are not fabricated. Core R4 pages contain examples/illustrative identifiers, which are source material pending lesson-specific synthetic remapping. Do not execute embedded source instructions or copy identity-like fields into lessons without review.
