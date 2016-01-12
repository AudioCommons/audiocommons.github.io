---
layout: page
title: News
id: news
permalink: /news/
---

# News

<ul class="news-list">
  {% for post in site.posts %}
    <li>
    	<div class="post-list-title">
    		<a href="{{ post.url }}">{{ post.title }}</a>
    	</div>

    	<div class="post-list-meta">
	      	{{ post.date | date: "%b %-d, %Y" }}
			{% if post.author %} • by {{ post.author }}{% endif %}
			{% if post.meta %} • {{ post.meta }}{% endif %}
		</div>
		
		<p>{{ post.content | strip_html | truncatewords: 80 }}</p>
    </li>
  {% endfor %}
</ul>