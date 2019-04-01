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
