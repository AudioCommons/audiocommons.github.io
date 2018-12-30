---
layout: post
cover: assets/img/cover_StudioOne.jpeg
navigation: True
class: post-template
subclass: 'post'
tags: news
title:  "Abbey Road Hackathon"
author: Alessia Milo
---



On the 10th and 11th of November 2018, the first [Abbey Road Hackathon](https://www.abbeyroad.com/hackathon) took place in the illustrious Studio One, challenging over a hundred brilliant minds in creating the next technologies for music making. [Studio One](https://www.abbeyroad.com/studio-one) is the world's largest purpose-built recording studio, where film scores like _The Lord of The Rings Trilogy_, _The Empire Strikes Back_, and many more award winning compositions, have been performed and recorded. After spending 30 consecutive hours there, and possibly because of hallucinations triggered by sleep deprivation, you could almost sense all the wonderful hours of music that in the past have been filling the immense void above the thoughts of the attendees.

<iframe width="560" height="315" src="https://www.youtube.com/embed/KUfeY6RGS9U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style="text-align:center; padding-top:0; font-size:85%"><em> The first Abbey Road Hackathon. Video by Abbey Road Red.</em></p>


## Sharing Innovation

The Hackathon, organised by [Abbey Road Red](https://www.abbeyroad.com/abbeyroadred), the innovation department of Abbey Road Studios, was looking for _audio developers, machine-learning experts, MATLAB, Max MSP and C++ heroes, Python gurus, and design thinkers_ to create projects inspired by the theme **The Future of Music Creation**. The event invited to answer questions such as:  _What will musical instruments of the future be like?_ _What tools can we build to facilitate the creative process?_ _How can we use technology to make music-making more accessible?_
Among the Tech and Strategic Partners figured [Universal](https://www.universalmusic.com/), [Microsoft Cognitive Sevices](https://docs.microsoft.com/en-us/azure/cognitive-services/), [Miquido](https://www.miquido.com/), [Juce](https://juce.com/), [WhoSampled](https://www.whosampled.com/), [Chirp](https://chirp.io/), [Bare Conductive](https://www.bareconductive.com/), [Hackoustic](https://hackoustic.org/), [7digital](https://www.7digital.com/), [Ambimusic](https://ambimusic.com/), [Volumio](https://volumio.org/), [Quantone](http://quantonemusic.com/), [Gracenote](http://www.gracenote.com/), [Cloudinary](https://cloudinary.com/).

<!-- <a href="/assets/img/A_R_Entrance.jpg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/A_R_Entrance.jpg" alt="Abbey Road Studios">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em> Abbey Road Studios. </em></p> -->


<a href="/assets/img/StudioOneDetail.jpeg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/StudioOneDetail.jpeg" alt="Abbey Road Studio One during the hackathon.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em> Abbey Road Studio One during the hackathon.</em></p>




Audio Commons, which held a demonstrator and a presentation in Abbey Road Studio Two during the Fast Industry Day (which you can read about [in this other post](https://www.audiocommons.org/2018/10/23/abbey-road-industry.html)), received an invitation to partner for the imminent event, and we gladly accepted to offer resources, mentorship, and a price for the best hack employing Audio Commons resources. In preparation to the hackathon, we pushed a little bit further to build a series of examples that people could build upon. Filled with thrills for being part of such a great experience, we presented the aim and the latest outcomes of the [Audio Commons Initiative](https://www.audiocommons.org/about/), showing also in a short video _SampleSurfer_ by [Waves Audio](https://www.waves.com/), _AudioTexture_ by [Lesound](https://lesound.io/) (now [available to download for free here](https://lesound.io/product/audiotexture-free/)), _MuSST_, the Music and Sound Search Tool by [Jamendo](https://www.jamendo.com/), and [Playsound.space](http://playsound.space) by [Ariane Stolfi](http://www.ariane.stolfi.org/).

<!-- <iframe src="https://theta360.com/s/nePVoQmQFuXpNDSmKDBCuY7Mm" width="640" height="400" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<a href="/assets/img/PresentationARH_cropped.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/PresentationARH_cropped.png" alt="The Audio Commons presentation captured with a 360 camera.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em> The Audio Commons presentation captured with a 360 camera. </em></p>

<!-- <iframe src="https://theta360.com/s/fVznB9v2S9obFHTbT9HydqJJQ" width="640" height="400" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

<!-- <a href="/assets/img/ARHStage_cropped.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/ARHStage_cropped.png" alt="The Audio Commons presentation from the stage.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em> The Audio Commons presentation from the stage. </em></p> -->

You can navigate the original 360 image [here](https://theta360.com/s/nePVoQmQFuXpNDSmKDBCuY7Mm).
 <!-- and [here](https://theta360.com/s/fVznB9v2S9obFHTbT9HydqJJQ). -->


After introducing the project and the team, Audio commons offered to the participants the opportunity to access Creative Commons audio content from our latest version of the [Audio Commons Mediator](https://m2.audiocommons.org/).

The resources offered consisted of an [interactive search endpoint](https://m2.audiocommons.org/) plus other software demonstrators, which can be explored at this [page](http://isophonics.net/abrhackday), developed by Miguel Ceriani, Sasha Rudan, Johan Pauwels, and Mathieu Barthet.

Below we present some projects which integrated the Audio Commons resources in their development.

## the winner: xAmplR

Developed by Alex Milanov and Adrian Holder, **xAmplR** is a browser based sampler that allows you to quickly and easily grab free audio samples from Audio Commons, that you can then trigger live using the 16 MPC styled midi enabled pads.
Samples can be searched for either by keyboard input or Microsoft speech-to-text voice recognition. Once the search string has been received, _xAmplR_ searches for sounds using the [Audio Commons Mediator](https://m2.audiocommons.org/), and retrieves a series of results which can then be selected and sent to the virtual drum pad. Once the samples are loaded, one can just click the pads to play the samples.

<a href="/assets/img/xAmplR_Stage.jpg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/xAmplR_Stage.jpg" alt="xAmplR presented on stage.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em> xAmplR presented on stage.</em></p>


<a href="/assets/img/xAmplR.jpg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/xAmplR.jpg" alt="Detail of xAmplR interface.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em> Detail of xAmplR interface.</em></p>


_xAmplR_ demonstrated brilliantly how Audio Commons content can be searched, browsed and creatively repurposed, and the developers were awarded an the prize "Best use of Audio Commons", receiving an Amazon Voucher. The original submission on devpost can be found [at this link](https://devpost.com/software/xamplr), and you can try yourself [the interactive demo](https://alex-milanov.github.io/xAmplR/dist/).



## Play the Singer

Another project which creatively employed Audio Commons resources was **Play the Singer** by Table#7, a game running on [Bela](bela.io), the low latency platform for interactive audio developed by the [Augmented Instruments Lab](http://instrumentslab.org/) at Queen Mary University of London.
_Play the Singer_ is a game where Player#1, which we can call the Singer, has to avoid, by raising and lowering the pitch of the singing, obstacles lifted by Player#2, which can be called the DJ. Obstacles, appearing as blocks in the visual interface rendered in [p5.js](https://p5js.org/), correspond to the samples triggered by a sequencer running in a Pure Data (PD) patch. The PD patch is compiled to C++ code running on Bela thanks to the [Heavy Compiler](https://www.rebeltech.org/2018/09/12/compile-pure-data-patches-with-free-online-heavy-compiler/) by [Enzien Audio](https://twitter.com/enzienaudio).  Player#2, the DJ, can raise the volume of the samples with a MIDI controller, creating challenges for the singer, which has to sing at a higher pitch to overcome the obstacles. The DJ can also change the sample with the MIDI controller's knobs.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3aQUnfADZ30" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style="text-align:center; padding-top:0; font-size:85%"><em> Table#7 performing a demo of Play the Singer.</em></p>

<a href="/assets/img/Table7.jpg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/Table7.jpg" alt="Table#7 working on Play the Singer.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em> Table#7 working on Play the Singer.</em></p>



_How does Play the Singer integrate Audio Commons?_  
The game, which you can find on [github](https://github.com/giuliomoro/bela-game) equipped with preloaded samples, also allows you to run a terminal command to search for 9 different keywords. The python code will search for these keywords into the Audio Commons resources and download 9 different samples with a suitable duration which can be used for the game, showing also the corresponding author and licensing details. A more detailed description about the project and the technology used can be found on the [Devpost submission page here](https://devpost.com/software/play-the-singer). Play the Singer is developed by Adan Benito, Mark Daunt, Delia Fano Yela, Beici Liang, Marco Martinez, Alessia Milo, Giulio Moro.

<a href="/assets/img/Table7_Stage.jpg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/Table7_Stage.jpg" alt="Table#7 presenting Play The Singer.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em> Table#7 presenting Play The Singer.</em></p>

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The next <a href="https://twitter.com/hashtag/RedHackers?src=hash&amp;ref_src=twsrc%5Etfw">#RedHackers</a> have created an interactive game you can control with your voice! <a href="https://twitter.com/hashtag/RedHackathon?src=hash&amp;ref_src=twsrc%5Etfw">#RedHackathon</a> <a href="https://t.co/20kUfHPHa1">pic.twitter.com/20kUfHPHa1</a></p>&mdash; Abbey Road Red (@AbbeyRoadRed) <a href="https://twitter.com/AbbeyRoadRed/status/1061645438451884034?ref_src=twsrc%5Etfw">November 11, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<p style="text-align:center; padding-top:0; font-size:85%"><em> Abbey Road Read tweeting about the presentation of Play The Singer.</em></p>


<!-- <a href="/assets/img/Table7.jpeg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/Table7.jpeg" alt="Table#7 working on Play the Singer.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em> Table#7 working on Play the Singer.</em></p> -->


## Sonic Breadcrumbs

Sonic Breadcrumbs is a choose-your-own-adventure in physical space rooted in the physical world, which uses chirping beacons and a mobile web client to let you respond to triggers in the surrounding environment.
Chirping audio beacons were used to detect spatial locality, with possible applications at home, in a museum or gallery, an enhanced location-aware audio tour, or for promenade theatre.

The resources offered by Audio Commons were found a simple way of retrieving sounds and bringing more life to the narrative in an automated way, where the narrative writer wouldn't need to fuss about finding sound files themselves. The idea of the creators was to use keywords from the narrative to search for related sound samples of a suitable sound duration.

Sonic Breadcrumbs is developed by Valentin Bauer, Tom Kaplan, Frazer Merrick and Matt Timmermans.

<blockquote class="twitter-tweet" data-lang="it"><p lang="en" dir="ltr">Heres a working example of the web app, powered by <a href="https://twitter.com/chirp?ref_src=twsrc%5Etfw">@chirp</a> and <a href="https://twitter.com/p5xjs?ref_src=twsrc%5Etfw">@p5xjs</a>, and showing our Abbey Road Runner Game. <br><br>Just imagine the emitters were embedded within a tourist trail, museum exhibit or even an immersive theatre set! N.b it is possible to make the &#39;chirps&#39; ultrasonic. <a href="https://t.co/ibT7GxYiSr">pic.twitter.com/ibT7GxYiSr</a></p>&mdash; Frazer Merrick (@frazermerrick) <a href="https://twitter.com/frazermerrick/status/1061720984481419271?ref_src=twsrc%5Etfw">11 novembre 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<p style="text-align:center; padding-top:0; font-size:85%"><em> A tweet on Sonic Breadcrumbs during the event.</em></p>

<a href="/assets/img/team_AC_stage.jpg" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/team_AC_stage.jpg" alt="The team who developed Sonic Breadcrumbs presenting their project.">
</a>

<p style="text-align:center; padding-top:0; font-size:85%"><em> The team who developed Sonic Breadcrumbs presenting on the stage. </em></p>

## Acknowledgements

We would like to thank the sparkling and friendly [Dom Dronska](https://www.abbeyroad.com/news/life-after-hackathon-day-four-2471) and the other organisers that brought this event to life, and all the attendees that created a pleasant atmosphere where so many ideas concerned with _the Future of Music Creation_ were shared and discussed. The event catalysed much attention from the media, seeing a number of articles being published after the event, by [Computer Weekly](https://www.computerweekly.com/news/252453804/Abbey-Road-Studios-holds-inaugural-hackathon-event-to-push-musictech-innovation), [Drugstoreculture](https://drugstoreculture.com/abbey-road-studios-hackathon/), [Musically](https://musically.com/2018/11/28/abbey-road-hackathon-ideas/). You can find many more pictures and videos about the event looking for [#RedHackathon](https://twitter.com/hashtag/RedHackathon) on Twitter.

The Audio Commons Initiative is funded by the European Commission through the Horizon 2020 programme, research and innovation grant 688382.
