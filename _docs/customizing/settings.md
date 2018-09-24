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

### Terms and Conditions Link URL

If your institution has a terms and conditions document that you'd like to share with your readers, you can include its URL here. The link to this document will appear in the new user signup form. If left blank there will be no mention of any terms or conditions on the signup form.

If your terms exists as a Manifold Page created in the [Records menu](/docs/customizing/records/pages.html) you need only enter here the slug you created for that page. Otherwise, if your terms exist on a page outside of this Manifold instance, you'll need to include the full URL.

<a name="theme"></a>
## Theme Settings

The fields contained in the `Theme` section allow a publisher to replace the default Manifold icon with their own branded logo.

### Press Logo

A publisher's logo can be uploaded here as a GIF, JPEG, JPG, or PNG file. Publisher logos replace the default Manifold icon and will appear in the upper lefthand corner of the Manifold homepage, as well as on the right of the footer that appears on all instance pages, except those rendering a text in the reader, where the footer is replaced by a text's copyright information.

Logos are constrained at 40 px wide with flexible height. For retina displays, upload logos that are 80 px wide.

### Press Website URL

This field allows publisher's to direct users to a specific URL they want to associate with their logo (usually the publisher's homepage). If left empty the logo will not be clickable.

### Logo Styles

Publishers can adjust the placement of their logo, as it appears in the header, by entering a JSON style object. Logos are anchored on their the top and left, so our suggestion would be to use those parameters in adjusting it's placement.

For example, `{"left": 100, "top": 100}` would push the logo 100 pixels to the right (or from the left) and 100 pixels down (or from the top) from its default location in the header.

In terms of syntax, the entire instruction should be surrounded by braces (`{}`), with the parameters enclosed in quote marks and separated by a comma. Units are in pixels.

Presently, it is not possible to style the logo that appears in the Manifold footer.

### Typekit ID

Manifold was designed to employ two TypeKit fonts throughout the app: `Sofia Pro` and `Freight Text`. If you have a valid Typekit account and enter your ID in this field, those two fonts will load for your readers.

If you do not have a Typekit account, Manifold will defer to two sets of open-license alternatives that are included at installation: `Trueno` and `Aleo`.

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
