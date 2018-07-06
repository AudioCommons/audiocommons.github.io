---
layout: post
cover: assets/img/extractor.jpg
navigation: True
class: post-template
subclass: 'post'
tags: news
title:  "Audio Commons Audio Extractor"
author: Frederic Font
---

The **Audio Commons Audio Extractor** is a tool that incorporates algorithms to automatically extract low-level and high-level features from audio files. These properties include musical information such as tonal and rhythmic information as well as non-music properties that characterize the timbre of sound.


<a href="/assets/img/ace_diagram_annotation_highlighted.png" target="blank"><img style="margin:auto;margin-bottom:25px;margin-top:25px;max-width:800px;" class="img-responsive" src="/assets/img/ace_diagram_annotation_highlighted.png" alt="ACE diagram.">
</a>
<p style="text-align:center; padding-top:0; font-size:85%"><em>Figure 1. Audio Commons Ecosystem diagram, with annotation tools highlighted.</em></p>

This is an example JSON output after analyzing this file: [insert freesound embed]

<iframe frameborder="0" scrolling="no" src="https://freesound.org/embed/sound/iframe/47371/simple/full_size/" width="920" height="275"></iframe>

```
{
    "duration": 6.0,
    "lossless": 1.0,
    "codec": "pcm_s16le",
    "bitrate": 705600.0,
    "samplerate": 44100.0,
    "channels": 1.0,
    "audio_md5": "8da67c9c2acbd13998c9002aa0f60466",
    "loudness": -28.207069396972656,
    "dynamic_range": 0.6650657653808594,
    "temporal_centroid": 0.5078766345977783,
    "log_attack_time": 0.30115795135498047,
    "filesize": 529278,
    "single_event": false,
    "tonality": "G# minor",
    "tonality_confidence": 0.2868785858154297,
    "is_loop": true,
    "tempo": 120,
    "tempo_confidence": 1.0,
    "note_midi": 74,
    "note_name": "D5",
    "note_frequency": 592.681884765625,
    "note_confidence": 0.0,
    "brightness": 50.56954356039029,
    "depth": 13.000903137777897,
    "hardness": 0,
    "metallic": 0.4906048209174263,
    "reverb": 0,
    "roughness": 0.7237051954207928,
    "genre": "Genre B",
    "mood": "Mood B"
}
```

Alternatively, the Audio Commons Audio Extractor can also output the analysis results in a JSON-LD ([JSON for linked data](https://json-ld.org/)) format compatible with semantic web technologies and the **Audio Commons Ontology**.

## Using the Audio Commons Audio Extractor

The Audio Commons Audio Extractor is expected to be used as a command line tool and run from a terminal. To facilitate its usage, the tool has been *dockerized* and should run without problems in any platform with [Docker](https://www.docker.com/) installed.

Assuming you have Docker installed, you can easily analyze sound from an audio file in the current directory using the following command (the first time you run this it will take longer as Docker will need to download the actual Audio Commons Audio Extractor):

```
docker run -it --rm -v `pwd`:/tmp mtgupf/ac-audio-extractor:v2 -i /tmp/audio.wav -o /tmp/analysis.json -smt
```

The example above mounts the current directory ``pwd`` in the virtual `tmp` directory inside Docker. The output file `audio.json` is also written in `tmp`, and therefore appears in the current directory. You can also mount different volumes and specify paths for input audio and analysis output like this (for more information, checkout [Docker volumes](https://docs.docker.com/storage/volumes/)):

```
docker run -it --rm -v /local/path/to/your/audio/file.wav:/audio.wav -v /local/path/to/output_directory/:/outdir mtgupf/ac-audio-extractor:v2 -i /audio.wav -o /outdir/analysis.json  -smt
```

Run help command to learn about available options:

```
docker run -it --rm -v `pwd`:/tmp mtgupf/ac-audio-extractor:v2 --help

uusage: analyze.py [-h] [-v] [-t] [-m] [-s] -i INPUT -o OUTPUT [-f FORMAT]
                  [-u URI]

AudioCommons audio extractor (v2). Analyzes a given audio file and writes
results to a JSON file.

optional arguments:
  -h, --help            show this help message and exit
  -v, --verbose         if set, prints detailed info on screen during the
                        analysis
  -t, --timbral-models  include descriptors computed from timbral models
  -m, --music-pieces    include descriptors designed for music pieces
  -s, --music-samples   include descriptors designed for music samples
  -i INPUT, --input INPUT
                        input audio file
  -o OUTPUT, --output OUTPUT
                        output analysis file
  -f FORMAT, --format FORMAT
                        format of the output analysis file ("json" or
                        "jsonld", defaults to "jsonld")
  -u URI, --uri URI     URI for the analyzed sound (only used if "jsonld"
                        format is chosen)
```

Using the flags `t`, `m` and `s` you can enable/disable [...] 


## Included audio features

### Audio file properties
- ```duration```: duration of audio file (sec.)
- ```lossless```: whether audio file is in lossless codec (True or False)
- ```codec```: audio codec
- ```bitrate```: bit rate
- ```samplerate```: sample rate
- ```channels```: number of audio channels
- ```audio_md5```: the MD5 checksum of raw undecoded audio payload. It can be used as a unique identifier of audio content

### Music pieces
- ```tempo```: BPM value estimated by beat tracking algorithm by [Degara et al., 2012](http://essentia.upf.edu/documentation/reference/std_RhythmExtractor2013.html).
- ```tonality```: [key and scale](http://essentia.upf.edu/documentation/reference/std_Key.html) estimate based on HPCP descriptor and "Krumhansl" key detection profile which should work generally fine for pop music. 
- ```note```: Pitch note name based on median of estimated fundamental frequency.
- ```note```: Estimated midi note number pitch note.

### Dynamics
- ```loudness```: the integrated (overall) loudness (LUFS) measured using the [EBU R128 standard](http://essentia.upf.edu/documentation/reference/std_LoudnessEBUR128.html).
- ```dynamic_range```: loudness range (dB, LU) measured using the [EBU R128 standard](http://essentia.upf.edu/documentation/reference/std_LoudnessEBUR128.html).
- ```temporal_centroid```: temporal centroid (sec.) of the audio signal. It is the point in time in a signal that is a temporal balancing point of the sound event energy.
- ```log_attack_time```: the [log (base 10) of the attack time](http://essentia.upf.edu/documentation/reference/std_LogAttackTime.html) of a signal envelope. The attack time is defined as the time duration from when the sound becomes perceptually audible to when it reaches its maximum intensity.


TODO: add references to deliverables