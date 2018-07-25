---
layout: page
title: Preparing Texts
menus:
  projects:
    weight: 2
---

Once you have [created a project](/docs/projects/creating.html), you may add any number of prepared texts into it. Manifold supports all of the following file types for text ingestion:

``` shell
EPUB (.epub)
Markdown (.md)
HTML (.htm or .html)
Google Doc (url)
Word (.docx)
LaTeX (.tex or .latex)
```

Manifold can create a new text from a single file or from a collection of files of the same or different type, which is discussed in detail below in the [Strategies section](#strategies).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
This section speaks broadly to preparing different document types for ingestion into Manifold. For best practices on authoring in the various formats with attention paid to individual elements common to scholarly writing, consults the <a href="/docs/writing/writing/html">Writing for the Web section</a>. For a walk-through on ingesting material into Manifold as a text, see the <a href="/docs/projects/customizing/texts.html">Customizing section</a>.
</div>

## Formats

<a name="epub"></a>
### EPUB

Both EPUB2 and EPUB3 formats are viable on Manifold. For best results, make sure your EPUB file [validates](http://validator.idpf.org/) with no errors before loading it to the system.

If you are creating your EPUB file from a program like InDesign, avoid exporting it as a fixed-layout document (FXL): fixed-layout EPUBs are structured very specifically to mirror a printed work, and the format of the underlying coding will prevent your file from ingesting correctly on Manifold.

For more about the EPUB spec, please refer to the standard as defined on the [IDPF website](http://idpf.org/epub/31).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
It is not possible to include an EPUB document as part of a <a href="/docs/projects/preparing.html#manifest">Manifest upload</a>.
</div>

<a name="gdoc"></a>
### Google Doc

Manifold can ingest any Google Doc that is publicly available or that has its permissions set so that anyone with the link can view it.

Structure, rendering (including indentation), tables, and figures that are part of the document will all transfer to Manifold in a way that is consistent with the source material, with the exceptions of columns, custom fonts, page breaks, and bullet points, which do not. Also of note, footnotes in a Google Doc come into Manifold as endnotes.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
A Manifold instance must first be set up to <a href="/docs/customizing/settings/external_services/google/drive.html">integrate with Google Services</a> before it can ingest Google Docs.
</div>

<a name="md"></a>
### Markdown

Manifold supports both the [basic](https://www.markdownguide.org/basic-syntax) and [extended](https://www.markdownguide.org/extended-syntax) Markdown syntax as described on Matt Cone's [*Markdown Guide*](https://www.markdownguide.org/).

Markdown files for Manifold are made up of a header (containing metadata elements), an optional reference to a stylesheet, and the text of the document.

When uploading only a single Markdown document, the header can contain all of the metadata elements noted in the [Document Metadata section](#meta) below. When part of a manifest upload, the only element that should be present in the document header is the title; the rest can be described in the manifest [YAML file](#yml).

#### Header

A Markdown header is created by enclosing the document's [metadata elements](#meta) with three dashes (or hyphens) on the lines above and below the data:

##### Single Document Upload

``` yml
---
title: title
date: "2016-01-15"
language: language
rights: rights
description: description
creator: Rowan Ono
contributor: Ida Davis
---
```

##### Manifest Upload

``` yml
---
title: title
---
```

#### Style

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

#### External Resources

<a name="html"></a>
### HTML

HTML is the *lingua franca* of Manifold. The platform can accept all well-formed HTML that doesn't invoke scripts. Both run-in and external stylesheets are accepted, but note that the platform will reject any element within a stylesheet that conflicts with the system's ability to render content responsively.

#### Head

If submitting a single HTML file for ingestion, authors can include within the `<head>` tags all the [Document Metadata](#meta) elements described below, as shown in the first example here. When including an HTML document as part of a manifest ingestion, no document metadata is required within the file, though the title metadata (`<meta name="dc.title" content="title">`) is suggested. The rest can be described in the manifest [YAML file](#yml).

##### Single Document Upload
``` html
<!DOCTYPE html>
<html>
<head>
    <title>Title of the Text Section</title>
    <meta charset="UTF-8">

<!-- This is how the Metadata Elements are structured in HTML.
Authors need only adjust what appears within the quote marks
following the content attribute.-->
    <meta name="dc.date" content="2016-01-15">
    <meta name="dc.title" content="title">
    <meta name="dc.language" content="language">
    <meta name="dc.rights" content="rights">
    <meta name="dc.description" content="description">
    <meta name="dc.creator" content="Rowan Ono">
    <meta name="dc.contributor" content="Ida Davis">

<!-- You can define a stylesheet in the head of the document,
as shown here. -->
    <style type="text/css">
        .some-class {
            font-weight: bold;
        }
    </style>

<!-- Or, alternatively or in addition to, you can link to an
external stylesheet that's compressed (or zipped) along with
your document using the following kind of reference. -->
    <link rel="stylesheet" type="text/css" href="html_styles.css"/>
</head>

<body>
    <p>Some text.</p>
</body>
</html>
```

##### Manifest Upload

``` html
<!DOCTYPE html>
<html>
<head>
    <title>Title of the Text Section</title>
    <meta charset="UTF-8">
    <meta name="dc.title" content="title">
    <link rel="stylesheet" type="text/css" href="html_styles.css"/>
</head>
<body>
    <p>Some text.</p>
</body>
</html>
```

#### External Resources

Authors can embed media assets, such as images, audio, and video into their content, referencing them in keeping with standard practice:

##### Images

##### Audio

##### Video

<a name="docx"></a>
### Word

<a name="tex"></a>
### LaTeX

<a name="meta"></a>
## Document Metadata

``` yml
title: title
date: "2016-01-15"
language: language
rights: rights
description: description
creator: Rowan Ono
contributor: Ida Davis
```

There can be multiple creators and contributors. The system will automatically attempt to match existing records of the same name. If none is found, then the system will create a new record.

<a name="strategies"></a>
## Strategies

There are two means to add a new text into Manifold: where a text is created from a single document and where a single text is created from a collection of different documents. These are, respectively the Document and Manifest ingestion strategies.

<a name="document"></a>
### Document

The document ingestion strategy allows a user to create a new text in Manifold from a single document source.

![Document Strategy](/docs/assets/projects/strategy-doc.png)



Unstructured

![Unstructured Document](/docs/assets/projects/unstructured.png)

<a name="manifest"></a>
### Manifest

A Manifest upload can be composed of a collection of one file type or a mixture of them, excluding EPUBs. Thus, it is possible to create a single text from a Google Doc, Markdown file, and HTML file: three different files and sources combined to form one whole.

![Manifest Strategy](/docs/assets/projects/strategy-manifest.png)

<a name="yml"></a>
#### YAML File

It has to be titled `manifest.yml`.

If the title field includes any characters that are not letters, enclose it within single quotes as shown in the second example below.

```yml
title: This is a Simple Title
title: 'Chapter 1: Subtitle'
```

```yml
meta:
  title: A Manifest Ingestion
  language: language
  rights: rights
  description: description
  creators:
    - name: Rowan Ono
  contributors:
    - name: Ida Davis
toc:
  - label: Title Set From TOC
    source_path: section_1.html
    start_section: true
    children:
      - label: Section 1.1
        source_path: section_1_1.html
        children:
          - label: Section 1.1a
            source_path: section_1_1a.md
```

## Related Themes

Following are related themes that link to other pertinent sections concerning how you work with texts in the system:

* [Setting a Project to Draft Mode](customizing/general.html)
* [Adding a Text to a Project](customizing/texts.html)
* [Setting Published Texts](customizing/texts.html)
* [Grouping Texts Within a Project](customizing/texts.html)
* [Reingesting a Text](customizing/texts.html)
* [Writing for the Web](/docs/writing/writing.html)
