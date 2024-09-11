---
layout: page
title: "Forum"
permalink: /forum/
---

<h1>Forum</h1>

<!-- Forum Index Page -->
<h2>Create a New Topic</h2>
<form action="https://staticman3.org/v3/entry/github/drfastfinds/drfastfinds-site/master/forum/topics" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Submit</button>
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
