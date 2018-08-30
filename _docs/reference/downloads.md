---
layout: page
title: Downloads
menu:
  reference:
    weight: 3
---
{% for os in site.data.releases %}
  {% assign key = os[0] %}
  {% assign releases = os[1] %}
  <h2>
  {% case key %}
  {% when "ubuntu16" %}
    Ubuntu 16 Releases (x86_64)
  {% when "ubuntu18" %}
    Ubuntu 18 Releases
  {% else %}
    {{key | capitalize}} Releases (x86_64)
  {% endcase %}
  </h2>
  {% for release in releases %}
<h3>
  <a href="{{props.url}}">
    Manifold v{{ release.build_version }} for {{release.platform | capitalize}} {{release.platform_version}}
  </a>
</h3>
<p>
sha1: <span class="copy-technical">{{release.sha1}}</span><br />
sha256: <span class="copy-technical">{{release.sha256}}</span>
</p>
  {% endfor %}
{% endfor %}
