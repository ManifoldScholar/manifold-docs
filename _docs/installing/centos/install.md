---
layout: page
title: "Installing Manifold on Centos/RHEL: Download & Install Package"
menu:
  installation_centos:
    title: "Installation"
    weight: 1
---

{% assign centos_7_release = site.data.releases.centos7[0] %}

{% include installation/notice.md %}

The most recent Manifold CentOS release is <strong>{{centos_7_release.build_version}}</strong>. To install previous releases, grab the apprporiate URL from the [downloads page](/docs/reference/downloads.html).

The following instructions have only been tested on CentOS 7, but we expect this RPM to work just fine on RHEL7.

{% include installation/requirements.md %}

## Installation Process

### 1. Download the Package

Shell into the server as root and download the most recent package.

``` shell
cd ~
curl -O {{ centos_7_release.url }}
```

### 2. Install the Package

Instal the RPM package.

``` shell
cd ~
rpm -ivh {{ centos_7_release.basename }}
```

### 3. Apply Minimal Configuration

{% include installation/reconfigure.md %}

``` shell
/usr/local/bin/manifold-ctl reconfigure
```

{% include installation/next_steps.md %}
