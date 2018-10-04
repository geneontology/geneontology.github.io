---
title: GO Annotation File Formats
permalink: /docs/go-annotation-file-formats/
---

# GO Annotation File Formats
The Gene Ontology Consortium stores annotation data, the representation of gene product attributes using GO terms, in tab-delimited text files. Each line in the file represents a single association between a gene product and a GO term with a certain evidence code and the reference to support the link. For more general information on annotation, please see the [Introduction to GO annotation page](/docs/go-annotations/).

There are two annotation file formats, GAF and GPAD:
## Gene Association File (GAF)

* [GAF 2.1](/docs/go-annotation-file-gaf-format-21/) is the latest version of the GAF format. Data has been released in this format since the summer of 2015.

## Gene Product Association Data (GPAD): The GPAD format is designed to be more normalized than GAF, and is intended to work in conjunction with a separate format for exchanging gene product information (GPI).
* [GPAD 1.1](/docs/gene-product-association-data-gpad-format/) contains the annotation data
* [GPI 1.2](/docs/gene-product-information-gpi-format/) contains the data about the gene products
