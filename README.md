# audiocommons.github.io
Website of the Audio Commons Initiative/AudioCommons project

The Audio Commons website is hosted as a static page in Github Pages, and is built using the [Jekyll framework](http://jekyllrb.com).
To edit the site you have to contribute your changes (e.g., news posts and materials) to this source code repository. 
After your changes are commited and merged to the master branch, Github will **automatically rebuild** the static site and make it instantly available to the public.
Note that editing existing contents and adding new contents can be all done directly from the Github web interface.
It is therefore not strictly needed to clone the repository and install the required software to edit the site locally.  
Instructions for setting up a local copy of a Github Pages site can be [found here](https://help.github.com/articles/setting-up-your-pages-site-locally-with-jekyll/).

In order to contribute to this repository you'll need a Github account and you'll need to be a member of the AudioCommons Github organisation. Please, send your membership requests to [ffont](https://github.com/ffont) or [alastair](https://github.com/alastair).

## Instructions for contributing to the Audio Commons site

### Posting in the "news" section

You can add a news post by creating a file in the [_posts](https://github.com/AudioCommons/audiocommons.github.io/tree/master/_posts) folder of this repository.
Note that you can directly create the file from the Github web interface by navigating to the [_posts](https://github.com/AudioCommons/audiocommons.github.io/tree/master/_posts) folder and licking on **New file**.
The file must be markdown formatted and must include a number of metadata fields in a YAML front matter (see example below). 
It must be named as `YYYY-MM-DD-short-version-of-title.markdown` (YYYY-MM-DD being the publication date).
Once the file is saved and commited to the `master` branch (Github web interface will do it for you upon saving the newly created file), it will automatically be added to the news section (it may take a few seconds).

Required structure of the markdown file for a news post:

```markdown
---
layout: post
title:  "Title of the post"
#author: Author Name # -> optional, remove the '#' character at the beggining of the line if you want to include the author name
---

Here it goes the post body using markdown syntax.
```

Here is an example of an [existing news post](https://raw.githubusercontent.com/AudioCommons/audiocommons.github.io/master/_posts/2016-02-04-audiocommons-61st-aes.markdown).
Checkout [Github's markdown syntax guide](https://guides.github.com/features/mastering-markdown/) for examples on how to format text with markdown.

Existing news entries can also be easily edited by navigating to the file with the Github web interface and clicking on **Edit this file** (i.e., the icon with a pencil). When changes are commited to the `master` branch the post will be automatically updated on the site.


### Posting in the "materials" section

TODO


### Other contributions

Other site edits can be done similarly as described in the above sections.
Please get familiar with the [Jekyll framework](http://jekyllrb.com) to make sure you undersand the code structure and functioning before editing. Furthermore, edits other than adding news or materials entries should not be directly commited to the `master` branch but should ideally be commited to a new branch and a [pull request](https://help.github.com/articles/using-pull-requests/) should be started.

For any doubts please don't hesitate to contact [ffont](https://github.com/ffont) or [alastair](https://github.com/alastair).

