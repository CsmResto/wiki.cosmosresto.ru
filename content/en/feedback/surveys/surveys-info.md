---
title: Surveys
description: A tool for creating surveys, collecting feedback from guests and analyzing the received responses.
summary: Overview of the Surveys module
order: 1
updatedAt: 2026-08-24
---

**Surveys** help you collect feedback from guests after a visit, obtain ratings and comments, and then analyze the responses in COSMOS.

A survey can be distributed via a public link or sent to specific guests through mailings. Received responses are saved in the **Responses** section and can be linked to the guest, the mailing, and the event after which the survey was sent.

[[info type=custom color=#E06823]]
To get started, create a Survey, publish it, and select a distribution method.
[[/info]]

## Main Usage Scenarios

Surveys can be used for the following tasks:

- Collecting anonymous feedback via a public link, for example through a QR code, website or social networks;
- Sending personal surveys to guests via mailings;
- Collecting ratings of the visit, service or quality;
- Taking individual ratings into account in guest statistics;
- Analyzing responses by surveys, guests, sources, channels and related events.

[[delimiter rows=1]]

## Survey List

The list is divided into published and unpublished surveys.

<!-- ![responses](/ru/images/surveys/surveys/survey-info1.png) -->

[[delimiter rows=1]]

### List Tabs

- **Published** — contains only surveys with the status `Published`.
- **Unpublished** — contains active surveys with the statuses `Draft` and `Unpublished`, as well as `Deactivated`.

[[delimiter rows=1]]

## Survey Information in the List

The table can display the following data:

- **Creation date**
- **Publication date** — date and time of the last publication. Displayed for published surveys and updated with each publication.
- **Name**
- **Location**
- **Responses** — the number of active responses for the survey. The value is not reset after unpublishing or republishing.
- **In guest statistics** — shows whether the survey has at least one question with the `Include in guest statistics` setting enabled.
- **Author**
- **Last modified** — date and time of the last save, as well as the employee who made the changes.

## Search and Filters

<!-- ![responses](/ru/images/surveys/surveys/survey-info2.png) -->

[[delimiter rows=1]]

Use the available filters to search for the survey you need.

- **Search** — searches by survey name. Enter at least 3 characters.
- **Geo** — leaves in the list surveys for the selected available locations.
- **Author** — filters surveys by the employee who created them. The list of authors depends on the active tab, the selected locations and your access rights.
- **Last modified** — limits the list by the date of the last modification.
- **Has responses** — allows you to show only surveys with responses or only surveys without responses.
- **Status** — available on the `Unpublished` tab and allows you to filter drafts, unpublished and deactivated surveys.

## Survey Statuses

A survey can have one of four statuses.

- **Draft** — the survey has been created but has never been published. It can be configured, deleted or published. Respondents cannot complete such a survey.
- **Published** — the survey is available for completion and collecting responses. The public link is active, and the survey can be used in mailings.
- **Unpublished** — collection of new responses is stopped. Previously received responses are retained. The survey can be modified and republished.
- **Deactivated** — the survey has been permanently withdrawn from use. It is retained for viewing history and responses, but editing and republishing are unavailable.

### Survey Lifecycle

1. Create the survey. The system will save it with the status `Draft`.
2. Publish the survey. The status will change to `Published`, and response collection will begin.
3. If necessary, unpublish the survey. The status will change to `Unpublished`, and new responses will stop coming in.
4. If necessary, republish the unpublished survey.
5. If the survey should no longer be used, deactivate it. A deactivated survey cannot be returned to use.

[[info type=custom color=#E06823]]
A survey in any status can be duplicated. The copy is always created as a new draft. Publication settings and previously received responses are not carried over to the copy.
[[/info]]

[[delimiter rows=3]]
