---
title: Create Manual Mailing
description:
summary: "Creating and starting a manual mailing"
order: 3
updatedAt: 2026-09-29
---

[[delimiter rows=1]]

A Manual mailing is started by a user and sent to the selected audience once.

To create a Manual mailing, go to **Marketing → Mailings**, select **Manual**, and click **Create**.

## Main Details

![Create](/en/images/mailings/manual1-en.png)

[[delimiter rows=1]]

![Guests List](/en/images/mailings/manual-guests-en.png)

[[delimiter rows=1]]

In the first step, configure the main mailing settings:

- **Type**
  - **Mass** — for informational messages not related to sales or service events
  - **Marketing** — for promotional messages intended to encourage guests to make a purchase
  - **Service** — for messages related to guest service or a specific service event
- **Mailing Format**
  - **One Channel** - the message is sent through one selected channel
  - **Cascade** - the message is sent through several channels one after another. If Cascade is selected, the **Cascade** step appears after the main details, where you select the channels and the delivery order. How a cascade works is described in **[Create Auto Mailing](https://wiki.cosmosresto.ru/en/marketing/mailings/create-auto/#cascade)**
- **Extra Priority** — enable this option if the mailing should be sent without taking the general limits into account
- **Name**
- **Segments**
- **Description**
- **Filters**

The list of guests matching the selected segments and filters is displayed at the bottom of the page. After changing segments or filters, click **Update** to refresh the list and the number of guests.

Click **Next**.


## Content

![Create](/en/images/mailings/manual2-en.png)

[[delimiter rows=1]]

In the second step, select the sending channel and configure the message content:

- **SMS** — enter the message text
- **Push** — if necessary, specify a title and enter the push notification text
- **E-mail** — specify the subject and message text. You can add HTML instead of text. If necessary, attach documents
- **WhatsApp** - select a template in the **Template** field. Only templates approved by Meta are available. The message text is taken from the template and cannot be edited in the mailing
- **Variables** — if necessary, add guest, location, or loyalty program data to the message. See the list of variables in **[Create Auto Mailing](https://wiki.cosmosresto.ru/en/marketing/mailings/create-auto/#variables)**
- **Preview** — check how the message will look for the recipient

After configuring the content, click **Create**. The mailing will be saved as a draft.

You can start the draft immediately from the mailing page or open it later on the **Draft** tab.


## Start Mailing

To start a saved mailing, go to the **Draft** tab, open the required mailing, and click **Start**.

Before sending, the system builds the recipient list again based on the current segments and filters, so its composition and number may differ from those displayed when the mailing was created.

The confirmation window displays the final number of recipients. Click **Start**.

[[info type=custom color=#E06823]]
After the mailing is started, its settings can no longer be edited.
[[/info]]

The mailing moves from **Draft** to **Active** and receives the **In progress** status.

When all messages receive a final status, the mailing status changes to **Finished**. The number of delivered messages may differ from the number of sent messages.

![Create](/en/images/mailings/active-list-manual-en.png)

[[delimiter rows=1]]

![Recipients](/en/images/mailings/manual-recipients-en.png)

[[delimiter rows=1]]

The mailing page displays:

- **Guests Amount** - how many guests receive the mailing
- **Sent** - the total number of sending attempts through all channels. In a cascade, if the message was not delivered through the first channel, it is sent to the guest through the next channel, and each attempt is counted. That is why this value can be greater than the number of guests
- **Delivered** - how many guests received the message

In the screenshot, the mailing was sent as a cascade. The message was not delivered to either guest through the first channel, so the system sent it through the second one. That is why, with two guests, **Sent** is 4 and **Delivered** is 2.

The **Delivery Status** column shows the final result for each guest, taking all cascade channels into account.


## Stop Mailing

If a mailing was started with an error, for example the wrong filters were selected, you can stop it. To do this, right-click the mailing row in the list and select **Stop**. You can also open the mailing itself and click **Stop** on its page.

Only a mailing with the **In progress** status can be stopped. After it is stopped, the mailing receives the **Stopped** status:

- messages that are still waiting to be sent are not sent. For such recipients, the **Delivery Status** column on the mailing page shows **Stopped**
- messages that have already been passed for sending will be sent and may be delivered

[[info type=custom color=#E06823]]
A stopped mailing cannot be resumed or started again. To send it with corrected settings, duplicate the mailing - right-click the mailing row and select **Duplicate**, or click the duplicate button on the mailing page. A new mailing with the same settings opens. Make the changes and start it.
[[/info]]

Guests who have already been sent the original mailing will receive the message again if they are included in the audience of the new mailing. To avoid this, set up **[limits](/en/marketing/mailings/info/#setting-limits)**.

[[delimiter rows=3]]

---
