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
The Gene Ontology (GO) is a structured, standardized representation of biological knowledge. GO descibes concepts (also known as terms, or formally, *classes*) that are connected to each other via formally defined [relations](/docs/ontology-relations/). Elements of GO terms are described [here](/docs/ontology/). 
The GO is designed to be species-agnostic, to enable the annotation of gene products across the entire tree of life. The computational framework ofthe GO enables consistent genes annotation, comparison of functions across organisms, and integration of knowledge across diverse biological databases. 

# GO aspects
The GO is organized in three *aspects*

|------------------|-------------|
| **Molecular Function** | Molecular-level activities performed by gene products, such as "catalysis" or "transcription regulator activity". GO molecular function terms represent activities rather than the entities (molecules or complexes) that perform the actions, and do not specify where, when, or in what context the action takes place. Molecular functions generally correspond to activities that can be performed by individual gene products (*i.e.* a protein or RNA), but some activities are performed by molecular complexes composed of multiple gene products. Examples of broad functional terms are *[catalytic activity](http://amigo.geneontology.org/amigo/term/GO:0003824){:target="blank"}* and *[transporter activity](http://amigo.geneontology.org/amigo/term/GO:0005215){:target="blank"}*; examples of narrower functional terms are *[adenylate cyclase activity](http://amigo.geneontology.org/amigo/term/GO:0004016){:target="blank"}* or *[insulin receptor activity](http://amigo.geneontology.org/amigo/term/GO:0005009){:target="blank"}*. To avoid confusion between gene product names and their molecular functions, GO molecular functions are appended with the word "activity" (a *protein kinase* would have the GO molecular function *protein kinase activity*).
| **Cellular Component** | A location in the cell, either a cellular compartment or structure, where a molecular function takes place. There are two ways in which the gene ontology describes locations of gene products: (1) the *[cellular anatomical structures](http://amigo.geneontology.org/amigo/term/GO:0110165){:target="blank"}*, and (2) the stable *[protein-containing complexes](http://amigo.geneontology.org/amigo/term/GO:0032991){:target="blank"}* of which they are parts. Cellular anatomical structures include cellular entities such as the *[plasma membrane](http://amigo.geneontology.org/amigo/term/GO:0005886){:target="blank"}* and the *[cytoskeleton](http://amigo.geneontology.org/amigo/term/GO:0005856){:target="blank"}*, as well as membrane-enclosed cellular compartments such as the *[mitochondrion](http://amigo.geneontology.org/amigo/term/GO:0005739){:target="blank"}*.  
| **Biological Process** | The larger processes, or ‘biological programs’ accomplished by multiple molecular activities. Examples of broad biological process terms are *[DNA repair](http://amigo.geneontology.org/amigo/term/GO:0006281){:target="blank"}* or *[signal transduction](http://amigo.geneontology.org/amigo/term/GO:0007165){:target="blank"}*. Examples of more specific terms are *[cytosine biosynthetic process](http://amigo.geneontology.org/amigo/term/GO:0046089){:target="blank"}* or *[D-glucose transmembrane transport](http://amigo.geneontology.org/amigo/term/GO:1904659){:target="blank"}*. 

Each of the three GO aspects is represented by a separate root ontology term. Moreover, the three GO aspects are *is a disjoint*, meaning that no *is a* relation exists between terms from the different ontology aspects. However, other relationships such as *part of* and *occurs in* can operate between terms from different GO aspects. For example, the molecular function term *[cyclin-dependent protein kinase activity](http://amigo.geneontology.org/amigo/term/GO:0051726)* is *part of* the biological process *[regulation of cell cycle](http://amigo.geneontology.org/amigo/term/GO:0051726)*. [More information about relations is available here](/docs/ontology-relations/).

## The GO hierarchy
The GO is structured as a graph in which each GO term is a node and the relationships between the terms are relations, also known as *edges*, between the nodes. GO is hierarchical, with 'child' terms being more specialized than their 'parent' terms, but unlike a strict hierarchy, a term may have more than one parent term (note that the parent/child model does not hold true for all types of relations, see the [relations documentation](/docs/ontology-relations/)). For example, the biological process term [hexose biosynthetic process](http://amigo.geneontology.org/amigo/term/GO:0019319){:target="blank"} has two parents, [hexose metabolic process](http://amigo.geneontology.org/amigo/term/GO:0019318){:target="blank"} and [monosaccharide biosynthetic process](http://amigo.geneontology.org/amigo/term/GO:0046364){:target="blank"}. This reflect the fact that *biosynthetic process* is a subtype of *metabolic process* and a *hexose* is a subtype of *monosaccharide*.

![link description](/assets/hexose-biosynthetic-process.png){:width="350"}


## GO as a dynamic ontology
GO aims to represent the current state of knowledge in biology, hence it is constantly revised and expanded as biological knowledge accumulates. Changes are made on a weekly basis (most relatively minor). Revisions to the ontology are managed by a team of ontology editors with extensive experience in both biology and computational knowledge representation. These updates are made collaboratively between the GOC ontology team and scientists who request the updates. Most requests come from scientists making GO annotations (these typically impact only a few terms each), and from domain experts in particular areas of biology (these typically revise an entire ‘branch’ of the ontology comprising many terms and relations). Changes to the ontology can be visualized on the [GO statistics](/stats.html) page. We welcome researchers and computational scientists to [submit requests for either new terms, new relations, or any other improvements to the ontology](/docs/contributing-to-go-terms/).

## More information about the ontology
* [GO term elements](/docs/ontology/): Description of the format of GO terms.
* [Ontology relations](/docs/ontology-relations/): Documentation on the inter-term relations used in GO.
* [Taxon constraints](/docs/taxon-constraints/): Documentation on how annotations of certain terms are restricted to specific species. 

