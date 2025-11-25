---
title: Tools to curate, browse, search and visualize GO
permalink: /docs/tools-overview/
---

# Tools to browse, search, visualize and curate GO

The Gene Ontology provides a variety of tools to help users browse, search, visualize, download both the [GO ontology](/docs/ontology-documentation/) and [GO annotations](/docs/go-annotations/). 

---

## Browse the ontology

Drill-down browsing of the GO ontology is possible via an [interactive tree](http://amigo.geneontology.org/amigo/dd_browse){:target="blank"}.

![Browse GO ontology example](/assets/ontology-browse-tree.jpg){:width="1000"}

To browse curated and inferred GO annotations, visit [AmiGO](http://amigo.geneontology.org/amigo/search/annotation){:target="blank"}.

---

## Search the ontology and GO annotations

[AmiGO](http://amigo.geneontology.org/){:target="blank"} can be used to search both the GO ontology, the GO annotations and details about gene products described in the GO knowledgebase.

AmiGO supports faceted search to refine queries by restricting specific parameters, such as a species, an [ontology aspect](/docs/ontology-documentation/) (Biological Process, Molecular Function or Cellular Component), an [evidence](/docs/guide-go-evidence-codes/) (e.g. only curated annotations), etc.

[![AmiGO faceted search example](/assets/amigo-faceted-search.jpg)](http://amigo.geneontology.org/amigo/search/annotation){:target="blank"}

---

## Visualize annotations with the GO Ribbon
Many genes have large numbers of annotations, making it difficult to get a quick overview of a gene function, or the functions of gene sets. GO ribbons are specifically designed to help users visualize and explore the functions of a gene. The ribbon is a lightweight, reusable widget that can be embedded in any website, and retrieves data directly from the GO knowledgebase via the GO API.
 
![GO Ribbon example of SOX9](/assets/Ribbon-sox9-example.jpg){:width="1000"}

Interested to learn more about the GO Ribbon ? [Check the GO Ribbon documentation](/docs/ribbon.html)

Want to try it now with your genes ? [ [Access the GO Ribbon sandbox](/ribbon.html) ]

The GO Ribbon is also integrated in the [Alliance of Genome Resources](https://www.alliancegenome.org/gene/RGD:620474#function---go-annotations){:target="blank"} and work is underway for further integration in several projects.

---

## Search GO Causal Activity Models (GO-CAMs)

GO-Causal Activity Models (GO-CAMs) use a defined “grammar” for linking multiple [standard GO annotations](/docs/go-annotations/) into larger models of biological function (such as “pathways”) in a semantically structured manner. GO-CAMs are created by expert biocurators from the [GO Consortium](/docs/annotation-contributors/), using the [Noctua Curation Platform](http://noctua.geneontology.org){:target="blank"}.

GO-CAMs can be browsed and searched in the [http://geneontology.org/go-cam](http://geneontology.org/go-cam){:target="blank"} section of this site. For example, you can limit your search results to GO-CAMs having a certain GO term, a certain gene, or created by a specific curation group or curator.

[![GO-CAM example](/assets/GO-CAM-site-illustration.jpg)](https://go-cam-browser.geneontology.org/){:target="blank"}

---

## Visualize GO-CAM Models with the Alliance of Genome Resources Pathway Viewer 
Summaries of GO-CAM Models are viewable on the Alliance of Genome Resources webpages for relevant genes. The Alliance of Genome Resources Pathway Viewer is designed to easily visualize the pathways in which a gene product play a role, and to give easy access to the functions of the other genes in the same pathway, listed in a menu on the right (see example below).

![Alliance Pathway Previewe xample for pmk-1](/assets/pmk-1_alliance_pathway_preview.png)


The Alliance of Genome Resources Pathway Viewer is integrated in the [Alliance of Genome Resources](https://www.alliancegenome.org/gene/RGD:620474#function---go-annotations){:target="blank"} and work is underway for further integration in several projects. Alliance of Genome Resources pages display models containing a minimum of 3 connected molecular functions (a.k.a. Activity Units). 

---

## Explore co-annotations with the GO Term Matrix
[The GO Term Matrix](http://amigo.geneontology.org/matrix){:target="blank"} represents co-annotations of pairs of GO terms. It allows to compare multiple pairs of terms simultaneously.

![GO term matrix](/assets/go-term-matrix.jpg){:width="850"}


---
