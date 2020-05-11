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

### Header Foreground Color

If a value is entered here, it will override the value of the accent color for links contained within the Manifold header.

### Header Foreground Active Color

The color value entered has two purposes: it indicates what page a reader is presently viewing (e.g., Home, Projects, Following), and it also serves as the hover color for links to pages in the Manifold header.

### Header Background Color

By default the Manifold header background is white. By entering a color value here, a publisher can further bring their instance in line with their branding expectations.

<figure>
  <img src="/docs/assets/customizing/libraryHeader.png" alt="Library Header Color Elements">
  <figcaption>Here we see the Manifold header with the following values: <code>Accent Color</code>, Yellow; <code>Header Foreground Color</code>, White; <code>Header Foreground Active Color</code>, Red; and <code>Header Background Color</code>, Black.</figcaption>
</figure>

## Typography

### Typekit ID

Manifold was designed to employ two TypeKit fonts throughout the app: `Freight Text Pro` and `Sofia Pro`.

![Typekit Settings](/docs/assets/customizing/typekit.png)

If you have a valid Typekit account, select the following settings from your Typekit dashboard and then save your Typekit ID to Manifold. Once done, these two fonts will load for your readers.

<table>
<caption style="text-align:left; font-size:120%;">Freight Text Pro</caption>
  <thead>
  <tr>
  <td style="font-weight:bold">Font Selection</td>
  <td style="font-weight:bold">Character Set</td>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>Light</td>
      <td>Default</td>
    </tr>
    <tr>
      <td>Book</td>
      <td>OpenType Features</td>
    </tr>
    <tr>
      <td>Book Italic</td>
      <td></td>
    </tr>
  </tbody>
</table>

<table>
<caption style="text-align:left; font-size:120%;">Sofia Pro</caption>
  <thead>
  <tr>
  <td style="font-weight:bold">Font Selection</td>
  <td style="font-weight:bold">Character Set</td>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>Light</td>
      <td>Default</td>
    </tr>
    <tr>
      <td>Regular</td>
      <td>OpenType Features</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td></td>
    </tr>
    <tr>
      <td>Semi Bold</td>
      <td></td>
    </tr>
    <tr>
      <td>Bold</td>
      <td></td>
    </tr>
  </tbody>
</table>

In Typekit, you have the option under the `Character Set` heading to choose `All Characters` instead of `Default`. Selecting `All Characters` will make available to Manifold the full range of a diacritical characters possible for each font, thus more specialized characters will render in Manifold without relying on fallbacks. This will cause pages to load more slowly page, but the effect will likely be negligible in most cases.

If you do not have a Typekit account, Manifold will defer to two sets of open-license alternatives that are included at installation: `Trueno` and `Aleo`.

<a name="instance-header"></a>

## Top Bar

![Top Bar Menu](/docs/assets/customizing/top-bar.png)

The top bar is a thin, customizable branding element that serves as a means to contextualize a Manifold page for readers in relation to a larger mission. It can be configured to appear atop all Manifold pages outside of the reader, set to specifically target only those projects that are enabled for [standalone mode](/docs/projects/customizing/general.html#standalone), or configured on a project-by-project basis..

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. The top bar can be deployed in addition to the standard header; it does not <em>only</em> need to be used in conjunction with projects in standalone mode.
</div>

### Text

Text entered here appears in the top bar globally across the instance, but it can be superseded on individual projects if so configured in a project's [General settings](/docs/projects/customizing/general.html#top-bar).

![Top Bar Text](/docs/assets/projects/top-bar-text.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. This field is <em>not</em> Markdown enabled and only accepts one line of text.
</div>

### Color

The color of the top bar is customizable. To define the color of the top bar for your Manifold instance, enter an HTML color hex value—including the hash symbol (#)—in this field (e.g., `#2980B9`).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. The color of the top bar is a global setting and cannot be adjusted for individual projects.
</div>

### URL

The top bar functions as a clickable link. The URL entered here will serve as the target link to any user who clicks on the top bar. Like the Top Bar Text, input here can be overriden on a project's [General settings](/docs/projects/customizing/general.html#top-bar) page.

### Top Bar Display Mode

- **Disabled**. When set to `Disabled` the top bar will not display—*unless* a user fills in the [top bar fields](/docs/projects/customizing/general.html#top-bar) for an individual project.
- **Always Visible**. If toggled to `Always Visible`, so long as the text and URL have been provided, the top bar will display on all Manifold pages (excepting those within the reader). If users have enabled [project-specific top-bar attributes](/docs/projects/customizing/general.html#top-bar), those settings will override the text and URL entered here.
- **Only Visible in Standalone Mode**. To set the top bar to appear on projects that are enabled for [standalone mode](/docs/projects/customizing/general.html#standalone), select `Only Visible in Standalone Mode`. Project-level overrides are still possible with this setting selected.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note </strong>. The header won't display unless text and a URL are provided.
</div>