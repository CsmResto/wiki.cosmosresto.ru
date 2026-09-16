---
title: Floor Plan
description: Navigation and functionality of the Floor Plan
summary: Description of the Floor Plan section
order: 2
updatedAt: 2026-07-15
---

**Floor plan** is a visual representation of the establishment's tables, which allows you to assess the hall occupancy and manage reservations tied to specific tables.

The section displays the status of tables for the selected date and time. The color and additional information on the table depend on the reservation status and the selected display mode.

[[info type=custom color=#E06823]]
The state of the plan depends on the selected time. When switching time slots, the system updates the statuses of tables and information about related reservations. By default, the sidebar displays a list of all reservations and their statuses from all tables at the current time.
[[/info]]

<!-- ![Floor Plan](/ru/images/reserve/floorplan/floorplan1.png) -->

<!-- screenshot: general view of the "Floor Plan" section with main elements marked -->

[[delimiter rows=1]]

**Main elements:**

**Table plan** — shows the location of tables, their capacity and current state.

1. **Reservations sidebar** — displays reservations of the selected table or a general list of reservations.
2. **Time panel** — determines the status of tables at the selected moment.
3. **Button to create a reservation**
4. **Floor or zone selection** — switches the displayed part of the establishment.
5. **Display settings** — configures the information in tooltips next to tables and plan display.

**Each table displays:**
- Number or name;
- Maximum capacity;
- Deposit indicator, if any.

## How the floor plan takes into account the selected time

[[info type=custom color=#E06823]]
The time panel is divided into 15-minute intervals. The minimum reservation duration is 15 minutes and must be a multiple of 15 minutes.
[[/info]]

**The selected time affects:**

- The color and state of tables;
- Information in the placards next to tables;
- Selection of reservations for editing;
- Start time when creating a reservation.

[[info type=custom color=#E06823]]
Clicking on a table filters the list of reservations in the left sidebar **only** by the selected table.
[[/info]]

## Table States

Color designations of table status are similar to the general status model with some additions.

**Main statuses on the floor plan:**

<!-- ![Floor Plan](/ru/images/reserve/floorplan/floorplan2.png) -->

[[delimiter rows=1]]

1. **Yellow** — in status "Confirmed"
2. **Orange** — in status "Not confirmed"
3. **Green** — in status "In progress"
4. **Pink** — in status "Not confirmed", if guest is late
5. **Light blue** — in status "Confirmed", if guest is late

**Unique display for floor plan:**

<!-- ![Floor Plan](/ru/images/reserve/floorplan/floorplan3.png) -->

[[delimiter rows=1]]

1. **Table is free**
2. **Table lock**
3. **Collision** - intersection with an existing reservation on this table

## Viewing reservations of the selected table

<!-- ![Floor Plan](/ru/images/reserve/floorplan/floorplan4.png) -->

[[delimiter rows=1]]

1. Select a date and time.
2. Click on the required table. The sidebar will show a list of reservations for this table for the selected day.
3. Select a reservation card to view detailed information and available actions.

**Reservations in the sidebar are grouped by statuses. A started reservation is displayed first.**

**Quick actions are available for a started reservation:**
1. Change the duration of the reservation
    - **−15 minutes** — decrease duration
    - **+15 minutes** — increase duration
2. Change reservation status - click on the status dropdown list to select
3. Move guests - open menu to transfer the reservation to another table. [Read more](#replace) about moving below in this article.

<!-- ![Floor Plan](/ru/images/reserve/floorplan/floorplan5.png) -->

[[delimiter rows=1]]

**The name of the selected table** is displayed at the top of the sidebar. Click on it to open information about the table, including its blocking periods for the selected day.

<!-- ![Floor Plan](/ru/images/reserve/floorplan/floorplan6.png) -->

[[delimiter rows=1]]

[[info type=custom color=#E06823]]
To return to the general list of reservations, click on a free area of the plan or deselect the table.
[[/info]]

## Guest Information

When you hover over a placard with the guest's name, you can see additional information about the guest.

The tooltip displays 5 tags. The full list of tags is available in the guest profile.

[[delimiter rows=1]]

## Configuring the Display of Information About Tables

The display panel controls the content of information placards next to tables.

<!-- ![Floor Plan](/ru/images/reserve/floorplan/floorplan9.png) -->

[[delimiter rows=1]]

**The following modes are available:**

1. **Guest** — first and last name of the guest of the current reservation. If there is no current reservation, the placard is not displayed.

2. **Reservations** — up to three reservations: current and two next or three next. Past reservations are not displayed in the placard.

3. **Time** shows:
    - Time until the end of the current reservation
    - Time until the start of the next reservation, if there is no current one
    - Time overdue after the start of an unconfirmed or confirmed reservation, if guests have not yet arrived.

4. **Money** — the amount of the current reservation's check.

5. **Waiter** — name and last name of the waiter from the current reservation's check.

[[info type=custom color=#E06823]]
If there is no data for the selected mode, the placard next to the table is not displayed.
[[/info]]

[[delimiter rows=1]]

## Configuring Objects on the Plan

In the plan settings you can hide or show additional objects.

<!-- ![Floor Plan](/ru/images/reserve/floorplan/floorplan10.png) -->

**Constructions** - walls, windows, doors, stairs.

**Interior** - speakers, televisions, outlets, text labels and chair display.

**Details** - when activated, optimizes this section for devices with low performance or low internet speed.

[[info type=custom color=#E06823]]
Changes are applied immediately after switching the setting and are saved after page reload. After fully logging out of the account, settings may be reset.
[[/info]]

[[delimiter rows=1]]

## Creating a Reservation

You can create a reservation on the floor plan in several ways:

1. Click the **+** button after selecting a time;
2. Select a table and click the **+** button;
3. Open the context menu of the table (right-click) and select **Create reservation**.

<!-- ![Floor Plan](/ru/images/reserve/floorplan/floorplan7.png) -->

### Creating a Reservation

1. Select time on the scale.
2. Click **+**. The selected table will be automatically entered in the form.
3. Fill in the reservation form. All fields for creating a reservation are described in more detail in [this article](https://wiki.cosmosresto.ru/ru/reservations/reservations/reserv-create/).
4. If necessary, select a table. If the table was not selected, suitable tables for the specified time will be highlighted on the floor plan.
5. Check the duration and other reservation fields.
6. Save the changes.

[[info type=custom color=#E06823]]
Clicking on a table does not create a reservation. It opens a list of reservations for the selected table.
[[/info]]

## Overlapping Reservations

The system can save multiple reservations for one table at overlapping times. Such an overlap is called a **collision**.

When creating or changing a reservation, the system warns of an overlap, but does not block saving. A collision is displayed on the table with a separate visual state.

<!-- ![Floor Plan](/ru/images/reserve/floorplan/floorplan8.png) -->

[[delimiter rows=1]]

[[info type=custom color=#E06823]]
Before saving, check the time and selected table. A collision means that multiple reservations claim the same table at the same time period.
[[/info]]


## Editing a Reservation

1. Select the reservation you are interested in from the sidebar (for convenience, you can filter the list by table by selecting it on the floor plan).
2. Change the necessary parameters.
3. Save the changes.

Editing is performed in the standard reservation form. In it you can change the time, duration, table and other available parameters. **More about editing reservations can be read in [this article](https://wiki.cosmosresto.ru/ru/reservations/reservations/reserv-edit/).**

## Moving Guests {#replace}

For a started reservation, you can move guests to another table.

<!-- ![Floor Plan](/ru/images/reserve/floorplan/floorplan11.png) -->

[[delimiter rows=1]]

1. Click **Move** in the card of the started reservation or right-click on the table with the required reservation at this moment.
2. Select the move action.
3. Specify a full transfer of the reservation or a transfer from a specific time.
4. Select a new table.
5. Check the preview result and possible overlaps.
6. Confirm the move.

**If there are associated checks, the system initiates their transfer to the new table.**
