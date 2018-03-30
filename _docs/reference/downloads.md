---
layout: page
title: Downloads
menu:
  reference:
    weight: 3
---
{% for release in site.data.releases.debian %}
  {% assign key = release[0] %}
  {% assign props = release[1] %}
  <h2>
    <a href="{{props.url}}">
      Manifold v{{ key }} - Debian
    </a>
  </h2>
  <table width="100%">
    <thead>
      <tr>
        <th style="text-align: left">Property</th>
        <th style="text-align: left">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: left"><strong>sha1</strong></td>
        <td style="text-align: left; font-size: 16px;">{{props.sha1}}</td>
      </tr>
      <tr>
        <td style="text-align: left"><strong>sha256</strong></td>
        <td style="text-align: left; font-size: 16px;">{{props.sha256}}</td>
      </tr>
      <tr>
        <td style="text-align: left"><strong>git revision</strong></td>
        <td style="text-align: left; font-size: 16px;">{{props.build_git_revision}}</td>
      </tr>
      <tr>
        <td style="text-align: left"><strong>platform</strong></td>
        <td style="text-align: left; font-size: 16px;">{{props.platform}}</td>
      </tr>
      <tr>
        <td style="text-align: left"><strong>platform version</strong></td>
        <td style="text-align: left; font-size: 16px;">{{props.platform_version}}</td>
      </tr>
      <tr>
        <td style="text-align: left"><strong>platform architecture</strong></td>
        <td style="text-align: left; font-size: 16px;">{{props.arch}}</td>
      </tr>
    </tbody>
  </table>
{% endfor %}
