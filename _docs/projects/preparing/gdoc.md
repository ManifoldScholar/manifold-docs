---
layout: page
title: Google Docs
menus:
  preparing-texts:
    weight: 2
---

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
A Manifold instance must first be set up to <a href="/docs/customizing/settings/external_services/google/drive.html">integrate with Google Services</a> before it can ingest Google Docs.
</div>

Once a Manifold instance is integrated with [Google Services](/docs/customizing/settings/external_services/google/drive.html), the system can ingest any Google Doc that is publicly available or that has its permissions set so that anyone with the link can view it.

![Google Doc Permissions](/docs/assets/projects/link-sharing.png)

Structure, rendering (including indentation), tables, and figures that are part of the document will all transfer to Manifold in a way that is consistent with the source material, with the following exceptions, which Manifold will not honor:

- Columns
- Custom fonts
- Page breaks
- Bullet points. Text formatted as bullet points will come in as list elements, but they will appear without bullet characters.
- Footnotes. Any footnote in the document will be transformed into an endnote, appearing at the end of the text section.
