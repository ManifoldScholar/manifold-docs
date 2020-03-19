---
layout: page
title: Twitter OAuth Configuration
menus:
  integrations:
    title: Twitter
---

If this feature is enabled, Manifold will include a "Log in with Twitter" button on the login page. Clicking the button will open a popup that allows users to authenticate using their Twitter account. On successful authentication, Manifold will create a user record \(if it is the user's first time logging in\) and an associated identity record.

These instructions document the process for acquiring OAuth keys from Twitter. It's possible that their process has changed since this was written. If that's the case, please [open a pull request](https://github.com/ManifoldScholar/manifold-docs/pulls) against our documentation with a correction.

## Requirements

Before adding OAuth support for Twitter to Manifold, you will need a Manifold Twitter app.

* If you do not have one, create a Twitter app through the [Twitter App Interface](https://apps.twitter.com).

## Callback URL

The Manifold API handles OAuth callbacks. For Twitter, the callback route is located at `/auth/twitter/callback`. For your installation of Manifold, the callback URL will be the fully qualified domain name \(FQDN\) of the API server followed by that path. For example, my Manifold API is on the same domain as the client application, and that domain is `manifoldapp.org`, the callback URL would be `http://manifoldapp.org/auth/twitter/callback`.

## Setup Required URLs

1. Log into your account and app at [Twitter Apps](https://apps.twitter.com).
2. Navigate to the "Settings" tab.
3. In the "Callback URL" field, enter the callback URL, defined above.
4. In the Privacy Policy field, add a link to your privacy policy. This is a required field.
5. In the Terms of Service field, add a link to your terms of service. This is a required field.
6. Save the settings.

![Twitter URLs](/docs/assets/customizing/twitter-urls.png)

## Add Permission Settings

1. Navigate to the "Permissions" tab.
2. Change your app's Access Level to "Read Only".
3. Check the box to "Request email addresses from users".

![Twitter Permissions](/docs/assets/customizing/twitter-access.png)

## Get App ID and Secret ID

1. Navigate to the "Keys and Access Tokens" tab.
2. Copy the values under "Consumer Key \(API Key\)" and "Consumer Secret \(API Secret\)".

![Twitter Settings](/docs/assets/customizing/twitter-settings.png)

## Update Manifold Settings

Back in Manifold, under the "Twitter" header, enter the Consumer Key into the field labeled `Twitter Consumer Key`. Enter the Consumer secret into the field labeled `Twitter Consumer Secret`.

Alternatively, if you manage settings in the environment \(`MANAGE_SETTINGS_FROM_ENV=1` in your `.env` file\), you should set the corresponding settings in `.env`:

``` conf
# Google OAuth Integration
MANIFOLD_SETTING_INTEGRATIONS_TWITTER_APP_ID=
MANIFOLD_SETTING_SECRETS_TWITTER_APP_SECRET=
```
