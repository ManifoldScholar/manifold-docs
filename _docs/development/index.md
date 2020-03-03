---
layout: page
title: For Developers
menu:
  main:
    identifier: development
    weight: 8
---

Manifold is open-source software, and we welcome community contributions. To get started, follow the instructions on [how to set up a Manifold development environment](/docs/development/environment).

Beginning with version 5.0, our API documentation is included as part of the Manifold application and can be accessed by navigating to `/docs/api` from the Manifold homepage.

Nearly all changes to data stored in a Manifold installation occur over Manifold's API—a REST API with 152 distinct endpoints. We strive to conform the Manifold API to the [JSON:API](https://jsonapi.org/) specification, while Manifold's API documentation follows the [OpenAPI 2.0 specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md).

Any requests you send using the API documentation on your instance will be sent with your current authorization token and will operate on the current data for your instance, so proceed with caution.

The example below shows the API documentation view on a Manifold instance we maintain, and which you can access at this address:

```html
https://edge.manifoldapp.org/docs/api
```

![Manifold APIs](/docs/assets/development/api.png)