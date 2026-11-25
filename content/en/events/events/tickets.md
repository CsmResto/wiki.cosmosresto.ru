---
title: "Event Tickets"
summary: "Ticket list, statuses, sales and refunds, ticket design"
description: "In this article, you will learn how to work with event tickets and how to set up the ticket the guest receives."
order: 3
---

Event tickets are on the **Tickets** tab of the event page. The counter next to the event name shows how many tickets are sold out of the total.

A new event has no tickets, and the **Tickets** tab is empty. Tickets appear only after they are issued with **Add Tickets**.

All actions with tickets are saved immediately, separately from the **Save** button on the **Details** tab.

![Event tickets](/en/images/events/tickets-list-en.png)

[[delimiter rows=1]]

- **Add Tickets** - issues tickets: you set the number for each level. Tickets can also be issued after the event is published.
- **Design Tickets** - sets up the ticket the guest receives after payment.
- **Search** - search by ticket number.
- **Ticket** - the ticket file. It appears for paid tickets.

## Ticket Statuses

- **Created** - a free ticket that nobody has bought yet.
- **Reserved** - the guest is paying for the ticket, or a payment link has been sent to them.
- **Paid** - the payment went through, and the ticket has been emailed to the guest as a PDF.
- **Payment Failed** - the payment did not go through.
- **Refund Pending** - a refund has been started, but the money has not reached the guest yet. Such a ticket cannot be changed.
- **Refunded** - the money has been returned to the guest. Such a ticket cannot be sold or changed.

If a guest buys a ticket in the widget but does not pay in time, the ticket becomes **Created** again.

## Ticket Actions

Ticket actions open with a right click on the ticket row. A ticket in the **Created** status has **Select**, **Assign Guest** and **Delete Ticket**. Tickets in other statuses cannot be deleted.

![Ticket actions](/en/images/events/ticket-menu-en.png)

[[delimiter rows=1]]

### Assigning to a Guest

This is how a staff member sells a ticket to a guest directly, without the widget. Tickets can be assigned to guests while the event is still a draft, so part of the tickets will already be sold by the time it is published.

[[gallery gap=12 layout=carousel]]
![Assigning a ticket to a guest](/en/images/events/ticket-link-guest-en.png)
![Creating a guest](/en/images/events/ticket-create-guest-en.png)
[[/gallery]]

[[delimiter rows=1]]

- You can find the guest by search or create a new one right in the window with the button next to the search. A new guest needs a first name, a phone number and an email.
- **Tickets Paid** - if the guest has already paid for the ticket. The guest then receives the ticket by email right away.
- **Email**, **SMS** - where to send the payment link if the ticket is not paid yet. If the guest's contact is in the database, it is filled in automatically, otherwise you need to enter it.

## Ticket Refund

Only a paid ticket can be refunded. After the refund, the ticket file disappears from the **Ticket** column. If the refund fails, the ticket becomes **Paid** again.

## Ticket Design

After payment, the guest receives the ticket by email as a PDF. The **Design Tickets** button opens the **Appearance of the Ticket** window where the ticket design is set up. The preview is shown on the right.

![Appearance of the ticket](/en/images/events/ticket-design-en.png)

[[delimiter rows=1]]

- **Background**, **Card**, **Text**, **Light** - ticket colors.
- **Show Light**.
- **Show Banner** - the event image from the **Design** block on the **Details** tab.
- **Show Address** - the address of the event location.
- **Show Start Time**.
- **Show Cost**.

The order number, ticket number, event name and ticket level are always shown.

**Preview PDF** shows the ticket with the saved settings. To see your changes, click **Apply** first.

After the event is published, the ticket design cannot be changed: the **Appearance of the Ticket** window only lets you view it.

[[delimiter rows=3]]

---
