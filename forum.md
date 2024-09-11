---
layout: page
title: "Forum"
permalink: /forum/
---

<h1>Forum Categories</h1>
<ul>
  <li><a href="/forum/general-discussion/">General Discussion</a></li>
  <li><a href="/forum/model-car-kits/">Model Car Kits</a></li>
</ul>

<h2>Recent Topics</h2>
<ul>
  {% for post in site.forum %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}</li>
  {% endfor %}
</ul>
