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

### via YUM Repository

#### 1. Select and add a repository

Manifold offers two tracks to receive packages from, `release` and `devel`.

For production-ready, official releases, add the following yum repository as root (or via `sudo`). Most people will choose this one.

```shell
curl -O /etc/yum.repos.d/manifold-release.repo https://storage.cloud.google.com/manifold-yum/el7/x86_64/release/manifold-release.repo
```

To include official release candidates along with official releases, you can add the following instead:

```shell
curl -O /etc/yum.repos.d/manifold-devel.repo https://storage.googleapis.com/manifold-yum/el7/x86_64/devel/manifold-devel.repo
```

**Note**: You should not add both tracks.

#### 2. Install the package

Once the correct repository is in place:

```shell
yum install manifold
```

### via Manual RPM

#### 1. Download the Package

Shell into the server as root and download the most recent package.

``` shell
cd ~
curl -O {{ centos_7_release.url }}
```

#### 2. Install the Package

Install the RPM package.

``` shell
cd ~
rpm -ivh {{ centos_7_release.basename }}
```

## Apply Minimal Configuration

{% include installation/reconfigure.md %}

``` shell
/usr/local/bin/manifold-ctl reconfigure
```

{% include installation/next_steps.md %}
