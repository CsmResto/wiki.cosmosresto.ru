---
title: Editing and Managing a Survey
description: Editing, deactivating, deleting and duplicating a survey.
summary: Modifying a survey
order: 2
updatedAt: 2026-08-24
---

## Editing a Survey

Surveys with the statuses `Draft`, `Published` and `Unpublished` can be edited if you have the appropriate permissions. A deactivated survey is available for viewing only.

### Restrictions After Receiving Responses

If the survey has no responses yet, the structure can be edited without restrictions.

If at least one response has been received, some parameters are locked so as not to change the type of already saved data.

Changes to a published survey apply to new completions, including via previously sent links. Already received responses are retained.

**After receiving responses, you cannot change:**

- The question type;
- The field mask in an `Input` type question;
- The choice type `Single` or `Multiple` in a `Choice` type question.

<!-- ![responses](/ru/images/surveys/surveys/survey-edit1.png) -->

[[delimiter rows=1]]

1. Open the survey.
2. Change the necessary parameters.
3. Click `Save`.
4. If the survey is published, confirm the change to the published form.

[[info type=custom color=#E06823]]
Text changes are not stored as a separate historical version: current names of questions, fields and options are displayed in old responses. When a new field or option is added, it is not present in old responses, and deleted elements are retained in those responses where they had already been filled in.
[[/info]]


## Duplicating a Survey

<!-- ![responses](/ru/images/surveys/surveys/survey-edit2.png) -->

[[delimiter rows=1]]

When duplicating, the system creates a new survey with the status `Draft` and copies the basic information, questions and pages, transition conditions and design settings. Publication settings and responses are not copied.

To duplicate a survey:

1. Open the context menu of the required survey by right-clicking on the required survey in the list. Or open the survey page.
2. Select the duplication action. The system will open the creation form and fill it with data from the original survey.
3. Make the necessary changes.
4. Click `Save`.

## Deactivating and Deleting a Survey

<!-- ![responses](/ru/images/surveys/surveys/survey-edit3.png) -->

[[delimiter rows=1]]

**Deactivation** is used if a previously published survey should no longer be returned to use. You can deactivate a survey with the status `Published` or `Unpublished`.

**Deletion** is available for a survey with the status `Draft`. After confirmation, the draft is deleted from the list.

**To Deactivate/Delete a survey:**

1. Open the context menu of the required survey by right-clicking on the required survey in the list. Or open the survey page.
2. Select the action `Delete` or `Deactivate`.
3. Confirm the action.

For previously published surveys, use **unpublishing or deactivation** depending on whether you plan to return the survey to use.

**After deactivation:**

- The status changes to `Deactivated`;
- Links become unavailable;
- The survey cannot be connected to a mailing;
- The survey opens only in view mode; editing and republishing are unavailable.

[[info type=custom color=#E06823]]
Deactivation is irreversible. Use unpublishing for a temporary stop.
[[/info]]

[[delimiter rows=3]]
