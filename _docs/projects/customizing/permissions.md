---
layout: page
title: Permissions
menus:
  projects_customizing:
    weight: 3
---

In this menu users can assign other existing users project-specific permissions. These permissions, which are detailed below, extend a user's abilities to work with projects beyond those already inherent to their account role type.

The most common scenario will be in granting those in the Reader role one or more of the following permissions, though these permissions can be granted to other role types as well.

By default this menu will be empty for new projects, except for those created by users with the `Project Creator` role, who will automatically have `Can Modify Project` permissions for those projects they create.

## Granting Permissions

To assign a user project-specific permissions, click `Add New Permissions`, which will open a drawer from the right side of the screen.

Click `Select User` and begin typing in the name of the user whom you want to assign the permissions. If they are in the system their name will auto populate—and once you select them with a mouse click, their name and avatar will appear above the `Select User` field. (If they are not in the system, you will need to [create a new user](/docs/projects/accounts/creating.html).)

You can now toggle the sliders for the following three permissions. To formally extend those permissions click `Save Permissions`. Once clicked those permissions will be activated and ready to use immediately.

<small>
**Note**. It would be redundant to grant a user both “Can Modify Project” and “Can Modify Metadata,” as someone who can modify a project can also inherently modify its metadata.
</small>

### Can Modify Project

Grants user the ability to make any change within the scope of the backend project page as well as modify Maker records directly associated with those projects where they have been granted this permissions. This includes the ability to permanently delete a Maker record that may also be associated with other projects.

### Can Modify Metadata

Grants users the ability to update resource metadata. This permission will be most useful to bestow on support staff who can directly flesh out the information that support a project's resources.

### Is a Project Author

Grants users the ability to see the (forthcoming) author dashboard, modify metadata, and differentiates annotations and highlights (with a pink color) on projects where this permission has been granted as having been made by the project’s author.
