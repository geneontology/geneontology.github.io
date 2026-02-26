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

## Building and testing locally (in docker image)

Build the site and generate the [Pagefind](https://pagefind.app/) search index:
```
bundle exec jekyll build
npx pagefind@latest --site _site
```

Serve the site locally:
```
python3 -m http.server -d _site
```
The site will be available at http://localhost:8000/ . Re-run both commands above after making changes.

## Removing pages

Pages that are no longer needed can be deleted, or if the .md might still be used later the permalinks/links can be deleted.
