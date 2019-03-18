---
layout: page
title: "Upgrading from Debian Packages"
menu:
  installation_ubuntu:
    title: "Upgrades"
    weight: 4
---

{% assign ubuntu_16_release = site.data.releases.ubuntu16[0] %}
{% assign ubuntu_18_release = site.data.releases.ubuntu18[0] %}

{% include installation/notice.md %}

The following instructions assume that you installed Manifold from a .deb file, and are updating that installation.

### 1. Download the most recent package

Shell into the server as root and download the most recent package.

On Ubuntu 16:
``` shell
cd ~
curl -O {{ ubuntu_16_release.url }}
```

On Ubuntu 18:
``` shell
cd ~
curl -O {{ ubuntu_18_release.url }}
```

### 2. Install the Package

``` shell
dpkg -i {{ ubuntu_18_release.basename }}
```

Because it contains all dependencies, the omnibus package is rather large. Updating with `dpkg` will take a fair amount of time, so be patient and let the installer run.

### 3. Stop services and reconfigure

Stop all Manifold services with `manifold-ctl stop`. Then run `manifold-ctl reconfigure` to ensure that all configuration is current. Once that's complete, you can restart the services with `manifold-ctl start`.

``` shell
/usr/local/bin/manifold-ctl stop
/usr/local/bin/manifold-ctl reconfigure
/usr/local/bin/manifold-ctl start
```

Once this process is complete, visit the fully qualified domain name in your browser. Depending on the hosting environment, restarting Manifold can take a minute or two, so please be patient.
