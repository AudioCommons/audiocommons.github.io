---
layout: post
cover: assets/img/timbral_explorer.jpg
navigation: True
class: post-template
subclass: 'post'
tags: tools
title:  "Timbral explorer: exploring sound effects with timbre"
author: Andy Pearce
---

**Timbral explorer** is a demonstration of the work conducted as part of Work Package 5, and based from the [Sound Map Visualizer](https://labs.freesound.org/apps/freesound-explorer.html) developed at MTG.  The aim of this work package was to develop tools for automatically characteristing sounds in terms of their non-musical characteristics, or in more simple terms: predicting the timbral characteristics of sounds.  Towards this aim, models to predict the timbral *hardness*, *depth*, *brightness*, *roughness*, *warmth*, *sharpness*, *boominess*, and *reverb* of sound effects were developed.  These models have since been used by Freesound to analyse many of the sound effects, and have been  integrated into the [Freesound API](https://www.audiocommons.org/2017/08/01/freesound-api.html).  This allows users to augment searches with this timbral metadata.

The timbral explorer shows one example of how this timbral metadata could be used.  In the demo shown below, users can search for a specific source type on freesound using the search box in the top right (e.g. snare).  The search results are then distributed across the screen in a 2D plane according to the timbral metadata, with each axis set to a specific timbral attribute.  For example, with the x-axis set to brightness, and the y-axis set to hardness, sounds in the top right of the screen will sound very hard and very bright.  Sounds positioned vertically downward from this top-right position will maintain the same level of perceived brightness, but will sound less hard.  Likewise, moving horizontally from the top-right maintains the same level of hardness, but the sounds will become less bright.

<iframe frameborder="0" scrolling="no" src="https://andyp103.github.io/FreesoundTimbralSearch/" width="850" height="275"></iframe>
A full screen version of the interface can be found [here](https://andyp103.github.io/FreesoundTimbralSearch/).

All metadata used in this demo is taken live from Freesound, and has been calculated from the timbral models developed by the [Institute of Sound Recording](http://www.iosr.uk/AudioCommons/).  These models are written in python and can be downloaded from either the project's [GitHub page](https://github.com/AudioCommons/timbral_models) or downloaded on PyPI with the command 
''' 
pip install timbral_models
'''


