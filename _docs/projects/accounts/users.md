---
layout: page
title: User Accounts
menus:
  accounts:
    weight: 1
---

Users are created by those first signing up for an account with a particular instance of Manifold—or by an existing user with Administrator credentials on behalf of one who doesn't yet have an account. User accounts carry different CRUD (Create, Read, Update, Delete) permission credentials according to the following roles:

## Global User Roles

### Administrator

Has full CRUD permissions within a specific instance and Read access to the (forthcoming) Analytics menu item.

**Use Cases**. Administrator permissions would be assigned to the person (or team members) overseeing a Manifold installation at an institution or publishing unit. Within a university press, this permission designation would be assigned to one or a subset of the following: a digital editor, someone from either the editorial or production departments, or, in some cases, an IT manager.

### Editor

Has full CRUD permissions within an instance, except in the Settings and Analytics menus, which they can see (Read) but nothing else.

**Use Cases**. Editor permissions would be used for those in DH Centers, publishing units, and libraries where staff with this permission designation would have full control over all the projects within an instance but not be able to affect the instance’s global settings.

### Project Creator

Has C permissions for Projects and People menus—and by default will have the “Can modify the project” permission toggled on, allowing role to not only create new projects but have the rights to modify them too.

**Use Cases**. Coordinator permissions could be assigned to (acquisitions) editorial and production staff, within a university press, to manage their specific projects and the people contributing to them. At other publishing centers this allows distinct units to control their own projects without affecting the instance as a whole or the publishing work of other units on the same instance.

### Marketeer

Has CRU (not D) permissions for only Projects and Content menus and Read access to the (forthcoming) Analytics menu item.

**Use Cases**. For marketing staff at a university press to add and update project copy and imagery across an instance, as well as pages and feature content items in service to promotion, branding, etc.

### Reader

The default user role. When logged in a Reader can highlight, annotate, comment, and use share functionality. This user doesn’t have access to the backend in any capacity but can access the Author Dashboard on projects where `Is a Project author` permission is toggled on for that user.

## User Permissions Available for Scoping

These permissions live in a project’s Permissions tab and can be assigned to users with Reader roles (the default user role) on a project-by-project basis.

### Can Modify the Project

Grants user the ability to make any change within the scope of the backend project page.

### Can Modify Resource Metadata

Grants users the ability to update resource metadata.

### Is a Project Author

Grants users the ability to see author dashboard and tags project annotations and comments as having been made by the project’s "author."

## Table 1. Inherent backend permissions for global roles

|                 |Projects            | People | Content | Settings | Analytics | Author Dashboard<sup>b</sup> |
|-----------------|--------------------|--------|---------|----------|-----------|------------------------------|
| Administrator   | CRUD               | CRUD   | CRUD    | CRUD     | R         | —                            |
| Editor          | CRUD               | CRUD   | CRUD    | R        | R         | —                            |
| Project Creator | C(RUD)<sup>a</sup> | CRUD   | —       | —        | —         | —                            |
| Marketeer       | RU                 | —      | CRUD    | —        | R         | —                            |
| Reader          | —                  | —      | —       | —        | —         | —                            |

<small>
<sup>a</sup>Access to RUD functions is not inherent to the role but provided through the “Can modify the project” permission, which will be toggled on by default to the role.  
<sup>b</sup>Access to the Author Dashboard is not inherent to any role. Only Readers who have the “Is a project author” permission toggled on will be able to access the dashboard.
</small>
