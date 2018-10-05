---
title: Ontology
permalink: /docs/ontology/
---

# About the Gene Ontology: structure and terms

## What is an ontology?

An ontology is a formal representation of a body of knowledge, within a given domain. Ontologies usually consist of a set of classes or terms with relations that operate between them. The domains that GO represents are biological processes, functions and cellular components.

## What is the Gene Ontology?

The Gene Ontology defines the universe of concepts relating to gene functions (‘GO terms’), and how these functions are related to each other (‘relations’). It is constantly revised and expanded as biological knowledge accumulates. The GO describes function with respect to three aspects:
* **Molecular Function**: molecular-level activities performed by gene products
* **Cellular Component**: the locations relative to cellular structures in which a gene product performs a function
* **Biological Process**: the larger processes, or ‘biological programs’ accomplished by multiple molecular activities

The GO ontology is structured as a directed acyclic graph where each term has defined relationships to one or more other terms in the same domain, and sometimes to other domains. The GO vocabulary is designed to be species-agnostic, and includes terms applicable to prokaryotes and eukaryotes, and single and multicellular organisms.

In an example of GO annotation, the gene product "cytochrome c" can be described by the **Molecular Function** term "oxidoreductase activity", the **Biological Process** term "oxidative phosphorylation", and the **Cellular Component** terms "mitochondrial matrix" and "mitochondrial inner membrane".

## Maintenance of the Gene Ontology

Ongoing revisions to the ontology are managed by a team of senior ontology editors with extensive experience in both biology and computational knowledge representation. Ontology updates are made collaboratively between the GOC ontology team and scientists who request the updates. Most requests come from scientists making GO annotations (these typically impact only a few terms each), and from domain experts in particular areas of biology (these typically revise an entire ‘branch’ of the ontology comprising many terms and relations). We invite researchers and computational scientists to [submit requests for either new terms or new relations](/docs/contributing-to-go-terms/) in the ontology.

## GO as a graph

The structure of GO can be described in terms of a graph, where each GO term is a node, and the relationships between the terms are edges between the nodes. GO is loosely hierarchical, with 'child' terms being more specialized than their 'parent' terms, but unlike a strict hierarchy, a term may have more than one parent term (note that the parent/child model does not hold true for all types of relations, see the relations documentation). For example, the biological process term hexose biosynthetic process has two parents, hexose metabolic process and monosaccharide biosynthetic process. This is because biosynthetic process is a subtype of metabolic process and a hexose is a subtype of monosaccharide.

The following diagram is a screenshot from the ontology editing software OBO-Edit, showing a small set of terms from the ontology.

diag-ontology-graph.gif A set of terms under the biological process node pigmentation.

In the diagram, relations between the terms are represented by the colored arrows; the letter in the box midway along each arrow is the relationship type. Note that the terms get more specialized going down the graph, with the most general terms—the root nodes cellular component, biological process and molecular function—at the top of the graph. Terms may have more than one parent, and they may be connected to parent terms via different relations. The GO relations documentation describes these relations in greater detail.

## One ontology... or three?

As the diagram above suggests, the three GO domains (cellular component, biological process, and molecular function) are each represented by a root ontology term. All terms in a domain can trace their parentage to the root term, although there may be numerous different paths via varying numbers of intermediary terms to the ontology root. The three root nodes are unrelated and do not have a common parent node, and hence GO is three ontologies. Some graph-based software may require a single root node; in these cases, a "fake" term can be added as a parent of the three existing root nodes.

The three GO ontologies are is_a disjoint, meaning that no is_a relations operate between terms from the different ontologies. However, other relationships such as part_of and regulates do operate between the GO ontologies. For example the molecular function term 'cyclin-dependent protein kinase activity' is part_of the biological process 'cell cycle'.

## GO Term structure

### Essential elements

#### Unique identifier and term name 

Every term has a human-readable term name—e.g. mitochondrion, glucose transport, amino acid binding—and a GO ID, a unique zero-padded seven digit identifier prefixed by GO:, e.g. GO:0005125 or GO:0060092. The numerical portion of the ID has no inherent meaning or relation to the position of the term in the ontologies.

#### Aspect

Denotes which of the three sub-ontologies—cellular component, biological process or molecular function—the term belongs to.

#### Definition

A textual description of what the term represents, plus reference(s) to the source of the information. All new terms added to the ontology must have a definition.

#### Relationships to other terms

How the term relates to other terms in the ontology. All terms (other than the root terms representing each aspect, above) have an is a sub-class relationship to another term; for example, GO:0015758 : glucose transport is a GO:0015749 : monosaccharide transport. The Gene Ontology employs a number of other relations; the [relations documentation](/docs/ontology-relations/) has more information on the relations used in the ontology.

### Optional elements

#### Secondary IDs (also known as Alternate ID)

Alternate IDs that refer to a term. Secondary IDs come about when two or more terms are identical in meaning, and are merged into a single term. All terms IDs are preserved so that no information (for example, annotations to the merged IDs) is lost.

#### Synonyms

Alternative words or phrases closely related in meaning to the term name, with indication of the relationship between the name and synonym given by the synonym scope. The scopes for GO synonyms are:
* exact
 * an exact equivalent; interchangeable with the term name 
    e.g. ornithine cycle is an exact synonym of urea cycle 
* broad
 * the synonym is broader than the term name 
    e.g. cell division is a broad synonym of cytokinesis 
* narrow
 * the synonym is narrower or more precise than the term name 
 * e.g. pyrimidine-dimer repair by photolyase is a narrow synonym of photoreactive repair 
* related
 * the terms are related in some way not covered above 
    e.g. cytochrome bc1 complex is a related synonym of ubiquinol-cytochrome-c reductase activity virulence is a related synonym of pathogenesis 

Custom synonym types are also used in the ontology. For example, a number of synonyms are designated as systematic synonyms; synonyms of this type are exact synonyms of the term name.

### Database cross-references

Database cross-references, or dbxrefs, refer to identical or very similar objects in other databases. For instance, the molecular function term retinal isomerase activity is cross-referenced with the Enzyme Commission entry EC:5.2.1.3; the biological process term sulfate assimilation has the cross-reference MetaCyc:PWY-781.

#### Comment

Any extra information about the term and its usage.

#### Subset

Indicates that the term belongs to a designated subset of terms, e.g. one of the GO slims.

#### Obsolete tag

Indicates that the term has been deprecated and should not be used.

### Obsolete Terms

Occasionally, a term is added to GO that is out of scope, misleadingly named or defined, or describes a concept that would be better represented in another way and needs to be removed from the published ontology. In these cases, the term and ID still persist in the ontology, but the term is tagged as obsolete, and all relationships to other terms are removed. A comment is added to the term, detailing the reason for the obsoletion and tags are also added that specify replacement terms. See the OBO file format specification for more information.
