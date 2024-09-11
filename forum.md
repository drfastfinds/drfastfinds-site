---
layout: page
title: "Forum"
permalink: /forum/
---

<h1>Forum</h1>
<ul>
  <li><a href="https://drfastfinds.github.io/drfastfinds-site/forum/general-discussion/">General Discussion</a></li>
  <li><a href="https://drfastfinds.github.io/drfastfinds-site/forum/model-car-kits/">Model Car Kits</a></li>
</ul>

<!-- Forum Index Page -->
<h1>Forum</h1>
<h2>Create a New Topic</h2>
<form action="https://your-staticman-instance.herokuapp.com/v3/entry/github/drfastfinds/drfastfinds-site/master/forum/topics" method="POST">
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
  {% for post in site.forum %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}</li>
  {% endfor %}
</ul>
