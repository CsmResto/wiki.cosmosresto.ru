---
title: "Reservation Tags"
description: "In this section you will learn everything about reservation tags. Creation, editing, application."
icon: tags
order: 2
---

**Reservation tags** help you manually mark reservations within the CRM. With their help you can visually highlight important records, quickly understand the context of a reservation, group reservations and find them using filters.

For example, you can create tags `Needs parking`, `Late arrival`, `High priority` or `Requires manager attention`.

[[info type=custom color=#E06823]]
Reservation tags are **not related to guest tags**. These are separate types of tags that are configured and used independently of each other.
[[/info]]


## Tag List

In the section **Reservations -> Reservation Tags** a list of created tags and basic information about them is displayed. In this section you can view, create and edit tags.

<!-- ![Tags](/ru/images/reserve/reservations-tags/reservations-tags1.jpg) -->

### Search, filtering and sorting

- **Search:** by Name field — search begins after entering at least three characters.

- **Filtering:** by Locations, Creation/Update Date, Author.

- **Sorting:** by name, short name, creation date or last update date.

[[delimiter rows=1]]

## Creating a Tag

**1.** Open the section **Reservations -> Reservation Tags**.

**2.** Click **Create**.

**3.** Fill in the fields:

<!-- [[gallery gap=12 layout=carousel]]
![Tags](/ru/images/reserve/reservations-tags/reservations-tags2-2.jpg)
![Tags](/ru/images/reserve/reservations-tags/reservations-tags3-2.jpg)
[[/gallery]] -->

- **Locations** — when adding a tag to a reservation, the system shows only tags available for the selected location
- **Name**
- **Short name** — abbreviation that is displayed on the reservation
- **Tooltip text** — displayed when hovering over the tag
- **Description**
- **Color**
- **Icon**

**4.** If necessary, add a description, icon and tooltip text.

**5.** Click **Save**.

[[info type=custom color=#E06823]]
After saving, the tag will appear in the general tag list and will be available in the tag list when editing a reservation.
[[/info]]

[[delimiter rows=1]]

### Editing a Tag

In an existing tag **you can edit all fields**. 

After saving **changes apply to all reservations that use the tag**. Before saving, the system warns that the change may affect related reservations.

Details of tag changes and creation can be seen inside the tag card.

<!-- ![Tags](/ru/images/reserve/reservations-tags/reservations-tags4.jpg) -->

[[delimiter rows=1]]

### Deleting a Tag

1. Open the section **Reservations -> Reservation Tags**.
2. Find the required tag.
3. Click on the tag, opening editing. 
4. Click **Delete**.

<!-- ![Tags](/ru/images/reserve/reservations-tags/reservations-tags5.jpg) -->

[[delimiter rows=1]]

5. Confirm deletion.

<!-- ![Tags](/ru/images/reserve/reservations-tags/reservations-tags6.jpg) -->

[[delimiter rows=1]]

**After deletion:**

- The tag will completely disappear from the system;
- The tag will be removed from all associated reservations;
- The tag will become unavailable for assignment and filtering;
- The change log of reservations where this tag was previously specified will not change.

## Using Tags in Reservations

### Adding a Tag

Multiple tags can be assigned to one reservation. Only tags available for the location of this reservation are displayed in the list.

<!-- ![Tags](/ru/images/reserve/reservations-tags/reservations-tags7.jpg) -->

[[delimiter rows=1]]

1. Open the required reservation.
2. Click **Add tag**.
3. Find the tag by name or select it from the list.
4. If necessary, select other tags.
5. Click **Save**.

[[info type=custom color=#E06823]]
After saving, the selected tags will be associated with the reservation and appear in its side panel.
[[/info]]

### Removing a Tag from a Reservation

1. Open the reservation.
2. Click the delete icon next to the tag.
3. Click **Save**.

[[info type=custom color=#E06823]]
The tag will be removed only from the selected reservation. The tag itself will remain available in the system and will continue to be used in other reservations.
[[/info]]

### Change History

The system saves actions with tags in the reservation history. The time and author of tag addition or removal can be seen in the Change Log.

<!-- ![Tags](/ru/images/reserve/reservations-tags/reservations-tags8.jpg) -->

[[delimiter rows=1]]

### Filtering Reservations by Tags

1. Open the section `Reservations`.
2. Go to table display mode.
3. Open the filter by tags.
4. Select one or more tags.

The table will show only reservations matching the selected conditions. Tags of the selected location are available for filtering.

<!-- ![Tags](/ru/images/reserve/reservations-tags/reservations-tags9.jpg) -->

[[delimiter rows=1]]
