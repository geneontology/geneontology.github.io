# Gene Ontology Website

To contribute to this site content, please follow the [guidelines](/HOWTO.md)

## Installation

You need Ruby and gem before starting, then:

```bash
# install bundler
gem install bundler

# clone the project
git clone https://github.com/geneontology/geneontology.github.io.git
cd geneontology.github.io
bundle install
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

