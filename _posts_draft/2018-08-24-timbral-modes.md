---
layout: post
cover: assets/img/Vinyls.jpg
navigation: True
class: post-template
subclass: 'post'
tags: news
title:  "Timbral Modes"
author: Andy Peare
---

The timbre of a sound effect plays an important role in determining if it is suitable for a project: "these snare samples sound too 'hard'"; "this synth pad doesn't sound 'deep' enough"; "I only want footsteps that don't sound reverberant". The ability to use these timbral attributes to filter search results would enable users to find more suitable sound effects, and faster.

Sound effects libraries currently rarely include information about the timbre of each sound, because previously this needed to be added manually; a human needed to listen to each sound in order to label it. Also, the words used to describe the timbre have been inconsistently applied, and usually the information only included binary categories (e.g. ‘bright’ or ‘dull’) rather than a scale (e.g. a rating of the perceived brightness from 0 to 100).

Our work in the AudioCommons project has examined what timbral attributes people use when searching for sounds (such as ‘hard’, ‘bright’, ‘deep’, ‘warm’) [Pearce et al, 2017], and has used that information to create consistent terms, and to determine which attributes users search for most frequently. Figure 1 shows how frequenctly common timbral descriptors were searched in freesound.org. For an interactive version of this, go to [http://www.iosr.uk/projects/AudioCommons/sunburst_freesound.php](http://www.iosr.uk/projects/AudioCommons/sunburst_freesound.php).

<a href="/assets/img/diagram_timbral_searches.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:700px;" class="img-responsive" src="/assets/img/diagram_timbral_searches.png" alt="Timbral attribute search frequency on freesound.org.">
</a>


<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 1. How often each timbral attribute is searched on freesound.org</em></p>


We have used this information to prioritise our work on creating perceptual models to measure the most useful timbral properties of sounds; those that are used the most. The perceptual models can process a library of sound files, and predict the perceived timbral properties of each sound. Now that we have created perceptual models for the most commonly used attributes, all sounds in a library can be automatically labelled with consistent timbral attributes, on scales that allow comparison between sounds.

Models have been developed for ‘Hardness’, ‘Depth’, ‘Brightness’, ‘Warmth’, ‘Roughness’, ‘Sharpness’, ‘Boominess’, and ‘Reverberation’. These attributes were selected since they were the most common that people search for in freesound. These models (with the exception of Reverberation) produce numerical predictions of the extent of each attribute. For example, a sound with a predicted hardness of 10 would sound fairly 'soft', whereas values of 90 would sound very 'hard'. The model of Reverberation is a classification model, able to determine if a sound effect sounds dry (no reverb) or wet (some/lots of reverb).

<iframe frameborder="0" scrolling="no" src="https://freesound.org/embed/sound/iframe/257353/simple/full_size/" width="850" height="275"></iframe>


Most models were developed using a similar method: collecting subjective ratings of the attribute using a large pool of sound effects downloaded from freesound; using literature to identify suitable features to extract from the audio files; developing new methods to predict features that affect our perception of the attribute; selecting the most appropriate features to use in a prediction model; and determining the optimum combination of the features using regression modelling to predict the subjective ratings.

The models are still in a prototype stage, and improvements are being made regularly to better fit the subjective ratings of each attribute. They are implemented in Python and are available from the project's GitHub [page](https://github.com/AudioCommons/timbral_models) (for the most up-to-date versions) or installable from PyPI (updated for significant changes).

Currently, each model is coded as an independent function, but there are future plans to develop a timbral extractor function to efficiently extract all timbral attributes with a single call.

The end goal is to have these timbral models fully integrated into the [Audio Commons Ecosystem](https://www.audiocommons.org/about/index.html#the-audio-commons-ecosystem). Content providers can analyse their sounds with these models and provide the metadata, making it accessible to the Audio Commons Mediator. This will allow users to make queries to the mediator, filtering the results by the timbral attributes. Users will be able to find only soft sounding snare samples, deep synth pads, or footsteps without reverb.

References

Pearce A., Brookes, T., and Mason, R., 2017: ‘Timbral attributes for sound effect library searching’, 2017 AES International Conference on Semantic Audio, June.

