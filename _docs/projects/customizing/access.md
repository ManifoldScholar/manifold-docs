---
layout: page
title: Access
menus:
  projects_customizing:
    weight: 3
---

The Access sidebar settings allow editors to control who can modify or access specific projects on a Manifold instance. These settings are categorized along two different trajectories:

- **Editor Permissions** are oriented around collaboration and granting backend access and status to particular users on a limited basis. For instance, a production editor at a university press wants to allow an author to place their own media resources in a text, a journal editor wants to invite another user to help load materials for a special issue, a teacher wants their graduate assistant to curate a collection of OER materials. In Manifold speak, we think of these as “scoped roles” as compared to “global roles,” which are described in the [Users section](/docs/projects/accounts/users.html).
- **Project Entitlements**, on the other hand, allow publishers the means to limit who can access and engage with a project. This could be used as a basic paywall mechanism, a means to preview content to authors before it debuts publicly, a means to serve exam and desk copies, a way for teachers to limit project access to only members of their class.

The means by which these sorts of permissions and entitlements limit or extend access to users is described in detail below.

![Access Sidebar Menu](/docs/assets/projects/access.png)

## Editor Permissions

The most common permission-granting scenario will be in providing those with [Reader roles](/docs/projects/accounts/users.html) one or more of the following permissions, though these permissions can be granted to other role types as well.

By default this section will be empty for new projects, except for those created by users with the `Project Creator` role, who will automatically be listed in this space with `Can Modify Project` permissions for those projects they create.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. Users who are granted these project-specific permissions cannot themselves extend such permissions forward to other users, with the exception of those who have <code>Can Modify Project</code> toggled on—the “Project Editor” permission.
</div>

To assign a user project-specific permissions, click `Grant editor permission`. This will open a drawer from the right side of the screen with a dropdown menu and three sliders.

![Access Sidebar Menu](/docs/assets/projects/grant.png)

Click the `Select User` dropdown and begin typing or scrolling to find the user whom you want to assign the permissions. If they can't find their name, they may not yet have an account on your instance, and you will need to [create a new user account](/docs/projects/accounts/creating.html) on their behalf.

You can now toggle the sliders for the following three permissions. To formally extend those permissions click `Save Permissions`. Once clicked those permissions will be activated and ready to use immediately.

### Can Modify Project

Grants user the ability to make any change within the scope of the backend project page as well as modify Maker records directly associated with those projects where they have been granted this permission. This includes the ability to permanently delete a Maker record that may also be associated with other projects.

When this option is selected the title `Project Editor` will be appended next to the user's name.

### Can Modify Resource Metadata

Grants users the ability to update resource metadata. This permission will be most useful to bestow on those who are best positioned—or simply have the requisite time—to flesh out the information associated with project's resources.

When this option is selected the title `Metadata Author` will be appended next to the user's name.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. It would be redundant to grant a user both “Can Modify Project” and “Can Modify Metadata,” as someone who can modify a project can also inherently modify its metadata.
</div>

### Is a Project Author

Grants users the ability to access draft projects, modify metadata and place resources in the project's texts. This permission will also differentiate the user's annotations and highlights from others with a pink color and an author badge, as a means indicate that the author is themself engaging with the project directly.

When this option is selected the title `Author` will be appended next to the user's name.

<a name="entitlements"></a>

## Project Entitlements

The controls in this section allow a publisher to limit who can access a specific project. Access to a project can be restricted to individual users or particular reading groups (e.g., a reading group of peer reviewers, a group who receives review copies, a discussion section of a class).

Presently, the transaction that grants an entitlement occurs outside of the Manifold platform: a student signs up for a class, a teacher invites the student to a reading group that has an entitlement to a specific project; a reader purchases access to a project via a publisher's website, the publisher manually grants that reader's account access to that project. In the future we are hoping to make it possible to manage that process programmatically with a publisher's existing authentication architecture.

Beyond restricting access, the settings here can be used to customize the messaging around why the project is restricted and how to gain access to it.

Publishers can also search through existing entitlements to revoke access or learn when a user's access to a project will expire.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. The settings here are for an individual project. By default all Manifold projects are openly accessible. To change the default so that all publications are restricted, see the <a href="/docs/customizing/settings/general.html#behaviors">Settings section</a>.
</div>

### Configure Access Restrictions

To activate access controls for your project, click `Configure Access Restrictions`. 

![Entitlements Menu](/docs/assets/projects/configaccess.png)

This will expand the project restriction option, which are contextual based on the default access setting:

![Entitlements Menu](/docs/assets/projects/restrictions.png)

#### Project Access is Restricted *(Conditional)*

When this slider is toggled on, access to the project will be restricted to only those users or reading groups who have credentials to modify the project in the backend and those who have entitlements to do so.

This means all users on the instance who log in with `Administrator`, `Editor`, or `Marketeer` credentials can access restricted projects.

Users logging in with `Project Creator` or `Reader` credentials will not have access to restricted projects *unless* (1) they have been granted a project permission, as described in the section above; (2) they have secured an entitlement described in the `Create Entitlement` section below; or (3) are a member of a reading group that has likewise been granted an entitlement to the project. For more on the different kinds of Manifold users, see the [Accounts section](/docs/projects/accounts/users.html).

Users who attempt to access project materials without the appropriate credentials will be directed to the project landing page where a restricted access ribbon will display across the hero, reading “Only authorized users may access this project.”

![Restriction Ribbon](/docs/assets/projects/onlyAuthorized.png)

This slider also has implications for the [calls-to-action](/docs/projects/customizing/layout.html#callActions) that are configured to appear in the hero section. Calls-to-Action of the type `Link` or `Download` can be set to appear always, only for authorized users, or only for unauthorized users. This provides publishers a means to tailor the experience of the project for users depending on how they presently relate to a project. See the [Layout section](/docs/projects/customizing/layout.html#callActions) for more.

#### Project is Open Access *(Conditional)*

When a Manifold instance is configured to restrict access to all projects (described in the [General Settings section](/docs/customizing/settings/general.html#behaviors)) this slider will read as “Project is Open” instead of “Project Access is Restricted.”

In this state, this slider allows a publisher to selectively make certain projects openly available to all readers without need for any special entitlements. This could be useful for journals, book series, or general marketing efforts aimed at giving readers a preview of the kinds of content generally available on an instance.

#### Restricted Access Notice Header

When `Project Access is Restricted` is toggled on, the text in this field will display (with the `Restricted Access Notice Body`) below the project hero for only those users who don't have credentials to access the project.

This field is customizable and Markdown enabled. If left blank, the default message will display: “Access to this project is restricted.”

![Restricted Notice](/docs/assets/projects/restrictedNotice.png)

#### Restricted Access Notice Body

When `Project Access is Restricted` is toggled on, the text in this field will display (with the `Restricted Access Notice Header`) below the project hero for only those users who don't have credentials to access the project.

This field is customizable and Markdown enabled. If left blank, the default message will display: “Only users granted permission may view this project's texts, resources, and other content.”

### Search Entitlements

The search bar in the entitlement sections allows publishers to sort through existing and past entitlements. Entitlements can be revoked individually as needed. Each entitlement records also carries a tag to indicate the current status of the permission: active, expired, or expiring soon.

![Entitlements Menu](/docs/assets/projects/entitlements.png)

### Create Entitlement

To provide users or reading groups an entitlement to access restricted projects, click `Create entitlement`. This will open up the Grant Entitlements panel from the right.

![Entitlements Panel](/docs/assets/projects/entitlementsPanel.png)

The panel comprises two fields that define the nature of the entitlement:

#### Who is the Entitlement For?

Using this dropdown, publishers can scroll or type-ahead for existing users or reading groups to grant an access entitlement to the project. Presently only one selection can be made at a time.

If there is no entry for the intended user, a new account will first need to created for them. Learn more about that process in the [Accounts section](/docs/projects/accounts/creating.html).

Once `Save Entitlement` is clicked the entitlement will be in place and the user or reading group will immediately have access to the project.

Access entitlements for reading groups remain in effect for the individual members of the group for the duration of entitlement and so long as they remain a part of the group.

#### Expiration *(Optional)*

By default an entitlement does not have an expiration date. If one is desired include the date here in `YYYY/MM/DD` format. This field also accepts human-readable strings in the form of "in *x* term" (e.g., “in three days,” “in two months,” “in one year”).

Existing entitlements, once saved saved, cannot be modified—only deleted. However, users and reading groups can have multiple entitlements. If an entitlement record doesn't align with current expectations, a new entitlement can be granted with new terms: if Journal Subscriber has an entitlement that expires at the end of the year and she has just renewed her subscription, a new entitlement record can be assigned with the new terms of expiration. When one entitlement ends the other will automatically go into effect.