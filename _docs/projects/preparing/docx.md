---
layout: page
title: Word
menus:
  preparing-texts:
    weight: 5
---

Word documents saved in the DOCX format can be ingested directly into Manifold and support the following paragraph and character styles.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. Simply changing the file extension from <code>.doc</code> to <code>.docx</code> is not a valid way to get a DOCX file. Word files originally saved in the DOC format need to be resaved as DOCX to work on Manifold.
</div>

<a name="docx-para"></a>
## Supported Paragraph Styles

Apply paragraph styles in Word by using the [Style pane in the Ribbon](https://support.office.com/en-us/article/Apply-a-style-to-text-in-Word-F8B96097-4D25-4FAC-8200-6139C8093109) or shortcuts on the Ribbon itself. The following links redirect to the appropriate instruction page on Microsoft's Word support site.

- [Title](https://support.office.com/en-us/article/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109?wt.mc_id=fsn_word_format_text)
    - Only one per document. The content of the paragraph applied with this style will appear in the reader's [title bar](/docs/reading/interface.html#title-bar).
- [Subtitle](https://support.office.com/en-us/article/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109?wt.mc_id=fsn_word_format_text)
    - Only one per document
- [Author](https://support.office.com/en-us/article/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109?wt.mc_id=fsn_word_format_text)
- [Date](https://support.office.com/en-us/article/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109?wt.mc_id=fsn_word_format_text)
- [Headings 1–6](https://support.office.com/en-us/article/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109?wt.mc_id=fsn_word_format_text)
    - When individual Word files are ingested into the Manifold Reader, the system will look for text that a user has applied heading formatting to and include those elements as navigable items on the Contents dropdown. It is not presently possible to map specific headings from individual Word files into the reader's Contents dropdown when loading them as part of a [Manifest](/docs/projects/preparing/index.html#manifest).
- Body Text Paragraphs  
  *The following styles will be transformed into standard body paragraphs:*
    - [Normal](https://support.office.com/en-us/article/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109?wt.mc_id=fsn_word_format_text)
        - This is the default paragraph style. If you don't apply any styles, all your paragraphs will come in as standard body text.
    - [Body Text](https://support.office.com/en-us/article/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109?wt.mc_id=fsn_word_format_text)
    - [Abstract](https://support.office.com/en-us/article/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109?wt.mc_id=fsn_word_format_text)
    - [First Paragraph](https://support.office.com/en-us/article/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109?wt.mc_id=fsn_word_format_text)
    - [Image Caption](https://support.office.com/en-us/article/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109?wt.mc_id=fsn_word_format_text)
    - [Table Caption](https://support.office.com/en-us/article/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109?wt.mc_id=fsn_word_format_text)
- [Block Text](https://support.office.com/en-us/article/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109?wt.mc_id=fsn_word_format_text0)
    - Also called Blockquote
- List Paragraph
    - [Bulleted list](https://support.office.com/en-us/article/Create-a-bulleted-or-numbered-list-9FF81241-58A8-4D88-8D8C-ACAB3006A23E)
    - [Numbered list](https://support.office.com/en-us/article/Create-a-bulleted-or-numbered-list-9FF81241-58A8-4D88-8D8C-ACAB3006A23E)
- [Footnote Text](https://support.office.com/en-us/article/Insert-footnotes-and-endnotes-61f3fb1a-4717-414c-9a8f-015a5f3ff4cb)
    - Used in conjunction with linked footnote references
    - Will be transformed to endnote text
- [Endnote Text](https://support.office.com/en-us/article/Insert-footnotes-and-endnotes-61f3fb1a-4717-414c-9a8f-015a5f3ff4cb)
    - Used in conjunction with linked endnote references

There is also support for **basic** tables where the first row will be counted as column heads. Subsequent rows will appear as standard table data:

![Word Table](/docs/assets/projects/word-table.png)

For more on how to insert a table into Word, [see the Microsoft Word support site](https://support.office.com/en-us/article/Insert-a-table-A138F745-73EF-4879-B99A-2F3D38BE612A).

<a name="docx-char"></a>
## Supported Character Styles

Apply the following character styles by selecting text and clicking on the corresponding button in the Ribbon. Each of the links below redirect to the appropriate instruction page on Microsoft's Word support site.

- [Italics](https://support.office.com/en-us/article/add-and-format-text-2e76a31b-a6d6-4b4e-95c2-fb780e3ac8d3?wt.mc_id=fsn_word_format_text)
- [Bold](https://support.office.com/en-us/article/add-and-format-text-2e76a31b-a6d6-4b4e-95c2-fb780e3ac8d3?wt.mc_id=fsn_word_format_text)
- [Underline](https://support.office.com/en-us/article/add-and-format-text-2e76a31b-a6d6-4b4e-95c2-fb780e3ac8d3?wt.mc_id=fsn_word_format_text)
- [Bold/Italics](https://support.office.com/en-us/article/add-and-format-text-2e76a31b-a6d6-4b4e-95c2-fb780e3ac8d3?wt.mc_id=fsn_word_format_text)
- [Bold/Underline](https://support.office.com/en-us/article/add-and-format-text-2e76a31b-a6d6-4b4e-95c2-fb780e3ac8d3?wt.mc_id=fsn_word_format_text)
- [Italics/Underline](https://support.office.com/en-us/article/add-and-format-text-2e76a31b-a6d6-4b4e-95c2-fb780e3ac8d3?wt.mc_id=fsn_word_format_text)
- [Superscript](https://support.office.com/en-us/article/add-and-format-text-2e76a31b-a6d6-4b4e-95c2-fb780e3ac8d3?wt.mc_id=fsn_word_format_text)
- [Subscript](https://support.office.com/en-us/article/add-and-format-text-2e76a31b-a6d6-4b4e-95c2-fb780e3ac8d3?wt.mc_id=fsn_word_format_text)
- [Strikethrough](https://support.office.com/en-us/article/add-and-format-text-2e76a31b-a6d6-4b4e-95c2-fb780e3ac8d3?wt.mc_id=fsn_word_format_text)
- [Verbatim Char](https://support.office.com/en-us/article/apply-styles-f8b96097-4d25-4fac-8200-6139c8093109?wt.mc_id=fsn_word_format_text)
- [Hyperlink](https://support.office.com/en-us/article/insert-hyperlinks-2eb1d51f-a897-4d73-ba76-c550f005e5ef?wt.mc_id=fsn_word_write_and_edit)
- [Footnote Reference](https://support.office.com/en-us/article/Insert-footnotes-and-endnotes-61f3fb1a-4717-414c-9a8f-015a5f3ff4cb)
- [Endnote Reference](https://support.office.com/en-us/article/Insert-footnotes-and-endnotes-61f3fb1a-4717-414c-9a8f-015a5f3ff4cb)

<a name="docx-un"></a>
## Unsupported Stylings and Features

- Font
- Font size
- Colored text
- Highlighting
- Tabbed indentation
    - Tabs will be scrubbed from the file during ingestion and any intended indent will be lost.
- Specialized ruler indentation
    - All first-line indentations applied with the ruler or in the Paragraph Settings will normalize to the default 0.5” indent.
- Inline images (which appear within the flow of a sentence)
- Linked data relying on field codes

<a name="docx-embed"></a>
## Embedding Images (Pictures)

Manifold will accept into its reader what Word refers to as “Pictures.” These can be static images or animated GIFs that are included in source Word files. While Word supports many different arrangement options for the placement of such art, we suggest the most minimal of styling, setting your image on its own line with text flowing above and below it.

If you have multiple images that you want to appear side-by-side, it is better to first make a single image out of them using Photoshop or Pixlr.

For detailed instructions on how to add an image into Word, see the [Microsoft Support site](https://www.microsoft.com/en-gb/videoplayer/embed/RE1T9z8?pid=ocpVideo0-innerdiv-oneplayer&postJsllMsg=true&maskLevel=20&market=en-gb).
