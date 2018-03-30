---
layout: page
title: Facebook OAuth Configuration
menus:
  oauth:
    title: Facebook
---

If this feature is enabled, Manifold will include a "Log in with Facebook" button on the login page. Clicking the button will open a popup that allows users to authenticate using their Facebook account. On successful authentication, Manifold will create a user record \(if it is the user's first time logging in\) and an associated identity record.

These instructions document the process for acquiring OAuth keys from Facebook. It's possible that their process has changed since this was written. If that's the case, please [open a pull request](https://github.com/ManifoldScholar/manifold-docs/pulls) against our documentation with a correction.

## Requirements

Before adding OAuth support for Facebook to Manifold, you will need a Facebook account, which will allow you to create a Manifold Facebook app.

* If you do not have one, create a Facebook app by following the steps in the [Facebook Developer Docs](https://developers.facebook.com/docs/apps/register#developer-account).

## Callback URL

The Manifold API handles OAuth callbacks. For Facebook, the callback route is located at `/auth/facebook/callback`. For your installation of Manifold, the callback URL will be the fully qualified domain name \(FQDN\) of the API server followed by that path. For example, my Manifold API is on the same domain as the client application, and that domain is `manifoldapp.org`, the callback URL would be `http://manifoldapp.org/auth/facebook/callback`.

## Setup Redirect URL

1. Log into your account and app at [Facebook Developers](https://developers.facebook.com).
2. Under the "Products" header in the sidebar, add a new product.
3. Click "Get Started" on the "Facebook Login" item.
4. In the "Valid OAuth redirect URIs" field, enter the callback URL, described above.

![Facebook Redirect Settings](/docs/assets/customizing/facebook-redirect.png)

## Get App ID and Secret ID

1. Navigate back to the dashboard from the sidebar.
2. Copy the values under "App ID" and "App Secret".

![Facebook Dashboard](/docs/assets/customizing/developer-dashboard.png)

## Update Manifold Settings

In the Manifold backend, navigate to the "settings" menu item. Under the "integration" tab, enter the App ID into the field labeled "Facebook App ID." Enter the App Secret value into the field labeled "Facebook App Secret."

If you manage settings in the environment \(`MANAGE_SETTINGS_FROM_ENV=1` in your `.env` file\), you should set the corresponding settings in `.env`:

``` conf
# Facebook OAuth Integration
MANIFOLD_SETTING_INTEGRATIONS_FACEBOOK_APP_ID=
MANIFOLD_SETTING_SECRETS_FACEBOOK_APP_SECRET=
```
