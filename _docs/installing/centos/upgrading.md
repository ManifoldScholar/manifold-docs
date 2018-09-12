---
layout: page
title: "Upgrading from CentOS Packages"
menu:
  installation_centos:
    title: "Upgrades"
    weight: 4
---

{% assign centos_7_release = site.data.releases.centos7[0] %}

{% include installation/notice.md %}

The following instructions assume that you installed Manifold from a .rpm file, and are updating that installation.

### 1. Download the most recent package

Shell into the server as root and download the most recent package.

``` shell
cd ~
curl -O {{ centos_7_release.url }}
```

### 2. Install the Package

``` shell
rpm -Uvh {{ centos_7_release.basename }}
```

### 3. Stop services and reconfigure

Stop all Manifold services with `manifold-ctl stop`. Then run `manifold-ctl reconfigure` to ensure that all configuration is current. Once that's complete, you can restart the services with `manifold-ctl start`.

``` shell
/usr/local/bin/manifold-ctl stop
/usr/local/bin/manifold-ctl reconfigure
/usr/local/bin/manifold-ctl start
```

Once this process is complete, visit the fully qualified domain name in your browser. Depending on the hosting environment, restarting Manifold can take a minute or two, so please be patient.
