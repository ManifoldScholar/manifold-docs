---
layout: page
title: Theme Settings
menus:
  settings:
    title: Theme
    weight: 2
---

The fields contained in the `Theme` section allow a publisher to replace the default Manifold icon with their own branded logo, modify how the header element is aligned, and adjust the default font set of the instance.

![Branding](/docs/assets/customizing/branding.png)

## Branding

### Press Website URL

This field allows publisher's to direct users to a specific URL they want to associate with their logo (usually the publisher's homepage). If left empty the logo will not be clickable.

### Header Logo

Publisher logos replace the default Manifold icon and will appear in the upper lefthand corner of the Manifold homepage.

Header Logos are constrained to max height of 60 px high with flexible height and can be uploaded as a GIF, JPEG, JPG, or PNG file.

### Mobile Header Logo

A logo added to this field will replace the Header Logo on mobile devices.

Mobile Logos are best prepared as graphic-only elements in a 1:1 ratio. They can be uploaded as a GIF, JPEG, JPG, or PNG file.

### Press Footer Logo

The footer logo will appear on the right of the footer that appears on all instance pages, except those rendering a Text in the Reader, where the footer is replaced by a Text's copyright information.

This logo can mimic that of the header logo or be of its own distinct design. The dimensions of the footer logo are capped at 325 × 200 px and can be uploaded as a GIF, JPEG, JPG, or PNG file.

### Favicon

The favicon is the icon that appears in the browser tab associated with an instance.

![Favicon](/docs/assets/customizing/favicon.png)

This logo can mimic that of the header logo or be of its own distinct design. There are many ways to approach the dimensions of a favicon—they are more nuanced than one might think—but a solid starting point would be to create an image files at either 16 × 16 or 32 × 32 px. Favicons can be uploaded as a GIF, JPEG, JPG, or PNG file.

### Logo Styles

Publishers can adjust the placement of their header logo by entering a JSON style object. Logos are anchored on their the top and left, so our suggestion would be to use those parameters in adjusting it's placement.

For example, `{"left": 100, "top": 100}` would push the logo 100 pixels to the right (or from the left) and 100 pixels down (or from the top) from its default location in the header.

In terms of syntax, the entire instruction should be surrounded by braces (`{}`), with the parameters enclosed in quote marks and separated by a comma. Units are in pixels.

### Header Navigation Offset

This field allows users to adjust the vertical position of header navigation menu elements. For example, enter `5` to move the header elements down five pixels. Enter `-5` to move it up five pixels.

![Header Offset](/docs/assets/customizing/header-offset.png)

### Accent Color

By default the primary accent color throughout the application—affecting links, icons, and buttons—is Manifold green: `#52E3AC`. This field allows a publisher to adjust the accent color to better match their own branding requirements.

Color values can be supplied in one of the following formats: CSS color keyword, hexadecimal, RGB, RGBA, HSL, HSLA, or HWB.

If left blank, Manifold will reset to its default accent color.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. Manifold will still calculate values for secondary system colors in line with accessibility standards even if a custom value has been input.
</div>

### Library Header Foreground Color



### Library Header Foreground Active Color



### Library Header Background Color



## Typography

### Typekit ID

Manifold was designed to employ two TypeKit fonts throughout the app: `Sofia Pro` and `Freight Text`. If you have a valid Typekit account and enter your ID in this field, those two fonts will load for your readers.

If you do not have a Typekit account, Manifold will defer to two sets of open-license alternatives that are included at installation: `Trueno` and `Aleo`.

<a name="instance-header"></a>

## Press Header Bar

![Instance Header](/docs/assets/customizing/instance-header.png)

The instance header bar is a thin, customizable branding element that serves as a means to contextualize a Manifold page for readers in relation to a larger mission. It can be configured to appear atop all Manifold pages outside of the reader, or it can be set to specifically target only those projects that are enabled for [standalone mode](/docs/projects/customizing/general.html#standalone).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. The instance header bar can be deployed alongside the standard library header; it does not <em>only</em> need to be used in conjunction with projects in standalone mode.
</div>

### Text

Text entered here appears in the header bar globally across the instance, but it can be superseded on individual projects if so configured in a project's [General settings](/docs/projects/customizing/general.html#header-bar).

![Header Bar Text](/docs/assets/projects/header-bar-text.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. This field is <em>not</em> Markdown enabled and only accepts one line of text.
</div>

### Color

The color of the header bar is customizable. To define the color of the header bar for your Manifold instance, enter an HTML color hex value—including the hash symbol (#)—in this field (e.g., `#2980B9`).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. The color of the header bar is a global setting and cannot be adjusted for individual projects.
</div>

### URL

The header bar functions as a clickable link. The URL entered here will serve as the target link to any user who clicks on the header bar. Like the Header Bar Text, input here can be overriden on a project's [General settings](/docs/projects/customizing/general.html#header-bar) page.

### Press Bar Display Mode

- **Disabled**. When set to `Disabled` the header bar will not display—*even if* a user fills in the [header bar fields](/docs/projects/customizing/general.html#header-bar) for an individual project or sets one up to appear in [standalone mode](/docs/projects/customizing/general.html#standalone).
- **Always Visible**. If toggled to `Always Visible`, so long as the text and URL have been provided, the header bar will display on all Manifold pages (excepting those within the reader), regardless of whether or not those pages are associated with a standalone project. If users have enabled [standalone mode](/docs/projects/customizing/general.html#standalone) and the [header bar](/docs/projects/customizing/general.html#header-bar) for individual projects, those settings will override the text and URL entered here in the Theme settings.
- **Only Visible in Standalone Mode**. To set the header bar to only appear on those pages associated with projects that are enabled for [standalone mode](/docs/projects/customizing/general.html#standalone), select `Only Visible in Standalone Mode`.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
The header won't display unless text and a URL are provided. However, if the header bar is enabled to be visible in standalone mode and a user has input text and a URL for those projects individually in their <a href="/docs/projects/customizing/general.html">General settings</a>, the header bar will appear, even if that information has not been filled in here in the Theme settings.
</div>