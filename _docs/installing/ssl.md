---
layout: page
title: Enable SSL
menu:
  installation:
    title: Enable SSL
    weight: 6
---

## Overview

One of the easiest options in for achieving secure communication between your Manifold installation and its visitors via SSL makes use of the [Let's Encrypt](https://letsencrypt.org/) project and the [certbot](https://certbot.eff.org/) tool, provided by the **Electronic Frontier Foundation**. Let's Encrypt manages and offers SSL certificates that are otherwise more complicated to get while certbot is a tool that automates registration and identification processes on the server so that a certificate is associated with a DNS entry. The following description assumes that you have ssh access to the server where Manifold is installed and that you do not feel generally uncomfortable with working on the command line.

## Certbot Installation

First, you download and install certbot. General information about download and installation options specific to the operating system and the server architecture you use are accessible from the landing page of the certbot project. Here, we assume you have installed Manifold on a Ubuntu 18.04 machine. After you logged in into your server via ssh the following chain of commands should leave you with a functional certbot installation:

```bash
$ sudo apt-get update
$ sudo apt-get install software-properties-common
$ sudo add-apt-repository universe
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt-get update
$ sudo apt-get install certbot python-certbot-nginx
```

The commands add the certbot project's package repository to your list of repositories and installs the certbot tool from this repository.

## Acquire a Certificate from Let's Encrypt

Certbot offers a number of ways to generate and install an SSL certificate. Since Manifold does not use the nginx packages from the distribution's package repository and also comes with its own configuration and installation paths it is best to refrain from letting certbot try to modify the server configuration itself. A successful and easy workflow is to let certbot use its own provisional server in order to only register and download the certificates. References to these certificates as well as server configuration can then be achieved manually by modifying Manifold's configuration file (`/etc/manifold/manifold.rb`).

In case Manifold is already running on your server you have to shut it down via `manifold-ctl stop`. When all of the services have stoped `sudo letsencrypt certonly --standalone -d YOURDOMAIN` starts the registration and identification process. In the end you should have a certificate and the associated files stored at `/etc/letsencrypt/live/YOURDOMAIN/`. YOURDOMAIN has to be replaced with the full name of the domain where Manifold is installed but without the protocol part (http(s)), this includes the `www` part of the URL in case it is part of the URL under which your installation of Manifold can be reached.

## Firewall Configuration

In case you use a firewall on your server - and you definitely should use one - you now need to allow connections via the SSL port. Using the standard firewall on Linux `ufw` this can be achieved via `sudo ufw allow https`. Afterwards the firewall needs to be restarted by writing `sudo ufw restart`.

## Reconfigure Manifold

This is the moment where you can reconfigure Manifold and check that everything went as planned. Open `/etc/manifold/manifold.rb` in a text editor of your choice. First you have adapt the value for `external_url`, changing `http` to `https`. Afterwards you can scroll down until you reach the nginx section of the configuration file. Here, you remove the comment characters (`#`) from the lines starting with `nginx['ssl_certificate']` and `nginx['ssl_certificate_key']`. You then replaces the default values with the absolute paths to the certificate files `fullchain.pem` and `privkey.pem`:

`nginx['ssl_certificate'] = "/etc/letsencrypt/live/YOURDOMAIN/fullchain.pem"`
`nginx['ssl_certificate_key'] = "/etc/letsencrypt/live/YOURDOMAIN/privkey.pem"`

It is furthermore recommendable to also set `nginx['redirect_http_to_https'] =` from `false`to `true`. By activating this option requests made with `http` are automatically redirected to `https` so that any type of request makes use of SSL encryption. Finally, uncomment `nginx['listen_https']` and set the value to `true`. This ensures that nginx listens on port 443.

After saving the file you apply your changes to the various services by running `manifold-ctl reconfigure`. When the reconfiguration is finished you start all Manifold services again via `manifold-ctl start`. The server and other services should come up again without any message of failure. Go to your browser and head to the landing page of your Manifold installation, this time using `https` instead of `http`. If all worked out well you should see your website with a browser specific symbol of protection next to the URL field of the browser.

## Notice on the lifecycle of Let's Encrypt Certificates

Please be aware that SSL-certificates aquired via Let's Encrypt are only valid for 3 month. Afterwards you will have to acquire a new certificate. This can be achieved by using certbot again, more precisely by typing `sudo certbot renew`. This process can also be automated with a cronjob that runs the command in defined intervals.
