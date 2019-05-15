---
layout: page
title: Installing Manifold on Docker
menu:
  installation:
    title: On Docker
    weight: 3
---

Docker support is currently a work-in-progress. We have published beta packages
for Manifold v3.0.0 on Docker Hub. The Manifold team is happy to accept pull
requests and are open to suggestions as to how we can improve our Docker support.

To begin running Manifold on Docker, clone our docker-compose file:
```
git clone https://github.com/ManifoldScholar/manifold-docker-compose.git
```

From within that git repository, create and start Manifold containers:
```
MANIFOLD_TAG=v3.0.0-beta.1 docker-compose up -d
```

Access the site in your browser. Be patient, as it might take a minute for services to start.
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
docker exec -it compose_api_rails_1 rails c
```

Create an admin user
```
docker exec -it compose_api_rails_1 \
rails manifold:user:create:admin['email@example.com','test123!','First','Last']
```
