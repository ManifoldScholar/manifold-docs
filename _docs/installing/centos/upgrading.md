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

## Upgrade the package

### From a YUM installation

If you installed manifold via `yum`, shell into the server as root and execute the following:

```shell
yum update manifold
```

### From a manual installation

If you installed manually via an `.rpm` file, shell into the server as root and execute the following:

``` shell
cd ~
curl -O {{ centos_7_release.url }}

# Upgrade the package
rpm -Uvh {{ centos_7_release.basename }}

# It is safe to remove the package file
rm -v {{ centos_7_release.basename }}
```

## Stop services and reconfigure

Stop all Manifold services with `manifold-ctl stop`. Then run `manifold-ctl reconfigure` to ensure that all configuration is current. Once that's complete, you can restart the services with `manifold-ctl start`.

``` shell
/usr/local/bin/manifold-ctl stop
/usr/local/bin/manifold-ctl reconfigure
/usr/local/bin/manifold-ctl start
```

Once this process is complete, visit the fully qualified domain name in your browser. Depending on the hosting environment, restarting Manifold can take a minute or two, so please be patient.
