---
title: Introduction to GO Annotations
permalink: /docs/go-annotations/
---

# GO Annotations

<!-- GO annotations: the model of biology. Annotations are statements describing the functions of specific genes, using concepts in the Gene Ontology. The simplest and most common annotation links one gene to one function, e.g. FZD4 + Wnt signaling pathway. Each statement is based on a specified piece of evidence. -->
A GO annotation is a statement about the function of a particular gene. Each GO annotation consists of an association between a gene and a GO term. Together, these statements comprise a “snapshot” of current biological knowledge. Different pieces of knowledge regarding gene function may be established to different degrees, which is why each GO annotation always refers to the evidence upon which it is based. All GO annotations are ultimately supported by the scientific literature, either directly or indirectly. In GO, the supporting evidence is presented in the form of a [GO evidence codes](/docs/guide-go-evidence-codes/) and either a published reference or description of the methodology used to create the annotation. The GO evidence codes describe the type of evidence and reflect how far removed the annotated assertion is from direct experimental evidence, and whether this evidence was reviewed by an expert biocurator.


**Annotation extensions**. Annotation extensions provide additional information about a GO annotation that cannot be captured in a single GO term. Please see publications describing annotation extensions: <a href="https://www.ncbi.nlm.nih.gov/pubmed/27812947">Huntley & Lovering 2017</a> and <a href="https://www.ncbi.nlm.nih.gov/pubmed/24885854">Huntley et al 2014</a>.

## Annotation quality control
The GO Consortium implements a number of automated queries to check the quality of the annotations submitted to the GO database.
