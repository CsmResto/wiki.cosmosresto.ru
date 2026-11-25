---
title: "Creating and Editing an Event"
summary: "Main details, ticket levels, table reservable time and publishing"
description: "In this article, you will learn how to create an event, set up ticket levels and what happens after publishing."
order: 2
---

A new event is created with the **Create** button in **Events → Events**. To open a saved event, click its row in the list.

The event page has two tabs: **Details** and **Tickets**. This article covers the **Details** tab. The **Preview** on the right shows how the event will look in the widget on your website. The switches above it show the mobile and desktop versions.

![Event page](/en/images/events/event-form-en.png)

[[delimiter rows=1]]

## Main Details

- **Location** - an event can have only one location.
- **Name**.
- **Description**.
- **Start Date & Time**.
- **End Date & Time**.
- **Link** in the **Privacy Policy** block - a link to the personal data processing agreement that the guest accepts when buying a ticket in the widget.

## Tickets

Each event needs at least one ticket level. Levels let you sell tickets to different areas at different prices, for example to the main hall and to a VIP area. A new level is added with **Add Ticket Level** and removed with the trash icon on the right.

![Ticket levels](/en/images/events/event-tickets-en.png)

[[delimiter rows=1]]

- **Level Name** - the guest sees it in the widget when buying a ticket. Level names within one event must be unique.
- **Cost** - the price of one ticket. Different levels can have the same price.
- **Max Tickets Per Guest** - how many tickets of this level a guest can buy at once.
- **Tables** - the tables the event will occupy. Select at least one table. The same tables can be selected in different levels.

One ticket admits one person. If a guest comes with a group of four, they need four tickets.

### Free Event

If you turn on **Does Not Require Payment**, the event keeps one level, **Free**, with a cost of 0. The name and cost of this level cannot be changed, the other fields are filled in as usual.

Levels created before you turned on the switch are deleted and cannot be restored.

### Occupied Tables

A table cannot be added to an event if it is already occupied at that time by another event, including a draft, or by a reservation. When you save, an error with the list of occupied tables appears under **Tables**. First move the reservations to other tables or another time, then save the event.

## Reservable Time

An event occupies the selected tables in the reservation system not only for the event itself, but also for some extra time before the start and after the end. This time is needed to set up the tables before the event and clear them afterwards.

![Reservable time](/en/images/events/event-booking-time-en.png)

[[delimiter rows=1]]

- **Before Start**, **After End** - extra time before the start and after the end of the event.
- **All Day** - the extra time before the start and after the end stretches to the whole day: before the event from the start of the day, after the event until the end of the day.

How it works in the reservation system:

- a reservation for the event's tables cannot be created for the time of the event itself.
- a reservation that falls only on the extra time before the start or after the end can be saved. The overlap is highlighted in red.
- only published events are shown in the reservation system.

In the reservations table, the event occupies the rows of all its tables. The extra time before the start is hatched. Clicking the event opens a sidebar on the right with its details.

![Event in the reservations table](/en/images/events/event-reservations-table-en.png)

[[delimiter rows=1]]

## Design

The event image is shown in the preview in the widget calendar and at the top of the event page. This field is optional.

Below the image, you can see who created the event and when, and who changed it last.

![Design and change history](/en/images/events/event-design-en.png)

[[delimiter rows=1]]

## Publishing and Statuses

A new event is saved as a draft: it is not shown in the widget, and guests cannot buy tickets for it. To start selling, click **Publish**.

In a published event, you can change only the tables in ticket levels. To make other changes, unpublish it: the event becomes a draft again and disappears from the widget.

Only a draft can be deleted. A deleted event cannot be restored.

When the end date passes, the event automatically moves to the **Ended** tab, and ticket sales close.

[[delimiter rows=3]]

---
