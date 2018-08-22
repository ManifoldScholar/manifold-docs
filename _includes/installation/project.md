Creating projects in Manifold is meant to be straight forward and easy. The first thing you see in the backend is the Dashboard:

![Dashboard](/docs/assets/installing/dashboard.png)

Using the menu, navigate to the Projects page and click on “Add a New Project” to create a new project.

![Projects](/docs/assets/installing/projects.png)

After clicking on this, Manifold will prompt you to enter a title and an optional subtitle and description.

![New Project](/docs/assets/installing/new.png)

Save the project and continue. New projects are automatically saved in _draft_ mode. Draft projects are only visible to logged in  users with [credentials](/docs/projects/accounts/users.html) to access them in the backend. Use the tabs on the left of the project detail view to add a thumbnail, upload a hero image for the frontend project detail page, add resources, and more.

A good first step on a project is to ingest a text. Click on the "Texts" tab to view the texts associated with this project.

Manifold can ingest EPUBs, Markdown documents, HTML, Google Docs, Word documents, and LaTex files. [Ingesting Google docs requires some additional configuration](/docs/customizing/external_services/google/index.html), so for the purposes of getting started, we'll begin with an EPUB ingestion. If you don't have a DRM-free EPUB on hand, you can always grab one from the [standard ebooks project](https://standardebooks.org/).

![Project Texts](/docs/assets/installing/texts.png)

Click on the "Add a new text" button to bring up step one of the ingestion process. Drag an EPUB file onto the cloud icon to upload it and press continue. The upload progress of the file will display in the drawer where you dropped your file. When the upload is complete, the Continue button will illuminate green and you can advance to the next stage of ingestion.

![Select Ingestion Type](/docs/assets/installing/ingestion-one.png)

The system will connect to the necessary websockets. Once done, you will see an “Ingest” button at the bottom of the dialog. Go ahead and press it.

![Start Ingestion](/docs/assets/installing/ingestion-two.png)

Ingesting a text can take anywhere from a few seconds to a few minutes, depending on the hosting environment and the size of the text. When the ingestion is complete, you'll see a “Complete” button at the bottom of the dialog. Pressing it will close the ingestion interface and return you to the list of project texts.

![Ingestion Underway](/docs/assets/installing/ingestion-three.png)

Use the up arrow in the list to set the newly ingested text as the “Published” text for the project. When a project has a published text, it will show a prominent “Start Reading” button on the frontend project detail page.

![Ingestion Complete](/docs/assets/installing/ingested-texts.png)

Click the preview link below the project title, near the top of the page to open view this project on the frontend. If you ingested a text and set it to the project's published text, you should see a prominent start reading button. Press it now to open the text in the Manifold reader.


### You Did It!

Congratulations, you completed the Manifold getting started guide. If all went as planned, you're well on your way to building out your own projects and publishing your own texts on Manifold. If you ran into any problems, please get in touch and let us know. We'll do the best we can to help you out.
