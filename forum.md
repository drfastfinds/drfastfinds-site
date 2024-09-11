---
layout: page
title: "Forum"
permalink: /forum/
---

<h1>Forum</h1>

type="submit">Submit</button>
</form>

<h2>Recent Topics</h2>
<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}</li>
  {% endfor %}
</ul>

<h2>Forum Categories</h2>
<ul>
  <li><a href="/forum/general-discussion/">General Discussion</a></li>
  <li><a href="/forum/model-car-kits/">Model Car Kits</a></li>
</ul>
