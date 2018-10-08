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

## The GO hierarchy
The structure of GO can be described in terms of a graph, where each GO term is a node, and the relationships between the terms are edges between the nodes. GO is loosely hierarchical, with 'child' terms being more specialized than their 'parent' terms, but unlike a strict hierarchy, a term may have more than one parent term (note that the parent/child model does not hold true for all types of relations, see the [relations documentation](/docs/ontology-relations/)). For example, the biological process term [hexose biosynthetic process](http://amigo.geneontology.org/amigo/term/GO:0019319) has two parents, [hexose metabolic process](http://amigo.geneontology.org/amigo/term/GO:0019318) and [monosaccharide biosynthetic process](http://amigo.geneontology.org/amigo/term/GO:0046364). This reflect the fact that *biosynthetic process* is a subtype of *metabolic process* and a *hexose* is a subtype of *monosaccharide*.

![link description](/assets/hexose-biosynthetic-process.png)


## One ontology... or three?

As the diagram above suggests, the three GO domains (cellular component, biological process, and molecular function) are each represented by a root ontology term. All terms in a domain can trace their parentage to the root term, although there may be numerous different paths via varying numbers of intermediary terms to the ontology root. The three root nodes are unrelated and do not have a common parent node, and hence GO is three ontologies. Some graph-based software may require a single root node; in these cases, a "fake" term can be added as a parent of the three existing root nodes.

The three GO ontologies are *is_a disjoint*, meaning that no *is_a* relations operate between terms from the different ontologies. However, other relationships such as part_of and regulates do operate between the GO ontologies. For example the molecular function term 'cyclin-dependent protein kinase activity' is *part_of* the biological process 'cell cycle'.

## GO as a dynamic ontology 
GO aims to represent the current state of knowledge in biology, hence it is constantly revised and expanded as biological knowledge accumulates. Changes are made on a weekly basis (most relatively minor). Revisions to the ontology are managed by a team of ontology editors with extensive experience in both biology and computational knowledge representation. These updates are made collaboratively between the GOC ontology team and scientists who request the updates. Most requests come from scientists making GO annotations (these typically impact only a few terms each), and from domain experts in particular areas of biology (these typically revise an entire ‘branch’ of the ontology comprising many terms and relations). We invite researchers and computational scientists to [submit requests for either new terms, new relations, or any other improvements to the ontology](/docs/contributing-to-go-terms/).



## Details about the ontology
* [GO Term Elements](/docs/go-term-elements/): the format of GO terms
* [Ontology Structure](/docs/ontology/): information about the structure of GO terms and the ontology.
* [Ontology Relations](/docs/ontology-relations/): documentation on the inter-term relations used in GO


