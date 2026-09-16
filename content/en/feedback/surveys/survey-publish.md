---
title: Publishing and Distributing a Survey
description: Publishing a survey, public and personal links, mailings, unpublishing and deactivation.
summary: Distributing a survey
order: 3
updatedAt: 2026-08-24
---

After creation, a survey is saved as a draft. For respondents to be able to complete it, the survey must be published.

After the first publication, the system creates a permanent public link and makes the survey available for connecting to mailings.

## Publishing a Survey

<!-- ![responses](/ru/images/surveys/surveys/survey-publish1.png) -->

[[delimiter rows=1]]

A survey with the status `Draft` or `Unpublished` can be published.

1. Open the survey.
2. Check its structure and settings.
3. Specify the survey completion period (applies to personal links, more on this below)
4. Click `Publish`.
5. Confirm publication in the modal window.

When publishing, the system saves the current changes and validates the form. Upon successful publication:

- The status changes to `Published`;
- A public link is created upon first publication;
- The survey becomes available for selection in mailings.

[[info type=custom color=#E06823]]
Upon republishing, a new public link is not created. The system reactivates the link generated at the first publication.
[[/info]]

## Public Link

The public link is intended for open completion of the survey without being tied to a specific guest.

**Features:**

- Suitable for a QR code, website, social networks and other open channels;
- Responses can be sent via one public link with no limit on the number of completions;
- If the survey is unpublished or deactivated, the public link becomes unavailable for completion and copying.

## Personal Link

A personal link is generated for a specific guest when the survey is sent via a mailing. Through it, the system can link the received response to the guest's profile.

**Features:**

- A response can be submitted via one link only once;
- The link has a limited validity period.

### Survey Completion Period

The **Survey completion period** parameter determines how long the personal link remains valid from the moment the message is sent.

[[info type=custom color=#E06823]]
The default is **3 days**. If you change the completion period, the new value applies to all personal links for this survey, including those already sent.
[[/info]]

After the period expires, the respondent will see a message that the survey is unavailable.

## Sending a Survey via Mailing

<!-- [[gallery gap=12 layout=carousel]]
![responses](/ru/images/surveys/surveys/survey-publish2.png)
![responses](/ru/images/surveys/surveys/survey-publish3.png)
[[/gallery]] -->

To add a survey to a mailing message:

1. Open the creation or editing of a mailing in the `Marketing -> Mailings` section.
2. At the `Content` step, add the `Survey link` variable to the message text.
3. In the `Related survey` field, select the required survey.
4. Save the mailing settings.

The `Related survey` field is required. The list displays **only published surveys**.

When sending, the system generates a personal link for each recipient.

Additionally, the system checks:

- The guest must not be unsubscribed from survey mailings;
- For an automatic mailing with the `Closed check` trigger, the survey's location must match the order's location.

[[info type=custom color=#E06823]]
In the current implementation, the response location is determined automatically only for responses received from an automatic mailing with the `Closed check` trigger. For other methods of receiving a response, the location field may be empty.
[[/info]]

### Related Mailings

The **Distribution** tab displays a block of related mailings. For each mailing, its name and current status are shown. This allows you to see where the current survey is being used.

<!-- ![responses](/ru/images/surveys/surveys/survey-publish4.png) -->

[[delimiter rows=1]]

## Unpublishing a Survey

A survey with the status `Published` can be unpublished.

1. Open the published survey.
2. Click `Unpublish`.
3. Confirm the action.

**After confirmation:**

- The status changes to `Unpublished`;
- The public link stops working;
- The survey becomes unavailable for new connections in mailings;
- Active mailings using this survey are switched to the status `Paused`.

[[info type=custom color=#E06823]]
Unpublishing does not save the current unsaved changes to the form. Save your changes before performing this action.
[[/info]]

### Republishing

An unpublished survey can be published again. Republishing follows the same steps as the initial publication. In this case, the previous public link is used.

[[info type=custom color=#E06823]]
Related mailings previously switched to the status `Paused` are not automatically resumed. They must be activated separately.
[[/info]]
