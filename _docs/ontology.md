---
title: Ontology
permalink: /docs/ontology/
---


## The GO hierarchy
The structure of GO can be described in terms of a graph, where each GO term is a node, and the relationships between the terms are edges between the nodes. GO is loosely hierarchical, with 'child' terms being more specialized than their 'parent' terms, but unlike a strict hierarchy, a term may have more than one parent term (note that the parent/child model does not hold true for all types of relations, see the [relations documentation](/docs/ontology-relations/)). For example, the biological process term [hexose biosynthetic process](http://amigo.geneontology.org/amigo/term/GO:0019319) has two parents, [hexose metabolic process](http://amigo.geneontology.org/amigo/term/GO:0019318) and [monosaccharide biosynthetic process](http://amigo.geneontology.org/amigo/term/GO:0046364). This reflect the fact that *biosynthetic process* is a subtype of *metabolic process* and a *hexose* is a subtype of *monosaccharide*.


diag-ontology-graph.gif A set of terms under the biological process node pigmentation.

In the diagram, relations between the terms are represented by the colored arrows; the letter in the box midway along each arrow is the relationship type. Note that the terms get more specialized going down the graph, with the most general terms—the root nodes cellular component, biological process and molecular function—at the top of the graph. Terms may have more than one parent, and they may be connected to parent terms via different relations. The GO relations documentation describes these relations in greater detail.

## One ontology... or three?

As the diagram above suggests, the three GO domains (cellular component, biological process, and molecular function) are each represented by a root ontology term. All terms in a domain can trace their parentage to the root term, although there may be numerous different paths via varying numbers of intermediary terms to the ontology root. The three root nodes are unrelated and do not have a common parent node, and hence GO is three ontologies. Some graph-based software may require a single root node; in these cases, a "fake" term can be added as a parent of the three existing root nodes.

The three GO ontologies are is_a disjoint, meaning that no is_a relations operate between terms from the different ontologies. However, other relationships such as part_of and regulates do operate between the GO ontologies. For example the molecular function term 'cyclin-dependent protein kinase activity' is part_of the biological process 'cell cycle'.

