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

Has creation permissions (C) for the Projects and People menus—and by default will have the “Can Modify the Project” permission toggled on, allowing those assigned this role the ability to not only create new projects but have the rights to modify them.

For more about how to assign permissions to a user, see the [Permissions section](/docs/projects/customizing/permissions.html).

**Use Cases**. Coordinator permissions could be assigned to (acquisitions) editorial and production staff, within a university press, to manage their specific projects and the people contributing to them. At other publishing centers this allows distinct units to control their own projects without affecting the instance as a whole or the publishing work of other units on the same instance.

### Marketeer

Has CRU (not D) permissions for only Projects and Content menus and Read access to the (forthcoming) Analytics menu item.

**Use Cases**. For marketing staff at a university press to add and update project copy and imagery across an instance, as well as pages and feature content items in service to promotion, branding, etc.

### Reader

The default user role. When logged in a Reader can highlight, annotate, comment, and use share functionality. This user doesn’t have access to the backend in any capacity but can access the Author Dashboard on projects where `Is a Project author` permission is toggled on for that user.

For more about what permissions can be scoped to the Reader role, see the [Permissions section](/docs/projects/customizing/permissions.html)

## Table 1. Inherent backend permissions for global roles

|                 |Projects            | People             | Content | Settings | Analytics | Author Dashboard<sup>a</sup> |
|-----------------|--------------------|--------------------|---------|----------|-----------|------------------------------|
| Administrator   | CRUD               | CRUD               | CRUD    | CRUD     | R         | —                            |
| Editor          | CRUD               | CRUD               | CRUD    | R        | R         | —                            |
| Project Creator | C(RUD)<sup>b</sup> | RU<sup>c</sup>     | —       | —        | —         | —                            |
| Marketeer       | RU                 | —                  | CRUD    | —        | R         | —                            |
| Reader          | —                  | —                  | —       | —        | —         | —                            |

<small>
<sup>a</sup>Access to the Author Dashboard is not inherent to any role. Only Readers who have the “Is a Project Author” permission toggled on will be able to access the dashboard.  
<sup>b</sup>Access to RUD functions is not inherent to the role but provided through the “Can Modify the Project” permission, which will be toggled on by default to the role.  
<sup>c</sup>Read and Update rights are specific to Maker records and do not include any CRUD permissions for User accounts.
</small>
