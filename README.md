# audiocommons.github.io
Website of the Audio Commons Initiative/AudioCommons project

The Audio Commons website is hosted as a static page in Github Pages, and is built using the [Jekyll framework](http://jekyllrb.com).
To edit the site you have to contribute your changes (e.g., news posts and materials) to this source code repository. 
After your changes are committed and merged to the master branch, Github will **automatically rebuild** the static site and make it instantly available to the public.
Note that editing existing contents and adding new contents can be all done directly from the Github web interface.
It is therefore not strictly needed to clone the repository and install the required software to edit the site locally. Instructions for setting up a local copy of a Github Pages site can be [found here](https://help.github.com/articles/setting-up-your-pages-site-locally-with-jekyll/).

In order to contribute to this repository you'll need a Github account and you'll need to be a member of the AudioCommons Github organisation. Please, send your membership requests to [ffont](https://github.com/ffont) or [alastair](https://github.com/alastair).

The source code for the Audio Commons site is released under the GNU General Public License 3.0 (see [LICENSE.md](https://github.com/AudioCommons/audiocommons.github.io/blob/master/LICENSE.md)).
The content of the site however (i.e., entries in **News** and  **Materials** sections, and text and figures in **About Audio Commons** and **Team** sections) is released under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/).


## Instructions for contributing to the Audio Commons site

* [Posting in the "home" section](#posting-in-the-home-section)
* [Posting in the "tools" section](#posting-in-the-tools-section)
* [Posting in the "materials" section](#posting-in-the-materials-section)
  * [Hosting downloadable files in the Audio Commons site](#hosting-downloadable-files-in-the-audio-commons-site)
* [Other contributions](#other-contributions)

### Posting in the "home" section

You can add a news post by creating a file in the [_posts](https://github.com/AudioCommons/audiocommons.github.io/tree/master/_posts) folder of this repository.
Note that you can directly create the file from the Github web interface by navigating to the [_posts](https://github.com/AudioCommons/audiocommons.github.io/tree/master/_posts) folder and clicking on the **New file** button.
The file must be markdown formatted and must include a number of metadata fields in a YAML front matter (see example below). 
It must be named as `YYYY-MM-DD-short-version-of-title.md` (YYYY-MM-DD being the publication date).
Once the file is saved and committed to the `master` branch (Github web interface will do it for you upon saving the newly created file), it will automatically be added to the news section (it may take a few seconds).

Required structure of the markdown file for a news post:

```markdown
---
layout: post
current: post
class: post-template
subclass: 'post'
navigation: True
#cover: assets/img/image.jpg # -> optional, if set an image will be shown with the entry
title:  "Title of the post"
tags: news
---

Add the post body here using markdown syntax.
```

Here is an example of an [existing news post](https://raw.githubusercontent.com/AudioCommons/audiocommons.github.io/master/_posts/2017-05-05-audiocommons-second-milestone-reached.md).
Check [Github's markdown syntax guide](https://guides.github.com/features/mastering-markdown/) for examples on how to format text with markdown.

Existing news entries can also be easily edited by navigating to the file with the Github web interface and clicking on **Edit this file** (i.e., the icon with a pencil). When changes are committed to the `master` branch the post will be automatically updated on the site.


### Posting in the "tools" section

To post in the tools section you have to follow the same procedure as for [posting in the "home" section](#posting-in-the-news-section), but instead of setting the tag `news` you'll have to set the tag `tools`. There fore, your markdown foreground should look like:

```markdown
---
layout: post
current: post
class: post-template
subclass: 'post'
navigation: True
#cover: assets/img/image.jpg # -> optional, if set an image will be shown with the entry
title:  "Title of the post"
tags: tools # <- this is the bit that changed!
---

Add the post body here using markdown syntax.
```

Note that entries in the tools section will also appear in the home entry.


### Posting in the "materials" section

To post a new entry in the materials section you must create a new file in the [_materials](https://github.com/AudioCommons/audiocommons.github.io/tree/master/_materials) folder.
The file must have the extension `.md`, but it does not need to follow any other naming convention.
As for the news section, the file must include a YAML front matter with all the required metadata so that it can be rendered. Unlike posting in the news section, the files does not need to have any contents other than the YAML front matter.

See an example of the *materials* enrty [file for the Audio Commons logos](https://github.com/AudioCommons/audiocommons.github.io/blob/master/_materials/logo_exports.md):

```markdown
---
type: "other"
title:  "Audio Commons logos"
date: 2016-02-01
download_link: "/assets/files/audiocommons-logos.zip"
description: "Audio Commons logo and icon in horizontal and vertical layouts and in png and svg formats."
license: CC0
---
```

Depending on which metadata fields are included in the front matter, the entry will be rendered in different ways.
The current available fields are the following:

**Metadata field** | **Description**
------------ | -------------
**type** | Must be either **document**, **paper** or **other**. The material entry will appear in the corresponding section of the [materials page](http://www.audiocommons.org/materials/). The rendering of the entry will also vary depending on its type.
**title** | Title of the entry to be displayed in the page (the filename is not used).
**authors** | Author names as an array of strings (e.g., ["Surname, N.", "Surname2, N2."]). This field will only be shown if present and if the type of the entry is set to **paper**.
**date** | Date to be displayed next to the title and to be used for sorting purposes. Introduce it in ``YYYY-MM-DD`` format.
**link** | Link to be added to the title. If this field is not present, the title will be displayed with no link (as in the example above).
**description** | Textual description of the material entry to be displayed in the page. If this field is not present, no textual description will be displayed. If description is provided, please keep it short ;)
**download_link** | Link to a downloadable file related to the entry (see below if you want to host a file in the Audio Commons page itself). If the field is not present, no link will be displayed.
**preprint_link** | Link to a downloadable pre-print version of a paper (see below if you want to host a file in the Audio Commons page itself). This field will only be shown if present and if the type of the entry is set to **paper**.
**postprint_link** | Link to a downloadable post-print version of a paper (see below if you want to host a file in the Audio Commons page itself). This field will only be shown if present and if the type of the entry is set to **paper**.
**publishers_link** | Link to the publisher's site entry for a paper. This field will only be shown if present and if the type of the entry is set to **paper**.
**repository_link** | Link to a source code repository. This field will only be shown if present and if the type of the entry is set to **other**.
**license** | License of the material entry to display in the page.

#### Hosting downloadable files in the Audio Commons site

For some of the entries in the materials section (documents, papers...), it will be useful to directly host a linked file (e.g., a pdf of the paper) in the Audio Commons site itself. 
To do that, a file must be uploaded to the [assets/files/](https://github.com/AudioCommons/audiocommons.github.io/tree/master/assets/files) folder.
You can do that directly from the Github web interface by navigating to the [assets/files/](https://github.com/AudioCommons/audiocommons.github.io/tree/master/assets/files) folder and clicking on **Upload files**.
Once the files are uploaded and committed to the `master` branch, you can link to them using the path `/assets/files/filename.extension` (within the Audio Commons site) or the full url `http://www.audiocommons.org/assets/files/filename.extension` (if linking from an external page).


### Other contributions

Other site modifications can be done similarly as described in the above sections.
The **Team** section can be modified editing the [team.md](https://github.com/AudioCommons/audiocommons.github.io/blob/master/team.md) markdown file.
Also, the **About Audio Commons** section can be modified editing the [_includes/index.md](https://github.com/AudioCommons/audiocommons.github.io/blob/master/_includes/index.md) markdown file.

Please get familiar with the [Jekyll framework](http://jekyllrb.com) to make sure you understand the code structure and functioning before editing. Edits other than adding news or materials entries should not be directly committed to the `master` branch but should ideally be committed to a new branch and a [pull request](https://help.github.com/articles/using-pull-requests/) should be started. 
The admins will then take care of merging the pull request to the `master`branch.

If you have any questions or need further help, please don't hesitate to contact [ffont](https://github.com/ffont) or [alastair](https://github.com/alastair).
