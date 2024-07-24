# Gene Ontology Website

To contribute to this site content, please follow the [guidelines](/HOWTO.md)

## Installation (basic)

You need Ruby and gem before starting, then:

```bash
# install bundler
gem install bundler

# clone the project
git clone https://github.com/geneontology/geneontology.github.io.git
cd geneontology.github.io
bundle install
```

## Installation (docker)

More specifically, as versions have rather moved on at this point, we can reproduce with:

```
git clone https://github.com/geneontology/geneontology.github.io.git
cd geneontology.github.io
docker run --network host -v `pwd`:'/work' -w /work -i -t ubuntu:focal /bin/bash
apt-get update && apt-get -u install bundler
gem install bundler:2.2.3
bundler install
```

## Running locally
```
bundle exec jekyll serve
```
This will run a local instance of the jekyll server

## Building the site
```
bundle exec jekyll build
```
The static files of the site will be stored in `_site`

## Indexing the pages
```
ALGOLIA_API_KEY=admin_key bundle exec jekyll algolia
```
This will index all markdown pages using [algolia](https://www.algolia.com). The pages to be indexed (or not indexed) as well as the tag elements can be configured in `_config.yml`

## Removing pages

Pages that are no longer needed can be deleted, or if the .md might still be used later the permalinks/links can be deleted.
