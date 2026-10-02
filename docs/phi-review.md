# Preliminary PHI and identifying-data review

Review date: October 1, 2026. Source paths are relative to `HL7_Exam_Prep/`; PDF pages below are physical 1-based pages, including covers. XML locations are physical line numbers.

## Findings and handling

The source includes patient-shaped records with names, identifiers, dates of birth, facility/application labels, organization identifiers, and sometimes address/contact or national-identifier-shaped values. Teaching or standard examples may be fictional, but the values are not assumed synthetic merely because they appear in study material. This report does not assert that any identified example is a real patient's record. No original values are reproduced here.

Do not copy these values into lesson content, public fixtures, source snapshots, or project code. Recreate example values synthetically while keeping the source-defined message structure and meaning. Treat facility identifiers and organization OIDs as identifying-data candidates even where they are not patient identifiers. Public author/editor credits alone are not PHI.

## High-priority local record files

| File | Locations | Candidate identifying content | Action |
| --- | --- | --- | --- |
| `SamplePatientsFiles/patient_list_001.xml` | Patient blocks lines 3-15, 17-30, 32-44; birth value line 40; provider blocks lines 12, 27, 42 | Names with patient/organization IDs; one birth date; facility/organization roots | Replace every identity/facility value. Retain source-defined structure for XSD exercises. |
| `SamplePatientsFiles/patient_list_002.xml` | Patient blocks lines 3-16, 18-31, 33-46; birth values 11, 26, 41; provider blocks 13, 28, 43 | Names with patient IDs and dates of birth, provider names and organization roots | Replace values. This document fails supplied XSD at lines 4, 19, 34; preserve only structural failures in marked synthetic fixtures. |
| `SamplePatientsFiles/patients.xml` | Patient blocks lines 3-17, 19-32, 34-47; birth values 12, 27, 42; provider blocks 14, 29, 44 | Names with one or more IDs, dates of birth, provider names and roots | Replace every identity/facility value; retain schema-valid structure. |
| `SamplePatientsFiles/patients_schema.xsd` | Entire file (69 lines) | Schema definitions, not populated patient records | No populated patient values found. Review defaults/enumerations before future publication. |
| `HL7_Fundamentals_Course_Reciept.pdf` | Pages 1-2 | Personal purchase/contact/transaction information, not course teaching content | Exclude the entire receipt. Administrative PII is included in this review even though it is not a clinical record. |

## PDF example locations requiring review or synthetic replacement

The scan detects populated-looking `PID|...`, `MSH|...`, CDA patient tags, and national-identifier-shaped patterns. A header-only candidate may contain facility/application values without a patient identity. Some matches are explanatory text or placeholders; they remain review candidates rather than proof of PHI.

| Source file | Candidate category | Physical PDF pages |
| --- | --- | --- |
| `ANSI_HL7_V291_2024SEP/V291_CH02_Control_2024SEP.pdf` | Patient segment examples | 47 |
| `ANSI_HL7_V291_2024SEP/V291_CH02_Control_2024SEP.pdf` | Facility/application message headers | 39, 44-47, 76, 91-94 |
| `ANSI_HL7_V291_2024SEP/V291_CH03_PatientAdmin_2024SEP.pdf` | Patient segment examples | 99, 102, 105, 107, 115, 228-233, 240-249, 258 |
| `ANSI_HL7_V291_2024SEP/V291_CH03_PatientAdmin_2024SEP.pdf` | Facility/application message headers | 99, 102, 105, 107, 115, 228-233, 240-249, 258 |
| `ANSI_HL7_V291_2024SEP/V291_CH03_PatientAdmin_2024SEP.pdf` | National-identifier-shaped values | 229-232 |
| `ANSI_HL7_V291_2024SEP/V291_CH04A_Orders_2024SEP.pdf` | Patient segment examples | 33, 113 |
| `ANSI_HL7_V291_2024SEP/V291_CH04A_Orders_2024SEP.pdf` | Facility/application message headers | 13, 32-33, 110-111, 113, 123 |
| `ANSI_HL7_V291_2024SEP/V291_CH04A_Orders_2024SEP.pdf` | National-identifier-shaped values | 33, 113 |
| `ANSI_HL7_V291_2024SEP/V291_CH04_Orders_2024SEP.pdf` | Facility/application message headers | 106-107, 127-128 |
| `ANSI_HL7_V291_2024SEP/V291_CH04_Orders_2024SEP.pdf` | National-identifier-shaped values | 115-117, 127-128 |
| `ANSI_HL7_V291_2024SEP/V291_CH05_Queries_2024SEP.pdf` | Patient segment examples | 62, 67-68, 72, 77, 82, 103 |
| `ANSI_HL7_V291_2024SEP/V291_CH05_Queries_2024SEP.pdf` | Facility/application message headers | 12, 15-16, 57-62, 67-68, 72, 76-77, 82, 87, 89-90, 93, 96-97, 99-100, 103, 106 |
| `ANSI_HL7_V291_2024SEP/V291_CH06_FinancialMngmt_2024SEP.pdf` | Patient segment examples | 155-156 |
| `ANSI_HL7_V291_2024SEP/V291_CH06_FinancialMngmt_2024SEP.pdf` | Facility/application message headers | 155-156 |
| `ANSI_HL7_V291_2024SEP/V291_CH06_FinancialMngmt_2024SEP.pdf` | National-identifier-shaped values | 155 |
| `ANSI_HL7_V291_2024SEP/V291_CH07_Observations_2024SEP.pdf` | Patient segment examples | 106, 111, 132, 170 |
| `ANSI_HL7_V291_2024SEP/V291_CH07_Observations_2024SEP.pdf` | Facility/application message headers | 100, 106, 111, 132, 170 |
| `ANSI_HL7_V291_2024SEP/V291_CH08_MasterFiles_2024SEP.pdf` | Facility/application message headers | 16-17, 19, 105, 127-128 |
| `ANSI_HL7_V291_2024SEP/V291_CH09_MedRecords_2024SEP.pdf` | Patient segment examples | 46 |
| `ANSI_HL7_V291_2024SEP/V291_CH09_MedRecords_2024SEP.pdf` | Facility/application message headers | 46 |
| `ANSI_HL7_V291_2024SEP/V291_CH10_Scheduling_2024SEP.pdf` | Patient segment examples | 74-76 |
| `ANSI_HL7_V291_2024SEP/V291_CH10_Scheduling_2024SEP.pdf` | Facility/application message headers | 74-76 |
| `ANSI_HL7_V291_2024SEP/V291_CH10_Scheduling_2024SEP.pdf` | National-identifier-shaped values | 74-76 |
| `ANSI_HL7_V291_2024SEP/V291_CH11_PatientReferral_2024SEP.pdf` | Patient segment examples | 80-84 |
| `ANSI_HL7_V291_2024SEP/V291_CH11_PatientReferral_2024SEP.pdf` | Facility/application message headers | 79-84 |
| `ANSI_HL7_V291_2024SEP/V291_CH12_PatientCare_2024SEP.pdf` | Patient segment examples | 40-41 |
| `ANSI_HL7_V291_2024SEP/V291_CH12_PatientCare_2024SEP.pdf` | Facility/application message headers | 40-41 |
| `ANSI_HL7_V291_2024SEP/V291_CH13_ClinicalLabAuto_2024SEP.pdf` | Facility/application message headers | 65-67 |
| `ANSI_HL7_V291_2024SEP/V291_CH15_PersMngmt_2024SEP.pdf` | Facility/application message headers | 51 |
| `ANSI_HL7_V291_2024SEP/V291_CH17_MaterialsMngmt_2024SEP.pdf` | Facility/application message headers | 71 |
| `UNIT_3-U01-V2.x-Introduction-Reading-EN-V_2026.pdf` | Patient segment examples | 13 |
| `UNIT_3-U01-V2.x-Introduction-Reading-EN-V_2026.pdf` | Facility/application message headers | 13 |
| `UNIT_3-U01-V2.x-Introduction-Reading-EN-V_2026.pdf` | National-identifier-shaped values | 13 |
| `UNIT_4-U02-V2.x-PatientAdminOrdersResults-Reading-REV_2026-A.pdf` | Patient segment examples | 19, 46-60 |
| `UNIT_4-U02-V2.x-PatientAdminOrdersResults-Reading-REV_2026-A.pdf` | Facility/application message headers | 19, 46-59 |
| `UNIT_5-U04-V2.x-XML-Reading-REV_2026.pdf` | Patient segment examples | 9 |
| `UNIT_5-U04-V2.x-XML-Reading-REV_2026.pdf` | Facility/application message headers | 9 |
| `UNIT_6-U01-CDA-Introduction-Reading-REV2026.pdf` | CDA patient/name/birth tags | 30-34 |
| `UNIT_7-U01-CDA-Architecture-Reading-REV2026.pdf` | CDA patient/name/birth tags | 10-12, 14-15 |
| `V28_CH03_PatientAdmin.pdf` | Patient segment examples | 47, 49, 51, 53, 57, 151-155, 162-169, 178-179 |
| `V28_CH03_PatientAdmin.pdf` | Facility/application message headers | 47, 49, 51, 53, 57, 151-155, 162-169, 178-179 |
| `V28_CH03_PatientAdmin.pdf` | National-identifier-shaped values | 152-154 |

## Other source material and coverage limits

- `I-U01-Introduction-Standards-Activity-en-V2026.pdf`, page 5, and the standards reading contain named scenario organizations and locations. These are supplied teaching scenarios, not evidence of actual facility behavior. Replace organization labels/identifiers in published examples and preserve the stated scenario constraints.
- `I-U03-Introduction-UML-Activity-en-V-2019.pdf`, pages 4-5, contains a fictional device organization, participant labels, a coordinate example, and an illustration. Keep fictional framing; do not present device behavior as a clinical claim or reuse participant names as patient identities.
- The CDA architecture reading explicitly says its scenario was devised for educational purposes (page 3). That does not justify publishing actual-looking identity values from its worked XML unchanged.
- Some PDF examples wrap segment records across lines or include images. The complete extracted text was screened and instructional source examples were located, with representative visual review. This is preliminary screening; it cannot guarantee detection of every identifier in an image, diagram, prose, or split-line record. Visually inspect each selected example page during lesson authoring, and use synthetic values regardless of whether a pattern matched it.
- Names of document editors and public organizations were not treated as patient records by themselves. No patient-shaped populated record patterns were found in the other PDFs by this scan; absence of a match is not proof of synthetic provenance.
- `.DS_Store` is binary operating-system metadata, inventoried and excluded. The unrelated Claude guide is excluded from course content. Raw PDFs, patient XML, the receipt, and extraction scratch files have not been committed or uploaded.
- No lesson content exists at this checkpoint, so no original source patient values have been copied into lessons.

## Later content review

Inspect synthetic fixtures and lesson examples for name/ID/birth-date combinations, contact details, facility/application identifiers, OIDs, and metadata before committing them. Record any new findings by file and line without reproducing the original values. Preserve source-defined clinical/standards behavior; synthetic identity replacement does not authorize inventing clinical workflows.
