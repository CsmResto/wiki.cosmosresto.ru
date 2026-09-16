---
title: Reservation Requests
description: Description of reservation request functionality via external services
order: 10
updatedAt: 2026-07-23
---

**Reservation requests** help you process guest requests sent through a website widget or supported external reservation service.

A request captures the desired date, time and visit parameters, but does not automatically reserve a table. For the request to become a reservation, **an employee must check the data and confirm it manually**. 

You can work with requests in all views of the **Reservations** section: on the timeline, floor plan and a separate requests table.

## Brief Work Scenario

1. Guest submits a form in the widget on the website or external reservation service.
2. The request appears in the **Reservations** section.
3. An employee opens the request, checks the data and contacts the guest if necessary. The request can be:
    1. Accepted and converted to a reservation
    2. Rejected
4. After confirmation, the table is reserved with a standard reservation.

[[info type=custom color=#E06823]]
A request and a reservation are different entities. Until the request is converted to a reservation, the selected time is not considered occupied and the table is not reserved.
[[/info]]

[[delimiter rows=1]]

**How a request is created:**

1. A request is created manually by a guest through a reservations widget.
2. The system links the request to an existing profile if the guest is found.
4. Saves the data inside the request if the guest is not found.
5. Passes the request to the **Reservations** section for manual processing by an employee.

**A new guest profile is not created automatically at this stage.**

[[delimiter rows=1]]

## Displaying and Working with Requests

You can work with requests in all views of the **Reservations** section. 

When a new request arrives, the counter of the **Requests** button increases. It shows the number of requests with `New` status or requests being processed.

### Requests in Table

<!-- ![Requests](/ru/images/reserve/requests/requests4.png) -->

[[delimiter rows=1]]

1. Go to the **Reservations** section.
2. Go to the **Requests** tab.
3. Click on the row to open the request sidebar.

**The table displays:**
- Desired visit date and time;
- Guest or name specified in the form;
- Tags selected in the widget;
- Phone number;
- Number of guests;
- Status;
- Comment;
- Time the request has been in `New` status.

**Search, filtering and sorting:**

- In the table you can **search** requests by first name, last name and phone number.

- **Filtering** is available by visit date, guest, request status and comment text.

By default, requests are sorted:
1. By date and time of desired visit — from closest to later ones.
2. By processing wait time — first requests that have been in `New` status longer.
3. Requests with `Rejected` status are not displayed unless explicitly specified in the filter.

This sorting helps you process the closest and longest-waiting requests first (it is important to set the current status first).

[[info type=custom color=#E06823]]
In the requests table you can also create a reservation by clicking the `+` button in the lower right part of the section.
[[/info]]

**Statistics:**
At the bottom of the table, statistics on requests are displayed. Total count and by all statuses for the selected day.

[[delimiter rows=1]]

### Requests on Timeline

<!-- [[gallery gap=12 layout=carousel]]
![Requests](/ru/images/reserve/requests/requests1.png)
![Requests](/ru/images/reserve/requests/requests2.png)
[[/gallery]] -->

1. Go to the **Reservations** section.
2. Open the **Timeline** view.
3. Click **Requests**.
4. In the opened sidebar, select the required card.

### Requests on Floor Plan

<!-- ![Requests](/ru/images/reserve/requests/requests3.png) -->

[[delimiter rows=1]]

1. Go to the **Reservations** section.
2. Open the **Floor Plan** view.
3. In the sidebar switch from the **Reservations** tab to **Requests**.
4. Select a request.

[[info type=custom color=#E06823]]
A request is not displayed on the floor plan as an occupied table. The table will be marked as occupied only after the request is converted to a reservation.
[[/info]]

Unlike other views, a system guest is immediately available here if linked to the request. Other data is pulled from the request.

## Request Card

<!-- [[gallery gap=12 layout=carousel]]
![Requests](/ru/images/reserve/requests/requests5.png)
![Requests](/ru/images/reserve/requests/requests6.png)
[[/gallery]] -->

**The request card displays:**
- Guest name specified in the form;
- Phone number;
- Desired visit date and time;
- Number of guests;
- Comment;
- Time elapsed since the request was created.

[[info type=custom color=#E06823]]
After opening the card, processing actions become available. Original request data cannot be changed, but a reservation can be created based on them.
[[/info]]

## Request Statuses

<!-- 
![Requests](/ru/images/reserve/requests/requests7.png) -->

[[delimiter rows=1]]

**A request can have the following statuses:**
- **New** — request has entered the system, but the employee has not yet taken action.
- **Rejected** — employee declined the request.
- **Converted to reservation** — a reservation has been created based on the request.
- **Processing mark** — the request is currently being opened or edited by an employee (status is indicated by an edit icon).

**Rejected** and **Converted to reservation** statuses are final. After transitioning to one of them, the request is no longer considered active.

## Enabling New Request Notifications

<!-- ![Requests](/ru/images/reserve/requests/requests-alert.png) -->

[[delimiter rows=1]]

1. In the **Reservations** section click on your avatar to open the action menu.
2. Select `Enable notifications`.
3. Allow `Show notifications` in the popup window in the browser.
4. Check that notifications are enabled in your browser's system settings.

[[delimiter rows=3]]

**Read further:**

— **[Processing Reservation Request](https://wiki.cosmosresto.ru/en/reservations/reservations/requests-edit/)**

[[delimiter rows=3]]
