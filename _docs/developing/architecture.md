# Architecture

For Manifold to run properly, a number of distinct services must be running at all times on the host. This section includes a brief description of each service and a sample systemd startup script. We've found Ubuntu 16 to be a reliable host environment for Manifold, and we use the systemd scripts below to manage each service. The paths in the systemd service snippets below assume a typical Capistrano deployment to /home/manifold/deploy. If you take a different approach to deployment, you may need to change the paths.

### API

The Manifold API service provides a RESTful interface to all of the underlying data stored in Manifold. The API is a Rails application running on Puma \(although it should be possible to choose a different Rack-compatible application server.

In your installation, you'll need to make sure that the PATH environment variable includes any gem executables. We store the systemd configuration at _/lib/systemd/system/manifold\_api.service_

```
#/lib/systemd/system/manifold_api.service
[Unit]
Description=Manifold API Server
After=network.target

[Service]
Type=simple
User=manifold
Group=manifold
Environment=PATH=/home/manifold/.rbenv/shims:/bin:/sbin:/usr/bin:/usr/local/bin:/usr/local/sbin:/usr/sbin:/usr/local/node/node-default/bin
EnvironmentFile=/home/manifold/deploy/shared/.env
WorkingDirectory=/home/manifold/deploy/current/api/
ExecStart=/home/manifold/deploy/current/api/bin/puma -C /home/manifold/deploy/current/api/config/puma/production.rb
Restart=always
SyslogIdentifier=manifold-api
```

### Client

The client is a node-js application that's responsible for the server-side render of Manifold URLs. Remember, Manifold is a universal or isomorphic single page web application. That means that the first request hits an index.html page that loads a Javascript bundle. This single html page is updated as the user interacts with Manifold and data is requested and returned from the API. To avoid an initial white screen while the Javascript bundle is loading, and to ensure archivability and easier search engine indexing, the client application renders each page on the server-side first and returns the rendered HTML to the client on the initial request.

We manage this service with the following systemd configuration.

_/lib/systemd/system/manifold\_client.service:_

```
#/lib/systemd/system/manifold_client.service
[Unit]
Description=Manifold Client Application
After=network.target

[Service]
Type=simple
User=manifold
Group=manifold
Environment=PATH=/bin:/sbin:/usr/bin:/usr/local/bin:/usr/local/sbin:/usr/sbin:/usr/local/node/node-default/bin:./node_modules/.bin
EnvironmentFile=/home/manifold/deploy/shared/.env
WorkingDirectory=/home/manifold/deploy/current/client
ExecStartPre=/bin/sh -ec 'rm -f /home/manifold/sockets/manifold_client'
ExecStart=/usr/local/bin/yarn run start
Restart=always
SyslogIdentifier=manifold-client
```

Note that the main point of entry to the client application is the "start" command in `client/package.json`.

### Worker

To improve the user experience and overall performance, Manifold runs a number of resource-intensive tasks in the background. Sending emails, generating thumbnails, monitoring tweets related to a project, are examples of tasks that are normally managed in the background. For this background processing, Manifold relies on a redis queue and the powerful background job processor application, [Sidekiq](http://sidekiq.org/). For background jobs to be handled correctly, Sidekiq must be running at all times.

Because sidekiq is a forking process that spawns multiple workers, we have three systemd configuration files to manage it.

_/lib/systemd/system/manifold\_sidekiq@.service:_

```
#/lib/systemd/system/manifold_sidekiq@.service
[Unit]
Description=A CIC Sidekiq service
After=syslog.target network.target

[Service]
Type=simple
User=manifold
Group=manifold
Environment=PATH=/home/manifold/.rbenv/shims:/bin:/sbin:/usr/bin:/usr/local/bin:/usr/local/sbin:/usr/sbin:/usr/local/node/node-default/bin
EnvironmentFile=/home/manifold/deploy/shared/.env
WorkingDirectory=/home/manifold/deploy/current/api
ExecStart=/home/manifold/deploy/current/api/bin/sidekiq -i %i
Restart=on-failure
SyslogIdentifier=sidekiq-%i
```

_/lib/systemd/system/manifold\_sidekiq\_workers.service:_

```
#/lib/systemd/system/manifold_sidekiq_workers.service
[Unit]
Description=A CIC Sidekiq worker service, calls script to start/stop sidekiq workers

[Service]
Type=forking
WorkingDirectory=/home/manifold/deploy/current/api
ExecStart=/usr/bin/manifold_sidekiq_workers start
ExecStop=/usr/bin/manifold_sidekiq_workers stop
KillMode=process
```

_/lib/systemd/system/manifold\_worker@.service:_

```
[Unit]
Description=Manifold Sidekiq Worker #%i
After=syslog.target network.target

[Service]
Type=simple
User=manifold
Group=manifold
Environment=PATH=/home/manifold/.rbenv/shims:/bin:/sbin:/usr/bin:/usr/local/bin:/usr/local/sbin:/usr/sbin:/usr/local/node/node-default/bin
EnvironmentFile=/home/manifold/deploy/shared/.env
WorkingDirectory=/home/manifold/deploy/current/api
ExecStart=/home/manifold/deploy/current/api/bin/sidekiq -i %i
Restart=on-failure
SyslogIdentifier=manifold-worker-%i
```

_/lib/systemd/system/manifold\_workers.service:_

```
#/lib/systemd/system/manifold_workers.service
[Unit]
Description=Manifolder Workers

[Service]
Type=oneshot
WorkingDirectory=/home/manifold/deploy/current/api
ExecStart=/usr/bin/manifold_workers start
ExecStop=/usr/bin/manifold_workers stop
RemainAfterExit=yes
SyslogIdentifier=manifold-workers
```

### Scheduler

The Scheduler service is responsible for creating background jobs according to a schedule. With this service, there's no need to create cron-job for background maintenance tasks and synchronizing data between Manifold and external services. The scheduler, for example, tells Manifold to check for new project tweets on an hourly basis.

We store the systemd configuration at _/lib/systemd/system/manifold\_scheduler.service:_

```
#/lib/systemd/system/manifold_scheduler.service
[Unit]
Description=Manifold Background Scheduler
After=network.target

[Service]
Type=simple
User=manifold
Group=manifold
Environment=PATH=/home/manifold/.rbenv/shims:/bin:/sbin:/usr/bin:/usr/local/bin:/usr/local/sbin:/usr/sbin:/usr/local/node/node-default/bin
EnvironmentFile=/home/manifold/deploy/shared/.env
WorkingDirectory=/home/manifold/deploy/current/api/
ExecStart=/home/manifold/deploy/current/api/bin/clockwork clock.rb
Restart=always
SyslogIdentifier=manifold-scheduler
```

### Cable

The cable service is a WebSocket service. When texts are ingested into Manifold through the backend, the API provides real-time feedback to the client application about the ingestion process. This takes place over the Cable WebSocket channel.

We store the systemd configuration at _/lib/systemd/system/manifold\_cable.service:_

```
#/lib/systemd/system/manifold_cable.service
[Unit]
Description=Manifold Action Cable Server
After=network.target

[Service]
Type=simple
User=manifold
Group=manifold
Environment=PATH=/home/manifold/.rbenv/shims:/bin:/sbin:/usr/bin:/usr/local/bin:/usr/local/sbin:/usr/sbin:/usr/local/node/node-default/bin
EnvironmentFile=/home/manifold/deploy/shared/.env
WorkingDirectory=/home/manifold/deploy/current/api/
ExecStart=/home/manifold/deploy/current/api/bin/cable

Restart=always
SyslogIdentifier=manifold-cable
```

### Starting and Stopping Services

We use sysctl to start and stop Manifold services in a systemd environment.

Each service can be started with the following commands:

```
sudo systemctl start manifold_client
sudo systemctl start manifold_api
sudo systemctl start manifold_scheduler
sudo systemctl start manifold_workers
sudo systemctl start manifold_workers
```

Each service can be stopped with the following commands:

```
sudo systemctl stop manifold_client
sudo systemctl stop manifold_api
sudo systemctl stop manifold_scheduler
sudo systemctl stop manifold_workers
sudo systemctl stop manifold_cable
```

Each service can be restarted with the following commands:

```
sudo systemctl restart manifold_client
sudo systemctl restart manifold_api
sudo systemctl restart manifold_scheduler
sudo systemctl restart manifold_workers
sudo systemctl restart manifold_cable
```

### Logging and Troubleshooting

When it comes to figuring out why services aren't running as expected in a systemd environment, `journalctl` is your best friend! Use this command to tail log output from the principle Manifold services:

```
journalctl --unit=manifold* -f
```

### Managing Services with the Manifold CLI

It is also possible to start Manifold services using the CLI interface and the bundled [forman procfile](https://ddollar.github.io/foreman/). For more information, consult the [Command Line Interface](/developers/command-line-interface.md) section of this documentation.

