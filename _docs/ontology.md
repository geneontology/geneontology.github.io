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

Every term has a human-readable term name—e.g. mitochondrion, glucose transport, amino acid binding—and a GO ID, a unique seven digit identifier prefixed by GO:, e.g. GO:0005125 or GO:0060092. 

### Aspect

Denotes which of the three sub-ontologies (cellular component, biological process or molecular function) the term belongs to.

### Definition

A textual description of what the term represents, plus reference(s) to the source of the information. 

### Relationships to other terms

How the term relates to other terms in the ontology. All terms (other than the root terms representing each aspect, above) have an is a sub-class relationship to another term; for example, [glucose transport (GO:1904659)](http://amigo.geneontology.org/amigo/term/GO:0015758){:target="blank"}{:target="blank"} is a [monosaccharide transport (GO:0015749)](http://amigo.geneontology.org/amigo/term/GO:0015749){:target="blank"}. The Gene Ontology employs a number of other relations; the [relations documentation page](/docs/ontology-relations/) describes the relations used in the ontology.

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

Database cross-references, or dbxrefs, refer to identical or very similar objects in other databases. For instance, the molecular function term retinal isomerase activity is cross-referenced with the Enzyme Commission entry EC:5.2.1.3; the biological process term sulfate assimilation has the cross-reference MetaCyc:PWY-781.

### Comment

Any extra information about the term and its usage.

### Subset

Indicates that the term belongs to a designated subset of terms, e.g. one of the [GO subsets](/docs/go-subset-guide/).

### Obsolete tag

Indicates that the term has been deprecated and should not be used. A GO term is obsoleted when it is out of scope, misleadingly named or defined, or describes a concept that would be better represented in another way and needs to be removed from the published ontology. In these cases, the term and ID still persist in the ontology, but the term is tagged as obsolete, and all relationships to other terms are removed. A comment is added to the term detailing the reason for the obsoletion and   replacement terms are suggested, if possible. 


