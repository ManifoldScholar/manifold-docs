---
layout: page
title: Integrations
menus:
  settings:
    weight: 3
---

The `Integrations` menu is where Manifold administrators can leverage external services, including Google, Twitter, and Facebook, for third party authentication, social sharing functionality, and to enable text ingestion from Google Docs.

![Integrations](/docs/assets/customizing/integrations.png)

Before a publisher can input values into each of these fields, they will first need to set up accounts with Google, Facebook, and Twitter as described here:

<a name="google_services"></a>
## Google Services

By configuring Google Services, a publisher will unlock the ability to import texts from Google Docs into the Manifold reader, import resources in bulk into existing projects (using Google Drive), and leverage Google Analytics to get detailed statistics about reader use and interaction with the Manifold instance.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. To make it possible for your readers to log into your Manifold instance using their Google credentials, see the <a href="/docs/customizing/settings/integrations.html#oauth">OAuth section</a> below.
</div>

To begin using these features, you must first complete some configuration through the Google Developer Console.

### Requirements

Before adding Google Services support to Manifold, you will need a Google developer account and a Manifold Google project.

- If you do not have a developer account you can create one at through the [Google Developer Console](https://console.developers.google.com/).
- If you do not have a Manifold Google project you can create one by logging into your developer account and clicking "Create Project."

### Get Credentials Set File

1. Go to the APIs overview by clicking on the "API" card on your project dashboard.
2. Click on the "Credentials" tab in the sidebar.
3. Click to create credentials set for a "Service account key."
4. Select "New service account" from the dropdown.
5. Give your service account a name. You do not need to add a role.
6. Create the credential set.
7. Select "JSON" for the key type and download the `.json` file as `google_service.json`.<sup>[1](#note-1)</sup>

### Update Manifold Settings

Under the "Google Services Integration" header, upload the `google_service.json` file. Doing so will automatically populate the rest of the fields in the section.

![Google Services](/docs/assets/customizing/gservices.png)

Alternatively, if you manage settings in the environment \(`MANAGE_SETTINGS_FROM_ENV=1` in your `.env` file\), you should set the corresponding settings in `.env`:

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

### Next Steps

With Google Services now configured, you can enable Google Analytics and Drive integrations with your instance, as described in these two sections:

- [Analytics](/docs/customizing/settings/analytics.html)
- [Drive](/docs/customizing/settings/drive.html)

<a name="oauth"></a>
## OAuth

By configuring OAuth, your readers can login to Manifold using their Facebook, Twitter, or Google login. Configuring each OAuth Provider involves generating access tokens and storing them in Manifold. Follow the specific instructions for each provider to set this up.

- [Facebook OAuth](/docs/customizing/settings/facebook.html)
- [Twitter OAuth](/docs/customizing/settings/twitter.html)
- [Google OAuth](/docs/customizing/settings/google.html)

## Notes

<small>
<a name="note-1"></a><sup>1</sup> If managing settings in the environment (through `.env`), add the "google_service.json" file into your app at "/var/opt/manifold/api/keys".
</small>