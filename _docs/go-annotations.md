---
title: Introduction to GO Annotations
permalink: /docs/go-annotations/
---

# GO Annotations

<!-- GO annotations: the model of biology. Annotations are statements describing the functions of specific genes, using concepts in the Gene Ontology. The simplest and most common annotation links one gene to one function, e.g. FZD4 + Wnt signaling pathway. Each statement is based on a specified piece of evidence. -->

A GO annotation is a statement about the function of a particular gene. GO annotations are created by associating a gene or gene product with a GO term. Together, these statements comprise a “snapshot” of current biological knowledge. Hence, GO annotations capture statements  about how a gene functions at the molecular level, where in the cell it functions, what biological processes (pathways, programs) it      helps to carry out. 

Different pieces of knowledge regarding gene function may be established to different degrees, which is why each GO annotation always refers to the evidence upon which it is based. All GO annotations are ultimately supported by the scientific literature, either directly or indirectly. In GO, the supporting evidence is presented in the form of a [GO evidence codes](/docs/guide-go-evidence-codes/) and either a published reference or description of the methodology used to create the annotation. The GO evidence codes describe the type of evidence and reflect how far removed the annotated assertion is from direct experimental evidence, and whether this evidence was reviewed by an expert biocurator.


<!-- if ok to keep, delete from wiki: http://wiki.geneontology.org/index.php/Introduction_to_Annotation-->

## Semantics of a GO annotation
An association with a gene or gene product product and a GO term is a statement that means
+ Molecular Function: the molecular activities of gene products 
+ Cellular Component: where gene products are active
+ Biological Process: pathways and larger processes made up of the activities of molecular multiple gene products
+ **Note that GO annotations intend to capture the normal, in vivo biological role of genes or gene products**. 

<!-- if ok to keep, delete from wiki: http://wiki.geneontology.org/index.php/Introduction_to_Annotation-->
## General Principles of GO Annotations
+  A gene product can be annotated to zero or more terms from each ontology.
+  Gene products are annotated to the most detailed (i.e. granular) level in the ontology that is supported by the experimental evidence in the cited reference.
+  By the transitivity principle, an annotation to a GO term implies annotation to all its parents.
+  GO annotations are meant to reflect the most up-to-date view of a gene product's role in biology.  
+  Because biological knowledge changes, annotations for a given gene product may change to reflect changes in knowledge and/or changes in the ontology.

## Annotation qualifiers

### The *NOT* qualifier

*NOT* is used to make an explicit note that the gene product is not associated with the GO term. This is particularly important in cases where associating a GO term with a gene product should be avoided (but might otherwise be made, especially by an automated method). For example, if a protein has sequence similarity to an enzyme (whose activity is GO:nnnnnnn), but has been shown experimentally **not** to have the enzymatic activity, it can be annotated as *NOT* GO:nnnnnnn. *NOT* can also be used when a cited reference explicitly says (e.g. "our favorite protein is not found in the nucleus"). Qualifying an annotation with the qualifier *NOT* allows annotators to state that a particular gene product is **not** associated with a particular GO term. This usage of *NOT* was introduced to allow curators to document conflicting claims in the literature. Note that *NOT* is used when a GO term might otherwise be expected to apply to a gene product, but an experiment, sequence analysis, etc. proves otherwise. (It is not generally used for negative or inconclusive experimental results.) 

### The *contributes to* qualifier

*Contributes to* appears in a GO annotation when a function of a protein complex is facilitated, but not directly carried out by one of its subunits on its own. Annotating individual gene products according to attributes of a complex is especially useful for molecular function annotations in cases where a complex has an activity, but not all of the individual subunits do. (For example, there may be a known catalytic subunit and one or more additional subunits, or the activity may only be present when the complex is assembled.) Molecular function annotations of individual subunits working as complexes in which no individual subunit has the activity must include *contributes to* in the annotation. The *contributes to* qualifier should not be used in biological process annotations. All gene products annotated using *contributes to* must also be annotated to a cellular component term representing the complex that possesses the activity. Note that *contributes to* is not needed to annotate a catalytic subunit. Furthermore, contributes_to may be used for any non-catalytic subunit, whether the subunit is essential for the activity of the complex or not. 

### The *colocalizes with* qualifier

*Colocalizes with* appears in a GO annotation to indicate a transient or peripheral association of the protein with an organelle or complex. This qualifier may also be used in cases where the resolution of an assay is not accurate enough to say that the gene product is a bona fide component member. Example (from *Schizosaccharomyces pombe*): Clp1p relocalizes from the nucleolus to the spindle and site of cell division; i.e. it is associated transiently with the spindle pole body and the contractile ring (evidence from GFP fusion). Clp1p is annotated to [GO:0005816:spindle pole body](http://amigo.geneontology.org/amigo/term/GO:0005816) and [GO:0005826:contractile ring](http://amigo.geneontology.org/amigo/term/GO:0005826), using the *colocalizes with* qualifier in both cases. 

<!-- ????-->
## Annotation extensions
Annotation extensions provide additional information about a GO annotation that cannot be captured in a single GO term. Please see publications describing annotation extensions: <a href="https://www.ncbi.nlm.nih.gov/pubmed/27812947">Huntley & Lovering 2017</a> and <a href="https://www.ncbi.nlm.nih.gov/pubmed/24885854">Huntley et al 2014</a>.

<!-- ????-->
## Annotation quality control
The GO Consortium implements a number of automated queries to check the quality of the annotations submitted to the GO database.
