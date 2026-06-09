---
title: Download ontology
permalink: /docs/download-ontology/
redirect_from:
- /page/download-ontology
- /page/go-file-format-guide
- /GO.downloads.ontology.shtml
---

# Gene ontology files
Gene ontology file formats: Files are available in the [OBO](https://owlcollab.github.io/oboformat/doc/obo-syntax.html){:target="_blank"}, [OWL](https://www.w3.org/TR/owl2-overview/){:target="_blank"} and JSON formats.
Three versions of the ontology are available as described below.

## Most users want: go-basic

<i class="fa fa-download"></i> **[Download go-basic.obo](https://purl.obolibrary.org/obo/go/go-basic.obo){:target="_blank"}** - Recommended for most GO annotation tools

---

| File Name | Description |	<i class="fa fa-download"></i> Download <br/>.obo file | <i class="fa fa-download"></i> Download <br/>.json file  | <i class="fa fa-download"></i> Download <br/>.owl file  |
|-------|--------------|-------------|-------------|-------------|
|**go-basic**|	The basic version of the GO, filtered so that the ontology is acyclic. With this version, annotations can safely be propagated up the graph. The relations included are *is a*, *part of*, *regulates*, *negatively regulates* and *positively regulates*. This version excludes relationships that cross the 3 GO hierarchies. This version is recommended for most GO-based annotation tools.| [go-basic.obo](https://purl.obolibrary.org/obo/go/go-basic.obo){:target="_blank"} |  [go-basic.json](https://purl.obolibrary.org/obo/go/go-basic.json){:target="_blank"}  |	[go-basic.owl](https://purl.obolibrary.org/obo/go/go-basic.owl){:target="_blank"}  | 
|**go** |	Core ontology. This version includes additional relationships compared to **go-basic**, including *has_part* and *occurs_in*. These relations can link terms from different aspects of GO and create cycles in the ontology, so not all the relations are safe for propagating annotations. This version excludes relationships to external ontologies.| [go.obo](https://purl.obolibrary.org/obo/go.obo){:target="_blank"} |  [go.json](https://purl.obolibrary.org/obo/go.json){:target="_blank"}  |	[go.owl](https://purl.obolibrary.org/obo/go.owl){:target="_blank"}  |
|**go-plus** |	This is the fully axiomatised version of the GO. It includes cross-ontology relationships (axioms) and imports additional required ontologies including [ChEBI](https://www.ebi.ac.uk/chebi/){:target="_blank"}, [Cell Ontology](http://www.obofoundry.org/ontology/cl.html){:target="_blank"} and [Uberon](http://uberon.github.io/){:target="_blank"}. It also includes to complete set of relationship types including some not present in **go**. This version is not available in .obo format. | NA | [go-plus.json](https://purl.obolibrary.org/obo/go/extensions/go-plus.json){:target="_blank"} | [go-plus.owl](https://purl.obolibrary.org/obo/go/extensions/go-plus.owl){:target="_blank"} 	|


## GO subset files
GO subsets (also known as GO slims) are condensed versions of the GO containing a reduced number of terms. They are specified by tags within the ontology that indicate if a given term is a member of a particular subset. GO subsets are used to provide a broad overview of the range of functions and processes relevant to a gene or a group of genes. More information and links for downloading subsets can be found on the <i class="fa fa-external-link"></i> **[Guide to GO subsets](/docs/go-subset-guide/)** page.

## Cross-references of GO to other classification systems
Many GO classes have cross-references (mappings) to a number of external classification systems. The <i class="fa fa-external-link"></i> **[cross-references of external classification systems to GO page](/docs/download-mappings/)** contains more information and links to the cross-reference2GO files.
