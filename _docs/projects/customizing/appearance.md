---
layout: page
title: Appearance
menus:
  projects_customizing:
    weight: 2
---

The Appearance section of the project page controls the bulk of the display elements at the top of the frontend project landing page:

![Landing Appearance](/docs/assets/projects/landing-appearance.png)

## Description

This field holds a brief description of the project as a whole. Recommended length would range from three to five sentences. Text entered here can be formatted with [basic Markdown syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/).

## Hero Image

The hero image displays as a banner across the top of the project landing page and sits behind all the other elements described in this section.

Your image should be sized to 1280 × 800 pixels. Images not submitted at those dimensions will be scaled by the system to best approximate them and cropped along the bottom edge accordingly to fit the space.

Acceptable formats for upload are GIF, JPG, JPEG, PNG, and SVG.

When a project is shared socially the hero image is included as part of that transaction so that other platforms can render the look and feel of the source material from Manifold.

<small>
**Warning**. Be sure you have the necessary permissions to upload your hero image to the system.
</small>

## Cover

The cover is intended to be used for projects that are official versions or record—that is, they are not in a draft state but considered formally published. When set, the cover image will appear over the right side of the hero image on the project landing page once the text that serves as the version of record is moved into the [`Published` category](/docs/projects/customizing/texts.html#grouping-texts).

The system will automatically resize your image to fit the available space, but it need not be cropped and can retain its original ratio. For best results, the smallest side shouldn't be any less than 600 pixels.

Acceptable formats for upload are GIF, JPG, JPEG, PNG, and SVG.

## Purchase URL

If your project has a print edition available for purchase, you can direct readers to the URL where they can purchase the text. The URL entered here will serve as the target to the text entered in `Purchase Call to Action` field. If this field is left blank the value in the `Purchase Call to Action` will not appear.

The call-to-action link will appear below the cover image on the right side of the hero image. If there is no cover image, the link will float on the right of the hero image, centered vertically.

Entering a valid URL in this field will also automatically cause the value entered in the `Purchase Price` field to appear beside the call-to-action text.

It is expected that before entering a purchase URL a text has been moved into the Published category, as described in the [Texts section](/docs/projects/customizing/texts.html#grouping-texts).

## Purchase Call to Action

This field works in conjunction with the `Purchase URL`. Text entered here serves as the description to the target link entered in the `Purchase URL` field. By default the link will read `Buy Print Version`.

## Purchase Price

This field words in conjunction with the `Purchase URL` and will only appear if the `Purchase URL` contains a valid URL. The numerical value here indicates the cost of the print edition being directed to by the `Purchase URL`. As with the `Call to Action`, the value here can be clicked and will direct readers to the target entered in the `Purchase URL` field.

The default value for this field is `0.00`.

## Currency

This is a metadata field that allows you to describe the currency with which the purchase price is associated (e.g., USD for US Dollars or AUD for Australian Dollars). A full list of ISO 4217 currency codes can be [found here](http://www.xe.com/iso4217.php).

## Twitter Username

This field allows you to associate a Twitter account with the project—an author's or one created specifically for the project. Enter the Twitter username (with *or* without the `@` sign) and a link to the Twitter account, in the form a Twitter bird icon, will appear over the lower left of the Hero image, below the project description.

Tweets from this account will not automatically appear in the Recent Activity pane on the project's landing page. But that functionality is possible through the settings in the [Social section](social.html).

## Instagram Username

This field allows you to associate an Instagram account with the project—an author's or one created specifically for the project. Enter the Instagram username (*without* the `@` sign) and a link to the Instagram account, in the form of the Instagram icon, will appear over the lower left of the Hero image, below the project description and beside the Twitter icon, if present.

## Hide Project Activity

This slider provides an option to remove the `Recent Activity` blade from the project landing page in the front end.

![Activity Feed](/docs/assets/projects/activity-feed.png)

This can be used by those publishers whose projects don't warrant an `Recent Activity` section or who don't want to curate what appears in the section. For more about manually adjusting `Recent Activity` blade, see the [Activity section](activity.html).

## Project Thumbnail

For information about changing the project thumbnail (visible in the `Projects Library`), see the [General section](/docs/projects/customizing/general.html).
