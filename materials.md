---
layout: page
title: Materials
id: materials
permalink: /materials/
---

# Materials

{% assign sorted_materials = (site.materials | sort: 'date') %}

<div class="row">
    <div class="col-sm-4">
        <h2>Documents</h2>
        <ul class="materials-list">
            {% assign list = (sorted_materials | where: "type" , "document") %}
            {% if list.size > 0  %}
                {% for material in list reversed %}
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
    <div class="col-sm-4">
        <h2>Papers</h2>
        <ul class="materials-list">
            {% assign list = (sorted_materials | where: "type" , "paper") %}
            {% if list.size > 0  %}
                {% for material in list reversed %}
                    <li>
                        {% if material.link %}<a href="{{ material.link }}" target="_blank">{% endif %}
                        <b>{{ material.title }}</b>{% if material.link %}</a>{% endif %}, published in "{{material.published_in}}", {{ material.date | date: '%B %Y' }}.
                        {% if material.download_link %}
                            Download the <a href="{{ material.download_link }}" target="_blank">full text here</a>.
                        {% endif %}
                        {% if material.preprint_link %}
                            Download the <a href="{{ material.preprint_link }}" target="_blank">pre-print here</a>.
                        {% endif %}
                        {% if material.publishers_link %}
                            Publisher's <a href="{{ material.publishers_link }}" target="_blank">paper link</a>.
                        {% endif %}
                        {% if material.description %}{{ material.description }}{% endif %}
                        {% if material.license %}
                            License: {{ material.license }}.
                        {% endif %}
                    </li>
                {% endfor %}
            {% else %}
                No papers have been uploaded yet...
            {% endif %}
        </ul>
    </div>
    <div class="col-sm-4">
        <h2>Other</h2>
        <ul class="materials-list">
            {% assign list = (sorted_materials | where: "type" , "other") %}
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
</div>