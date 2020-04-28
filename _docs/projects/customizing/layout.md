---
layout: page
title: Layout
menus:
  projects_customizing:
    weight: 2
---

Settings for a project's visual appearance and overall user experience live within the Layout submenu.

Project landing pages are highly customizable and modular to allow publishers the means to present their materials in whatever way best suits their content. This level of control is achieved through the use of “project blocks”—distinct containers for specific content elements that span horizontally across the visual space of the page.

There are seven different kinds of blocks available in the system:

- [Hero](/docs/projects/customizing/layout.html#heroBlock)
- [Markdown](/docs/projects/customizing/layout.html#mdBlock)
- [Metadata](/docs/projects/customizing/layout.html#metaBlock)
- [Recent Activity](/docs/projects/customizing/layout.html#activityBlock)
- [Resources](/docs/projects/customizing/layout.html#resourceBlock)
- [Table of Contents](/docs/projects/customizing/layout.html#tocBlock)
- [Texts](/docs/projects/customizing/layout.html#textsBlock)

![Layout Map](/docs/assets/projects/layout-map.jpg)

The Hero block is required of every project and is anchored immediately below the menu bar. All other content blocks are optional and can be arranged as desired below the hero block. In the example above, the publisher has set up their project so that the project landing page is displaying Markdown, Resources, and Metadata blocks.

This section will first consider all the options available within the Hero block before moving onto options for each of the content blocks.

<a name="heroBlock"></a>
## Hero Block

The hero block can be as basic or as involved as a project requires. Some projects may only require a title, description, and cover image. Others may want to use buttons and/or links to reference related material. For iterative projects, the scope and complexity of this block will likely change as content is added to the project.

Controls to adjust the appearance of the Hero block are contained within the Description + Images, Calls-to-Action, and Social Links submenus. To adjust settings within those sections, click the pencil outline/edit button on the right.

![Hero Block Controls](/docs/assets/projects/layout-hero.png)

<a name="descriptionImages"></a>
### Description + Images

When opting to edit this section, a drawer from the right will open in which you can adjust the following settings: Dark Mode, Background Image, Cover Image, and Image Credits.

![Hero Description and Images configutation](/docs/assets/projects/hero-di.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. You must click the Save button at the bottom of the drawer for your changes to take effect.
</div>

<a name="descriptionDark"></a>
#### Dark Mode

This toggle adjusts the background color of the blade. The default is light gray. When Dark Mode is toggled on the color changes to slate gray.

If a [Background Image](/docs/projects/customizing/layout.html#backImage) is added to this blade, the image will supersede this setting.

<a name="description"></a>
#### Description

This field allows users to add or edit a project description that will render in the hero block. If any descriptive text was included when the project was first created, it will appear here.

Recommended length is three to five sentences. If your project requires further description, we suggest adding a [Markdown block](/docs/projects/customizing/layout.html#mdBlock) to the project.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. Text entered in this field can be formatted using <a href="https://help.github.com/articles/basic-writing-and-formatting-syntax/">basic Markdown syntax</a>.
</div>

<a name="backImage"></a>
#### Background Image

The Background Image displays behind the content of the Hero blade as a means to enhance the visual identity of a project. If a Background Image is loaded, the image will supersede the setting of the [Dark Mode toggle](/docs/projects/customizing/layout.html#descriptionDark).

Your image should be sized to 1280 × 800 pixels. Images not submitted at those dimensions will be resized automatically and cropped along the bottom edge.

Acceptable formats for upload are GIF, JPEG, JPG, and PNG.

When a project is shared socially, the hero image is included as part of that transaction so that other platforms—Twitter, Facebook—can render the look and feel of the source material from Manifold on their platforms.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Warning</strong>. Be sure you have the necessary permissions to upload your hero image to the system. You can include any required credit lines in the <a href="/docs/projects/customizing/layout.html#imageCredits">Image Credits field</a>
</div>

<a name="coverImage"></a>
#### Cover Image

The cover image appears over the right side of the hero block and can be used to show a book cover associated with the project, or a custom cover created specifically for electronic use or use on Manifold.

The system will automatically resize your image to fit the available space, but it need not be cropped and can retain its original ratio. For best results, the smallest side shouldn't be any less than 600 pixels.

Acceptable formats for upload are GIF, JPEG, JPG, and PNG.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. If no cover is loaded, as is the case with new projects, the system will automatically display the <a href="/docs/projects/customizing/general.html#thumbnail">project thumbnail</a> in the space where the cover would be.
</div>

<a name="imageCredits"></a>
#### Image Credits

If your background or cover image have credit lines associated with them, they can be entered into this field. The credit lines will appear beneath the cover image.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Notes</strong>. Text entered in this field can be formatted using <a href="https://help.github.com/articles/basic-writing-and-formatting-syntax/">basic Markdown syntax</a>.
<br><br>
To add a manual line break, leave two spaces at the end of the line you are breaking before the return.
<br><br>
If you need to add a blank space, use two consecutive <a href="https://www.w3schools.com/tags/tag_br.asp">break tags</a> between the lines you are separating.
</div>

<a name="callActions"></a>
### Calls-to-Action

Here users can add buttons or links to the hero block that act as shortcuts to project materials on Manifold or related content hosted remotely.

![Calls-to-Action](/docs/assets/projects/callsAction.png)

In the example above there are three buttons on the left, two on the right, and one link for each side. In the backend, the configuration to achieve that looks like this:

![Calls-to-Action in the Backend](/docs/assets/projects/callsActionBack.png)

To create a new button or link, click one of the four respective buttons labeled, "Add Button [or Link] to Left [or Right] side."

The interface is very plastic, so you can drag/drop elements from one column (e.g., left-side link) to another (right-side button), and the system will change the link/button behavior accordingly.

When creating a new button or link a drawer will slide open from the right and prompt users for a title, a type, and then what the button/link should relate to. Because button and links are oriented around their type or action, we will consider them along those lines in the following sections.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<p><strong>Note</strong>. Calls-to-action are contextual relative to whether or not a project is configured for <a href="/docs/projects/customizing/access.html#entitlements">restricted access</a>.</p>
<p><code>Start Reading</code> and <code>Table of Contents</code> calls-to-action types will always appear in the hero, though only those with the appropriate credentials will be able to follow them to their intended target.</p>
<p><code>Link</code> and <code>Download</code> calls-to-action have visibility settings that allow a publisher to choose whether or not they always appear or appear to either authorized or unauthorized users. Thus it is possible to configure a project to showcase one set of calls to actions for authorized users and a different set for unauthorized users.</p>
</div>

<a name="actionsLink"></a>

#### Link

Links point to any content, either hosted on Manifold or remotely, that can be described with a URL. Two examples: a link can be used to create a button that reads "Buy Now" and links to the publisher's shopping cart. Or a link could be used to show a link to related content on the author's personal website.

The `Visibility` field in the Link configuration drawer allows a publisher to determine when this element will appear in the hero: always, only for authorized users, or only for unauthorized users.

For example, a subscription link would be useful for unauthorized users to gain access to the project, while for authorized users that would not be of interest. Likewise links to specific materials may only be of use after a user has gained access to a project. See the [Access section](/docs/projects/customizing/access.html#entitlements") for more.

<a name="actionsRead"></a>
#### Start Reading

The Start Reading action allows a publisher to create a button/link that will direct readers to the opening page of a specific text loaded to the project.

Publishers can select which text they want to point to by selecting it from the "Link to Text" dropdown in the Call-to-Action drawer.

![Select Text](/docs/assets/projects/startReading.png)

Manifold will use the metadata within the selected text to determine the opening page.

- For EPUB3, the opening page is set by the `toc.xhtml` file, within the Guide section. The file associated with the "bodymatter" attribute will be the landing page in the reader.

```html
<li>
  <a epub:type="bodymatter" href="fileName.xhtml">Title Page</a>
</li>
```

- For EPUB2, the opening page is described in the `content.opf` file enclosed in `<guide>` tags. The file associated with the entry containing the "text" attribute is where the reader will open.

```html
<reference type="text" title="Title Page" href="fileName.xhtml"/>
```

- For [Manifest ingests](/docs/projects/preparing/index.html#manifest), the reader will open to the section that is associated with `start_section: true` in the [`manifest.yml` file](/docs/projects/preparing/index.html#yml).
- Texts loaded as standalone documents will open to the first page.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. You can create more than one Start Reading link/button if you have multiple texts in your project.
</div>

<a name="actionsTOC"></a>
#### Table of Contents

A Table of Contents link/button opens a specific text to the section that the file's internal metadata describes as being its table of contents.

- For EPUB3, the contents section is set in the `toc.xhtml` file, within the Guide section. The file associated with the "toc" attribute will be the section that the Manifold reader will open.

```html
<li>
  <a epub:type="toc" href="fileName.xhtml">Contents</a>
</li>
```

- For EPUB2, the contents section is set in the `content.opf` file enclosed in `<guide>` tags. The file associated with the entry containing the "toc" attribute will where the reader will open.

```html
<reference type="toc" title="Table of Contents"  href="fileName.xhtml"/>
```

- Selecting the Table of Contents action for [Manifest ingests](/docs/projects/preparing/index.html#manifest) and texts loaded as standalone documents will be no different than selecting the Start Reading action. This is because these formats do not inherently contain a text section (not to be confused with navigation intended for a reading system) made specifically as a table of contents that you would expect in a print book.

<a name="actionsDown"></a>
#### Download

The Download action allows publishers the means to load a file into the system that readers can download to their device. This can be useful if, say, the publisher wants to provide their readers with an ebook associated with the project or an archive of all the source files that were ingested into the Manifold reader. It could also be used to share collections of data or specific materials that require pride of place on the project page.

The `Visibility` field in the Download configuration drawer allows a publisher to determine when this element will appear in the hero: always, only for authorized users, or only for unauthorized users.

For example, a subscription link would be useful for unauthorized users to gain access to the project, while for authorized users that would not be of interest. Likewise links to specific materials may only be of use after a user has gained access to a project. See the [Access section](/docs/projects/customizing/access.html#entitlements") for more.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. There are no restrictions on the kind of file uploaded into this field.
</div>

<a name="actionsSocial"></a>
### Social Links

The Social Links submenu allows a publisher to associate a Twitter hashtag and social account handles for Twitter, Facebook, and Instagram with a project. These will appear as active, clickable links below the project description.

![Social Links](/docs/assets/projects/socialLinks.png)

The social icons will open a new tab and take readers to the associated accounts. The hashtag will redirect to the Twitter page for that hashtag.

When inputing values into the system, users do not need to type the hash sign (`#`) in the Hashtag field; the system will automatically include that when text is added to the field.

The different social networks require their handles to be formatted as follows:

- Twitter is not case sensitive and agnostic about whether there's an ampersand or not. All of the following will work as expected: `@uminnpress`, `uminnpress`, `@UMinnPress`, and `UMinnPress`.
- Facebook usernames should be listed without an ampersand and match the case of the username as it appears on Facebook. Because the username on Facebook is denoted as `UMinnPress` that is the only acceptable means to input the handle into Manifold.
- Instagram usernames are not case sensitive but should *not* include an ampersand. Thus `uminnpress` and `UMinnPress` will work but `@uminnpress` and `@UMinnPress` will not.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. Adding a hashtag to this section is only a suggestion to your readers to include it in their Tweets about the project; it will not automatically begin pulling Tweets into the project's [Recent Activity block](/docs/projects/customizing/activity.html). Those configurations live in the <a href="/docs/projects/customizing/social.html">Social Integrations menu.</a>
</div>

<a name="contentBlocks"></a>
## Content Blocks

Content blocks are situated below the Hero block. None of them are required, and they can be arranged and rearranged using the drag-and-drop interface in the Manifold backend to meet the needs of the project.

For those projects that evolve, new blocks can be added and existing ones can be hidden or deleted.

Projects can contain multiple Markdown, Table of Contents, and Texts blocks, while the Metadata, Recent Activity, and Resources blocks can only appear once.

To add a block to your project's layout, either drag and drop the block's tile from the Blocks section to the Layout section or click on the Add Block Button on the right of the tile, in the shape of an encircled plus sign.

![Adding Blocks to the Backend](/docs/assets/projects/addingBlocks.png)

If a block is no longer necessary, they can be hidden or deleted. Hiding a block retains the block and its content but no longer surfaces it on the frontend for readers to see. Deleting a block permanently removes the block and its content from your project.

The hide and delete buttons appear in two spaces, on the Layout page and in a block's edit drawer. The hide button appears as an open eye icon, and the delete button as a trashcan. When hidden a block eye icon will appear with a slash through it.

![Backend Block Interface](/docs/assets/projects/blockBack.png)

![Edit Block Interface](/docs/assets/projects/blockEdit.png)

To unhind a block, click on the crossed-out eye icon. If you delete a block and later want it back, it will need to be recreated from scratch.

Edit an existing block by clicking on the pencil icon to the right of the block's name. Doing so will open a drawer from the right of the screen giving you access to the editable block content.

<a name="mdBlock"></a>
### Markdown

The Markdown Block allows users to create sections of markdown content on a project page. The block can be assigned a gray background to help it stand out from other content on the page. Possible uses of this block include adding descriptive text about the project, supplemental textual content, or speaking to a project's grant funding or relation to upcoming events, like conferences or author appearances.

![Markdown Block Rendered in Frontend](/docs/assets/projects/mdFront.png)

There are two sections to consider when editing a Markdown block: Body and Style.

#### Body

The body section is where the content of the block is input. The field accepts plain text encoded with [basic Markdown syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/).

Presently there are no means to add images to this block in the backend by selecting a file from your system. But if an image is remotely hosted, it can be referenced and displayed in this block by using the following coding:

```html
<img src="https://imageName.jpg" width="100%" height="auto">
```

The width and height components allow the image to scale responsively, so it renders appropriately to the size of the reader's screen.

#### Style

In the Style section, users can select how the block should appear, with a white or gray background. The Normal and Shaded radio buttons correspond to white and gray, respectively.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. A project can have multiple Markdown blocks if the material warrants.
</div>

<a name="metaBlock"></a>
### Metadata

The Metadata Block will render metadata about the project in three columns. Project metadata is managed in the [Metadata menu](/docs/projects/customizing/metadata.html) of the project record and cannot be directly modified in this view. Instead here users can choose to reveal a project's metadata on the landing page and where it is situated among any other content blocks.

![Metadata Block](/docs/assets/projects/metaBlock.png)

This block will not appear if no metadata has been added to a project.

<a name="activityBlock"></a>
### Recent Activity

The Recent Activity block lists the last six activity records for the project. Activities show as tiles indicating when Tweets, Texts, or Resources are added to a project.

![Recent Activity Block](/docs/assets/projects/recentActivity.png)

Activity records can be managed in the project’s [Activity menu](/docs/projects/customizing/activity.html). If a project contains more than six activity records, users will be shown a button that links to the full, paginated list of activity on a separate screen.

<a name="resourceBlock"></a>
### Resources

The Resources Block renders a teaser of the ten most recently updated resources on a project, accompanied by a link to the resource library for the project. Individual resources are managed in the [Resource menu](/docs/projects/customizing/resources.html).

![Resource Block](/docs/assets/projects/resourceBlock.png)

Users have the option to customize the title of the block. By default it will read as "Resources" on the project page.

![Resource Block Backend Interface](/docs/assets/projects/resourceBack.png)

If the “Show All Collections” switch is enabled, this block will also list each of the project’s resource collections. When toggled off, users can use the Select Collection dropdown to show only specific collections. If the project has collections, the block will also render a link to the “all collections” view for the project. Resource collections are managed in the [Resource Collection menu](/docs/projects/customizing/collections.html).

<a name="tocBlock"></a>
### Table of Contents

The Table of Contents Block renders the table of contents for a specific text in the project. This block is especially useful for projects that only have one text, in which case it’s generally more appropriate to render a TOC than to render a list of project texts in a [Texts Block](/docs/projects/customizing/layout.html#textsBlock).

![TOC Block](/docs/assets/projects/tocBlock.png)

Manifold populates this block using the source document's navigational table of contents or header structure, as described here:

|  Upload Format  | Navigational File |
| :-------------: | :---------------: |
|      EPUB3      |    `tox.xhtml`    |
|      EPUB2      |     `tox.ncx`     |
| Manifest Ingest |  `contents.yml`   |
|      DOCX       | Header structure  |
|   Google Doc    | Header structure  |
|    Markdown     | Header structure  |
|      HTML       | Header structure  |

In other words, the Contents dropdown in the Manifold reader for the selected text will mirror the readout for a Table of Contents block pointing to that same text.

When editing this block in the backend, an editor will be confronted with the following options:

#### Title

The Title field allows users to customize the name of the block. By default it will render as “Table of Contents.”

#### Text

This dropdown lists all the texts loaded to the project. The TOC of the selected text will render in the block. Even if there is only one text loaded to the project, the editor still needs to actively select it from the dropdown.

#### Depth

For tables of content that have nested entries, editors can decide to which depth of nesting the system should render in the block. The default is six.

#### Show Text Title?

Toggling this field on will add the title of the selected text beneath the title of the block.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. A project can have multiple Table of Contents blocks, each pointing to different texts loaded to the project.
</div>

<a name="textsBlock"></a>
### Texts

The Text Block lists some or all texts associated with the project. The texts that are included in the list can be filtered to only include texts from one or more categories. The block can be configured to include or exclude author names, subtitles, dates, descriptions, and cover images in the output. The list can also be configured to group texts by category.

![Text Block Frontend](/docs/assets/projects/textsBlock.png)

An editor can modify the following settings for a Text block in the backend. Depending on which settings are toggled on/off, different elements within the block may move to better serve visual comprehension of the page.

#### Title

The title of the block as a whole can be customized by an editor. If left blank the text block will default to having “Texts” as its title.

#### Description

The text-block description provides a space to contextual the texts being viewed in the block and will be of particular use when more than one text block is being employed, helping distinguish their contents from one another.

#### Show Author Names?

When it's important to surface a text's author, especially for journals, contributed volumes or OER and course packets, toggle this slide to its active state. The names here will mirror those shown on the text's [People menu](/docs/projects/customizing/texts.html#textsPeople).

#### Show Subtitles?

If this slider is toggled on, any subtitle associated with a text, as shown in the text's [General menu](/docs/projects/customizing/texts.html#managing-texts-general) will appear to the right of the main title.

#### Show Dates?

A text block can display the date when a particular text was added to the project or last updated on the system. This will be useful in the classroom setting and when working on projects collaboratively. The load/update date is not an editable field and is not to be confused with a [text's publication date](/docs/projects/customizing/texts.html#textsMeta).

#### Show Uncategorized Texts?

This field leans on how the [texts are grouped](/docs/projects/customizing/texts.html#grouping-texts). In the text block, uncategorized texts are treated differently from those that are categorized. When this slider is toggled active, uncategorized texts will appear beneath a header reading “Uncategorized,” regardless of whether you have the “Show Category Labels” toggle active.

It is worth stressing that regardless of how many uncategorized texts you have—or if you only have uncategorized texts in your project—if this slider is toggled off, your text block will show as empty. Likewise, regardless of the settings that affect other categories, they will not affect this toggle. Thus if this is toggled on, and no text categories are selected from the “Add a Category” dropdown to show, uncategorized texts will still render in the block.

#### Show Descriptions?

When toggled on, the Show Descriptions slider will pull the text's description as entered in the text's [General menu](/docs/projects/customizing/texts.html#managing-texts-general) and include it beneath its title listing in the block. These will be especially useful for journals or edited collections.

#### Show Cover Images?

For texts loaded in the EPUB format, this toggle allows an editor to control whether the icon for the text in this block list view is the default Manifold icon for texts (a stack of papers) or if the EPUB cover renders. When toggled active, Manifold will show the cover as defined in the EPUB.

The cover will only be shown if the cover is accurately described as such in EPUB files:

- For EPUB3, the cover is set by the `toc.xhtml` file, within the Guide section. The file associated with the "cover" attribute will be where Manifold secures the cover for this view.

```html
<li>
  <a epub:type="cover" href="fileName.xhtml">Cover</a>
</li>
```

- For EPUB2, the cover is described in the `content.opf` file enclosed in `<guide>` tags. The file associated with the entry containing the "cover" attribute is where Manifold will look for the cover.

```html
<reference type="cover" title="Cover"  href="fileName.xhtml"/>
```

#### Show Category Labels?

This field depends on how a project's [texts are grouped](/docs/projects/customizing/texts.html#grouping-texts). When toggled active, texts that are grouped within a category (not counting those grouped as “Uncategorized”) will appear in the text block along with their category name.

This field can be further modified by the Categories dropdown.

#### Categories

This field works in tandem with how a project's [texts are grouped](/docs/projects/customizing/texts.html#grouping-texts). Using the “Add a Category” dropdown, an editor can choose which custom text categories render in the block. Thus an editor can employ more than one text block, each showing only certain categories.

If not categories are selected and “Show Uncategorized Texts” is toggled on, any uncategorized texts will still appear as Manifold treat uncategorized texts differently from those with custom groupings.

![Text Block Backend Interface](/docs/assets/projects/textBlockBack.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. A project can have multiple Texts blocks, allowing a publisher the means to showcase a project's textual materials in contextually appropriate ways.
</div>
