---
layout: page
title: Export Targets
menus:
  records:
    weight: 3
---

## Feature Overview

Publishers entrusting their scholarly content to Manifold can be assured their materials can easily be exported for long-term preservation. This page describes how to establish pathways (what we call “export targets”) from a Manifold instance to a preservation archive like Portico, CLOCKKS, or a university's institutional repository.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. Instructions on how to export specific projects from Manifold to export targets that are configured here can be found in the Project Customizing section on the <a href="/docs/projects/customizing/exports.html">Exports page</a>.
</div>

The current implantation of this feature exports individual Manifold projects on a case-by-case basis according to the [BagIt specification](https://github.com/jkunze/bagitspec). In this scheme all Manifold texts are converted first to the EPUB format and then included with the rest of the project's resources and metadata in a ZIP archive.

Alternative export strategies are possible and may be explored in the future. Likewise, alternative naming formats and transfer types could be implemented, given enough interest.

If there are components to this feature that could be improved upon for your situation, we encourage you to submit a [feature request on GitHub](https://github.com/ManifoldScholar/manifold/issues/new?template=features.md).

## Adding New or Editing Existing Export Targets

To create or edit existing export targets, navigate from the `Records` menu in the backend to `Export Targets`.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. You will need to login with Administrator credentials in order to use this menu in the backend. For more on the roles available in Manifold, see the <a href="/docs/projects/accounts/index.html">Accounts section</a>.
</div>

Any existing export targets will be listed on this view. New targets can be created by clicking `Add a new export target`, which will open a drawer from the right where the pathway's name and technical details are input.

![New Export Target](/docs/assets/customizing/export-record.png)

The new target form includes the following fields, all of which are required to successfully establish the connection between Manifold and the repository.

### Name

This is an arbitrary name that a publisher can use to describe the connection in a way that makes sense for their situation. As examples, a publisher may use something like “University IR,” “Open Emory,” “Portico”, or “CLOCKKS”.

### Target Name Format

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

The default value for this field is `%s.%e`. If we look at the table, we see that `%s` is associated with a project's slug. And `%e` refers to a file extension. Which is why there is a period separating the two values in the default: `slug.extension`. Thus, if a project's slug is `metagaming`, the exported archive will be titled `metagaming.zip`.

Another common format would be `%s-%t.%e`: `slug-time.extension`.

Variables are letters combined with the percent character (`%`); the rest of the name can be described using the same characters available for file naming generally. The table below represnts the current variables available. We could conceivable add more options if needed.

| Variable | Meaning               | Example                                | Notes                                                                                                                                                                                                                    |
| -------- | --------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `%d`     | Date                  | `2020-03-06`                           | This is the date *the export* was created.                                                                                                                                                                               |
| `%e`     | Extension             | `.zip`                                 | Presently this will always be `.zip`. In the future we may support different formats beyond the Bagit specification.                                                                                                     |
| `%i`     | Project ID            | `059a4e9d-2152-4ae5-816d-41891d4dccd1` | This is a Manifold-generated globally unique ID that is visible only in the URL (appearing after `projects/`) when viewing the project in the backend.                                                                   |
| `%I`     | Export ID             | `071be7e7-f8a3-4bb3-845a-affb0f9e4c77` | A globally unique ID that Manifold generates for each export at the time of export.                                                                                                                                      |
| `%n`     | Project Name          | `Metagaming`                           | The name of the Manifold project being exported. We would caution against using this variable as part of the export name. Project names often contain spaces that will likely cause problems downstream from the export. |
| `%s`     | Project Slug          | `metagaming`                           | A project's slug is the customizable URL suffix that publishers can set in project's [General sidebar](/docs/projects/customizing/general.html#slug) view.                                                               |
| `%t`     | Time (including date) | `2020-03-06T220927`                    | The date and time the export was created in ([RFC 3339 format](https://tools.ietf.org/html/rfc3339)). The numbers following the `T` represent the time according to the UTC standard.                                    |
| `%u`     | UNIX Timestamp        | `1583532567`                           | The UNIX timestamp, which measures (in seconds) from January 1, 1970 UTC.                                                                                                                                                |

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note to Advanced Users</strong>. It is possible in the present scheme to provide directory paths. For example, to provide some nice organization you could input <code>%s/%d/%I%e</code> in the field to return <code>metagaming/2020-03-06/071be7e7-f8a3-4bb3-845a-affb0f9e4c77.zip</code>. This could potentially allow an archive to put the export archive file in a derived directory that uses those same formatting parameters. So a publisher could use the same export target for a dozen projects that a repository could sort into different directories, rather than all just going into the same directory.
</div>

### Type

Presently there are two dropdown options available for the type of transfer:

- SFTP with Key Authentication
- SFTP with Password Authentication

These will be determined by the preservation archive. Select the appropriate based on whether the archive is supplying a key to authenticate with or a password.

Other possibilities are viable for implementation, whether for cloud systems or institutional repositories.

### SFTP Host

This value will be supplied by the preservation archive and will likely take a format akin to `ftp.ArchiveName.domain`.

### SFTP Port

The default port value, `22`, is the standard that most secure servers will be listening to for transfers of this kind. If the preservation archive does not specify a port for the transfer you can safely assume they are listening on port 22 and leave this field as is.

### SFTP Username

Regardless of the `Type`, the value of this field will remain the same and will be set up for you by the preservation archive. This field *is* case sensitive.

### SFTP Private Key *(Conditional)*

This is a “paste-in” field. Whoever maintains the preservation archive will be able to supply their key that you can then paste here to complete the configuration.

This field only appears when the `Type` field above is toggled to `SFTP with Key Authentication`.

### SFTP Password *(Conditional)*

This is the password set by the preservation archive they've created to allow you to push content from your instance to their archive. This field *is* case sensitive.

This field only appears when the `Type` field above is toggled to `SFTP with Password Authentication`.

## Troubleshooting

You cannot track the status of an export from this view. However you can get a general sense of running background processes from the Sidekiq interface available at `/api/sidekiq`, off of the instance's landing page (e.g., `https://edge.manifoldapp.org/api/sidekiq`).

If there are errors, they will be announced on project [Export page](/docs/projects/customizing/exports.html), not here initial setup screen.