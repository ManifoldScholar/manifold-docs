
Welcome! We're glad you've decided to try out Manifold. In this quick tutorial, you will:

1. {{ include.step_one }}
2. [Create an admin user and login to the backend](/docs/installing/ubuntu/backend.html)
3. [Create your first project and upload a text](/docs/installing/ubuntu/project.html)

### Skills and Experience

While we'll do our best to explain concepts as they come up, we assume you have some basic familiarity with the following:

* Working from the command line
* Editing configuration files
* Host names and domain names

### A Brief Overview of Manifold

Manifold is a web application that allows administrators to create a library of projects. Projects contain texts and resources. Each text in a project can be read and annotated using Manifold's reader. All Manifold content is managed through Manifold's backend interface, which is available to users with the "administrator" role.

Manifold is composed of a handful of services, with two services, the client and the API, doing most of the work. The _client_ application is a Javascript application that is delivered to the user's browser, and that runs on the server on Node. All data in Manifold is delivered to the client through Manifold's _API_ service. The API service is a Ruby on Rails application that runs on the server. API request paths typically begin with `/api/v1`. Just about all other requests are handled by the client application. A web server—our package installers user Nginx—proxies requests on a single domain to these two services (as well as a websocket service for ingestion).

### If You Get Stuck

Manifold, which is still in beta, is a relatively young piece of software. The more people who install it and experiment with it, the more feedback we'll get, which helps us improve Manifold. If you get stuck, don't hesitate to ask us for help. For more information on how to get in touch with the Manifold team, please consult the [getting support section](/docs/index.html#getting_support).
