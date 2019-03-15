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
- [Metadata](/docs/projects/customizing/layout.html#)
- [Recent Activity](/docs/projects/customizing/layout.html#)
- [Resources](/docs/projects/customizing/layout.html#)
- [Table of Contents](/docs/projects/customizing/layout.html#)
- [Texts](/docs/projects/customizing/layout.html#)

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

Recommended length is three to five sentences. If your project requires further description, we suggest adding a [Markdown block](/docs/projects/customizing/layout.html#md-block) to the project.

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

The interface is very plastic, so you can drag/drop elements from one quadrant (e.g., left-side link) to another (right-side button), and the system will change the link/button behavior accordingly.

When creating a new button or link a drawer will slide open from the right and prompt users for a title, a type, and then what the button/link should relate to. Because button and links are oriented around their type or action, we will consider them along those lines:

<a name="actionsLink"></a>
#### Link

Links point to any content, either hosted on Manifold or remotely, that can be described with a URL. Two examples: a link can be used to create a button that reads "Buy Now" and links to the publisher's shopping cart. Or a link could be used to show a link to related content on the author's personal website.

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

<a name="contentBlocks"></a>
## Content Blocks

Content blocks are situated below the Hero block. None of them are required, and they can be arranged as best suits the project. There can be multiple Markdown, Table of Contents, and Texts blocks within a project. The Metadata, Recent Activity, and Resources blocks can only appear once.

<a name="mdBlock"></a>
### Markdown

The Markdown Block allows editors to create sections of markdown content on a project page. The block can be assigned a gray background to help it stand out from other content on the page. Possible uses of this block include adding descriptive text about the project or supplemental textual content.

![Markdown Block Configuration in the Backend](/docs/assets/projects/mdBack.png)
![Markdown Block Rendered in Frontend](/docs/assets/projects/mdFront.png)

### Metadata

The Metadata Block will render metadata about the project in three columns. Project metadata is managed on the “metadata” tab of the project record. This block will not render if no metadata has been added to a project.

### Texts

The Text Block lists some or all texts associated with the project. The texts that are included in the list can be filtered to only include texts from one or more categories. The block can be configured to include or exclude author names, subtitles, dates, descriptions, and cover images in the output. The list can also be configured to group texts by category.

### Recent Activity

The Recent Activity block lists the last six activity records for the project. Activity records can be managed on the project’s “activity” tab. If a project contains more than six activity records, users will be shown a button that links to the full, paginated list of activity on a separate screen.

### Resources

The Resources Block renders a teaser of the ten most recently updated resources on a project, accompanied by a link to the resource library for that project as well as the total number of resources on the project. If the “Show All Collections” switch is enabled, this block will also list each of the project’s resource collections. The block can be configured to only show specific collections if desired. If the project has collections, the block will also render a link to the “all collections” view for the project.

### Table of Contents

The Table of Contents Block renders the table of contents for a specific text in the project. This block is especially useful for projects that only have one text, in which cases it’s generally more useful to render a TOC than to render a list of project texts. The editor must specify which text the Table of Contents should draw from, and the depth field can be used to limit the depth of the table of contents (the default limit is six).
