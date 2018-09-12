---
layout: page
title: EPUB
menus:
  preparing-texts:
    weight: 1
---

Both EPUB2 and EPUB3 formats are viable on Manifold. For best results, make sure your EPUB file [validates](http://validator.idpf.org/) with no errors before loading it to the system.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. There are no file size limitations for EPUB uploads.
</div>

If you are creating your EPUB file from a program like InDesign, avoid exporting it as a fixed-layout document (FXL): fixed-layout EPUBs are structured very specifically to mimic the look of a printed work, and the format of the underlying coding will prevent your file from ingesting correctly into Manifold.

The table of contents represented in the `toc.ncx` or `toc.xhtml` files (for EPUB versions 2 or 3, respectively) will be mirrored in the Manifold reader's [Contents dropdown](/docs/reading/interface.html#contents).

The [title bar](/docs/reading/interface.html#title-bar) in the Manifold reader secures the title of the text from the `dc:title` element in EPUB's `content.opf` file. The title of individual sections, which also display in the title bar are first looked for in the `toc.ncx` or `toc.xhtml` files. If the system cannot find one there for a section, it will then look to the individual XHTML files, beginning by searching for a top-level header, or, failing that, the `<title>` element.

![View Contents Button](/docs/assets/projects/view-contents.png)

The View Contents button will only appear if the EPUB that has been loaded into the system is marked as a [published text](/docs/projects/customizing/texts.html#published-texts) and has a file with a section that includes `epub:type="toc"` as one of its attributes. That attribute tells the system that this is the manually crafted table of contents (akin to a contents page in a printed work). In most cases the Contents dropdown and the View Contents button should showcase the same information. However, if your work requires a more tailored navigational approach, it is possible to achieve that by adjusting the respective source files.

For more about the EPUB spec, please refer to the standard as defined on the [IDPF website](http://idpf.org/epub/31).

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. It is not possible to include an EPUB document as part of a <a href="/docs/projects/preparing/index.html#manifest">Manifest upload</a>.
</div>
