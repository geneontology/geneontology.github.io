---
title: Programmatic Access to Gene Ontology
permalink: /docs/tools-guide/
---

# Programmatic Access to Gene Ontology

---

> This page documents various ways to query the ontology and annotations using the GO APIs

---

## Query GO ontology and annotations with GOlr

The ontology and GO annotations can easily be searched and retrieved via the GO Solr search engine API called [GOlr](http://wiki.geneontology.org/index.php/GOlr){:target="blank"}.

The following is a query example to retrieve all [meta data about the GO term GO:0030182](http://golr-aux.geneontology.io/solr/select?fq=document_category:"ontology_class"&q=*:*&fq=id:"GO:0030182"&wt=json){:target="blank"}:
```
http://golr-aux.geneontology.io/solr/select?fq=document_category:"ontology_class"&q=*:*&fq=id:"GO:0030182"&wt=json
````

While the following is a query example to retrieve all [annotations of the TP53 gene in rats](http://golr-aux.geneontology.io/solr/select?fq=document_category:"annotation"&q=*:*&fq=bioentity:"RGD:3889"&wt=json){:target="blank"}:
```
http://golr-aux.geneontology.io/solr/select?fq=document_category:"annotation"&q=*:*&fq=bioentity:"RGD:3889"&wt=json
````

Note: [GOlr](http://wiki.geneontology.org/index.php/GOlr){:target="blank"} is powering the faceted search of [AmiGO](http://amigo.geneontology.org/){:target="blank"}.

---

## Query GO ontology and annotations with BioLink

The purpose of the [BioLink Data Model](https://github.com/biolink/biolink-model){:target="blank"} is to provide a high level datamodel of biological entities (genes, diseases, phenotypes, pathways, individuals, substances, etc), their properties, relationships, and ways in which they can be associated. The GO BioLink API implementation and its associated swagger documentation are available at [http://api.geneontology.org/api](http://api.geneontology.org/api){:target="blank"}.

In the [BioLink Data Model](https://github.com/biolink/biolink-model){:target="blank"}, any GO term is referred to as "function", hence the following query returns meta data about the GO term {id}: 
```
/bioentity/function/{id}
```


Example: [annotations for the apoptotic process term](http://api.geneontology.org/api/bioentity/function/GO:0006915){:target="blank"}
```
http://api.geneontology.org/api/bioentity/function/GO:0006915
```

Note: pagination can be achieved by using the start & rows parameter. [Example](http://api.geneontology.org/api/bioentity/function/GO:0006915?start=0&rows=2){:target="blank"} :
```
http://api.geneontology.org/api/bioentity/function/GO:0006915?start=0&rows=2
```

---

## Query GO Causal Activity Models (Experimental)

GO also provides an [API](https://api.geneontology.cloud/models){:target="blank"} to query data about GO-CAMs as well as a [swagger documentation](https://app.swaggerhub.com/apis-docs/geneontology/gosparql){:target="blank"} to familiarize with the routes and parameters. The API is used to power the [http://geneontology.org/go-cam](http://geneontology.org/go-cam){:target="blank"} section of this site.

Query example to retrieve all [GO terms contained in the GO-CAM 59a6110e00000067](https://api.geneontology.cloud/models/go?gocams=59a6110e00000067){:target="blank"}:
```
https://api.geneontology.cloud/models/go?gocams=59a6110e00000067
```

Query example to retrieve all [gene products used in the GO-CAM 59a6110e00000067](https://api.geneontology.cloud/models/gp?gocams=59a6110e00000067){:target="blank"}:
```
https://api.geneontology.cloud/models/gp?gocams=59a6110e00000067
```

Query example to retrieve all [PMIDs cited in the GO-CAM 59a6110e00000067](https://api.geneontology.cloud/models/pmid?gocams=59a6110e00000067){:target="blank"}:
```
https://api.geneontology.cloud/models/pmid?gocams=59a6110e00000067
```

Query example to retrieve all [GO-CAMs implicating the mouse Rtl4 gene](https://api.geneontology.cloud/gp/http%3A%2F%2Fidentifiers.org%2Fmgi%2FMGI%3A3588192/models){:target="blank"}:
```
https://api.geneontology.cloud/gp/http%3A%2F%2Fidentifiers.org%2Fmgi%2FMGI%3A3588192/models
```

More information available on the [swagger documentation of the API](https://app.swaggerhub.com/apis-docs/geneontology/gosparql){:target="blank"}

---

## Programmatic Download: BDBag
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
