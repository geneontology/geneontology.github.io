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

There are two types of GO annotations: **[standard GO annotations](#standard-go-annotations)** and **[GO-CAM Models](#go-causal-activity-models)**. This page contains a summary of the main features of each, as well as how to intrepret a negated annotation, how to submit corrections, how to access GO statistics, and how to download each type of annotation.

### Page contents 
+ [Standard GO annotations](#standard-go-annotations)
  + [Semantics of a standard GO annotation](#semantics-of-a-standard-go-annotation)
  + [Gene product to term relations](#gene-product-to-go-term-relations)
  + [The *NOT* modifier](#the-not-modifier)
+ [GO-CAMs](#go-causal-activity-models)
  + [GO-CAM data model](#go-cam-data-model)
  + [Browsing and visualizing GO-CAMs](#browsing-and-visualizing-go-cams)
+ [Annotation Quality Control](#annotation-quality-control)
+ [GO as a dynamic source of biological knowledge](#go-as-a-dynamic-source-of-biological-knowledge)
+ [GO annotation statistics](#go-annotation-statistics)
+ [Access GO annotation data](#access-go-annotation-data)
  + [Download GO annotation files](#downloading-go-annotation-files)
  + [GO annotation file formats](#go-annotation-file-formats)
    
---
## Standard GO annotations
A standard GO annotation is a statement that links a gene product and a GO term via a relation from the [Relations Ontology (RO)](https://www.ebi.ac.uk/ols4/ontologies/ro){:target="blank"}. In standard GO annotations, each statement is independent; this is a key difference between standard annotations and [GO-CAMs](#go-causal-activity-models). 
+ A standard GO annotation minimally contains:
  + a gene product: may be a protein, an miRNA, a tRNA, etc.
  + a [GO term](/docs/ontology-documentation/)
  + a reference, usually a PMID, but DOIs and [GO Reference (GO_REF)](/gorefs.html) are also use 
  + an evidence code, using [a GO Evidence Code](/docs/guide-go-evidence-codes/), which describes the type of evidence: experimental evidence, sequence similarity or phylogenetic relation, as well as whether the evidence was reviewed by an expert biocurator. If not manually reviewed, the annotation is described as 'automated'.
+ Any number of annotations can be made to a gene, in order to fully describe its function and the location(s) in which it acts.
+ **Annotation extensions** are used to provide additional biological context to a GO term, using a relation from the [Relations Ontology (RO)](http://www.obofoundry.org/ontology/ro.html){:target="blank"} and a term from GO or an external ontology, e.g. [UBERON](http://uberon.github.io/){:target="blank"}. Further description of annotation extensions can be found in tha paper of [Huntley & Lovering 2017](https://www.ncbi.nlm.nih.gov/pubmed/27812947){:target="blank"} and [Huntley *et al.* 2014](https://www.ncbi.nlm.nih.gov/pubmed/24885854){:target="blank"}.

### Semantics of a standard GO annotation
+ Associations of gene products to GO terms are statements that describe:
  + **Molecular Function**: the *normal* molecular activity of a gene product; mutants and roles in disease are outside the scope for GO
  + **Biological Process**: the pathways and larger processes to which the gene product's activity contributes
  + **Cellular Component**: where the gene product is located when the activity occurs
+ By the transitivity principle, a positive annotation to a GO term implies annotation to all its *is a* and *part of* parents (also known as superclasses). Details about the ontology structure can be found on the [Gene Ontology overview page](/docs/ontology-documentation/). Not that [a *NOT* qualifier](#The-*NOT*-modifier) changes the direction of propogation.
+ GO annotations are meant to reflect the most up-to-date understanding of a gene product's role. As biological knowledge advances, annotations for a particular gene product may be updated to align with new insights or adjustments in the ontology. 
+ GO adopts an open-world model, meaning that the absence of an annotation for a specific class does not imply that the gene product lacks that function, is not localized to that cellular component, or is uninvolved in that biological process. Moreover, if a gene product is unannotated, it does not mean that its role is unknown. Genes for which no role has been demonstrated are annotated to the root term (*molecular_function, biological_process, cellular_component*) with the evidence code ND ([No Biological Data available](https://wiki.geneontology.org/index.php/No_biological_Data_available_(ND)_evidence_code)).
#### Gene product to GO term relations
+ Gene product to GO term ('gp2term') relations explicitly link gene products to GO terms in standard annotations via a relation from the [Relations Ontology (RO)](https://www.ebi.ac.uk/ols4/ontologies/ro){:target="blank"}. 
+ Any of the relations can be associated with the modifer *NOT*. For the full list of permitted gp2term relations, see the [GO wiki](https://wiki.geneontology.org/Annotation_Relations#Standard_Annotation_Relations){:target="blank"}. The most common relations are:
##### Relations between a gene product and a Molecular Function: 
 + *enables* links a gene product to a Molecular Function it executes. 
 + *contributes to* links a gene product to a Molecular Function executed by a macromolecular complex, in which the Molecular Function cannot be ascribed to an individual subunit of that complex. Only the complex subunits required for the Molecular Function are annotated to the Molecular Function term with 'contributes to'.  
##### Relations between a gene product and a Biological Process: 
  + *involved in* links a gene product and a Biological Process in which the gene product's Molecular Function plays an integral role.
  + *acts upstream of or within* links a gene product and a Biological Process when the mechanism relating the gene product's activity to the Biological Process is not known.
##### Relations between a gene product and a Cellular Component: 
  + *is active in* links a gene product to the cellular location in which it enables its Molecular Function.
  + *located in* links a gene product and the Cellular Component, specifically a cellular anatomical anatomy or virion component, in which a gene product has been detected. 
  + *part of* links a gene product and a protein-containing complex. 

#### The *NOT* modifier

The *NOT* statement indicates that the gene product *does NOT* enable a Molecular Function, is *not part of* a Biological Process or is *not located in* or *active in* a specific Cellular Component. NOT statements are only used when a user might expect that the gene product would have a specific biological property (MF, BP or CC). *NOT* makes an explicit statement that a gene product has been experimentally demonstrated not to be able to carry out a particular activity, or sequence analysis shows loss of an essential active site or rapid divergence after a duplication event over the course of evolution. The *NOT* modifier is not used for negative or inconclusive experimental results.

Both positive and NOT statements can be used between a single gene product and a GO term when there is unresolved conflicting experimental findings in the literature. If an isoform has a different function from the main isoform represented by the gene-centric entity, a NOT annotation can be captured together with the isoform identifier.

Contrary to positive annotations that propogate up the ontology, *NOT* statements propagate *down* the ontology to more specific terms. Therefore, the annotation 
>`gene product X` *NOT* *enables* `protein kinase activity`

means that the gene product X has been shown not to have *protein kinase activity* — nor does gene product X enable more specific functions, such as *protein serine/threonine kinase activity* or *protein tyrosine kinase activity*. 

---
## GO-Causal Activity Models

[<img align="center" src="/assets/gomodel62f58d8800007064flat.png" alt="Activation of GSDME--mediated pyroptosis by NLRP1 in absence of GSDMD" div style="border: 2px solid black;"/>](https://amigo.geneontology.org/amigo/model/62f58d8800007064){:target="blank"}
<br>
GO-Causal Activity Models (GO-CAMs) provide a system to extend GO annotations with **biological context** as well as **causal connections** between activities.
+ The network representation of GO-CAMs enables pathway visualization and analysis. 
+ The biological context captured for each GO aspect corresponds to: 
  + **Molecular Function**: substrates ("input"), products ("output"), activators, inhibitors
  + **Biological Process**: the broader process that the molecular function helps accomplish: cell cycle transition, transcription, signaling pathways, etc. Processes can be nested, i. e., a biological process can be part of another biological process. For example, a signaling pathway can be part of a developmental process, like the [Wnt signaling pathway](https://amigo.geneontology.org/amigo/term/GO:0016055){:target="blank"} is part of [dorsal/ventral pattern formation](https://amigo.geneontology.org/amigo/term/GO:0009953){:target="blank"}. 
  + **Cellular Component**: the cellular component, cell, and/or tissue the function/process take place.
+ Explore this GO-CAM: [Activation of GSDME--mediated pyroptosis by NLRP1 in absence of GSDMD (Human)](https://amigo.geneontology.org/amigo/model/62f58d8800007064){:target="blank"}

### GO-CAM data model
The primary unit of biological modeling in GO-CAM is the **Activity Unit**, which consists of a molecular activity represented by a molecular function, the gene product that enables it, plus the context under which it occurs. This context includes the specific cellular component in which the molecular function takes place, in which larger biological process (biological program) that activity occurs, which in turn, can be nested inside an even larger biological process, and other biological context such as cell types and life cycle stages.

Activity Units are connected to each other by **causal relations**, made using clearly defined semantic relations from the [Relations Ontology](https://obofoundry.org/ontology/ro.html){:target="blank"}. A more complete dscription of GO-CAM can be found in [Thomas & al 2019](https://www.ncbi.nlm.nih.gov/pubmed/31548717){:target="blank"}.

### Browsing and visualizing GO-CAMs
+ GO-CAMs can be browsed and visualized at [http://geneontology.org/go-cam](https://geneontology.org/go-cam){:target="blank"}.
+ GO-CAMs are also available through NDEx. The [NDEx Project](https://www.ndexbio.org/index.html#/){:target="blank"} allows researchers to retrieve a variety of pathways and interaction networks from a gene list.
  + Explore the [Vitamin K Metabolic Process pathway (featured below)](https://www.ndexbio.org/viewer/networks/8a861c71-0c2a-11f0-9806-005056ae3c32){:target="blank"} and nearly 1000 other GO-CAMs, including over 660 networks in the Human network set: [GO-CAMs in NDEx](https://www.ndexbio.org/index.html#/user/9ecb7edd-5f30-11ef-a7fd-005056ae23aa){:target="blank"} 
[<img align="center" height="300" src="/assets/VitaminKMetabolicProcess1(Mouse).png" alt="Vitamin K Metabolic Process 1 (Mouse)" div style="border: 2px solid black;"/>](https://www.ndexbio.org/viewer/networks/8a861c71-0c2a-11f0-9806-005056ae3c32){:target="blank"}

---
## Annotation Quality Control
The GOC runs a number of [GO rules](https://github.com/geneontology/go-site/blob/master/metadata/rules/README.md) to ensure data integrity and compliance with GO curation guidelines. For example:
+ all identifiers must be valid
+ each annotation must have an evidence and at least one reference
+ annotations to retracted publications are not allowed

---
## GO as a dynamic source of biological knowledge
GO aims to represent the current state of knowledge in biology, hence it is constantly revised and expanded as biological knowledge accumulates. With the ever-increasing number of published articles, experiments and methods, covering all biology with the latest annotations is always challenging. We therefore invite researchers and computational scientists to [submit requests for missing, erroneous or out-of-date annotations to improve the GO database](/docs/contributing-to-go/).

---
## GO annotation statistics
Overall [GO statistics](https://geneontology.org/stats.html) and [detailed statistics](https://current.geneontology.org/release_stats/index.html) are available. The statistics are also [achived](https://release.geneontology.org/).

---
## Access GO annotation data
### Downloading GO annotation files
* Instructions on how to download [GO annotations for commonly studied organisms](/docs/download-go-annotations/#1-commonly-studied-organisms) 
* How to download GAFs for [other species without official species-specific GO files](docs/download-go-annotations/#2-all-other-organisms)

<i class="fa-solid fa-lightbulb-o"></i> Looking for human data? The [PAN-GO human gene functionome GAF is available](https://functionome.geneontology.org/download/functionome_release.gaf.gz). More information about the PAN-GO Functionome [is available here](https://functionome.geneontology.org/about).

<!--* Download [GO-CAM models](https://geneontology.org/go-cam){:target="blank"} /-->

### GO annotation file formats

Current guidelines for each file format can be found at:
* [Gene Association File (GAF) 2.2](/docs/go-annotation-file-gaf-format-2.2/)
* [Gene Product Association Data (GPAD) 2.0 files](/docs/gene-product-association-data-gpad-format) + [Gene Product Information (GPI) 2.0 files](/docs/gene-product-information-gpi-format-2.0/): companion files

#### Deprecated formats

For older file formats, see [GO archives](/docs/go-archives.md#Deprecated-Annotation-formats).
