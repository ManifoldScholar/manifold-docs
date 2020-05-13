---
layout: page
title: Glossary
menu:
  reference:
    weight: 1
---

## Annotations

In Manifold annotations refer to content that is layered onto a base layer of textual scholarship. These come in several flavors: as textual responses, as highlights, or by way of appending resources to a Manifold Text.

<figure>
<img src="/docs/assets/reference/anno-annotation.png" alt="Annotation Annotation">
<img src="/docs/assets/reference/anno-highlight.png" alt="Highlight Annotation">
<img src="/docs/assets/reference/anno-resource.png" alt="Resource Annotation">
<figcaption>Three different kinds of annotations in practice. <em>Top to bottom</em>: a textual annotation, a typed response to a Manifold text; a highlight annotation; and a resource annotation, not unlike a bibliographic annotation, but one added onto existing scholarship that points toward related material.</figcaption>
</figure>

In everyday practice however, annotations can be more generally thought of as the first type: notes associated with specific passages of material in the Manifold Reader. Readers must have a Manifold account and be logged in to save their thoughts as annotations. Annotations can be private or public or associated with reading groups, which can also be set to public or private. Public annotations can themselves be commented upon and serve as an anchor to a discussion thread.

## Comments

Responses are textual reactions to public annotations or other comments. Whereas annotations have the option to be private, all comments are public.

<figure>
<img src="/docs/assets/reference/comment.png" alt="Comment Thread">
<img src="/docs/assets/reference/comment-res.png" alt="Resource Comment">
<figcaption><em>Above</em>, a comment serving as a response to a public annotation; <em>below</em>, a comment associated with a resource.</figcaption>
</figure>

## Content Blocks

Content Blocks are content-specific containers that span horizontally across a project's landing page. There are seven kinds of Content Blocks:

- Hero
- Markdown
- Metadata
- Recent Activity
- Resources
- Table of Contents
- Texts

See the [Layout section](/docs/projects/customizing/layout.html) for discussion on how each of these work and can be used to suit the needs of many different kinds of projects.

## Feature

Features are blocks of customizable content that display at the top of an instance's main library page. They serve as a means to contextualize a publisher's library or give pride of place to announcements or events pertinent to readers of that instance. See the [Records sections](/docs/customizing/records/features.html) to learn more.

<figure>
<img src="/docs/assets/reference/feature.png" alt="Default Feature Record">
<figcaption>Features display under the header bar on the library landing page. The Feature depicted here is the default included with new installations.</figcaption>
</figure>

## Header

The main ribbon the spans the top of a Manifold page and includes a publisher's logo, links for `Home`, `Projects`, `Following` search, and the user dropdown. The link to access the Manifold backend is also contained in the header and will read with `Enter Admin Mode` or `Editor Mode` depending on the user's credentials.

See also, `Standalone Header` and `Top Bar`.

<figure>
<img src="/docs/assets/reference/header.png" alt="Header Bar">
<figcaption>The Header displays atop all Manifold pages, except those rendering Texts in the Reader.</figcaption>
</figure>


## Ingestion

In the context of the Manifold application, *Ingestion* refers to the process of bringing a Text into the Manifold Reader. Presently Manifold supports five ingestion strategies:

- EPUB
- HTML
- Markdown
- Word/DOCX
- Google Docs

In terms of process, authors and publishers will create content in one of the accepted formats above, and then load the file(s) to a project as a text to display in the Manifold reader. See the [Texts section](/docs/projects/customizing/texts.html) for more.

## Iterative

Synonymous with additive. Iteration is the process of adding new content to a Manifold project, be it a single resource, a new text, or a combination of those that further establishes and matures the project. Iteration is not to be confused with versioning. Materials with minor adjustments can simply replace existing ones without loss of annotation and commenting fidelity. Materials with more significant updates should be added to the system as new texts or resources for their on distinct consideration: versioning by way of iteration.

## Projects

Projects are the core unit of Manifold. Each Manifold project can be composed of Texts and Resources. They are a project's foundation.

## Reader or Manifold Reader

The platform display where Texts are read and critically engaged with by way of private or public annotations, discussions revolving around public annotations, and through the sharing and networking of the scholarship at hand. The Reader has various customizations available, including contrast, text size, font choice, and margin control. Readers are also able to adjust how much community overlay is shown, with options to show all annotations and comments, only private annotations, or no annotations of any kind.

<figure>
<img src="/docs/assets/reference/reader.png" alt="Manifold Reader Display">
<figcaption>A view of the Manifold reader, rendering a draft text that includes two viewable resource annotations.</figcaption>
</figure>

## Resources

Ancillary media that enhance Texts and can be either static or dynamic. Resources are placed onto Texts in the reader in a way analogous to the placing of a footnote: a marker is created at a specific location in the text that calls the reader's attention to media that can be previewed in the margins. Manifold is designed to allow for as many different media types as possible, from figures, tables, audio, video, to presentations, downloadable apps, and network visualizations. For details about the different kinds file formats and preferred specifications for resources that are available to the system, please see the [Resources](/docs/projects/resources.html) section.

## Roles

There are two species of roles available to those who have created user accounts in the Manifold system: Global and Scoped. Global roles provide accounts with varying kinds of permissions across an entire Manifold instance. Scoped roles provide accounts with permissions specific to individual projects.

### Global

To learn more about these global roles, see the [User Accounts section](/docs/projects/accounts/users.html).

- Administrator
- Editor
- Project Creator
- Marketeer
- Reader

### Scoped

To learn more about these project-specific roles, see the [Access section](/docs/projects/customizing/access.html).

- Project Editor
- Metadata Author
- Author

## Standalone Header

When projects are in [standalone mode](/docs/projects/customizing/general.html#standalone), the standard Manifold  header that displays a custom logo and color scheme will be supplanted by a more minimal standalone header that contextualizes the user experience as if the project did not exist within a broader library of Manifold projects. If the title is clicked, the header will return users to the standalone project homepage.

See also, `Header` and `Top Bar`.

<figure>
<img src="/docs/assets/reference/standalone-header.jpg" alt="Standalone Header">
<figcaption>The standalone header persists the project's title and subtitle on scroll down Manifold project pages. The header also includes search and user dropdown options.</figcaption>
</figure>

## Texts

Static, prose-driven materials that have been processed into the Manifold Reader and which could be replicated exactly in print as they appear on the screen. Generally, though not necessarily, Texts can be thought of as author-original content: field notes; draft or sample chapters; blog posts; ruminations and explorations of topics related to the project; or final, copyedited manuscripts. Texts are expected to have any figures and tables that are crucial to the discussion embedded within them.

To learn more, see the [Preparing Texts](/docs/projects/preparing/index.html) and Customizing [Projects section](/docs/projects/customizing/texts.html).

See also, `Ingestion`.

## Text Section

Text sections are congruent with individual files being loaded into the Manifold reader. For example, an EPUB is, among other things, composed of a series of XHTML files that correspond to the cover, title page, contents, individual chapters, etc. As a whole, an EPUB brought into Manifold serves as a Text. The individual files comprising it are text sections. Likewise, each of the individual files making up a [Manifest upload](/docs/projects/preparing/index.html#manifest) are themselves text sections when brought into the Reader.

These are often confused with smaller units of text within chapters (or the like) that are bound within various levels of headings.

## Top Bar

The top bar is a thin, customizable branding element that serves as a means to contextualize a Manifold page for readers in relation to a larger mission. It can be configured to appear atop all Manifold pages outside of the reader, set to specifically target only those projects that are enabled for [standalone mode](/docs/projects/customizing/general.html#standalone), or configured on a [project-by-project basis](/docs/projects/customizing/general.html#top-bar).

See also, `Header` and `Standalone Header`.

<figure>
<img src="/docs/assets/projects/top-bar-text.png" alt="Top Bar">
<figcaption>The blue top bar here reads “Top Bar Test” and is set to show atop a standard (<em>not</em> standalone) project.</figcaption>
</figure>