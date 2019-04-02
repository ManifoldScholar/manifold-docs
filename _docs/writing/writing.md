---
layout: page
title: Writing for the Web
menus:
  writing:
    weight: 3
---

This section describes the best practices for composing and formatting your manuscript for both Manifold and traditional print publication.

Where appropriate in the sections that follow, there will be examples of the three file types that can be ingested directly into Manifold: Markdown, HTML, and Google Docs. Consideration will also be provided for Microsoft Word, though at present Word is not directly supported by the system (see note below). The final two sections, “Paths to Success” and “Things to Avoid” contain an array of quick tips for use throughout the writing process.

*Note*. Word documents first need to be transformed to one of the three acceptable formats by way of an Export/Save As or through a tool such as PanDoc or Mammoth in order for them to be loaded into the platform’s Reader.

## Core Tenets

### Characters, Paragraphs, and Wrapping

Text documents are generally described in terms of two different classes of elements: characters and paragraphs.

Characters are the individual letters, numbers, spaces, and symbols that form words when grouped together.

Paragraphs are all the characters between the start of a line and the hard return (made by hitting the Return or Enter key) at its end. Paragraphs can be blank lines (where no characters exist between the start of the line and the hard return), they can be one letter, one word, or they can be made up of many sentences. They are titles, bylines, headings. Each new line of verse is a distinct paragraph. Each time the Return key is struck a new paragraph is begun.

Word processing apps, by default, wrap paragraphs for reading convenience and to evoke a designed page. Instead of having characters continue marching off the screen on one line, they flow beneath one another forming more and more lines as you type: they wrap.

<a name="structureVrendering"></a>
### Structure and Rendering

Structure and rendering are concepts that apply equally to both characters and paragraphs.

Structure conveys the semantic meaning of paragraphs and characters, describing the function of those elements to interoperable systems like typesetting programs or web browsers—allowing those systems to interpret the material appropriately for discoverability, accessibility, and general functionality.

Rendering is an aspect of that general functionality, specifically one of appearance, wherein distinct structures can be set to appear in a consistent manner (e.g., Level 1 headings are set at *this* size, in *that* font, with *x* amount of space above or below them).

When you structure a paragraph or characters in a word processing app—usually by way of “Style” pane or menu—the text element in question transforms into an different size or color and sometimes appears with a new spacing scheme. This new appearance is arbitrary and simply confirms to the writer that structure has been applied.

As you are preparing your text documents for your publisher you only need to concern yourself with the structure of your document. How the document looks—how it’s rendered—at this stage is only of use in discerning one element from another and does not reflect how the material will be rendered in later formats.

<a name="word"></a>
#### Microsoft Word

For a description of how to apply styles (that impart structure) in Microsoft Word click [here](https://support.office.com/en-us/article/Apply-a-style-to-text-in-Word-F8B96097-4D25-4FAC-8200-6139C8093109).

<a name="gdocs"></a>
#### Google Docs

The process for applying structure to paragraphs in Google Documents is described here:
*	Select the text you want to change.
*	On the document’s menu bar, click Format and then Paragraph styles.
*	Click a text style:
	*	Normal text
	*	Title
	*	Subtitle
	*	Heading 1-6
*	Click `Apply text style`.

*Note*. It is not possible to apply structure styles to characters in Google docs.

<a name="structuring"></a>
## Structuring in Practice

### Paragraph Level

#### Headings

##### Levels

In Word and Google documents, style your headings as `Heading 1`, `Heading 2`, or `Heading 3`. Consult with your publisher if you believe your material requires more than three levels of headings.

_Note_. The number described in the heading title (e.g., the `1` in `Heading 1`) refers to the level of heading, not the order in which that heading appears in the document.

In Markdown use one to three hash marks (`#`) followed by a space to denote the level of heading:

``` md
# This Is a Level 1 Heading
## This Is a Level 2 Heading
### This Is a Level 3 Heading
```

In HTML, enclose your headings with `<h1>` to `<h3>` tags.

``` html
<h1>This Is a Level 1 Heading</h1>
<h2>This Is a Level 2 Heading</h2>
<h3>This Is a Level 3 Heading</h3>
```

##### Nesting

With the exception of headings announcing abstracts, notes and bibliographies, acknowledgments, and author biography sections, headings should not appear in isolation. For each heading you create, there should be at least one other member of that heading level nested in that same section. For example:

``` md
Level 1 heading
Body text

	Level 2 heading
	Body text

	Level 2 heading
	Body text

	Level 2 heading
	Body text

Level 1 head
Body text
```

Here, since there is a Level 1 heading there has to be a second section with a Level 1 heading. And if one of those Level 1 sections is to be broken up, it needs to be broken up into at least two named sections. In this case we have three headings on Level 2 that are a part of the first Level 1 heading.

If nesting your headings by this logic is not feasible, consider abandoning headings in favor of spaced section breaks, made by leaving a blank line between one paragraph and the next, or through the use of sections announced by symbols, where an asterisk (usually centered) is left between one paragraph and the next.

#### Block Quotes

Block quotes (also called extracts) should be set off from body text in Word and Google Docs with blank lines above and below the quote and indented from the left using the app’s Increase Indent feature. Do not structure block quotes with the style feature in either Word or Google Docs. If your block quote is made up of more than one paragraph, you can use the ruler to add a first line indents where appropriate.

In Markdown, begin paragraphs of the block quote using the `>` marker followed by a space:

``` md
Body text paragraph.

> This is a block quote paragraph.

Body text paragraph.
```

If you are writing in HTML, use the `<blockquote>` tag to see off your quotes:

``` html
<p>Body text paragraph.</p>

<blockquote>
This is a block quote paragraph.
<blockquote>

<p>Body text paragraph.</p>
```

Treat the following elements as if they were block quotes. Your publisher will adjust them as needed to meet any of their own specific requirements:

*	Epigraphs
	*	Attributions should appear on their own line and be preceded by an em dash (e.g., —Author, *Title of Work*)
*	Dialogue
*	Equations and Mathematical Notation
	*	Consult with your publisher about how best to craft equations for your text. Strategies can vary wildly from one house to another.
*	Verse and Lyrics
	*	If these elements require inconsistent spacing, consult with your publisher; it can be difficult to electronically replicate the nuance of some verse.
*	Letters
	*	Avoid the inclination to replicate the formatting of the source document; save for very specialized studies, the content is all that matters.

#### Tables

In Word and Google Docs, compose tables using the app’s native table features.

In Markdown, create tables by separating cell content with a pipe (`|`). Headers should be set off by a row of at least three hyphens per column. Cells can vary in width and do not need to be perfectly aligned within columns.

``` markdown
#### Table 1. Title Structured as a Level 4 Heading

| First Header  | Second Header | Third Header<sup>a</sup> |
| ------------- | ------------- | ------------------------ |
| Content Cell  | Content Cell  | Content Cell             |
| Content Cell  | Content Cell  | Content Cell             |

<sup>a</sup>Table notes should not be linked but manually coded.
```
In HTML, create tables using the `<table>`, `<caption>` (used for table titles), `<tr>` (table row), `<th>` (table header), and `<td>` (table data) tags. Tables syntax describes rows, left to right, moving from the top of the table downward:

``` html
<table>
<caption>Table 2. Title Structured Using the Caption Tags</caption>
  <tr>
    <th>Row 1: Left Column Header</th>
    <th>Row 1: Center Column Header</th>
    <th>Row 1: Right Column Header</th>
  </tr>
  <tr>
    <td>Row 2: Left Column Data</td>
    <td>Row 2: Center Column Data</td>
    <td>Row 2: Right Column Data<sup>a</sup></td>
  </tr>
  <tr>
    <td>Row 3: Left Column Data</td>
    <td>Row 3: Center Column Data</td>
    <td>Row 3: Right Column Data</td>
  </tr>
</table>

<sup>a</sup>Table notes should not be linked but manually added.
```

Click [here](https://www.w3schools.com/html/html_tables.asp) to review more complex examples at w3school.com.

##### Titles

Table titles should be structured as a Level 4 heading in all formats except for HTML; in HTML use the caption tag, which should appear immediately after the open table tag, to describe the table title.

##### Placement

Tables should be placed specifically in the body of the document, not collected at the end or in a separate file.

##### Annotating Tables

Do *not* link or include table notes with the flow of the general article notes. In Word and Google Docs, avoid using the Insert Note feature. In Markdown and HTML, do not craft note markers as links, but manually style markers as superscript.

##### Tables vs. Images

Refrain from preparing or placing tabular materials as images. All tables should be editable.

##### Tables vs. Graphs and Charts

Graphs and charts are considered figures and should be prepared as such.

#### Lists

In Word and Google Docs use the Numbered or Bulleted list feature to structure paragraphs as list elements. If your list is made up of more than one level, use the Increase Indent feature to push list elements to the next level.

In Markdown, style your lists using asterisks followed by tabs. Adding tabs before the asterisk increases the level of the list item:

``` md
#### List Title

*	Level 1 list paragraph
*	Level 1 list paragraph
	*	Level 2 list paragraph (one tab before the asterisk)
		*	Level 3 list paragraph (two tabs before the asterisk)
```

For HTML, use ordered (`<ol>`) or unordered (`<ul>`) tags in conjunction with the list tag (`<li>`) to describe a list:

``` html
<h4>List Title</h4>
<ul>
  <li>Level 1 list paragraph</li>
  <li>Level 1 list paragraph
    <ul>
      <li>Level 2 list paragraph</li>
      <li>Level 2 list paragraph
        <ul>
          <li>Level 3 list paragraph</li>
          <li>Level 3 list paragraph</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Level 1 list paragraph</li>
</ul>
```

##### Titles

Structure an opening list title as a Level 4 heading.

##### Side-by-Side Lists

If you would like two or more vertical lists to appear side by side, have the lists follow one after the other and make note in the file of how they should appear like this:

``` md
<!-- PUBLISHER: These lists should appear side by side. -->
```

##### Consistency

Consolidate various kinds of lists to one standard—all lists are numbered or all are bulleted. If your lists require separate treatment, please make that known like this:

``` md
<!-- PUBLISHER: This list should appear with numbers. -->
```

#### Notes and Scholarly Apparatus

In Word and Google Docs, notes—excepting those for tables—should be inserted using the app’s Insert Footnote (or Endnote) feature. The resulting notes are considered “embedded” or “linked.”

If you are composing in Markdown, notes should be styled as follows:

``` md
This sentence is annotated.[^1]

# Notes

[^1]: The note text appears here.
```

If you are composing in HTML, please consult with your editor for preferred note syntax.

##### Placement

Embedded notes will appear at the bottom of the page they are referenced or as the very last element in a file. That is preferred; you do not need to gather all your notes in one file or adjust their placement in the document. In Markdown and HTML, notes should be placed at the end of the file but before the reference section.

##### Deletion and Unlinking

To delete an embedded note, simply delete the associated note marker in the text. Avoid dis-embedding or inserting new notes manually outside the confines of the Insert Endnote feature.

### Character Level

There is presently no consensus on character level structuring among publishers. The following principles are modest suggestions that will serve as a good starting point and which can be easily mapped to other solutions. Consult your publisher for their specifications

#### Italics

Use italics for emphasis and to designate the names of titles of works, names of ships and other craft, species names, and legal cases. Italics treatment is also appropriate for words or short phrases that are not of the same language of the main text and when signaling out terms used as terms (e.g., the term *neurobiotics* was first used in . . .).

For Word and Google Docs, use the Italics feature to transform characters and words into italics. In Markdown, enclose terms that should italicized in asterisks like `*this*`. The following structure, which better differentiates the function of the elements, can be applied in HTML absent specific recommendations by your publisher:

``` html
<em>emphasized terms</em>
<i class="title">Titles of Works, Ships, Species, Legal Cases</i>
<i class="term">Species names and foreign terms</i>
<cite>Titles of Works in Notes and References</cite>
```

#### Hyperlinks and URLs

For text that should appear as clickable, live networked hyperlinks, please use your program’s Insert Hyperlink feature. If you are composing in Markdown or HTML, please style as `[text link](http://www.text-link-url.edu)` or `<a href="http://www.text-link-url.edu">text link</a>` respectively.

#### Super- and Subscript

Use the super- or subscript feature in Word and Google Docs to style text above or below the standard character line. In Markdown and HTML use the `<sup>` and `<sub>` tags for super- and subscript, respectively.

#### Bold, Strikethrough, Highlighting, and Colored Text

Avoid using bold, strikethrough, highlighting, and colored text. If you feel any of these treatments are necessary for your work, please consult with your publisher.

#### Special Characters

Special characters that can’t easily be found in your operating system’s character map should be inserted using Unicode. For more information on available Unicode characters and how best to insert them for your system, please consult [FileFormat.Info](http://www.fileformat.info/index.htm). Mac and Windows operating systems have different means of inserting Unicode characters. Consult your publisher if you need assistance.

If your text requires combining diacritic marks or a specific font not native to your operating system, please consult your editor on how best to proceed. Solutions are specific to each project.

### Right-to-Left Text

If your material requires right-to-left text to appear inline with left-to-right text or as whole paragraphs, please consult your publisher on how best to proceed. Solutions are specific to each publisher.

<a name="success"></a>
## Paths to Success

*	**Simple**. Word processors like Microsoft Word and Google Docs are powerful apps that grant the user a host of tools to create rich documents. Often those tools are not interoperable with the transformations your publisher will need to perform on your files. Where possible, limit yourself to the following:
	*	*Document Styles*. Use custom or the default set of Styles (e.g. Title, Heading 1) to describe an element’s structure.
	*	*Embedded Notes*. When annotating material in your document, use your program’s built-in Notes tool instead of attempting to do so manually.
		*	**Caution**. (1) Do *not* use *both* endnotes and footnotes; instead choose the one the suits the bulk of your material best. Consult your publisher if you expect this to be a problem. (2) Avoid using the built-in Notes tool when annotating tables; tables should be manually annotated.
	*	*Tables*. Craft tables using your program’s built in tool for that purpose. These should appear inline with your other text versus being saved apart in a separate table file or series of table files. Use tables sparingly; oftentimes data that is grouped into a table is equally, if not better, expressed through standard prose.
	*	*Lists*. Avoid trying to render lists in your manuscript as you want them to appear when published; instead provide instructions to your publisher in the file.
*	**Consistent**. Be mindful of making sure all like elements are treated the same way throughout. This applies to choices of structure (e.g., heading titles or spaced paragraphs, having epigraphs after no headings or all of them), language (length of heading titles, whether headings are numbered, capitalization decisions, if certain terms are italicized or placed in quotations), annotation style, everything.
*	**Predictable**. Review the structure of your material at large, making sure material is grouped similarly throughout and that headings appear on expected levels and are properly nested.

<a name="avoid"></a>
## Things to Avoid

*	Text boxes
*	Highlighting
*	Bold type
*	Strikethrough
*	Colored text
*	Word art
*	Running heads/feet
*	Background images
*	Using built-in hyphenation or justification tools
*	Manually inserting hyphens at the ends of lines
*	Adding pagination
*	Replicating a source document’s formatting
