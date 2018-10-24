---
layout: post
cover: assets/img/cover_AbbeyRoad.jpg
navigation: True
class: post-template
subclass: 'post'
tags: news
title:  "Abbey Road Industry Day"
author: Alessia Milo
---

On the 24th of October, a small delegation from Audio Commons is taking part in the event organised at Abbey Road Studios by [FAST IMPACT](https://semanticaudio.ac.uk).

The [Audio Commons Initiative](https://www.audiocommons.org/about/) aims to foster creative use of audio content, through favouring interoperability between audio tools and content repositories. The project will be introduced to the attendees and we will present some of the tools developed throughout the Audio Commons experience.


The Audio Commons Ecosystem (ACE) [12] refers to a series of technologies and actors involved in publishing and consuming Audio Commons content. The Audio Commons content (AC) refers to audio content released under Creative Commons licenses and enhanced with meaningful contextual information (e.g. annotations, license information) that enables its publication in the ACE. Next, we briefly present three tools developed by industry partners in the AudioCommons project. The designs of these tools were based on user requirements obtained from the online survey presented in Section 3. A more thorough description of these tools can be found in [2].

## SampleSurfer


SampleSurfer from Waves provides an audio content search engine embedded in the digital audio workstation with instant listening capabilities, phrase looper, and transparent listing of licensing terms including Creative Commons content. Using SampleSurfer users are able to efficiently share, use and manipulate sounds within their DAW.

SampleSurfer SampleSurfer (SS) is a plugin developed by Waves Audio Ltd. that serves as an audio content search engine based on semantic metadata and musical features (see Figure 3). The plugin is designed to integrate crowdsourced sound and music samples in a DAW-based environment by providing basic editing capabilities (e.g. fades, trims) to optimize the music production workflow. It supports well established DAW applications, such as Apple Logic Pro X and Ableton Live. From a query, the user gets back a filtered list, from which sounds can be selected and downloaded.

<a href="/assets/img/cover_ontology.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/cover_ontology.png" alt="ACE Ontology diagram.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 1. Diagram of the Audio Commons Ontology</em></p>

You can watch a demonstrative video there

## AudioTexture

AudioTexture is LeSound’s sound texture synthesis technology released as a DAW plugin. AudioTexture allows sound designers to make use of any sound texture recordings available and create new sound textures, with semantic controls, for film/TV post-production and video games.

AudioTexture AudioGaming’s AudioTexture (AT) plugin performs sound texture synthesis leveraging (local or) crowdsourced sounds (see Figure 3). The plugin has a user interface that integrates Audio Commons content and promotes creative sonic or musical explorations. AudioTexture is based on concatenative synthesis [20], a technique that refers to the computational generation of sonic textures using existing sound samples. This plugin is equipped with semantic descriptors for intuitive control to generate many variations from a given sound sample and is suitable for a digital audio workstation (DAW) environment, such as Apple Logic Pro X, Ableton Live, or Reaper.

<a href="/assets/img/cover_ontology.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/cover_ontology.png" alt="ACE Ontology diagram.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 1. Diagram of the Audio Commons Ontology</em></p>

## Timbral Explorer


Identifying suitable sound effects for an audio project can be a difficult task but current tools are typically limited to keyword search. Filtering and sorting sound effects by their timbral and reverberant characteristics offers a better solution. As part of the AudioCommons project we have developed perceptual algorithms capable of predicting the Hardness, Depth, Brightness, Roughness, Warmth, Sharpness, Boominess, and Reverberation of sound effects to rank, filter, or limit the range of search results, assisting users to find the sound effects they want.

<a href="/assets/img/cover_ontology.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/cover_ontology.png" alt="ACE Ontology diagram.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 1. Diagram of the Audio Commons Ontology</em></p>


You can find more information at this [blog post](https://www.audiocommons.org/2018/09/05/timbre-sound.html)

## Freesound and Freesound Explorer

"Music Technology Group
Universitat Pompeu Fabra"

Freesound (https://freesound.org) is an online collaborative sound database hosting more than 380k sounds by 20k contributors and published under Creative Commons licenses that allow easy reuse and modification in both commercial and non-commercial projects. Freesound is the biggest Creative Commons sound database with120M downloads since 2005. Freesound was developed at the Music Technology Group of Universitat Pompeu Fabra, one of the leading music technology research groups worldwide.

Freesound Explorer is a visual interface for exploring Freesound in a 2-dimensional space and create music at the same time :)

Using Freesound Explorer you can perform text-based queries in Freesound, and see the results arranged in a 2-dimensional space. A well known dimensionality reduction technique is used (tSNEJS) to learn a space from spectral audio features provided by Freesound. In this way, sounds are self-organised according to some sort of timbre similarity.

Freesound Explorer is implemented as a web application which takes advantage of modern web technologies including the Web Audio API and the Web MIDI API. Freesound Explorer also uses a Python Flask backend for handling user accounts, but it can also be run statically without the backend (with reduced functionality and no user handling).

https://labs.freesound.org/apps/freesound-explorer.html

https://labs.freesound.org/fse/

Tutorial by Frederic

https://www.audiocommons.org/2018/07/15/audio-commons-audio-extractor.html


<a href="/assets/img/cover_ontology.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/cover_ontology.png" alt="ACE Ontology diagram.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 1. Diagram of the Audio Commons Ontology</em></p>



## Jam with Jamendo

“Jam with Jamendo” brings music learners and unsigned artists together by recommending suitable songs as new and varied practice material. In this web app, users are presented with a list of songs based on their selection of chords. They can then play along with the chord transcriptions or use the audio as backing tracks for solos and improvisations. Using AI-generated transcriptions makes it trivial to grow the underlying music catalogue without human effort.


http://www.semanticaudio.ac.uk/demonstrators/jam-with-jamendo/

<a href="/assets/img/cover_ontology.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/cover_ontology.png" alt="ACE Ontology diagram.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 1. Diagram of the Audio Commons Ontology</em></p>


## MuSST

The Audio Commons Music and Sound Search Tool (MuSST) is a web interface for accessing Audio Commons sounds and music pieces provided by Freesound, Jamendo and Europeana. The Audio Commons Initiative aims to bring Creative Commons (CC)-licensed audio content to musicians and the creative media industries.
The MuST web interface allow users to search for and browse sound and music content from several sources (online digital audio libraries) within the Audio Commons ecosystem. It includes a search feature to retrieve audio content from several providers. At the moment, the following content providers are part of the ecosystem:
Freesound, a collaborative repository of CC licensed audio samples;
Jamendo, a music content website and community of musicians and music lovers;
Europeana, an European digital platform for cultural heritage.
The results can be sorted according to different criteria and eventually the audio files can be downloaded by users. Direct access to the source on content provider service is also made possible.



## Playsound


Playsound.space is a web-based tool to search for and play Creative Commons-licensed sounds. It can be used for music making in contexts such as free music improvisation, soundscape composition and sound discovery. The system provides a fast access to about 400k non-musical and musical sounds from Freesound and allows users to play and loop them in layered ways. Sound discovery and selection are facilitated by the use of semantic searches, metadata and visual sound representations (spectrograms). Aiming to design an intuitive music making tool for both novices and trained musicians, the site has also recording capabilities and attribution of credits to the original authors of the sounds from Freesound.org.

https://www.audiocommons.org/2018/06/01/nime-2018-playsound.html


<a href="/assets/img/cover_ontology.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/cover_ontology.png" alt="ACE Ontology diagram.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 1. Diagram of the Audio Commons Ontology</em></p>


## References
