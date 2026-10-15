---
title: Create Auto Mailing
description:
summary: "Creating, starting, and pausing an auto mailing"
order: 2
updatedAt: 2026-09-29
---

[[delimiter rows=1]]

An Auto mailing starts automatically when a specified event occurs and works according to the configured conditions, schedule, and sending limits.

To create an Auto mailing, go to **Marketing → Mailings**, select **Auto**, and click **Create**.

## Main Details

![Create](/en/images/mailings/auto1-en.png)

[[delimiter rows=1]]

Configure the main mailing settings:

- **Type**
  - **Mass** — for informational messages not related to sales or service events
  - **Marketing** — for promotional messages intended to encourage guests to make a purchase
  - **Service** — for messages related to guest service or a specific service event
- **Extra Priority** — enable this option if the mailing should be sent without taking the general limits into account
- **Name**
- **Segments**
- **Description**
- **Set Mailing Limits**

[[info type=custom color=#E06823]]
General limits do not apply to mailings with **Extra Priority**. If individual limits are configured for the mailing, they still apply.
[[/info]]

After completing the main details, click **Next**.


## Conditions

![Create](/en/images/mailings/auto2-en.png)

[[delimiter rows=1]]

Configure the conditions for triggering and sending the mailing:

- **Trigger** - the event that sends the mailing to a guest. The fields below the trigger depend on the selected trigger
- **Filters**
- **Delayed Sending** - enable this option to configure when the message is sent after the trigger occurs:
  - **Simple Delay** - the message is sent after the specified delay
  - **Schedule** - the message is sent only on the selected days of the week and within the specified time interval

When **Schedule** is selected, specify the days of the week and the time interval during which messages can be sent. If the trigger occurs outside this interval, the message is postponed until the next available time.

### Triggers

![Triggers](/en/images/mailings/auto-triggers-en.png)

[[delimiter rows=1]]

**Entering a Segment** - the mailing is sent when a guest enters one of the segments selected in the **Added to segments** field. Choose who receives the mailing:

- **Only New Guests** - guests who enter the segment after the mailing is started
- **Current And New Guests** - right after the start, all guests who are already in the segment, and then guests who enter the segment later

If a guest is in several selected segments at once, the mailing is sent to them only once. With delayed sending, the system checks before sending that the guest is still in at least one of the selected segments. If the guest has left them, the message is not sent.

For guests who were already in the segment when the mailing was started, the delay and schedule are counted from the moment the mailing is started.

The recipient choice cannot be changed in an active mailing.

**Guest Registration in Loyalty Program** - the mailing is sent when a guest registers in the loyalty program. This applies both to new guests and to guests who were already in the system before registering. Creating a guest without registering in the loyalty program does not trigger the mailing.

**Closed Order** - the mailing is sent when the guest's order is closed.

**Bonus Accrual** - the mailing is sent when bonuses are accrued to the guest.

**Bonus Write-off** - the mailing is sent when the guest's bonuses are written off.

![Loyalty Group Change](/en/images/mailings/auto-loyalty-group-en.png)

[[delimiter rows=1]]

**Loyalty Group Change** - the mailing is sent when a guest moves from one loyalty group to another. In the **From Loyalty Groups** field, select the groups the guest must move from, and in the **To Loyalty Groups** field, the groups the guest must move to. The mailing is sent for any move from the selected groups to the selected groups, so one mailing can cover, for example, all level upgrades. The first group a guest receives when registering in the loyalty program is not considered a group change.

See setup examples in **[Use Cases](#use-cases)**.


## Content

![Create](/en/images/mailings/auto3-en.png)

[[delimiter rows=1]]

Select the sending channel and configure the message content.

Available channels:

- **SMS** — enter the message text
- **Push** — if necessary, specify a title and enter the push notification text
- **E-mail** — specify the subject and message text. You can add HTML instead of text. If necessary, attach files. You can specify a name and comment for each attached file

Guest, location, and loyalty program data can be used to personalize the message. To add a variable, click the button in the message field and select the required value.

The result is displayed in the preview.

After configuring the content, click **Create**. The mailing will be saved as a draft.

You can start the draft immediately from the mailing page or open it later on the **Draft** tab.


## Start Mailing

![Create](/en/images/mailings/auto-drafts-en.png)

[[delimiter rows=1]]

To start a saved mailing, go to the **Draft** tab, open the required mailing, and click **Start**.

In the confirmation window, click **Start** again. The current changes to the mailing will be saved automatically.

After it is started, the mailing moves from **Draft** to **Active** and begins working when the specified trigger occurs, taking into account the configured delay, schedule, and sending limits.

[[info type=custom color=#E06823]]
An active Auto mailing can be opened and edited at any time. Any changes you make apply to subsequent mailing activity.
[[/info]]


## Pause

![Pause](/en/images/mailings/auto-pause-en.png)

[[delimiter rows=1]]

To stop an Auto mailing, open it and click **Pause**. In the confirmation window, click **Pause** again.

A mailing can also be paused by the system if segments, filters, locations, or other objects used in its settings have been changed or deleted, making it impossible to send messages. The deleted value is automatically cleared from the mailing settings.

The mailing will receive the **On pause** status. While the mailing is paused, messages are not sent, including those that have already been queued for sending.

To view paused mailings, open **Filters** and select the **On pause** status.

## Resume Mailing

To resume a mailing, open it and click **Activate**. In the confirmation window, click **Activate** again.

For the **Entering a Segment** trigger, choose again who receives the mailing when activating it. If current and new guests are selected, current guests are those who are in the segment at the moment of activation.

If the mailing was paused by the system, specify a new value to replace the deleted one before activation, for example, select another segment, and save the changes. The mailing cannot be activated until the missing value is replaced.


## Use Cases

### Birthday Gift for Regular Guests

There is no separate birthday trigger. To congratulate guests, use a segment with the **Birthday** condition and the **Entering a Segment** trigger:

1. In **Main Details**, select a segment of regular guests in the **Segments** field - only they will receive the gift.
2. In **Conditions**, select the **Entering a Segment** trigger, in the **Added to segments** field - a segment with the **Birthday** = today condition, recipients - **Current And New Guests**.
3. In **Content**, add the guest name variable to the text.

[[info type=custom color=#E06823]]
Segments are recalculated once a day. A guest who registered after the recalculation and has a birthday today will enter the segment only at the next recalculation and will not receive the mailing that day.
[[/info]]

### Welcome to the Loyalty Program

1. In **Conditions**, select the **Guest Registration in Loyalty Program** trigger.
2. Enable **Delayed Sending** with **Simple Delay**, for example 1 hour, so that the message does not arrive right after registration.
3. In **Content**, explain how to earn and spend bonuses.

### New Level Congratulations

1. In **Conditions**, select the **Loyalty Group Change** trigger.
2. In the **From Loyalty Groups** field, select the lower groups, for example 0% and 3%, and in the **To Loyalty Groups** field - the higher ones, for example 5%, 7%, and 10%. This way, the mailing is sent only when the level goes up.
3. In **Content**, congratulate the guest and tell them about the new benefits.

### Thank You After a Visit

1. In **Conditions**, select the **Closed Order** trigger.
2. Enable **Delayed Sending** with **Simple Delay**, for example 2 hours.
3. In **Content**, thank the guest for the visit.

[[delimiter rows=3]]

---
