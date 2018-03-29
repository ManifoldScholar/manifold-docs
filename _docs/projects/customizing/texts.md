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

When texts are added to a project they will be oriented in one of the category sections. And new category sections can be added as required to suit the needs of a project.

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
After you select the EPUB format, a new modal will show up giving you the option to upload your EPUB file from your machine. You can either drag and drop the file into the area with the cloud icon, or you can click on `Upload a File`, which will open a file directory window, allowing you to navigate to the file's location on your machine.

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



#### Google Doc



#### HTML Document


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

## Grouping Texts by Category

## Published Texts

## Managing a Text's Details

### Modifying a Text's Metadata

### Associating Maker Records with a Text

### Modifying a Text's Style

### Reingesting a Text
