---
layout: post
cover: assets/img/freesound_trip.png
navigation: True
class: post-template
subclass: 'post'
tags: tools creators
title:  "Freesound Trip"
author: Frederic Font
---

**Freesound Trip** is a web application that automatically arranges the sounds from [Freesound](http://www.freesound.org) in a three-dimensional space and lets the user fly manually through this space with a first-person perspective, hearing sounds as they get close.

<p style="text-align: center;"> 
<a href="http://5.2.16.88/Freesound-Trip/" target="_blank">Open Freesound Trip</a> 
</p>

<p style="text-align: center;"> 
<a href="https://github.com/dnlopez/Freesound-Trip" target="_blank">Go to source code repository</a> 
</p>

Sounds are prearranged in the space by a process of t-Distributed Stochastic Neighbor Embedding (t-SNE) on MIR descriptors in order to cluster sounds with similar sonic qualities together. Furthermore, the user can choose to filter what sounds get included in their space by Freesound tags.

On approaching a sound, it is automatically played in a sequenced loop at pseudorandom intervals, for rhythmic effect. (The sounds were also prefiltered to include the shorter sounds only, to suit their percussive usage.)

Freesound Trip was created by CJ Carr, Daniel Lopez, Emilio Molina, Mónica Rikić, Lefteris Stamellos, Edu Fonseca, Xavier Favory and Dmitry Bogdanov for the [Audio Commons](https://www.audiocommons.org) challenge of the [Sónar Innovation Challenge](http://sonarplusd.com/sic) 2017.
