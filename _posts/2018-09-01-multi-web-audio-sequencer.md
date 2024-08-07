---
layout: post
current: post
class: post-template
subclass: 'post'
navigation: True
cover: assets/img/multi-web-audio-sequencer-screenshot.png
title:  "Multi Web Audio Sequencer"
tags: tools creators
author: Xavier Favory
---

The **Multi Web Audio Sequencer** is a prototype of an application for segment-based sequencing of Freesound sound clips, with an emphasis on seamless remote collaboration. It is built using <a href="https://expressjs.com/" target="_blank">Express.js</a>, the <a href="https://developer.mozilla.org/fr/docs/Web/API/Web_Audio_API" target="_blank">Web Audio API</a>, and the <a href="https://socket.io/" target="_blank">Socket.io</a> library. 

The step sequencer allows the scheduling of samples on rounded steps of equal time-interval. Users have access to toggle buttons organized in a matrix. Each line represents a different track which has an audio sample assigned. Each column represents the time steps for which a user can activate the playing of a sample corresponding the the track line. Tracks can be collapsed to display the loaded waveform and to ajust the position of the audio segment played. A gain knob is accessible at the right of the pads, as well as solo, mute and delete buttons. Our application gives access to several rooms where any user can connect to from the home page of the application. Each room corresponds to different sequencer with its own state. When a client connects to a room, the server sends the corresponding sequencer state which is rebuilt locally. Each of the actions performed by any user is broadcasted to all clients within the same room and update the sequencer state.


<p style="text-align: center;"> 
<a href="https://github.com/Multi-Web-Audio/multi-web-audio-sequencer" target="_blank">Source code repository</a> 
</p>

<p style="text-align: center;"> 
<a href="https://labs.freesound.org/sequencer/" target="_blank">Multi Web Audio Sequencer application</a> 
</p>

More information about the Multi Web Audio Sequencer can be found in the [Web Audio Conference 2018 paper](https://webaudioconf.com/papers/multi-web-audio-sequencer-collaborative-music-making.pdf).
