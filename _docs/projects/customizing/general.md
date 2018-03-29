---
layout: page
title: General
menus:
  projects_customizing:
    weight: 1
---
The General category provides controls for the most top-level elements for how a project is registered and displayed across the system.

## Title

***Title***. Use this field to update the project title, which displays on the project library and landing pages, as well as associated navigation menus. This field cannot be left empty.

***Subtitle***. Use this field to add or update the project subtitle, which displays alongside the primary title. This field is not required.

## Visibility

***Draft Mode***. For use when wanting to load and edit a project and its materials before publishing it for a broad readership. When toggled on, projects are only visible to users logged in with Administrator, Editor, or Marketeer roles—and to Project Creators on projects where they have `Can Modify Project` permissions. New projects are set to Draft Mode by default, and Draft status is denoted in the project library, as well as on the project landing page.

When a project is in Draft Mode, users who have permissions to view the project may annotate, highlight, and even share texts that are part of the project. Links shared on Twitter will only work for those who also have permission to access the project and are logged in.

Determining when drafts are made public falls to the discretion of publishers. You can learn about published texts [in this section](/docs/projects/ingesting/published.html), or for an overview check the recommendations for [publishing workflow](/docs/publishing/workflow.html).

***Featured***. Featured projects take pride of place on the home page in a section of the library all of their own. Only four projects display in this section at a time. If more than four projects are toggled to be featured, only the four most recent will show. By default, new projects are *not* set to be featured.

## Other

***Publisher***. The publisher name displays at the bottom of the project landing page in the About section, alongside any information input in the [Metadata](metadata.html) section. Publisher information is also used to [generate citations](/docs/reading/interface/sharing.html)). The name input here is intended to refer to the project as a whole, not specific texts or resources within it; there is a separate field to fit that purpose and is described in the [Texts section](texts.html).

<small>
**Note**. This field is also repeated in the [Metadata](metadata.html) section: they are linked together, and changes to one will be reflected in the other. This field is surfaced in two places because of its importance.
</small>

***Publication Date***. A publication date is required by the system to [generate citations](/docs/reading/interface/sharing.html)). The date input here refers to the project as a whole (versus individual texts contained within the project) and will be superseded by a publication date associated with specific texts).

***Hashtag***. This field is a means to suggest a hashtag to those interested in discussing a project in social media. Include the hashmark (#) with the tag, and it will appear in the lower left part of the header on the project's landing page. See the [Social](social.html) section for instruction on how to pull Tweets using the hashtag into the project's [activity](activity.html) feed.

***Subjects***. Subjects provide a means to categorize projects, which readers can use as filters to sort through the collection of projects on the landing page (see [Projects Library](/docs/reading/library/index.html)).

Subjects can only be created by users with Administrator roles. All other roles that can access the backend can only select from the list of subjects already loaded into the system. To do so, simply begin typing, and the system will populate those subjects in the system that most closely resemble what you are typing.

To learn more about how to create Subjects as an Administrator, see the [Subjects section](/docs/customizing/subjects.html).

***Project Thumbnail***. This table allows you to modify or customize the avatar representing the project, which displays in the library on the landing page. If no custom avatar has been added to the system, the default icon—made up of eye glasses, a dialog bubble, and a pencil—shows in the left panel.

You can adjust the color of the default icon by selecting from one of the six preset options in the middle panel labelled `Default`.

You can also upload (as a JPEG, TIFF, GIF, or PNG) a new avatar using the right panel labeled `Custom`.

When no text has been added to the `Published` category (see the [Text](texts.html) section) the avatar will display as a square, and custom avatars should be prepared accordingly in a 1:1 ratio. If there is a Published Text, you can upload the cover into the `Custom` panel, and it will display according to the dimensions it was prepared.

All custom uploads should be no less than 400px along their shortest dimension.
