Creating projects in Manifold is meant to be straight forward and easy. The first thing you see in the backend is the list of projects:

![Projects List](/docs/assets/installing/projects.png)

Click on the "Add a New Project" button to create a new project. After clicking on this, Manifold will prompt you to enter a title and an optional subtitle and description.

![New Project](/docs/assets/installing/new.png)

Save the project and continue. New projects are automatically saved in _draft_ mode. Draft projects are only visible to logged in admin users. Use the tabs on the left of the project detail view to add a thumbnail, upload a hero image for the frontend project detail page, add resources, and more.

A good first step on a project is to ingest a text. Click on the "texts" tab to view the texts associated with this project.

![Project Texts](/docs/assets/installing/texts.png)

Manifold can ingest EPUBs, Markdown documents, HTML, or Google Docs. [Ingesting Google docs requires some additional configuration](/docs/customizing/settings/external_services/google/index.html), so for the purposes getting started, we'll begin with an EPUB ingestion. If you don't have a DRM-free EPUB on hand, you can always grab one from the [standard ebooks project](https://standardebooks.org/).

Click on the "Add a new text" button to bring up step one of the ingestion process:

![Select Ingestion Type](/docs/assets/installing/ingestion-one.png)

Select "EPUB V2 or V3" and press continue. Drag an EPUB file onto the cloud icon to upload it and press continue. You'll see a green progress bar at the top of the browser window while the file uploads. When the upload is complete, Manifold will advance to the next stage of ingestion:

![Start Ingestion](/docs/assets/installing/ingestion-two.png)

First, press the "Analyze" button. Pressing this tells Manifold to analyze the source document to determine which ingestion strategy to employ. In the case of an EPUB, Manifold will choose to use the EPUB strategy. After it has analyzed the source file, you will see an "Ingest" button at the bottom of the dialog. Go ahead and press it:

![Ingestion Underway](/docs/assets/installing/ingestion-three.png)

Ingesting a text can take anywhere from a few seconds to a few minutes, depending on the hosting environment and the size of the text. When the ingestion is complete, you'll see a "complete" button at the bottom of the dialog. Pressing it will close the ingestion interface and return you to the list of project texts.

Use the up arrow in the list to set the newly ingested text as the "published" text for the project. When a project has a published text, it will show a prominent "start reading" button on the frontend project detail page.

![Ingestion Complete](/docs/assets/installing/ingested-texts.png)

Click the preview link below the project title, near the top of the page to open view this project on the frontend. If you ingested a text and set it to the project's published text, you should see a prominent start reading button. Press it now to open the text in the Manifold reader.


### You Did It!

Congratulations, you completed the Manifold getting started guide. If all went as planned, you're well on your way to building out your own projects and publishing your own texts on Manifold. If you ran into any problems, please get in touch and let us know. We'll do the best we can to help you out.