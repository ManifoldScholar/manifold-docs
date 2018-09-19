---
layout: page
title: Google
menus:
  external_services:
    identifier: google
---

Manifold can utilize Google Services to enable additional helpful features.

* [Analytics](/docs/customizing/external_services/google/analytics.html)
* [Drive](/docs/customizing/external_services/google/drive.html)

To begin using these features, you must first complete some configuration through the Google Developer Console.

## Requirements

Before adding Google Services support to Manifold, you will need a Google developer account and a Manifold Google project.

* If you do not have a developer account you can create one at through the [Google Developer Console](https://console.developers.google.com/).
* If you do not have a Manifold Google project you can create one by logging into your developer account and clicking "Create Project."

## Get Credentials Set File

1. Go to the APIs overview by clicking on the "API" card on your project dashboard.
2. Click on the "Credentials" tab in the sidebar.
3. Click to create credentials set for a "Service account key."
4. Select "New service account" from the dropdown.
5. Give your service account a name. You do not need to add a role.
6. Create the credential set.
7. Select "JSON" for the key type and download the `.json` file as `google_service.json`.<sup>[1](#note-1)</sup>

## Update Manifold Settings

In the Manifold backend, navigate to the "settings" menu item. Under the "integration" tab, upload the `google_service.json` file.

If you manage settings in the environment \(`MANAGE_SETTINGS_FROM_ENV=1` in your `.env` file\), you should set the corresponding settings in `.env`:

``` conf
# Config Files
MANIFOLD_SETTING_CONFIG_GOOGLE_SERVICE="/var/opt/manifold/api/keys/google_service.json"

## Google Integration
MANIFOLD_SETTING_INTEGRATIONS_GOOGLE_PROJECT_ID=
MANIFOLD_SETTING_INTEGRATIONS_GOOGLE_PRIVATE_KEY_ID=
MANIFOLD_SETTING_INTEGRATIONS_GOOGLE_CLIENT_EMAIL=
MANIFOLD_SETTING_INTEGRATIONS_GOOGLE_CLIENT_ID=
```

If a file path is present at the path set in `MANIFOLD_SETTING_CONFIG_GOOGLE_SERVICE`, values will first be set from this file, then overwritten by any subsequent matching keys.

## Notes

<small>
<a name="note-1"></a><sup>1</sup> If managing settings in the environment (through `.env`), add the "google_service.json" file into your app at "/var/opt/manifold/api/keys".
</small>
