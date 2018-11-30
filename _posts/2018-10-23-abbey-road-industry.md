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

On the 25th of October, some of the tools developed within the [Audio Commons Initiative](https://www.audiocommons.org/about/) were presented at the event organised by [FAST IMPACT](http://www.semanticaudio.ac.uk/) at [Abbey Road Studios](https://www.abbeyroad.com/) for the [FAST Industry Day](http://www.semanticaudio.ac.uk/events/fast-industry-day/).

The Audio Commons Ecosystem (ACE) refers to a series of technologies and actors involved in publishing and consuming Audio Commons content. Audio Commons content (AC) refers to audio released under Creative Commons licenses and enhanced with meaningful contextual information (e.g. annotations, license information) that enables its publication in the ACE and facilitates its reuse.

Several of our tools allow the navigation of vast catalogues of sound and music content which is facilitated by a common data model: the [Audio Commons ontology](https://www.audiocommons.org/2018/07/27/audio-commons-ontology.html). This is used to support a common Web Application Programming Interface for the ACE.

In the following, we present some tools for music production and discovery that have been developed and tested through our research project.


<a href="/assets/img/BP7_FAST_Photo_Abbey_Road_George_Audio_Commons.JPG" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/BP7_FAST_Photo_Abbey_Road_George_Audio_Commons.JPG" alt="George Fazekas presenting the Audio Commons Initiative to the audience in Abbey Road Studio 2.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 1. George Fazekas presenting the Audio Commons Initiative to the audience in Abbey Road Studio 2.</em></p>


## SampleSurfer

SampleSurfer from [Waves Audio Ltd.](https://www.waves.com/) provides an audio content search engine embedded in the digital audio workstation with instant listening capabilities and transparent listing of licensing terms including Creative Commons content. It also embeds tools for content manipulation and repurposing. With SampleSurfer users are able to efficiently share, use and manipulate sounds within their DAW.

<a href="/assets/img/SampleSurfer.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/SampleSurfer.png" alt="SampleSurfer by Waves Ltd.">
</a>


<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 2. SampleSurfer by Waves Audio Ltd.</em></p>



<iframe src="https://drive.google.com/file/d/12GIa5cn1CXPaw-UtRAjMiSEq2fopV0tY/preview" width="640" height="400"></iframe>

<p style="text-align:center; padding-top:0; font-size:85%"><em>SampleSurfer Video Demonstrator</em></p>



## AudioTexture

[AudioTexture](https://lesound.io/product/audiotexture/) is LeSound’s sound texture synthesis technology released as a DAW plugin. AudioTexture allows sound designers to make use of any sound texture recordings available and create new sound textures, with semantic controls, for film/TV post-production and video games.


<a href="/assets/img/AudioTexture.jpg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/AudioTexture.jpg" alt="AudioTexture by LeSound (AudioGaming)).">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 3. AudioTexture by LeSound (AudioGaming)</em></p>


<iframe src="https://drive.google.com/file/d/19PtLbI8CCiqTO-L7WGwNtwUZAdWRxmp6/preview" width="640" height="400"></iframe>

<p style="text-align:center; padding-top:0; font-size:85%"><em>AudioTexture Video Demonstrator</em></p>



## Timbral Explorer


Identifying suitable sound effects for an audio project can be a difficult task but current tools are typically limited to keyword search. Filtering and sorting sound effects by their timbral and reverberant characteristics offers a better solution. As part of the AudioCommons project we have developed perceptual algorithms capable of predicting the Hardness, Depth, Brightness, Roughness, Warmth, Sharpness, Boominess, and Reverberation of sound effects to rank, filter, or limit the range of search results, assisting users to find the sound effects they want.

<a href="/assets/img/diagram_timbral_searches.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/diagram_timbral_searches.png" alt="Timbral attribute search frequency on freesound.org.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 4. How often each timbral attribute is searched on freesound.org</em></p>

<iframe src="https://andyp103.github.io/SoundMapVisualiserDemo/" height="600" width="900"><a href="https://andyp103.github.io/SoundMapVisualiserDemo/">https://andyp103.github.io/SoundMapVisualiserDemo/</a></iframe>

<p style="text-align:center; padding-top:0; font-size:85%"><em>SoundMapVisualiser Demo</em></p>

Explore the Sound Map Visualiser Demo [here](https://andyp103.github.io/SoundMapVisualiserDemo/).

You can find more information in this [blog post](https://www.audiocommons.org/2018/09/05/timbre-sound.html) by Andy Pearce.



## Freesound


[Freesound](https://freesound.org) is an online collaborative sound database hosting more than 380k sounds by 20k contributors and published under Creative Commons licenses that allow easy reuse and modification in both commercial and non-commercial projects. Freesound is the biggest Creative Commons sound database with120M downloads since 2005. Freesound was developed at the [Music Technology Group of Universitat Pompeu Fabra](https://www.upf.edu/web/mtg), one of the leading music technology research groups worldwide.


<a href="/assets/img/freesound.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/freesound.png" alt="Freesound.org">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 5. Freesound.org</em></p>


Frederic Font explains in this [blog post](https://www.audiocommons.org/2018/07/15/audio-commons-audio-extractor.html) how to use the Audio Commons Audio Extractor with Freesound.



<!-- Freesound Explorer is a visual interface for exploring Freesound in a 2-dimensional space and create music at the same time :)

Using Freesound Explorer you can perform text-based queries in Freesound, and see the results arranged in a 2-dimensional space. A well known dimensionality reduction technique is used (tSNEJS) to learn a space from spectral audio features provided by Freesound. In this way, sounds are self-organised according to some sort of timbre similarity.

Freesound Explorer is implemented as a web application which takes advantage of modern web technologies including the Web Audio API and the Web MIDI API. Freesound Explorer also uses a Python Flask backend for handling user accounts, but it can also be run statically without the backend (with reduced functionality and no user handling).

Explore Freesound Explorer [here](https://labs.freesound.org/fse/).

You can find more information in this [blog post](https://labs.freesound.org/apps/freesound-explorer.html).

 -->



## Jam with Jamendo

[Jam with Jamendo](http://eecs.qmul.ac.uk/~johan/jam-with-jamendo/) brings music learners and unsigned artists together by recommending suitable songs as new and varied practice material. In this web app, users are presented with a list of songs based on their selection of chords. They can then play along with the chord transcriptions or use the audio as backing tracks for solos and improvisations. Using AI-generated transcriptions makes it trivial to grow the underlying music catalogue without human effort.

<a href="/assets/img/Jam-image-1.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/Jam-image-1.png" alt="Jam wih Jamendo: chords selection">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 6. Jam wih Jamendo: chords selection</em></p>


<a href="/assets/img/Jam-Image-2.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/Jam-Image-2.png" alt="Jam wih Jamendo: song player">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 7. Jam wih Jamendo: song player</em></p>


Play with Jam with Jamendo [here](http://eecs.qmul.ac.uk/~johan/jam-with-jamendo/).
View more information on Jam with Jamendo [here](http://www.semanticaudio.ac.uk/demonstrators/jam-with-jamendo/).


## MuSST

The Audio Commons [Music and Sound Search Tool](audiocommons.jamendo.com) (MuSST) is a web interface that allows users to search for and browse sound and music content from several sources (online digital audio libraries) within the Audio Commons ecosystem. It includes a search feature to retrieve audio content from several providers. At the moment, the following content providers are part of the ecosystem: [Freesound](https://freesound.org/), a collaborative repository of CC licensed audio samples; [Jamendo](https://www.jamendo.com/), a music content website and community of musicians and music lovers; [Europeana](https://www.europeana.eu/portal/en), an European digital platform for cultural heritage.

The results can be sorted according to different criteria and eventually the audio files can be downloaded by users. Direct access to the source on content provider service is also made possible.

<a href="/assets/img/MuSST.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/MuSST.png" alt="MuSST. Music and Sound Search Tool.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 8. MuSST. Music and Sound Search Tool</em></p>


<iframe src="https://drive.google.com/file/d/1RlryDFP9ti_P9Z1g3orSPM92AJiJBbil/preview" width="640" height="400"></iframe>

<p style="text-align:center; padding-top:0; font-size:85%"><em>MuSST Video Demonstrator</em></p>

Explore MuSST [here](audiocommons.jamendo.com).



## Playsound


[Playsound.space](http://playsound.space) is a web-based tool to search for and play Creative Commons-licensed sounds. It can be used for music making in contexts such as free music improvisation, soundscape composition and sound discovery. The system provides a fast access to about 400k non-musical and musical sounds from Freesound and allows users to play and loop them in layered ways. Sound discovery and selection are facilitated by the use of semantic searches, metadata and visual sound representations (spectrograms). Aiming to design an intuitive music making tool for both novices and trained musicians, the site has also recording capabilities and attribution of credits to the original authors of the sounds from Freesound.org.

<a href="/assets/img/playsound.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/playsound.png" alt="Playsound.space.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 9. Playsound.space </em></p>

The collection of sounds can be saved as a url. For example, [try the collection shown in the image above](http://www.playsound.space/sounds=416784,391450,388236,129334,428759).

Play with Paysound.space [here](http://playsound.space).

<iframe width="560" height="315" src="https://www.youtube.com/embed/yv8T70rawzs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Playsound Video Demonstrator</em></p>

Read more information on Playsound at this [blog post](https://www.audiocommons.org/2018/06/01/nime-2018-playsound.html).


## Abbey Road Studios Event

Below, a selection of pictures from the event!

<a href="/assets/img/Alessia_PresentingACTools.jpg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/Alessia_PresentingACTools.jpg" alt="Alessia Milo showing the AC tools">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 10. Alessia Milo showing the AC tools.</em></p>


<a href="/assets/img/BP7_FAST_Photo_Abbey_Road_Set-up_Alan_Chamberlain.jpeg
" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/BP7_FAST_Photo_Abbey_Road_Set-up_Alan_Chamberlain.jpeg"  alt="Fast Industry Day setting up in Abbey Road Studio 2.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 11. Fast Industry Day setting up in Abbey Road Studio 2  </em></p>


<!--<a href="/assets/img/George_SampleSurfer.JPG" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/George_SampleSurfer.JPG" alt="George Fazekas at the demo table.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 12. George Fazekas at the demo table.</em></p>-->


<a href="/assets/img/Andy_Timbral.JPG" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/Andy_Timbral.JPG" alt="Andy Pearce with Timbral Explorer.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 12. Andy Pearce with Timbral Explorer.</em></p>


<a href="/assets/img/AbbeyRoad_byJohan_ToolsSetup.JPG" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/AbbeyRoad_byJohan_ToolsSetup.JPG" alt="SampleSurfer and AudioTexture at the demonstrator table.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 13. SampleSurfer and AudioTexture at the demonstrator table.</em></p>

Video on Twitter of Johan Pauwels explaining Jam with Jamendo to Platform7 [here](https://twitter.com/PLATFORM7events/status/1055416223091982337).




## References


Ceriani, M. & Fazekas, G. (2018) [Audio Commons ontology: a data model for an audio content ecosystem](https://qmro.qmul.ac.uk/xmlui/handle/123456789/43143). In Proceedings of the 17th International Semantic Web Conference (ISWC 2018).

Font, F., & Bandiera G. (2017).  [Freesound Explorer: Make Music While Discovering Freesound!](https://qmro.qmul.ac.uk/xmlui/bitstream/handle/123456789/26151/20.pdf?sequence=1). Web Audio Conference (WAC 2017).

Pauwels, J., Fazekas, G., & Sandler, M. B. (2018). Recommending songs to music learners based on chord content. In Proceedings of the 2018 Joint Workshop on Machine Learning for Music.

Pauwels, J., Xambó, A., Roma, G., Barthet, M., & Fazekas, G. (2018). [Exploring Real-time Visualisations to Support Chord Learning with a Large Music Collection](http://annaxambo.me/pub/Pauwels_et_al_2018_Exploring_real-time_visualisations.pdf). In Proceedings of the Web Audio Conference.

Pearce, A., Brookes, T., & Mason, R. (2017, June). [Timbral attributes for sound effect library searching](http://epubs.surrey.ac.uk/841960/). In Audio Engineering Society Conference: 2017 AES International Conference on Semantic Audio. Audio Engineering Society.

Stolfi, A., Ceriani, M., Turchet, L., & Barthet, M. (2018a). [Playsound.space: Inclusive Free Music
Improvisations Using Audio Commons](http://www.nime.org/proceedings/2018/nime2018_paper0050.pdf). In Proceedings International Conference on New Interfaces for Musical Expression.

Stolfi, A., Milo, A., Ceriani M., &  Barthet, M. (2018b). [Participatory musical improvisations with Playsound.space](https://webaudioconf.com/papers/participatory-musical-improvisations-with-playsound-space.pdf). In Proceedings of the Web Audio Conference.

Stolfi, A., Milo, A., Viola F., Ceriani M., &  Barthet, M. (2018). Playsound.space: An Ubiquitous System in Progress. In Proceedings of EIGHTH Workshop on Ubiquitous Music (VIII UbiMus).

Xambó, A., Pauwels, J., Roma, G., Barthet, M., &  Fazekas, G. (2018). [Jam with jamendo: Querying a large music collection by chords from a learner’s perspective](https://www.researchgate.net/publication/327607463_Jam_with_Jamendo_Querying_a_Large_Music_Collection_by_Chords_from_a_Learner's_Perspective). In Proceedings of the 13th International Audio Mostly Conference.
