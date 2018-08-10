---
layout: page
title: Resources
menus:
  projects_customizing:
    weight: 6
---

Resources are media that can be used to augment and enhance texts or stand alone as items of inquiry or investigation on their own. There are eight resource kinds available in Manifold:

* Image
* Video
* Audio
* File
* Link
* PDF
* Document
* Spreadsheet
* Presentation
* Interactive

Each of those are discussed in detail in the [Preparing Resources](/docs/projects/resources.html) section.

In this space, devoted to the `Resource` sidebar of the backend project page, we will consider how to add the resources you have already prepared into the system along the following themes:

* [Required User Credentials](#credentials)
* [Adding Resources Individually](#adding-resources-single)
* [Adding Resources in Bulk](#adding-resources-bulk)
* [Managing Resources](#editing-resources)
* [Searching through Existing Resources](#searching-resources)

Details on how to place already loaded resources (or collections of resources) in a text is discussed in the [Interface](/docs/reading/interface/placing.html) section.

<a name="credentials"></a>
## Required User Credentials

To access the Resource sidebar a user who has a `Reader` or `Project Creator` role will require either `Can Modify Metadata` or `Can Modify Project` permissions. Note that the former only allows the user to update the metadata for existing resources, not load new resources into the system.

Users with `Marketeer`, `Editor`, or `Administrator` roles will, by default, be able to update existing and upload new resources to any project in the instance where they have those credentials.

For more information about credentials, see the [user accounts](/docs/projects/accounts/index.html) section.

![Resource Sidebar](/docs/assets/projects/resource-sidebar.png)

<a name="adding-resources-single"></a>
## Adding Resources Individually

To add Resources to a project one at a time, click the `Add a New Resource` button below the resource search bar. The `New Resource` page will appear and provide you the option to choose which of the eight kinds of resource you'd like to add.

![Resource Kinds](/docs/assets/projects/resource-kinds.png)

A small subset of metadata fields specific to your resource will be present below the resource kinds. The fields vary depending on the resource kind in question. Generally you'll be prompted to provide a `Title`, `Description`, and the actual file you are uploading as a resource. Only the `Title` and resource file are required. The exceptions, described below affect the `Video`, `Link`, and `Interactive` kinds.

After you've filled out the appropriate fields, click `Save and Continue`. Your resource has now been loaded, and you can update the full range of fields and metadata associated with your resource. A table describing what options each resource kind has available to it can be found in the [Preparing Resources](/docs/projects/resources.html#resource-fields) section.

### Video

Videos can be uploaded directly into Manifold or they can be streamed from YouTube and Vimeo. To make the connection from Manifold to the external host, click the slider for `Is This an Externally Linked Video`. When toggled on, two new fields appear: `Video ID` and `External Video Type`.

`Video ID` describes the unique identifier in the URL bar that is associated with the video in question. On YouTube it will appear after `watch?v=` and before any string beginning with an ampersand `&`. In the following, the `Video ID` would be `3yfYetkMLPM`:

`https://www.youtube.com/watch?v=3yfYetkMLPM`

On Vimeo the `Video ID` is the number following `vimeo.com/`. In this example, the `Video ID` would be `249096229`:

`https://vimeo.com/249096229`

The `External Video Type` field is a dropdown used to select which service the video is hosted on: YouTube or Vimeo.

### Link

Instead of a file to upload, `Link` resources require that you input the URL to the site you are using as a resource.

### Interactive

Instead of loading a file to the system, Manifold instead prompts the user to provide the URL of the site in question along with the minimum width and height (in pixels) for the iFrame wrapper. The minimum width and height help Manifold handle the iFrame responsively and determine how the content will render—inline or fullscreen—and whether it may be necessary to substitute the poster image, instead of the interactive element, in slideshows.

If you are unsure of the minimum width or height, leave those fields blank, and Manifold well calibrate the view based on the size of the reader's screen size.

<a name="adding-resources-bulk"></a>
## Adding Resources in Bulk

To add resources in bulk you'll first need a CSV or Google Sheet describing the files you are uploading. A template for that purpose is [provided here as the Manifold Resource Log](/docs/assets/projects/manifold-resource-log.xlsx). Add or adjust columns to suit your needs. Manifold's upload process can be adapted to map data in different ways.

You will also need to save all your resources in a Google Drive folder with permissions extending viewing access to all those who have possession of the link. At this point only Google Drive is supported as viable means to host resources that are to be imported into the system. Your instance will need to have Google Services configured for this process to be successful. See the [customizing external services section](/docs/customizing/settings/external_services/google/index.html) for more.

Once your sheet is filled out (and saved as a CSV) and your resources saved to Google, click `Bulk Add Resources` to add a collection of resources in one step.

You will be taken to a screen where you can load your CSV file or provide the URL to a shared Google Sheet under the `Step 1: Upload` heading. Under the `Step 2: Describe Data` you should select from the dropdown the row number where your column headings appear (select `2` for the Manifold Resource Log) and then enter ID for the Google Drive folder where your resources are saved. The ID is the last part of the URL for your Google Drive folder after `https://drive.google.com/drive/folders/`.

When you click continue you'll be taken to `Step 3: Map Columns to Resource Attributes`. The column on the left side lists the column headers found in your spreadsheet. The column on the right lists the attributes that can be set on Manifold resources. Drag the attributes on the right to the corresponding columns on the left. The [Resource Import Matrix](#resource-import) below serves as a map between those columns.

Pressing the `Automatically Map Attributes` button will attempt to automatically match the attributes with the spreadsheet columns. If you are using the Manifold Resource Log you'll need to only map two attributes manually: `external_id` to `Video ID`, and `metadata.rights` to `License`.

When you click continue your resources will be uploaded into the system with the information from your sheet populating the appropriate fields for each. This process may take a few moment to complete. As it is working you will see regular updates to the status of your uploads.

<a name="editing-resources"></a>
## Managing Resources

To adjust the metadata for a resource that has been loaded into the system, click on the resources name in the list of those in the system. That will take you to that resource's detail page, where information is spread across three sidebar headings: `General`, `Variants`, and `Metadata`. The `Variants` sidebar will only appear for `Image`, `Video`, `Audio`, and `Interactive` resources.

The [Preparing Resources](/docs/projects/resources.html#resource-fields) section describes all the available fields you can adjust and where they can be found in the system in detail.

<a name="searching-resources"></a>
## Searching through Existing Resources

From the Resource page you can search through all resources that have been added to the project you are viewing. When you click `Show Search Options` you'll have the ability to refine your search by Tags as well as the Kind of resource you are looking for.

<a name="resource-import"></a>
# Resource Import Matrix

| Manifold Resource Log    | Resource Metadata         | Resource Attributes               |
|--------------------------|---------------------------|-----------------------------------|
| Title                    | Title                     | title                             |
| Kind                     | Kind                      | kind                              |
| N/A                      | N/A                       | created_at<sup>a</sup>            |
| Caption                  | Caption                   | caption                           |
| Description              | Description               | description                       |
| Fingerprint              | Fingerprint               | fingerprint                       |
| URL                      | Link URL                  | external_url                      |
| URL                      | iFrame URL                | external_url                      |
| Video ID                 | Video ID                  | external_id                       |
| Host Name                | External Video Type       | external_type                     |
| Allow Download?          | Allow Download?           | allow_download                    |
| Sub Kind                 | Externally Linked Video?  | sub_kind                          |
| Slug                     | Slug                      | slug                 |
| Minimum Width            | Minimum Width             | minimum_width                     |
| Minimum Height           | Minimum Height            | minimum_height                    |
| Tags                     | Tags                      | tag_list                          |
| Series Title             | Series Title              | metadata.series_title             |
| Container                | Container Title           | metadata.container_title          |
| ISBN                     | ISBN                      | metadata.isbn                     |
| ISSN                     | ISSN                      | metadata.issn                     |
| DOI                      | DOI                       | metadata.doi                      |
| Original Publisher       | Original Publisher        | metadata.original_publisher       |
| Original Publisher Place | Original Publisher Place  | metadata.original_publisher_place |
| Original Title           | Original Title            | metadata.original_title           |
| Publisher                | Publisher                 | metadata.publisher                |
| Publisher Place          | Publisher Place           | metadata.publisher_place          |
| Version                  | Version                   | metadata.version                  |
| Series Number            | Series Number             | metadata.series_number            |
| Edition                  | Edition                   | metadata.edition                  |
| Issue                    | Issue                     | metadata.issue                    |
| Volume                   | Volume                    | metadata.volume                   |
| License                  | Rights                    | metadata.rights                   |
| Territory                | Rights Territory          | metadata.rights_territory         |
| Restrictions             | Restrictions              | metadata.restrictions             |
| Copyright Holder         | Rights Holder             | metadata.rights_holder            |
| Creator                  | Creator                   | metadata.creator                  |
| Alt-Text                 | Alt Text                  | metadata.alt_text                 |
| Credit Line              | Credit                    | metadata.credit                   |
| Copyright Status         | Copyright Status          | metadata.copyright_status         |
| Filename                 | {Kind} File               | attachment.attachment             |
| High Res                 | High Resolution Image     | attachment.high_res               |
| N/A                      | Thumbnail Image           | attachment.variant_thumbnail      |
| N/A                      | Poster Image              | attachment.variant_poster         |
| File Variant 1           | Variant (1)               | attachment.variant_format_one     |
| File Variant 2           | Variant (2)               | attachment.variant_format_two     |
| Collection               | —                         | —                                 |
| Figure Number            | —                         | —                                 |
| Permission Status        | —                         | —                                 |
| Print Color Solution     | —                         | —                                 |
| Print Intention          | —                         | —                                 |
| Skip                     | —                         | —                                 |
| Source                   | —                         | —                                 |
| Special Instructions     | —                         | —                                 |
| Synchronized Subtitles   | —                         | —                                 |
| Transcript               | —                         | —                                 |
| Translation              | —                         | —                                 |

<sup>a</sup>This field is automatically populated by the system and cannot be changed manually.
