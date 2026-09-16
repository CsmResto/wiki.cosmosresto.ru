---
title: Exporting Responses
description: Rules for exporting responses for a single survey and from the general Responses table.
summary: Exporting responses
order: 2
updatedAt: 2026-08-24
---

Export allows you to download survey results for additional analysis in spreadsheets or BI systems.

Data can be exported from the responses of a specific survey or from the general **Responses** table.

## General Export Rules

When exporting, the system takes into account the current view of the table. The columns exported are those selected in the column display settings, and their order. The applied sorting and active filters are taken into account.

The **Text Responses** and **Ratings** columns are used only in the table interface and **are not included in the export**. Instead, the system exports detailed answers to the questions.

[[info type=custom color=#E06823]]
The detailed block always preserves the structure of the survey questions. If a question was not shown to the respondent due to conditions, or the answer is missing, the corresponding value remains empty.
[[/info]]

[[delimiter rows=1]]

## Exporting Responses for a Single Survey

<!-- [[gallery gap=12 layout=carousel]]
![responses](/ru/images/surveys/responses/response-export1.png)
![responses](/ru/images/surveys/responses/response-export2.png)
[[/gallery]] -->

1. Open a survey from the list of surveys
2. Click `View responses`
3. Click the export button

If the export is performed from the **Responses** tab of a specific survey:

- Each question is exported into a separate column;
- The column name becomes the text of the question;
- Questions are arranged in the same order as in the survey;
- Values for each question are filled in the response row.

This format is convenient to use when you need to compare respondents' answers to the same set of questions.

## Exporting the General Responses Table

<!-- ![responses](/ru/images/surveys/responses/response-export3.png) -->

[[delimiter rows=1]]

1. Open the section `Feedback -> Responses`
2. Set filtering and other table parameters
3. Click the export button

If the export is performed from the general **Responses** table:

- The survey name is added to the export;
- Questions and answers are output through the `Question` and `Answer` fields;
- The export takes into account the selected filters by period, locations, surveys and other parameters.

This option is suitable for analyzing data across several surveys at once.

## Response Format by Question Type

- **Rating and NPS** — a numeric value is exported.
- **Input** — the entered text is exported. If a question has several fields, their values are saved together. For specialized fields, for example first name, last name or phone number, the field name and the entered value are specified.
- **Choice** — the selected options are exported. If the respondent used `Custom option`, its text is also included in the value.

[[info type=custom color=#E06823]]
Deleted responses are not included in the export.
[[/info]]
