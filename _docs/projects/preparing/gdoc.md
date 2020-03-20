---
layout: page
title: Google Docs
menus:
  preparing-texts:
    weight: 2
---

## Prerequisites

A Manifold instance must first be set up to [integrate with Google Services](/docs/customizing/settings/integrations.html#google_services) before it can ingest Google Docs.

## Permissions

Once a Manifold instance is integrated with [Google Services](/docs/customizing/settings/integrations.html#google_services), the system can ingest any Google Doc that is publicly available or that has its permissions set so that anyone with the link can view it.

![Google Doc Permissions](/docs/assets/projects/link-sharing.png)

## Rendering Google Docs

Heading structure, character rendering (including indentation), tables, and figures that are part of the document will transfer to Manifold in a way that is consistent with the source material, with the following exceptions, which Manifold will not honor:

- Columns
- Custom fonts
- Page breaks
- Bullet points. Text formatted as bullet points will come in as list elements, but they will appear without bullet characters.
- Footnotes. Any footnote in the document will be transformed into an endnote, appearing at the end of the text section.

To learn more about how to add supported elements into a Google Doc, consult the [G Suite Learning Center](https://gsuite.google.com/learning-center/products/docs/get-started/#!/section-2-3).

## Headings

When individual Google Docs are ingested into the Manifold Reader, the system will look for text that a user has applied heading formatting to and include those elements as navigable items on the Contents dropdown.

![Google Doc Headings](/docs/assets/projects/gdoc-headings.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. It is not presently possible to map specific headings from individual Google docs into the reader's Contents dropdown when loading them as part of a <a href="/docs/projects/preparing/index.html#manifest">Manifest</a>.
</div>

See the [Writing for the Web section](/docs/writing/writing.html#gdocs) for instructions on how to appropriately designate headings as elements Manifold can recognize.
