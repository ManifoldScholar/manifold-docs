---
layout: page
title: Google Analytics Configuration
menus:
  google:
    title: Analytics
---

Configure this feature to enable analytics reporting to your Google account, and to display analytics data in the Manifold backend.

Before using this feature, you must [configure Google services](/docs/customizing/external_services/google/index.html).

### Enable Analytics

1. Go to the APIs overview by clicking on the "API" card on your project dashboard.
2. Click on the "Library" tab in the sidebar.
3. Click on "Analytics API" under the "Other" header. (You may need to search for "Analytics API" if you don't see it.
4. Click "Enable".

### Configure Analytics

1. Log into your property at [Google Analytics](https://analytics.google.com).
2. Create a new property for your Manifold installation. If you need help, instructions can be found at [Analytics Help](https://support.google.com/analytics/answer/1008015?hl=en).
3. Click on the "Admin" tab in the sidebar.
4. Click on "User Management" under your property's name.
5. Add "Read & Analyze" permissions for your service account.

![Analytics Permissions](/docs/assets/customizing/analytics-permissions.png)

### Get Tracking ID and Profile ID

1. Click on "Property Settings" under your property's name.
2. Make note of the Tracking Id including the "UA-" prefix.
3. Click on "View Settings" under "All Web Site Data".
4. Make note of the View Id.

![Analytics Tracking](/docs/assets/customizing/analytics-tracking.png)

![Analytics Profile](/docs/assets/customizing/analytics-profile.png)

### Update Manifold Settings

In the Manifold backend, navigate to the "settings" menu item. Under the "integration" tab, enter the values above into the corresponding fields.

If you manage settings in the environment \(`MANAGE_SETTINGS_FROM_ENV=1` in your `.env` file\), you should set the corresponding settings in `.env`:

``` conf
# Google Analytics Integration
MANIFOLD_SETTING_INTEGRATIONS_GA_TRACKING_ID=
MANIFOLD_SETTING_INTEGRATIONS_GA_PROFILE_ID=
```
