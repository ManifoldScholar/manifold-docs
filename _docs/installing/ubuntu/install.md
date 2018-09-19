---
layout: page
title: "Installing Manifold on Ubuntu: Download & Install Package"
menu:
  installation_ubuntu:
    title: "Installation"
    weight: 1
---

{% assign ubuntu_16_release = site.data.releases.ubuntu16[0] %}
{% assign ubuntu_18_release = site.data.releases.ubuntu18[0] %}

{% include installation/notice.md %}

The most recent Manifold Ubuntu release is <strong>{{ubuntu_18_release.build_version}}</strong>. To install previous releases, grab the appropriate URL from the [downloads page](/docs/reference/downloads.html).

The following instructions have only been tested on Ubuntu 16 and Ubuntu 18 hosts. We recommend installing Manifold on Ubuntu 18. Your mileage will almost certainly vary if you attempt to install Manifold on a different Debian based distribution.

{% include installation/requirements.md %}

## Installation Process

### 1. Download the Package

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

On Ubuntu 16 and Ubuntu 18:
``` shell
cd ~
dpkg -i {{ ubuntu_16_release.basename }}
```

### 3. Apply Minimal Configuration

{% include installation/reconfigure.md %}

``` shell
/usr/local/bin/manifold-ctl reconfigure
```

{% include installation/next_steps.md %}
