---
title: Responses and Working with Responses
description: Viewing, filtering, manually adding and deleting survey responses.
summary: "Viewing, filtering, adding, and deleting responses"
order: 1
updatedAt: 2026-08-24
---

The **Responses** section is used for viewing and analyzing survey results. Responses can be opened within a specific survey or in the general table across all available surveys.

- Within a survey, only responses for that survey are displayed.
- The general **Responses** table displays responses for all surveys available to you.

![responses](/en/images/surveys/responses/response1-en.png)

[[delimiter rows=1]]

## Table Settings

To change the displayed columns, click the table settings button in the upper-right corner.

In the panel that opens, you can:

✔ Select the columns to display  
✔ Change the column order — drag a column in the list by the icon to the left of its name  
✔ Pin the required columns — click the pin icon to the right of the column name. Pinned columns move to the beginning of the table  
✔ Restore the default settings using **Reset to Default**

![Table Settings](/en/images/surveys/responses/response-columns-en.png)

[[delimiter rows=1]]

By default, the table displays the following columns:

- **Response At** — date and time the response was submitted by the respondent.
- **Survey Name**
- **Location** — the location associated with the response. Automatically determined for responses from an automatic mailing based on the `Closed check` trigger; in other cases it may be absent.
- **Response Source** — shows how the response entered the system: `Mailing`, `Public link` or `Entered manually`.
- **Added By** — for a manual response, shows the employee who entered the data.
- **Guest**
- **Phone**
- **Text Responses** — the number of text comments in the response, including text in the `Custom option` field.
- **Ratings** — ratings left in `Rating` type questions.

The following columns can be enabled additionally. When enabled, they appear in the table according to the column order in the settings:

- **Response**
- **Channel** — delivery channel, if the survey was sent via mailing. For a public link and manual entry, the field may be empty.
- **Trigger** — the event after which the mailing was sent.
- **Triggered At** — date and time of the event.
- **Tables** — tables associated with the event.
- **Served By** — employees who served the guest.
- **E-mail**
- **Sex**
- **Birthday**
- **Favorite Location**
- **Last Visit**
- **Total Paid**
- **Checks**
- **Last Check**
- **Avg Check**
- **Avg Check Per Hour**
- **Loyalty Number**
- **Loyalty Discount**
- **Loyalty Registration**
- **Device** — **Mobile** or **Desktop**, depending on the device from which the response was submitted.

[[info type=custom color=#E06823]]
**Trigger**, **Triggered At**, **Tables** and **Served By** are filled in only for responses received after an automatic mailing. Guest data columns are filled in if the response is linked to a guest profile.
[[/info]]

## Response Filters

![responses](/en/images/surveys/responses/response2-en.png)

[[delimiter rows=1]]

### Period

The **Period** filter limits responses by the date they were received. The maximum date is the current day.

**Depending on the available data, responses can be filtered by the following parameters:**

- **Trigger date**
- **Response source**
- **Channel**
- **Who added** — the employee who added the manual response, or the system;
- **Served by** — the employee associated with the event;
- **Ratings** — a range of rating values; if a response has several ratings, a match on at least one is sufficient;
- **Tables**
- **Has text responses**
- **Device**

**In the general table, the following are additionally available:**

- **Locations** — including the option `No location`;
- **Survey** — filter by survey name. The list includes published and unpublished surveys; drafts are not displayed.

## Viewing a Response

To open detailed information, click on the response row.

![responses](/en/images/surveys/responses/response3-en.png)

[[delimiter rows=1]]

The details window may display:

- Response number;
- Guest and their phone number;
- Location;
- Survey name;
- Date and time of response;
- Response source;
- Employee who added the manual response;
- Device;
- Check number, if the response is linked to a check;
- Tables;
- Employees who served the guest;
- Answers to the survey questions.

## Adding a Response Manually

Manual addition is used when an employee conducts a survey on behalf of a guest, for example over the phone.

![responses](/en/images/surveys/responses/response4-en.png)

[[delimiter rows=1]]

1. Open the general **Responses** table.
2. Click `Add response`.
3. Select a **Location**. The list displays locations available to you.
4. Select a **Survey**. Before selecting a location, this field is unavailable. The list displays only published surveys for the selected location.
5. Enter the guest's primary phone number.
6. Click `Add response`.
7. If an active guest profile is found, the system will open the selected survey.
8. Complete the survey on behalf of the guest and submit the answers.

After submission, the system creates a new response and links it to the selected location, survey and guest. The source `Entered manually` is set for such a response.

[[info type=custom color=#E06823]]
If an active guest profile is not found by the specified phone number, the system will show an error and will not allow starting the survey.
[[/info]]

## Deleting a Response

Responses can be deleted in two ways:

- select one or more responses with the checkboxes on the left and click **Delete** in the bar that appears above the table on the right;
- right-click the response row and select **Delete**.

![responses](/en/images/surveys/responses/response5-en.png)

[[delimiter rows=1]]

Confirm the deletion in the confirmation window.

After deletion, the response receives the system status `Deleted` and is no longer used in working data.

The system also reduces the number of responses for the survey and recalculates related guest metrics, auto-tags and segments.

[[info type=custom color=#E06823]]
Deleting a response does not make the personal link available for retaking. When this link is opened again, the respondent will still see a message that the survey has already been completed.
[[/info]]

[[delimiter rows=3]]

---
