---
title: Creating a Reservation
description: How to create a reservation. Description of fields
summary: How to create a reservation. Description of fields
order: 3
updatedAt: 2026-04-24
---
## Methods of Creating a Reservation
You can create a reservation in two main ways. This helps you choose the most convenient option depending on the situation and speeds up work with the functionality.

<!-- ![reserv-create-options](/ru/images/reserve/reserv-create-view.png) -->

### 1. Button **+Add Reservation**

1. Click the `+Add Reservation` button in the upper right corner of the screen.
2. In the opened sidebar specify the guest.
3. Select one or more tables.
4. If necessary, edit the interval or reservation date.
5. Fill in the remaining fields — number of guests, comment, reservation source, tags.
6. Disable or keep SMS notification about the reservation.
7. To save the reservation click `Save`.

### 2. Selecting a Time Interval on the **Timeline**

1. Find a suitable time and table on the `timeline`.
2. Click on the timeline cell. A single click will open the sidebar to set up the reservation. Click and drag right or left will immediately set the required reservation duration. Dragging up or down will allow you to select multiple tables.
3. In the opened sidebar specify the guest.
4. Add tables or if necessary change the selected table.
5. If necessary, edit the interval or reservation date.
6. Fill in the remaining fields — number of guests, comment, reservation source, tags.
7. Disable or keep SMS notification about the reservation.
8. To save the reservation click `Save`.


### Sidebar
When you select any of the methods, a sidebar opens. It is here that all information about the reservation is filled in. In the panel you can add or change a guest, select or change a table, specify an interval, number of guests, add a comment and see the reservation change history. The reservation source, status and SMS sending parameters are also indicated there.


<!-- ![reserv-sidebar](/ru/images/reserve/reserv-sidebar1.2.png) -->

[[delimiter rows=1]]


[[info type=custom color=#E06823]]
To create a reservation, it is enough to specify **a guest** and **a table**, the remaining fields will be filled in by default.
[[/info]]


### 1. Guest
When you click on a guest, a second sidebar opens, which allows you to:
1. Find a guest by phone number, name or loyalty card
2. Not add a specific guest to the reservation
3. Create a new guest and add them to the reservation 

<!-- ![reserv-guest1](/ru/images/reserve/reserv-guest.jpg) -->

#### Creating a Guest
To create a new guest, you need to specify the following data:
1. Name (Last name is not required)
2. Phone number
3. Gender

<!-- ![reserv-guest2](/ru/images/reserve/reserv-guest-create.jpg) -->

[[delimiter rows=1]]


[[info type=custom color=#E06823]]
More about creating a guest can be read in this [article](/en/marketing/guests/guests-create).
[[/info]]


### 2. Table Selection {#multireserve}
Allows you to select one or more tables. 

A reservation with 2 or more tables is called **multi-reservation**. This type of reservation has a limitation: time gaps between reservations on different tables are not allowed. 

**More about multi-reservations can be read in [article](https://wiki.cosmosresto.ru/en/reservations/reservations/mass-reservations/)**.

To specify multiple tables, in the opened sidebar:
1. Enable `Select multiple tables`.
2. Find suitable tables in the list, you can also search for tables by name, filter tables by needed criteria and sort the list.
3. Select the required tables, then click `Apply`.

<!-- ![reserv-multitable](/ru/images/reserve/reserv-table-multiselect.jpg) -->

### 3. Reservation Date and Start Time
Start time is a multiple of 15-minute intervals. By default, when creating a reservation by button, the *nearest time that is a multiple of 15 minutes* is specified.

[[info type=custom color=#E06823]]
For example, it is now 18:12, when creating a reservation, time 18:15 will be specified.
[[/info]]


### 4. Duration
Reservation duration is also a multiple of 15 minutes. By default, when creating using the `+Add Reservation` button, 2 hours is specified.

<!-- `screenshot with intervals on timeline` -->

### 5. Number of Guests
You can quickly specify up to 10 guests, or manually specify a larger company. By default, *one* guest is specified.

To specify a company of more than 10 people, click 10+ and enter the required number manually.

### 6. Reservation Source
Specifying the reservation source will allow you to then analyze where guest reservations come from. This helps you understand which channels work better and which ones work worse, so you can evaluate their effectiveness and optimize guest acquisition.

Available reservation sources:
- Phone call *(Selected by default)*
- Walk-in guest
- Messenger
- Website

<!-- `screenshot with reservation sources` -->

### 7. Reservation Tags
Reservation tags help you manually mark reservations. With their help you can visually highlight important records, quickly understand the context of a reservation, group reservations and find them using filters.

More about creating and using tags can be read in this [article](https://wiki.cosmosresto.ru/en/reservations/reservations-tags/).

<!-- ![Tags](/ru/images/reserve/reservations-tags/reservations-tags7.jpg) -->

### 8. Comment
In the comment you can specify any necessary information about the reservation.

### 9. Reservation Status
It shows whether the reservation is confirmed or if the guest cancelled it. You can select it only manually in the sidebar when creating or editing a reservation. 

Three statuses are available when creating a reservation:
- Confirmed *(Selected by default when creating a reservation for today)*
- Not confirmed *(Selected by default when creating a reservation for a future date)*
- In progress

[[info type=custom color=#E06823]]
There are a total of **five statuses** for reservations. More about statuses can be read in this [article](/en/reservations/reservations/reserv-status).
[[/info]]

### 9. SMS Notification
If a reservation is created for the future, after selecting a guest you can choose to send an SMS notification. The SMS template is configured separately in the **Reservations - Settings** section. By default, this option is active.

<!-- [[info type=custom color=#E06823]]
More about configuring notifications can be read in this [article](/ru/reservations/reservations/guest-create).
[[/info]] -->

[[delimiter rows=3]]

**Read further:**

— **[Automatic check creation from reservation](https://wiki.cosmosresto.ru/en/reservations/reservations/reserv-order-create/)**

[[delimiter rows=3]]
