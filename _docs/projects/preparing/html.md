---
layout: page
title: HTML
menus:
  preparing-texts:
    weight: 4
---

HTML is the *lingua franca* of Manifold. The platform can accept all well-formed HTML that doesn't invoke scripts. Both run-in and external stylesheets are accepted, but note that the platform will reject any element within a stylesheet that conflicts with the system's ability to render content responsively.

<a name="html-head"></a>
## Head

If submitting a single HTML file for ingestion, authors can include within the `<head>` tags all the [Document Metadata](/docs/projects/preparing/index.html#meta) elements described below, as shown in the first example here. When including an HTML document as part of a manifest ingestion, no document metadata is required within the file, though the title metadata (`<meta name="dc.title" content="title">`) is suggested. The rest can be described in the manifest [YAML file](/docs/projects/preparing/index.html#yml).

<a name="html-sdu"></a>
### Single Document Upload
``` html
<!DOCTYPE html>
<html>
<head>
<!-- The title block immediately below this line
is only used by the system if the metadata title element
<meta name="dc.title" content="title">
is not included below. -->
    <title>Title of the Text</title>
    <meta charset="UTF-8">

<!-- This is how the Metadata Elements are structured in HTML.
Authors need only adjust what appears within the quote marks
following the content attribute. The title information in the
metadata section supersedes the title in the <title> tag above. -->
    <meta name="dc.date" content="2016-01-15">
    <meta name="dc.title" content="title">
    <meta name="dc.language" content="language">
    <meta name="dc.rights" content="rights">
    <meta name="dc.description" content="description">
    <meta name="dc.creator" content="Rowan Ono">
    <meta name="dc.contributor" content="Ida Davis">

<!-- You can define a stylesheet in the head of the document,
as shown here. -->
    <style type="text/css">
        .some-class {
            font-weight: bold;
        }
    </style>

<!-- Or, alternatively or in addition to, you can link to an
external stylesheet that's compressed (or zipped) along with
your document using the following kind of reference. -->
    <link rel="stylesheet" type="text/css" href="html_styles.css"/>
</head>

<body>
    <p>Some text.</p>
</body>
</html>
```

<a name="html-mu"></a>
### Manifest Upload

``` html
<!DOCTYPE html>
<html>
<head>
    <title>Title of the Text Section</title>
    <meta charset="UTF-8">
    <meta name="dc.title" content="title">
    <link rel="stylesheet" type="text/css" href="html_styles.css"/>
</head>
<body>
    <p>Some text.</p>
</body>
</html>
```

<a name="html-headings"></a>
## Text Headings

To ensure any headings in the text are rendered as expected from the Contents dropdown in the Manifold reader, they should be styled as such, namely with heading tags (h1–h6):

```html
<!DOCTYPE html>
<html>
<head>
	<title>Headers</title>
	<meta charset="UTF-8">
    <meta name="dc.title" content="Headers">
</head>
<body>
	<h1 class="ct">First Level Heading</h1>
	<p class="paft">Mauris viverra erat mollis, sollicitudin purus in, pellentesque nulla.</p>
	<h2 class="ct">Second Level Heading</h2>
	<p class="paft">Suspendisse scelerisque lorem at elit scelerisque mattis.</p>
	<h3 class="ct">Third Level Heading</h3>
	<p class="paft">Quisque vel velit urna.</p>
	<h4 class="ct">Fourth Level Heading</h4>
	<p class="paft">Aliquam sollicitudin varius velit, suscipit feugiat ligula faucibus quis.</p>
	<h5 class="ct">Fifth Level Heading</h5>
	<p class="paft">Curabitur placerat feugiat risus ut dapibus.</p>
	<h6 class="ct">Sixth Level Heading</h6>
	<p class="paft">Vestibulum feugiat tellus mauris, eget faucibus est molestie malesuada.</p>
</body>
</html>
```
When brought into Manifold, the above sample renders as follows. Note that Manifold only styles the first four levels of headings.

![HTML Headers](/docs/assets/projects/html-headers.png)

When a single HTML text is brought into the reader, the system will look for the headings and showcase them automatically in the Contents dropdown.

The system default when bringing an HTML text into the reader as part of a [Manifest upload](/docs/projects/preparing/index.html#manifest) simply renders the name of the text section (appearing between the <title> tags) without including any further levels of nested headings.

To include nested levels of headings for HTML texts part of a Manifest, each heading will require an `id` attribute, which will then need to be included as part of the `source_path` address in the YAML file, after a hash.

Note in the HTML example here that each heading includes its own `id` attribute (e.g., heading 1 has `id="sect1"`).

```html
<!DOCTYPE html>
<html>
<head>
	<title>Header IDs</title>
	<meta charset="UTF-8">
    <meta name="dc.title" content="Header IDs">
</head>
<body>
	<h1 class="ct" id="sect1">First Level Heading</h1>
	<p class="paft">Mauris viverra erat mollis, sollicitudin purus in, pellentesque nulla.</p>
	<h2 class="ct" id="sect2">Second Level Heading</h2>
	<p class="paft">Suspendisse scelerisque lorem at elit scelerisque mattis.</p>
	<h3 class="ct" id="sect3">Third Level Heading</h3>
    <p class="paft">Quisque vel velit urna.</p>
</body>
</html>
```

To reference those IDs in the YML file for the Manifest upload, a hash mark, followed by the id name, after the source pathway (e.g., `header-ids.html#sect1`).

```yml
meta:
  title: 'HTML Manifest'
  date: '2018-07-30'
toc:
  - label: 'HTML without Header IDs'
    source_path: header.html
    start_section: true
  - label: 'HTML with Header IDs'
    source_path: header-ids.html
    children:
      - label: 'Section 1'
        source_path: header-ids.html#sect1
      - label: 'Section 2'
        source_path: header-ids.html#sect2
      - label: 'Section 3'
        source_path: header-ids.html#sect3
```

When uploaded into Manifold, any sections that have IDs that are referenced in the YAML file will appear as navigable selections from the Contents dropdown.

![HTML Header IDs](/docs/assets/projects/html-ids.png)

<a name="html-ext"></a>
## External Resources

Authors can embed media assets, such as images, audio, and video into their content, referencing them in keeping with standard practice:

<a name="html-img"></a>
### Images

Call-outs to images in the code can be formatted like this:

``` html
<p>Some text.</p>
<img src="godzilla.jpg" alt="Alt-text for screen readers">
<p>Some more text.</p>
```

The directory that would be compressed for upload would include the HTML, image file, and any associated stylesheet.

![HTML Image Asset](/docs/assets/projects/html-image.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. When creating a zip archive to upload into Manifold, it is better to individually select all of the files and then compress them than to simply select an entire folder on which to run the compression. The latter method can result in corrupted pathways that may cause ingestion errors.
</div>

<a name="html-audio"></a>
### Audio

Call-outs to embedded audio can be formatted like this in the code:

``` html
<p>Some text.</p>
<audio controls>
  <source src="sample.ogg" type="audio/ogg">
  <source src="sample.mp3" type="audio/mpeg">
Oops, it looks like your browser does not support
this audio element.
</audio>
<p>Some more text.</p>
```

The text between the `<audio>` tags only renders if the reader's browser is unable to play the file. In this example the author has submitted two identical audio files to help protect against that possibility, as the browser automatically will play the first file it can. For more, see the [w3schools.com website](https://www.w3schools.com/html/html5_audio.asp).

With this example, the directory to be compressed would include the HTML, the audio files, and any associated stylesheet, if there was one:

![HTML Audio Asset](/docs/assets/projects/html-audio.png)

<a name="html-video"></a>
### Video

Call-outs to embedded video can be formatted like this in the code:

``` html
<p>Some text.</p>
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
Oops, it looks like your browser does not support
this video element.
</video>
<p>Some more text.</p>
```

The text between the `<video>` tags only renders if the reader's browser is unable to play the file. In this example the author has submitted two identical video files to help protect against that possibility, as the browser automatically will play the first file it can. For more, see the [w3schools.com website](https://www.w3schools.com/html/html5_video.asp).

![HTML Video Asset](/docs/assets/projects/html-video.png)
