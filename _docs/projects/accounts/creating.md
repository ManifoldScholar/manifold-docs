---
layout: page
title: Creating User Accounts and Maker Records
menus:
  accounts:
    title: Creating
    weight: 3
---

## Creating a User Account

### From the Homepage

User accounts can be created by new visitors to a Manifold instance by clicking on the silhouette avatar in the upper left of the screen and then clicking `Need to sign up?` on the modal screen that pops up. From there the new user can sign up by entering their email, name, and a password. Alternatively one can create an account using their Facebook, Twitter, or Google credentials from the same screen if the Manifold instance you are working on has been so [configured](/docs/customizing/external_services/oauth/index.html) by an Administrator.

### From the Backend

To create a new User account in the backend, navigate to the Records menu, select `Users` from the submenu, and click `Add a New User` below the search bar:

![New User](/docs/assets/projects/new-user.png)

If there are no existing users in the system, this button will appear alone; otherwise it will always appear as the first entry. A drawer will open up from the right prompting for the users's email, role, and name.

**Caution**. Before creating a live account, please consult the [User Accounts](/docs/projects/accounts/users.html) page to see which permissions are associated with each of the different roles available in the system.

The system will automatically generate a password for the new user. To view or adjust the password, click on the eye icon beside the password heading.

When you click `Save User` the new account will be created, and the details, including password, will be automatically sent to the email entered for the account.

## Creating a Maker Record

Maker accounts can be associated with a project generally and also with specific texts. For the latter, Maker accounts are created automatically by the system when a text is ingested, populated by author metadata included within those texts. If your text doesn't have the requisite metadata, Maker accounts can be created manually by users with Administrative, Editor, or Project Creator credentials in both the Records and Projects menus.

Project-level Makers are displayed on a project's landing banner. Text-level Makers aren't displayed on the system but are incorporated into a text's metadata and are required to [create citations](/docs/reading/sharing.html).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. There is only one Maker record database. While you can create a Maker record on either the project or text levels, the record will be available in both places. That is, if you create a record for H. G. Wells on the Project level, you will also be able to call upon that same record on the text level and vice-versa.
</div>

### New General Maker Record

To create a new Maker record from the Records menu that is unassociated with a project or text, navigate to the Records menu, select `Makers` from the submenu, and click `Add a New Maker` below the search bar.

If there are no existing Makers in the system, this button will appear alone; otherwise it will always appear as the first entry. A drawer will open up from the right prompting for the Makers's name and avatar.

![New Maker General](/docs/assets/projects/new-maker-records.png)

### New Project-Level Maker Records

Under the Projects menu, choose the project you want to modify, and then select `People` from the sidebar. If any Maker records are already associated with the project they will appear here under the `Authors` or `Contributors` headings. (For a rundown on the differences between Authors and Contributors see the [Customizing section](/docs/projects/customizing/people.html))

![New Maker](/docs/assets/projects/new-maker.png)

To create a new Maker, simply begin typing a name in the `Add an Author` or `Add a Contributor` fields. If there is an existing Maker record in system that matches the name you type in, the system will populate the name below the field. If you select it, you will associate it with the project. If there is no name match you can simply hit enter, and a new record will be created.

To modify the new record you can click on the pen icon that floats to the right of the Maker's name:

![Edit Maker](/docs/assets/projects/edit-maker.png)

When you do, a drawer will open from the right allowing you to adjust the Maker's name and avatar.

### New Text-Level Maker Records

The method to create a text-level Maker record is exactly the same as for the project-level Maker. The difference is simply one of location: to create a Maker on the text level, select `Texts` from the sidebar under Projects, and click on the text to which you wish to add a Maker record. When you click on the text a new, shorter sidebar will appear. Click on `People` and follow the same steps from above.

![New Text-Level Maker](/docs/assets/projects/new-maker-text.png)
