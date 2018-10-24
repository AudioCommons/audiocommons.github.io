---
layout: post
cover: assets/img/cover_Abbey.jpg
navigation: True
class: post-template
subclass: 'post'
tags: news
title:  "Abbey Road Industry Day"
author: Alessia Milo
---

On the 24th of October, some of the tools developed within the [Audio Commons Initiative](https://www.audiocommons.org/about/) will be presented at the event organised by [FAST IMPACT](http://www.semanticaudio.ac.uk/) at [Abbey Road Studios](https://www.abbeyroad.com/) for the [FAST Industry Day](http://www.semanticaudio.ac.uk/events/fast-industry-day/).

The Audio Commons Ecosystem (ACE) refers to a series of technologies and actors involved in publishing and consuming Audio Commons content. The Audio Commons content (AC) refers to audio content released under Creative Commons licenses and enhanced with meaningful contextual information (e.g. annotations, license information) that enables its publication in the ACE.

Below we present some tools for music production and discovery that have been developed and tested throughout our research.




## SampleSurfer

SampleSurfer from [Waves Audio Ltd](https://www.waves.com/). provides an audio content search engine embedded in the digital audio workstation with instant listening capabilities, phrase looper, and transparent listing of licensing terms including Creative Commons content. With SampleSurfer users are able to efficiently share, use and manipulate sounds within their DAW.


<a href="/assets/img/SampleSurfer.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/SampleSurfer.png" alt="SampleSurfer by Waves Ltd.">
</a>


<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 1. SampleSurfer by Waves Audio Ltd.</em></p>



<iframe src="https://drive.google.com/file/d/12GIa5cn1CXPaw-UtRAjMiSEq2fopV0tY/preview" width="640" height="400"></iframe>

<p style="text-align:center; padding-top:0; font-size:85%"><em>SampleSurfer Video Demonstrator</em></p>



## AudioTexture

[AudioTexture](https://lesound.io/product/audiotexture/) is LeSound’s sound texture synthesis technology released as a DAW plugin. AudioTexture allows sound designers to make use of any sound texture recordings available and create new sound textures, with semantic controls, for film/TV post-production and video games.


<a href="/assets/img/AudioTexture.jpg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/AudioTexture.jpg" alt="AudioTexture by LeSound (AudioGaming)).">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 2. AudioTexture by LeSound (AudioGaming)</em></p>


<iframe src="https://drive.google.com/file/d/19PtLbI8CCiqTO-L7WGwNtwUZAdWRxmp6/preview" width="640" height="400"></iframe>

<p style="text-align:center; padding-top:0; font-size:85%"><em>AudioTexture Video Demonstrator</em></p>



## Timbral Explorer


Identifying suitable sound effects for an audio project can be a difficult task but current tools are typically limited to keyword search. Filtering and sorting sound effects by their timbral and reverberant characteristics offers a better solution. As part of the AudioCommons project we have developed perceptual algorithms capable of predicting the Hardness, Depth, Brightness, Roughness, Warmth, Sharpness, Boominess, and Reverberation of sound effects to rank, filter, or limit the range of search results, assisting users to find the sound effects they want.

<a href="/assets/img/diagram_timbral_searches.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/diagram_timbral_searches.png" alt="Timbral attribute search frequency on freesound.org.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 3. How often each timbral attribute is searched on freesound.org</em></p>

<iframe src="https://andyp103.github.io/SoundMapVisualiserDemo/" height="600" width="900"><a href="https://andyp103.github.io/SoundMapVisualiserDemo/">https://andyp103.github.io/SoundMapVisualiserDemo/</a></iframe>

<p style="text-align:center; padding-top:0; font-size:85%"><em>SoundMapVisualiser Demo</em></p>

Explore the Sound Map Visualiser Demo in full screen [here](https://andyp103.github.io/SoundMapVisualiserDemo/).

You can find more information in this [blog post](https://www.audiocommons.org/2018/09/05/timbre-sound.html) by Andy Pearce.



## Freesound


[Freesound](https://freesound.org) is an online collaborative sound database hosting more than 380k sounds by 20k contributors and published under Creative Commons licenses that allow easy reuse and modification in both commercial and non-commercial projects. Freesound is the biggest Creative Commons sound database with120M downloads since 2005. Freesound was developed at the [Music Technology Group of Universitat Pompeu Fabra](https://www.upf.edu/web/mtg), one of the leading music technology research groups worldwide.


<a href="/assets/img/freesound.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/freesound.png" alt="Freesound.org">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 4. Freesound.org</em></p>



Frederic Font explains in this [blog post](https://www.audiocommons.org/2018/07/15/audio-commons-audio-extractor.html) how to use the Audio Commons Audio Extractor with Freesound.



<!-- Freesound Explorer is a visual interface for exploring Freesound in a 2-dimensional space and create music at the same time :)

<iframe src="https://labs.freesound.org/fse/" height="600" width="900"><a href="https://labs.freesound.org/fse/">https://labs.freesound.org/fse/</a></iframe>

Using Freesound Explorer you can perform text-based queries in Freesound, and see the results arranged in a 2-dimensional space. A well known dimensionality reduction technique is used (tSNEJS) to learn a space from spectral audio features provided by Freesound. In this way, sounds are self-organised according to some sort of timbre similarity.

Freesound Explorer is implemented as a web application which takes advantage of modern web technologies including the Web Audio API and the Web MIDI API. Freesound Explorer also uses a Python Flask backend for handling user accounts, but it can also be run statically without the backend (with reduced functionality and no user handling).

https://labs.freesound.org/apps/freesound-explorer.html

https://labs.freesound.org/fse/ -->




## Jam with Jamendo

[Jam with Jamendo](http://eecs.qmul.ac.uk/~johan/jam-with-jamendo/) brings music learners and unsigned artists together by recommending suitable songs as new and varied practice material. In this web app, users are presented with a list of songs based on their selection of chords. They can then play along with the chord transcriptions or use the audio as backing tracks for solos and improvisations. Using AI-generated transcriptions makes it trivial to grow the underlying music catalogue without human effort.

<a href="/assets/img/Jam-image-1.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/Jam-image-1.png" alt="Jam wih Jamendo: chords selection">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 5. Jam wih Jamendo: chords selection</em></p>


<a href="/assets/img/Jam-Image-2.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/Jam-Image-2.png" alt="Jam wih Jamendo: song player">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 6. Jam wih Jamendo: song player</em></p>


Play with Jam with Jamendo in full screen [here](http://eecs.qmul.ac.uk/~johan/jam-with-jamendo/).
View more information on Jam with Jamendo [here](http://www.semanticaudio.ac.uk/demonstrators/jam-with-jamendo/).


## MuSST

The Audio Commons [Music and Sound Search Tool](audiocommons.jamendo.com) (MuSST) is a web interface that allows users to search for and browse sound and music content from several sources (online digital audio libraries) within the Audio Commons ecosystem. It includes a search feature to retrieve audio content from several providers. At the moment, the following content providers are part of the ecosystem: [Freesound](https://freesound.org/), a collaborative repository of CC licensed audio samples; [Jamendo](https://www.jamendo.com/), a music content website and community of musicians and music lovers; [Europeana](https://www.europeana.eu/portal/en), an European digital platform for cultural heritage.

The results can be sorted according to different criteria and eventually the audio files can be downloaded by users. Direct access to the source on content provider service is also made possible.

<a href="/assets/img/MuSST.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/MuSST.png" alt="MuSST. Music and Sound Search Tool.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 7. MuSST. Music and Sound Search Tool</em></p>


<iframe src="https://drive.google.com/file/d/1RlryDFP9ti_P9Z1g3orSPM92AJiJBbil/preview" width="640" height="400"></iframe>

<p style="text-align:center; padding-top:0; font-size:85%"><em>MuSST Video Demonstrator</em></p>





## Playsound


[Playsound.space](http://playsound.space) is a web-based tool to search for and play Creative Commons-licensed sounds. It can be used for music making in contexts such as free music improvisation, soundscape composition and sound discovery. The system provides a fast access to about 400k non-musical and musical sounds from Freesound and allows users to play and loop them in layered ways. Sound discovery and selection are facilitated by the use of semantic searches, metadata and visual sound representations (spectrograms). Aiming to design an intuitive music making tool for both novices and trained musicians, the site has also recording capabilities and attribution of credits to the original authors of the sounds from Freesound.org.

<a href="/assets/img/playsound.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/playsound.png" alt="Playsound.space.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 8. Playsound.space </em></p>

The collection of sounds can be saved as a url. For example, [try the collection shown in the image above](http://www.playsound.space/sounds=416784,391450,388236,129334,428759).

Play with Paysound.space in full screen [here](http://playsound.space).

<iframe width="560" height="315" src="https://www.youtube.com/embed/yv8T70rawzs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Playsound Video Demonstrator</em></p>

Read more information on Playsound at this [blog post](https://www.audiocommons.org/2018/06/01/nime-2018-playsound.html)



## References



Pauwels, J., Xambó, A., Roma, G., Barthet, M., & Fazekas, G. (2018). Exploring Real-time Visualisations to Support Chord Learning with a Large Music Collection. In Proceedings of the Web Audio Conference.

Pearce, A., Brookes, T., & Mason, R. (2017, June). Timbral attributes for sound effect library searching. In Audio Engineering Society Conference: 2017 AES International Conference on Semantic Audio. Audio Engineering Society.

Stolfi, A., Ceriani, M., Turchet, L., and Barthet, M. (2018a). Playsound.space: Inclusive Free Music
Improvisations Using Audio Commons. In Proc. Int. Conf. on New Interfaces for Musical
Expression.

Stolfi, A., Milo, A., Ceriani, and Barthet, M. (2018b). [Participatory musical improvisations with Playsound.space.](https://webaudioconf.com/papers/participatory-musical-improvisations-with-playsound-space.pdf) In Proc. Web Audio Conference 2018 Berlin
