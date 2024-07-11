---
title: Programmatic Access to Gene Ontology
permalink:  /docs/tools-guide/
redirect_from:
- /GO.tools.shtml
---

# Programmatic Access to Gene Ontology

---

> This page documents how to query the ontology and annotations using the GO APIs

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
