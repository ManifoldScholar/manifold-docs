---
layout: page
title: Exports
menus:
  projects_customizing:
    weight: 11
---

## Overview

From this view, publishers can export an individual Manifold project to a preservation archive or a general digital repository.

![Export View](/docs/assets/projects/export-view.png)

Before a project can be exported, the pathway between Manifold and the target archive first needs to be configured. Instructions on how to establish this connection are described in the [Records section](/docs/customizing/records/export.html).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. Only users with Administrator or Editor credentials are able to export projects. When Project Creators or Marketeers access the backend, the <code>Export</code> menu will not be visible to them.
</div>

When first landing on this page, if no targets have been preconfigured on your instance, Manifold will prompt you to create one. If there are export targets already saved, Manifold will direct you to select one from the dropdown field labeled `New Project Export`.

Once the export target has been selected, click `Export Project` to begin the process of transferring the project to the repository. When it has completed, the export will be listed on this screen with a `Success` badge beside it.

A project can be exported multiple times. This page will list each time it has been exported with information on where it was directed along with the size of the package. Publishers can download directly from this view the most recent export package to review its form and content.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. Because a copy of the most recent export package is retained on your instance, that package counts against your server space.
</div>

## Export Details

During the export process, all of a project's texts are transformed into individual EPUB files and collected with the project's resources and metadata. Presently, the sum of those materials are then gathered into a ZIP archive that is structured according to the [BagIt specification](https://github.com/jkunze/bagitspec). In the future, Manifold may export according to alternative strategies or specifications.

It is not possible to export distinct components of a project. The feature as it is presently crafted only allows a publisher to export the contents of a project as an interrelated whole.

### What's Included in the Export?

- All of a project's texts (converted to the EPUB format)
- All of a project's resources
- Metadata for the overall Manifold project, each individual resource, and for each text
  - Metadata for texts is saved directly into the the distinct EPUB packages
- General inventory files specific to the Bagit specification

### What's Not Included?

- Annotations
- Comments
- Highlights
- Content blocks and descriptive information contained within them
- Indication of where resources were placed in texts
- Associations with reading groups or project collections

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. The export will function as described regardless of whether or not the publisher has chosen to Enable EPUB files to be produced for individual texts. That feature has no bearing on this one.
</div>

## Troubleshooting

Once an export has triggered, the screen *will not* automatically update. To determine if a export has been successful or not, manually refresh the window. The export speed depends on many factors; the larger the project, the longer the time to complete the process.

If an export fails, contact your local IT agents to authenticate against the target FTP host. Performing standard network debugging protocols to ensure Manifold can access the server will be the best first steps to take in such a case.