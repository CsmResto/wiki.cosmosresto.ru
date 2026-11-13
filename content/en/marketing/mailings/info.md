---
title: Mailings
description:
summary: "Mailing types, channels, limits, and table"
order: 1
updatedAt: 2026-09-29
---

Mailings help maintain communication with guests: inform them about news and offers, bring guests back, remind them about the venue, and send service messages.

## Mailings

The **Mailings** section is used to send messages to guests via **SMS**, **Push**, **E-mail**, and **WhatsApp**.

![Mailings](/en/images/mailings/mailings-en.png)

[[delimiter rows=1]]

There are two types of mailings:

- **Auto** — sent automatically when a specified event occurs. For example, when a guest enters a segment, registers in the loyalty program, or a check is closed
- **Manual** — launched by a user for a selected audience

For each mailing, you can configure the audience, sending channel and message content, limits, sending time, and other parameters.

The history and statuses of sent messages are available in the **[Mailing Log](/en/marketing/mailing-logs/info/)**.

Use the **Auto / Manual** switch to move between mailing types. Use the **Active / Draft** tabs to view active and saved mailings.

To find a mailing, use the **Search** field.

To create a new mailing, click **Create**.

Instructions for creating mailings:

- **[Create Auto Mailing](/en/marketing/mailings/create-auto/)**
- **[Create Manual Mailing](/en/marketing/mailings/create-manual/)**


## Integrations

Each sending channel in Mailings works through the corresponding **integration**:

- **SMS** — through an SMS gateway
- **E-mail** — through an E-mail service
- **Push** — through an integration with the loyalty card system
- **WhatsApp** — through an integration with Twilio

If the required sending channel is not displayed when creating a mailing, check that the corresponding integration is available and configured.


## WhatsApp Templates

Only templates approved by Meta can be used to send messages via **WhatsApp**.

To create and manage templates, click **Templates** at the top of the **Mailings** page.

For more information about working with templates, see **[Templates](/en/marketing/mailings/templates-info/)**.


## Setting Limits

To configure general limits on the number of messages sent to each guest, click the gear icon in the upper-right corner.

![Mailing Limits](/en/images/mailings/limits-en.png)

[[delimiter rows=1]]

- Limits are configured separately for each mailing type: **Mass**, **Marketing**, and **Service**
- For each type, limits can be configured separately for **SMS**, **Push**, **E-mail**, and **WhatsApp**
- A limit specifies the maximum number of messages that can be sent during the selected period
- If individual limits are configured for a specific mailing, the general limits are applied first, followed by the mailing's own limits
- Mailings with **Extra Priority** are sent without taking the general limits into account


## Sending Priority

When creating a mailing, select **High**, **Medium**, or **Low** in the **Priority** field. The default value is **Medium**.

The priority determines what share of sending a mailing gets when several mailings of the same channel are being sent at the same time. Messages are sent in batches: every 2 minutes, one batch is sent for each channel, and the batch size depends on the channel. In each batch, 70% of the places are reserved for high-priority mailings, 20% for medium-priority mailings, and 10% for low-priority mailings. That is why low-priority mailings do not wait for the others to finish - they are sent in parallel, just more slowly. If a priority level has fewer messages than its share, the free places go to messages with a higher priority. The priority works the same way for Auto and Manual mailings.

For example, a large low-priority Manual Push mailing is being sent, and at the same time a high-priority Auto Push mailing is triggered. Messages of the Auto mailing take most of each batch and are sent faster, while the Manual mailing keeps being sent in parallel.

Specifics:

- Priority is compared only between mailings of the same channel. For example, an SMS mailing does not affect the Push mailing queue.
- Priority does not affect limits. To send a mailing without taking the general limits into account, use **Extra Priority**.
- The priority of a started Manual mailing cannot be changed.
- If you change the priority of an Auto mailing, the new value applies only to new messages.


## Table Settings

To change the displayed columns, click the table settings button in the upper-right corner.

In the panel that opens, you can:

- Select the columns to display.
- Change the column order - drag a column in the list by the icon to the left of its name.
- Pin the required columns - click the pin icon to the right of the column name. Pinned columns move to the beginning of the table.
- Restore the default settings using **Reset to Default**.

[[gallery gap=12 layout=carousel]]
![Mailings](/en/images/mailings/column-auto-en.png)
![Mailings](/en/images/mailings/column-en.png)
[[/gallery]]

[[delimiter rows=1]]

By default, the table displays the following columns:

- **Name**
- **Description**
- **Status** - the current status of the mailing. An Auto mailing can be **Active** or **On pause**, while a Manual mailing can be **In progress**, **Finished** or **Stopped**. Draft mailings do not have a status.
- **Guest Amount** - for Manual mailings only. The number of guests selected based on the mailing conditions at the time the mailing is launched.
- **Channel** - the channel used to send the message.
- **Type** - **Mass**, **Marketing**, or **Service**.
- **Priority** - **High**, **Medium**, or **Low**, see **[Sending Priority](#sending-priority)**.
- **Timezone** - the timezone used by the mailing schedule. If an Auto mailing follows the timezone of the location where the event occurred, **Trigger Event Timezone** is displayed.
- **Limits** - for Auto mailings only. Individual mailing limits in the format `N times per N days`. If no limits are configured, a dash is displayed.
- **Cost** - the total cost of all messages sent by the mailing: for an Auto mailing, for the whole time it has been running; for a Manual mailing, the sum of all messages sent. The cost is calculated only for SMS; for other channels, a dash is displayed. The mailing cost is also shown on the mailing page next to its name.

The following columns can also be enabled. When enabled, they are displayed in the table according to the column order in the settings:

- **Author**
- **Created At**
- **Last Update**

> **Note.** Table settings are saved after the page is refreshed. The settings are reset after you log out.


## Data Filtering

![Mailings](/en/images/mailings/filter-en.png)

[[delimiter rows=1]]

If necessary, click **Filters** to set additional filtering conditions.

After selecting the required values, click **Apply**.

Applied filters are displayed above the table. To remove an individual filter, click **×** next to its name. To reset all filters, click **Clear Filters**.


[[delimiter rows=3]]

---
