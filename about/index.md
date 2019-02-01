---
layout: page
current: about
id: about
title: "About"
description: "All about the Audio Commons Initiative"
navigation: true
class: page-template
subclass: 'post page'
cover: assets/img/header_background_green.jpg
---


# The Audio Commons Project

The **Audio Commons Initiative** aims at *bringing Creative Commons audio content to the creative industries*. But what does this mean?
We realise that significant amounts of user-generated audio content, such as **sound effects**, **field recordings**, **musical samples** and **music pieces** (among others), are uploaded to online repositories and made available under [Creative Commons](https://creativecommons.org) licenses. 
Furthermore, a constantly increasing amount of multimedia content, originally released with traditional copyright licenses, is  becoming public domain as its copyright expires. 
However, we believe that the professional creative industries (e.g. videogames, film and music industries) are **not yet using much of all this content** in their media productions.

There are a number of reasons why such content is not yet extensively used in the professional sector.  We think that a major one is the lack of a **shared culture** within the creative industries of open content and its potential use. But there are also **technical and practical issues** that do not facilitate this usage. Despite the amount of Creative Commons audio content available in online repositories such as [Jamendo](http://www.jamendo.com) or [Freesound](http://www.freesound.org), other potentially useful content remains scattered around the web (if available at all) and typically not properly labeled with specific licenses or reachable through search engines.
Also, the nature of this content, coming from a variety of sources and from authors with different levels of expertise, results in unstructured (or **not uniformly structured**) mass of resources, limiting its potential retrieval and reuse possibilities.
Moreover, no tools are easily available to search and incorporate Creative Commons audio content in the **production workflows** of the creative industries.

The **Audio Commons Initiative** is therefore aimed at promoting the use of open audio content and at developing technologies with which to support an envisioned **ecosystem** of content repositories, production tools and users (the [Audio Commons Ecosystem](#the-audio-commons-ecosystem)). These technologies enable the reuse of this audio material, facilitating its integration in the production workflows of the creative industries.

The Audio Commons Initiative has been the result of the **EU funded project AudioCommons**, which finished on January 2019. However the ideas behinf the initiative and the tools and technologies that have been developed are still available and continue existing to pursue our goals. The AudioCommons project consortium was formed by leading research institutes in sound and music computing and key players in the creative industries. Follow us on Twitter at [**@AudioCommons**](https://twitter.com/AudioCommons).


# The Audio Commons Ecosystem

The Audio Commons Initiative supports an ecosystem of content, users and tools that facilitates the reuse of Creative Commons audio content in the professional sector and, by extension, in the independent or non-professional sectors too. We call this the **Audio Commons Ecosystem** (or **ACE**).
In short, the Audio Commons Ecosystem allows content creators to expose their Creative Commons audio content to content users in the creative industries, and provide ways for its seamless integration in creative workflows. The figure below shows a conceptual diagram of the different components interconnected in our vision of the ACE.
            
<a href="/assets/img/diagram.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;" class="img-responsive" src="/assets/img/diagram2.png" alt="The Audio Commons Ecosystem"></a>
            
As it can be seen in the diagram, audio content created by the **content creators** is exposed in the ACE through a number of **content providers**. Content providers host that content and publish it following a common metadata specification as defined by an audio ontology (the **Audio Commons ontology**), and make it available to **content users** through **embeddable tools** (e.g.,~audio plug-ins) developed by **tool developers**. 
Content providers are able to communicate with the embeddable tools through a unified API specification (the **Audio Commons API specification**) which does not only manage information about audio content and retrieval but also handles licensing procedures between content creators and content users. Alternatively, embedabble tools and services can also communicate using individual APIs offered by the services.
Furthermore, because of the nature of Creative Commons licenses, content users are also be able to **become content creators** by feeding back derivative or new content to the ecosystem.

Some of the the technologies needed to support this ecosystem have been developed within the AudioCommons project, including some embeddable tools developed by industrial partners of the [consortium](/team). However, most of the components to support such an ecosystem did in fact already exist before the project in a form or another. There already exist sound sharing platforms such as [Jamendo](www.jamendo.com), [Freesound](www.freesound.org), [cc-Mixter](http://www.ccmixter.org) and others that host Creative Commons audio content and that have APIs through which it can be retrieved by third-party applications. There exist a number of tools for annotating audio content (some supported by the members of the consortium), and there exist some tools for the creative industries which integrate Creative Commons content from online platforms such as [Ardour](https://ardour.org), a digital audio workstation which can directly retrieve content from Freesound. You'll find a list of **Audio Commons Ecostystem tools and technologies** in the [tools section](/tools) of this website.


# Research Topics

In order to make Creative Commons audio content reusable in the creative industries there are some clearly defined issues that can be faced through the research and development of new technologies and improvement of existing ones. The Audio Commons Initiative, as a supported research and innovation action, has focused its research efforts on the following topics:

  * **Intellectual property and business models**: commonly understood frameworks for publishing and master rights to particular audio and music recordings are be challenged within the ACE’s framework, and we did research on making those challenges understandable, and ultimately, useful for the industry. In the first instance, this involves understanding the rights management requirements in a high-reuse scenario such as the one we envision, and usage recommendations made as necessary. Research into emerging business models possibly created by ACE interaction with publishers/creators/consumers has also been carried out.

  * **Audio Ontologies**: an important part of the research in Audio Commons has been focused on defining an ontology for the unified annotation of audio content able to allow proper representation and retrieval of content in different use cases of the creative industries. We grounded the design of the ontology in requirements collected from the industry and extend existing work on multimedia semantic representation. The concepts of the ontology serve as a guide for the semantic audio annotation technologies that have developed and can be adopted by external tools.

  * **Semantic description of audio content**: we worked on improving the state-of-the-art in sound and music description and semantic representation technologies. We focused our research on aspects that have been usually overlooked in existing literature such as the development of descriptors targeted to short music samples, perceptual audio qualities and confidence measures. We focused both on the description of music content (i.e. music pieces and music samples), and also on the description of non-musical properties of audio signals.


# Funding

The Audio Commons Initiative has been funded by the European Commission through the [Horizon 2020](http://ec.europa.eu/programmes/horizon2020/) programme, **research and innovation grant 688382**.

<a href="https://ec.europa.eu/programmes/horizon2020/" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;" class="img-responsive" src="/assets/img/sup_logo_ec.png" alt="European Comission"></a>
 

