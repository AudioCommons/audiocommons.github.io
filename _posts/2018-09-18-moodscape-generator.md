---
layout: post
cover: assets/img/moodscape.jpg
navigation: True
class: post-template
subclass: 'post'
tags: news
title:  "MoodScape Generator: Automated Generation of Soundscapes"
author: Tayjo Padmini Vaduru
---

[MoodScape Generator](https://github.com/tayjopadmini/MoodScape-Generator), supported by the [Audio Commons initiative](https://www.audiocommons.org/about/), is a web-based tool that automatically generates soundscapes based on mood. The MoodScape Generator is inspired by Frederic Font’s [Freesound Timeline](https://ffont.github.io/freesound-timeline/). It combines crowd-sourced audio from [Freesound.org](https://freesound.org/) and Machine Learning algorithms, such as the K-Nearest Neighbor algorithm, to retrieve sounds related to a specific mood. The sounds retrieved are then played together to create a soundscape based on mood.


## The Interface

The MoodScape Generator has 3 sliders that help to determine the mood of the soundscape. There is one slider for *valence* (how positive/negative the mood is), one for *arousal* (how calm/excited the mood is), and one for *dominance* (the domination of the mood). The user can select a value between 1 and 10 for each of the three mood characteristics using the sliders. Once the search button is hit, a list of words that are closest to the values selected on the sliders, are displayed.

<a href="/assets/img/MoodScapeInterface.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/MoodScapeInterface.png" alt="Figure 1: Screenshot of MoodScape Generator 3 with words generated.">
</a>


<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 1: Screenshot of MoodScape Generator 3 with words generated </em></p>


There is also a number-of-themes slider that the user can control to select the number of words they want to be displayed after the search. The words that are displayed are clickable. Clicking on a word will retrieve all the sounds that are related to that tag from Freesound and play them together to create the soundscape.


## The Functionality

When the user adjusts the values on the sliders and hits the search button, in the background, the values are passed to a K-Nearest Neighbor (KNN) algorithm. This algorithm is linked to the [ANEW dataset](http://csea.phhp.ufl.edu/media/anewmessage.html). The ANEW dataset contains words from the English language. Each word is given a value of *valence*, *arousal* and *dominance*. The KNN algorithm uses the slider values and the values of *valence*, *arousal* and *dominance* from the ANEW dataset to narrow down the choice of words to the closest possible set of words from the dataset.


The closest words are those displayed on the screen based on the user input. When the user clicks on any of the words, the selected word is passed as an argument to the [Freesound API](https://freesound.org/docs/api/). All related sounds are retrieved and played together to create a soundscape with that specific theme.


When the user hits the Search button, a soundscape with the closest word as the theme is also automatically played when the user hits on the search button. It is assumed that based on the user’s mood requirements, the closest word’s soundscape will be a perfect match. However, the user is also given a choice to click on another word if they do not like what they hear.


## The User Study

A user study was conducted among 8 participants. For this user study, the aim was to compare two different versions of the MoodScape Generator. The user study compared an earlier, simpler version which includes [two search boxes](https://media.qmplus.qmul.ac.uk/media/MoodScape+Generator+SearchBox+Version/1_1ecy5r5c), and a more advanced and richer version which includes [four sliders](https://media.qmplus.qmul.ac.uk/media/MoodScape+Generator+Demo+Video+2/1_4z5bo4n8). The idea was to understand how non-musicians, novices and musicians with an intermediate skill level infer the different user interfaces and which version of the tool produces a relatable output.


<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2152241/sp/215224100/embedIframeJs/uiconf_id/36133491/partner_id/2152241?iframeembed=true&playerId=kaltura_player&entry_id=1_1ecy5r5c&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;&wid=1_xcnz5bw0" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay &ast; fullscreen &ast; encrypted-media &ast" frameborder="0" title="Kaltura Player"></iframe>


<p style="text-align:center; padding-top:0"><em> Video of MoodScape Generator with two search boxes. </em></p>

<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2152241/sp/215224100/embedIframeJs/uiconf_id/36133491/partner_id/2152241?iframeembed=true&playerId=kaltura_player&entry_id=1_4z5bo4n8&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;&wid=1_trdpkbg7" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay &ast; fullscreen &ast; encrypted-media &ast" frameborder="0" title="Kaltura Player"></iframe>


<p style="text-align:center; padding-top:0"><em>Video of MoodScape Generator with four sliders. </em></p>



The study revealed that the MoodScape Generator with the two search boxes was rated with a higher score of usability. This was because most of the users were beginners and took long before they could understand the functionalities of the sliders. The MoodScape Generator with sliders was given a high score for creativity enhancement. Participants agreed that this tool enabled them to explore creative ideas and that there were close matches between the parameters selected and the mood that the soundscape carried.


## Future work


The MoodScape Generator has taken a decent shape over the course of this project. However, there is room for further enhancement. A significant area is the implementation of content-based search. Implementing content-based searching will provide more nuanced options to the user. The sounds retrieved can be filtered upon a specific pitch, or key so that when many sounds are played together, they would sound more consonant than in the current version. The next area of work would be to provide the user with functionalities to record, download and join a soundscape of one theme with another.


#### References

Padmini Vaduru, Tayjo (2018). “Moodscape Generator: Automated Generation of Soundscapes”. Unpublished Master’s thesis. Queen Mary University of London.
