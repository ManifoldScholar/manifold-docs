---
layout: page
title: General
menus:
  projects_customizing:
    weight: 1
---
The General sidebar provides controls for the most top-level elements for how a project is registered and displayed across the system.

## General Attributes

![General Attributes](/docs/assets/projects/general-attributes.png)

### Title

Use this field to update the project title, which displays on the project library and landing pages, as well as associated navigation menus. This field cannot be left empty.

### Subtitle

Use this field to add or update the project subtitle, which displays alongside the primary title. This field is not required.

### Publication Date

A publication date is required by the system to [generate citations](/docs/reading/sharing.html). The date input here refers to the project as a whole (versus individual texts contained within the project) and will be superseded by a publication date associated with specific texts).

### Slug

A URL slug describes the exact address of a project on a Manifold instance. In the following example, `the-lab-book` is the slug for a project of the same name on the University of Minnesota Press's instance. The system will automatically create a slug for each new project based on the project title. You can use this field you can adjust the slug as needed.

```html
https://manifold.umn.edu/project/the-lab-book
```

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. Adjusting the project slug will affect the URLs for resources that are a part of the project. Manifold will automatically resolve these for links within the system, but if you have shared a URL to a resource outside of Manifold it will need to be updated; otherwise, readers clicking the old link will be directed to a 404 Error Page.
</div>

<a name="thumbnail"></a>

### Project Thumbnail

This table allows you to modify or customize the avatar representing the project, which displays in the library on the landing page. If no custom avatar has been added to the system, the default icon—made up of eye glasses, a dialog bubble, and a pencil—shows in the left panel.

You can adjust the color of the default icon by selecting from one of the six preset options in the middle panel labelled `Default`.

You can also upload (as a JPEG, TIFF, GIF, or PNG) a new avatar using the right panel labeled `Custom`. All custom uploads should be no less than 400px along their shortest dimension.

Note that even if you add a book cover to display in the project's [hero block](/docs/projects/customizing/layout.html), you will also need to add it here as a custom image for the cover to show in library views.

## Visibility

![Visibility](/docs/assets/projects/visibility.png)

<a name="draft-mode"></a>

### Draft Mode

For use when wanting to load and edit a project and its materials before publishing it for a broad readership. When toggled on, projects are only visible to users logged in with Administrator, Editor, or Marketeer roles—and to Project Creators on projects where they have `Can Modify Project` permissions. New projects are set to Draft Mode by default, and Draft status is denoted in the project library, as well as on the project landing page.

When a project is in Draft Mode, users who have permissions to view the project may annotate, highlight, and even share texts that are part of the project. Links shared on social media will only work for those who also have permission to access the project and are logged in. All annotations, comments, and highlights will persist with the project's text when Draft Mode is toggled off.

Determining when drafts are made public falls to the discretion of publishers.

<a name="featured"></a>

### Featured

Featured projects take pride of place on the home page in a section of the library all of their own. Only four projects display in this section at a time. If more than four projects are toggled to be featured, only the four most recent will show. By default, new projects are *not* set to be featured.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. If <a href="/docs/projects/collections.html">Project Collections</a> are being employed, the Featured Projects blade will not appear. But projects marked as being Featured can be sorted into a Smart Collection. See the <a href="/docs/projects/collections.html#smart-collections">Collections</a> section for more.
</div>

<a name="finished"></a>

### Finished

The Finished toggle is a means to indicate that a project is no longer actively iterating. When toggled on, Manifold will show the project's published date rather than its last updated date in lists. When the switch is off, Manifold will show when the project was last updated.

![Finished](/docs/assets/projects/finished.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. If a project is toggled to Finished and no publication date is set, in list views no date of any kind will appear.<br/><br/>
<img src="/docs/assets/projects/nopub.png" alt="nopub">
</div>

<a name="standalone"></a>

### Standalone Mode

Standalone Mode renders Manifold projects as distinct microsites. The standard Manifold landing page that showcases [collections of projects](/docs/projects/collections.html) or a publisher's entire library of project offerings is not always appropriate or useful. In situations where an instance only has a handful of projects or when a publisher wants to incorporate Manifold as part of their existing web presence, Standalone Mode can be employed as a solution.

Any Manifold project can be rendered in standalone mode or in library mode. Using the dropdown, users can configure the most appropriate rendering for a project:

- **Disabled**. If standalone mode is `Disabled`, the project can never be viewed in standalone mode. This is the default setting for new projects. 
- **Enabled**. If standalone mode is `Enabled`, the user must come to that project with the following suffix appended to the URL for standalone presentation; otherwise users will encounter the default library view of the project: `?mode=standalone`. This is useful for publishers who want to present a project as standalone when directed from a specific location (e.g., a publisher's or author's website), while allowing the same project to be viewed in library mode for those arriving to it from other locations.
- **Enforced**. If standalone mode is `Enforced`, that project can only be viewed in standalone mode regardless of from where a user is coming to the project. Additionally, projects that are enforcing standalone mode are removed from the projects page library and the landing page, in cases where the instance isn't displaying project collections.

When a project is offered in standalone mode,

- the library header is replaced with a more minimal standalone header (for those with [Administrator credentials](/docs/projects/accounts/users.html), see the Header Bar options on the [Theme Settings page](/docs/customizing/settings.html#instance-header) to enable and customize the header),

<figure>
  <img src="/docs/assets/projects/library.png" alt="Library Bar" style="margin-bottom: 1em;">
  <img src="/docs/assets/projects/standalone.png" alt="Standalone Bar">
  <figcaption><em>Above</em>, the standard Manifold library header; <em>below</em>, the standalone bar, which serves as a branding element as well as a clickable link.</figcaption>
</figure>

- on the project home page the standalone header appears on scroll and persists the project's title and subtitle—and, like the header bar, serves as a clickable link to provide readers a means to return to the project landing page as they explore subpages within the project.

<figure>
  <img src="/docs/assets/projects/standalone-scroll.png" alt="Standalone Scroll">
  <figcaption>Here the user has scrolled down past the hero block (containing the project description) to a text block, and the header, including the project title and subtitle has followed down the page. In this example, the header color setting was configured for dark mode.
  </figcaption>
</figure>

- the standalone header will respect whether the project hero is set to light or dark mode,
- search in the project is scoped to the project,
- the reader menu only includes a link to the project, and

<figure>
  <img src="/docs/assets/projects/reader-menu.png" alt="Default Reader Menu" style="max-height:5vw; margin-right:.5em;">
  <img src="/docs/assets/projects/standalone-menu.png" alt="Standalone Reader Menu" style="max-height:2.5vw;">
  <figcaption><em>Left</em>, the standard Manifold library navigation; <em>right</em>, the navigation in standalone mode, which is scoped down to only include project-level navigation.</figcaption>
</figure>

- project subpages for individual resources or resource collections show the standalone header with no breadcrumbs.

These settings work in conjunction with the header bar configurations, which can be adjusted on a project-by-project basis or generally across an entire instance.

See the [Header Bar section](/docs/projects/customizing/general.html#header-bar) below to adjust an individual project's header bar text and link URL. Those with [Administrator credentials](/docs/projects/accounts/users.html) can modify the header bar globally across the instance—its text, link URL, color, and behavior—on the [Theme Settings page](/docs/customizing/settings.html#instance-header).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<ul><li>Regardless of how many projects are set for Standalone Mode, the standard Manifold landing page will still exist. Further, if a reader navigates to an instance's landing page (by happenstance or by entering it into the URL bar) they will be able to see all the projects on the instance—excepting those in <a href="/docs/projects/customizing/general.html#draft-mode">Draft Mode</a> or those where Standalone Mode is enforced (so long as they aren't also part of a project collection).</li>
<li>If you enable or enforce standalone mode on a project but don't see a header bar on your project, check the <a href="/docs/customizing/settings.html#instance-header">Theme Settings page</a> to see that Header Bar Display Mode is not set to <code>Disabled</code>. N.B., only users with <a href="/docs/projects/accounts/users.html">Administrator credentials</a> can access the Theme Settings page.</li>
</ul>
</div>

## Taxonomy

![Taxonomy](/docs/assets/projects/taxonomy.png)

<a name="subjects"></a>

### Subjects

Subjects provide a means to categorize projects, which readers can use as filters to sort through the collection of projects on the landing page (see [Projects Library](/docs/reading/library.html)).

Subjects can only be created by users with Administrator roles. All other roles that can access the backend can only select from the list of subjects already loaded into the system. To associate a subject with a project, simply begin typing in this field, and the system will populate those subjects in the system that most closely resemble what you are typing. Once accepted the Subject name will appear beneath the `Add a Subject` field alongside any others that have been associated with the project.

To learn more about how to create Subjects as an Administrator, see the [Subjects section](/docs/customizing/settings.html#subjects). And to see how Subjects can be used to curate Smart Collections, visit the [Project Collections](/docs/projects/collections.html#smart-collections) page.

<a name="tags"></a>

### Tags

Unlike Subjects, Tags can be created by any user who has permission to modify a project and can be used to add further richness to the existing subject classification. Like Subjects, the Tag field provides a helper so that as you begin typing any similar tags that have already been created on your instance will be revealed.

To see how Tags can be used to curate Smart Collections, visit the [Project Collections](/docs/projects/collections.html#smart-collections) page.

<a name="header-bar"></a>

## Header Bar
The instance header bar is a thin, customizable branding element that serves as a means to contextualize a Manifold page for readers in relation to a larger mission. The header bar options on this page function as project-specific overrides to the global header bar configurations set by those with [Administrator credentials](/docs/projects/accounts/users.html) on the [Theme Settings page](/docs/customizing/settings.html#instance-header).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. The header bar color and display parameters are only configurable for users with Administrator credentials from the Theme Settings page.
</div>

![Header Bar](/docs/assets/projects/header-bar.png)

### Header Bar Text

Text entered here appears in the header bar for the specific project being editing, superseding the header bar text entered by those with [Administrator credentials](/docs/projects/accounts/users.html) on the [Theme Settings page](/docs/customizing/settings.html#instance-header).

![Header Bar Text](/docs/assets/projects/header-bar-text.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. This field is <em>not</em> Markdown enabled and only accepts one line of text.
</div>

### Header Bar URL

The header bar functions as a clickable link. The URL entered here will serve as the link target to any user who clicks on the header bar. As with the Header Bar Text above, the value entered here will supersede the input from the [Theme Settings page](/docs/customizing/settings.html#instance-header).