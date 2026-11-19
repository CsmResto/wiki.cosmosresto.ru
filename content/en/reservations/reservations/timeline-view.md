---
title: Reservation Timeline
description: Navigation and functionality of the Timeline
summary: "Reservations on a time scale, table list and Kanban"
order: 1
updatedAt: 2026-11-19
---

**Reservation Timeline** is the main working screen of the reservations module. All reservations for the selected day are laid out by table on a time scale, and the color of each reservation shows its status. This is where it is convenient to check how busy the venue is, find a free table for the right time and create reservations right on the scale.

![Reservation Timeline](/en/images/reserve/timeline-view/timeline-main-en.png)

[[delimiter rows=1]]

The module has three display modes for reservations. Each one is suitable for different tasks: working with reservations, analyzing occupancy and managing guest seating.

1. **Timeline**
2. **Floor Plan**
3. **Kanban**

![Reservation module modes](/en/images/reserve/timeline-view/timeline-view-1-en.png)

[[delimiter rows=1]]

## Timeline

**Timeline** is a time scale on which reservations are displayed by table.

![Timeline](/en/images/reserve/timeline-view/timeline-view-2-en.jpg)

[[delimiter rows=1]]

**Page elements:**

1. List of floors and tables. Floors can be collapsed and expanded.
2. Time scale with reservations.
3. Button to create a reservation.
4. Statistics of completed reservations for the day.
5. Information on reservations on the selected floor. Colors correspond to the **[status model](https://wiki.cosmosresto.ru/en/reservations/reservations/reserv-status/)**.
6. **No Table**, **Requests** and **Waitlist** buttons - open the corresponding lists in the sidebar on the right.
7. **Archive** button - opens the list of canceled reservations.

### No Table, Requests and Waitlist

The counter on each button shows the number of records in the corresponding list.

- **No Table** - reservations that have not yet been assigned a table.
- **Requests** - reservation requests received through the website widget. Click a request to view detailed information. A request can be rejected or confirmed and used to create a reservation. When creating a reservation, you can select a table, leave the reservation without a table or set the **Waitlist** status. For more information about working with requests, see the article **[Reservation Requests](https://wiki.cosmosresto.ru/en/reservations/reservations/requests/)**.
- **Waitlist** - records for which a reservation cannot be confirmed yet, for example if there is no suitable table or the required time is unavailable. A record does not reserve a table and does not block time. When it becomes possible to confirm the reservation, the record can be converted into a regular reservation. For more information about working with the waitlist, see the article **[Waitlist](https://wiki.cosmosresto.ru/en/reservations/reservations/waitlist/)**.

### Creating a Reservation on Timeline

You can create a reservation directly on the timeline in several ways:

- a single click opens the sidebar for creating a reservation.
- click and drag right or left to set the reservation duration right away.
- drag up or down to select several tables at once, see the article **[Multi-Table Reservation](https://wiki.cosmosresto.ru/en/reservations/reservations/mass-reservations/)**.

<!-- ![Timeline](/ru/images/reserve/timeline-view/timeline-view-3.gif) -->

[[info type=custom color=#E06823]]
You can also create a reservation with the **+** button in the lower right corner. More about ways to create a reservation - in the article **[Creating a Reservation](https://wiki.cosmosresto.ru/en/reservations/reservations/reserv-create/)**.
[[/info]]

### Table List

When you select a table, information about it is displayed:

- layout and maximum capacity.
- tags.
- deposits and exclusions.

<!-- ![Timeline](/ru/images/reserve/timeline-view/timeline-view-4.jpg) -->

[[info type=custom color=#E06823]]
In this same window you can add a **block** on a table for the selected period. The block is displayed on the timeline and floor plan, but does not prevent creating a reservation on this table.
[[/info]]

To block a table, specify:

- one or more tables.
- block start time and duration.
- reason for blocking.

<!-- ![Timeline](/ru/images/reserve/timeline-view/timeline-view-5.jpg) -->

## Floor Plan

**Floor Plan** is a visual representation of the venue's tables that helps assess how busy the venue is and manage reservations tied to specific tables.

![Floor Plan](/en/images/reserve/timeline-view/timeline-floorplan-en.png)

[[delimiter rows=1]]

[[info type=custom color=#E06823]]
More details - in the article **[Floor Plan](https://wiki.cosmosresto.ru/en/reservations/reservations/floorplan/)**.
[[/info]]

## Kanban

**Kanban** is a mode in which the reservations of the selected day are arranged in status columns. A reservation status is changed by dragging its card, without opening the sidebar, and new requests can be processed right in the **Requests** column.

![Kanban](/en/images/reserve/kanban/kanban-board-en.png)

[[delimiter rows=1]]

[[info type=custom color=#E06823]]
More details - in the article **[Kanban](https://wiki.cosmosresto.ru/en/reservations/reservations/kanban/)**.
[[/info]]

[[delimiter rows=3]]

**Read further:**

- **[Floor Plan](https://wiki.cosmosresto.ru/en/reservations/reservations/floorplan/)**
- **[Kanban](https://wiki.cosmosresto.ru/en/reservations/reservations/kanban/)**
- **[Creating a Reservation](https://wiki.cosmosresto.ru/en/reservations/reservations/reserv-create/)**

[[delimiter rows=3]]

---
