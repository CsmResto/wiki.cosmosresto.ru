---
title: Kanban
description: Reservations of the selected day as a board by status
summary: "Status columns, dragging cards and requests"
order: 2
updatedAt: 2026-11-09
---

**Kanban** is a reservation module mode in which the reservations of the selected day are arranged in status columns. It helps you see the flow of guests during the day and change a reservation status by dragging its card, without opening the sidebar.

The mode opens from the left menu of the reservation module. The date is selected in the top panel and is shared by all modes: when you switch to **Timeline** or **Floor Plan**, the same day stays selected.

Within a column, cards are sorted by reservation start time; in the **Started** and **Ended** columns - by end time.

![Kanban](/en/images/reserve/kanban/kanban-board-en.png)

[[delimiter rows=1]]

## Reservation Card

Clicking a card opens the reservation sidebar. For more information, read the article **[Editing and Canceling a Reservation](https://wiki.cosmosresto.ru/en/reservations/reservations/reserv-edit/)**.

![Reservation sidebar](/en/images/reserve/kanban/kanban-sidebar-en.png)

[[delimiter rows=1]]

The card displays:

- guest phone number and name;
- guest card number;
- table number;
- start and end time;
- number of guests;
- comment icon, if there is a comment;
- how late the guest is, if the guest is late.

## Creating a Reservation

The **+** button in the bottom right corner opens the creation of a new reservation.

The button with a person icon above the **+** button creates a quick reservation for walk-in guests. Select the number of guests and click **Create** - the reservation immediately appears in the **Started** column, and a table is selected automatically.

## Changing the Status

To change the status, drag the card to the required column. The status is saved immediately. If saving fails, an error message appears and the card returns to its place.

![Dragging a card](/en/images/reserve/kanban/kanban-drag-en.png)

[[delimiter rows=1]]

It is not possible to drag:

- a cancelled reservation;
- a reservation that another employee is editing at the moment.

### Canceling a Reservation

When you move a card to the **Cancelled** column, a cancellation form opens right in the column. Select a cancellation reason from the drop-down list and click **Save**. If you close the form without saving, the card returns to its original column.

A cancelled reservation cannot be dragged to another column.

## Requests

The **Requests** column displays new requests for the selected day and the following days, so the request card shows the visit date.

A round icon on the right of the card means that the guest is already in the database. Clicking the icon opens the guest information: the guest's preferences, notes and tags help you choose a table.

![Requests column](/en/images/reserve/kanban/kanban-requests-en.png)

[[delimiter rows=1]]

Requests cannot be dragged. Clicking a card expands it: it shows the request source and the buttons for processing the request:

- **Confirm** opens the reservation creation sidebar filled in with the request data;
- **Reject** opens a window for selecting the rejection reason.

For more information about processing requests, read the article **[Processing Reservation Request](https://wiki.cosmosresto.ru/en/reservations/reservations/requests-edit/)**.

[[info type=custom color=#E06823]]
The board updates automatically: new requests, reservations and status changes made by other employees appear without reloading the page.
[[/info]]

[[delimiter rows=3]]

---
