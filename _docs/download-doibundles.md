---
title: Download DOI-versioned bundles
permalink: /docs/download-doibundles/
---

# Download DOI-versioned bundles

## Full DOI-versioned bundles
*__some intro & stuff about the full bundles__*

## Holey BDBag 
*__some intro & stuff about the BDBag__*



The following example requires both [python](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/installing/) to be installed. Once this is done, you can install the [BDBag cli](https://github.com/fair-research/bdbag) by following those steps:
```
pip install bdbag
git clone https://github.com/fair-research/bdbag
python setup.py install

check that you pass all tests:
python setup.py test
```

Once the [BDBag cli](https://github.com/fair-research/bdbag) is installed, fetch a DOI versioned of GO dataset, either the full archive or the holey bag. For this example, since we plan on accessing single files, the holey bag (containing only the references to our files) is sufficient. In your bdbag, a file named fetch.txt indicates all the files contained and accessible from this archive. Its syntax is as follow:

| URL | Length | Filename |
|-----|---------|----------|
| http://release.geneontology.org/2018-10-08/annotations/aspgd.gaf.gz | 6346222 | data/annotations/aspgd.gaf.gz |
| http://release.geneontology.org/2018-10-08/annotations/aspgd.gpad.gz | 4883110 | data/annotations/aspgd.gpad.gz |
| http://release.geneontology.org/2018-10-08/annotations/aspgd.gpi.gz | 1367586 | data/annotations/aspgd.gpi.gz |
...

The full extent of possible queries over BDbags are described [here](https://github.com/fair-research/bdbag/blob/master/doc/cli.md).

Assuming you are in your GO BDbag folder, you can for instance retrieve the first file (aspgd.gaf.gz) with two different methods:

## By the URL of the file
```
bdbag --resolve all --fetch-filter url==http://release.geneontology.org/2018-10-08/annotations/aspgd.gaf.gz ./
```

## By the name of the file
```
bdbag --resolve all --fetch-filter filename==data/annotations/aspgd.gaf.gz ./
```

The file retrieved will be stored in the same folder hierarchy as described in the filename. In the previous example, the file `aspgd.gaf.gz` retrieved will be stored locally in `data/annotations/`

**Notes**: 
* this specific file could be accessed by using `length==6346222` but there is no guaranty that this size is unique. The length filter is therefore better used to retrieve a set of files smaller than or greater than a certain threshold
* holey BDbags are a very convenient way to retrieve only the files important to you as the holey BDbags only contain the references needed to actually retrieve the files of interest
