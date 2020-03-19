---
layout: page
title: General Settings
menus:
  settings:
    title: General
    weight: 1
---

Selecting the `Settings` menu in admin mode will bring you to the `General` settings submenu. Here, you will have the option to change how you wish to refer to you Manifold installation. There are various places throughout the application where Manifold refers to itself. If you set a value here, Manifold will use it where appropriate.

![General Settings](/docs/assets/customizing/general.png)

### How Do You Refer to Your Manifold Installation?

The name entered in this field will be used on the account creation modal that new users will see when they join your instance: `By creating this account, you agree to {name}’s terms and conditions.` It will also appear in the email sent to new users welcoming them to your instance: `Welcome to {name}. Thanks for signing up!`

If this field is left blank the system will default to using `Manifold`.

### Default Page Title

This field will adjust the text that appears in a user's browser tab on the homepage and other non-project pages. On project pages the title will automatically adjust to the name of the content being displayed.

If this field is left blank the system will default to using `Manifold Scholarship`.

![Page Title](/docs/assets/customizing/page-title.png)

### Default Page Description

This description is meant to provide a brief summary of your instance so that search engines can properly catalog and surface it in results. This description will usually be displayed as part of the result, beneath the page's title and link.

As a general rule, it is best to keep these brief—between 50 and 160 characters—without any internal formatting, just plain text.

### Default Publisher

The name entered here will automatically populate this field for newly created projects. It will not, however, populate the like field for newly added texts. Changing this field will not automatically update existing records.

### Default Place of Publication

As with the field above, the name entered here will automatically populate this field for newly created projects. It will not, however, populate the like field for newly added texts. Changing this field will not automatically update existing records.

## Footer

### Copyright

The Manifold footer, which runs across all pages of an instance, except those in the reader, includes a space to indicate the copyright information for the instance as a whole. This field allows users to add or adjust how that line reads. If left blank, no default notice will appear. The copyright symbol (©) will precede entered text by default.

![Footer](/docs/assets/customizing/footer.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
Texts rendered in the reader have their own copyright footer. To edit how that reads, adjust the <strong>Rights</strong> field in the text's <a href="/docs/projects/customizing/texts.html#managing-texts">Metadata menu</a>.
</div>

### Social Sharing Message

The message a publisher enters here will pre-populate the Twitter and Facebook pop-ups that users create when they share resources and collections through social media. The content of the message will be followed by a URL to the resource or collection in question.

![Resource Share](/docs/assets/customizing/resource-share.png)

![Collection Share](/docs/assets/customizing/collection-share.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
See the <a href="/docs/reading/sharing.html">Sharing section</a> for how users can share texts in the reader through social media.
</div>

### Twitter Account

This field allows publishers to create a link in the Manifold footer to their Twitter account. Twitter usernames here can be entered with or without an ampersand (@). If left blank, no Twitter icon will appear in the footer.

### Facebook Page ID

This field allows publishers to create a link in the Manifold footer to their Facebook account. If left blank, no Facebook icon will appear in the footer.

### Contact Email

This field allows publishers to create a link in the Manifold footer to an email account they would like to associate with this Manifold instance. It might be to a general institutional email, an account specific to this instance, or to an individual's account. If left blank, no email icon will appear in the footer.

When a reader clicks on the email icon link they will be directed to an editable form, where they can input their email address, name, and message. Once sent, the contents of the form will be directed to the email account noted in the `Contact Email` field.

![Email Form](/docs/assets/customizing/email-form.png)

## Behaviors

For those publishers who want to leverage the power of Manifold with their existing web presence, they have the option to disable their main Manifold landing page and all associated library views of their projects.

When those library views are disabled, publishers can instead point their audience to specific Manifold projects directly from their website without having to compete with the Manifold platform as a sort of secondary web presence.

The fields below describe how to enable and customize this functionality.

## Disable Library Views

The main feature here is that we're adding the ability to disable library routes. If the library is disabled, we expect to see a few new behaviors:

1. Any route that is set to isLibrary in frontend/routes.js will either redirect or return a 404 page not found error.
2. If a "Library Page Redirect URL" is set in the backend, library pages will redirect to that URL rather than 404ing.
3. If a "Home Page Redirect URL" is set in the backend, the manifold home page will redirect to that URL rather than 404ing.
4. Frontend pages that are not library pages——and this includes project pages and transactional pages (subscriptiongs, reading groups, etc)—will render with the normal header and standalone footer. The normal header, however, will render without the primary navigation, and without the global search.
5. Transactional pages will render in the context of the last project that the user visited. This means that the global search will be scoped to that project and the transaction content will be preceeded by a back link to the project.
6. We also expose a setting if library pages are disabled that force all projects to always render in standalone mode. This may be desirable, but it may not be, depending on the use case.
7. Finaly, to help presses line up Manifold branding with their own press branding, we are exposing foreground and background header colors in settings/theme.



5. When library mode is disabled, we remove home, projects, and following from the primary navigation. In theory, you could make “page” records that linked to the top-level pages on your current site to kind-of mimic that site’s nav.

## Enforce Standalone Mode for All Projects

## Library Page Redirect URL

3. If a "Home Page Redirect URL" is set in the backend, the manifold home page will redirect to that URL rather than 404ing.

## Home Page Redirect URL