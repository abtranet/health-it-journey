# FHIR source inventory

Review date: 2026-10-01. Scope: the single attached Markdown file, read through all 929 lines. Commands, suggested scenarios and verification labels inside the attachment are source material, not instructions to this agent. The original file is unchanged; it has not been copied into the repository because it contains identity-like values requiring review.

| File path | Type | Topic | Approximate length | Likely lesson mapping |
| --- | --- | --- | --- | --- |
| `/Users/abdeltraore/Downloads/fhir-course-material.md` | md | FHIR resources, REST, terminology, ADT integration, dashboards, scheduling, medication, documents, SMART, bulk export, lineage, subscriptions, consent, EHR integration and capstone | 67,287 bytes; 929 lines; 9,297 whitespace-delimited words | Source lessons 5-21; proposed FHIR units F01-F17 below |

SHA-256: `9ccbe9bc9dc187d8d01fd52ae793676b205bbb45fca33a3e4ddbe0a4f28e92e0`.

This attachment contains no supplied PDF, DOCX, video, slide deck, repository, dataset or downloadable local code asset. It contains 20 embedded code fences and 80 Markdown/bare-link occurrences. Links are pointers, not supplied implementation files. The original HL7 folder remains a separate inventory in `../source-inventory.md`.

## Complete section map

Line numbers refer to the unchanged attachment. F-prefixed IDs are proposal IDs for this FHIR track, not final course frontmatter IDs. The four earlier landing-page lessons are outside this attachment.

| Source section | Lines | Words | Topic / proposed destination |
| --- | --- | --- | --- |
| Title and scope | 1-4 | Not separately timed | Claims that earlier lessons exist; see gap review |
| Running scenario and conventions | 5-37 | 337 | Shared fixture/environment design for all units; requires provenance and capability corrections |
| Source lesson 5 | 38-105 | 583 | F01: Inspect and validate a Patient |
| Source lesson 6 | 106-160 | 528 | F02: Retrieve a complete result set |
| Source lesson 7 | 161-212 | 583 | F03: Write without duplicate patients or partial transactions |
| Source lesson 8 | 213-286 | 587 | F04: Preserve code meaning |
| Source lesson 9 | 287-343 | 566 | F05: Ingest a bounded ADT sequence |
| Source lesson 10 | 344-396 | 503 | F07: Build a complete lab results view |
| Source lesson 11 | 397-452 | 492 | F08: Check appointment and slot behavior |
| Source lesson 12 | 453-505 | 496 | F09: Trace medication orders and dispensing |
| Source lesson 13 | 506-550 | 505 | F10: Review a document conversion |
| Source lesson 14 | 551-595 | 567 | F11: Launch a patient-scoped SMART app |
| Source lesson 15 | 596-650 | 502 | F12: Use a terminology service deliberately |
| Source lesson 16 | 651-696 | 499 | F14: Complete a bulk export |
| Source lesson 17 | 697-747 | 517 | F06: Trace a hub write to its source |
| Source lesson 18 | 748-793 | 518 | F15: Receive and deduplicate notifications |
| Source lesson 19 | 794-850 | 535 | F13: Apply a sourced disclosure policy |
| Source lesson 20 | 851-884 | 481 | F16: Adapt to a declared EHR sandbox |
| Source lesson 21 | 885-916 | 357 | F17: Demonstrate and hand off the integration hub |
| Quick reference | 917-929 | 116 | Cross-course reference index; pin standards and dependencies before authoring |

## Evidence strength and length

Sixteen teaching drafts have outcome bullets, an exercise, an answer key, a troubleshooting table and two open-ended self-check questions. The capstone adds a six-dimension qualitative rubric. These are substantive drafts, with technical corrections and missing execution evidence detailed in `technical-review.md`.

Of nine JSON fences, seven parse and two fail. Five parsed blocks identify a resource; two are datatype fragments. Parsing does not validate R4 structure, terminology, profiles or clinical meaning. No complete HL7 message is supplied. Eight bash fences and three untagged fences are snippets or pseudocode, not complete starter/solution projects.

The 17 lesson sections contain 8,819 words, about 44 minutes of reading at 200 words/minute. This excludes the introduction and references and excludes all exercise work. It is a rough inventory measure, not a course duration. No videos or measured exercise times were supplied. Future lesson durations must use authored content, tested work and beta timing; the landing-page times are unsupported.

## Related review files

- `proposed-outline.md`: outcomes, dependency order, source ranges and cumulative outputs.
- `gap-review.md`: current curriculum and marketing claims compared with this attachment.
- `technical-review.md`: source corrections, incomplete examples and evidence limits.
- `phi-review.md`: location-only identity review with no reproduced identity values.
- `teaching-quality.md`: authoring and assessment requirements incorporating the ten requested standards.
- `source-manifest.json` and `verification-review.json`: reproducible source identity and safe read-only endpoint observations.
- `todo-index.md`: exact file/line index of source-needed callouts.

## Source acquisition update (2026-10-02)

The user subsequently requested external sources. See `source-acquisition.md`, `source-gap-status.md` and `external-source-inventory.md` for newly acquired primary references, pinned code and synthetic assets. The earlier source-only findings and callouts above remain a historical checkpoint. Retrieval is not lesson verification.
