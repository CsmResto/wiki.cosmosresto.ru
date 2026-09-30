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

In the first step, configure the main mailing settings:

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

In the second step, configure the conditions for triggering and sending the mailing:

- **Trigger**
- **Segments**
- **Filters**
- **Delayed Sending** — enable this option to configure when the message is sent after the trigger occurs:
  - **Simple Delay** — the message is sent after the specified delay
  - **Schedule** — the message is sent only on the selected days of the week and within the specified time interval

When **Schedule** is selected, specify the days of the week and the time interval during which messages can be sent. If the trigger occurs outside this interval, the message is postponed until the next available time.


## Content

![Create](/en/images/mailings/auto3-en.png)

[[delimiter rows=1]]

In the third step, select the sending channel and configure the message content.

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

To stop an Auto mailing, open it and click **Pause**. In the confirmation window, click **Pause** again.

A mailing can also be paused by the system if segments, filters, locations, or other objects used in its settings have been changed or deleted, making it impossible to send messages. The deleted value is automatically cleared from the mailing settings.

The mailing will receive the **On pause** status. While the mailing is paused, messages are not sent, including those that have already been queued for sending.

To view paused mailings, open **Filters** and select the **On pause** status.

## Resume Mailing

To resume a mailing, open it and click **Activate**. In the confirmation window, click **Activate** again.

If the mailing was paused by the system, specify a new value to replace the deleted one before activation, for example, select another segment, and save the changes. The mailing cannot be activated until the missing value is replaced.


[[delimiter rows=1]]

---
