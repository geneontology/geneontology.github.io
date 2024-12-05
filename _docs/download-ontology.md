---
title: Download ontology
permalink: /docs/download-ontology/
redirect_from:
- /page/download-ontology
- /page/go-file-format-guide
- /GO.downloads.ontology.shtml
---

# Gene ontology file formats

Files are available in the OBO, OWL and JSON formats.
For more information on these formats: 
- [OBO format](https://owlcollab.github.io/oboformat/doc/obo-syntax.html)
- [OWL format](https://www.w3.org/TR/owl2-overview/)


# Gene ontology files
Three versions of the ontology are available, as described below.

|Name 	| Description | Permanent URL |	Download link |
|-------|--------------|-------------|-------------|
|**go-basic**|	The basic version of the GO, filtered such that the graph is acyclic. With this version, annotations can safely be propagated up the graph. The relations included are *is a*, *part of*, *regulates*, *negatively regulates* and *positively regulates*. This version excludes relationships that cross the 3 GO hierarchies. This version is recommended for most GO-based annotation tools.| http://purl.obolibrary.org/obo/go/go-basic.obo | [Download go-basic.obo file](https://purl.obolibrary.org/obo/go/go-basic.obo)|	
|**go** |	Core ontology. This version includes additional relationships compared to **go-basic**, including *has_part* and *occurs_in*. These relations can link terms from different aspects of GO, and create cycles in the ontology, so not all the relations are safe for propagating annotations. This version excludes relationships to external ontologies.| http://purl.obolibrary.org/obo/go.obo / http://purl.obolibrary.org/obo/go.owl| [Download go.obo file](https://purl.obolibrary.org/obo/go.obo) /  [Download go.owl file](https://purl.obolibrary.org/obo/go.owl){:target="blank"} |	
|**go-plus** |	This is the fully axiomatised version of the GO. It includes cross-ontology relationships (axioms) and imports additional required ontologies including [ChEBI](https://www.ebi.ac.uk/chebi/){:target="blank"}, [Cell Ontology](http://www.obofoundry.org/ontology/cl.html){:target="blank"} and [Uberon](http://uberon.github.io/){:target="blank"}. It also includes to complete set of relationship types including some not present in **go**. This version is only available in [OWL](https://www.w3.org/OWL/){:target="blank"} format. | http://purl.obolibrary.org/obo/go/extensions/go-plus.owl | [Download go-plus.owl file](https://purl.obolibrary.org/obo/go/extensions/go-plus.owl){:target="blank"} 	|


### GO subset files
GO subsets (also known as GO slims) are condensed versions of the GO containing a subset of the terms. They are specified by tags within the ontology that indicate if a given term is a member of a particular subset. GO subsets are particularly useful for providing a broad overview of the range of functions and processes.  More information can and links for downloading subsets be found on the [Guide to GO subsets](/docs/go-subset-guide/) page.

## Cross-references of GO to other classification systems
Many GO classes have cross-references (mapped) to a number of external classification systems. The [cross-references of external classification systems to GO page](/docs/download-mappings/) contains more information and links to the cross-reference2GO files.

## Snapshot editions
As of April 2019, the standard PURLs for GO will resolve to the monthly (release) version. We *strongly* recommend using the latest official release instead of snapshot. If you have need to access the snapshot (daily) version, use `/snapshot/` in the URL. For example:

 * http://purl.obolibrary.org/obo/go/snapshot/go.obo
 * http://purl.obolibrary.org/obo/go/snapshot/go.owl
 * http://purl.obolibrary.org/obo/go/snapshot/extensions/go-plus.owl

## Related tools
+ [OBO format tools in GitHub](https://github.com/oboformat/oboformat-tools){:target="blank"}: a wrapper for the Java (OWL-API) implementation of a parser for OBOF1.4 syntax and an implementation of the OBOF1.4 mapping to OWL (uses the OWL API)
* [OWL API in Github](https://github.com/owlcs/owlapi){:target="blank"}: a Java API for creating, manipulating and serialising OWL Ontologies
