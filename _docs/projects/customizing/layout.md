---
layout: page
title: Layout
menus:
  projects_customizing:
    weight: 2
---

A project's landing page is highly customizable and modular. Within the Layout submenu, publishers control the visual appearance and the components—or “blocks”—that constitute a project.

<!-- Insert a graphic to show the blocks generally -->

The “Hero Block” is required of every project. All other "Content Blocks" are optional. The Layout menu is oriented along those lines as is the following documentation.

## Hero Block

The hero block can be as basic or as involved as a project requires. For iterative projects, the scope and complexity of this block will likely change as content is added to the project.

### Description and  . . . ?

<a name="description"></a>
#### Description

This field holds a brief description of the project as a whole. Recommended length would range from three to five sentences. Text entered here can be formatted with [basic Markdown syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/).

<a name="hero"></a>
#### Hero Image

The hero image displays as a banner across the top of the project landing page and sits behind all the other elements described in this section.

Your image should be sized to 1280 × 800 pixels. Images not submitted at those dimensions will be scaled by the system to best approximate them and cropped along the bottom edge accordingly to fit the space.

Acceptable formats for upload are GIF, JPG, JPEG, PNG, and SVG.

When a project is shared socially the hero image is included as part of that transaction so that other platforms can render the look and feel of the source material from Manifold.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Warning</strong>. Be sure you have the necessary permissions to upload your hero image to the system.
</div>

#### Cover

The cover is intended to be used for projects that are official versions or record—that is, they are not in a draft state but considered formally published. When set, the cover image will appear over the right side of the hero image on the project landing page once the text that serves as the version of record is moved into the [`Published` category](/docs/projects/customizing/texts.html#grouping-texts).

The system will automatically resize your image to fit the available space, but it need not be cropped and can retain its original ratio. For best results, the smallest side shouldn't be any less than 600 pixels.

Acceptable formats for upload are GIF, JPG, JPEG, PNG, and SVG.

### Calls to Action

### Social . . . ?

## Content Blocks

### Markdown

The Markdown Block allows editors to create sections of markdown content on a project page. The block can be assigned a gray background to help it stand out from other content on the page. Possible uses of this block include adding descriptive text about the project or supplemental textual content.

### Metadata

The Metadata Block will render metadata about the project in three columns. Project metadata is managed on the “metadata” tab of the project record. This block will not render if no metadata has been added to a project.

### Texts

The Text Block lists some or all texts associated with the project. The texts that are included in the list can be filtered to only include texts from one or more categories. The block can be configured to include or exclude author names, subtitles, dates, descriptions, and cover images in the output. The list can also be configured to group texts by category.

### Recent Activity

The Recent Activity block lists the last six activity records for the project. Activity records can be managed on the project’s “activity” tab. If a project contains more than six activity records, users will be shown a button that links to the full, paginated list of activity on a separate screen.

### Resources

The Resources Block renders a teaser of the ten most recently updated resources on a project, accompanied by a link to the resource library for that project as well as the total number of resources on the project. If the “Show All Collections” switch is enabled, this block will also list each of the project’s resource collections. The block can be configured to only show specific collections if desired. If the project has collections, the block will also render a link to the “all collections” view for the project.

### Table of Contents

The Table of Contents Block renders the table of contents for a specific text in the project. This block is especially useful for projects that only have one text, in which cases it’s generally more useful to render a TOC than to render a list of project texts. The editor must specify which text the Table of Contents should draw from, and the depth field can be used to limit the depth of the table of contents (the default limit is six).

<!-- Is the following still accurate? -->
### Download File

Download files can be supplied in the following formats:

- EPUB
- HTML
- MD
- DOCX
- TEX or LATEX
- ZIP
