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

## About

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

<a name="behaviors"></a>

## Behaviors

### Restrict Access to All Projects

By default all Manifold projects are openly accessible. This toggle allows publishers to adjust that, so all projects are instead restricted and require an entitlement that is gained, for example, via a purchase, subscription, membership, etc.

Such entitlements are bestowed to specific users or reading groups within the settings of individual projects. To learn more about that process and how restricted projects behave differently from open ones, see the [Access section](/docs/projects/customizing/access.html#entitlements).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. When this setting is toggled on, publishers will still have the ability to make certain projects openly accessible for general readers.
</div>

### Restricted Access Notice Header *(Contextual)*

When `Project Access is Restricted` is toggled on, the text in this field will display (with the `Restricted Access Notice Body`) below the project hero for only those users who don't have credentials to access the project.

This field is customizable and Markdown enabled. If left blank, the default message will display: “Access to this project is restricted.”

![Restricted Notice](/docs/assets/customizing/restrictedNotice.png)

### Restricted Access Notice Body *(Contextual)*

When `Project Access is Restricted` is toggled on, the text in this field will display (with the `Restricted Access Notice Header`) below the project hero for only those users who don't have credentials to access the project.

This field is customizable and Markdown enabled. If left blank, the default message will display: “Only users granted permission may view this project's texts, resources, and other content.”

<a name="disable-library"></a>

### Disable Library Views

For those publishers who want to leverage the power of Manifold with their existing web presence, they have the option to disable their main Manifold landing page and all associated library views of their projects.

When those library views are disabled, publishers can instead point their audience to specific Manifold projects directly from their website without having to compete with the Manifold platform as a sort of secondary web presence.

When this slider is toggled on, project library views will be disabled. Additionally,

- Frontend pages that are not library pages—project pages and transactional pages  like those for customizing notifications and reading groups—will render with the normal library header and standalone footer (versus the [Standalone header](/docs/projects/customizing/general.html#standalone-mode)).
- The header will render without global search, and links to `Home`, `Projects`, and `Following` pages will be removed ([custom Pages](/docs/customizing/records/pages.html) can still render in the header).
- Transactional pages will render in the context of the last project that the user visited.
- Global search will be scoped to the project level.

### Enforce Standalone Mode for All Projects *(Contextual)*

If this slider is toggled on, all projects will render in [standalone mode](/docs/projects/customizing/general.html#standalone-mode), overriding individual project settings.

When projects are in standalone mode, the standard library header that displays a custom logo and color scheme will be supplanted by standalone header with fewer branding options.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. To learn more about adjusting the branding of the standard library header, see the <a href="/docs/customizing/settings/theme.html">Theming page</a>, under ther <code>Branding</code> heading.
</div>

### Library Page Redirect URL *(Contextual)*

Library pages—with the exception of the instance's home page—will redirect to the URL designated in this field when library views are disabled. If left blank, requests to display library pages will return a `404 Page Not Found` error.

### Home Page Redirect URL *(Contextual)*

The Manifold home page will redirect to the URL designated in this field when library views are disabled. If left blank, requests to display library pages will return a `404 Page Not Found` error.

## Disable Public Annotations and Comments

When this global setting is toggled on, users will not be able to pin a public annotation to any text in the instance. *This does not prevent users from annotating texts entirely.* However users will be able to only leave annotations in the context of a reading group of which they are a member—and viewable to other members of that group—or as a private annotation, viewable only to the user themself.

Because of that, someone who doesn't have an account, or someone who is logged in as a Reader, won't see any annotations throughout the instance when this toggle is engaged. The exception would be Readers who are members of reading groups: they will be able to see annotations that have been left in the context of those reading groups. 

So long as this setting is engaged, it is not possible to convert a private annotation into a public one, and public reading groups will function as if they were private ones.

If you wish to further limit the annotation functionality across your instance, you can also disable reading groups (described below). When publishers disable both public annotation and reading groups, users will only be able to leave private annotations they alone can see.

To learn how to disable public annotations for specific projects, instead of for an instance globally, see the [project settings section](/docs/projects/customizing/general.html).

## Disable Reading Groups

By engaging this toggle, users will not be able to create new or join existing reading groups. Additionally, existing reading group annotations created before this toggle was enabled will no longer be visible to anyone—including the users who left the annotations.

This is a global setting that will affect all readings groups across the instance. Reading groups themselves don’t have direct relationships to projects; instead they are a collection of users and a way of grouping people and annotations. Thus it is not possible to selectively disable all reading group functionality on a project-by-project basis. However, if `Disable Public Annotations and Comments` (described above) is engaged globally or for a specific project (learn more about that process in the [project settings](/docs/projects/customizing/general.html)) then all reading groups will function as if they were private reading groups and then only be accessible to group members.

When this toggle is enabled, the application will display differently in certain scenarios:

After selecting text in the reader, the pop-up language will change from "Current Group" to "Current Visibility."

![Restricted Popup](/docs/assets/customizing/restrict-pop.jpg)

Extending from that use case, the menu heading, when selecting the context of the annotation, will adjust likewise from "Reading Group" to "Visibility." Existing reading groups will no longer appear in the dropdown.

![Restricted Group](/docs/assets/customizing/restrict-group.jpg)

The visibility dropdown's heading will change from "Reading Groups" to "Visibility." And as with the pop-up, existing reading groups will no longer render in the listings.

![Restricted Visibility](/docs/assets/customizing/restrict-visibility.jpg)

Last, the user dropdown will no longer provide a link to "Mange Groups."

![Restricted Drowndown](/docs/assets/customizing/restrict-dropdown.jpg)
