---
layout: post
cover: assets/img/cover_unspoken_words.jpg
navigation: True
class: post-template
subclass: 'post'
tags: news
title:  "Unspoken Word: a Creative Springboard Musical Tool"
author: Lizzie Wilson and Jorge del Bosque
---

**Unspoken Word** is an open source software project that aims to allow broad audiences to access music making. This is done through analysis of spoken word, which can then be converted into music and controlled by the user. The project, which was supported throughout by the AudioCommons team, was jointly conceived and produced by Queen Mary [Media & Arts Technology](https://mat.qmul.ac.uk) PhD students [Jorge del Bosque](http://www.eecs.qmul.ac.uk/profiles/delbosquetrevinojorgeeugenio.html) and [Lizzie Wilson](https://twitter.com/dgtlslvs) as part of a collaboration with Henry Cooke and Tim Cowlishaw at [BBC R&D](https://www.bbc.co.uk/rd).


## HOW DOES IT WORK?

When the main script is launched running the Terminal, the computer waits for the user to *enunciate a brief poem* or a short sentence. The software converts the spoken utterance to a text and analyses the *semantic features* of the transcript. The semantic features are then mapped to the parameters of a *generative music system* which will create music that it related to the semantic text. Finally, a *mixing interface populated with sound channels* pops out for the user to create their own song or soundscape.

<a href="/assets/img/Interface_unspoken.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/Interface_unspoken.png" alt="Unspoken Words Interface">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em> Unspoken Words Interface</em></p>




There are nine channels, the first four with a variety of sounds from different *digital musical instruments* that are generated using *random walks on a Markov Chain*. There are also five more channels with sounds that are then retrieved from the [Freesound database](https://www.freesound.org) using *API queries*, made possible by Freesound integration into [Supercollider](https://supercollider.github.io/).

a)	The *sentiment* and *magnitude* of the transcript determines the **tempo**.

b)	*Combined values* of sentiment and magnitude generate the **key centre** (based on Christian Schubart's key characteristics and valence [model of emotion](https://www.wmich.edu/mus-theo/courses/keys.html)).

c)	*Concreteness* or *abstractness* define the **timbre** of the sounds used.

d)	Nouns and Adjectives **query** the Freesound library and allocate one sound file per channel (up to 5).

## TECHNOLOGIES

The software was developed combining the following programming languages and tools: Python, NLTK, Google Cloud Speech to Text, Google Cloud Sentiment Analyzer, Flask, SuperCollider, FreeSound.


<a href="/assets/img/Diagram_Unspoken.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/Diagram_Unspoken.png" alt="Unspoken Words Functional Diagram">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em> Unspoken Words Functional Diagram</em></p>



## ARS Electronica

An implementation of the software was recently embedded in an installation exhibited at [ARS Electronica 2018](https://ars.electronica.art/news/en/) (Linz, Austria).

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Unspoken Word <a href="https://twitter.com/ArsElectronica?ref_src=twsrc%5Etfw">@ArsElectronica</a> -exploring the hidden codes inside spoken language and fertilizing the music composition process- An installation I built with <a href="https://twitter.com/dgtlslvs?ref_src=twsrc%5Etfw">@dgtlslvs</a> part of our APP project <a href="https://twitter.com/QMUL_MAT?ref_src=twsrc%5Etfw">@QMUL_MAT</a> with <a href="https://twitter.com/BBCRD?ref_src=twsrc%5Etfw">@BBCRD</a> and with crucial help and support from <a href="https://twitter.com/prehensile?ref_src=twsrc%5Etfw">@prehensile</a> and <a href="https://twitter.com/mistertim?ref_src=twsrc%5Etfw">@mistertim</a> <a href="https://t.co/0ebdDwH17f">pic.twitter.com/0ebdDwH17f</a></p>&mdash; Jorge del Bosque (@delbosque) <a href="https://twitter.com/delbosque/status/1039915902672805888?ref_src=twsrc%5Etfw">September 12, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


The festival takes place annually in September, and this year Queen Mary University’s interdisciplinary [Media and Arts Technology PhD programme](http://www.mat.qmul.ac.uk/) were invited to demo their interactive installations. This meant that Unspoken Word was allowed to travel to Austria for the week and that the tools that were developed here were played with by the thousands of visitors to the festival. Some great feedback and future developments were suggested!

<a href="/assets/img/UnspokenWord-JorgeDelBosqueAndLizzieWilson_Beitragsbild.jpg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/UnspokenWord-JorgeDelBosqueAndLizzieWilson_Beitragsbild.jpg" alt="Unspoken Words Concept at Ars Electronica">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em> Concept Picture for Ars Electronica</em></p>




## Acknowledgements

Lizzie Wilson and Jorge del Bosque are supported by EPSRC and AHRC Centre for Doctoral Training in [Media and Arts Technology](https://mat.qmul.ac.uk)  (EP/L01632X/1).

The image in the cover is reposted from [this page](https://ars.electronica.art/error/en/unspoken/) and should be credited as: Unspoken Word / Jorge del Bosque (MX), Lizzie Wilson (UK). Credit: [vog.photo](https://www.voggeneder.net/) for Ars Electronica.
