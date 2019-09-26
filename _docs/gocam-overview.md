---
title: GO-CAM overview
permalink: /docs/gocam-overview/
---

# Introduction to GO-CAMs

## What is a standard GO annotation ?

A standard GO annotation is a gene product associated to a GO term, using an [evidence code](/docs/guide-go-evidence-codes/) and a supporting reference (a primary research article, for example). The GO term may come from any of the three aspects of the GO: [Molecular Function (MF)](http://geneontology.org/page/molecular-function-ontology-guidelines), [Biological Process (BP)](http://www.geneontology.org/page/biological-process-ontology-guidelines), or [Cellular Component (CC)](http://geneontology.org/page/cellular-component-ontology-guidelines). Gene products can correspond to proteins, complexes, or non-coding RNAs, and must be represented by a stable identifier. Gene identifiers may serve as representative of one or more gene products. The following is an illustration of a GO annotation:

<p align="center">
  <img width="500" src="/assets/standard-go-annotation.png" alt="Standard GO Annotation Example">
</p>

## What is a GO-CAM model ?

A GO-CAM model is a combination of standard GO annotations to produce a network of annotations ("model"), that is a more complete model of biological function than the separate annotations. For example, a GO-CAM can represent how the activities of different gene products work together in a pathway or “biological program.” GO-CAM models can connect different pieces of information about the function of a gene product (joining together different annotations for the same gene product), and/or can connect functions of different gene products together by specifying how the activity of one gene product can affect the activity of another gene product. All connections in a GO-CAM model are made using clearly defined semantic relations from the [Relations Ontology](http://www.obofoundry.org/ontology/ro.html){:target="blank"}.

**Gene Ontology Causal Activity Modeling (GO-CAM) moves beyond GO annotations to structured descriptions of biological functions and systems**. Nat Genet. Sep 2019 [ [abstract](https://www.nature.com/articles/s41588-019-0500-1){:target="blank"} | [full text](https://rdcu.be/bRIgY){:target="blank"} ] 

## Relating annotations for the same gene product, from different aspects of GO

One major difference between standard annotations and GO-CAM models is that the former does not have explicit relations between the gene product being annotated and the GO term. In GO-CAM models, using defined, semantic relations allows us to capture how a gene product’s molecular function relates to other aspects of GO. Specifically, in GO-CAM a gene product’s activity occurs_in a specific cellular component, meaning that gene product is active in that cellular component (the meaning of a standard GO cellular component annotation). In GO-CAM a gene product’s activity is executed as part_of a larger biological process (biological program) which is the meaning of a standard GO biological process annotation. In turn, a biological process can be nested inside an even larger biological process.

## Linking different molecular activities

Once the GO-CAM unit has been created (MF + BP + CC), these different units can be linked to each other (via the molecular activity) to represent a Causal Activity Model. Most of the causal relations are directly ([positively](http://www.ontobee.org/ontology/RO?iri=http://purl.obolibrary.org/obo/RO_0002629){:target="blank"} / [negatively](http://www.ontobee.org/ontology/RO?iri=http://purl.obolibrary.org/obo/RO_0002630){:target="blank"}) regulates and [directly provides input for](http://www.ontobee.org/ontology/RO?iri=http://purl.obolibrary.org/obo/RO_0002413){:target="blank"}, but there are other relations of greater and lesser specificity, depending on what is known. *Regulates* denotes the control of a downstream activity. *Provides input for* indicates there is no control, but an upstream function creates a molecular entity that is the target of the downstream function, such as in a metabolic pathway.


## Incomplete GO-CAMs

The knowledge of biology is constantly evolving, therefore many models are incomplete, and details may be added as more information becomes available.

## Noctual Platform to Curate GO-CAMs

To learn more about our curation process, please visit the documentation of the [Noctua Curation Platform](http://wiki.geneontology.org/index.php/Noctua){:target="blank"}.

## Converting GO-CAMs to standard GO annotations

GO-CAMs can be “decomposed” into the standard GO annotations (connecting a gene product to a single GO term) that they are constructed from. This is accomplished in two ways. The first way is to simply take the GO terms that are connected to a gene product via a defined chain of relations. Specifically, for molecular function annotations, the decomposition starts with the MF (the activity, which is central), and follows the enabled_by edge to the gene product (or complex). For cellular component, it starts with the MF and then traces through enabled_by to get the gene product, and from MF through occurs_in to get the cellular component; biological process is similar except that it traces from MF through part_of to get the biological process (and more than one part_of if the process is nested inside a larger process). The second way is to apply logical reasoning to infer additional GO terms that are not explicitly in the model, but can be inferred from logical definitions (“equivalence axioms”) in the ontology. For instance, if a protein binding activity is enabled by a gene product, and that activity has a directly_regulates relationship to a protein kinase activity, the reasoner can infer that the protein binding activity also meets the definition of the GO term protein kinase activator activity, and that standard annotation will also be made.

### Software

Code handling the export of standard GO annotations from a GO-CAM model is provided by the open source [Minerva software](https://github.com/geneontology/minerva/){:target="blank"}, which is the data handling backend for Noctua. This code extracts an initial set of proposed standard GO annotations from a model, and then applies filters ensuring that appropriate metadata, such as an [ECO evidence code](http://www.evidenceontology.org/){:target="blank"}, is obtained for each annotation.

### Converting GO-CAMs to Simple Interaction Format (SIF)

The GO-CAM format allows representation of details that may be of little interest for certain applications. To enable the simple reuse and visualization of GO-CAMs, we provide two SIF exports that can easily be loaded for instance in [Cytoscape](https://cytoscape.org/){:target="blank"}.

#### go-cam-complete-sif

All molecular functions, biological processes and cellular components as well as their relationships are included in this export. This version essentially contains all the biological facts described in the GO-CAM but does not include any meta-data (e.g. describing evidence, xrefs, contributors, etc.).

#### go-cam-activity-sif

This export highlights the causal relationships between molecular functions (activities) and the genes carrying out these functions. In essence, they represent a protein-protein interaction network highlighting the positive and negative regulation relationships between activities.

#### Visualization in Cytoscape

We provide a Cytoscape styling to visualize GO-CAMs: [gocam-styles.xml](https://s3.amazonaws.com/geneontology-public/gocam/gocam-styles.xml). To import this style in Cytoscape: File > Import > Styles from File and select the gocam-styles.xml you downloaded. In the left Control Panel, select the “Style” tab and in the list, select the “GO-CAMs” style. From now on, any GO-CAM imported from a SIF file will be displayed using our recommended styling. To load a GO-CAM SIF export, select in the menu:

> File > Import > Network from File

Example of a GO-CAM rendered by cytoscape using the [gocam-styles.xml](https://s3.amazonaws.com/geneontology-public/gocam/gocam-styles.xml):

<p align="center">
  <img width="800" src="/assets/GO-CAM-SIF-cytoscape-d.png" alt="GO-CAM visualized with Cytoscape">
</p>


#### Software
GitHub repository to create the SIF exports: [https://github.com/geneontology/gocam-sif-pyexport](https://github.com/geneontology/gocam-sif-pyexport){:target="blank"}.

You can use this SIF export program with alternate parameters to create variations of the SIF exports from the Turtle files of GO-CAMs available on [GitHub](https://github.com/geneontology/noctua-models/tree/master/models){:target="blank"}.
