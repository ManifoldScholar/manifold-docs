---
layout: page
title: General Settings
menus:
  settings:
    title: General
    weight: 1
---

Selecting the `Settings` menu in admin mode will bring you to the `General` settings submenu. Here, you will have the option to change how you wish to refer to you Manifold installation. There are various places throughout the application where Manifold refers to itself. If you set a value here, Manifold will use it where appropriate.

## How Do You Refer to Your Manifold Installation?

The name entered in this field will be used on the account creation modal that new users will see when they join your instance: `By creating this account, you agree to {name}’s terms and conditions.` It will also appear in the email sent to new users welcoming them to your instance: `Welcome to {name}. Thanks for signing up!`

If this field is left blank the system will default to using `Manifold`.

## Default Page Title

This field will adjust the text that appears in a user's browser tab on the homepage and other non-project pages. On project pages the title will automatically adjust to the name of the content being displayed.

If this field is left blank the system will default to using `Manifold Scholarship`.

![Page Title](/docs/assets/customizing/page-title.png)

## Default Publisher

The name entered here will automatically populate this field for newly created projects. It will not, however, populate the like field for newly added texts. Changing this field will not automatically update existing records.

## Default Place of Publication

As with the field above, the name entered here will automatically populate this field for newly created projects. It will not, however, populate the like field for newly added texts. Changing this field will not automatically update existing records.

## Copyright

The Manifold footer, which runs across all pages of an instance, except those in the reader, includes a space to indicate the copyright information for the instance as a whole. This field allows users to add or adjust how that line reads. If left blank, no default notice will appear. The copyright symbol (©) will precede entered text by default.

![Footer](/docs/assets/customizing/footer.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
Texts rendered in the reader have their own copyright footer. To edit how that reads, adjust the <strong>Rights</strong> field in the text's <a href="/docs/projects/customizing/texts.html#managing-texts">Metadata menu</a>.
</div>

## Social Sharing Message

The message a publisher enters here will pre-populate the Twitter and Facebook pop-ups that users create when they share resources and collections through social media. The content of the message will be followed by a URL to the resource or collection in question.

![Resource Share](/docs/assets/customizing/resource-share.png)

![Collection Share](/docs/assets/customizing/collection-share.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
See the <a href="/docs/reading/sharing.html">Sharing section</a> for how users can share texts in the reader through social media.
</div>

## Twitter Account

This field allows publishers to create a link in the Manifold footer to their Twitter account. Twitter usernames here can be entered with or without an ampersand (@). If left blank, no Twitter icon will appear in the footer.

## Facebook Page ID

This field allows publishers to create a link in the Manifold footer to their Facebook account. If left blank, no Facebook icon will appear in the footer.

## Contact Email

This field allows publishers to create a link in the Manifold footer to an email account they would like to associate with this Manifold instance. It might be to a general institutional email, an account specific to this instance, or to an individual's account. If left blank, no email icon will appear in the footer.

When a reader clicks on the email icon link they will be directed to an editable form, where they can input their email address, name, and message. Once sent, the contents of the form will be directed to the email account noted in the `Contact Email` field.

![Email Form](/docs/assets/customizing/email-form.png)