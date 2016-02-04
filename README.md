# audiocommons.github.io
Website of the Audio Commons Initiative and AudioCommons project

## Instructions for editing the site

The Audio Commons website is hosted as a static page in Github Pages using the [Jekyll framework](http://jekyllrb.com).
To edit the site you have to contribute your changes or news posts to this code repository. 
After your changes are commited and merged to the master branch, Github will automatically rebuild the static site and make it instantly available to the public.

In order to contribute to this repository you'll need a Github account and you'll need to be a member of the AudioCommons Github organisation.
Please, send your membership requests to [ffont](https://github.com/ffont) or [alastair](https://github.com/alastair).

### Posting news entries

You can add a news entry by creating a file in the [_posts](https://github.com/AudioCommons/audiocommons.github.io/tree/master/_posts) folder.
The file must be markdown formatted and must include a number of metadata fields in the preable (see example below). 
It must be named as `YYYY-MM-DD-short-version-of-title.markdown` (YYYY-MM-DD being the publication date).

Example of a markdown file for a news post:

```markdown
---
layout: post
title:  "Title of the post"
date:   YYYY-MM-DD HH:00:00 # -> publication date and time
#author: Author Name # -> optional, remove the '#' character at the beggining of the line if you want to include the author name
---

Here it goes the post body using markdown syntax. See [Github's markdown syntax guide](https://guides.github.com/features/mastering-markdown/)

```

**Tip:** Github allows you to edit and create new files directly via its web interface, therefore you do not need to clone this repository locally to contribute to the web ;)
