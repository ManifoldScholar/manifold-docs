---
layout: page
title: User Roles
menus:
  accounts:
    weight: 1
---

Users are created by those first signing up for an account with a particular instance of Manifold—or by an existing Administrator on behalf of one who doesn't yet have an account. User accounts carry permission credentials according to the following roles:

## Administrator

**Abilities**. All menus, settings, and actions available in the backend can be attended by an Administrator. Only those who have installed the instance and can access it through a command line interface (CLI) can exercise more control over an instance.

**Use Cases**. Administrator permissions would be assigned to the person (or team members) overseeing a Manifold installation at an institution or publishing unit. Within a university press, this permission designation would be assigned to one or a subset of the following: a digital editor, someone from either the editorial or production departments, or, in some cases, an IT manager.

## Editor

**Abilities**. Editors can create, modify, or delete Projects, [Maker records](/docs/projects/accounts/makers.html) and an installation's [Pages](/docs/customizing/records/pages.html), regardless of who originally created them. Editors *do not* have access to an installation's [global settings](/docs/records/settings.html), cannot manage [Features](/docs/customizing/records/features.html), nor can they create, modify, or delete [user accounts](/docs/projects/accounts/users.html).

**Use Cases**. Editor permissions would be used for those in DH Centers, publishing units, and libraries where staff with this permission designation need full control over all the projects and Maker records within an instance.

## Project Creator

**Abilities**. Can access the backend and see and modify only those projects they've created or those for which they have been scoped `Can Modify Project` [permissions](/docs/projects/customizing/permissions.html). Additionally, Project Creators can create new and modify existing Maker records; however, they cannot delete *any* Maker record, even those they created.

**Use Cases**. The Coordinator role can be granted to (acquisitions) editorial and production staff, within a university press, to manage their specific projects and the people contributing to them. At other publishing centers this role allows members of distinct units to control their own projects without affecting the instance as a whole or the publishing work of other units on the same instance.

## Marketeer

**Abilities**. Marketeers can modify *all* existing Projects and Maker records, but they can't create new or delete existing ones. Marketeers can also create, modify, or delete an installation's [Pages](/docs/customizing/records/pages.html) and [Features](/docs/customizing/records/features.html).

**Use Cases**. For those who are charged with maintaining the identity, voice, and branding of the instance. At a university press this role would granted to staff from the marketing and sales departments.

## Reader

**Abilities**. The default user role. When logged in a Reader can highlight, annotate, comment, make use of sharing functionalities, and customize email notifications, all of which are described in detail in the [Reading section](/docs/reading/index.html). Readers don't have native access to the backend in any capacity, but they can be scoped permissions to perform certain actions in the backend (e.g., adding resources to a project or modifying metadata). Readers can also be classified as project authors, which distinguishes their interactions with their text from other readers. For more about what permissions can be scoped to the Reader role on a project-by-project basis, see the [Permissions section](/docs/projects/customizing/permissions.html).

**Use Cases**. All users signing up for the first time to an instance are granted a Reader role. Users who have authored materials on the platform should come into the system as Readers and be granted further permission to access and engage with their project. See the Abilities section below for more details.
