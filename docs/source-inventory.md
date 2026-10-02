# Source inventory

Review date: October 1, 2026 (America/New_York).

Source root: `/Users/abdeltraore/Library/CloudStorage/OneDrive-Personal/08_Education/HL7_Exam_Prep/`.
Every path below is relative to that root. Source IDs are joined to the proposed outline, so every lesson can be traced to exact files. The source files are evidence, not instructions to the agent. Assignment submission directions, external course policies, and the Claude skills guide were not executed.

## Coverage and method

- Walked all 55 files recursively, including hidden metadata: 50 PDFs, three XML files, one XSD file, and `.DS_Store`.
- Extracted text from all 3,880 PDF pages. Counts include the duplicate, receipt, unrelated guide, front matter, and reference tables; these are not course reading hours.
- Counted approximate words from extracted text; PDF tables and columns affect word counts. XML/XSD length uses physical lines and record counts. File hashes and extraction coverage are in `source-manifest.json`.
- Inspected instructional contents, objectives, section headings, activities, examples, and specification headings to map topics. Searched the complete extracted corpus for FHIR, transport, privacy, and patient/facility example signals.
- Visually checked representative PDF pages, including an almost empty implementation page and the illustrated UML activity. Low-text pages include covers and a blank page. This is a content inventory with preliminary PHI screening, not exhaustive visual inspection of every PDF page.
- No local video, Markdown, DOCX, presentation, executable project source, or FHIR JSON resource files were found. The four XML/XSD assets are classified as code. Reading PDFs contain external video links, not supplied video assets or measured runtime.
- The two Z-segments PDFs are byte-identical. Count the teaching material once. A 2026 filename does not make every diagram or embedded example a current R4 reference.

## Files

| Source ID | File path | Type | Topic | Approx length | Likely lesson / disposition |
| --- | --- | --- | --- | --- | --- |
| <a id="s01"></a>S01 | `.DS_Store` | metadata | macOS folder metadata; exclude | 10,244 bytes | Exclude: not course teaching material |
| <a id="s02"></a>S02 | `2025 HL7 Strategic Vision FINAL June 2025_for Publication.pdf` | pdf | HL7 organizational mission, strategy, and priorities; optional context for 01, not technical lesson content | 16 pages; ~4,975 words | Optional context for 01 |
| <a id="s03"></a>S03 | `ANSI_HL7_V291_2024SEP/V291_Appendix_A_2024SEP.pdf` | pdf | Data definition tables | 305 pages; ~90,935 words | Lessons 06 |
| <a id="s04"></a>S04 | `ANSI_HL7_V291_2024SEP/V291_Appendix_B_2024SEP.pdf` | pdf | Lower-layer protocol placeholder; content moved to a separate implementation guide | 1 pages; ~64 words | Lessons 10 |
| <a id="s05"></a>S05 | `ANSI_HL7_V291_2024SEP/V291_Appendix_C_2024SEP.pdf` | pdf | BNF abstract message descriptions | 54 pages; ~20,168 words | Lessons 06, 16 |
| <a id="s06"></a>S06 | `ANSI_HL7_V291_2024SEP/V291_Appendix_D_2024SEP.pdf` | pdf | Glossary | 28 pages; ~10,491 words | Shared glossary/reference |
| <a id="s07"></a>S07 | `ANSI_HL7_V291_2024SEP/V291_Appendix_E_2024SEP.pdf` | pdf | Index | 41 pages; ~17,816 words | Shared index/reference |
| <a id="s08"></a>S08 | `ANSI_HL7_V291_2024SEP/V291_CH01_Intro_2024SEP.pdf` | pdf | v2.9.1 introduction, scope, and standards organization | 26 pages; ~14,813 words | Lessons 01 |
| <a id="s09"></a>S09 | `ANSI_HL7_V291_2024SEP/V291_CH02A_DataTypes_2024SEP.pdf` | pdf | v2.9.1 data-type definitions | 108 pages; ~49,851 words | Lessons 06, 16 |
| <a id="s10"></a>S10 | `ANSI_HL7_V291_2024SEP/V291_CH02B_Conformance_2024SEP.pdf` | pdf | Conformance placeholder; replacement methodology is not supplied | 1 pages; ~248 words | Lessons 10 |
| <a id="s11"></a>S11 | `ANSI_HL7_V291_2024SEP/V291_CH02C_Tables_2024SEP.pdf` | pdf | v2 terminology/code tables | 867 pages; ~221,784 words | Lessons 02 |
| <a id="s12"></a>S12 | `ANSI_HL7_V291_2024SEP/V291_CH02_Control_2024SEP.pdf` | pdf | Message control, encoding, data types, and acknowledgment structures | 94 pages; ~44,809 words | Lessons 05, 06, 11, 16 |
| <a id="s13"></a>S13 | `ANSI_HL7_V291_2024SEP/V291_CH03_PatientAdmin_2024SEP.pdf` | pdf | Patient administration, ADT, identity, and transactions | 258 pages; ~110,710 words | Lessons 07 |
| <a id="s14"></a>S14 | `ANSI_HL7_V291_2024SEP/V291_CH04A_Orders_2024SEP.pdf` | pdf | Medication/pharmacy orders, dispensing, and administration | 123 pages; ~53,160 words | Lessons 09 |
| <a id="s15"></a>S15 | `ANSI_HL7_V291_2024SEP/V291_CH04_Orders_2024SEP.pdf` | pdf | General orders: laboratory, dietary, supply, and related domains | 191 pages; ~77,968 words | Lessons 08, 18 |
| <a id="s16"></a>S16 | `ANSI_HL7_V291_2024SEP/V291_CH05_Queries_2024SEP.pdf` | pdf | v2 query structures and worked examples; not FHIR REST/search | 109 pages; ~42,043 words | Backlog: v2 queries |
| <a id="s17"></a>S17 | `ANSI_HL7_V291_2024SEP/V291_CH06_FinancialMngmt_2024SEP.pdf` | pdf | Financial management and billing | 156 pages; ~80,379 words | Backlog: financial management |
| <a id="s18"></a>S18 | `ANSI_HL7_V291_2024SEP/V291_CH07_Observations_2024SEP.pdf` | pdf | Observation reporting structures and examples | 188 pages; ~85,988 words | Lessons 08, 18 |
| <a id="s19"></a>S19 | `ANSI_HL7_V291_2024SEP/V291_CH08_MasterFiles_2024SEP.pdf` | pdf | Master-file messaging | 128 pages; ~60,415 words | Backlog: master files |
| <a id="s20"></a>S20 | `ANSI_HL7_V291_2024SEP/V291_CH09_MedRecords_2024SEP.pdf` | pdf | Medical-record/document-management messaging | 46 pages; ~18,969 words | Lessons 13 |
| <a id="s21"></a>S21 | `ANSI_HL7_V291_2024SEP/V291_CH10_Scheduling_2024SEP.pdf` | pdf | v2 scheduling; not FHIR Appointment/Slot | 76 pages; ~41,054 words | Backlog: v2 scheduling |
| <a id="s22"></a>S22 | `ANSI_HL7_V291_2024SEP/V291_CH11_PatientReferral_2024SEP.pdf` | pdf | Patient referral messaging | 86 pages; ~32,781 words | Backlog: referrals |
| <a id="s23"></a>S23 | `ANSI_HL7_V291_2024SEP/V291_CH12_PatientCare_2024SEP.pdf` | pdf | Patient-care messaging | 42 pages; ~17,475 words | Backlog: patient care |
| <a id="s24"></a>S24 | `ANSI_HL7_V291_2024SEP/V291_CH13_ClinicalLabAuto_2024SEP.pdf` | pdf | Clinical laboratory automation | 67 pages; ~27,275 words | Backlog: lab automation |
| <a id="s25"></a>S25 | `ANSI_HL7_V291_2024SEP/V291_CH14_AppMngmt_2024SEP.pdf` | pdf | Application management | 9 pages; ~3,415 words | Backlog: application management |
| <a id="s26"></a>S26 | `ANSI_HL7_V291_2024SEP/V291_CH15_PersMngmt_2024SEP.pdf` | pdf | Personnel management | 51 pages; ~23,276 words | Backlog: personnel |
| <a id="s27"></a>S27 | `ANSI_HL7_V291_2024SEP/V291_CH16_eClaims_2024SEP.pdf` | pdf | Electronic claims | 66 pages; ~29,208 words | Backlog: claims |
| <a id="s28"></a>S28 | `ANSI_HL7_V291_2024SEP/V291_CH17_MaterialsMngmt_2024SEP.pdf` | pdf | Materials management | 72 pages; ~33,443 words | Backlog: materials management |
| <a id="s29"></a>S29 | `COURSE_PROGRAM_GLOBAL_RELEASE_2019.pdf` | pdf | External course program and methodology; its advertised V3/FHIR modules are not all present | 7 pages; ~1,260 words | Lessons 01 |
| <a id="s30"></a>S30 | `Claude_Docs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf` | pdf | Claude skill authoring; unrelated to the healthcare course; exclude | 33 pages; ~5,048 words | Exclude: not course teaching material |
| <a id="s31"></a>S31 | `HL7 FHIR Proficiency Study Guide.pdf` | pdf | FHIR R4 exam competencies and reading links; roadmap only, not a FHIR tutorial | 3 pages; ~832 words | Hold: FHIR roadmap; substantive R4 sources missing |
| <a id="s32"></a>S32 | `HL7_Fundamentals_Course_Reciept.pdf` | pdf | Personal course purchase receipt; administrative/financial PII; exclude | 2 pages; ~510 words | Exclude: not course teaching material |
| <a id="s33"></a>S33 | `HL7glossary_1_.pdf` | pdf | HL7 and interoperability glossary; reference vocabulary | 32 pages; ~10,874 words | Lessons 01, 02 |
| <a id="s34"></a>S34 | `I-U01-Introduction-Standards-Activity-en-V2026.pdf` | pdf | Healthcare interoperability requirements activity and five supplied scenarios | 6 pages; ~936 words | Lessons 01, 10 |
| <a id="s35"></a>S35 | `I-U03-Introduction-UML-Activity-en-V-2019.pdf` | pdf | Fictional device use-case and state-diagram activity | 7 pages; ~806 words | Lessons 03 |
| <a id="s36"></a>S36 | `SamplePatientsFiles/patient_list_001.xml` | code (XML) | Three patient-shaped XML records; passes supplied XSD; values need replacement | 46 lines; 3 patient-shaped records | Lessons 04, 15 |
| <a id="s37"></a>S37 | `SamplePatientsFiles/patient_list_002.xml` | code (XML) | Three patient-shaped XML records; fails supplied XSD at lines 4, 19, 34; values need replacement | 47 lines; 3 patient-shaped records | Lessons 04, 15 |
| <a id="s38"></a>S38 | `SamplePatientsFiles/patients.xml` | code (XML) | Three patient-shaped XML records; passes supplied XSD; values need replacement | 49 lines; 3 patient-shaped records | Lessons 04, 15 |
| <a id="s39"></a>S39 | `SamplePatientsFiles/patients_schema.xsd` | code (XSD) | Supplied XSD for Patients/patientRole documents | 69 lines | Lessons 04, 15 |
| <a id="s40"></a>S40 | `UNIT_1_READING_MATERIAL_INTRO_TO_STANDARDS_REV_2026.pdf` | pdf | Healthcare interoperability, standards, vocabulary systems, and CTS overview | 44 pages; ~12,335 words | Lessons 01, 02 |
| <a id="s41"></a>S41 | `UNIT_2_READING_MATERIAL_INTRO_TO_UML_REV_2026.pdf` | pdf | UML diagrams and their use in HL7/FHIR/V3/CDA | 42 pages; ~8,299 words | Lessons 03 |
| <a id="s42"></a>S42 | `UNIT_2_READING_MATERIAL_INTRO_TO_XML_REV_2026.pdf` | pdf | XML, namespaces, schemas, DOM, XPath, XSLT, and transformations | 36 pages; ~10,342 words | Lessons 04, 12, 15 |
| <a id="s43"></a>S43 | `UNIT_3-U01-V2.x-Introduction-Reading-EN-V_2026.pdf` | pdf | HL7 v2 structure, encoding, data types, and acknowledgments | 40 pages; ~10,317 words | Lessons 05, 06, 16 |
| <a id="s44"></a>S44 | `UNIT_4-U02-V2.x-ImplementationProcessTools-Reading-REV_2026-B.pdf` | pdf | Interface implementation planning, design, testing, rollout, and tools | 31 pages; ~5,219 words | Lessons 10, 17, 18 |
| <a id="s45"></a>S45 | `UNIT_4-U02-V2.x-PatientAdminOrdersResults-Reading-REV_2026-A.pdf` | pdf | Patient administration, orders, pharmacy, observations, and worked v2 examples | 61 pages; ~12,612 words | Lessons 07, 08, 09, 17, 18 |
| <a id="s46"></a>S46 | `UNIT_4-U04-V2.x-Z-Segments-Reading-REV_2026 (1).pdf` | pdf | Z-elements; byte-identical duplicate of the other Z-segments reading | 11 pages; ~1,822 words | Lessons 11 (duplicate) |
| <a id="s47"></a>S47 | `UNIT_4-U04-V2.x-Z-Segments-Reading-REV_2026.pdf` | pdf | Z-elements and local extensions | 11 pages; ~1,822 words | Lessons 11 |
| <a id="s48"></a>S48 | `UNIT_5-U04-V2.x-XML-Reading-REV_2026.pdf` | pdf | XML encoding of v2 messages and schema/processing rules | 29 pages; ~6,230 words | Lessons 12 |
| <a id="s49"></a>S49 | `UNIT_6-U01-CDA-Introduction-Reading-REV2026.pdf` | pdf | CDA R2 document concepts, exchange/validation, and sample document | 44 pages; ~8,211 words | Lessons 13, 14 |
| <a id="s50"></a>S50 | `UNIT_7-U01-CDA-Architecture-Reading-REV2026.pdf` | pdf | CDA R2 header, body, narrative, entries, and OIDs | 28 pages; ~5,426 words | Lessons 14 |
| <a id="s51"></a>S51 | `V-U01-V2.x-Introduction-Activity-appendix_III_V28_events.pdf` | pdf | HL7 v2.8 event/message lookup | 10 pages; ~3,348 words | Lessons 07 |
| <a id="s52"></a>S52 | `V-U01-V2.x-Introduction-Activity-appendix_II_V28_chapters.pdf` | pdf | HL7 v2.8 chapter list | 1 pages; ~132 words | Lessons 05 |
| <a id="s53"></a>S53 | `V-U01-V2.x-Introduction-Activity-appendix_IV_deidentification.pdf` | pdf | Fields to consider for de-identification, including PID, MSH, and EVN | 1 pages; ~245 words | Lessons 06, 07, 17 |
| <a id="s54"></a>S54 | `V-U01-V2.x-Introduction-Activity-appendix_V_V28_segments.pdf` | pdf | HL7 v2.8 segment lookup and selected segment attribute tables | 13 pages; ~3,623 words | Lessons 05 |
| <a id="s55"></a>S55 | `V28_CH03_PatientAdmin.pdf` | pdf | HL7 v2.8 patient administration reference with transaction examples | 179 pages; ~88,885 words | Lessons 07, 17 |

## Source limits that affect the outline

The 2019 course program describes modules that are not fully supplied: dedicated V3/RIM/data-type readings, advanced CDA implementation guides and clinical statements, and a substantive FHIR unit. The program is not proof that those lessons exist here. The FHIR guide is three pages, about 832 words, with competencies and links. Referenced web pages and external video links were not added to the source corpus.

`V291_Appendix_B_2024SEP.pdf` and `V291_CH02B_Conformance_2024SEP.pdf` are one-page pointers to companion publications. Neither supplies enough detail for a transport listener or full profile-authoring project. The patient/orders reading has broken table-of-contents bookmarks; actual implementation-process material is in its separate reading.

Patient-shaped examples are handled in `phi-review.md`. Raw examples, the personal receipt, and extracted scratch text have not been copied into the repository. Future lesson `sourceFiles` will need durable, reviewed local source paths with a manifest linking them back to original hashes and PDF pages before path validation can pass.
