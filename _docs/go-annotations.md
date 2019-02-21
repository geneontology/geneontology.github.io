---
title: Introduction to GO annotations
permalink: /docs/go-annotations/
redirect_from: 
- /page/go-annotations
- /page/annotation
- /page/go-annotation-policies
- /page/go-annotation-standard-operating-procedures
---

# Introduction to GO annotations

<!-- GO annotations: the model of biology. Annotations are statements describing the functions of specific genes, using concepts in the Gene Ontology. The simplest and most common annotation links one gene to one function, e.g. FZD4 + Wnt signaling pathway. Each statement is based on a specified piece of evidence. -->

A GO annotation is a statement about the function of a particular gene. GO annotations are created by associating a gene or gene product with a GO term. Together, these statements comprise a “snapshot” of current biological knowledge. Hence, GO annotations capture statements  about how a gene functions at the molecular level, where in the cell it functions, and what biological processes (pathways, programs) it helps to carry out.

Different pieces of knowledge regarding gene function may be established to different degrees, which is why each GO annotation always refers to the evidence upon which it is based. All GO annotations are ultimately supported by the scientific literature, either directly or indirectly. In GO, the supporting evidence is presented in the form of a [GO evidence codes](/docs/guide-go-evidence-codes/) and either a published reference or description of the methodology used to create the annotation. The GO evidence codes describe the type of evidence and reflect how far removed the annotated assertion is from direct experimental evidence, and whether this evidence was reviewed by an expert biocurator.


<!-- if ok to keep, delete from wiki: http://wiki.geneontology.org/index.php/Introduction_to_Annotation-->

## Semantics of a GO annotation
Associations of gene products to GO terms are statements that describe
+ Molecular Function: the molecular activities of individual gene products
+ Cellular Component: where the gene products are active
+ Biological Process: the pathways and larger processes to which that gene product's activity contributes

**Note that GO annotations intend to capture the normal, in vivo biological role of genes or gene products**.

<!-- if ok to keep, delete from wiki: http://wiki.geneontology.org/index.php/Introduction_to_Annotation-->

## General Principles of GO Annotations
+  A gene product can be annotated to zero or more terms from each ontology.
+  Gene products are annotated to the most detailed (i.e. granular) level in the ontology that is supported by the experimental evidence in the cited reference.
+  By the transitivity principle, an annotation to a GO term implies annotation to all its parents.
+  GO annotations are meant to reflect the most up-to-date view of a gene product's role in biology.  
+  There is an open-world assumption, that is, if a gene product is unannotated then its role is still unknown
+  Because biological knowledge changes, annotations for a given gene product may change to reflect changes in knowledge and/or changes in the ontology.

## Annotation qualifiers

Some annotations are modified by qualifiers, which have specific usage rules and meanings within GO.

### The *NOT* qualifier

*NOT* is used to make an explicit note that a gene product has been experimentally demonstrated not to be able to carry out a particular activity or it has been shown to have had a loss of function (e.g. loss of an active site or rapid divergence after a duplication event) over the course of evolution. This is particularly important in cases where associating a GO term with a gene product should be avoided (but might otherwise be made, especially by an automated method). For example, if a protein has sequence similarity to an enzyme (whose activity is GO:nnnnnnn), but has been shown experimentally **not** to have the enzymatic activity, it is annotated as *NOT* GO:nnnnnnn. *NOT* is also used when a cited reference explicitly says (e.g. "our favorite protein is not found in the nucleus"). Qualifying an annotation with the qualifier *NOT* allows annotators to state that a particular gene product is **not** associated with a particular GO term. It is used when a GO term might otherwise be expected to apply to a gene product, but an experiment, sequence analysis, etc. proves otherwise. (It is not generally used for negative or inconclusive experimental results.)

### The *contributes to* qualifier

*Contributes to* appears in a GO annotation when a function of a protein complex is facilitated, but not directly carried out by one of its subunits on its own. Annotating individual gene products according to attributes of a complex is especially useful for molecular function annotations in cases where a complex has an activity, but not all of the individual subunits do. (For example, there may be a known catalytic subunit and one or more additional subunits, or the activity may only be present when the complex is assembled.) Molecular function annotations of individual subunits working as complexes in which no individual subunit has the activity must include *contributes to* in the annotation. The *contributes to* qualifier should not be used in biological process annotations. All gene products annotated using *contributes to* must also be annotated to a cellular component term representing the complex that possesses the activity. Note that *contributes to* is not needed to annotate a catalytic subunit. Furthermore, *contributes to* may be used for any non-catalytic subunit, whether the subunit is essential for the activity of the complex or not.

### The *colocalizes with* qualifier

*Colocalizes with* appears in a GO annotation to indicate a transient or peripheral association of the protein with an organelle or complex. This qualifier may also be used in cases where the resolution of an assay is not accurate enough to say that the gene product is a bona fide component member. For example, human microtubule depolymerase KIF2A is dynamically localized to spindle poles, regulating the degradation of microtubule during mitotic progression. Therefore [KIF2A](http://www.uniprot.org/uniprot/O00139){:target="blank"} ia annotated to [GO:0000922: spindle pole](http://amigo.geneontology.org/amigo/term/GO:0000922){:target="blank"} using the *colocalizes with* qualifier, based on [PMID:18411309](https://www.ncbi.nlm.nih.gov/pubmed/18411309){:target="blank"}.

<!-- ????-->
## Annotation extensions
Annotation extensions provide additional information about a GO annotation that cannot be captured in a single GO term. Please see publications describing annotation extensions: [Huntley & Lovering 2017](https://www.ncbi.nlm.nih.gov/pubmed/27812947){:target="blank"} and [Huntley *et al.* 2014](https://www.ncbi.nlm.nih.gov/pubmed/24885854){:target="blank"}. Annotation extensions are available in both the [GAF File Format](/docs/go-annotation-file-gaf-format-21/#annotation-extension-column-16) and the [GPAD File Format](/docs/gene-product-association-data-gpad-format/#annotation-extension).

<!-- ????-->
## Annotation quality control
The GO Consortium implements a number of automated queries to check the quality of the annotations submitted to the GO database.

## GO-Causal Activity Models
GO-Causal Activity Models (GO-CAMs) use a defined “grammar” for linking multiple standard GO annotations into larger models of biological function (such as “pathways”) in a semantically structured manner. Minimally, a GO-CAM model must connect at least two standard GO annotations ([GO-CAM example](http://noctua.geneontology.org/editor/graph/gomodel:5323da1800000002){:target="blank"}).

The primary unit of biological modeling in GO-CAM is a molecular activity, e.g. protein kinase activity, of a specific gene product or complex. A molecular activity is an activity carried out at the molecular level by a gene product; this is specified by a term from the GO MF ontology. GO-CAM models are thus connections of GO MF annotations enriched by providing the appropriate context in which that function occurs. All connections in a GO-CAM model, e.g. between a gene product and activity, two activities, or an activity and additional contextual information, are made using clearly defined semantic relations from the [Relations Ontology](http://www.obofoundry.org/ontology/ro.html){:target="blank"}.

GO-CAMs can be browsed and visualized at [http://geneontology.org/go-cam](http://geneontology.org/go-cam){:target="blank"}

## Types of GO annotation files
* [Gene Product Association Data (GPAD) files](/docs/gene-product-association-data-gpad-format/) + [Gene Product Information (GPI) files](/docs/gene-product-information-gpi-format/): these are companion files
* [Gene association file (GAF) 2.0](/docs/go-annotation-file-gaf-format-20/)
* [Gene association file (GAF) 2.1](/docs/go-annotation-file-gaf-format-21/)

## Downloads
* Download [GO annotations by species](/docs/download-go-annotations/)
* Download [GO-CAM models](http://geneontology.org/go-cam){:target="blank"}
