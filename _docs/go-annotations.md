---
title: Introduction to GO annotations
permalink: /docs/go-annotations/
redirect_from:
- /page/go-annotations
- /page/annotation
- /page/go-annotation-policies
- /page/go-annotation-standard-operating-procedures
- GO.annotation.conventions.shtml
---

# Introduction to GO annotations

GO annotations come in two flavors: **standard GO annotations** and **GO-CAM Models**.

## Standard GO annotations
A standard GO annotation is a statement that links a gene product and a GO term via a relation from the [Relations Ontology (RO)](http://www.obofoundry.org/ontology/ro.html){:target="blank"} . In standard GO annotations, each statement is independent. 
A standard GO annotation minimally contains:
+ a gene product; may be a protein, an miRNA, a tRNA, etc.
+ a [GO term](/docs/ontology-documentation/)
+ a reference, usually a PMID, but DOIs and [GO Reference (GO_REF)](/gorefs.html) are also used. 
+ an evidence, using [a GO Evidence Code](/docs/guide-go-evidence-codes/), which describes the type of evidence: experimental evidence, sequence similarity or phylogenetic relation, as well as whether the evidence was reviewed by an expert biocurator. If not, the annotation is described as 'automated'.

Any number of annotations can be made to a gene, in order to fully describe its function or the location(s) in which it acts.

**Annotation extensions** are used to provide additional biological context to a GO term, using a relation from the [Relations Ontology (RO)](http://www.obofoundry.org/ontology/ro.html){:target="blank"} and a term from GO or an external ontology, e.g. [UBERON](http://uberon.github.io/){:target="blank"}. Further description of annotation extensions can be found in tha paper of [Huntley & Lovering 2017](https://www.ncbi.nlm.nih.gov/pubmed/27812947){:target="blank"} and [Huntley *et al.* 2014](https://www.ncbi.nlm.nih.gov/pubmed/24885854){:target="blank"}.

### Semantics of a GO annotation
Associations of gene products to GO terms are statements that describe
+ **Molecular Function**: the *normal* molecular activity of a gene product; mutants and roles in disease are out of scope for GO
+ **Cellular Component**: where the gene products are active
+ **Biological Process**: the pathways and larger processes to which that gene product's activity contributes
+ By the transitivity principle, an annotation to a GO term implies annotation to all its parents. Conversely, *NOT* annotations propagate down the ontology.
+ GO annotations are meant to reflect the most up-to-date view of a gene product's role in biology. Because biological knowledge changes, annotations for a given gene product may change to reflect changes in knowledge and/or changes in the ontology.
+ GO assumes an open-world model, that is, if a gene product is unannotated then its role is still unknown. Moreover, the fact that a gene product is not annotated to a specific class does not mean that the gene product *does not possess exhibit that function, or not localized to that cellular component, or is not involved in that biological process*. 

## GO-Causal Activity Models
GO-Causal Activity Models (GO-CAMs) provides a system to extend GO annotations with **biological context** as well as **causal connections** between activities. 
The network representation of GO-CAMs enables pathway visualization and analysis. 

Biological context that is captured for each GO aspects: 
+ MF: substrates ("input"), products ("output"), activators, inhibitors
+ BP: the broader process that the molecular function helps accomplish: cell cycle transition, transcription, signaling pathways, etc. Processes can be nested, i. e., a biological process can be part of another biological process. For example, a signaling pathway can be part of a developmental process, like the [Wnt signaling pathway](https://amigo.geneontology.org/amigo/term/GO:0016055){:target="blank"} is part of [dorsal/ventral pattern formation](https://amigo.geneontology.org/amigo/term/GO:0009953){:target="blank"}. 
+ CC: the cellular component, cell, and/or tissue the function/process take place.

See the ([GO-CAM example](http://model.geneontology.org/5323da1800000002){:target="blank"} for an illustration. **REALLY ??????**

The primary unit of biological modeling in GO-CAM is a molecular activity, e.g. protein kinase activity, of a specific gene product or complex. A molecular activity is an activity carried out at the molecular level by a gene product; this is specified by a term from the GO MF ontology. GO-CAM models are thus connections of GO MF annotations enriched by providing the appropriate context in which that function occurs. All connections in a GO-CAM model, e.g. between a gene product and activity, two activities, or an activity and additional contextual information, are made using clearly defined semantic relations from the [Relations Ontology](https://obofoundry.org/ontology/ro.html){:target="blank"}.

GO-CAMs can be browsed and visualized at [http://geneontology.org/go-cam](https://geneontology.org/go-cam){:target="blank"}  **REALLY ??????**

## Annotation relations

A specific set of terms from the Relations Ontology (RO), sometimes referred to as 'gp2term' (gene product to term) relations, are used to link gene products to GO terms in standard annotations. The modifer *NOT*, as well as qualifiers like *enables*, *acts upstream of or within , and *enables* are used in the [GAF format](/docs/go-annotation-file-gaf-format-2.2/). For the full list of permitted gp2term relations, see the [GO wiki](https://wiki.geneontology.org/Annotation_Relations#Standard_Annotation_Relations){:target="blank"}. Some of the most common relations are:

### The *enables* relation

*enables* links a gene product to a Molecular Function it executes. 

### The *contributes to* relation

*contributes to* links a gene product to a Molecular Function executed by a macromolecular complex, in which the Molecular Function cannot be ascribed to an individual subunit of that complex. Only the complex subunits required for the Molecular Function are annotated to the Molecular Function term with 'contributes to'.  

### The *involved in* relation

*involved in* links a gene product and a Biological Process in which the gene product's Molecular Function plays an integral role.

### The *acts upstream of or within* relation

*acts upstream of or within* links a gene product and a Biological Process when the mechanism relating the gene product's activity to the Biological Process is not known.

### The *located in* relation

*located in* links a gene product and the Cellular Component, specifically a cellular anatomical anatomy or virion component, in which a gene product has been detected. 

### The *part of* relation

*part of* links a gene product and a protein-containing complex. 

### The *colocalizes_with* relation
*colocalizes_with* indicates a peripheral association of the protein with an organelle or complex. For example, human microtubule depolymerase KIF2A is dynamically localized to spindle poles, regulating the degradation of microtubule during mitotic progression. 

## The *NOT* modifier

*NOT* is used when a GO term is expected to apply to a gene product, but an experiment, sequence analysis, etc. proves otherwise. *NOT* makes an explicit statement that a gene product has been experimentally demonstrated not to be able to carry out a particular activity or it has been shown to have lost that function (e.g. sequence analysis showing a loss of an active site or rapid divergence after a duplication event) over the course of evolution. 
The *NOT* modifier is not to be used for negative or inconclusive experimental results.

Contrary to positive annotations, *NOT* statements propagate down the ontology, such that the annotation `gene product` `NOT|enables` `protein kinase activity` means that the gene product does not enable protein serine/threonine kinase activity or protein tyrosine kinase activity either. Full guidelines for *NOT* are [on the GO wiki](https://wiki.geneontology.org/Elements_of_an_annotation){:target="blank"}.

## GO annotation files
* [Gene association file (GAF) 2.2](/docs/go-annotation-file-gaf-format-2.2/)
* [Gene Product Association Data (GPAD) 2.0 files](/docs/gene-product-association-data-gpad-format-2.0/) + [Gene Product Information (GPI) 2.0 files](/docs/gene-product-information-gpi-format-2.0/): companion files

* *(Deprecated)* [Gene association file (GAF) 2.1](/docs/go-annotation-file-gaf-format-2.1/)
* *(Deprecated)* [Gene association file (GAF) 2.0](/docs/go-annotation-file-gaf-format-2.0/)
* *(Currently being deprecated)* [Gene Product Association Data (GPAD) 1.1/1.2 files](/docs/gene-product-association-data-gpad-format-1.1/) + [Gene Product Information (GPI) 1.2 files](/docs/gene-product-information-gpi-format/): companion files

## Downloads
* Download [GO annotations by species](/docs/download-go-annotations/)
* Download [GO-CAM models](https://geneontology.org/go-cam){:target="blank"}

## GO as a dynamic source of biological knowledge
GO aims to represent the current state of knowledge in biology, hence it is constantly revised and expanded as biological knowledge accumulates. With the ever-increasing number of published articles, experiments and methods, covering all biology with the latest annotations is always challenging. We therefore invite researchers and computational scientists to [submit requests for missing, erroneous or out-of-date annotations to improve the GO database](/docs/contributing-to-go/).

## Statistics
Overall [GO statistics](https://geneontology.org/stats.html) and [detailed statistics](https://current.geneontology.org/release_stats/index.html) are available. The statistics are also [achived](https://release.geneontology.org/).
