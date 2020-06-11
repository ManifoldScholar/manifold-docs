---
layout: page
title: Backup
menu:
  installation:
    weight: 9
---

Backing up Manifold involves generating a database dump and copying files that
that have been uploaded to Manifold.

Assuming you've installed Manifold using our OS packages, here is a simple shell
script to create a backup in /var/opt/manifold/backups. These instructions were
tested on Ubuntu 18.

``` shell
#!/bin/bash          

# Define directories
BACKUP_DIR=/var/opt/manifold/backups/`date +"%m-%d-%y"`
BACKUP_STAGING=$BACKUP_DIR/staged
BACKUP_FILE=$BACKUP_DIR/manifold-backup-`date +"%m-%d-%y-%s"`.tar
BACKUP_DB_HOST=/var/opt/manifold/postgresql
BACKUP_DB_PORT=3034
BACKUP_DB_USER=manifold

# Create the staging directory (and parents) as the manifold user.
su - manifold -c "mkdir -p $BACKUP_STAGING"

# Dump the database to the staging directory
su - manifold -c "/opt/manifold/embedded/bin/pg_dump \
  --user=$BACKUP_DB_USER \
  --port=$BACKUP_DB_PORT \
  --host=$BACKUP_DB_HOST manifold_production > $BACKUP_STAGING/dump.sql"

# Create a tar archive of the API storage and place it in the staging directory.
tar -cvf $BACKUP_STAGING/api.tar --exclude='*.sock' /var/opt/manifold/api

# Create a tar archive of the staged files.
tar -C $BACKUP_STAGING -cvf $BACKUP_FILE .

# Clean up the staging directory.
su - manifold -c "rm -rf $BACKUP_STAGING"

echo "Backup has been created at $BACKUP_FILE"
```
