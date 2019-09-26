---
layout: page
title: Installing Manifold on Docker
menu:
  installation:
    title: On Docker
    weight: 3
---

Starting with version 4.0, we publish Docker images alongside our Omnibus packages.
These images are published under the [manifoldscholar](https://hub.docker.com/u/manifoldscholar)
organization on hub.docker.com. The Manifold team is happy to accept pull
requests and are open to suggestions as to how we can improve our Docker support.

The following instructions assume that you've intalled docker and can run both
`docker` and `docker-compose` from the command line.

To begin running Manifold on Docker, clone our docker-compose repository:
```
git clone https://github.com/ManifoldScholar/manifold-docker-compose.git
```
The docker-compose.yml file in this repository includes all the services that
Manifold needs to run. For more complex deployments, feel free to use this files
as a starting point and modify as needed.

Before spinning up the containers, modify environment/manifold.env so that it
contains the correct IP or domain name for your server. Unless you're just running
these locally, you'll need to replace 127.0.0.1 from the following env vars:

```
DOMAIN=127.0.0.1:4000
CLIENT_BROWSER_API_URL=http://127.0.0.1:4000
CLIENT_BROWSER_API_CABLE_URL=http://127.0.0.1:4000/cable
```

From within that git repository, create and start Manifold containers:
```
MANIFOLD_TAG=v{{site.data.current.version}} docker-compose up -d
```

Access the site in your browser. Be patient, as it might take a minute for
services to start.
```
http://127.0.0.1:4000
```

Tail container log output (ctrl + c to stop)
```
docker-compose logs -f
```

Restart Manifold containers
```
docker-compose restart
```

Stop Manifold containers
```
docker-compose stop
```

Stop and remove Manifold containers
```
docker-compose down
```

Access the Rails (Manifold API Backend) console
```
docker exec -it  manifold-docker-compose_api_rails_1 rails console
```

Replace `console` in the above command with other Manifold rake commands. These
commands are the same commands that are available in the Omnibus packages, and
are [documented here](/docs/installing/package_configuration#rake-interface)

Create an admin user
```
docker exec -it manifold-docker-compose_api_rails_1 \
rails manifold:user:create:admin['email@example.com','test123!','First','Last']
```
