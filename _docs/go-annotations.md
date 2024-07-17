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

<!-- GO annotations: the model of biology. Annotations are statements describing the functions of specific genes, using concepts in the Gene Ontology. The simplest and most common annotation links one gene to one function, e.g. FZD4 + Wnt signaling pathway. Each statement is based on a specified piece of evidence. -->

A GO annotation is a statement about the function of a particular gene. GO annotations are created by associating a gene or gene product with a GO term. Together, these statements comprise a “snapshot” of current biological knowledge. Hence, GO annotations capture statements  about how a gene functions at the molecular level, where in the cell it functions, and what biological processes (pathways, programs) it helps to carry out.

There are four pieces of information that uniquely identify a GO annotation.  Although there are additional components a curator can use to indicate more information, including [qualifiers](/docs/go-annotations/#annotation-qualifiers) and [annotation extensions](/docs/go-annotations/#annotation-extensions), at the very minimum an annotation consists of:
+ Gene product (may be a protein, RNA, etc.)
+ GO term
+ Reference
+ [Evidence](/docs/guide-go-evidence-codes/)

Different pieces of knowledge regarding gene function may be established to different degrees, which is why each GO annotation always refers to the evidence upon which it is based. All GO annotations are ultimately supported by the scientific literature, either directly or indirectly. In GO, the supporting evidence is presented in the form of a [GO Evidence Codes](/docs/guide-go-evidence-codes/) and either a published reference or description of the methodology used to create the annotation. The GO evidence codes describe the type of evidence and reflect how far removed the annotated assertion is from direct experimental evidence, and whether this evidence was reviewed by an expert biocurator.


<!-- if ok to keep, delete from wiki: http://wiki.geneontology.org/index.php/Introduction_to_Annotation-->

## Semantics of a GO annotation
Associations of gene products to GO terms are statements that describe
+ Molecular Function: the molecular activities of individual gene products
+ Cellular Component: where the gene products are active
+ Biological Process: the pathways and larger processes to which that gene product's activity contributes

## General principles of GO annotations
+  Annotations represent the normal functions of gene products.
+  A gene product can be annotated to zero or more terms from each ontology.
+  Each annotation is supported by an [GO Evidence Codes](/docs/guide-go-evidence-codes/) from the [Evidence and Conclusions Ontology](http://www.evidenceontology.org/) and a reference.
+  Gene products are annotated to the most granular term in the ontology that is supported by the available evidence.
+  By the transitivity principle, an annotation to a GO term implies annotation to all its parents.
+  GO annotations are meant to reflect the most up-to-date view of a gene product's role in biology.
+  Because biological knowledge changes, annotations for a given gene product may change to reflect changes in knowledge and/or changes in the ontology.
+  There is an open-world assumption, that is, if a gene product is unannotated then its role is still unknown.

## Annotation relations

A specific set of terms from the Relations Ontology (RO), sometimes referred to as 'gp2term' (gene product to term) relations, are used to link gene products to GO terms in standard annotations. The modifer *NOT*, as well as qualifiers like *enables*, *acts upstream of or within , and *enables* are used in the [GAF format](/docs/go-annotation-file-gaf-format-2.2/). For the full list of permitted gp2term relations, see the [GO wiki](https://wiki.geneontology.org/Annotation_Relations#Standard_Annotation_Relations){:target="blank"}. Some of the most common relations are:

### The *NOT* modifier

*NOT* is used to make an explicit note that a gene product has been experimentally demonstrated not to be able to carry out a particular activity or it has been shown to have had a loss of function (e.g. loss of an active site or rapid divergence after a duplication event) over the course of evolution. *NOT* can be combined with a This is particularly important in cases where associating a GO term with a gene product should be avoided (but might otherwise be made, especially by an automated method). For example, if a protein has sequence similarity to an enzyme (whose activity is GO:nnnnnnn), but has been shown experimentally **not** to have the enzymatic activity, it is annotated as *NOT* GO:nnnnnnn. *NOT* is also used when a cited reference explicitly says (e.g. "our favorite protein is not found in the nucleus"). The *NOT* modifier can also be directly appended to a gp2term with a pipe, e.g. `NOT|enables`.
The qualifier *NOT* allows annotators to state that a particular gene product is **not** associated with a particular GO term. It is used when a GO term might otherwise be expected to apply to a gene product, but an experiment, sequence analysis, etc. proves otherwise. *The *NOT* modifier is not to be used for negative or inconclusive experimental results.*

### *enables*

Links a gene product to a Molecular Function it executes. 

### *acts upstream of or within*

Links a gene product and a Biological Process when the mechanism relating the gene product's activity to the Biological Process is not known.

### *located in*

Links a gene product and the Cellular Component, specifically a cellular anatomical anatomy or virion component, in which a gene product has been detected. 

### *part of*

Links a gene product and a protein-containing complex. 

<!-- ????-->
## Annotation extensions
Annotation extensions provide additional information about a GO annotation that cannot be captured in a single GO term. Please see publications describing annotation extensions: [Huntley & Lovering 2017](https://www.ncbi.nlm.nih.gov/pubmed/27812947){:target="blank"} and [Huntley *et al.* 2014](https://www.ncbi.nlm.nih.gov/pubmed/24885854){:target="blank"}. Annotation extensions are available in both the [GAF File Format](/docs/go-annotation-file-gaf-format-2.2/#annotation-extension-column-16) and the [GPAD File Format](/docs/gene-product-association-data-gpad-format/#annotation-extension).

<!-- ????-->
## Annotation quality control
The GO Consortium implements a number of automated queries to check the quality of the annotations submitted to the GO database.

## GO-Causal Activity Models
GO-Causal Activity Models (GO-CAMs) use a defined “grammar” for linking multiple standard GO annotations into larger models of biological function (such as “pathways”) in a semantically structured manner. Minimally, a GO-CAM model must connect at least two standard GO annotations ([GO-CAM example](http://model.geneontology.org/5323da1800000002){:target="blank"}).

The primary unit of biological modeling in GO-CAM is a molecular activity, e.g. protein kinase activity, of a specific gene product or complex. A molecular activity is an activity carried out at the molecular level by a gene product; this is specified by a term from the GO MF ontology. GO-CAM models are thus connections of GO MF annotations enriched by providing the appropriate context in which that function occurs. All connections in a GO-CAM model, e.g. between a gene product and activity, two activities, or an activity and additional contextual information, are made using clearly defined semantic relations from the [Relations Ontology](https://obofoundry.org/ontology/ro.html){:target="blank"}.

GO-CAMs can be browsed and visualized at [http://geneontology.org/go-cam](https://geneontology.org/go-cam){:target="blank"}

## Types of GO annotation files
* [Gene association file (GAF) 2.2](/docs/go-annotation-file-gaf-format-2.2/)
* [Gene Product Association Data (GPAD) 2.0 files](/docs/gene-product-association-data-gpad-format-2.0/) + [Gene Product Information (GPI) 2.0 files](/docs/gene-product-information-gpi-format-2.0/): companion files

* *(Deprecated)* [Gene association file (GAF) 2.1](/docs/go-annotation-file-gaf-format-2.1/)
* *(Deprecated)* [Gene association file (GAF) 2.0](/docs/go-annotation-file-gaf-format-2.0/)
* *(Currently being deprecated)* [Gene Product Association Data (GPAD) 1.1/1.2 files](/docs/gene-product-association-data-gpad-format-1.1/) + [Gene Product Information (GPI) 1.2 files](/docs/gene-product-information-gpi-format/): companion files

## Downloads
* Download [GO annotations by species](/docs/download-go-annotations/)
* Download [GO-CAM models](https://geneontology.org/go-cam){:target="blank"}

## GO as a dynamic source of biological annotations
GO aims to represent the current state of knowledge in biology, hence it is constantly revised and expanded as biological knowledge accumulates.

With the ever-increasing number of published articles, experiments and methods, covering all biology with the latest annotations is always challenging. We therefore invite researchers and computational scientists to [submit requests for missing, erroneous or out-of-date annotations to improve the GO database](/docs/contributing-to-go/).

## Statistics
[GO statistics](/stats.html) are available both for the current release and over time.
