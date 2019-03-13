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
* [Managing a Text's Details](/docs/projects/customizing/texts.html#managing-texts)

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

By default new categories are empty. When you move a project into a custom category the reader will overlay the bottom of the text with a yellow ribbon the category name. Here we have an extract from the text titled *For Thought in the Act*, which we can see from the shots above is in the `Supporting Texts` category and displays a ribbon to the same effect:

![Title Ribbon](/docs/assets/projects/title-ribbon.png)

You can rename a category by clicking on the `Edit` button to the right of it's name or delete the category entirely by clicking on the `X` to the right of the `Edit` button.

Texts that are in a custom category that is being deleted will return to `Uncategorized` after the deletion has been confirmed.

To change the order in which the custom categories appear, click on the horizontal grab bars to the right of the category name, which you can use to drag and drop the category to the desired placement.

<a name="managing-texts"></a>
## Managing a Text's Details

After a text has been ingested, you can modify its metadata, which Maker records are associated with it, update how its constituent elements render in the reader, and also re-ingest its source file to accommodate any minor changes that may have been required after the initial ingest.

To edit a text, click on it's name or the `Edit` button, right of the name, in the category listing. From there you will be taken to the text landing page with its own unique sidebar:

![Text Landing](/docs/assets/projects/text-landing.png)

<a name="managing-texts-general"></a>
### General

When you access the text landing page in the backend, you'll arrive first on the text's `General` panel where you can adjust its `Title`, `Subtitle`, its status as `Published` or not, the `Publication Date`, `Description`, and the `Section Label` that displays in the reader.

The content entered in the `Title` and `Description` fields are included when a URL from the text is shared with another platform capable of conveying that information to its readers (e.g., Facebook).

Likewise, the text's title and subtile, its makers (authors, contributors), and description can be toggled to be shown on the project landing page in a text content block. To learn more about all the customizations possible for display elements in a text block, see the [Layout](/docs/projects/customizing/layout.html) section.

`Section Label` refers to the navigation header that appears at the bottom of a unit of text. By default the header reads `Next Chapter`. Below that header is the title of the next unit of text. If your text is broken up by another conventions (e.g., article, part), you can specify that here to better orient readers to the nature of the content.

### People

Through the `People` sidebar element you can add, remove, and modify Maker records associated with the text just as you could for the project generally. For details on that process, which is the same here, see the [People section](/docs/projects/customizing/people.html).

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
