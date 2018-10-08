---
title: Relations in the Gene Ontology
permalink: /docs/ontology-relations/
---

# Relations in the Gene Ontology

## Overview
The ontologies of GO are structured as a graph, with *terms* as *nodes* in the graph and the *relations* (also know as *object properties)* between the terms as *edges* (see also the [Gene Ontology Overview](/docs/ontology-documentation/). Just as each GO term is defined, so the relations between GO terms are also categorized and defined. This document provides a description of some of the commonly used relationships in GO: *is a* (is a subtype of); *part of*; has part; *regulates*, *negatively regulates* and *positively regulates*.

All terms (other than the root terms representing each aspect) have an *is a* sub-class relationship to another term; for example, [GO:1904659:glucose transport](http://amigo.geneontology.org/amigo/term/GO:1904659) *is a* [GO:0015749:monosaccharide transport](http://amigo.geneontology.org/amigo/term/GO:0015749). The Gene Ontology employs a number of other relations, including *part of* (e.g. [GO:0031966:mitochondrial membrane](http://amigo.geneontology.org/amigo/term/GO:0031966) *part of* [GO:0005740:mitochondrial envelope](http://amigo.geneontology.org/amigo/term/GO:0005740) and *regulates* (e.g.[GO:0006916:anti-apoptosis](http://amigo.geneontology.org/amigo/term/GO:0006916) *regulates* [GO:0012501:programmed cell death](http://amigo.geneontology.org/amigo/term/GO:0012501).

This set is not exhaustive and includes only a subset of relations used in the GO ontologies, logical definitions and annotations. For more technical information about relations and their properties used in GO and other ontologies see the [OBO Relations Ontology (RO)](http://www.obofoundry.org/ontology/ro.html){:target="_blank"}.

## Using relations to group related annotations

Relations are widely used by GO browsing tools such as [AmiGO](http://amigo.geneontology.org/amigo){:target="_blank"} and [QuickGO](https://www.ebi.ac.uk/QuickGO){:target="_blank"} and in over-representation analysis to group related GO annotations. For example, the annotations on the [AmiGO page for kinase activity](http://amigo.geneontology.org/amigo/term/GO:0016301){:target="_blank"} include annotations made to '[fucokinase activity](http://amigo.geneontology.org/amigo/term/GO:0050201){:target="_blank"}', '[protein kinase activity](http://amigo.geneontology.org/amigo/term/GO:0004672){:target="_blank"}' etc. Note that not all relations can be safely used to group annotations via the GO graph. Please see below for notes and examples illustrating when and why grouping of annotations via relationships can be done safely.

## Conventions used in the documentation
There are a number of ways of referring to and representing logical relations. The GO relations documentation uses the following conventions:

+ in keeping with the graph-based terminology, node is used to refer to GO terms
+ where it is appropriate to talk about a parent-child relationship between nodes, parent refers to the node closer to the root(s) of the graph, and child to that closer to the leaf nodes; for the relations is_a and part_of the parent would be a broader GO term, and the child would be a more specific term;
+ the arrowhead indicates the direction of the relationship;
+ dotted lines represent an inferred relationship, i.e. one that has not been expressly stated.

This diagram would be interpreted as follows:

![is-a](/assets/diag-graph-example.gif)

+ A *is a* B
+ B is *part of* C
+ we can infer that A is *part of* C

The formal mathematical / logical representation of the inference made in the graph above would be:

is a &#183F part of → part of

## GO Basics
Nodes in the GO graph can have any number and type of relationships to other nodes. Like hierarchies—for example, a family tree or a taxonomy of species—a node may have connections to more than one child (more specific) node, but unlike them, it can also have more than one parent (broader) node, and different relations to its different parents; for example, a node may have a part of relationship to one node, and an is a relationship to another. The following diagram illustrates this point:

![part-of](/assets/diag-dag-example.gif)

    mitochondrion has two parents: it is an organelle and it is part of the cytoplasm;
    organelle has two children: mitochondrion is an organelle, and organelle membrane is part of organelle

## The is a relation
The is a relation forms the basic structure of GO. If we say A is a B, we mean that node A is a subtype of node B. For example, mitotic cell cycle is a cell cycle, or lyase activity is a catalytic activity.

It should be noted that is a does not mean *is an instance of*. An *instance*, ontologically speaking, is a specific example of something; e.g. a cat is a mammal, but Garfield is an instance of a cat, rather than a subtype of cat. GO, like most ontologies, does not use instances, and the terms in GO represent a class of entities or phenomena, rather than specific manifestations thereof. However, if we know that cat is a mammal, we can say that every instance of cat is a mammal. 
