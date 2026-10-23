---
title: POS Integration
summary: "Mapping Cosmos payment types to iiko payment types"
description: "In this section, you will learn how to map Cosmos payment types to the payment types of the iiko POS system and how to refresh data from the POS."
order: 1
---

The **Settings → POS Integration** section links Cosmos payment types to the payment types of the POS system (iiko). Mapping is required so that payments for orders from the POS are correctly recorded in Cosmos.

Cosmos has three payment types: **Cash**, **Card** and **Bonuses**. iiko usually has more payment types, so several iiko payment types can be mapped to one Cosmos payment type.

## Payment Types Table

Mapping is set up separately for each location. The location is selected in the **Location** field above the table.

![POS Integration](/en/images/settings/pos-integration/pos-integration-en.png)

[[delimiter rows=1]]

The table contains the following columns:
1. **Payment Type Name** - the Cosmos payment type. The list is fixed: payment types cannot be added or removed.
2. **POS Reference** - the iiko payment types mapped to the Cosmos payment type. If several types are mapped, the first one is shown with a counter of the rest (for example, **+1**). If there is no mapping, a dash is shown.
3. **Sync Status** - the mapping state: **Synced** - the payment type is mapped to iiko, **Not Synced** - the payment type has not been mapped yet.

## Payment Type Mapping

Mapping is set up in the **Edit Mapping** window, which opens when you click a table row. The window shows the Cosmos payment type and the location for which the mapping is being set up.

In the **POS References** field, select one or more iiko payment types. The list offers **Search** and **Select All**. Confirm the selection with **Apply** and save the mapping with **Save**. Selected types are shown in the field, and an unneeded one can be removed with the cross.

[[gallery gap=12 layout=carousel]]
![Edit Mapping](/en/images/settings/pos-integration/pos-edit-en.png)
![iiko payment types list](/en/images/settings/pos-integration/pos-edit-list-en.png)
[[/gallery]]

[[delimiter rows=1]]

One iiko payment type can be mapped to only one Cosmos payment type.

[[info type=custom color=#E06823]]
Changing the mapping may significantly affect how the POS system works. Before saving, make sure the selected iiko payment types belong to the correct Cosmos payment type.
[[/info]]

## Refreshing Data

The list of payment types is loaded from iiko. The **Refresh Data** button in the upper right corner of the page starts synchronization with the POS: it loads new payment types and updates existing ones. Use it after a payment type has been added or renamed in iiko.

If the **POS References** field shows **Nothing here yet**, the data from iiko has not been loaded yet. Click **Refresh Data**. If the list is still empty, check the iiko connection or contact Cosmos support.

[[delimiter rows=3]]

---
