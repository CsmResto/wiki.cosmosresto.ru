---
title: Notifications
summary: "How to enable request notifications in CosmosResto, Google Chrome, Windows and macOS"
description: Setting up notifications about new reservation requests in the reservation module, Google Chrome and the operating system
order: 10
---

The reservation module informs about a new reservation request in two ways:

1. **Card inside CosmosResto.** It appears over the reservation module while the module is open. There is no sound.
2. **System notification.** It is shown by Google Chrome through Windows or macOS, with a sound. It arrives even if the CosmosResto tab is minimized or another program is open.

The two ways are turned on independently of each other.

[[delimiter rows=1]]

## New Request Card

The **New Request** card shows the guest's phone and name, the visit date and time, the number of guests and the time since the request was created. The request can be handled right away with **Reject**, **Confirm**, or opened in detail with **View Info**.

![New request card](/en/images/reserve/requests/notifications-card-en.png)

[[delimiter rows=1]]

To make the card appear when a new request arrives, turn on the **Requests Notifications** toggle in the menu under the avatar in the reservation module.

![Menu under the avatar](/en/images/reserve/requests/notifications-menu-en.png)

[[delimiter rows=1]]

## New Requests Indicator

While there are unprocessed requests, an orange dot is shown on the requests icon in the left menu. It disappears when all requests have been converted to reservations or rejected.

![New requests indicator](/en/images/reserve/requests/requests-indicator-en.png)

[[delimiter rows=1]]

## System Notifications

System notifications need three settings: notifications turned on in CosmosResto, permission in the browser and permission in the operating system.

### Turning On in CosmosResto

In the reservation module, click the avatar and select **Enable Web Push**. After that, the menu item changes to **Disable Web Push**.

The setting applies only to the current browser on the current device.

### Browser and Operating System Settings

[[tabs]]

[[tab Mac]]

**Permission in the browser**

In Google Chrome, notifications must be allowed for the reservation module site:

1. Open the reservation module and click the icon to the left of the site address.
2. Turn on the **Notifications** toggle.
3. Reload the page.

**Permission in macOS**

1. Open **System Settings** → **Notifications** and select **Google Chrome** in the list. If there are two **Google Chrome** rows, check the settings in each of them.
2. Turn on **Allow notifications**.
3. Select **Desktop** so that notifications appear on the screen.
4. In **Alert style**, select **Temporary** (the notification hides by itself) or **Persistent** (it stays on the screen until it is closed).
5. Turn on **Play sound for notifications**.
6. Make sure **Focus** (**Do Not Disturb**) is turned off.

[[tab Windows]]

**Permission in the browser**

In Google Chrome, notifications must be allowed for the reservation module site:

1. Open the reservation module and click the icon to the left of the site address.
2. Turn on the **Notifications** toggle.
3. Reload the page.

**Permission in Windows**

1. Right-click the **Start** button and select **Settings** → **System** → **Notifications**.
2. Make sure the **Notifications** toggle is on and **Do not disturb** is off.
3. In the **Notifications from apps and other senders** list, turn on **Google Chrome**. If the reservation module is installed as a separate app (the **Install app** button in the Google Chrome address bar), notifications come from it: turn on the **CosmosResto Reservations** row as well.
4. Click the app row and make sure **Show notification banners** is selected and **Play a sound when a notification arrives** is turned on.

[[/tabs]]

[[delimiter rows=1]]

## If Notifications Do Not Arrive

1. The menu under the avatar shows **Disable Web Push**. If it shows **Enable Web Push**, notifications are turned off.
2. Notifications are allowed for the CosmosResto site in Google Chrome.
3. Notifications are allowed for Google Chrome in Windows or macOS, and **Do Not Disturb** or **Focus** is turned off. If the reservation module is installed as an app in Windows, notifications must also be turned on for **CosmosResto Reservations**.
4. Google Chrome is running. If the browser is completely closed, notifications do not arrive.

[[delimiter rows=3]]

---
