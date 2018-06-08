---
layout: post
cover: assets/img/NIME_2018_MIRLC_Fluidsound.jpg
navigation: True
class: post-template
subclass: 'post'
tags: news
title:  "NIME '18: Live Repurposing of Sounds"
author: Anna Xambó
---

Audio Commons has had an important presence at this year's [NIME 2018](http://nime2018.org/) conference, which has been held at Blacksburg, VA, USA.  Apart from the [presentation of Playsound](http://127.0.0.1:4000/2018/06/01/nime-2018-playsound.html) by Mathieu Barthet, the AudioCommons team has also presented another project in collaboration with the University of Huddersfield ([FluCoMa project](http://www.flucoma.org/)) and Georgia Tech in the hands of Gerard Roma and I. This collaborative project looks into real-time music information retrieval (MIR) applied to live coding using either local or crowdsourced databases (e.g., Freesound).

<iframe src="https://player.vimeo.com/video/249968326" width="640" height="360" frameborder="0" allowfullscreen></iframe>

<p style="text-align:center; padding-top:0"><em>Figure 1. MIRLCRep demo video using the crowdsourced database Freesound.</em></p>

<!--a href="/assets/img/NIME_2018_MIRLC_Fluidsound.jpg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:400px; border:1px solid #DEDEDE" class="img-responsive" src="/assets/img/NIME_2018_MIRLC_Fluidsound.jpg" alt="Block diagram of audio repurposing applied to live coding.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 1. Visitors during our demo at NIME 2018.</em></p-->

The novelty of our approach lies in exploiting high-level MIR methods (e.g., query by pitch or rhythmic cues) using live coding techniques applied to sounds. The system is built within the SuperCollider environment and the Freesound API. The content-based search capabilities of this API are based on the Essentia library for audio analysis and the Gaia library for content-based indexing. In the online case, access to the index is provided by the Freesound API, and the [Freesound quark](https://github.com/g-roma/Freesound.sc). In the local case, the Gaia index is wrapped by a web service running in the user’s machine. A corresponding quark named [FluidSound](http://github.com/flucoma/FLuidSound) is provided. Both components act as MIR client. The [MIRLC](http://github.com/axambo/MIRLC) layer provides high level access to content-based querying provided by both quarks, with a focus on live coding usage.

<a href="/assets/img/MIRLC_diagram.jpg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:400px; border:1px solid #DEDEDE" class="img-responsive" src="/assets/img/MIRLC_diagram.jpg" alt="Block diagram of audio repurposing applied to live coding.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 2. Block diagram of audio repurposing applied to live coding.</em></p>

Visitors enjoyed trying the system and provided encouraging feedback for future steps to take: _"Looks like a quick and easy way to make music on the fly"_, _"I think this is a great idea for making completely unique soundtracks for games/media on the fly. Great work!"_, _"Love the 'similar' function.... especially in building rhythmic patterns, seems like it could be a cool way to 'progress' through a piece by transferring the pattern through new similar sounds, maybe a way to end/drop off the first sounds could be cool so that it can travel"_

In summary, the system raised interest among the visitors that came to see us. Several visitors expressed interest in using the system in their different domains (e.g., games, multichannel audio, soundscape design). Potential next steps of the project, including soundscape generation and the addition of filtering and patterning using SuperCollider facilities, were also discussed.  

<a href="/assets/img/Xambo_et_al_2018_Live_Repurposing_NIME18_poster.jpg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:400px; border:1px solid #DEDEDE" class="img-responsive" src="/assets/img/Xambo_et_al_2018_Live_Repurposing_NIME18_poster.jpg" alt="NIME 2018 poster">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 3. NIME 2018 poster.</em></p>

**Resources**:

* This work was presented at [NIME 2018](http://nime2018.org/) during a [poster session](https://nime2018.sched.com/event/EBmi/demo-poster-session-3?iframe=no&w=100%&sidebar=yes&bg=no) on Wednesday, June 6, 2018: Xambó, A., Roma, G., Lerch, A., Barthet, M., Fakekas, G. (2018) [“Live Repurposing of Sounds: MIR Explorations with Personal and Crowdsourced Databases”](http://annaxambo.me/pub/Xambo_et_al_2018_Live_repurposing_of_sounds.pdf), Proceedings of the New Interfaces for Musical Expression (NIME ’18), Blacksburg, Virginia, USA, pp. 364-369.
* The poster presented during the demo is available [here (PDF)](/assets/img/Xambo_et_al_2018_Live_Repurposing_NIME18.pdf).
* The source code of FluidSound can be found [here](http://github.com/flucoma/FLuidSound).
* The source code of MIRLC can be found [here](http://github.com/axambo/MIRLC).

**Acknowledgments**:

We thank the participants who gave us feedback. FluCoMa is funded by the European Commission through the Horizon 2020 programme, research and innovation grant 725899. The icon from Figure 2 is “Female” by Wouter Buning from the Noun Project.
