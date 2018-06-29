---
layout: page
title: Contents
menus:
  customizing:
    title: Contents
    weight: 1
---

The `Contents` menu is composed of two sections, `Pages` and `Features`, that allow you to control the look of the header section on the homepage and create custom pages, which you can use to relate the nature, history, or policies that inform your instance.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
Only those with Administrator, Editor, or Marketeer credentials are able to access this menu in the backend. For more on the roles available in Manifold, see the <a href="/docs/projects/accounts/index.html">Accounts section</a>.
</div>

![Pages](/docs/assets/customizing/pages1.png)

<a name="pages"></a>
## Pages

Pages can be used to offer content related to your Manifold installation. For example, you might create an “About” page in the header. Or, you could setup links to a privacy policy or terms of service in the footer.

From the `Pages` sidebar menu you have only one option: `Add a New Page`. When you choose to create a page, you will have to provide a name for the page in the `Page Title` field. You can also customize the page's slug. If you do not provide a slug, the system will automatically create one on your behalf.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
For more on URL slugs, see the <a href="/docs/projects/customizing/general.html">Customizing section</a>.
</div>

Once you have input this information and clicked `Save Page`, you will land on the page's `General` settings, with options to manage visibility of your page and choose, by way of slider dials, whether you would like a link to the page to appear in the navigation bars in the header, footer, or to hide the link to the page entirely. You can also adjust the page's title, slug, and navigation title. For instance, you might title your page `About`, but the navigation title might read `About Us`.

![Pages](/docs/assets/customizing/page_general.png)

The `Body` sidebar menu opens a field where you can input the content of your page. This field allows content to be formatted in accordance with [GitHub-flavored Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/).

When adding a page, you will see menu options to `Preview` or `Delete` the page in question. If you select `Delete`, the system will be prompt you to confirm before it is deleted.

<a name="features"></a>
## Features

The `Features` sections provides controls to customize the featured content area at the top of the home page.

![Featured Content](/docs/assets/customizing/featured-content.png)

From the main Features page you can edit existing features (the Welcome to Manifold default feature is included with all new installs) or add news ones. To edit an existing feature, click on its name or the `Edit` button to the right, and by clicking the `Add Features` button, you can create new featured content elements.

The various fields available to new and existing features are described in detail here. Note that all display text fields are enabled for Markdown formatting.

### Feature Preview

The Feature Preview isn't an editable field. Instead it allows users to get a sense of how the settings they input in the following will render. Elements concerning the Foreground, Background, and Markdown syntax will not appear in the preview until the feature is saved.

### Header

The Header serves text with the most prominence. It could be used to name your institution or instance or as a means to provide a brief welcome.

### Subheader

If your instance had a subtitle or if you wanted to extend the context of the welcome from the header, this field will display the text on a slightly smaller scale from the Header.

### Body

The Body text allows publishers a means to describe their instance and projects in a bit more detail. We recommend limiting this field to a moderately sized paragraph (roughly sixty-five words), though the area will expand vertically to accommodate all of the copy entered here. If more than a brief paragraph is required to orient your readers, consider adding an [About page](#pages) and using the Link Text and Link URL fields below to point readers to it.

### Link Text

If you want to include a link below the body text to another page, this field describes the text that readers will click on. If there is no URL provided in the `Link URL` field, this text will not appear.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
Note that the system is only setup to allow for one custom link below the body text. If a user is not signed in, there will be a <strong>Sign Up</strong> link allowing them to join your instance.
</div>

### Link URL

This field pairs with the `Link Text` above. Here you can enter the complete URL for the page to which you want to direct readers. The page can exist outside of Manifold or be one created on the site through the [Pages menu](#pages).

### Style

The Style dropdown allows used to choose from two existing Feature themes. The default theme, Dark Background, serves the header and link text in white against a Manifold green background. The Light Background option reverses that, with header and link text in Manifold green against a white background. With both themes the body text appears in black. You can customize the color scheme more specifically with the following fields: `Background Color`, `Foreground Color`, and `Header Color`.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
This dropdown is the only way to control the color of the link text, which can either be white or Manifold green.
</div>

### Background Color

Entering a value in this field will change the feature's background color. Doing so will override the predefined color associated with the value selected in the `Style` dropdown. For details on the color values available to this field, see the [Formatting section](#formatting) below.

If a background image is loaded, the value in this field will be overridden by the image.

### Foreground Color

This field controls the color of the feature's body text. If a value is entered here, it will override the predefined color associated with the value selected in the `Style` dropdown. For details on the color values available to this field, see the [Formatting section](#formatting) below.

### Header Color

This field controls the color of the feature's header text. If a value is entered here, it will override the predefined color associated with the value selected in the `Style` dropdown. For details on the color values available to this field, see the [Formatting section](#formatting) below.

<a name="formatting"></a>
#### Formatting Color Values

The `Background Color`, `Foreground Color`, and `Header Color` fields accept standard HTML color names, as well as values in RGB, HEX, HSL, RGBA, and HSLA. For more on the names and values, see the [HTML Color page on the w3schools.com website](https://www.w3schools.com/html/html_colors.asp).

When input, values should be formatted as follows, replacing zeroes with figures associated with the color you are intending:

| Value | Format               |
|:-----:|:---------------------|
| RGB   | rgb(0, 0, 0)         |
| HEX   | #000000              |
| HSL   | hsl(0, 0%, 0%)       |
| RGBA  | rgba(0, 0, 0, 0.0)   |
| HSLA  | hsla(0, 0%, 0%, 0.0) |

For HEX values, users must include the hash symbol (#) in order for the system to properly interpret the value you have entered. Spaces are optional between numerical and percentage values for HSL, RGBA, and HSLA; commas are required.

### Background Image

This field allows users to replace the background color with an image appropriate to their instance. Files can be uploaded in the GIF, JPEG, JPG, PNG, or SVG formats and should be sized so the vertical is 600 px and the horizontal is no less than 2400 px wide: the area, which is anchored on the left, will expand to fill a user’s screen, so an image that can grow pretty wide to support larger screens would be ideal. A pattern that can repeat would serve well in this spot.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
The background area will grow (or shrink) vertically to accommodate the text entered in the Body field. The suggestions offered here are in keeping with body text that is roughly sixty-five words.
</div>

### Foreground Image

This field allows publishers to overlay the background with an image suited to their instance. Files can be uploaded in the GIF, JPEG, JPG, PNG, or SVG formats.

We offer no hard and fast guideline on size, as use and aesthetic will vary from publisher to publisher. We do suggest starting with an image between 200–400 px tall for a header in keeping with the sizes suggested elsewhere in this section.

### Foreground Image Top Position

By default the foreground image is aligned vertically with the top of the header text. A null value entered into the field will move the image so that its top aligns with the top of the background banner, with values increasing from zero moving it further down the page.

See the [Positioning Foreground Image Values](#positioning) section below for the kinds of input this field allows.

### Foreground Image Left Position

By default the foreground image is aligned horizontally just to the right of the body text. Entering positive values into this field will move the image further to the right; negative values will pull it toward (and eventually over) the body text.

See the [Positioning Foreground Image Values](#positioning) section below for the kinds of input this field allows.

<a name="positioning"></a>
#### Positioning Foreground Image Values

Values can be entered into the Foreground Image Top and Left Position fields as CSS units, in both absolute or relative lengths. All units are accepted, save for the % unit. For more on CSS Units, see the [w3schools.com website](https://www.w3schools.com/html/html_colors.asp).

### Foreground Position Mode

This dropdown allows users to change where the positioning values entered above will be enacted from. If the default, `Relative`, is selected, the image will be adjusted from a starting point just to the right of the body text and below the top of the background. If `Absolute` is chosen, the image will be moved relative to the top left corner of the screen.
