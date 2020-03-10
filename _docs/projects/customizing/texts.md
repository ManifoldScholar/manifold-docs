---
layout: page
title: Texts
menus:
  projects_customizing:
    weight: 5
---

The Texts panel will be one that users will often interact with, as this is the spot where texts are added, categorized, and updated.

For new projects—or projects that haven't yet ingested a text—the panel is composed of two buttons (`Add a new text` and `Create a new category`) and a default text section (`Uncategorized`).

![Texts Panel](/docs/assets/installing/texts.png)

When texts are added to a project they will be oriented in the `Uncategorized` section. New, custom, category sections can be added as required to suit the needs of a project.

This section is portioned along the following themes:

* [Adding Texts to Projects](/docs/projects/customizing/texts.html#adding-texts)
* [Grouping Texts by Category](/docs/projects/customizing/texts.html#grouping-texts)
* [Modifying Text Records](/docs/projects/customizing/texts.html#managing-texts)

<a name="adding-texts"></a>
## Adding Texts to Projects

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
The process detailed here speaks to the mechanics of adding an already prepared text into Manifold. Before proceeding, please read through the <a href="/docs/projects/preparing/index.html">Preparing Texts</a> section to ensure your materials are in a state acceptable for ingestion.
</div>

To begin the process of adding a text to a project, click on the `Add a new text` button. When you do, a drawer will open from the rights, allowing you to drag and drop a file onto the screen or select a file from your device using the file directory.

![Upload Drawer](/docs/assets/installing/ingestion-one.png)

Alternatively, if the text you want to ingest is already being hosted remotely, you can designate the URL where Manifold can fetch it. For instance, the following is the URL to the Standard Ebooks Project's copy of Edwin A. Abbott's *Flatland*:

``` shell
https://standardebooks.org/ebooks/edwin-a-abbott/flatland/dist/edwin-a-abbott_flatland.epub
```

Note that the link is not to the page where you can download the file, but instead a direct link to the file itself.

Once you have selected a file or designated a URL, the `Continue` button will change from gray to green when the system is ready to proceed. Click it and the drawer will change to a file analysis state.

### File Analysis and Ingestion

Manifold will review the file you've suggested for ingestion, with the following output:

``` shell
Current State: Sleeping
Strategy: None
Text ID: This ingestion will create a new text
Log: Connecting to Manifold websocket...
```

Once the `Connecting to Manifold websocket` appears in the Log section, the `Ingest` button at the bottom right will turn green and the text can be ingested. When clicked Manifold will process your file. The `Current State` field will read `Processing`, and the log will stream details of what the system is doing. If everything goes correctly, when the process is finished the `Current State` should say `Finished`, a hexadecimal value should be listed under the `Text ID`, and the last line of the log should read `Ingestion Complete`.

If you get anything different from the log, [reach out for support](/docs/index.html).

Otherwise, you can click on the green `Complete` button, and you will now see the text you ingested in the `Uncategorized` section of the panel.

Congratulations! Your text is now in Manifold!

<a name="grouping-texts"></a>
## Grouping Texts by Category

Categories are a means to group and label texts in the system. By default there is one fixed category—`Uncategorized`—into which all texts will initially flow until a user moves them to a created category.

To move a text from one category to another, simply click on the horizontal “grab” bars on the far right side of the category container, beside the trash can and edit pencil icons.

### Uncategorized

`Uncategorized` serves as the staging ground for all texts that are initially ingested. This category does not have a limit on the number of texts it can hold, nor are texts in this collection overlaid with a title ribbon to which custom categorized texts are subject.

### Custom Categories

If your project requires grouping texts in distinct clusters, or if you simply wish to indicate what state the text being presented is in (e.g., First Draft, Peer-Reviewed, etc.) you can create a custom category that will support those ends.

To create a custom category, click on the `Create a new category` button, and a drawer will open from the right asking you to name it. Click `Create Category`, and the new section will appear in both the front- and backend interfaces:

![Backend Categories](/docs/assets/projects/backend-categories.png)

![Frontend Categories](/docs/assets/projects/frontend-categories.png)

By default new categories are empty. When you move a project into a custom category the reader will overlay the bottom of the text with a yellow ribbon the category name (unless the Text is denoted as having been [Published](/docs/projects/customizing/texts.html#managing-texts-general)). Here we have an extract from the text titled *For Thought in the Act*, which we can see from the shots above is in the `Supporting Texts` category and displays a ribbon to the same effect:

![Title Ribbon](/docs/assets/projects/title-ribbon.png)

You can rename a category by clicking on the `Edit` button to the right of it's name or delete the category entirely by clicking on the `X` to the right of the `Edit` button.

Texts that are in a custom category that is being deleted will return to `Uncategorized` after the deletion has been confirmed.

To change the order in which the custom categories appear, click on the horizontal grab bars to the right of the category name, which you can use to drag and drop the category to the desired placement.

<a name="managing-texts"></a>
## Modifying Text Records

After a text has been ingested, you can modify its metadata, adjust associated Maker records, update how its constituent elements render in the reader, and also re-ingest its source file to accommodate any minor changes that may have been required after the initial ingest.

To edit a text, click on it's name or edit button from the project's text directory.

![Text Landing](/docs/assets/projects/editText.png)

From there you will be taken to the text landing page with its own unique sidebar:

![Text Landing](/docs/assets/projects/text-landing.png)

<a name="menuBar"></a>
### Text Menu Bar Options

The menu bar on the text landing page mirrors the functionality of the menu bar at the project level, along with contextual and added functionality.

![Text Menu Bar](/docs/assets/projects/menubar.png)

#### Preview

When activated here, the Preview button opens a new tab with the text showing in the Manifold reader. This contrasts with this button's behavior at the project level, where it opens a new tab to the project landing page instead of a specific text.

#### Delete

This button allows editors the means to delete the specific text that is presently being edited—versus deleting the entire project.

<a name="enableEPUB"></a>
#### Enable/Disable EPUB

This option provides a means for a publisher to export from Manifold an EPUB of a specific text, regardless of the format it was ingested. If a publisher is creating texts using Word files or Google Docs, this provides the means to secure that same content in the EPUB format.

Every five minutes Manifold looks for texts that have this setting enabled. If a text is newly enabled, Manifold will generate an EPUB of the text. If the text has been updated since the last scan, Manifold will re-create the EPUB so that accurately reflects any changes that have been made.

Once generated, Manifold makes the EPUB available for download through the backend (see the next section). Looking ahead, we anticipate tying this to content blocks, so that publishers can provide readers the option to download specific texts as EPUBs to their own devices.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. Presently there is no warning if the system cannot generate an EPUB from the text. The only indication that something has gone amiss is that the <code>Download EPUB</code> button does not appear on the menu after having been toggled on for at least five minutes.
</div>

#### Download EPUB *(Conditional)*

For texts that have `Enable EPUB` toggled on, this button provides the means for the publisher to secure the Manifold-generated EPUB.

Presently this is the only means to secure the generated EPUB, but in the future we expect to make it possible to provide a way for readers to access the file through content blocks on the project landing page.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. The EPUB offered here is one that Manifold has generated. If a publisher loads an EPUB to initially create the text and then toggles <code>Enable EPUB</code> on, Manifold will create its own EPUB. Those two files would be very similar but potentially not exact matches. The original source EPUB is still retained, however, and would be available through the <code>Download Source</code> button (see below).
</div>

#### Download Source *(Conditional)*

Manifold retains the source files that were uploaded to create each text. This button allows a publisher to secure that file directly from the system.

In situations where multiple backend users are uploading and editing files, this provides the means to access source materials directly without having to go through an intermediary. Likewise, in situations where source files have been misplaced, this serves as a handy fallback.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. Manifold does <em>not</em> provide source files for texts that have been ingested via URL (e.g., Google Docs). In such situations this button would not appear.
</div>

<a name="managing-texts-general"></a>
### General

When you access a text record in the backend, you'll arrive first in the `General` menu where you can adjust the following aspects of the text.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. Of the following fields, <code>Title</code>, <code>Subtitle</code>, and <code>Description</code> have display options available in the text content block. To learn more about those options, see the <a href="/docs/projects/customizing/layout.html">Layout</a> section.
</div>

#### Title

Manifold will automatically populate this field if the source file that is ingested describes a title in its structure. The following table considers this for each of the available ingestion strategies:

| Source File      | Location Notes                                                                                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EPUB             | The `content.opf` file in the EPUB package will describe the title with metadata formatted like this: `<dc:title id="title">Furious Feminisms</dc:title>`                                                                                                                                   |
| HTML             | For individual HTML text ingests, title metadata will apear Within the `<head>` tags, formatted as follows: `<meta name="dc.title" content="Scoial Theory for Nonhumans">`. See the [HTML section](/docs/projects/preparing/html.html) for examples.                                        |
| Markdown         | When loading individual Markdown files, the title will be formatted like this: `title: Metagaming`. This should appear at the top of the document, with lines of three dashes (`---`) appearing above and below. See the [Markdown section](/docs/projects/preparing/md.html) for examples. |
| Google Doc       | While there is a paragraph style called `Title` in the formatting options for Google Docs, what populates the title field in Manifold is the saved title of the document that appears in the upper left of the Google Doc screen, just above the file menu system.                          |
| MS Word (DOCX)   | The text of the paragraph that has the Word Style `Title` applied to it will be captured as the text title in Manifold.                                                                                                                                                                     |
| Manifest Ingests | In the YAML file, nested in the `meta` section the title metadata will be described like this: `title: The End of Man`.                                                                                                                                                                     |

If you are unable to modify the source file accordingly, you can manually adjust the text title in this field. The value entered here, whether coming from a source file's metadata or from manual entry, will be properly encoded as the title in any EPUB that Manifold may make of the text for export or download.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. The content of this field will be included when when a URL from the text is shared with another platform capable of conveying that information to its readers (e.g., Twitter, Facebook).
</div>

#### Subtitle

Presently Manifold does not capture subtitle metadata from any of the ingestion formats.

#### Slug

A text slug describes the part of the URL for a specific text that appears between the `read` and `section` components. In the following example, `furious-feminisms` is the slug for a text on the University of Minnesota Press's instance. The system will automatically create a slug for each new text based on the text title, unless your manually adjust this field.

```html
https://manifold.umn.edu/read/furious-feminisms/section/412115a1-5dce-4436-b550-524eb757f065
```

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. It is best to adjust a text slug in the initial setup. If adjusted after the original URL, with an auto-genenerated slug, has been shared, readers may encounter broken links.
</div>

#### Published?

In the Manifold reader, texts normally include the [category name](/docs/projects/customizing/texts.html#grouping-texts-by-category) with which they are associated as a ribbon at the bottom of the screen.

![Text Ribbon](/docs/assets/projects/textRibbon.png)

When this field is toggled on, that ribbon is removed. Further, a published tag will also be associated with the text in a text content block:

![Published Tag](/docs/assets/projects/published.png)

#### Publication Date

The date stored in this field does not presently render on the site or function for any sorting purposes. We store it for likely future use and encourage publishers to maintain complete text records that are consistent with the publishing scheme. That is to say, any publication date is somewhat arbitrary. This field could reflect the date of original publication in print or the date of publication onto Manifold.

#### Description

This is a Markdown-enabled field where publishers can describe individual texts. The copy entered here can also appear in a text content block. See the [Layout section](/docs/projects/customizing/layout.html) for more details on how and where the content of this field can be displayed for readers.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. The content of this field will be included when when a URL from the text is shared with another platform capable of conveying that information to its readers (e.g., Twitter, Facebook).
</div>

#### Cover Image

This field allows publishers to associate a cover image with a text, which can then be made to render in the text content block beside the text title (as in [this example](/docs/assets/projects/textsBlock.png)). See the [Layout section](/docs/projects/customizing/layout.html) for details on how to configure your project for that setup.

Previously, only texts loaded in the EPUB format would render a cover in this space. With this field, customizable text covers are available for all texts, regardless of their ingestion file type.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. In situations where Manifold is creating an EPUB of a text, for download or export, it will use the cover file stored in this field as the cover for the Manifold-generated EPUB.
</div>

#### Section Label

`Section Label` refers to the navigation header that appears at the bottom of a unit of text. By default the header reads `Next Chapter`. Below that header is the title of the next unit of text. If your text is broken up by another conventions (e.g., article, part), you can specify that here to better orient readers to the nature of the content.

<a name="textsPeople"></a>
### People

Through the `People` sidebar element you can add, remove, and modify Maker records associated with the text just as you could for the project generally. For details on that process, which is the same here, see the [People section](/docs/projects/customizing/people.html).

<a name="textsMeta"></a>
### Metadata

In addition to the basic metadata available through `General` sidebar element, there is also a separate menu (`Metadata`) that allows users to modify a robust set of metadata elements associated with a particular text. See the [Reference](/docs/reference/metadata.html) section for a list and description of all the fields available for texts.

<a name="mod-styles"></a>
### Styles

The Styles sidebar menu allows users who are versed in CSS (cascading stylesheets) to modify how certain elements in their text render in the reader by adjusting an existing—or associating a new—CSS file with the text.

Stylesheets are applied to texts in the order listed under the Stylesheet heading and are classified as either “Ingested” or “User”:

![Styles](/docs/assets/projects/styles.png)

“Ingested” stylesheets are those that were part of the source document imported into Manifold. “User” stylesheets are those that have been created by a user after the initial ingestion.

If you need to adjust the styling of certain elements in a text, we suggest you add a new stylesheet to the project instead of modifying one that the system brought in with the text: if you ever need to reingest the text in question, any changes you have made to those stylesheets that were brought in with the text will be overridden by the reingest process, while added stylesheets will persist unaffected by that process.

To override styles in the source document, create a new stylesheet and move it to the bottom of the list by clicking the two horizontal grab bars. You can use those to drag and drop your new sheet or reorder existing ones.

When you create a new stylesheet, you'll be taken to a screen that is split into three sections: `Name`, `Source Styles`, and `Validated Styles`. As a user you will only be able to modify the first two fields.

- **Name**. A field to document the name of your stylesheet. We suggest something brief but descriptive of its purpose (e.g., Blockquote Spacing).
- **Source Styles**. The pane where you can add style rules to the various classes that make up your text. Rules should be in keeping with CSS standards.
- **Validated Styles**. After you save your stylesheet, this pane will populate with the translation of your rules specific to the platform. This output is read-only and cannot be modified by a user.

After your style rules have been saved the Text Sections dropdown will become available. This dropdown allows a user to assign the new stylesheet to either the entire text—by clicking `Add All`—or by selecting individual sections from the dropdown. Selected sections appear below and can be deselected by clicking the `x` beside their names. Only those sections selected will have the new stylesheet applied to them. Thus it is possible assign style adjustments to specific parts of a text that was uploaded using the [Manifest ingestion method](/docs/projects/preparing/index.html#manifest).

![Added Stylesheet](/docs/assets/projects/added-stylesheet.png)

### Reingest

If you have modified your source document—the document(s) you originally uploaded into the system—after it has already been ingested, you can use the reingestion process to replace the existing text with the new version.

This process is not versioning control but a means to address the need to make minor corrections and modifications to a text.

When you reingest a text, all the annotations, highlights, and resource placements that have been made will persist, unless such drastic changes were performed that the system can no longer identify their original anchors. In this unlikely case, annotations and highlights will be orphaned and no longer accessible.

To reingest a text, click on `Reingest` from the text landing page sidebar. You will see the same readout as when you initially ingested the text. Follow the same steps from the [`Adding Texts` section](/docs/projects/customizing/texts.html#adding-texts) above and when completed your text will have been replaced by the newer version.
