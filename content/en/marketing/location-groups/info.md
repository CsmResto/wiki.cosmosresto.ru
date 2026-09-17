---
title: Information
description:
summary:
order: 1
updatedAt: 2026-09-10
---
[[delimiter rows=1]]


The **Location Groups** section allows you to combine multiple locations into groups to configure user access to the guest database.

![Location Groups](/en/images/location-groups/location-groups-en.png)

[[delimiter rows=1]]

For each group, you can define which locations it includes and select the type of access to the guest database. This allows users to access either the entire guest database or only the data for a selected Location Group.

> **Example**
>
> The **Bakery** group includes several bakeries in the chain. Employees of each bakery can work with the shared guest database of the **Bakery** group, regardless of which bakery in the group the guest previously visited.

[[info type=custom color=#E06823]]
Location Groups can combine restaurants based on any criteria, such as region, brand, format, department, or other attributes.

When creating a group, keep in mind that a user who has access to at least one location in the group automatically gets access to all locations included in that group.
[[/info]]


### View Guest Data by Location Groups

In **Marketing → [Guests](/en/marketing/guests/)**, the **Locations and Groups** selector allows you to view guest data for the entire chain, a specific Location Group, or a specific location.

The example below shows how the same guest's data is displayed when viewing different Location Groups.

![Guest in Different Groups](/en/images/location-groups/roosevelt.png)

[[delimiter rows=1]]


### Location Groups Table

To change the displayed columns, click the table settings button in the upper-right corner.

In the panel that opens, you can:

✔ select the columns to display  
✔ pin the required columns  
✔ restore the default settings using **Reset to Default**

![Column Wizard](/en/images/location-groups/group-column-en.png)

[[delimiter rows=1]]

By default, the following columns are displayed in the table:

- **Name** — the name of the location group
- **Description** — the description of the location group
- **Locations** — the locations included in the group
- **Group Access Type** — the group's access type for the guest database: **Full Base** or **Group Base**

You can also enable the following columns:

- **Created At** — the date and time when the group was created
- **Author** — the employee who created the group, including their name, role, and grade
- **Last Update** — the employee who last updated the group and the date and time of the update

> **Note.** Table settings are saved after the page is refreshed. The settings are reset after you log out.


### Data Filtering

![Filter](/en/images/location-groups/group-filter-en.png)

[[delimiter rows=1]]

If necessary, click **Filters** to set additional filtering conditions.

After selecting the required values, click **Apply**.

Applied filters are displayed above the table. To remove an individual filter, click **×** next to its name. To reset all filters, click **Clear Filters**.

> **Note.** Filter settings are saved after the page is refreshed. The settings are reset after you log out.


[[delimiter rows=3]]

---