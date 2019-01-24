---
title: Guide to query and download GO
permalink: /docs/tools-guide/
---

# Guide to query and download GO

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aut vel nisi dolor repellat inventore molestiae mollitia, quisquam ipsum tempora iste. Nisi praesentium sapiente nihil voluptates qui, culpa accusantium velit?

## Query

### Ontology and standard GO Annotations

#### GOlr: GO Solr search engine
The ontology and GO annotations can easily be searched and retrieved via the GO Solr search engine API called [GOlr](http://golr-aux.geneontology.io/solr).

The following is a query example to retrieve all [meta data about the GO term GO:0030182](http://golr-aux.geneontology.io/solr/select?fq=document_category:%22ontology_class%22&q=*:*&fq=id:%22GO:0030182%22&wt=json){:target="blank"}:
```
http://golr-aux.geneontology.io/solr/select?fq=document_category:%22ontology_class%22&q=*:*&fq=id:%22GO:0030182%22&wt=json
````

[GOlr](http://golr-aux.geneontology.io/solr) is powering the faceted search of [Amigo](http://amigo.geneontology.org/){:target="blank"}.

#### BioLink: a gateway to access GO and other linked data
The purpose of the [BioLink Data Model](https://github.com/biolink/biolink-model){:target="blank"} is to provide a high level datamodel of biological entities (genes, diseases, phenotypes, pathways, individuals, substances, etc), their properties, relationships, and ways in which they can be associated.

### GO-CAMs
GO also provides an [API](https://api.geneontology.cloud/models){:target="blank"} to query data about GO-CAMs as well as a [swagger documentation](https://app.swaggerhub.com/apis-docs/geneontology/gosparql){:target="blank"} to familiarize with the routes and parameters. The API is used to power the [http://geneontology.org/go-cam](http://geneontology.org/go-cam){:target="blank"} section of this site.

The following is a query example to retrieve all [GO terms contained in the GO-CAM 59a6110e00000067](https://api.geneontology.cloud/models/go?gocams=59a6110e00000067){:target="blank"}:
```
https://api.geneontology.cloud/models/go?gocams=59a6110e00000067
```


## Download

### General Download
GO provides different ways to download both its [ontology](/docs/download-ontology/) and its [annotations](/docs/download-go-annotations/). Among them, GO provides a programmatic way to access full or holey BD bags.

### Programmatic Download: BDBag
The following example requires both [python](https://www.python.org/downloads/) and [pip](https://pip.pypa.io/en/stable/installing/) to be installed. Once this is done, you can install the [BDBag cli](https://github.com/fair-research/bdbag) by following those steps:

```
pip install bdbag
git clone https://github.com/fair-research/bdbag
python setup.py install
```
Then check that you pass all tests:
```
python setup.py test
```
Create a symlink from your bdbag application to your /usr/bin/ folder:
````
sudo ln -s ./bdbag /usr/bin/bdbag
````

Once the [BDBag cli](https://github.com/fair-research/bdbag){:target="blank"} is installed, fetch a DOI versioned of GO dataset, either the [full archive](https://doi.org/10.5281/zenodo.1205159) or the [holey bag](https://doi.org/10.5281/zenodo.1205159). 

In this example, we plan on accessing single files, so the holey bag (containing only the references to our files) is sufficient. Once you have retrieved our DOI versioned of GO from one of the two links above, notice a file named `fetch.txt`. It describes all the files contained and accessible from this archive. Its syntax is as follow:

| URL | Length | Filename |
|-----|---------|----------|
| http://release.geneontology.org/2018-10-08/annotations/aspgd.gaf.gz | 6346222 | data/annotations/aspgd.gaf.gz |
| http://release.geneontology.org/2018-10-08/annotations/aspgd.gpad.gz | 4883110 | data/annotations/aspgd.gpad.gz |
| http://release.geneontology.org/2018-10-08/annotations/aspgd.gpi.gz | 1367586 | data/annotations/aspgd.gpi.gz |

...

The full extent of possible queries over BDbags are described [here](https://github.com/fair-research/bdbag/blob/master/doc/cli.md).

GO to your DOI versioned of GO BDbag folder, you can now for instance retrieve the first file (aspgd.gaf.gz) with two different methods:

#### By the URL of the file
```
bdbag --resolve all --fetch-filter url==http://release.geneontology.org/2018-10-08/annotations/aspgd.gaf.gz ./
```

#### By the name of the file
```
bdbag --resolve all --fetch-filter filename==data/annotations/aspgd.gaf.gz ./
```

The file retrieved will be stored in the same folder hierarchy as described in the filename. In the previous example, the file `aspgd.gaf.gz` retrieved will be stored locally in `data/annotations/`

**Notes**: 
* this specific file could be accessed by using `length==6346222` but there is no guaranty that this size is unique. The length filter is therefore better used to retrieve a set of files smaller than or greater than a certain threshold
* holey BDbags are a very convenient way to retrieve only the files important to you as the holey BDbags only contain the references needed to actually retrieve the files of interest