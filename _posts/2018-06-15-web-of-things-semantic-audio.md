---
layout: post
cover: assets/img/W3C_WoT_demo.jpg
navigation: True
class: post-template
subclass: 'post'
tags: news
title:  "Web of Things in the Semantic Audio Domain"
author: Fabio Viola
---

**Semantic Web** technologies are increasingly being used in the **Internet of Things** (IoT). In fact, Semantic Web is the key element to overcome diversity of devices and protocols and win the great challenge of making heterogeneous entities able to interoperate. Unfortunately, SPARQL endpoints still provide only a standard interface to deliver information over HTTP according to a **request/response paradigm**. Dynamic scenarios, like those proposed by the IoT, require proper mechanisms to timely gather information to the consumers. This is the purpose behind the SPARQL Event Processing Architecture, **SEPA** [1]. This is the name of the software platform developed at the University of Bologna to transparently implement the **publish/subscribe paradigm** on top of a standard SPARQL endpoint. Through the [SPARQL Subscribe Language](http://wot.arces.unibo.it/TR/sparql11-subscribe.html) it is possible to declare the interest in a given subgraph (the syntax is really close that of SPARQL Query Language) and be notified whenever its content changes.

<a href="/assets/img/sepa.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:600px; border:1px solid #DEDEDE" class="img-responsive" src="/assets/img/sepa.png" alt="Diagram of the system.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 1. Diagram of the system.</em></p>

SEPA was presented at the [W3C Web of Things Meeting in Düsseldorf](https://www.wespeakiot.com/w3c-meeting-dusseldorf-another-step-towards-iot-standardization/) and adopted in the [Italian Research Project HABITAT (*Home Assistance Basata su Internet of Things per l’Autonomia di Tutti*)](http://www.habitatproject.info/) and is currently employed in the EU funded Research Project [SWAMP (Smart WAter Management Platform)](http://swamp-project.org/). Now it is time for a new challenge… Is SEPA also suitable for the **Semantic Audio** domain? With [my research](https://www.unibo.it/sitoweb/fabio.viola/) I will try to answer this question. I am a 3rd year PhD student of the University of Bologna and I am currently spending a period as a visitor in the C4DM with the aim of evaluating the usage of Web of Things paradigms and tools in the Semantic Audio research area.

A first result of my investigation is the development of a recommendation system based on the (Semantic) [**Web of Things** paradigm](https://www.w3.org/WoT/): multiple agents (i.e. web things) cooperate through SEPA to 1) retrieve audio content from Europeana, Freesound and Jamendo based on a text research 2) perform audio analysis to determine similarity and reject bad results. This research contribution has been developed for Playsound [2] and represents a first exploratory work toward another, broader research task. The latter is about efficient and effective ways to map Audio Commons Content Providers’ API messages to a common format according to the [Audio Commons Ontology](https://www.audiocommons.org/assets/files/AC-WP2-QMUL-D2.3%20Final%20ontology%20specification.pdf). The aim is to simplify access to the wide sets of audio contents made available by Content Providers through a common semantic layer. By the end of my visit, I expect to contribute to the integration of the SPARQL Event Processing Architecture in the Semantic Audio Ecosystem as a building block for a new interoperability platform.

**Resources**

* [1] Roffia, L., Azzoni, P., Aguzzi, C., Viola, F., Antoniazzi, F., & Salmon Cinotti, T. (2018). Dynamic Linked Data: A SPARQL Event Processing Architecture. Future Internet, 10(4), 36.
* [2] Stolfi, A., Ceriani, M., Turchet, L., & Barthet, M. (2018). Playsound.space: Inclusive Free Music Improvisations Using Audio Commons. In Proceedings of the New Interfaces for Musical Expression (NIME ’18). Blacksburg, Virginia, USA.
