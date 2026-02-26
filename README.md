# Gene Ontology Website

To contribute to this site content, please follow the [guidelines](/HOWTO.md)

## Installation (docker)

As versions have rather moved on at this point, we can still reproduce our desired environment with:

```
git clone https://github.com/geneontology/geneontology.github.io.git
cd geneontology.github.io
docker run --network host -v `pwd`:'/work' -w /work -i -t ubuntu:noble /bin/bash
apt-get update && apt-get -u install bundler wget nodejs npm
make
bundler install
export LANG="C.UTF-8"
export LC_ALL="C.UTF-8"
```

As a "shortcut"
```
apt-get update && apt-get -u install bundler wget nodejs npm && make && bundler install && export LANG="C.UTF-8" && export LC_ALL="C.UTF-8"
```

## Running (in docker image)
```
bundle exec jekyll serve
```
This will run a local instance of the jekyll server.
The site will be available at: http://127.0.0.1:4000/ .

## Building the site
```
bundle exec jekyll build
```
The static files of the site will be stored in `_site`

## Search indexing
Search is powered by [Pagefind](https://pagefind.app/) and indexed automatically during the GitHub Actions build. No manual indexing step is needed.

## Removing pages

Pages that are no longer needed can be deleted, or if the .md might still be used later the permalinks/links can be deleted.
