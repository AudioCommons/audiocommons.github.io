---
layout: post
cover: assets/img/NIME_2018_Playsound.jpg
navigation: True
class: post-template
subclass: 'post'
tags: tools
title:  "Playsound: Inclusive Free Music Improvisations Using Audio Commons"
author: Ariane Stolfi
---

[Playsound.space](http://playsound.space/) is a web-based tool to search for and play Creative Commons-licensed sounds. It can be used for music making in contexts such as free music improvisation, soundscape composition and sound discovery. The system provides a fast access to about 400k non-musical and musical sounds from Freesound and allows users to play and loop them in layered ways. Sound discovery and selection are facilitated by the use of semantic searches, metadata and visual sound representations (spectrograms). Aiming to design an intuitive music making tool for both novices and trained musicians, the site has also recording capabilities and attribution of credits to the original authors of the sounds from [Freesound.org](http://freesound.org).

<iframe width="560" height="315" src="https://www.youtube.com/embed/yv8T70rawzs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p style="text-align:center; padding-top:0"><em>Playsound.space demo video.</em></p>

The system works as a single page application developed using JavaScript and the Angular.js framework on the client side, and Node.js on the server side. The two-way data binding provided by the Angular framework allows fast search responses from the Freesound RESTful API enabling results to appear while typing. Most of the processes happen on the client side and the back-end part deals with authentication and the retrieval of information from the Freesound API.

## Evaluation

We assessed our system in two different music making contexts with a total of 18 participants having various musical skills: three participants belonged to an ensemble mixing participants using Playsound and other musicians; 15 participants used Playsound in trios. With this process, we tested how the tool could be used as an "instrument" to improvise, how expressive it was, and how other musicians responded to the music produced with it. Discussions held with the musicians after the sessions revealed that both the Playsound users and co-performers were satisfied with the musical improvisations.

Results from the ensemble and trio performances indicated that it was easy for first-time users to play live with others using the tool. The semantic sound search functionality facilitated interaction between musicians and led to interesting musical situations through the use of similar or contrasting materials at different moments, and rich variation of timbres and rhythms. It also allowed users to express sound ideas and emotions even without technical expertise and musical technique.

## Development

The system proved successful in supporting the initial design goal to be able to repurpose Creative Commons samples in free music improvisation practice. Results also showed that the query mechanism and user interface make the tool inclusive and accessible even to non-musicians.

After the first evaluation we have improved the player to include some of the features mentioned by the users, such as: the possibilities to control the sample playback rate, to select the sample starting and ending point from the spectrogram, to select sounds without triggering playback, to access the original content on Freesound and adding master volume control. We are also working in a collaborative version with chat system, and in a semantic based system for recommendations from other audio sources in the Audio Commons Ecosystem. We are also applying new evaluation methodologies that should be described in further works.

This work will be presented at [NIME 2018](http://nime2018.org/) during a [poster session](https://nime2018.sched.com/event/EBmh/demo-poster-session-2) on Tuesday, June 5, 2018: [Ariane Stolfi, Miguel Ceriani, Luca Turchet, Mathieu Barthet (2018). Playsound.space: Inclusive Free Music Improvisations Using Audio Commons](https://www.researchgate.net/publication/324546442_Playsoundspace_Inclusive_Free_Music_Improvisations_Using_Audio_Commons), published in the "Proceedings of the New Interfaces for Musical Expression". We hope to see you there! A link to the paper can be found [here](https://www.researchgate.net/publication/324546442_Playsoundspace_Inclusive_Free_Music_Improvisations_Using_Audio_Commons).

**Credits**: Playsound is been developed by [Ariane Stolfi](http://ariane.stolfi.org) in collaboration with: [Alessia Milo](http://www.alessiamilo.com/), Miguel Ceriani, Fabio Viola and Mathieu Barthet. Luca Turchet helped on the evaluation process.
