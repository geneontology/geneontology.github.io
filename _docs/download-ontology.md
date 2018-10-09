---
title: Download Ontology
permalink: /docs/download-ontology/
---

# Download Ontology

## Ontology files
+ Released monthly.
+ Available in [OBO and OWL formats](/docs/go-file-format-guide/).
+ Also includes [GO subsets](/docs/go-subset-guide/) (slims).

## Gene Ontology formats

+ OBO files are human-readable (in addition to machine-readable) and can be opened in any text editor. 
+ OWL files can be opened with [Protégé](https://protege.stanford.edu/){:target="blank"}.

|Name 	|Permanent URL |	Description|
|-------|--------------|-------------|
|go-basic.obo |	[http://purl.obolibrary.org/obo/go/go-basic.obo](http://purl.obolibrary.org/obo/go/go-basic.obo) |	Filtered, for use with legacy tools|
|go.obo |		[http://purl.obolibrary.org/obo/go.obo](http://purl.obolibrary.org/obo/go.obo) |	Core ontology (OBO Format)|
|go.owl |		[http://purl.obolibrary.org/obo/go.owl](http://purl.obolibrary.org/obo/go.owl) |	Core ontology (OWL RDF/XML)|
|go-plus.owl |		[http://purl.obolibrary.org/obo/go/extensions/go-plus.owl](http://purl.obolibrary.org/obo/go/extensions/go-plus.owl) 	|Core plus additional axioms, vetted|

## go-basic.obo

This is the basic version of the GO filtered such that the graph is guaranteed to be acyclic, and annotations can be propagated up the graph. The relations included are is_a, part_of, regulates, negatively_regulates and positively_regulates. This version excludes relationships that cross the 3 GO hierarchies. This is the version that should be used with most GO-based annotation tools.

## go.obo and go.owl

These files contain the core GO ontology in two formats, OBO and OWL-RDF/XML. This view includes relationships not in the filtered version of GO including has_part and occurs_in. Many of these relationships may not be safe for propagating annotations across, so this version should not be used with legacy GO tools. This version excludes relationships to external ontologies.

## go-plus.owl

This is the fully axiomatised of the GO. It includes cross-ontology relationships (axioms) and imports additional required ontologies including ChEBI, cell ontology and Uberon. It also includes a complete set of relationship types including some not in go.obo/go.owl. This version is only available in OWL.

## Subsets

GO slims are subsets of terms in the ontology. GO subsets give a broad overview of the ontology content without the detail of the specific fine grained terms. More information in the [GO subset guide](/docs/go-subset-guide/).

## Cross-references of GO to other classification systems

Many GO classes have been cross-referenced (mapped) to a number of external classification systems. The [Cross-references of External Classification Systems to GO](/docs/download-mappings/) page contains more information and links to the Cross-reference2GO files.

