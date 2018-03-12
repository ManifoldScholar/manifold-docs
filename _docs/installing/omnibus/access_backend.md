---
layout: page
title: Accessing the Manifold Backend
menu:
  omnibus:
    title: Accessing the Manifold Backend
    weight: 3
---

All content stored in Manifold—texts, projects, authors, resources, users, etc—is managed through Manifold's backend interface. The backend is available at the `/backend` path. For example, if your domain name was `your-manifold-domain.tld`, you'd access the backend at `http://your-manifold-domain.tld/backend`.

Before you can login to the backend, you will need to make an administrative user. Manifold exposes Rake commands provided by the API Rails application by way of a `manifold-api` executable located at `/usr/local/bin/manifold-api`. This executable includes a command for creating an admin user. Call this command as follows:

```
sudo manifold-api manifold:user:create:admin["you@email.com","password","firstName","lastName"]
```

Substitute your email, password, first and last into the command above. If the command succeed, Manifold will let you know. For example:

```
manifold@manifold-deb:/etc/manifold# sudo manifold-api manifold:user:create:admin["john@milton.com","Lycidas","John","Milton"]
    INFO: A User has been created. Its ID is 9b8c863f-60cd-44aa-ad99-dbb842e51aa2
```

Once you've created an admin user, click on the avatar icon in the top right corner of the Manifold frontend to login. After logging in successfully, you will see an "admin mode" button in the header.

Click the admin mode button to access the backend, then [proceed to the next step](first_project.md).
