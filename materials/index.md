---
layout: page
current: materials
id: materials
title: "Materials"
description: "A collection of documents, publications and other relevant materials about Audio Commons"
navigation: true
class: page-template
subclass: 'post page'
cover: assets/img/header_background_green.jpg
---

{% assign sorted_materials = site.materials | sort: 'authors' %}

<div>
    <br>
    Sections: <a href="#deliverables">Project Deliverables</a> | <a href="#papers">Published Papers</a> | <a href="#other">Other Materials</a>
</div>

<div class="row_materials">
    <h1>Project Deliverables</h1><a name="deliverables"></a>
    <ul class="materials-list">
        {% assign list = sorted_materials | where: "type" , "document" %}
        {% assign new_list = list | sort: 'title' %}
        {% if list.size > 0  %}
            {% for material in new_list %}
                <li>
                    {% if material.link %}<a href="{{ material.link }}" target="_blank">{% endif %}
                    <b>{{ material.title }}</b>{% if material.link %}</a>{% endif %}{% if material.date %}, {{ material.date | date: '%B %Y' }}.{% endif %}
                    {% if material.download_link %}
                        <a href="{{ material.download_link }}" target="_blank">Download here</a>.
                    {% endif %}
                    {% if material.description %}{{ material.description }}{% endif %}
                    {% if material.license %}
                        License: {{ material.license }}.
                    {% endif %}
                </li>
            {% endfor %}
        {% else %}
            No documents have been uploaded yet...
        {% endif %}
    </ul>
</div>
<div class="row_materials">
    <h1>Published Papers</h1><a name="papers"></a>
    
    {% assign list = sorted_materials | where: "type" , "paper_2019" %}
    <h2>2019 ({{list.size}})</h2>
    <ul class="materials-list">
        {% for material in list %}
            <li>
                {{ material.authors }}
                ({{ material.date | date: '%Y' }}).
                {% if material.link %}<a href="{{ material.link }}" target="_blank">{% endif %}
                <b>{{ material.title }}</b>{% if material.link %}</a>{% endif %}, published in "{{material.published_in}}".
                {% if material.download_link %}
                    Full details and access <a href="{{ material.download_link }}" target="_blank">here</a>.
                {% endif %}
            </li>
        {% endfor %}
    </ul>
    
    {% assign list = sorted_materials | where: "type" , "paper_2018" %}
    <h2>2018 ({{list.size}})</h2>
    <ul class="materials-list">
        {% for material in list %}
            <li>
                {{ material.authors }}
                ({{ material.date | date: '%Y' }}).
                {% if material.link %}<a href="{{ material.link }}" target="_blank">{% endif %}
                <b>{{ material.title }}</b>{% if material.link %}</a>{% endif %}, published in "{{material.published_in}}".
                {% if material.download_link %}
                    Full details and access <a href="{{ material.download_link }}" target="_blank">here</a>.
                {% endif %}
            </li>
        {% endfor %}
    </ul>

    {% assign list = sorted_materials | where: "type" , "paper_2017" %}
    <h2>2017 ({{list.size}})</h2>
    <ul class="materials-list">
        {% for material in list %}
            <li>
                {{ material.authors }}
                ({{ material.date | date: '%Y' }}).
                {% if material.link %}<a href="{{ material.link }}" target="_blank">{% endif %}
                <b>{{ material.title }}</b>{% if material.link %}</a>{% endif %}, published in "{{material.published_in}}".
                {% if material.download_link %}
                    Full details and access <a href="{{ material.download_link }}" target="_blank">here</a>.
                {% endif %}
            </li>
        {% endfor %}
    </ul>

    {% assign list = sorted_materials | where: "type" , "paper_2016" %}
    <h2>2016 ({{list.size}})</h2>
    <ul class="materials-list">
        {% for material in list %}
            <li>
                {{ material.authors }}
                ({{ material.date | date: '%Y' }}).
                {% if material.link %}<a href="{{ material.link }}" target="_blank">{% endif %}
                <b>{{ material.title }}</b>{% if material.link %}</a>{% endif %}, published in "{{material.published_in}}".
                {% if material.download_link %}
                    Full details and access <a href="{{ material.download_link }}" target="_blank">here</a>.
                {% endif %}
            </li>
        {% endfor %}
    </ul>

    {% assign list = sorted_materials | where: "type" , "paper_2015" %}
    <h2>2015 ({{list.size}})</h2>
    <ul class="materials-list">
        {% for material in list %}
            <li>
                {{ material.authors }}
                ({{ material.date | date: '%Y' }}).
                {% if material.link %}<a href="{{ material.link }}" target="_blank">{% endif %}
                <b>{{ material.title }}</b>{% if material.link %}</a>{% endif %}, published in "{{material.published_in}}".
                {% if material.download_link %}
                    Full details and access <a href="{{ material.download_link }}" target="_blank">here</a>.
                {% endif %}
            </li>
        {% endfor %}
    </ul>
</div>
<div class="row_materials">
    <h1>Other Materials</h1><a name="other"></a>
    <ul class="materials-list">
        {% assign list = sorted_materials | where: "type" , "other" %}
        {% if list.size > 0  %}
            {% for material in list reversed %}
                <li>
                    {% if material.link %}<a href="{{ material.link }}" target="_blank">{% endif %}
                    <b>{{ material.title }}</b>{% if material.link %}</a>{% endif %}{% if material.date %}, {{ material.date | date: '%B %Y' }}.{% endif %}
                    {% if material.download_link %}
                        <a href="{{ material.download_link }}" target="_blank">Download here</a>.
                    {% endif %}
                    {% if material.repository_link %}
                        Check out the <a href="{{ material.repository_link }}" target="_blank">code repository here</a>.
                    {% endif %}
                    {% if material.description %}{{ material.description }}{% endif %}
                    {% if material.license %}
                        License: {{ material.license }}.
                    {% endif %}
                </li>
            {% endfor %}
        {% else %}
            No other items have been uploaded yet...
        {% endif %}
    </ul>
</div>

