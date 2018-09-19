---
layout: page
title: Preparing Resources
menus:
  projects:
    weight: 3
---

Resources are supplementary materials that support and contextualize a project's base text, extending the scope and focus of an author's work with formats not feasible in print. Resources can annotate specific passages of text; function as objects of inquiry, discussion, or exploration unto themselves; or be curated into collections with other resources as best suits the needs of the project.

There are ten resource kinds, described in detail here, that can be employed on the Manifold platform. This section is meant to serve as a primer on how to prepare your resources for Manifold. Discussion of how to add resources to a project is provided in the [Customizing Projects section](customizing/resources.html). For instructions on how to curate resources into collections, see the [Collections section](/docs/projects/customizing/collections.html). And to learn how to place resources onto texts, see the [Reading Interface section](/docs/reading/placing.html).

Four of these resource kinds—Image, Video, Audio, and Interactive—have associated file variants. File variants are alternative means to serve or showcase a primary resource. There are four file variant types: high resolution image, file, poster image, and thumbnail:

*   **High Resolution Image**: Images on the web generally have a resolution of 72 DPI. If your material requires greater scrutiny than that resolution can provide, this variant allows a user to provide an alternative suited to that purpose. Suggested resolution would be 300 DPI or higher for general images and 1200 DPI or greater for line art.
*   **File Types**: For video and audio resources, file type variants provide a means to serve readers two alternative file types for your resource beside the primary version. Thus a video could be uploaded as an MP4 but also have an MOV and AVI available for download.
*   **Poster Image**: When a resource is included in a slideshow, the poster image serves as a static representation of the content. Poster images should be prepared in a 16:9 ratio.
*   **Thumbnails**: When a resource is shown in a library of other resources, the thumbnail serves as a static representation of the content to distinguish it from other like kinds. Thumbnails should be prepared in a 1:1 ratio.

## Resource Kinds

### Image

Images are any static visual elements that are not tables. Photographs, paintings, drawings, diagrams, maps, graphs, charts, musical examples are all considered images.

*	**Formats**: GIF, JPEG, JPG, PNG, SVG
*	**Size**: Please consult your publisher about any files that exceed 200 MB.
*   **Variants**: High Resolution Image, Thumbnail
*	**Suggested Metadata**: Title, Caption, Description, Alt-text, Copyright, Rights Holder, Rights Territory, Restrictions

### Video

Video files can be uploaded into the native Manifold video player in MP4 and WEBM formats. Video can also be sourced for direct play through two external hosts: YouTube and Vimeo. Video files saved in different formats can be uploaded onto Manifold, but they won't be playable onsite; instead readers can download those files for play on their local devices.

*	**Playable Formats**: MP4, WEBM
*	**Streaming Formats**: YouTube, Vimeo
*	**Upload Formats**: MP4, WEBM, FLV, WMV, MOV, AVI
*	**Size**: Please consult your publisher about any files that exceed 200 MB.
*   **Variants**: File type 1, File type 2, thumbnail
*	**Suggested Metadata**: Title, Caption, Description, Alt-text, Copyright, Rights Holder, Rights Territory, Restrictions

### Audio

Audio files can be uploaded into the native Manifold audio player in the MP3, FLAC, and WAV formats. Audio files saved in different formats can be uploaded onto Manifold, but they won't be playable onsite; instead readers can download those files for play on their local devices.

*	**Playable Formats**: MP3, FLAC, WAV
*	**Upload Formats**: MP3, FLAC, WMA, WAV, MID, OGG
*	**Size**: Please consult your publisher about any files that exceed 200 MB.
*   **Variants**: File type 1, File type 2
*	**Suggested Metadata**: Title, Caption, Description, Alt-text, Copyright, Rights Holder, Rights Territory, Restrictions

### File

Files can be of any type and are intended to deliver downloadable content to readers that does not fit any of the other Resource types described here. Zip archives and apps are examples of how this resource might be employed.

*	**Formats**: Unrestricted
*	**Size**: Please consult your publisher about any files that exceed 200 MB.
*	**Suggested Metadata**: Title, Consult Resource types that are most alike to the material in question.

### Link

Links provide a means to annotate a text with a URL and a description of that external site's content.

*	**Format**: URL
*	**Suggested Metadata**: Title, Caption, Description, Alt-text

### PDF

The PDF resource is an instance of the File Resource specific to PDFs. Files loaded as PDFs will appear with the first page of the document as a thumbnail in a project's Resource library and when annotating text.

*	**Format**: PDF
*	**Suggested Metadata**: Title, Caption, Description, Alt-text, Copyright, Rights Holder, Rights Territory, Restrictions

### Document

The Document resource is an instance of the File Resource specific to Microsoft Word and text documents. Files loaded as a Document will appear with the appropriate thumbnail in a project's Resource library and when annotating text.

*	**Formats**: DOC, DOCX, TXT
*	**Suggested Metadata**: Title, Caption, Description, Alt-text, Copyright, Rights Holder, Rights Territory, Restrictions

### Spreadsheet
The Spreadsheet resource is an instance of the File Resource specific to Microsoft Excel. Files loaded as a Spreadsheet will appear with the appropriate thumbnail in a project's Resource library and when annotating text.

*	**Formats**: XLS, XLSX
*	**Suggested Metadata**: Title, Caption, Description, Alt-text, Copyright, Rights Holder, Rights Territory, Restrictions

### Presentation

The Presentation resource is an instance of the File Resource specific to Microsoft PowerPoint. Files loaded as a Presentation will appear with the appropriate thumbnail in a project's Resource library and when annotating text.

*	**Formats**: PPT, PPTX
*	**Suggested Metadata**: Title, Caption, Description, Alt-text, Copyright, Rights Holder, Rights Territory, Restrictions

### Interactive

Interactive Resources allow readers a means to access and directly engage with web-based materials and apps in a dynamic way through iFrames. Examples include interactive maps, data visualizations, and data analysis tools (e.g., Gephi graphs, Shiny packages from R Studio).

*	**Format**: URL (with min. width and height for the wrapper)
*   **Variants**: Poster image, thumbnail
*	**Suggested Metadata**: Title, Caption, Description, Alt-text, Copyright, Rights Holder, Rights Territory, Restrictions

## Next Steps

At this point you have all you need to be able to [load your resource into Manifold](/docs/projects/customizing/resources.html). Once loaded, however, more options to describe your resource will become available. If you prefer to have all such metadata ready at the start, the following table describes all the resource fields and metadata associated with each resource kind, grouped according to the sidebar headings in `Resource` section of the backend project page.

<a name="resource-fields"></a>
### Resource Fields and Metadata

For detailed descriptions of these fields, please refer to the [Metadata](/docs/reference/metadata.html#descriptions) section.

| Sidebar   | Field                    | Image | Video             | Audio | File | Link | PDF | Document | Spreadsheet | Presentation | Interactive |
|-----------|--------------------------|:-----:|:-----------------:|:-----:|:----:|:----:|:---:|:--------:|:-----------:|:------------:|:-----------:|
| General   | Kind                     | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| General   | Title                    | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| General   | Fingerprint              | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| General   | Slug                     | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| General   | Tags                     | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| General   | Description              | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| General   | Caption                  | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| General   | Allow Download?          | x     | x<sup>a</sup>     | x     | x    | —    | x   | x        | x           | x            | —           |
| General   | Externally Linked Video? | —     | x                 | —     | —    | —    | —   | —        | —           | —            | —           |
| General   | Minimum Width            | —     | —                 | —     | —    | —    | —   | —        | —           | —            | x           |
| General   | Minimum Height           | —     | —                 | —     | —    | —    | —   | —        | —           | —            | x           |
| General   | Video ID                 | —     | x                 | —     | —    | —    | —   | —        | —           | —            | —           |
| General   | Link URL                 | —     | —                 | —     | —    | x    | —   | —        | —           | —            | —           |
| General   | iFrame URL               | —     | —                 | —     | —    | —    | —   | —        | —           | —            | x           |
| General   | External Video Type      | —     | x                 | —     | —    | —    | —   | —        | —           | —            | —           |
| General   | Image File               | x     | —                 | —     | —    | —    | —   | —        | —           | —            | —           |
| General   | Video File               | —     | x                 | —     | —    | —    | —   | —        | —           | —            | —           |
| General   | Audio File               | —     | —                 | x     | —    | —    | —   | —        | —           | —            | —           |
| General   | File                     | —     | —                 | —     | x    | —    | —   | —        | —           | —            | —           |
| General   | PDF File                 | —     | —                 | —     | —    | —    | x   | —        | —           | —            | —           |
| General   | Document File            | —     | —                 | —     | —    | —    | —   | x        | —           | —            | —           |
| General   | Spreadsheet File         | —     | —                 | —     | —    | —    | —   | —        | x           | —            | —           |
| General   | Presentation File        | —     | —                 | —     | —    | —    | —   | —        | —           | x            | —           |
| Variants  | High Resolution Image    | x     | —                 | —     | —    | —    | —   | —        | —           | —            | —           |
| Variants  | Variant                  | —     | x                 | x     | —    | —    | —   | —        | —           | —            | —           |
| Variants  | Variant                  | —     | x                 | x     | —    | —    | —   | —        | —           | —            | —           |
| Variants  | Poster Image             | —     | —                 | —     | —    | —    | —   | —        | —           | —            | x           |
| Variants  | Thumbnail Image          | x     | x                 | —     | —    | —    | x   | —        | —           | —            | x           |
| Metadata  | Creator                  | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Rights                   | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Rights Holder            | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Rights Territory         | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Restrictions             | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Credit                   | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | ISBN                     | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | ISSN                     | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | DOI                      | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Publisher                | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Publisher Place          | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Original Publisher       | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Original Publisher Place | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Container Title          | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Version                  | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Series Title             | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Series Number            | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Edition                  | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Issue                    | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Volume                   | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Original Title           | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Alt Text                 | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |
| Metadata  | Copyright Status         | x     | x                 | x     | x    | x    | x   | x        | x           | x            | x           |

<sup>a</sup>Video downloads are possible only when the source file has been uploaded to Manifold. It is not possible to download media that is being streamed from a third-party host (e.g., YouTube).
