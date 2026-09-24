---
title: Reservation Timeline
description: Navigation and functionality of the Timeline
summary: Navigation and functionality of the timeline
order: 1
updatedAt: 2026-09-24
---

The module has three display modes for reservations. Each one is suitable for different tasks: working with reservations, analyzing occupancy and managing guest seating.

1. **Timeline**
2. **Floor Plan** 
3. **Table**

<!-- ![Reservations Tabs](/ru/images/reserve/timeline-view/timeline-view-1.jpg) -->

## Timeline

**Timeline** is an area with a time scale on which all reservations are displayed.

![Timeline](/en/images/reserve/timeline-view/timeline-view-2-en.jpg)

[[delimiter rows=1]]

**Main elements:**

1. List of floors and tables. Floors can be collapsed and expanded.
2. Time scale with reservations.
3. Button to create a reservation.
4. Statistics of completed reservations for the day.
5. Information on reservations on the selected floor. Colors correspond to the **[status model](https://wiki.cosmosresto.ru/en/reservations/reservations/reserv-status/)**.
6. **No Table**, **Requests** and **Waitlist** buttons — open the corresponding lists in the sidebar on the right.
7. **Archive** button — opens the list of canceled reservations.

**No Table, Requests and Waitlist**

The counter on each button shows the number of records in the corresponding list.

- **No Table** — reservations that have not yet been assigned a table.
- **Requests** — reservation requests received through the website widget. Click a request to view detailed information. A request can be rejected or confirmed and used to create a reservation. When creating a reservation, you can select a table, leave the reservation without a table or set the **Waitlist** status. For more information about working with requests, read the article **[Reservation Requests](https://wiki.cosmosresto.ru/en/reservations/reservations/requests/)**.
- **Waitlist** — records for which a reservation cannot be confirmed yet, for example if there is no suitable table or the required time is unavailable. A record does not reserve a table and does not block time. When it becomes possible to confirm the reservation, the record can be converted into a regular reservation. For more information about working with the waitlist, read the article **[Waitlist](https://wiki.cosmosresto.ru/en/reservations/reservations/waitlist/)**.


### Creating a Reservation on Timeline

**You can create a reservation directly on the timeline in several ways:**

- Single click opens a sidebar to create a reservation.
- Click and drag right or left allow you to immediately set the reservation duration.
- Drag up or down allows you to select multiple tables at once (more about **[multi-reservation](https://wiki.cosmosresto.ru/en/reservations/reservations/mass-reservations/)**).

<!-- ![Timeline](/ru/images/reserve/timeline-view/timeline-view-3.gif) -->

[[delimiter rows=1]]

[[info type=custom color=#E06823]]
You can also create a reservation via the `Reservation creation button` in the lower right corner. More about ways to create a reservation — in the article **[Creating a Reservation](https://wiki.cosmosresto.ru/en/reservations/reservations/reserv-create/)**.
[[/info]]

### Table List

**When you select a table, information about it is displayed:**

1. Layout and maximum capacity.
2. Tags.
3. Deposits and exclusions.

<!-- ![Timeline](/ru/images/reserve/timeline-view/timeline-view-4.jpg) -->

[[info type=custom color=#E06823]]
In this same window you can add a **block** on a table for the selected period. During a block the table will be unavailable for reservations.
[[/info]]

**To block a table you need to specify:** 

1. One or more tables.
2. Block start time and duration.
3. Reason for blocking.

<!-- ![Timeline](/ru/images/reserve/timeline-view/timeline-view-5.jpg) -->


## Floor Plan

**Floor plan** is a visual representation of the establishment's tables, which allows you to assess the hall occupancy and manage reservations tied to specific tables.

<!-- ![Timeline](/ru/images/reserve/timeline-view/timeline-view-7.png) -->

[[delimiter rows=1]]

[[info type=custom color=#E06823]]
More about the floor plan in the article **[Floor Plan](https://wiki.cosmosresto.ru/en/reservations/reservations/floorplan/)**.
[[/info]]


## Table Display of Reservations

In this mode, reservations are displayed as a table. Records can be sorted and filtered. Also, a summary of reservations is displayed in the section taking into account the applied filters.

<!-- ![Timeline](/ru/images/reserve/timeline-view/timeline-view-6.jpg) -->

[[delimiter rows=1]]

**Page elements:**
1. Button to refresh table data.
2. Setting of displayed columns.
3. Summary of reservations based on selected filters.

[[info type=custom color=#E06823]]
Data in the table does not update automatically. If the data has changed, the update button will notify you. To load current information, click `Refresh`.
[[/info]]

[[delimiter rows=3]]

**Read further:**

— **[Floor Plan](https://wiki.cosmosresto.ru/en/reservations/reservations/floorplan/)**

— **[Creating a Reservation](https://wiki.cosmosresto.ru/en/reservations/reservations/reserv-create/)**

[[delimiter rows=3]]
