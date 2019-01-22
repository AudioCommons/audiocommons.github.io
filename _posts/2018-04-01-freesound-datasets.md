---
layout: post
current: post
class: post-template
subclass: 'post'
navigation: True
cover: assets/img/FSD_cover.png
title:  "Freesound Datasets"
tags: tools
author: Xavier Favory
---

As a complement of software for the automatic analysis of audio content, Audio Commons also provides web based tools for the manual annotation of audio content.
**Freesound Datasets** is an online platform for the collaborative creation of open audio collections. It hosts several microtasks which enable people to contribute to the creation of datasets.

<a href="/assets/img/FSD_validation_task.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/FSD_validation_task.png" alt="Validation task">
</a>

<p style="text-align: center;"> 
<a href="https://datasets.freesound.org/" target="_blank">https://datasets.freesound.org/</a> 
</p>

<p style="text-align: center;"> 
<a href="https://github.com/MTG/freesound-datasets" target="_blank">Source code repository</a> 
</p>

Openly available datasets are a key factor in the advancement of sound and music computing technologies. Quite a number of audio datasets are now available but often their creation process lack of transparency and they are not completly open and sharable. Moreover, they are often not large enough for supporting current machine learning needs. These shortcomings motivated our initiative in creating **Freesound Datasets**, an online platform for the collaborative creation of open audio collections. It leverages Freesound (>400k sounds) as a source of open audio content, relies on a community to sustainably crowdsource high-quality sound annotations, and it follows the principles of transparency, openness, dynamic character, and sustainability.

<a href="/assets/img/FSD_familiarisation_interface.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/FSD_familiarisation_interface.png" alt="Familiarisation interface">
</a>

In particular, we started the creation of **FSD**, a dataset of everyday sounds, containing thousands of audio samples from Freesound and organised following the <a href="https://research.google.com/audioset/" target="_blank">AudioSet Ontology</a>. FSD presents annotations that express the presence of a sound category in audio samples. The creation of FSD started with the automatic population of each category in the AudioSet Ontology with a number of candidate audio samples from Freesound. This process automatically generated over 600k candidate annotations. To verify the validity of these automatically generated
annotations, we developed a validation tool with an interface that helps users to understand a category and its context in the AudioSet Ontology.


More information can be found in our [ISMIR2017 paper](https://repositori.upf.edu/handle/10230/33299).
