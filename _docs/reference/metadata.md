---
layout: page
title: Metadata
menu:
  reference:
    weight: 2
---

The following metadata fields are made available through Manifold. The three columns—`Project`, `Text`, and `Resource`—denote where the fields apply.

`Project`-level metadata describes a project in its entirety, whereas `Text`- and `Resource`-level metadata describes specific materials within a project.

| Metadata Field           | [Project][1] | [Text][2] | [Resource][3] | [Collection][4]             |
|--------------------------|:------------:|:---------:|:-------------:|:---------------------------:|
| Alt Text                 |              |           |       x       |                             |
| Caption                  |              |           |       x       |                             |
| Container Title          |       x      |     x     |       x       |                             |
| Copyright Status         |              |           |       x       |                             |
| Creator                  |              |           |       x       |                             |
| Credit                   |              |           |       x       |                             |
| Description              |       x      |     x     |       x       |              x              |
| DOI                      |       x      |     x     |       x       |                             |
| Edition                  |       x      |     x     |       x       |                             |
| ISBN                     |       x      |     x     |       x       |                             |
| ISSN                     |       x      |     x     |       x       |                             |
| Issue                    |       x      |     x     |       x       |                             |
| Language                 |              |     x     |               |                             |
| Original Publisher       |       x      |     x     |       x       |                             |
| Original Publisher Place |       x      |     x     |       x       |                             |
| Original Title           |       x      |     x     |       x       |                             |
| Publication Date         |       x      |     x     |               |                             |
| Publisher                |       x      |     x     |       x       |                             |
| Publisher Place          |       x      |     x     |       x       |                             |
| Resources DOI            |              |           |               |        x<sup>a</sup>        |
| Restrictions             |       x      |     x     |       x       |                             |
| Rights                   |       x      |     x     |       x       |                             |
| Rights Holder            |       x      |     x     |       x       |                             |
| Rights Territory         |       x      |     x     |       x       |                             |
| Series Number            |       x      |     x     |       x       |                             |
| Series Title             |       x      |     x     |       x       |                             |
| Subtitle                 |       x      |           |               |                             |
| Tags                     |              |           |       x       |                             |
| Title                    |       x      |     x     |       x       |              x              |
| Unique Identifier        |              |     x     |               |                             |
| Version                  |       x      |     x     |       x       |                             |
| Volume                   |       x      |     x     |       x       |                             |

<sup>a</sup>The Resources DOI applies to project's entire library of resources, not sub-collections created and curated by users.

<a name="descriptions"></a>
## Metadata Field Descriptions

This section groups all the metadata fields available in Manifold by general category with descriptions on how to approach them, depending on the kinds of materials they are referring.

### Copyright

**Creator**. Person or entity credited with creation of the media (as opposed to the creator of the file).
Resource Only

**Rights**. The copyright line and licensing details.
Resource Only

**Rights Holder**. Name of the institution, agency, or individual granting authority to reproduce the material; may be same as source or creator.

**Rights Territory**. The geographic scope of where the rights to this material extend.

**Restrictions**. Describe any restrictions the grantor has placed on use of the material.

**Credit**. The official language the rights grantor has requested to be associated with the resource.

### Identity

**ISBN**. The International Standard Book Number you've assigned to your project as a whole, including the version of record and all the texts and resources associated with it. This field accepts only one entry but can display ISBNs of either the ISBN-10 or ISBN-13 format.

If you have a resource that has been assigned an ISBN, it can be included in the [Resource metadata](/docs/projects/customizing/resources.html) section.

**ISSN**. The International Standard Serial Number you've assigned to your project as a whole, including the version of record and all the texts and resources associated with it.

If you have a resource that has been assigned an ISSN, it can be included in the [Resource metadata](/docs/projects/customizing/resources.html) section.

**DOI**. A digital object identifier can be entered for projects, generally, individual texts within projects, a project's library of resources as a whole (see `Resources DOI` below), as well as for individual resources.

**Resources DOI**. This field is specific to the DOI for the library of all resources contained within a project. There is no presently no way to assign DOIs to smaller collections, created and curated by users.

**Unique Identifier**. An internal ID that describes the material in question within an instance.

### Publisher

**Publisher**. The name of the press or unit guiding and disseminating the material. Publisher information is also used to [generate citations](/docs/reading/interface/sharing.html).

**Publisher Place**. The geographical location of the publisher

**Original Publisher**. If the material is being reprinted or translated, this field provides a means to name its original publisher.

**Original Publisher Place**. For reprinted or translated materials, the geographical location of the original publisher.

### Bibliographic

**Title**. The material's title.

**Subtitle**. The material's subtitle.

**Container Title**. When the material in question is part of a larger whole, that larger whole can be thought of as the container. An example would be an individual chapter in a contributed volume or one piece of art in an exhibition.

**Version**. This is number specific to the publisher in describing the unique state of the material in question.

**Series Title**. For material that is part of a series, any title associated with that group can be documented here.

**Series Number**. For material that is part of a series, the number describing where it is oriented in that series can be documented here.

**Edition**. This field corresponds with the the name of the materials edition as provided by the publisher (e.g., 2nd ed., Director's Cut)

**Issue**. If the material in question is published serially, you can denote its issue number in that series here.

**Volume**. If the material in question is published serially, you can denote its volume number in that series here.

**Original Title**. If the material is being reprinted or translated, this field provides a means to describe its original title.

**Publication Date**. This is the date the material in question was initially published.

### Accessibility

**Alt Text**. Assistive technologies will use this field to describe the nature of the media in question. When crafting your copy, consider what it would be like if the media were absent. Avoiding redundancy with a caption (if present), briefly describe what a replacement for the media would be.

**Caption**. This is the scholarly information or context that answers of the media, `What does this mean?` or `What is of interest about this?` This would mirror what would appear below the media if it were to appear in print.

**Description**. For projects and texts, this field is a means to orient the reader as to its nature and intent.

For resources, the `Description` is an opportunity to translate the visual to the textual—a means to re-create the media in the mind's eye by way of a written description. What are the important elements of what is shown in the media?

### Other

**Copyright Status**. A means to describe where this material falls in the copyright landscape (e.g., Public Domain, Fair Use, In Copyright, Unknown)

**Fingerprint**. A resource fingerprint is a unique ID that allows a user to reimport the same spreadsheet and update the corresponding resources—instead of creating duplicate resources. This guards against changes to titles and filenames. If a user does not define a fingerprint at upload, the system will automatically create one and populate the field.

**Language**. Describes the primary language of which the text is composed in, using the ISO 639-1 abbreviations.

**Slug**. The slug is the last part of the URL that identifies a specific page (or element) on a Manifold instance. For example: `https://{instance-domain}/project/{project-slug}/resource/{resource-slug}`

**Tags**. Tags group and relate media to one another and can server as a mean to navigate among like materials.

## Metadata Display on Manifold

Manifold displays metadata in line with the the scope of the material, as follows:

### Project Metadata

Metadata assigned to a project as a whole is displayed in the About blade at the bottom of the project homepage.

![Project Metadata](/docs/assets/reference/project-metadata.png)

### Text Metadata

Metadata associated to specific texts within a project is displayed on a modal screen accessed by the `Contents` dropdown.

![Contents Dropdown](/docs/assets/reference/contents.png)

![Text Metadata](/docs/assets/reference/text-metadata.png)

### Resource Metadata

Metadata for Resources is displayed in two spaces: on the resource preview modal (accessed by clicking a resource thumbnail in the Manifold reader) and on the resource homepage.

![Resource Modal](/docs/assets/reference/resource-modal.png)

![Resource Homepage](/docs/assets/reference/resource.png)

The `Resources DOI` field, which describes a DOI assigned to a project's entire library of resources displays on a project's Resource Library Page.

![Resources DOI](/docs/assets/reference/project-resources-doi.png)

### Collection Metadata

Resource Collections, beside having a title and description, which display on the collection's homepage, don't hold any metadata.

[1]: /docs/projects/customizing/metadata.html
[2]: /docs/projects/customizing/texts.html#managing-texts
[3]: /docs/projects/customizing/resources.html
[4]: /docs/projects/customizing/collections.html
