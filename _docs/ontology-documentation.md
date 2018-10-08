---
title: Gene Ontology Overview
permalink: /docs/ontology-documentation/
---

# Gene Ontology Overview
An ontology is a formal representation of a body of knowledg, within a given domain. Ontologies usually consist of a set of classes (or terms or concepts) with [relations](/docs/ontology-relations/) that operate between them. The Gene Ontology (GO) is an ontology describing our knowledge of the biological domain. The GO describes function with respect to three aspects:


|------------------|-------------|
| **Molecular Function** | Molecular-level activities performed by gene products. Molecular function terms describes activities that occur at the molecular level, such as "catalytic activity" or "binding". GO molecular function terms represent activities rather than the entities (molecules or complexes) that perform the actions, and do not specify where, when, or in what context the action takes place. Molecular functions generally correspond to activities that can be performed by individual gene products, but some activities are performed by complexes of gene products. Examples of broad functional terms are *[catalytic activity](http://amigo.geneontology.org/amigo/term/GO:0003824)* and *[transporter activity](http://amigo.geneontology.org/amigo/term/GO:0005215)*; examples of narrower functional terms are *[adenylate cyclase activity](http://amigo.geneontology.org/amigo/term/GO:0004016)* or *[Toll-like receptor binding](http://amigo.geneontology.org/amigo/term/GO:0035325)*. To avoid confusion between gene product names and their molecular functions, GO molecular functions are often appended with the word "activity" (a *protein kinase* would have the GO molecular function *protein kinase activity*).
| **Cellular Component** | The locations relative to cellular structures in which a gene product performs a function, either cellular compartments (e.g., *[mitochondrion](http://amigo.geneontology.org/amigo/term/GO:0005739)*), or  stable macromolecular complexes of which they are parts (e.g., the *[ribosome](http://amigo.geneontology.org/amigo/term/GO:0005840)*). Unlike the other aspects of GO, cellular component concepts refer not to processes but rather a cellular anatomy.
| **Biological Process** | The larger processes, or ‘biological programs’ accomplished by multiple molecular activities. Examples of broad biological process terms are *[DNA repair](http://amigo.geneontology.org/amigo/term/GO:0006281)* or *[signal transduction](http://amigo.geneontology.org/amigo/term/GO:0007165)*. Examples of more specific terms are *[pyrimidine nucleobase biosynthetic process](http://amigo.geneontology.org/amigo/term/GO:0019856)* or *[glucose transmembrane transport](http://amigo.geneontology.org/amigo/term/GO:1904659)*. Note that a biological process is not equivalent to a pathway. At present, the GO does not try to represent the dynamics or dependencies that would be required to fully describe a pathway.

In an example of GO annotation, the gene product "cytochrome c" can be described by the **molecular function** *oxidoreductase activity*, the **biological process** *oxidative phosphorylation*, and the **cellular component** *mitochondrial matrix*.

The GO vocabulary is designed to be species-agnostic, and includes terms applicable to prokaryotes and eukaryotes, as well as single and multicellular organisms.


## GO Term structure

### Essential elements

#### Unique identifier and term name 

Every term has a human-readable term name—e.g. mitochondrion, glucose transport, amino acid binding—and a GO ID, a unique zero-padded seven digit identifier prefixed by GO:, e.g. GO:0005125 or GO:0060092. The numerical portion of the ID has no inherent meaning or relation to the position of the term in the ontologies.

#### Aspect

Denotes which of the three sub-ontologies (cellular component, biological process or molecular function) the term belongs to.

#### Definition

A textual description of what the term represents, plus reference(s) to the source of the information. 

#### Relationships to other terms

How the term relates to other terms in the ontology. All terms (other than the root terms representing each aspect, above) have an is a sub-class relationship to another term; for example, [GO:0015758:glucose transport](http://amigo.geneontology.org/amigo/term/GO:0015758) is a [GO:0015749:monosaccharide transport](http://amigo.geneontology.org/amigo/term/GO:0015749). The Gene Ontology employs a number of other relations; the [relations documentation](/docs/ontology-relations/) has more information on the relations used in the ontology.

### Optional elements

#### Secondary IDs (also known as Alternate ID)

Alternate IDs that refer to a term. Secondary IDs come about when two or more terms are identical in meaning, and are merged into a single term. All terms IDs are preserved so that no information (for example, annotations to the merged IDs) is lost.

#### Synonyms

Alternative words or phrases closely related in meaning to the term name, with indication of the relationship between the name and synonym given by the synonym scope. The scopes for GO synonyms are:
+ **Exact**: an exact equivalent; interchangeable with the term name; for e.g. ornithine cycle is an exact synonym of urea cycle 
+ **Broad**: the synonym is broader than the term name; for e.g. cell division is a broad synonym of cytokinesis 
+ **Narrow**: the synonym is narrower or more precise than the term name; for e.g. pyrimidine-dimer repair by photolyase is a narrow synonym of photoreactive repair
+ **Related**: the terms are related in some imprecise way; for e.g. cytochrome bc1 complex is a related synonym of ubiquinol-cytochrome-c reductase activity virulence is a related synonym of pathogenesis 

Custom synonym types are also used in the ontology. For example, a number of synonyms are designated as systematic synonyms; synonyms of this type are exact synonyms of the term name.

#### Database cross-references

Database cross-references, or dbxrefs, refer to identical or very similar objects in other databases. For instance, the molecular function term retinal isomerase activity is cross-referenced with the Enzyme Commission entry EC:5.2.1.3; the biological process term sulfate assimilation has the cross-reference MetaCyc:PWY-781.

#### Comment

Any extra information about the term and its usage.

#### Subset

Indicates that the term belongs to a designated subset of terms, e.g. one of the [GO subsets](/docs/go-subset-guide/).

#### Obsolete tag

Indicates that the term has been deprecated and should not be used. GO terms get obsoleted when it is out of scope, misleadingly named or defined, or describes a concept that would be better represented in another way and needs to be removed from the published ontology. In these cases, the term and ID still persist in the ontology, but the term is tagged as obsolete, and all relationships to other terms are removed. A comment is added to the term, detailing the reason for the obsoletion and tags are also adding possible replacement terms, if possible. 

## The GO hierarchy
The GO ontology is structured as a directed acyclic graph where each term has defined relationships to one or more other terms in the same domain, and sometimes to other domains. 

## GO as a dynamic ontology 
GO aims to represent the current state of knowledge in biology, hence it is constantly revised and expanded as biological knowledge accumulates. Changes are made on a weekly basis (most relatively minor). Revisions to the ontology are managed by a team of ontology editors with extensive experience in both biology and computational knowledge representation. These updates are made collaboratively between the GOC ontology team and scientists who request the updates. Most requests come from scientists making GO annotations (these typically impact only a few terms each), and from domain experts in particular areas of biology (these typically revise an entire ‘branch’ of the ontology comprising many terms and relations). We invite researchers and computational scientists to [submit requests for either new terms, new relations, or any other improvements to the ontology](/docs/contributing-to-go-terms/).



## Details about the ontologies
* [Ontology Structure](/docs/ontology/): information about the structure of GO terms and the ontology.
* [Ontology Relations](/docs/ontology-relations/): documentation on the inter-term relations used in GO


