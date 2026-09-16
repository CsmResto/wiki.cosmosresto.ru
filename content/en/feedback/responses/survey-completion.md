---
title: Survey Completion by Respondent
description: How the survey is displayed to the respondent, how navigation, validation, progress saving and response submission work.
summary: Survey completion
order: 3
updatedAt: 2026-08-24
---

The respondent opens the survey via a link in a mobile device or computer browser.

<!-- [[gallery gap=12 layout=carousel]]
![responses](/ru/images/surveys/responses/response-completion1.png)
![responses](/ru/images/surveys/responses/response-completion2.png)
[[/gallery]] -->

## Starting Completion

A survey can be opened via a public or personal link.

- A **Public link** is not tied to a specific guest. The survey can be completed via it multiple times.
- A **Personal link** is tied to a guest, has a limited validity period and allows the response to be submitted only once.

If the survey is no longer published or the personal link has expired, a message about the survey's unavailability will be displayed. When reopening a personal link after successful submission, a message is displayed stating that the survey has already been completed.

## Navigating the Survey

Navigation buttons are added automatically by the system and do not require configuration.

- **Start** — displayed on the start screen.
- **Continue** — moves to the next page.
- **Back** — returns to the previous page, if available in the current scenario.
- **Submit** — displayed on the last page and saves the response.

If consent to the processing of personal data is enabled on the start screen, the `Start` button remains unavailable until the respondent checks the consent checkbox.

After successful submission, the system displays the configured final screen. If a final screen is not added, a standard survey completion message is displayed.

## Response Validation

When moving between pages and on submission, the system checks whether the required questions are filled in and whether the entered values match the required format.

On submission, the system additionally verifies that the personal link is still valid and that a response has not previously been submitted through it.

[[delimiter rows=1]]

## Saving Progress

During completion, the entered data is saved on the device and in the respondent's browser for as long as the survey is available.

If the respondent refreshes the page and the survey structure has not changed, completion will continue from the same place, and previously entered values will be preserved.

## Submitting a Response

1. The respondent fills in the survey pages available to them.
2. On the last page, they click `Submit`.
3. The system verifies the data and the link.
4. Upon successful verification, the answers to all questions are saved as a single response.
5. The respondent proceeds to the final screen.

## Consent and Unsubscribe

If the survey author added consent to the processing of personal data, the respondent must confirm it on the start screen before beginning the survey.

If unsubscribing from surveys is available on the start or final screen, the respondent can:

1. Click `Unsubscribe`.
2. Confirm the action in a separate window.
3. Return to the survey or complete the unsubscription.

After confirmation, the guest stops receiving subsequent survey mailings.

For anonymous completion via a public link, the unsubscribe block is not displayed.

## If the Survey Was Changed During Completion

If the respondent has already opened the survey and its structure was changed:

- Before the page is refreshed, they continue working with the open version;
- After refreshing, the current version is loaded, and completion starts over.

Structural changes include, for example, changing whether a question is required, removing a selected option, or changing text field restrictions.

[[info type=custom color=#E06823]]
In the current version, an edge-case scenario is possible: if the respondent started completing the old version and submitted a response after the structure was changed, the interface may show successful completion, but the response will not be saved if the old data no longer matches the current structure.
[[/info]]
