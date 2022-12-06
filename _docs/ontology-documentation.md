---
title: Gene Ontology overview
permalink: /docs/ontology-documentation/
redirect_from: 
- /page/ontology-documentation
- /durable-content-tags/analysis
- /page/biological-process-ontology-guidelines
- /page/molecular-function-ontology-guidelines
- /page/cellular-component-ontology-guidelines
- /page/go-annotation-conventions
- GO.contents.doc.shtml
- /GO.ontology.structure.shtml
---

# Gene Ontology overview
An ontology is a formal representation of a body of knowledge within a given domain. Ontologies usually consist of a set of classes (or terms or concepts) with [relations](/docs/ontology-relations/) that operate between them. The Gene Ontology (GO) describes our knowledge of the biological domain with respect to three aspects:


|------------------|-------------|
| **Molecular Function** | Molecular-level activities performed by gene products. Molecular function terms describe activities that occur at the molecular level, such as "catalysis" or "transport". GO molecular function terms represent activities rather than the entities (molecules or complexes) that perform the actions, and do not specify where, when, or in what context the action takes place. Molecular functions generally correspond to activities that can be performed by individual gene products (*i.e.* a protein or RNA), but some activities are performed by molecular complexes composed of multiple gene products. Examples of broad functional terms are *[catalytic activity](http://amigo.geneontology.org/amigo/term/GO:0003824){:target="blank"}* and *[transporter activity](http://amigo.geneontology.org/amigo/term/GO:0005215){:target="blank"}*; examples of narrower functional terms are *[adenylate cyclase activity](http://amigo.geneontology.org/amigo/term/GO:0004016){:target="blank"}* or *[Toll-like receptor binding](http://amigo.geneontology.org/amigo/term/GO:0035325){:target="blank"}*. To avoid confusion between gene product names and their molecular functions, GO molecular functions are often appended with the word "activity" (a *protein kinase* would have the GO molecular function *protein kinase activity*).
| **Cellular Component** | The locations relative to cellular structures in which a gene product performs a function, either cellular compartments (*e.g.*, *[mitochondrion](http://amigo.geneontology.org/amigo/term/GO:0005739){:target="blank"}*), or  stable macromolecular complexes of which they are parts (*e.g.*, the *[ribosome](http://amigo.geneontology.org/amigo/term/GO:0005840){:target="blank"}*). Unlike the other aspects of GO, cellular component classes refer not to processes but rather a cellular anatomy.
| **Biological Process** | The larger processes, or ‘biological programs’ accomplished by multiple molecular activities. Examples of broad biological process terms are *[DNA repair](http://amigo.geneontology.org/amigo/term/GO:0006281){:target="blank"}* or *[signal transduction](http://amigo.geneontology.org/amigo/term/GO:0007165){:target="blank"}*. Examples of more specific terms are *[pyrimidine nucleobase biosynthetic process](http://amigo.geneontology.org/amigo/term/GO:0019856){:target="blank"}* or *[glucose transmembrane transport](http://amigo.geneontology.org/amigo/term/GO:1904659){:target="blank"}*. Note that a biological process is not equivalent to a pathway. At present, the GO does not try to represent the dynamics or dependencies that would be required to fully describe a pathway.

In an example of GO annotation, human "cytochrome c" can be described by the **molecular function** *oxidoreductase activity*, the **biological process** *oxidative phosphorylation*, and the **cellular component** *mitochondrial intermembrane space*.

The GO vocabulary is designed to be species-agnostic, and includes terms applicable to prokaryotes and eukaryotes, as well as single and multicellular organisms.

## GO classes (also known as terms)
GO classes are composed of a definition, a label, a unique identifier, and several other elements. [Elements of GO terms are described here](/docs/ontology/).

## The GO graph
The structure of GO can be described in terms of a graph, where each GO term is a node, and the relationships between the terms are edges between the nodes. GO is loosely hierarchical, with 'child' terms being more specialized than their 'parent' terms, but unlike a strict hierarchy, a term may have more than one parent term (note that the parent/child model does not hold true for all types of relations, see the [relations documentation](/docs/ontology-relations/)). For example, the biological process term [hexose biosynthetic process](http://amigo.geneontology.org/amigo/term/GO:0019319){:target="blank"} has two parents, [hexose metabolic process](http://amigo.geneontology.org/amigo/term/GO:0019318){:target="blank"} and [monosaccharide biosynthetic process](http://amigo.geneontology.org/amigo/term/GO:0046364){:target="blank"}. This reflect the fact that *biosynthetic process* is a subtype of *metabolic process* and a *hexose* is a subtype of *monosaccharide*.

![link description](/assets/hexose-biosynthetic-process.png){:width="650"}

## One ontology... or three?

As the diagram above suggests, the three GO domains (cellular component, biological process, and molecular function) are each represented by a separate root ontology term. All terms in a domain can trace their parentage to a root term, although there may be numerous different paths via varying numbers of intermediary terms to a ontology root. The three root nodes are unrelated and do not have a common parent node, and hence GO is three ontologies. Some graph-based software may require a single root node; in these cases, a "fake" term can be added as a parent of the three existing root nodes.

The three GO ontologies are *is a disjoint*, meaning that no *is a* relations operate between terms from the different ontologies. However, other relationships such as *part of* and *regulates* do operate between the GO ontologies. For example, the molecular function term 'cyclin-dependent protein kinase activity' is *part of* the biological process 'cell cycle'. [More information about relations is available here](/docs/ontology-relations/).

## GO as a dynamic ontology
GO aims to represent the current state of knowledge in biology, hence it is constantly revised and expanded as biological knowledge accumulates. Changes are made on a weekly basis (most relatively minor). Revisions to the ontology are managed by a team of ontology editors with extensive experience in both biology and computational knowledge representation. These updates are made collaboratively between the GOC ontology team and scientists who request the updates. Most requests come from scientists making GO annotations (these typically impact only a few terms each), and from domain experts in particular areas of biology (these typically revise an entire ‘branch’ of the ontology comprising many terms and relations). We invite researchers and computational scientists to [submit requests for either new terms, new relations, or any other improvements to the ontology](/docs/contributing-to-go-terms/).

## Details about the ontology
* [GO term elements](/docs/ontology/): Description of the format of GO terms.
* [Ontology relations](/docs/ontology-relations/): Documentation on the inter-term relations used in GO.
* [Taxon constraints](/docs/taxon-constraints/): Documentation on how annotations of certain terms are restricted to specific species. 
* [GO statistics](/stats.html): Statistics for the current release and over time.
