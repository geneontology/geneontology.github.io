---
title: GO-CAM overview
permalink: /docs/gocam-overview/
---

# Introduction to GO-CAMs - GO Causal Activity Models

## What is a GO-CAM model ?

GO-CAMs represent how the activities of different gene products work together in a pathway or “biological program.”  A GO-CAM model is a combination of [standard GO annotations](https://geneontology.org/docs/go-annotations/#standard-go-annotations) linked together by causal relations (from the [Relations Ontology](https://obofoundry.org/ontology/ro.html){:target="blank"}), to produce a network of annotations ("model"), that is a more complete model of biological function than the separate annotations. A detailed explanation of GO-CAM models has been published in *Nat Genet. Sep 2019. [Gene Ontology Causal Activity Modeling (GO-CAM) moves beyond GO annotations to structured descriptions of biological functions and systems](https://www.nature.com/articles/s41588-019-0500-1){:target="blank"}*

## Incomplete GO-CAMs

The knowledge of biology is constantly evolving, therefore many models are incomplete and details may be added as more information becomes available.

## Converting GO-CAMs to standard GO annotations

GO-CAMs can be “decomposed” into the standard GO annotations (connecting a gene product to a single GO term) that they are constructed from. This is accomplished in two ways. The first way is to simply take the GO terms that are connected to a gene product via a defined chain of relations. Specifically, for molecular function annotations, the decomposition starts with the MF (the activity, which is central), and follows the enabled_by edge to the gene product (or complex). For cellular component, it starts with the MF and then traces through enabled_by to get the gene product, and from MF through occurs_in to get the cellular component; biological process is similar except that it traces from MF through part_of to get the biological process (and more than one part_of if the process is nested inside a larger process). The second way is to apply logical reasoning to infer additional GO terms that are not explicitly in the model, but can be inferred from logical definitions (“equivalence axioms”) in the ontology. For instance, if a protein binding activity is enabled by a gene product, and that activity has a directly_regulates relationship to a protein kinase activity, the reasoner can infer that the protein binding activity also meets the definition of the GO term protein kinase activator activity, and that standard annotation will also be made.

## Software

The [gocam-py](https://github.com/geneontology/gocam-py){:target="blank"} Python package defines the GO-CAM data model in [LinkML](https://linkml.io/){:target="blank"} and is the reference implementation of the GO-CAM standard. It provides the classes used to read, validate, and work with GO-CAM models in Python, and defines the user-friendly GO-CAM JSON format. Schema documentation is available at [https://geneontology.github.io/gocam-py/](https://geneontology.github.io/gocam-py/){:target="blank"}.

See [Programmatic Access to Gene Ontology](/docs/tools-guide/#access-go-cam-models) for the GO-CAM API routes, and [Download GO-CAMs](/docs/download-go-cams/) for release downloads.

## Browsing GO-CAMs

The [GO-CAM Browser](https://go-cam-browser.geneontology.org/){:target="blank"} provides a faceted search interface to explore GO-CAM models. It displays GO-CAMs from the latest GO release. There are facets to filter by organism, gene product, GO terms, and more. A free-text search box allows finding GO-CAMs by title or gene product. As filters are applied, the URL updates, enabling users to share links to specific subsets of GO-CAMs. For example, this link shows GO-CAMs involving human gene products: [https://go-cam-browser.geneontology.org/?filter=organism:Homo+sapiens](https://go-cam-browser.geneontology.org/?filter=organism:Homo+sapiens).
