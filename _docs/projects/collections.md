---
layout: page
title: Project Collections
menus:
  projects:
    weight: 3
---

Project Collections are a way to customize and control the way projects are displayed on the Manifold homepage. Following the Feature section, Collections displace a publisher's library of projects on the landing page in favor of “blades” or “blocks” of projects curated manually or algorithmically around specific subjects and tags. Thus, instead of showcasing a library of projects, ordered only by title, it is possible to portion out the Manifold landing page by theme, around specific events or conferences, current events, or as a means to suggest titles to readers they may not have otherwise considered to be of interest.

![Collection Blades](/docs/assets/projects/collection-blades.png)

Only those collections denoted in the backend to `Show on homepage` will appear on the Manifold landing page. There is no artificial limit to the number of collections that can appear on the homepage, but the more collections that appear, the longer a reader will need to scroll to review those projects to which you wish to draw attention. Conversely, if only one collection is marked to show on the homepage, only that collection will appear, followed by links to see projects on the instance or, for those who are logged in, a link to those projects that are being followed.

*All* collections marked as `Visible` in the backend, regardless of whether they are set to appear on the homepage, will appear on an instance's Project Collection page, accessible by clicking `See Project Collections` at the bottom of the Projects page. Collections that are not set to be visible will not appear on either the homepage or Project Collection page.

![Collections Page](/docs/assets/projects/collections-page.png)

<a name="new-collections"></a>
## Creating a New Project Collection

To create new or modify existing project collections, a user will need to log into the Manifold backend with Administrator, Editor, or Marketeer credentials. From the backend dashboard, navigate to the `Projects` menu and then select `Project Collections` from the submenu:

![Project Collections](/docs/assets/projects/proj-collections.png)

Below the sidebar of existing collections there will be a button to create a new collection. Once clicked a drawer will open from the right side of the screen allowing you to create either a Manual or Smart collection.

![Manual Collections](/docs/assets/projects/manual-collection.png)

<a name="manual-collections"></a>
### Manual Collections

Manual Collections allow a user to cherry-pick any project in the project library and add it to the collection.

#### Collection Title

The collection title appears at the top of the collection blade beside the collection icon. The input for this field is plain text. Formatting for things like bold, italic, or hyperlinks are not possible here for collection titles.

#### Description

The description field allows a user to orient the reader to the contents of the collection. This field accepts Markdown input, so limited text formatting is possible with bold, italic, and hyperlinks. The text from this field is rendered below the project title and above the first row of project thumbnails on the frontend.

#### Visible

The visible slider enables the user to create a collection and toggle whether or not readers can access it from the frontend. If toggled off, the collection won't appear on the homepage or on the Project Collections page. If toggled on the collection will appear only on the Project Collections page. See below for how to make a collection appear on the homepage.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. On the Project Collections page, only one row of projects will display before a link to view the full collection is provided. Each row can contain up to four projects.
</div>

#### Show on Homepage

This toggle allows users to showcase their collection on the instance's homepage, so long as it is also toggled to be visible. It is not possible to have a project collection appear only on the homepage and not on the Project Collection page.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. On the homepage, only two rows of projects will display before a link to view the full collection is provided. Each row can contain up to four projects.
</div>

#### Collection Icons

When a new collection is created a user must select one of the available icons to associate with it. It is not possible to customize or add new icons to the system at present. The collection icon will sit beside the collection title on the fronted.

![Collection Icons](/docs/assets/projects/collection-icons.png)

<a name="smart-collections"></a>
### Smart Collections

Smart collections allow users to set certain filters that, when they are satisfied by a project, allow Manifold to automatically include them in a collection. Presently the available filters are a project's status as being [Featured](/docs/projects/customizing/general.html#featured), as well as what [Subjects](/docs/projects/customizing/general.html#subjects) and [Tags](/docs/projects/customizing/general.html#tags) are associated with it.

![Smart Collections](/docs/assets/projects/smart-collection.png)

The fields required for a Manual Collection—Title, Description, Visible, and Show on Homepage—are likewise required for Smart Collections. However to properly calibrate a smart collection, the following fields are also required:

#### Projects Visible

This field expects numerical input and controls how many projects that meet the collection's filter criteria are displayed in the Smart Collection.

This works in conjunction with the collection's sorting preference—Newest, Recently Updated, Title A–Z, or Title Z–A—which is available to define once the collection has been created. (For more on how to adjust the sort preference, see the [Ordering Collection](/docs/projects/collections.html#ordering) section below.)

Thus if the collection's filters match twenty projects and a value of `10` is set in this field, only the ten newest *or* the ten most recently updated *or* the first or last ten alphabetical entries will appear in the collection.

This provides a user a means to have a wide filtering criteria while only surfacing a specific subset. For example, if a collection criteria is set to include only featured projects, it is possible with this setting to showcase only a certain number of the most recently updated featured projects.

If this field is left blank, the system will not limit the collection by any sorting preference; all projects that match the search will appear in the collection.

#### Featured Projects

The Featured Projects slider is a filter that allows a user to limit a collection to only those projects that have been marked as being [Featured](/docs/projects/customizing/general.html#featured). Enabling this slider does not prohibit other filters from also shaping the contents of the collection. Thus it is possible to have a collection made up of only featured projects that also have a specific Subject or Tag associated with them.

#### Subjects

The Subjects field allows a user to type and then select from the list of established [Subjects](/docs/projects/customizing/general.html#subjects) in the instance to use as filters to determine which projects are included in the collection. For example, if there is a `History` subject in the instance, and it is selected here, only those projects that have been associated with `History` will appear in the collection.

More than one subject can be included in the collection criteria, and they can be paired further with the Featured Projects field, and project Tags, also described in this section.

To remove a subject from the criteria, simply click the `x` beside it's name below the `Add a Subject` button.

#### Tags

The Tags field allows a user to type and then select from the list of [Tags](/docs/projects/customizing/general.html#tags) being used in the instance to use as filters to determine which projects are included in the collection. For example, if there is a tag for `australia` in the instance, and it is selected here, only those projects that have been associated with `australia` will appear in the collection.

More than one Tab can be included in the collection criteria, and they can be paired further with the Featured Projects field, and project Subjects, also described in this section.

To remove a tag from the criteria, simply click the `x` beside it's name below the `Add a Tag` button.

## Modifying Existing Project Collections

<a name="ordering"></a>
### Ordering Collections



### Project Collection Sidebar

The Project Collections page will display a list of existing collections on the left sidebar. The sidebar displays the collection's title, number of projects in the collection, a toggle to quickly change its homepage visibility status, and a handle to reorder the collections.

![Collection Sidebar](/docs/assets/projects/collection-sidebar.png)
