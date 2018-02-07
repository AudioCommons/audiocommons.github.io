---
layout: page
current: materials
id: materials
title: "Materials"
description: "A collection of documents, publications and other relevant resources about Audio Commons"
navigation: true
class: page-template
subclass: 'post page'
cover: assets/img/header_background_green.jpg
---


{% assign sorted_materials = site.materials | sort: 'date' %}

<div class="row_materials">
    <div class="column_materials">
        <h1>Documents</h1>
        <ul class="materials-list">
            {% assign list = sorted_materials | where: "type" , "document" %}
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
    <div class="column_materials">
        <h1>Papers</h1>
        <ul class="materials-list">
            {% assign list = sorted_materials | where: "type" , "paper" %}
            {% if list.size > 0  %}
                {% for material in list reversed %}
                    <li>
                        {{ material.authors|join: ', ' }}
                        ({{ material.date | date: '%Y' }}).
                        {% if material.link %}<a href="{{ material.link }}" target="_blank">{% endif %}
                        <b>{{ material.title }}</b>{% if material.link %}</a>{% endif %}, published in "{{material.published_in}}".
                        {% if material.download_link %}
                            Download the <a href="{{ material.download_link }}" target="_blank">full text here</a>.
                        {% endif %}
                        {% if material.preprint_link %}
                            Download the <a href="{{ material.preprint_link }}" target="_blank">pre-print here</a>.
                        {% endif %}
                        {% if material.postprint_link %}
                            Download the <a href="{{ material.postprint_link }}" target="_blank">post-print here</a>.
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
    <div class="column_materials">
        <h1>Other</h1>
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
</div>
