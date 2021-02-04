---
title: GO term elements
permalink: /docs/GO-term-elements
redirect_from: 
- /docs/ontology/
- /page/ontology-structure
- /page/species-specific-terms
---


# GO term elements

## Essential elements

### Unique identifier and term name 

Every term has a human-readable term name — e.g. [mitochondrion](http://amigo.geneontology.org/amigo/term/GO:0005739), [glucose transmembrane transport](http://amigo.geneontology.org/amigo/term/GO:1904659), or [amino acid binding](http://amigo.geneontology.org/amigo/term/GO:0016597) — and a GO ID, a unique seven digit identifier prefixed by GO:, e.g. [GO:0005739](http://amigo.geneontology.org/amigo/term/GO:0005739), [GO:1904659](http://amigo.geneontology.org/amigo/term/GO:1904659), or [GO:0016597](http://amigo.geneontology.org/amigo/term/GO:0016597). 

### Aspect

Denotes which of the three sub-ontologies (cellular component, biological process or molecular function) the term belongs to.

### Definition

A textual description of what the term represents, plus reference(s) to the source of the information. 

### Relationships to other terms

How the term relates to other terms in the ontology. All terms (other than the root terms representing each aspect, above) have an is a sub-class relationship to another term; for example, [glucose transmembrane transport (GO:1904659)](http://amigo.geneontology.org/amigo/term/GO:1904659){:target="blank"}{:target="blank"} is a [monosaccharide transport (GO:0015749)](http://amigo.geneontology.org/amigo/term/GO:0015749){:target="blank"}. The Gene Ontology employs a number of other relations; the [relations documentation page](/docs/ontology-relations/) describes the relations used in the ontology.

## Optional elements

### Secondary IDs (also known as Alternate ID)

Secondary IDs come about when two or more terms are identical in meaning, and are merged into a single term. All terms IDs are preserved so that no information (for example, annotations to the merged IDs) is lost.

### Synonyms

Alternative words or phrases closely related in meaning to the term name, with indication of the relationship between the name and synonym given by the synonym scope. The scopes for GO synonyms are:
+ **Exact**: an exact equivalent; interchangeable with the term name; for e.g. ornithine cycle is an exact synonym of urea cycle 
+ **Broad**: the synonym is broader than the term name; for e.g. cell division is a broad synonym of cytokinesis 
+ **Narrow**: the synonym is narrower or more precise than the term name; for e.g. pyrimidine-dimer repair by photolyase is a narrow synonym of photoreactive repair
+ **Related**: the terms are related in some imprecise way; for e.g. cytochrome bc1 complex is a related synonym of ubiquinol-cytochrome-c reductase activity virulence is a related synonym of pathogenesis 

Custom synonym types are also used in the ontology. For example, a number of synonyms are designated as systematic synonyms; synonyms of this type are exact synonyms of the term name.

### Database cross-references

Database cross-references, or dbxrefs, refer to identical or very similar objects in other databases. For instance, the molecular function term [retinal isomerase activity (GO:0004744)](http://amigo.geneontology.org/amigo/term/GO:0004744) is cross-referenced with [RHEA:24124](https://www.rhea-db.org/reaction.xhtml?id=24124); the biological process term [ulfate assimilation (GO:0000103)](http://amigo.geneontology.org/amigo/term/GO:0000103) has the [InterPro](https://www.ebi.ac.uk/interpro/) cross-reference [Sulphate adenylyltransferase (IPR002650)](https://www.ebi.ac.uk/interpro/entry/IPR002650). 

The mapping of GO terms to other databases is available in the [Download mappings](/docs/download-mappings) section. Additional meta data about those databases, prefixes and URLs can be retrieved from the GO dbxrefs available as both [ [JSON](http://current.geneontology.org/metadata/db-xrefs.json){:target="blank"} ] and [ [YAML](http://current.geneontology.org/metadata/db-xrefs.yaml){:target="blank"} ] files.

### Comment

Any extra information about the term and its usage.

### Subset

Indicates that the term belongs to a designated subset of terms, e.g. one of the [GO subsets](/docs/go-subset-guide/).

### Obsolete tag

Indicates that the term has been deprecated and should not be used. A GO term is obsoleted when it is out of scope, misleadingly named or defined, or describes a concept that would be better represented in another way and needs to be removed from the published ontology. In these cases, the term and ID still persist in the ontology, but the term is tagged as obsolete, and all relationships to other terms are removed. A comment is added to the term detailing the reason for the obsoletion and   replacement terms are suggested, if possible. 


