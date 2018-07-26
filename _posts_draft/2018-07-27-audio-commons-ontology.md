---
layout: post
cover: assets/img/cover_ontology.png
navigation: True
class: post-template
subclass: 'post'
tags: news
title:  "Audio Commons Ontology"
author: Miguel Ceriani
---

The Audio Commons Initiative aims to foster creative use of audio content, through favouring interoperability between audio tools and content repositories.
For that reason we designed a common data model for audio content, the
[Audio Commons Ontology](https://w3id.org/ac-ontology/aco).
This model has been published and documented and will soon be integrated in
multiple tools of the Audio Commons Ecosystem, perhaps most significantly in the
Audio Commons Mediator, the tool that integrates some existing content
repositories (Jamendo, Freesound, and Europeana) offering a common web API.

The Audio Commons Ontology is inspired by (and related to)
the [Music Ontology](http://purl.org/ontology/mo/)
and the [Functional Requirements for Bibliographic Records (FRBR) model](http://purl.org/vocab/frbr/core).
It offers a way to represents the relationships and metadata that are useful while searching for audio content in multiple repositories.
It defines concepts as AudioClips, AudioCollections, AudioCategories, and AudioFiles.
It further defines their relationships and the metadata that may be used to
identify, describe, and classify them.
It is formally described using
the [Web Ontology Language (OWL)](http://www.w3.org/TR/2012/REC-owl2-syntax-20121211/)
and documented
for use in its web page (https://w3id.org/ac-ontology/aco).

The data model described by the Audio Commons Ontology is central to the
Audio Commons Ecosystem and it is expected to be adopted by the services, tools,
and agents that compose the system.
The Audio Commons consortium is working on enhancing accordingly the existing
tools and develop new tools.
One of the most important tools that will be using the ontology is the Audio Commons Mediator, a piece of software that integrates three existing content
repositories (Jamendo, Freesound, and Europeana), offering a common web API to
access them in order to look for audio content in any of the three.
In the context of the mediator, the ontology will be used for the dual role of
being 1. the common data model used for integration and 2. a way to express in
the results rich data relationships that cannot be represented in the current version of the mediator.

Furthermore, the Audio Commons Ontology aims to represent audio content and its categories and relationships beyond the Audio Commons Initiative.
A scientific paper describing the ontology will be presented in October at the
[International Semantic Web Conference (ISWC) in Monterey, CA, USA](http://iswc2018.semanticweb.org/).
