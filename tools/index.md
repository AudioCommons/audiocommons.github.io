---
layout: default
current: tools
id: tools
title: "Tools and Resources"
description: "Tools and resources for connecting to the Audio Commons Ecosystem"
navigation: true
class: page-template
subclass: 'post page'
cover: assets/img/header_background_green.jpg
---

<header class="site-header outer {% if page.cover %}" style="background-image: url({{ site.baseurl2 }}{{ page.cover }}) {% else %}no-cover{% endif %}">
    <div class="inner">
        {% include site-nav.html %}
        <div class="site-header-content-page {% if page.current != 'home' %}small-header-padding{% endif %}">
            <h1 class="site-title-page">{{ page.title }}</h1>
            <h2 class="site-description">
                {% if page.description %}
                    {{ page.description }}
                {% endif %}
            </h2>
        </div>
    </div>
</header>

<main id="site-main" class="site-main outer" role="main">
    <div class="inner">
        <div class="post-feed">

        {% assign tools_posts = site.posts | sort: 'title' | where: "tags" , "tools" %}
            
        {% for post in tools_posts %}
            <article class="post-card {{ page.class }}{% unless post.cover %} no-image{% endunless %}">
                {% if post.cover %}
                    <a class="post-card-image-link" href="{{ site.baseurl2 }}{{ post.url | remove_first: '/' }}">
                        <div class="post-card-image" style="background-image: url({{ site.baseurl2 }}{{ post.cover }})"></div>
                    </a>
                {% endif %}
                <div class="post-card-content">
                    <a class="post-card-content-link" href="{{ site.baseurl2 }}{{ post.url | remove_first: '/' }}">
                        <header class="post-card-header">
                            <h2 class="post-card-title" style="margin-top:8px;">{{ post.title }}</h2>
                        </header>
                        <section class="post-card-excerpt">
                            <p>{{ post.content | strip_html | truncatewords: 33, "" }}...</p>
                        </section>
                    </a>
                    <footer class="post-card-meta">
                        {% for author in site.data.authors %}
                            {% if author[1].username == post.author %}
                                {% if author[1].picture %}
                                <img class="author-profile-image" src="{{ site.baseurl2 }}{{ author[1].picture }}" alt="{{ author[1].name }}" />
                                {% endif %}
                                <span class="post-card-author">
                                    <a href="{{ site.baseurl2 }}author/{{ post.author }}/">{{ author[1].name }}</a>
                                </span>
                            {% endif %}
                        {% endfor %}
                    </footer>
                </div>
            </article>
        {% endfor %}

        </div>
    </div>
</main>
