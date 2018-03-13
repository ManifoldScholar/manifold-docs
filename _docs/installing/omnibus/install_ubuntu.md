---
layout: page
title: Install Manifold on Ubuntu
menu:
  omnibus:
    title: Install on Ubuntu
    weight: 1
---

The following instructions have only been tested on Ubuntu 16 hosts. Your mileage will almost certainly vary if you attempt to install Manifold on a different linux distribution.

## Installation Prerequisites

1. Manifold should be installed on a virtual or physical server with at least 1 CPU and 4 GB of RAM<sup>[1](#note-1)</sup>. We've had good luck installing Manifold on [Google Cloud Compute instances](https://cloud.google.com/compute/docs/instances/), [AWS EC2 instances](https://aws.amazon.com/ec2/instance-types/), and [Digital Ocean droplets](https://www.digitalocean.com/).

2. You will need to have root access to the server and the ability to shell into the server.

3. Your server should have a fully qualified domain name (FQDN). If the hostname is setup correctly, the installer should detect it and configure manifold accordingly. If it's not, you can set the hostname manually in /etc/manifold/manifold.rb and reconfigure the application. Reconfiguration is discussed below.

## Installation Process

#### 1. Download the package

Shell into the server as root and download the most recent package.

```
cd ~
curl -O https://storage.googleapis.com/manifold-dist/debian/manifold_0.4.1-1_amd64.deb
```

#### 2. Install the package

```
dpkg -i manifold_0.4.1-1_amd64.deb
```

#### 3. Apply Minimal Configuration

The package installer creates a file at `/etc/manifold/manifold.rb`. Use this file to configure and manage the various services that Manifold is composed of. After changing this file, you'll need to run `sudo manifold-ctl reconfigure` from the command line so that Manifold picks up the changes and regenerates various configuration files based on the new settings.

For now, let's just make sure Manifold is on the right domain. Open `/etc/manifold/manifold.rb` in your preferred text editor (nano, vi, etc.) and look for the `external_url` setting near the top of the file. Set this to the fully qualified domain name of your Manifold installation, then reconfigure Manifold:

```
/usr/local/bin/manifold-ctl reconfigure
```

Once this process is complete, visit the fully qualified domain name in your browser. You should see an empty Manifold home page.

If everything looks good, [proceed to the next step](/docs/installing/access_backend.html).

#### Notes

<small>
<a name="note-1"></a><sup>1</sup> We advise against attempting to install Manifold in a shared hosting environment for security and stability reasons. We're working on coming up with a distribution of Manifold that requires less RAM. If your environment has less than 4 GB of RAM, it's possible that Elastic Search will  not start correctly.
</small>
