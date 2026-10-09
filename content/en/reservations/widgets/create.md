---
title: "Create and Configure"
description: 
summary: "Appearance and form field settings, website code, duplicating and deleting"
order: 2
---

To create a widget:

1. Click **Create** in the upper right corner of the widget list.
2. Fill in the fields in blocks 1–4 and select the form settings you need.
3. Click **Save**.

After saving, the **Embed Code** button appears in the upper right corner of the page — it opens the code for adding the widget to a website. See **[Adding to a Website](#adding-to-a-website)** for details.

![Widget Page](/en/images/reserve/widgets/widget-settings-en.png)

[[delimiter rows=1]]

### 1. Main Details

- **Name** — the widget name in the system. It is shown in the widget list and at the top of the widget page. Guests do not see it.
- **Locations** — locations where guests can submit a request. You can select several.
- **Description** — an optional note for staff, up to 250 characters.

### 2. Design

- **Title**
- **Background**
- **Accent**
- **Text**
- **Fields**

### 3. Field Configuration

The following fields are always present in the form and are required:

- **First Name**
- **Phone**
- **Location** — not shown if the widget is linked to one location
- **Reservation Date**
- **Time**
- **Duration**
- **Guests**
- Consent to personal data processing

Additional fields are turned on with the toggle on the left. A check in the **Required** column makes the field required.

- **Last Name**
- **Date of Birth**
- **E-mail**
- **Telegram**
- **Comment**
- **Manual Tags** — manual tag groups the guest can select, for example allergies. Groups with **Available in Reservation Widget** enabled in their settings are shown, under the group's public name if it is specified. See **[Create and Edit Manual Tags](https://wiki.cosmosresto.ru/en/marketing/manual-tags/create/)** for details.

### 4. Privacy Policy

**Link** — the address of the privacy policy page on the venue website. Required field.

## Preview

The **Preview** on the right shows changes immediately. The buttons above it switch between the phone and desktop views of the form. Field validation works in the preview when you click **Submit a request**.

![Preview](/en/images/reserve/widgets/widget-preview-en.png)

[[delimiter rows=1]]

## Adding to a Website

The **Embed Code** button appears in the upper right corner of the widget page after the widget is saved. It opens the **How to embed code** window with ready-made code and connection steps:

1. The connection script is added to the beginning of the website's `<body>`.
2. A button that opens the widget in a modal window and/or an empty block where the form is shown directly on the page is created on the page.
3. The widget parameters are passed to `initBookingWidget(...)`.

Both options can be used on the same website. It is enough to pass the contents of the window to the website developer.

![Embed Code](/en/images/reserve/widgets/widget-embed-code-en.png)

[[delimiter rows=1]]

This is how the widget looks on the venue website:

![Widget on the Website](/en/images/reserve/widgets/widget-site-en.png)

[[delimiter rows=1]]

## Editing, Duplicating and Deleting

To edit a widget, open it from the list, make changes and click **Save**.

The duplicate button next to **Delete** creates a full copy of the widget. Make the necessary changes to the copy and save it — this creates a new widget.

![Delete and Duplicate Buttons](/en/images/reserve/widgets/widget-buttons-en.png)

[[delimiter rows=1]]

When deleting, the **Delete Widget** window appears. The widget is deleted permanently: the code on websites stops working, and requests through this widget no longer arrive.

![Deleting a Widget](/en/images/reserve/widgets/widget-delete-en.png)

[[delimiter rows=1]]

When saving changes, the **Apply changes** window appears. After editing, the code placed on websites may become outdated — update it on all websites where the widget is installed. This action cannot be undone.

[[delimiter rows=3]]

---
