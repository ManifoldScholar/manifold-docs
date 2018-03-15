---
layout: page
title: Working with Projects
menus:
  main:
    identifier: projects
    weight: 4
---


The Projects page is the default landing space when accessing the backend with Administrative credentials. Here new projects can be created and existing ones modified.

<a name="search"></a>
## Search

The search bar immediately below the Projects header allows a user to search through existing projects in the system and to then access those projects directly from the list of results that appears below the search bar. The search engine, powered by Elasticsearch, evaluates titles, subtitles, and author names, returning exact, as well as likely, matches.

To clear your current search, click on `Reset Search` beneath the search bar.

<a name="project-list"></a>
## Project List

The project list displays all projects (in groups of five) that have been created on an instance of Manifold. The project list is displaced by active search results from the search bar above the list. If no projects have yet been created, only the `Add a New Project` button will be present.

<a name="new-project"></a>
### Add a New Project

To create a new project in the system, click the `Add a New Project Button` at the head of the Project List. Doing so will bring up a prompt for the new project's title, subtitle, and description. Only the title field is required, though any information entered now can be modified later. When you click `Save and Continue`, your new project will be created, and the system will deliver you to the project's Edit page.

### Edit a Project

When you click on an existing project from the project list, you will be taken to the project's Edit page, where you can modify, add, or remove texts, resources, and metadata associated with it, as well as adjust how the project appears for readers.

The Edit page is divided between a header, sidebar, and editing panel. The header displays the title and subtitle of the project you are currently editing with options to Preview or Delete it.

Clicking `Preview` will load the project's landing page in a new browser tab, allowing you to preview any changes you've made without having to exit the backend.

When you click the `Delete` button, the system will prompt you to confirm that you want to delete the project. If you click `Yes`, all of the project's texts, resources, annotations, highlights, and comments will be purged from the system; however, project authors will remain unless they are removed manually through the [People](/docs/projects/people/index.html) menu. There is no means to recover a project that has been deleted.

Editing options are grouped into the eight sidebar categories named below and are described in full in those sections:

* [General](customizing/general.html)
* [Appearance](customizing/appearance.html)
* [People](people/index.html)
* [Texts](texts/index.html)
* [Resources](resources/index.html)
* [Collections](resources/collections.html)
* [Activity](customizing/activity.html)
* [Metadata](customizing/metadata.html)
* [Social](customizing/social.html)

When you click on a sidebar item the editing panel will adjust to reveal editing options particular to that section. You must save any changes, using the `Save Project` button at the bottom of the editing panel, within one section before making adjustments in another. If you make changes without clicking `Save Project` the system will prompt you to do so before proceeding.

<a name="recently-updated"></a>
## Recently Updated

This section provides quick access to projects that have been lately modified, allowing you jump back into a project on which you or someone from your team may have recently been working.

<a name="activity"></a>
## Activity

The activity feed appears when an instance integrates Google Analytics into the system (see the [Google Analytics Configuration](/docs/customizing/settings/external_services/google/analytics.html) section for setup details). When set up, this section displays 000.
