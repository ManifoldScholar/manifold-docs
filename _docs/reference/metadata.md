---
layout: page
title: Metadata
menu:
  reference:
    weight: 1
---

Below is a comprehensive list of all metadata fields available to Resources on the Manifold platform. As of v0.3.0 these fields are only available to Admin users. In the Manifold 1.0.0, all fields will be editable by those with Author or Editor roles except those designated `AR`, which are locked to those with [Administrative Rights](glossary.md).

## File

### Filename

Name of the file, complete with extension (e.g, .docx, .pdf, .jpg).

### File Variant (AR)

If your resource was prepared for different environments (e.g., Mac and PC), note here the name complimentary filetype you prepared, complete with extension.

### Type (AR)

Resources can be categorized in the system to one of the following types:

*   Figure: Diagram
*   Figure: Chart/Graph
*   Figure: Map
*   Figure: Musical Example
*   Table
*   Video
*   Audio
*   Links
*   PDF
*   Document
*   File
*   Spreadsheet
*   Presentation
*   Interactive

Full descriptions for each of these are located in the [Resources](resources.md) section.

### Sub Type (AR)

An option specific to those with Administrative Rights, allowing the user to add specificity to how external videos are processed: external_video, embed, iframe.

### Print Intention

A dropdown allowing the user to select in which formats the resource is to appear: online only, print only, both online print.

### Figure Number

This field describes order and placement for Figures set to appear in the final text. As such, this is a plastic field that can be modified as those details come into focus as the project evolves.

## Rights and Usage

### Source

Name of the museum, archive, agency, publication, or individual that provided the original resource file.

### Creator

Person or entity credited with creation of the media (as opposed to the creator of the file).

### Copyright Status

Provides a dropdown to select how in the copyright spectrum the resource can be categorized: Status Unknown, Public Domain, Fair Use, In Copyright.

### Copyright Holder

Name of the institution, agency, or individual granting authority to reproduce the material; may be same as source or creator.

### License

Provides a means to document Creative Commons or other established standards-based license info (e.g. CC-BY 3.0).

### Permission Status

For those materials that require permission to reproduce (online _or_ in print), this field provides a mean to document what actions have been taken to secure the necessary rights: Obtained, Awaiting Response, No Action Taken, Not Required.

### Credit Line

The official language the rights grantor has requested to be associated with the resource.

### Restrictions

Describe any restrictions the grantor has placed on use of the material. Generally we require **world** rights **without** term limits for **both** print and electronic formats (as applicable).

### Skip (AR)

A dropdown for those with Administrative Rights, it allows resources that are loaded into the system to remain unpublished on the platform if the necessary rights have not yet been secured to do so.

### High Res (AR)

This field allows users with Administrative Rights to document the file name for any corresponding hi-res version of the resource. This field is associated with the next two `Allow High-Res Viewing` and `Allow High-Res Download`.

### Allow High-Res Viewing (AR)

For resources that have a high-res variant, this field allows users with Administrative Rights to enable the hi-res version to be displayed, if the right's grantor has allowed.

### Allow High-Res Download (AR)

For resources that have a high-res variant, this field allows users with Administrative Rights to enable the hi-res version to be downloaded, if the right's grantor has allowed.

### Print Color Solution (AR)

A field of those with Administrative Rights to document whether media that is part of the base text layer will receive a color treatment in any print edition of the work.

## Accessibility

### Title

The name of the media as designated by the creator or the name by which it is popularly known.

### Caption

This is the scholarly information or context that answers of the media, What does this mean? or What is of interest about this? This would mirror what would appear below the media if it were to appear in print.

### Description

This is an opportunity to translate the visual to the textual—a means to re-create the media in the mind's eye by way of a written description. What are the important elements of what is shown in the media?

### Alt-Text

Consider what the page or screen looks or sounds like if the media were absent. Avoiding redundancy with any caption, briefly describe what a replacement for the media would be. Limit: 150 characters (including spaces).

### Transcript

For media with audio content, please provide a transcript the includes speaker identification, sound effects, and music description, as applicable.

### Synchronized Subtitles

Synchronized subtitle (also known as `Captioning`) files contain both the text of what is said and time codes for when each line of text should be displayed. For video files hosted on Manifold or being streamed through a remote service, please prepare a caption file saved in the .srt or .sbv filetype and note that file's name here.

### Language (AR)

A field for those with Administrative Rights to document the primary language employed within the media for use in discoverability and networking.

### Country (AR)

A field for those with Administrative Rights to document the country that best describes where the particular dialect of the selected language is best associated.

### Translation

If the media in question is supplied in a language foreign to the intended audience, please save an appropriate translation in its own document and note the filename (with extension) here.

## Network

### Collection

If you want media to be grouped by theme or topic, this cell allows you to associate/create a collection name that can be associated with any other media that should be part of that collection. If media should be part of more than one collection, separate the names with a semicolon (e.g., Exploration;NASA).

### Keywords

Keywords or tags relate media to one another. Please tag your media as appropriate, separating terms using a semicolon.

## External Host Information

### Host Name

If your media is being embedded from another host, please name that service here in lowercase (e.g., youtube, vimeo).

### URL

Provide the shareable web address of the media to be embedded.

### File ID (AR)

This field describes the file id associated on the host platform with streamable media in question, usually a distinct set of numbers (or letters) within the URL, which those with Administrative Rights can input to ensure the media works as expected.
