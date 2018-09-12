---
layout: page
title: Pages
menus:
  records:
    weight: 1
---

Pages are a means to provide users contextual materials related to your Manifold installation. For example, you might create an about page in the header. Or, you could setup links to a privacy policy or terms and conditions in the footer. Pages can be used to author custom pages for an instance or as a means to link to already existing externally hosted ones (e.g., your university's privacy policy).

![Pages](/docs/assets/customizing/pages1.png)

From the `Pages` submenu you can modify existing pages or create a new one by clicking `Add a New Page`. When you choose to create a page, you will need to provide a name for the page in the `Page Title` field.

If the the page you want to add to your instance already exists on an external site, click the `External Page?` slider and enter the absolute URL in the `External URL` field.

![Page URL](/docs/assets/customizing/page-url.png)

To author a new page on the platform, leave the `External Page?` slider unmoved and enter a slug for the page you are creating. If you do not provide a slug, the system will automatically create one on your behalf.

![Page Slug](/docs/assets/customizing/page-slug.png)

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
For more on URL slugs, see the <a href="/docs/projects/customizing/general.html">Customizing section</a>.
</div>

Once you have input this information and clicked `Save Page`, you will be taken to the page's settings, grouped under `General` and `Page States` headings.

![Pages](/docs/assets/customizing/page_general.png)

### General

#### Page Title

Adjusting this field changes the title of the page as it appears on the page itself.

#### Navigation Title

If you want to change or truncate how the link to your page is titled in header/footer navigation, you can enter that in this field. For instance, you might title your page `About`, but the navigation title might read `About Us`.

#### Purpose

The Purpose dropdown allows you to categorize your page as one of the following:

- Supplemental Content
- Privacy Policy
- Terms and Conditions

Users cannot designate more than one page as a Privacy Policy or Terms and Conditions. But multiple pages can be registered as Supplemental Content.

#### External Page?

You can adjust whether you page is authored on Manifold or hosted elsewhere after having created it. To do so, simply adjust this slider on or off. When slid on, the `Body` field below will be replaced by with an `External URL` field where you can input the absolute URL of the page you are linking to.

#### Slug

To adjust the slug you entered when creating the page, adjust this field. Changes here will affect references to this page you may have shared outside the site, so it may be necessary for others to adjust their bookmarks or links accordingly.

#### Body

The `Body` field provides a space where you can input the content of your page. This field allows content to be formatted in accordance with [GitHub-flavored Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/).

### Page States

To manage visibility of your page you can adjust the slider dials in this section. You have the option to to have a link to the page appear in the navigation bars in the header, footer, or to hide the link to the page entirely.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. To have a link to the page appear in either the header or footer, <code>Hide Page</code> needs to be toggled off.
</div>
