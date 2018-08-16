---
layout: page
title: Markdown
menus:
  preparing-texts:
    weight: 3
---

Manifold supports both the [basic](https://www.markdownguide.org/basic-syntax) and [extended](https://www.markdownguide.org/extended-syntax) Markdown syntax as described on Matt Cone's [*Markdown Guide*](https://www.markdownguide.org/).

Markdown files for Manifold are made up of a header (containing metadata elements), an optional reference to a stylesheet, and the text of the document.

When uploading only a single Markdown document, the header can contain all of the metadata elements noted in the [Document Metadata section](index.html#meta). When part of a manifest upload, the only element that should be present in the document header is the title; the rest can be described in the manifest [YAML file](index.html#yml).

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

<a name="md-av"></a>
### Audio and Video

Markdown does not have specific syntax to embed audio or video content, but given it's relationship to HTML, author's can inject HTML code into a Markdown document and get the expected results. As such, by using the same coding as described in the HTML section below, authors can add [audio](html.html#html-audio) and [video](html.html#html-video), respectively.
