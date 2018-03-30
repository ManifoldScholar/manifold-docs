---
layout: page
title: Texts
menus:
  projects_customizing:
    weight: 5
---

The Texts panel will be one that users will often interact with, as this is the spot where texts are added, categorized, updated, and set as the published version of record.

For new projects or projects that haven't yet ingested a text, the panel is composed of two buttons (`Add a new text` and `Create a new category`) and two category sections with `Published` and `Uncategorized` for headings, respectively.

![Texts Panel](/docs/assets/projects/texts-panel.png)

When texts are added to a project they will be oriented the `Uncategorized` section. New, custom, category sections can be added as required to suit the needs of a project.

This section is portioned along the following themes:

* [Adding Texts to Projects](#adding-texts)
* [Grouping Texts by Category](#grouping-texts)
* [Published Texts](#published-texts)
* [Managing a Text's Details](#managing-texts)

<a name="adding-texts"></a>
## Adding Texts to Projects

To begin the process of adding a text to a project, click on the `Add a new text` button. When you do the system will overlay your screen with a modal menu labelled `Text Format`, which serves as a prompt to you for which file type you are going to load into the system. Your options are

``` txt
EPUB V2 or V3
Markdown Document(s)
Google Doc
HTML Document
```

Before adding a text, please read through the [Preparing Texts](/docs/projects/preparing.html) section to ensure your materials are in the necessary state for ingestion.

### File Selection

Select the radio button for the file type you want to upload and then click `Continue`—or if you want to back away from an upload at this time, you can click the `Cancel` button.

#### EPUB V2 or V3
After you select the EPUB format, a new modal will show up giving you the option to upload your EPUB file from your machine. You can either drag and drop the file into the area with the cloud icon, or you can click `Upload a File`, which will open a file directory window, allowing you to navigate to the file's location on your machine. When you have done so the cloud icon will change to a document icon and the filename will appear beneath it.

Alternatively, if your EPUB is already being hosted remotely, you can designate the URL where Manifold can fetch it. For instance, the following is the URL to the Standard Ebooks Project's copy of Edwin A. Abbott's *Flatland*:

``` txt
https://standardebooks.org/ebooks/edwin-a-abbott/flatland/dist/edwin-a-abbott_flatland.epub
```

Note that the link is not to the page where you can download the file, but instead a direct link to the file itself.

Once you have selected a file or designated a URL, the `Continue` button will change from gray to green. Click it and a new modal will appear to analyze your file.

<small>
If you click the button and nothing happens, double check to make sure you have selected a valid file or URL.
</small>

#### Markdown Document(s)

After you select the Markdown option, a new modal will open where you can either drag and drop your zipped Markdown collection into the area with the cloud icon, or you can click `Upload a File`, which will open a file directory window, allowing you to navigate to the file's location on your machine. When you have done so the cloud icon will change to a document icon and the filename will appear beneath it. Click the green `Continue` button in the lower right and proceed the file analysis step.

#### Google Doc

After you select Google Doc, a modal will appear prompting you to enter the URL of your document. Paste the shareable link (secured from URL bar of your browser or from the Share menu in Google) into the modal and click `Continue` and proceed to the file analysis step.

#### HTML Document

After you select the HTML option, a new modal will open where you can either drag and drop your zipped HTML collection into the area with the cloud icon, or you can click `Upload a File`, which will open a file directory window, allowing you to navigate to the file's location on your machine. When you have done so the cloud icon will change to a document icon and the filename will appear beneath it. Click the green `Continue` button in the lower right and proceed the file analysis step.

### File Analysis

The file analysis modal will review the file you've suggested for ingestion, with the following output:

``` txt
Current State: Sleeping
Strategy: None
Text ID: This ingestion will create a new text
Log: Connecting to Manifold websocket...
```

Click on the green `Analyze` button in the lower right to proceed. A process will run silently behind view, and the readout will change to the following:

``` txt
Current State: Analyzed
Strategy: {file type selected earlier}
Text ID: This ingestion will create a new text
Log: Connecting to Manifold websocket...
     Ingesting "{filename}"
     Ingestor::Strategy::{file type}::Strategy can ingest? true
     Using strategy Ingestor::Strategy::{file type}::Strategy
```

If you the second to last line finishes with `Strategy can ingest? true` you are ready to proceed. Click on the green `Ingest` button in the lower right.

If the `Ingest` button does not turn green, there is a problem, and you can use the text in `Log` field when [reporting the error](/docs/index.html).

### File Ingestion

On the same modal your file way analyzed, Manifold will now ingest it. The `Current State` field will read `Processing`, and the log will stream text describing what the system is doing. If everything goes correctly, when the process is finished the `Current State` should say `Finished`, a hexadecimal value should be listed under the `Text ID`, and the last line of the log should read `Ingestion Complete`.

If you get anything different from the log, [reach out for support](/docs/index.html).

Otherwise, you can click on the green `Complete` button, and you will now see the text you ingested in the `Uncategorized` section of the panel.

Congratulations! Your text is now in Manifold!

<a name="grouping-texts"></a>
## Grouping Texts by Category

Categories are a means to group and label texts in the system. By default there are two fixed categories: `Published` and `Uncategorized`.

To move a text from one category to another, simply click on the up/down arrows to the right of the category name.

A text in the `Published` category receives distinct treatment considered in the following section, `Published Texts`.

### Uncategorized

`Uncategorized` serves as the staging ground for all texts that are initially ingested. This category does not have a limit on the number of texts it can hold, nor are texts in this collection overlaid with a title ribbon.

### Custom Categories

If your project requires grouping texts in distinct clusters, or if you simply wish to indicate what state the text being presented is in (e.g., First Draft, Peer-Reviewed, etc.) you can create a custom category that will support those ends.

To create a custom category click on the `Create a new category` button, and a modal will appear asking you to name it. Click `Create Category`, and the new section will appear in both the front- and backend interfaces:

![Backend Categories](/docs/assets/projects/backend-categories.png)

![Frontend Categories](/docs/assets/projects/frontend-categories.png)

By default new categories are empty. When you move a project into a custom category the reader will overlay the bottom of the text with a yellow ribbon the category name. Here we have *War of the Worlds*, which we can see from the shots above is in the `Markdown Sample` category and displays a ribbon to the same effect:

![Title Ribbon](/docs/assets/projects/title-ribbon.png)

You can rename a category by clicking on the `Edit` button to the right of it's name or delete the category entirely by clicking on the `X` to the right of the `Edit` button.

Texts that are in a custom category that is being deleted will return to `Uncategorized` after the deletion has been confirmed.

To change the order in which the custom categories appear, click on the up/down arrows to the right of the category name.

<a name="published-texts"></a>
## Published Texts

Moving a text from `Uncategorized` or a custom category to `Published`, indicates the text in question represent the project's version or record: the definitive published text.

Because of its nature, this category can only accept one text at a time.

When you move a text into this section, the [cover image](/docs/projects/customizing/appearance.html) will automatically show on the banner image, along with a `Start Reading` reading button and, if the document contains internal structuring, a link to view the titles contents.

![Published Hero](/docs/assets/projects/published-hero.png)

If the title is for sale, then a link to the online shopping cart and the purchase price will also appear beneath the cover if set in the [Appearance section](/docs/projects/customizing/appearance.html).

<small>
**Note**. For [open-access or enhanced projects](/docs/publishing/project_types.html), there is no question which document is considered the version of record. But for iterative projects there may be more of a discussion. See the [Workflow section](/docs/publishing/workflow.html) for some thoughts that may better orient those internal discussions.
</small>


<a name="managing-texts"></a>
## Managing a Text's Details

After a text has been ingested, you can modify its metadata, which Maker records are associated with it, update how its constituent elements render in the reader, and also re-ingest its source file to accommodate any minor changes that may have been required after the initial ingest.

To edit a text, click on it's name or the `Edit` button, right of the name, in the category listing. From there you will be taken to the text landing page:

![Text Landing](/docs/assets/projects/text-landing.png)

### Modifying a Text's Metadata

When you access the text landing page in the backend, you'll arrive first on the text's `General` panel where you can adjust it's `Title`, `Publication Date`, `Description`, and the `Section Label` that displays in the reader.

The content entered in the `Title` and `Description` fields are included when a URL from the text is shared with another platform capable of conveying that information to its readers (e.g., Facebook).

`Section Label` refers to the navigation header that appear at the bottom of a unit of text. By default the header reads `Next Chapter`. Below the header is the name of the next unit of text. If your text is broken up by another conventions (e.g., article, part), you can specify that here to better orient readers to the nature of the content.

### Associating Maker Records with a Text

Through the `People` sidebar element you can add, remove, and modify Maker records associated with the text just as you could for the project generally. For details on that process, which is the same here, see the [People section](people.html).

### Modifying an Ingested Text's Style Sheet

The `Styles` sidebar menu allows users who are versed in CSS (cascading stylesheets) to modify how certain elements in their text render in the reader by adjusting an existing—or associating a new—CSS file with the text.

Stylesheets are applied to texts in the order listed under the `Stylesheet` heading and are classified as either `Ingested` or `User`:

![Styles](/docs/assets/projects/styles.png)

`Ingested` stylesheets are those that were part of the source document imported into Manifold (with some modification) during the text ingestion. We do not recommend you modify `Ingested` stylesheets on the platform: if you happen to reingest the text, any changes you have made will be overridden by the reingest process.

"User" stylesheets are those that have been created by a user after the initial ingestion and will not be overridden by a text reingestion.

To override styles in the source document, create a new stylesheet and move it to the bottom of the list by clicking the `Add a New Stylesheet` button. You'll be taken to a new screen that is split into three sections: `Name`, `Source Styles`, and `Validated Styles`. As a user you will only be able to modify the first two fields.

`Name`, provides a space for you to name your stylesheet.

`Source Styles` is the pane where you can add style rules to the various classes that make up your text. Rules should be in keeping with CSS standards.

After you save your stylesheet, the `Validated Styles` pane will populate with the translation of your rules specific to the platform. This output is read-only and cannot be modified by a user.

### Reingesting a Text

If you have modified your source document—the document(s) you originally uploaded into the system—after it has already been ingested, you can use the reingestion process to replace the existing text with the new version.

This process is not versioning control but a means to address the need to make minor corrections and modifications to a text.

When you reingest a text, all the annotations, highlights, and resource placements that have been made will persist, unless such drastic changes were performed that the system can no longer identify their original anchors. In this unlikely case, annotations and highlights will be orphaned and no longer accessible.

To reingest a text, click on `Reingest` from the text landing page sidebar. You will see the same readout as when you initially ingested the text. Follow the same steps from the [`Adding Texts` section](#adding-texts) above and when completed your text will have been replaced by the newer version. 
