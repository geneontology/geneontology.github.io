---
title: GO, RDF/OWL and SPARQL
permalink: /docs/sparql/
---


# Introduction
Gene Ontology is developping Ontologies and Frameworks to help curators annotate biology in a consistent way. The Gene Ontology Causal Activity Model (or GO-CAM) [recently published](https://rdcu.be/bRIgY){:target="blank"} allows to curate knowledge in a much more expressive and traceable way. 

[ [Learn more about GO-CAMs](/docs/gocam-overview/) ]

To support the creation, storage and querying of GO-CAMs, GO is relying on the [RDF](https://www.w3.org/RDF/){:target="blank"} / [OWL](https://www.w3.org/OWL/){:target="blank"}, a directed, labeled graph data format to representing rich and complex knowledge. [SPARQL](https://www.w3.org/TR/sparql11-overview/){:target="blank"} is a language and protocol to query and manipulate RDF graph. RDF/OWL and SPARQL are common tools of the [Semantic Web](https://www.w3.org/2001/sw/wiki/Main_Page){:target="blank"}.

In the following document, we present some notions of RDF, OWL and SPARQL to help understand how the GO SPARQL endpoint is structured and how to query information out of it with some examples.

[ [Try the GO SPARQL endpoint](http://sparql.geneontology.org/blazegraph/#query){:target="blank"} ]


## Resource Description Framework (RDF)
The core structure of RDF is a triple consisting of a subject, a predicate (a relationship) and an object. A RDF graph is a set of such triples chaining different pieces of knowledge between multiple subjects and objects.

`
[ Subject ] --- predicate ---> [ Object ]
`

There are 3 kinds of nodes in a RDF graph:
* **IRIs**: a generalization of URIs that permits a wider range of Unicode characters. They are used to uniquely describe an object over the web and as such should be permanent URL, or PURL. As an example, the P53 mouse gene is uniquely and permanently defined on the web by https://www.uniprot.org/uniprot/P02340.
* **Literals**: used to store values describing an object (e.g. strings, numbers, dates). For instance, one could state with RDF that the gene with id P02340 has for label the literal "Cellular tumor antigen p53" and with would be written has : `<https://www.uniprot.org/uniprot/P02340> rdfs:label "Cellular tumor antigen p53"`.
* **Blank nodes**: local identifiers always scoped to an RDF store that are not persistent.

[ [Learn more about RDF graph](https://www.w3.org/TR/rdf11-concepts/){:target="blank"} ]


## Web Ontology Language (OWL)
OWL and OWL2 are ontology languages for the Semantic Web which allow to describe [ontology components](https://en.wikipedia.org/wiki/Ontology_components){:target="blank"} such as classes, properties, individuals and data values. Any OWL2 ontology can also be viewed as an RDF graph. OWL can be reasoned with by computer programs both to check the consistency of the aggregated knowledge (GO is using [Shex](https://shex.io){:target="blank"} to ensure the validity of GO-CAMs) and to make implicit knowledge explicit (e.g. if A is a B and B is part of C, then we can explicitly state that A is part of C).

[ [Learn more about OWL2](https://www.w3.org/TR/2012/REC-owl2-primer-20121211/){:target="blank"} ]
 | [ [Learn more about ontology relations used in GO](http://localhost:4000/docs/ontology-relations/){:target="blank"} ]

In addition of using OWL to describe ontologies, GO-CAMs heavily rely on the [Relation Ontology (RO)](https://github.com/oborel/obo-relations/){:target="blank"} and [Basic Formal Ontology (BFO)](http://basic-formal-ontology.org/){:target="blank"}. In the following example, the GO-CAM informs that the activity `sequence-specific DNA binding` enabled by the `IRF3 Hsap` gene `directly positively regulates`the `DNA-binding transcription activator activity` of `ÌRF3 Hsap`:

<p align="center">
  <img width="500" src="/assets/RO_example.png" alt="Example of use of the Relation Ontology in GO-CAMs">
</p>

In that GO-CAM, the predicates enabled_by and directly positively regulates comes from RO while occurs in comes from BFO:

| **Relation** | **Description** | **IRI** |
|------------------|-------------|-------------|
| enabled by | [Description](http://www.ontobee.org/ontology/RO?iri=http://purl.obolibrary.org/obo/RO_0002333){:target="blank"} | http://purl.obolibrary.org/obo/RO_0002333 |
| occurs in | [Description](http://www.ontobee.org/ontology/RO?iri=http://purl.obolibrary.org/obo/BFO_0000066){:target="blank"} | http://purl.obolibrary.org/obo/BFO_0000066 |
| directly positively regulates | [Description](http://www.ontobee.org/ontology/RO?iri=http://purl.obolibrary.org/obo/RO_0002629){:target="blank"} | http://purl.obolibrary.org/obo/RO_0002629 |



## SPARQL

[ [Learn more about SPARQL](https://www.w3.org/TR/sparql11-overview/){:target="blank"}  ]


## Federated Queries


