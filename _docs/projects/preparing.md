---
layout: page
title: Preparing Texts
menus:
  projects:
    weight: 2
---

Once you have [created a project](/docs/projects/creating.html), you may ingest any number of prepared texts by way of the available ingestion strategies noted here:

## Strategies

An ingestion strategy is simply Manifold speak referring to the file formats the system is set up to process into the reader. At present Manifold accepts these four strategies, and we are exploring the possibility of adding others (e.g., LaTeX).

### EPUB

Both EPUB2 and EPUB3 formats are viable on Manifold. For best results, make sure they [validate](http://validator.idpf.org/) with no errors before uploading them.

If you are creating your EPUB file from a program like InDesign, be sure to avoid exporting to a fixed-format layout: those contain very specialized formatting that will prevent your file from ingesting correctly.

### Google Docs

Manifold can ingest any Google Doc that is publicly available or if its permissions are set so that anyone with the link can edit it.

Structure, rendering, tables, and figures that are part of the document will all transfer to Manifold in a way that is consistent with the source material, with the exceptions of columns and page breaks, which do not. Also of note, footnotes in a Google Doc come into Manifold as endnotes.

Google Docs cannot be grouped together to form one text in Manifold. For each Google Doc you have you will need to create a new text in Manifold.

### Markdown

If you've composed your materials in Markdown, you'll need to zip your files into a collection with `book.json` in the root directory in order for them to be successfully parsed by the system:

![Markdown Directory](/docs/assets/projects/markdown-directory.png)

Following is an example of what the content of the `book.json` file might look like:

```
{
  "author": "H. G. Wells",
  "title": "War of the Worlds",
  "description": "",
  "isbn": "0000000000000",
  "language": "en",
  "manifold": {
    "date": "Thursday, 30 November 2017",
    "rights": "All Text is in the Public Domain"
  }
}
```
<br/>
If you'd like the text to have internal navigation by way of the `Contents` dropdown in the reader, include a file titled `SUMMARY.md` and structure it like this:

```
# Summary
## Contents
* [1. The Eve of The War](wow-ch01.md)
* [2. The Falling Star](wow-ch02.md)
* [3. On Horsell Common](wow-ch03.md)
```
<br/>
Note that nested contents are acceptable.

It is also acceptable to include a CSS file to describe how different structures should render.

### HTML

To ingest materials composed in HTML, create a zip archive with an .htm or .html file in the root directory. It is also acceptable to include in the archive a CSS file to describe how different structures should render.

Like Google Docs, HTML files cannot be grouped together to form one text. For each HTML file you have you will have to create a new text in Manifold. 

## Related Themes

Following are related themes that link to other pertinent sections concerning how you work with texts in the system:

* [Setting a Project to Draft Mode](customizing/general.html)
* [Adding a Text to a Project](customizing/texts.html)
* [Setting Published Texts](customizing/texts.html)
* [Grouping Texts Within a Project](customizing/texts.html)
* [Reingesting a Text](customizing/texts.html)
* [Writing for the Web](/docs/writing/writing.html)
