---
title: Tools to curate, browse, search and visualize GO
permalink: /docs/tools-overview/
---

# Tools to curate, browse, search and visualize GO

Gene Ontology provides a variety of tools to help users curate, browse, search, visualize and download both the [GO ontology](/docs/ontology-documentation/) and [GO annotations](/docs/go-annotations/).


## Curate

[Noctua](http://wiki.geneontology.org/index.php/Noctua){:target="blank"} is the curation platform developed by the Gene Ontology Consortium and allows to create both GO annotations and GO Causal Activity Models or GO-CAMs. The Noctua curation platform includes both a simple form editor and a more advanced and expressive graph editor for finer details on knowledge modeling.

![Noctua Curation Platform](/assets/NoctuaPlatform.jpg)

Documentation and guidelines for curators are available at [wiki.geneontology.org](http://wiki.geneontology.org){:target="blank"}.


## Browse

A drill-down browsing of the GO ontology is provided in the form of an [interactive tree](http://amigo.geneontology.org/amigo/dd_browse){:target="blank"}.

![Browse GO ontology example](/assets/ontology-browse-tree.jpg)

A general browsing of both the curated and inferred GO annotations is available through [AmiGO](http://amigo.geneontology.org/amigo/search/annotation){:target="blank"}.


## Search

### Ontology and standard GO Annotations

[AmiGO](http://amigo.geneontology.org/){:target="blank"} can be used to search both the GO ontology, the GO annotations and details about Gene Products described in our Knowledgebase.

Powered by the [Solr search engine](http://lucene.apache.org/solr/){:target="blank"}, [AmiGO](http://amigo.geneontology.org/){:target="blank"} allows for advanced faceted search to refine your query, by restricting for instance to a specific species, a specific [aspect](/docs/ontology-documentation/) (Biological Process, Molecular Function or Cellular Component), a [specific evidence](/docs/guide-go-evidence-codes/) (e.g. only curated annotations), etc.

[![AmiGO faceted search example](/assets/amigo-faceted-search.jpg)](http://amigo.geneontology.org/amigo/search/annotation){:target="blank"}

### GO-CAM

GO-Causal Activity Models (GO-CAMs) use a defined “grammar” for linking multiple [standard GO annotations](/docs/go-annotations/) into larger models of biological function (such as “pathways”) in a semantically structured manner. GO-CAMs are created by expert biocurators from the [GO Consortium](/docs/annotation-contributors/), using the [Noctua Curation Platform](http://noctua.geneontology.org){:target="blank"}.

GO-CAMs can be browsed and searched in the [http://geneontology.org/go-cam](http://geneontology.org/go-cam){:target="blank"} section of this site. It is for instance possible to search for all GO-CAMs having a certain GO term, a certain gene or created by a specific curation group or curator.

[![GO-CAM example](/assets/GO-CAM-site-illustration.jpg)](https://geneontology.cloud/browse){:target="blank"}



## Visualize

### GO ribbon: a configurable tool for visualizing GO annotations
Many genes have large numbers of annotations, making it difficult to get a quick overview of a gene function, or the functions of gene sets. The GO ribbon is specifically designed to help users visualize and explore the functions of a gene and was developed as a lightweight, reusable widget that can be embedded in any website, and retrieves data directly from the GO resource via API.
 
![GO Ribbon example of SOX9](/assets/Ribbon-sox9-example.jpg)

The GO Ribbon is currently integrated in the [Alliance of Genome Resources](https://www.alliancegenome.org/gene/RGD:620474#function---go-annotations){:target="blank"} and work is underway for further integration in several projects.


