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

There are two types of GO annotations: **[standard GO annotations](#standard-go-annotations)** and **[GO-CAM Models](#go-causal-activity-models)**. This page contains a summary of the main features of each, as well as how to interpret a negated annotation, how to submit corrections, how to access GO statistics, and how to download each type of annotation.

### Page contents 
+ [Standard GO annotations](#standard-go-annotations)
  + [Standard GO annotation principles](#standard-go-annotation-principles)
  + [Gene product to term relations](#gene-product-to-go-term-relations)
  + [The *NOT* modifier](#the-not-modifier)
+ [GO-CAMs](#go-causal-activity-models)
  + [GO-CAM data model](#go-cam-data-model)
  + [Browsing and visualizing GO-CAMs](#browsing-and-visualizing-go-cams)
+ [Annotation Quality Control](#annotation-quality-control)
+ [GO as a dynamic source of biological knowledge](#go-as-a-dynamic-source-of-biological-knowledge)
+ [GO annotation statistics](#go-annotation-statistics)
+ [Access GO annotation data](#access-go-annotation-data)
    
---
## Standard GO annotations
A standard GO annotation is a statement that links a gene product and a GO term via a relation from the [Relations Ontology (RO)](https://www.ebi.ac.uk/ols4/ontologies/ro){:target="_blank"}. In standard GO annotations, each statement is independent; this is a key difference between standard annotations and [GO-CAMs](#go-causal-activity-models). 
+ GO annotations describe gene products using one of three aspects (categories):
  + **Molecular Function**: the *normal* molecular activity of a gene product; mutants and roles in disease are outside the scope for GO
  + **Biological Process**: the pathways and larger processes to which the gene product's activity contributes
  + **Cellular Component**: where the gene product is located when it performs its activity
+ A standard GO annotation minimally contains:
  + a gene product: may be a protein, an miRNA, a tRNA, etc.
  + a [GO term](/docs/ontology-documentation/)
  + a reference: preferentially a PMID, but DOIs and [GO Reference (GO_REF)](/gorefs.html) can also be valid
  + an evidence code, using [a GO Evidence Code](/docs/guide-go-evidence-codes/), which describes the type of evidence supporting the gene product↔GO term association: experimental evidence, sequence similarity, phylogenetic analysis, etc. The evidence code also indicates whether the evidence was reviewed by an expert biocurator; if not manually reviewed, the annotation is described as 'automated'.
+ Any number of annotations can be made to a gene, in order to fully describe its function and the location(s) where it acts.
+ **Annotation extensions** are used to provide additional biological context to a GO term, using a relation from the [Relations Ontology (RO)](http://www.obofoundry.org/ontology/ro.html){:target="_blank"} and a term from GO or an external ontology, e.g. [UBERON](http://uberon.github.io/){:target="_blank"}. Further description of annotation extensions can be found in [Huntley & Lovering 2017](https://www.ncbi.nlm.nih.gov/pubmed/27812947){:target="_blank"} and [Huntley *et al.* 2014](https://www.ncbi.nlm.nih.gov/pubmed/24885854){:target="_blank"}.

### Standard GO annotation principles
+ Transitivity principle:
  + Positive annotations propagate up to parent terms via *is a* and *part of* relationships (also known as superclasses). For example, if a protein "enables protein kinase activity," it also "enables enzyme activity".
  + Negative, or [*NOT* annotations](#The-*NOT*-modifier) propagate down to more specific child terms.
+ Living document: GO annotations reflect current biological understanding and are updated as knowledge advances.
+ Open-world assumption: Missing annotations do not imply the gene product lacks any given molecular function, biological process involvement, or cellular component localization. Even if a gene product is completely unannotated, it doesn't mean its role is unknown - the information may simply not be captured yet. When an extensive literature search finds no evidence for a particular aspect, genes receive root term annotations (*molecular_function*, *biological_process*, or *cellular_component*) with evidence code [ND](https://wiki.geneontology.org/index.php/No_biological_Data_available_(ND)_evidence_code) for that specific aspect.

### Gene product to GO term relations
+ Gene product to GO term ('gp2term') relations explicitly link gene products to GO terms in standard annotations via a relation from the [Relations Ontology (RO)](https://www.ebi.ac.uk/ols4/ontologies/ro){:target="_blank"}. 
+ Any of the relations can be associated with the modifier *NOT*. For the full list of permitted gp2term relations, see the [GO wiki](https://wiki.geneontology.org/Annotation_Relations#Standard_Annotation_Relations){:target="_blank"}. The most common relations are:
#### Relations between a gene product and a Molecular Function: 
 + *enables* links a gene product to a Molecular Function it executes. 
 + *contributes to* links a gene product to a Molecular Function executed by a macromolecular complex, in which the Molecular Function cannot be ascribed to an individual subunit of that complex. Only the complex subunits required for the Molecular Function are annotated to the Molecular Function term with 'contributes to'.  
#### Relations between a gene product and a Biological Process: 
  + *involved in* links a gene product and a Biological Process in which the gene product's Molecular Function plays an integral role.
  + *acts upstream of or within* links a gene product and a Biological Process when the mechanism relating the gene product's activity to the Biological Process is not known.
#### Relations between a gene product and a Cellular Component: 
  + *is active in* links a gene product to the cellular location in which it enables its Molecular Function.
  + *located in* links a gene product and the Cellular Component, specifically a cellular anatomical entity or virion component, in which a gene product has been detected. 
  + *part of* links a gene product and a protein-containing complex.

| **GO Aspect** | **Default relation** | **Default relation for root annotations** | **Other allowed relations** |
|----------|---------|-------------|------------|
| **Molecular Function** | [enables](https://wiki.geneontology.org/Enables) | [enables](https://wiki.geneontology.org/Enables) | [contributes_to](https://wiki.geneontology.org/Contributes_to) |
| **Biological Process** | [acts_upstream_of_or_within](https://wiki.geneontology.org/Acts_upstream_of_or_within)  |  [involved_in](https://wiki.geneontology.org/Involved_in) |[acts_upstream_of](https://wiki.geneontology.org/Acts_upstream_of), [acts_upstream_of_positive_effect](https://wiki.geneontology.org/Acts_upstream_of,_positive_effect), [acts_upstream_of_negative_effect](https://wiki.geneontology.org/Acts_upstream_of,_negative_effect), [acts_upstream_of_or_within_negative_effect](https://wiki.geneontology.org/Acts_upstream_of_or_within,_negative_effect), [acts_upstream_of_or_within_positive_effect](https://wiki.geneontology.org/Acts_upstream_of_or_within,_positive_effect) |
| **Cellular Component**: [cellular anatomical entity](http://amigo.geneontology.org/amigo/term/GO:0110165) and [virion component](http://amigo.geneontology.org/amigo/term/GO:0044423#display-lineage-tab) & child terms | [located_in](http://purl.obolibrary.org/obo/RO_0001025) | [is_active_in](https://wiki.geneontology.org/Is_active_in) | [colocalizes_with](https://wiki.geneontology.org/Colocalizes_with)
| **Cellular Component**: [protein-containing complex](http://amigo.geneontology.org/amigo/term/GO:0032991) & child terms  | [part_of](https://wiki.geneontology.org/Part_of_relation)  |   [part_of](https://wiki.geneontology.org/Part_of_relation)  |


### The *NOT* modifier

The *NOT* statement indicates that the gene product *does NOT* enable a Molecular Function, is *not part of* a Biological Process or is *not located in* or *active in* a specific Cellular Component. NOT statements are only used when a user might expect that the gene product would have a specific biological property (MF, BP or CC). *NOT* makes an explicit statement that a gene product has been experimentally demonstrated not to be able to carry out a particular activity, or sequence analysis shows loss of an essential active site or rapid divergence after a duplication event over the course of evolution. The *NOT* modifier is not used for negative or inconclusive experimental results.

Both positive and NOT statements can be used between a single gene product and a GO term when there are unresolved conflicting experimental findings in the literature. If an isoform has a different function from the main isoform represented by the gene-centric entity, a NOT annotation can be captured together with the isoform identifier.

Contrary to positive annotations that propagate up the ontology, *NOT* statements propagate *down* the ontology to more specific terms. Therefore, the annotation 
>`gene product X` *NOT* *enables* `protein kinase activity`

means that the gene product X has been shown not to have *protein kinase activity* — nor does gene product X enable more specific functions, such as *protein serine/threonine kinase activity* or *protein tyrosine kinase activity*. 

---
## GO-Causal Activity Models

[<img align="center" src="/assets/gomodel62f58d8800007064flat.png" alt="Activation of GSDME--mediated pyroptosis by NLRP1 in absence of GSDMD" div style="border: 2px solid black;"/>](https://amigo.geneontology.org/amigo/model/62f58d8800007064){:target="_blank"}
<br>
GO-Causal Activity Models (GO-CAMs) provide a system to extend GO annotations with **biological context** as well as **causal connections** between activities.
+ The network representation of GO-CAMs enables pathway visualization and analysis. 
+ The biological context captured for each GO aspect corresponds to: 
  + **Molecular Function**: substrates ("input"), products ("output"), activators, inhibitors
  + **Biological Process**: the broader process that the molecular function helps accomplish: cell cycle transition, transcription, signaling pathways, etc. Processes can be nested, i.e., a biological process can be part of another biological process. For example, a signaling pathway can be part of a developmental process, like the [Wnt signaling pathway](https://amigo.geneontology.org/amigo/term/GO:0016055){:target="_blank"} is part of [dorsal/ventral pattern formation](https://amigo.geneontology.org/amigo/term/GO:0009953){:target="_blank"}. 
  + **Cellular Component**: the cellular component, cell, and/or tissue the function/process take place.
+ Explore this GO-CAM: [Activation of GSDME--mediated pyroptosis by NLRP1 in absence of GSDMD (Human)](https://amigo.geneontology.org/amigo/model/62f58d8800007064){:target="_blank"}

### GO-CAM data model
The primary unit of biological modeling in GO-CAM is the **Activity Unit**, which consists of a molecular activity represented by a molecular function, the gene product that enables it, plus the context under which it occurs. This context includes the specific cellular component in which the molecular function takes place, the larger biological process (biological program) in which that activity occurs, which in turn, can be nested inside an even larger biological process, and other biological context such as cell types and life cycle stages.

Activity Units are connected to each other by **causal relations**, made using clearly defined semantic relations from the [Relations Ontology](https://obofoundry.org/ontology/ro.html){:target="_blank"}. A more complete description of GO-CAM can be found in [Thomas et al. 2019](https://www.ncbi.nlm.nih.gov/pubmed/31548717){:target="_blank"}.

### Browsing and visualizing GO-CAMs
+ GO-CAMs can be browsed and visualized at [http://geneontology.org/go-cam](https://geneontology.org/go-cam){:target="_blank"}.
+ GO-CAMs are also available through NDEx. The [NDEx Project](https://www.ndexbio.org/index.html#/){:target="_blank"} allows researchers to retrieve a variety of pathways and interaction networks from a gene list.
  + Explore the [Vitamin K Metabolic Process pathway (featured below)](https://www.ndexbio.org/viewer/networks/8a861c71-0c2a-11f0-9806-005056ae3c32){:target="_blank"} and nearly 1000 other GO-CAMs, including over 660 networks in the Human network set: [GO-CAMs in NDEx](https://www.ndexbio.org/index.html#/user/9ecb7edd-5f30-11ef-a7fd-005056ae23aa){:target="_blank"} 
[<img align="center" height="300" src="/assets/VitaminKMetabolicProcess1(Mouse).png" alt="Vitamin K Metabolic Process 1 (Mouse)" div style="border: 2px solid black;"/>](https://www.ndexbio.org/viewer/networks/8a861c71-0c2a-11f0-9806-005056ae3c32){:target="_blank"}

---
## Annotation Quality Control
The GOC runs a number of [GO rules](https://github.com/geneontology/go-site/blob/master/metadata/rules/README.md) to ensure data integrity and compliance with GO curation guidelines. For example:
+ All identifiers must be valid.
+ Each annotation must have an evidence code and at least one reference.
+ Annotations to retracted publications are not allowed.

---
## GO as a dynamic source of biological knowledge
GO aims to represent the current state of knowledge in biology, hence it is constantly revised and expanded as biological knowledge accumulates. With the ever-increasing number of published articles, experiments and methods, covering all biology with the latest annotations is always challenging. We therefore invite researchers and computational scientists to [submit requests for missing, erroneous or out-of-date annotations to improve the GO database](/docs/contributing-to-go/).

---
## GO annotation statistics
Overall [GO statistics](https://geneontology.org/stats.html) and [detailed statistics](https://current.geneontology.org/release_stats/index.html) are available. The statistics are also [archived](https://release.geneontology.org/).

---
## Access GO annotation data

**Download annotation files:**
<i class="fa fa-download"></i> **[Human PAN-GO](https://functionome.geneontology.org/download/functionome_release.gaf.gz)** | <i class="fa fa-external-link"></i> **[Common organisms](/docs/download-go-annotations/#1-commonly-studied-organisms)** | <i class="fa fa-external-link"></i> **[Other species](/docs/download-go-annotations/#2-all-other-organisms)**

**File format guide:**
[GAF 2.2](/docs/go-annotation-file-gaf-format-2.2/) (recommended format) | [GPAD 2.0](/docs/gene-product-association-data-gpad-format) + [GPI 2.0](/docs/gene-product-information-gpi-format-2.0/) (companion files for specialized use)

**Older formats:**
<i class="fa fa-external-link"></i> **[GO archives](/docs/go-archives/#Deprecated-Annotation-formats)**
