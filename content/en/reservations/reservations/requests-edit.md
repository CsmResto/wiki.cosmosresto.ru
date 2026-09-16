---
title: Processing Reservation Request
description: Description of reservation request processing functionality via external services
order: 10
updatedAt: 2026-07-23
---

Basic information about the request entity is described in **[this article](https://wiki.cosmosresto.ru/ru/reservations/reservations/requests/)**. Here we describe how to process requests and all possible interactions with them.

## How to Process a Request

<!-- ![Requests](/ru/images/reserve/requests/requests8.png) -->

[[delimiter rows=1]]

**Three main actions are available for an active request:**

- Reject;
- Make a reservation;
- Open guest profile, if found in the system.

### Converting a Request to a Reservation

<!-- [[gallery gap=12 layout=carousel]]
![Requests](/ru/images/reserve/requests/requests9.png)
![Requests](/ru/images/reserve/requests/requests10.png)
[[/gallery]] -->

1. Open the request.
2. Click **Confirm**.
3. If the guest was not previously in the system, fill in and confirm the new guest data.
4. Check the visit date and time, specify the duration.
5. Check the number of guests.
6. Select one or more tables.
7. Check the comment.
8. Check or create guest profile.
9. Save the reservation.

After saving, the request receives the status `Converted to reservation`. The new reservation appears on the timeline, floor plan and reservations table according to standard rules.

[[info type=custom color=#E06823]]
Before saving, check the availability of the selected time and tables. When submitting a request, the guest can select any 15-minute interval available in the widget without taking into account the current occupancy of the establishment. The set of available intervals is determined by the location's operating hours.
[[/info]]

### Rejecting a Request

Reject the request if the establishment cannot accept the request or the guest declined the visit.

<!-- ![Requests](/ru/images/reserve/requests/requests11.png) -->

[[delimiter rows=1]]

1. Open the request.
2. Click **Reject**.
3. Select a reason.
4. Confirm the action.

**Available reasons:**
- No available seats;
- Cancelled by guest;
- Undesirable guest;
- Error;
- Technical reasons.

After rejection, the request receives the status `Rejected`. It is no longer displayed among active requests on the timeline and floor plan. In the table, the record is retained for viewing, but actions with it become unavailable.

### Opening Guest Profile

The button to go to the profile is available if the system found the guest by phone number and linked them to the request.

<!-- ![Requests](/ru/images/reserve/requests/requests12.png) -->

[[delimiter rows=1]]

1. Open the request.
2. Click on the guest's name or the profile transition button.
3. View or supplement the guest data.

If the profile is not found, the request displays the data entered in the form.

[[delimiter rows=1]]

## Guest Tags from Widget

If manual guest tag selection is configured in the widget, their application depends on whether the profile is found.

- If the guest is found, selected tags are applied to their profile.
- If the guest is not found, tags are saved inside the request.
- Deferred tags are applied after creating the guest profile when converting the request to a reservation.

Before creating a profile, tags from the request are not applied to the guest.

[[delimiter rows=1]]

### Notifications

If corresponding templates are configured in reservation settings, the system can send messages to guests for events:

- Request creation;
- Request rejection.

[[delimiter rows=3]]

**Read further:**

— **[Reservation Requests](https://wiki.cosmosresto.ru/en/reservations/reservations/requests/)**

[[delimiter rows=3]]
