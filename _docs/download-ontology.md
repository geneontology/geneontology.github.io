---
title: Download the ontology
permalink: /docs/download-ontology/
redirect_from: 
- /page/download-ontology
- /page/go-file-format-guide
---

# Download the ontology

## Ontology files
+ Released monthly.
+ Available in [OBO 1.4](http://owlcollab.github.io/oboformat/doc/obo-syntax.html), [OWL](https://github.com/owlcs/owlapi) and [JSON](https://github.com/geneontology/obographs/) formats.
+ Also includes [GO subsets](/docs/go-subset-guide/) (slims).
+ [SVN access](/docs/SVN-access/) is available

## Ontology formats

+ OBO files are human-readable (in addition to machine-readable) and can be opened in any text editor. 
+ OWL files can be opened with [Protégé](https://protege.stanford.edu/){:target="blank"}.

|Name 	|Permanent URL |	Description|
|-------|--------------|-------------|
|[go-basic.obo](#go_basic)|	[http://purl.obolibrary.org/obo/go/go-basic.obo](http://purl.obolibrary.org/obo/go/go-basic.obo)|	Filtered, for use with legacy tools|
|[go.obo](#go_obo_and_owl) |		[http://purl.obolibrary.org/obo/go.obo](http://purl.obolibrary.org/obo/go.obo)|	Core ontology (OBO Format)|
|[go.owl](#go_obo_and_owl) |		[http://purl.obolibrary.org/obo/go.owl](http://purl.obolibrary.org/obo/go.owl){:target="blank"} |	Core ontology (OWL RDF/XML)|
|[go-plus.owl](#go_plus_owl) |		[http://purl.obolibrary.org/obo/go/extensions/go-plus.owl](http://purl.obolibrary.org/obo/go/extensions/go-plus.owl){:target="blank"} 	|Core plus additional axioms, vetted|

### go-basic.obo {#go_basic}

This is the basic version of the GO, filtered such that the graph is guaranteed to be acyclic and annotations can be propagated up the graph. The relations included are *is a*, *part of*, *regulates*, *negatively regulates* and *positively regulates*. This version excludes relationships that cross the 3 GO hierarchies. This version should be used with most GO-based annotation tools.

### go.obo and go.owl {#go_obo_and_owl}

These files contain the core GO ontology in two formats, OBO and OWL-RDF/XML. This view includes relationships not in the filtered version of GO including *has_part* and *occurs_in*. Many of these relationships may not be safe for propagating annotations across, so this version should not be used with legacy GO tools. This version excludes relationships to external ontologies.

### go-plus.owl {#go_plus_owl}

This is the fully axiomatised of the GO. It includes cross-ontology relationships (axioms) and imports additional required ontologies including [ChEBI](https://www.ebi.ac.uk/chebi/){:target="blank"}, [cell ontology](http://www.obofoundry.org/ontology/cl.html){:target="blank"} and [Uberon](http://uberon.github.io/){:target="blank"}. It also includes a complete set of relationship types including some not in go.obo/go.owl. This version is only available in [OWL](https://www.w3.org/OWL/){:target="blank"} format.

## Subsets

GO slims are subsets of terms in the ontology. GO subsets give a broad overview of the ontology content without the detail of the specific fine grained terms. More information in the [GO subset guide](/docs/go-subset-guide/).

## Cross-references of GO to other classification systems

Many GO classes have been cross-referenced (mapped) to a number of external classification systems. The [cross-references of external classification systems to GO page](/docs/download-mappings/) contains more information and links to the cross-reference2GO files.

## Related Tools 
+ [OBO format tools in GitHub](https://github.com/oboformat/oboformat-tools){:target="blank"}: a wrapper for the Java (OWL-API) implementation of a parser for OBOF1.4 syntax and an implementation of the OBOF1.4 mapping to OWL (uses the OWL API)
* [OWL API in Github](https://github.com/owlcs/owlapi){:target="blank"}: a Java API for creating, manipulating and serialising OWL Ontologies.
