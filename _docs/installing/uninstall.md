---
layout: page
title: Uninstall
menu:
  installation:
    weight: 8
---

You can completely remove Manifold by running `manifold-ctl cleanse`. This command will stop all Manifold services and remove the following directories, which are directories created during Manifold's installation:

- `/opt/manifold`
- `/var/log/manifold`
- `/var/opt/manifold`
- `/etc/manifold`

If you want to remove Manifold but keep your instance data, you can execute `manifold-ctl uninstall`. This command will remove `/opt/manifold`, while leaving the data and configuration directories in `/var` and `/etc`.