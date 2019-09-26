---
layout: page
title: Reading Interface
menus:
  reading:
    weight: 3
---

Once you login, you have the opportunity to read project texts with features dedicated to your own work. When you click into a text, you can read through from start to finish or navigate around the project or text using the reader menu bar:

![Full Reader Menu](/docs/assets/reading/reader-menu-full.png)

<a name="menu"></a>
## Menu

You can use the Menu dropdown to return to the project homepage, the full library of projects, or see those projects you are following.

![Reader Menu](/docs/assets/reading/reader-menu.png)

<a name="contents"></a>
## Contents

The top Contents button will drop down the text's table of contents for review, if one has been crafted for the text. Clicking the Contents button again will close the menu, allowing readers to review the contents without losing your place on the page.

![Contents Menu](/docs/assets/reading/contents-drop.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
The Contents menu is populated from the <code>toc.ncx</code> or <code>tox.xhtml</code> files in an EPUB (versions 2 and 3, respectively). For all other formats (Google Doc, HTML, Markdown, Word, and LaTeX) that are ingested using the <a href="/docs/projects/preparing/index.html#manifest">manifest strategy</a>, the dropdown will be structured according to the associated <a href="/docs/projects/preparing/index.html#yml">YAML file</a>. Texts that are ingested individually using the <a href="/docs/projects/preparing/index.html#document">document strategy</a> will not have an associated contents list.
</div>

<a name="title-bar"></a>
## Title Bar

The title bar alternates display of the title of the text as a whole (e.g., a book title) and the title of the active text section (e.g., a chapter title) for documents that are structured (EPUBs and [Manifest uploads](/docs/projects/preparing/index.html#manifest)). When a single document is ingested alone, Manifold will assume the document title to be both the title as a whole and the text section title.

![Title Bar](/docs/assets/reading/title-bar.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
See the <a href="/docs/projects/preparing/index.html">Preparing Texts section</a> for how to adjust what is displayed in the Title Bar.
</div>

<a name="tools"></a>
## Reader Tools

You can also navigate and adjust the look of the reading interface itself. Beside your personal account icon in the top right of the menu, you will see four icons: a notepad, an eye denoting visibility, `Aa` for appearance, and a spyglass for search:

![Reader Tools](/docs/assets/reading/reader-tools.png)

<a name="notepad"></a>
### Notepad

The notepad displays a list of all the highlights and annotations you've made to a text—along with the reading group which they are associated—in one place, allowing you to select them and be taken directly to the section of text in question. You have the option to view only annotations or highlights by checking the appropriate box.

If you click `See All` a new modal display will overlay your screen showing the entirety of your annotations and highlights, instead of the brief snippets provided in the dropdown.

![Notepad](/docs/assets/reading/notepad.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. Reader comments are not collected in this dropdown, whether they are responses to another reader's annotation or to a comment thread grown around a resource.
</div>

<a name="visibility"></a>
### Visibility Menu

The eye icon opens the visibility menu and allows you to selectively reveal or hide highlights, annotations, resources, and reading group engagements. 

![Visibility](/docs/assets/reading/visibility.png)

<a name="appearance"></a>
### Appearance

The `Aa` takes you to a menu of formatting options to adjust how the text shows in the reader. You may enlarge the text, choose serif or sans serif font, invert the color (black on white or white on black text), and increase or decrease the margins.

<a name="search"></a>
### Search

The spyglass opens a search bar that allows you to search within the chapter, text, or project for words or passages of interest.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
Projects in Draft status are not indexed by Manifold's search engine, Elasticsearch. As such any searches performed on a Draft project won't return any results.
</div>

## Text Menus
When logged into Manifold, you have a number of note-taking options within a text, each of which are considered in their own respective sections, as follows: When you use your cursor to select the text you wish you to engage with, a menu will appear asking if you wish to [Share](/docs/reading/sharing.html), associate a [Resource](/docs/reading/placing.html) with, [Annotate](/docs/reading/annotating.html), or [Highlight](/docs/reading/highlighting.html) the selected passage.

![Text Menu](/docs/assets/reading/text-menu.png)
