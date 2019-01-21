---
layout: post
cover: assets/img/freesound_explorer.jpg
navigation: True
class: post-template
subclass: 'post'
tags: tools
title:  "Freesound Explorer"
author: Frederic Font
---


**Freesound Explorer** is a visual interface for exploring [Freesound](https://freesound.org) in a 2-dimensional space and create music at the same time. Using Freesound Explorer you can perform text-based queries in Freesound, and see the results arranged in a 2-dimensional space. A well known dimensionality reduction technique is used ([tSNEJS](https://github.com/karpathy/tsnejs)) to learn a space from spectral audio features provided by Freesound. In this way, sounds are self-organised according to some sort of timbre similarity.

<p style="text-align: center;"> 
<a href="https://labs.freesound.org/fse/" target="_blank">Open Freesound Explorer</a> 
</p>

Freesound Explorer is implemented as a web application which takes advantage of modern web technologies including the [Web Audio API](https://www.w3.org/TR/webaudio/) and the [Web MIDI API](https://www.w3.org/TR/webmidi/). Freesound Explorer also uses a Python [Flask](http://flask.pocoo.org) backend for handling user accounts, but it can also be run statically without the backend (with reduced functionality and no user handling).

More information can be found in the [code repository](https://github.com/ffont/freesound-explorer/) and in the [demo paper](http://eecs.qmul.ac.uk/~keno/20.pdf) that was presented at the Web Audio Conference 2017 held at Queen Mary University of London. Freesound Explorer has been (so far) developed by Frederic Font and Giuseppe Bandiera, researchers at the [Music Technology Group](http://mtg.upf.edu) of Universitat Pompeu Fabra, and by Eric Lehmann at Film University Babelsberg KONRAD WOLF.
