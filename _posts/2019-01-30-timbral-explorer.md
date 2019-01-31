---
layout: post
cover: assets/img/timbral_explorer.jpg
navigation: True
class: post-template
subclass: 'post'
tags: tools
title:  "Timbral explorer: exploring sound effects with timbre"
author: Lizzie Wilson and Jorge del Bosque
---

**Timbral explorer** is a demonstration of the work conducted as part of Work Package 5, and based from the [Sound Map Visualizer](https://labs.freesound.org/apps/freesound-explorer.html) developed at MTG.  

The aim of Work Package 5 was to develop tools for automatically characteristing sounds in therms of their non-musical content, or in more simple terms: what does it sound like?  To complete this task, models to describe the timbre of sound effects were developed, specifically models of *hardness*, *depth*, *brightness*, *roughness*, *warmth*, *sharpness*, *boominess*, and *reverb*.  These models have since been integrated into the [Freesound API](https://www.audiocommons.org/2017/08/01/freesound-api.html), and subsequently can be used to search for sound effects.

The timbral explorer demo allows users to search for sound effects on freesound, and displays the results based on their timbral metadata. Users search for a specific source in the top right corner (e.g. snare).  The interface then finds these sounds from freesound, and distributes them according to the attributes selected to be on the x- and y-axes.  For example, the the x-axis is set to brightness, and the y-axis set to hardness, sounds in the top right of the screen will sound very hard and very bright.  Moving vertically down the screen, sounds will sound less hard, but maintain the same level of brightness. likewise, moving horizontally maintains the same level of hardness, but the sounds will become less bright.

<iframe frameborder="0" scrolling="no" src="https://andyp103.github.io/FreesoundTimbralSearch/" width="850" height="275"></iframe>
A full screen version of the interface can be found [here](https://andyp103.github.io/FreesoundTimbralSearch/)

All metadata used in this demo is calculated from the timbral models developed by the [Institute of Sound Recording](http://www.iosr.uk/AudioCommons/).  these models are written in python and can be downloaded with the command 
''' 
pip install timbral_models
'''
or alternatively, they are accessible at the project's [GitHub page](https://github.com/AudioCommons/timbral_models).  

