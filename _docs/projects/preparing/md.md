---
layout: page
title: Markdown
menus:
  preparing-texts:
    weight: 3
---

Manifold supports both the [basic](https://www.markdownguide.org/basic-syntax) and [extended](https://www.markdownguide.org/extended-syntax) Markdown syntax as described on Matt Cone's [*Markdown Guide*](https://www.markdownguide.org/).

Markdown files for Manifold are made up of a header (containing metadata elements), an optional reference to a stylesheet, and the text of the document.

When uploading only a single Markdown document, the header can contain all of the metadata elements noted in the [Document Metadata section](/docs/projects/preparing/index.html#meta). When part of a manifest upload, users need only supply the title element in the document header, relying on the rest to come from the manifest [YAML file](/docs/projects/preparing/index.html#yml). However, if it is appropriate to include all of the metadata elements in an individual Markdown text, the system will scope those elements to the individual text as expected.

<a name="md-header"></a>
## Header

A Markdown header is created by enclosing the document's [metadata elements](index.html#meta) with three dashes (or hyphens) on the lines above and below the data:

<a name="md-sdu"></a>
### Single Document Upload

``` yml
---
title: title
date: "2016-01-15"
language: language
rights: rights
description: description
creator: Rowan Ono
creator: Danielle Idra
contributor: Ida Davis
---
```

<a name="md-mu"></a>
### Manifest Upload

``` yml
---
title: title
---
```

<a name="md-style"></a>
## Style

If you would like to associate a stylesheet with your Markdown file, you can include a link to it after the header, as shown in the example here.

``` md
---
title: Section 1.1a
---
<link rel="stylesheet" type="text/css" media="all" href="markdown_styles.css" />

Some text.
```

The stylesheet should be formatted and saved as a .css and compressed (or zipped) along with the Markdown.

![Markdown Directory](/docs/assets/projects/md-dir.png)

You can also add a stylesheet after upload, in lieu of or in addition to any stylesheet you include here. See the [Texts section](/docs/projects/customizing/texts.html#mod-styles) for details on how to add stylesheets to already ingested texts.

<a name="md-headings"></a>
## Text Headings

When only uploading an individual Markdown text, headings should be formatted in accordance with the standard:

```md
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

The Manifold reader will render the first four levels of headings in the Contents dropdown accordingly:

![Markdown Text Headings](/docs/assets/projects/md-headings.png)

Markdown files uploaded as part of a [Manifest](/docs/projects/preparing/index.html#manifest) can retain the same formatting if there is no need to include specific text section headings in the Contents dropdown. For example, a user is uploading three Markdown files in a Manifest, each corresponding to a different journal article. Using the standard heading format the user would only be able to call out on the dropdown the names of the three texts. And while those texts could be nested, individual sections within them would not be available as navigable items in the Contents dropdown because the system has no means to identify them.

Thus, if a project requires individual headings within the text sections to appear in the dropdown, the standard Markdown formatting for headings should be adjusted to match those suggested for HTML. (Since Markdown compiles as HTML, users can always swap HTML into their Markdown files.) This will allow a user to include an `id` attribute for each heading that Manifold can recognize and render.

See the [preparing HTML section](/docs/projects/preparing/html.html#html-headings) for detailed instructions on how to format headings and adjust the YAML file so the coded headings can appear in the Contents dropdown.

<a name="md-ext"></a>
## External Resources

Authors can embed media assets, such as images, audio, and video into their content, referencing them in keeping with standard practice:

<a name="md-img"></a>
### Images

Call-outs to images in the code can be formatted like this:

``` md
Some text.

![Image Alt-Text](godzilla.jpg)

Some more text.
```

The directory that would be compressed for upload would include the Markdown file, image file, and any associated stylesheet.

![Markdown Image Asset](/docs/assets/projects/md-image.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. When creating a zip archive to upload into Manifold, it is better to individually select all of the files and then compress them than to simply select an entire folder on which to run the compression. The latter method can result in corrupted pathways that may cause ingestion errors.
</div>

<a name="md-av"></a>
### Audio, Video, and iFrames

Markdown does not have specific syntax to embed audio, video, or iFrame content, but given it's relationship to HTML, author's can inject HTML code into a Markdown document and get the expected results. As such, by using the same coding as described in the HTML section below, authors can include in their Markdown files [audio](/docs/projects/preparing/html.html#html-audio), [video](/docs/projects/preparing/html.html#html-video), and [iFrames](/docs/projects/preparing/html.html#html-iframe), respectively.
