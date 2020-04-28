---
layout: page
title: Working with Projects
menus:
  main:
    identifier: projects
    weight: 4
---

To create or modify new projects, accounts, global content, and system settings, users will first need to be able to access the Manifold backend.

The backend is available by default to users with the following roles: `Administrator`, `Editor`, `Project Creator`, and `Marketeer`. The backend is also available to `Readers` who have been granted permissions to do so. For more details, see the [User Accounts](/docs/projects/accounts/users.html) and [Access](/docs/projects/customizing/access.html) sections.

<a name="accessing"></a>
## Accessing the Backend

To access the backend, first log in with your existing Manifold account credentials. If you are an `Administrator`, `Editor`, `Project Creator`, or `Marketeer` you will see a button labelled `Admin Mode` appear to the left of your user avatar after you are logged in:

![Admin Button](/docs/assets/projects/admin-button.png)

If you are a reader with permission to access the backend you will see a button labelled `Editor Mode`:

![Editor Button](/docs/assets/projects/editor-button.png)

When you click on that button you will be taken to the Manifold dashboard, which is the default landing space when accessing the backend.

![Backend Dashboard](/docs/assets/installing/dashboard.png)

## Manifold Dashboard

Depending on your role and permissions the menus and functionality will vary here. But all users who can access the backend will have a search bar, project list, and recently updated pane on the dashboard with which they can interact:

### Search

The search bar immediately below the Projects header allows a user to search through existing projects in the system they have permissions to access.

The search engine, powered by Elasticsearch, evaluates titles, subtitles, and author names, returning exact, as well as likely, matches.

To clear your current search, click on `Reset Search` beneath the search bar.

### Create a New Project

For those accredited with user roles of Administrator, Editor, or Project Creator the `Add a New Project` button will be available as a means to add new projects to the system. See the [Creating Projects](/docs/projects/creating.html) section for details.

### Project List

The project list displays all projects (in groups of five) that have been created on an instance of Manifold that you have access to edit. The project list is displaced by active search results from the search bar above the list. If no projects have yet been created, the list will remain empty.

### Recently Updated

The recently updated pane provides users an easy way to jump back into the two most recent projects they have modified without having to search or page through the project list.

## Working with Projects

The rest of this section is broken into the following sections, and within each are details for add and modify content and settings.

* [Creating Projects](/docs/projects/creating.html)
* [Preparing Texts](/docs/projects/preparing/index.html)
* [Preparing Resources](/docs/projects/resources.html)
* [Customizing Projects](/docs/projects/customizing/index.html)
* [Accounts and Roles](/docs/projects/accounts/index.html)
