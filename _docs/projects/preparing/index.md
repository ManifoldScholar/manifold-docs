---
layout: page
title: Preparing Texts
menus:
  projects:
    identifier: preparing-texts
    weight: 2
---

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
This section speaks broadly to preparing different document types for ingestion into Manifold. For best practices on authoring in the various formats with attention paid to individual elements common to scholarly writing, consults the <a href="/docs/writing/writing/html">Writing for the Web section</a>. For a walk-through on ingesting material into Manifold as a text, see the <a href="/docs/projects/customizing/texts.html">Customizing section</a>.
</div>

<a name="formats"></a>
## Formats

Once you have [created a project](/docs/projects/creating.html), you may add any number of prepared texts into it. Manifold supports all of the following file types for text ingestion. Click on a type below for preparation suggestions specific to that format.

| Type                    | Extension      |
|-------------------------|----------------|
| [EPUB](epub.html)       | .epub          |
| [Markdown](md.html)     | .md            |
| [HTML](html.html)       | .htm or .html  |
| [Google Doc](gdoc.html) | url            |
| [Word](docx.html)       | .docx          |
| [LaTeX](tex.html)       | .tex or .latex |

<a name="strategies"></a>
## Strategies

There are two means to add a new text into Manifold: where a text is created from a single document and where a single text is created from a collection of different documents. These are, respectively, the Document and Manifest ingestion strategies.

<a name="document"></a>
### Document

The document ingestion strategy allows a user to create a new text in Manifold from a single document source.

![Document Strategy](/docs/assets/projects/strategy-doc.png)

When using this method, the resulting Manifold text will have an empty Contents dropdown. It is not presently possibly to create a table of contents that references specific sections of a single document.

![Unstructured Document](/docs/assets/projects/unstructured.png)

<a name="manifest"></a>
### Manifest

A Manifest upload can be composed of a collection of one file type or a mixture of them, excepting EPUBs. Thus, it is possible to create a single Manifold text from one or more Google Docs, Markdown files, and HTML files: three different file types and sources combined to form one whole.

![Manifest Strategy](/docs/assets/projects/strategy-manifest.png)

When the various source documents have been prepared [according to the requirements of their format](#formats), users should compress (or zip) all of the documents—**along with the required YAML file described below**—into a single archive, which can then be uploaded into Manifold.

<a name="yml"></a>
## YAML File

In order for Manifold to properly ingest multiple source documents at once, the system requires a YAML file to be included along with any source documents in the compressed archive that will be loaded into the system.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
In cases where there are no source documents to upload (e.g., if you are creating a text from multiple Google Docs) then only the YAML file needs to be loaded. When uploaded alone, the YAML file does not need to be compressed or zipped.
</div>

The YAML file is a means for users to tell the system how to organize the materials that are being ingested into the system and how they relate to one another.

If any of the fields require characters that are not letters, excepting `source_path`, enclose your input within single quotes as shown in the example below.

When creating or modifying a YAML file, be sure to use a plain text editor like Notepad (PC), Text Edit (Mac), Sublime Text ([download](https://www.sublimetext.com/)), or Atom.io ([download](https://atom.io/)).

Indentations matter in YAML, so prepare your file carefully, using two spaces for each indent. The example below can be copied and pasted for easy modification.

```yml
meta:
  title: 'Title for the Text: As a Whole'
  language: en
  rights: 'This text is licensed under a CC BY-NC-ND 4.0 license.'
  description: 'This text considers a, b, and c.'
  creators:
    - name: Rowan Ono
    - name: Max Duo
  contributors:
    - name: Ida Davis
    - name: Danielle Idra
toc:
  - label: Title of First Section
    source_path: chap_1.html
    start_section: true
    children:
      - label: Title of Second Section
        source_path: chapt_1a.md
        children:
          - label: Title of Next Section
            source_path: https://docs.google.com/document/d/1bTY_5mtv0nIGUOLxvltqmwsrruqgVNgNoT2XJv1m5JQ/edit
  - label: Title of Another Section
    source_path: chapt_2.html
  - label: Title of One More Section
    source_path: chapt_3.md
```

<a name="yml-meta"></a>
### Meta Block

- The meta block allows users to describe the text that is being created as a whole.
- Authors (creators) and contributors cannot be assigned to specific sections within the text being created; instead
include all authors and contributors in the meta block.
- Other than creators and contributors, fields can only have one input, as shown here.
- The language abbreviation comes from the [ISO 639-1 standard](https://www.w3schools.com/tags/ref_language_codes.asp).

<a name="yml-toc"></a>
### TOC Block

- The TOC block allows users to name, order, and locate the source files for the system.
- The input for the label field will appear in the Contents dropdown in the reader.
- The `source_path` tells Manifold where to find the file: in the compressed archive or from a remote host.
- The `start_section` describes what part of the text the Manifold reader will open to. The field can only be used once and can be associated with any section. Thus a user can have the reader open to chapter 1 instead of, say, a preface.
- The `children` tag allows users to nest content. This nesting will also be rendered as expected on the Contents dropdown. It is important that nested content be spaced in the file as shown above (with indents described by two spaces).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
In order to be properly processed by the system, the YAML file has to be titled <code>manifest.yml</code>.
</div>

<a name="meta"></a>
## Document Metadata

Each source document being uploaded to Manifold can include the following metadata. When ingesting single documents all of the metadata can be included in the upload. When ingesting through the Manifest strategy, the source document should only include title metadata, with the rest included in the YAML file.

- Title
- Date
- Language
- Rights
- Description
- Creator
- Contributor

There can be multiple creators (authors) and contributors for each upload. The system will automatically attempt to match existing records of the same name. If none is found, then the system will create a new record.

<a name="related"></a>
## Related Themes

Following are related themes that link to other pertinent sections concerning how you work with texts in the system:

* [Setting a Project to Draft Mode](customizing/general.html)
* [Adding a Text to a Project](customizing/texts.html)
* [Setting Published Texts](customizing/texts.html)
* [Grouping Texts Within a Project](customizing/texts.html)
* [Reingesting a Text](customizing/texts.html)
* [Writing for the Web](/docs/writing/writing.html)
