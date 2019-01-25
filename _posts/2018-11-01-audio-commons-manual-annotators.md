---
layout: post
current: post
class: post-template
subclass: 'post'
navigation: True
cover: assets/img/AC_manual_annotator_1.png
title: "Audio Commons Manual Annotators"
tags: tools
author: Xavier Favory
---

One of the challenges in making use of Creative Commons audio content comes from the fact that it is provided by various sources and authors with different backgrounds and levels of expertise. Therefore, the content is often unstructured and not properly annotated, which hinders its efficient retrieval. Intelligently guiding users on the annotation process would allow a reliable, uniform and complete description of the content which will therefore facilitate its sharing. More specifically, within Audio Commons, on of our focus is annotating content with a large set of predefined concepts organised in a hierarchy (what is often called a taxonomy). Therefore, we developped two web-based tools for the manual annotation of audio content, which can be integrated in other projects: The Audio Commons Manual Annotator (AC  Manual  Annotator) aims at adding missing labels, whereas the Audio Commons Refinement Annotator (AC Refinement Annotator) allows to refine and specify existing labels.  

## AC Manual Annotator
With the AC Manual Annotator, labels can be assigned to an audio clip. The main idea behind this interface is to provide a way to facilitate the quick overview of categories. Moreover, considering the large size of the hierarchical structure in taxonomies like <a href="https://research.google.com/audioset/" target="_blank">AudioSet</a>, it is important to show the location and context of the categories within the hierarchy. Another design criteria was to allow the comparison of different categories by simultaneously displaying their information. In the proposed interface, a text-based search allows to locate categories in the taxonomy table. 

<a href="/assets/img/AC_manual_annotator_1.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/AC_manual_annotator_1.png" alt="AC Manual Annotator">
</a>



## AC Refinement Annotator
The AC Refinement Annotator displays some previously existing labels as rows. The annotator can examine their location in the AudioSet hierarchy as well as their siblings and children categories. By making use of the hierarchy, the main goal of this tool is to aid the annotation process by providing an iterative way of specifying the type or nature of the content.

<a href="/assets/img/AC_manual_annotator_2.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:640px;" class="img-responsive" src="/assets/img/AC_manual_annotator_2.png" alt="AC Refinement Annotator">
</a>



<p style="text-align: center;"> 
<a href="https://github.com/MTG/freesound-datasets/tree/annotation-tools-FRUCT2018" target="_blank">Source code repository</a> 
</p>

More information can be found in our [23rd IEEE FRUCT Conference paper](https://arxiv.org/abs/1811.10988).
