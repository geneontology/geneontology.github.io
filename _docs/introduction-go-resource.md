---
title: About the GO
permalink: /docs/introduction-to-go
redirect_from: 
- /docs/introduction-to-go-resource/
- /page/introduction-go-resource
- /book/documentation/file-format-guide
- /GO.database.shtml
- /GO.doc.shtml
---

# About the Gene Ontology
---
### Mission Statement

A core goal of biomedical research is to uncover how individual genes contribute to the biology of an organism, and their roles in health and disease. The mission of the Gene Ontology Consortium (GOC) is to provide a comprehensive and up-to-date computational model of the current scientific understanding of the functions of gene products, e.g. proteins, non-coding RNAs, macromolecular complexes, or *genes* for simplicity. GO encompasses all levels of biological systems, from molecular activities to complex cellular and organismal-level networks. GO provides uniform descriptors applicable to gene products across the entire tree of life. Today, GO is used to represent gene function in all sequenced organisms. 

### Background

The GOC was established in 1998 when researchers studying the genome of three model organisms — *Drosophila melanogaster* (fruit fly), *Mus musculus* (mouse), and *Saccharomyces cerevisiae* (brewer's or baker's yeast) — began to work collaboratively on a common classification scheme for gene function to compare the newly sequenced genomes of these organisms. One of the GO's earliest documents, [On the representation of "gene function" in databases](https://zenodo.org/record/5504413), was written by Michael Ashburner in 1998. GO's first offical paper was the 2000 Nature Genetics publication [Gene Ontology: tool for the unification of biology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3037419/){:target="blank"}. 

GO grew into a large data framework adapted for all living organisms, from bacteria to human. GO was the first of the [hundreds of biomedical ontologies](https://obofoundry.org/) that currently exist, which together, aim to represent the vast amount of biomedical knowledge in a computable form. GO is a major hub within these ontologies, being linked to many other biomedical ontologies. It is widely used as a tool in scientific research, and has been cited in tens of thousands of publications. The GO Consortium regularly publishes updates and developments [as the Gene Ontology Consortium](https://pubmed.ncbi.nlm.nih.gov/?term=Gene+Ontology+Consortium%5BCorporate+Author%5D).  For the most recent publications, please see [our citation policy](https://geneontology.org/docs/go-citation-policy/).

### The GO consists of:

+ The **[GO ontology](/docs/ontology-documentation/)**: the logical structure describing the full complexity of the biology, comprising the 'classes' (often referred to as ‘terms’) describing the many different types of molecular functions (Molecular Function), the pathways carrying out different biological programs (Biological Process), and the cellular locations where these occur (Cellular Component). The GO is structured by relating each class to other classes using specific [relations](/docs/ontology-relations/).
+ The corpus of **[GO annotations](/docs/go-annotations/)**: the traceable (i. e., associated with scientific articles), [evidence-based](/docs/guide-go-evidence-codes/) statements relating a specific gene product to a specific ontology term. The set of all GO annotations associated with a gene provides a description of its biological role. As of October 2024, the GO includes experimental findings from over [180,000 published papers](https://geneontology.org/stats.html), representing over 1,000,000 experimentally-supported annotations. 

Together, the ontology and annotations provide a comprehensive model of biological systems.

<!--- if we keep, we must add links--->
In addition to this core knowledgebase of ontology + annotations, GO resources also include software to edit and perform logical reasoning over the ontologies, web access to the ontology and annotations, and analytical tools that use GO to support biomedical research.

### Uses of the GO and annotations
The GO knowledgebase plays an essential role in supporting biomedical research and has been cited in [tens of thousands of scientific studies](/docs/literature/). The most common use of GO annotations is for interpretation of large-scale molecular biology experiments, to gain insight into the structure, function, and dynamics of an organism. [**Gene Ontology enrichment analysis**](/docs/go-enrichment-analysis) is used to discover statistically significant similarities or differences under alternate controlled experimental conditions.

### The GO and the Alliance of Genome Resources

| --- | --- |
| <a href="https://www.alliancegenome.org/" target="_blank" style="border: 2px solid black;"><img src="/assets/alliance_logo_agr.583b15d.jpeg" alt="Alliance of Genome Resources, www.alliancegenome.org" width="500" /></a> | In 2016, the GO knowledgebase partnered with model organism databases (MODs) to form the [Alliance of Genome Resources](https://www.alliancegenome.org){:target="blank"} (the Alliance). The mission of the Alliance is to develop and maintain sustainable genome information resources that facilitate the use of diverse model organisms in understanding the genetic and genomic basis of human biology, health and disease. The partner MODs are: [Flybase](https://flybase.org/){:target="blank"}, [Mouse Genome Database (MGI)](http://www.informatics.jax.org/){:target="blank"}, [Rat Genome Database (RGD)](https://rgd.mcw.edu/){:target="blank"}, [*Saccharomyces* Genome Database(SGD)](https://www.yeastgenome.org/){:target="blank"}, [WormBase](https://wormbase.org){:target="blank"}, [Xenbase](https://www.xenbase.org/entry/){:target="blank"}, and [Zebrafish Information Network(ZFIN)](https://zfin.org/){:target="blank"}. |

### The GO and the Global Biodata Coalition 

| --- | --- |
| <a href="https://globalbiodata.org/" target="_blank" style="border: 2px solid black;"><img src="/assets/GCBR-Logo-RGB.jpg" alt="Global Biodata Coalition Resource, globalbiodata.org" width="500" /></a> | The [Global Biodata Coalition (GBC)](https://globalbiodata.org){:target="blank"}, founded in 2019, is a forum working to ensure the efficient management and growth of biodata infrastructure by coordinating funding at the global level. GO has been a Global Core Biodata Resource (GCBR) since the first set was selected in December 2022. Among other criteria, GCBR selection is based on the status of the resource as authoritative databases or knowledgebases that are used extensively, have a proven longevity, and provide free and open access to their high quality data. For more information and to view the full list of GCBRs, visit the [GBC Global Core Biodata Resource page](https://globalbiodata.org/scientific-activities/global-core-biodata-resources/){:target="blank"}. |

### Funding
The GO Consortium is funded by the National Human Genome Research Institute (US National Institutes of Health), grant number [HG012212](https://reporter.nih.gov/search/BqfmFvQGv0CWrEFOkzTp-w/project-details/10348001){:target="blank"}, with co-funding by NIGMS.

### Further reading about the Gene Ontology knowledgebase
For further guidance and reading, please see the following publications:

* [Ten Quick Tips for Using the Gene Ontology](http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003343){:target="blank"}
* [Gene Ontology Handbook](https://link.springer.com/book/10.1007%2F978-1-4939-3743-1){:target="blank"}
* [Over 150,000 papers in PubMed tagged as GO-related](https://www.ncbi.nlm.nih.gov/pubmed/?term=loprovGeneOntol[SB]){:target="blank"}
