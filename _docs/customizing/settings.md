---
layout: page
title: Settings
menus:
  customizing:
    title: Settings
    weight: 2
---

The Settings menu allows users to manage the language and look of their instance in the online app, browser tabs, and on forms that users will interact with. This is also the space where users can integrate their instance with Facebook, Twitter, and Google.

The section is divided among four submenus:

- [General](/docs/customizing/settings.html#general)
- [Theme](/docs/customizing/settings.html#theme)
- [Integrations](/docs/customizing/settings.html#integrations)
- [Subjects](/docs/customizing/settings.html#subjects)
- [Email](/docs/customizing/settings.html#email)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
Only those with Administrator credentials are able to access this menu in the backend. For more on the roles available in Manifold, see the <a href="/docs/projects/accounts/index.html">Accounts section</a>.
</div>

![Settings](/docs/assets/customizing/admin_settings.png)

<a name="general"></a>
## General Settings

Selecting the `Settings` menu in admin mode will bring you to the `General` settings submenu. Here, you will have the option to change how you wish to refer to you Manifold installation. There are various places throughout the application where Manifold refers to itself. If you set a value here, Manifold will use it where appropriate.

### How Do You Refer to Your Manifold Installation?

The name entered in this field will be used on the account creation modal that new users will see when they join your instance: `By creating this account, you agree to {name}’s terms and conditions.` It will also appear in the email sent to new users welcoming them to your instance: `Welcome to {name}. Thanks for signing up!`

If this field is left blank the system will default to using `Manifold`.

### Default Page Title

This field will adjust the text that appears in a user's browser tab on the homepage and other non-project pages. On project pages the title will automatically adjust to the name of the content being displayed.

If this field is left blank the system will default to using `Manifold Scholarship`.

![Page Title](/docs/assets/customizing/page-title.png)

### Default Publisher

The name entered here will automatically populate this field for newly created projects. It will not, however, populate the like field for newly added texts. Changing this field will not automatically update existing records.

### Default Place of Publication

As with the field above, the name entered here will automatically populate this field for newly created projects. It will not, however, populate the like field for newly added texts. Changing this field will not automatically update existing records.

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

<a name="theme"></a>
## Theme Settings

The fields contained in the `Theme` section allow a publisher to replace the default Manifold icon with their own branded logo, modify how the header element is aligned, and adjust the default font set of the instance.

![Branding](/docs/assets/customizing/branding.png)

### Branding

#### Press Website URL

This field allows publisher's to direct users to a specific URL they want to associate with their logo (usually the publisher's homepage). If left empty the logo will not be clickable.

#### Header Logo

Publisher logos replace the default Manifold icon and will appear in the upper lefthand corner of the Manifold homepage.

Header Logos are constrained to max height of 60 px high with flexible height and can be uploaded as a GIF, JPEG, JPG, or PNG file.

#### Mobile Header Logo

A logo added to this field will replace the Header Logo on mobile devices.

Mobile Logos are best prepared as graphic-only elements in a 1:1 ratio. They can be uploaded as a GIF, JPEG, JPG, or PNG file.

#### Press Footer Logo

The footer logo will appear on the right of the footer that appears on all instance pages, except those rendering a Text in the Reader, where the footer is replaced by a Text's copyright information.

This logo can mimic that of the header logo or be of its own distinct design. The dimensions of the footer logo are capped at 325 × 200 px and can be uploaded as a GIF, JPEG, JPG, or PNG file.

#### Favicon

The favicon is the icon that appears in the browser tab associated with an instance.

![Favicon](/docs/assets/customizing/favicon.png)

This logo can mimic that of the header logo or be of its own distinct design. There are many ways to approach the dimensions of a favicon—they are more nuanced than one might think—but a solid starting point would be to create an image files at either 16 × 16 or 32 × 32 px. Favicons can be uploaded as a GIF, JPEG, JPG, or PNG file.

#### Logo Styles

Publishers can adjust the placement of their header logo by entering a JSON style object. Logos are anchored on their the top and left, so our suggestion would be to use those parameters in adjusting it's placement.

For example, `{"left": 100, "top": 100}` would push the logo 100 pixels to the right (or from the left) and 100 pixels down (or from the top) from its default location in the header.

In terms of syntax, the entire instruction should be surrounded by braces (`{}`), with the parameters enclosed in quote marks and separated by a comma. Units are in pixels.

#### Header Navigation Offset

This field allows users to adjust the vertical position of header navigation menu elements. For example, enter `5` to move the header elements down five pixels. Enter `-5` to move it up five pixels.

![Header Offset](/docs/assets/customizing/header-offset.png)

### Typography

#### Typekit ID

Manifold was designed to employ two TypeKit fonts throughout the app: `Sofia Pro` and `Freight Text`. If you have a valid Typekit account and enter your ID in this field, those two fonts will load for your readers.

If you do not have a Typekit account, Manifold will defer to two sets of open-license alternatives that are included at installation: `Trueno` and `Aleo`.

<a name="instance-header"></a>

### Instance Header Bar

![Instance Header](/docs/assets/customizing/instance-header.png)

The instance header bar is a thin, customizable branding element that serves as a means to contextualize a Manifold page for readers in relation to a larger mission. It can be configured to appear atop all Manifold pages outside of the reader, or it can be set to specifically target only those projects that are enabled for [standalone mode](/docs/projects/customizing/general.html#standalone).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. The instance header bar can be deployed alongside the standard library header; it does not <em>only</em> need to be used in conjunction with projects in standalone mode.
</div>

#### Text

Text entered here appears in the header bar globally across the instance, but it can be superseded on individual projects if so configured in a project's [General settings](/docs/projects/customizing/general.html#header-bar).

![Header Bar Text](/docs/assets/projects/header-bar-text.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. This field is <em>not</em> Markdown enabled and only accepts one line of text.
</div>

#### URL

The header bar functions as a clickable link. The URL entered here will serve as the target link to any user who clicks on the header bar. Like the Header Bar Text, input here can be overriden on a project's [General settings](/docs/projects/customizing/general.html#header-bar) page.

#### Color

The color of the header bar is customizable. To define the color of the header bar for your Manifold instance, enter an HTML color hex value—including the hash symbol (#)—in this field (e.g., `#2980B9`).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. The color of the header bar is a global setting and cannot be adjusted for individual projects.
</div>

#### Press Bar Display Mode

- **Disabled**. When set to `Disabled` the header bar will not display—*even if* a user fills in the [header bar fields](/docs/projects/customizing/general.html#header-bar) for an individual project or sets one up to appear in [standalone mode](/docs/projects/customizing/general.html#standalone).
- **Always Visible**. If toggled to `Always Visible`, so long as the text and URL have been provided, the header bar will display on all Manifold pages (excepting those within the reader), regardless of whether or not those pages are associated with a standalone project. If users have enabled [standalone mode](/docs/projects/customizing/general.html#standalone) and the [header bar](/docs/projects/customizing/general.html#header-bar) for individual projects, those settings will override the text and URL entered here in the Theme settings.
- **Only Visible in Standalone Mode**. To set the header bar to only appear on those pages associated with projects that are enabled for [standalone mode](/docs/projects/customizing/general.html#standalone), select `Only Visible in Standalone Mode`.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
The header won't display unless text and a URL are provided. However, if the header bar is enabled to be visible in standalone mode and a user has input text and a URL for those projects individually in their <a href="/docs/projects/customizing/general.html">General settings</a>, the header bar will appear, even if that information has not been filled in here in the Theme settings.
</div>

<a name="integrations"></a>
## Integrations

The `Integrations` menu is where a publisher can set up Facebook, Twitter, and Google integrations.

Configuring OAuth allows new users to create an account using their existing Google, Facebook, or Twitter accounts. By configuring Google Drive and Analytics, a publisher will unlock the ability to import texts from Google Docs into the Manifold reader, import resources in bulk into existing projects, and get detailed analytics about reader use and interaction with the Manifold instance.

For a detailed walkthrough on how to set up these integrations and record the appropriate information in the system, see the [External Services section](/docs/customizing/external_services/index.html).

<a name="subjects"></a>
## Project Subjects

The `Subjects` menu enables management of the subjects a publisher wishes to associate with the catalog of their projects. Here you can add new subjects to the system, search through existing subjects, modify subject titles, and delete unwanted subject categories.

To add a new subject to the system, click `Add a Subject`. A drawer will open from the right allowing you to name the new category. If the name you select is already in the system, Manifold will alert you. Otherwise you can simply hit return (or enter) on your keyboard or click `Save and Continue`, and your subject will be created for other users to assign to projects as needed. You can create as many subjects as needed.

![Subjects](/docs/assets/customizing/subjects.png)

To modify or delete a subject, click its name from the listing to access its drawer for editing. If you want to delete the subject, click `Delete Subject` below the subject's name.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
See the <a href="/docs/projects/customizing/general.html#subjects">Customizing section</a> for instructions on how to associate subjects with a specific project.
</div>

<a name="email"></a>
## Email

In the `Email` submenu, you can configure how Manifold will send email to users. Manifold supports sending mail via an external SMTP server or via a local Sendmail installation. To test your configuration, press the "Send Test Email" button at the top of screen. Doing so will send a message to the email address on file for you user.

In addition to setting up the email account, Manifold lets you customize your email closing.
