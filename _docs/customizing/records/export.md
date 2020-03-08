---
layout: page
title: Export Targets
menus:
  records:
    weight: 3
---

Publishers entrusting their scholarly content to Manifold can be assured their materials can easily be exported for long-term preservation. This page describes how to establish pathways from a Manifold instance to a preservation archive. We call such pathways “export targets.”

To create or edit existing export targets, navigate from the `Records` menu in the backend to `Export Targets`.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. You will need to login with Administrator, Editor, or Marketeer credentials in order to this menu in the backend. For more on the roles available in Manifold, see the <a href="/docs/projects/accounts/index.html">Accounts section</a>.
</div>

Any existing export targets will be listed on this view. New targets can be created by clicking `Add a new export target`, which will open a drawer from the right where the pathway's name and technical details are input.

![New Export Target](/docs/assets/customizing/export-record.png)

The new target form includes the following fields, all of which are required to successfully establish the connection between Manifold and the repository.

## Name

This is an arbitrary name that a publisher can use to describe the connection in a way that makes sense for their situation. As examples, a publisher may use something like “University IR,” “Open Emory,” “Portico”, or “CLOCKKS”.

## Target Name Format

It's easy to be overwhelmed by this field at first glance, but in actuality it's far less complex or difficult to discern than the first impression suggests.

The input in this field only determines the top-level filename of the exported archive. It *does not* affect the structure or content of the export in any way. In short, this gives publishers a means to use variables to ensure the exported archive matches the file naming preferences of an expecting archive.

For the technically inclined, the available input values can be described by [this table](https://github.com/ManifoldScholar/manifold/blob/d500d4e63f7821137728d261814fbc9c9ecb6575/api/app/services/export_strategies/target_name_formatter.rb#L22):

```ruby
attr_formatter(
  :format_with,
  "%d" => -> { cat "%#{fmt.width_str}s" % src.export_created_at.strftime(DATE_FORMAT) },
  "%e" => -> { cat "%#{fmt.width_str}s" % src.normalized_extension },
  "%i" => -> { cat "%#{fmt.width_str}s" % src.project_id },
  "%I" => -> { cat "%#{fmt.width_str}s" % src.export_id },
  "%n" => -> { cat "%#{fmt.width_str}s" % src.project_name },
  "%s" => -> { cat "%#{fmt.width_str}s" % src.project_slug },
  "%t" => -> { cat "%#{fmt.width_str}s" % src.export_created_at.strftime(TIME_FORMAT) },
  "%u" => -> { cat "%#{fmt.width_str}d" % src.unix_timestamp }
)
```

For those not versed in the Ruby scripting language, that table is likely not particularly helpful, so let's make it easier: The default value for any new target export reads as `%s.%e`.

If we look at the table, we see that `%s` is associated with a project's slug. And `%e` refers to a file extension. Which is why there is a period separating the two values in the default: `slug.extension`. Thus, if my project's slug is `metagaming`, the exported archive will be titled `metagaming.zip`.

Another common format would be `%s-%t.%e`: `slug-time.extension`.

From that we get a better sense that variables are letters combined with the percent character (`%`):

| Variable | Meaning               | Example      | Notes                                                                                                                                                      |
| -------- | --------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `%d`     | Date                  | `2020-03-06` |                                                                                                                                                            |
| `%e`     | Extension             |              |                                                                                                                                                            |
| `%i`     | Project ID            |              |                                                                                                                                                            |
| `%I`     | Export ID             |              |                                                                                                                                                            |
| `%n`     | Project Name          |              | We would caution against using this here. Project names often contain spaces that will likely cause problems downstream from the export.                   |
| `%s`     | Project Slug          |              | A project's slug is the customizable URL suffix that publishers can set in project's [General sidebar](/docs/projects/customizing/general.html#slug) view. |
| `%t`     | Time (including date) |              |                                                                                                                                                            |
| `%u`     | UNIX Timestamp        |              |                                                                                                                                                            |

"%d" => "2020-03-06" // Date the export was created
"%e" => ".zip" // file extension
"%i" => "059a4e9d-2152-4ae5-816d-41891d4dccd1" // project unique ID (visible in BE URL)
"%I" => "071be7e7-f8a3-4bb3-845a-affb0f9e4c77" // export unique ID
"%n" => "A Manifold Project" // name of the project being exported
"%s" => "manifold-project" // the project slug
"%t" => "2020-03-06T220927" // date + time the export was created
"%u" => "1583532567" // unix timestamp for when the export was created

You may want to mention the IDs (project and export) are globally unique IDs
Also, we could conceivably add more options to that table if we can think of them. That was just what I came up with as sane defaults for what most people might want to export as

And I'm not sure if it was clear / the context of this, but you can also provide directory paths! it will create directory trees on demand when exporting. so you could do something like %s/%d/%I%e to get something like manifold-project/2020-03-06/071be7e7-f8a3-4bb3-845a-affb0f9e4c77.zip for some nice organization.

## Type

Presently there are two dropdown options available for the type of transfer:

- SFTP with Key Authentication
- SFTP with Password Authentication

Other possibilities could be implemented: Cloud, IR

## SFTP Host

This value will be supplied by the preservation archive and will likely take a format akin to `ftp.ArchiveName.domain`.

## SFTP Port

The default port value, `22`, is the standard that most secure servers will be listening to for transfers of this kind. If the preservation archive does not specify a port for the transfer you can safely assume they are listening on port 22 and leave this field as is.

## SFTP Username

## SFTP Private Key *(Conditional)*

This is a “paste-in” field. Whoever maintains the preservation archive will be able to supply their key that you can then paste here to complete the configuration.

This field only appears when the `Type` field above is toggled to SFTP with Key Authentication

## SFTP Password *(Conditional)*

## Errors

Errors show up in export from project screen, not initial setup.

api/sidkiq to see status of upload

On export screen refresh.

Authenticate against ftp host. Follow standard network debugging protocols to ensure Manifold can access server.

This does not impact enable epub setting in projects.

Standard export sharing following BagIt spec. EPUB is generated; it's not a simple pass through of the source file.
