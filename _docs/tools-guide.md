---
title: Programmatic Access to Gene Ontology
permalink:  /docs/tools-guide/
redirect_from:
- /GO.tools.shtml
---

# Programmatic Access to Gene Ontology

---

> This page documents how to query the ontology, annotations, and GO-CAM models using the GO API.

---

## Query GO ontology and annotations with Biolink

The purpose of the [Biolink Model](https://github.com/biolink/biolink-model){:target="blank"} is to provide a high level datamodel of biological entities (genes, diseases, phenotypes, pathways, individuals, substances, etc), their properties, relationships, and ways in which they can be associated. The GO API implementation and its associated swagger documentation are available at [http://api.geneontology.org/](http://api.geneontology.org){:target="blank"}.

In the [Biolink Model](https://github.com/biolink/biolink-model){:target="blank"}, any GO term is referred to as "function", hence the following query returns meta data about the GO term {id}: 
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

## Access GO-CAM models

The GO API provides routes for retrieving GO-CAM models and for finding models by taxon or publication. Models are returned in the "user-friendly" GO-CAM JSON format — the same LinkML-defined format available as a [release download](/docs/download-go-cams/#go-cam-download-links).

Retrieve a single GO-CAM model by its ID:
```
https://api.geneontology.org/api/gocam-model/{id}
```
Example: [https://api.geneontology.org/api/gocam-model/5323da1800000002](https://api.geneontology.org/api/gocam-model/5323da1800000002){:target="blank"}

List all GO-CAM models for a given taxon:
```
https://api.geneontology.org/api/taxon/{taxon}/models
```
Example: [human GO-CAM models](https://api.geneontology.org/api/taxon/NCBITaxon:9606/models){:target="blank"}

List all GO-CAM models associated with a publication:
```
https://api.geneontology.org/api/pmid/{id}/models
```
Example: [models citing PMID:17996703](https://api.geneontology.org/api/pmid/PMID:17996703/models){:target="blank"}

The full set of routes is documented in the [GO API Swagger docs](https://api.geneontology.org/){:target="blank"}.

> Note: the older `/api/models/...` routes are deprecated and will be removed. The three routes above are the ones to use going forward.
