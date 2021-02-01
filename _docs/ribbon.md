---
title: Gene Ontology Ribbon
permalink: /docs/ribbon
---

<style>
    .cell {
        border: 1px solid black; background-color: white; height: 15px; width: 15px; display: inline-block; vertical-align: sub;        
    }
</style>


# Gene Ontology Ribbon

> Want to try it now with your genes ? [Use the GO Ribbon sandbox](/ribbon.html).

---

## A visual summary of gene functions

The GO Ribbon is a graphical tool to quickly browse the GO annotations for a gene or a gene set. It provides a visual summary of the functions of a gene (resp. gene sets) by grouping the GO annotations with high level terms selected to represent a broad range of functions (see [slims/subsets]("/docs/go-subset-guide/")). 

The color gradient of each high level term (slim) varies from white <span class="cell">&nbsp;</span> to deep blue <span class="cell" style="background-color: rgb(24,73,180)">&nbsp;</span> for increasing values. By default the color gradient informs on the number of available annotations for each high level term. A toggle allows to change the color gradient to inform instead on the number of distinct terms, giving a better approximate of the diversity of functions for the gene in that branch of the ontology.

To further investigate the GO annotations grouped by a high level term, colored cells are clickable and will display the associated table of annotations as shown below:

![ribbon illustration](/assets/ribbon-illustration.png)


## Detailed annotations table

The table of GO annotations shown above is similar to the one provided by our general browsing tool [AmiGO](http://amigo.geneontology.org/amigo/search/annotation){:target="blank"} but the ribbon table groups annotations by GO term and qualifier to provide a simpler display.

Each association between the gene and the GO term is supported by a reference (usually a PMID article) and an evidence code from [ECO](http://www.obofoundry.org/ontology/eco.html){:target="blank"} represented by a [3 letter codes](/docs/guide-go-evidence-codes/) (eg. IBA, IDA, ISS, etc) which informs for instance if the function was derived from an experiment or phylogenetic inference.

In addition, GO annotations sometimes inform when a gene can **not** exhibit a specific function. This is shown in a similar way in both AmiGO and the ribbon by adding the [NOT qualifier](/docs/go-annotations/#the-not-qualifier) tag in front of the GO term:

![ribbon not qualifier](/assets/ribbon-not-qualifier.png)


## GO Ribbon with gene sets
The summaries provided by the GO Ribbon can be used to quickly highlight the similarities and differences between genes of a gene set. These gene sets generally come from a:
* set of differentially expressed genes
* set of interactors
* set of orthologs

The visual summary of a gene set through the Ribbon can help identify shared functions or sub clusters of genes exhibiting different behaviors.


## GO Ribbon and GO Enrichment
It's however important to remind that the GO Ribbon is designed to provide a visual summary and a simpler way to navigate GO annotations. For gene sets, the GO Ribbon will show the functions shared between genes, but it will not inform on the statistical relevance (over / under representation) of such functions in the gene set. Statistical significance and bias of biological functions have to be examined through [over representation tests and enrichment analysis](/docs/go-enrichment-analysis/). 

As an example, the [GO COVID-19 page](/covid-19.html) illustrates how both the Ribbon and enrichment analysis can be used together.


## Authorized IDs
The gene IDs generally recognized within GO are the ones provided by the Model Organism Database (MODs) in their [GPI file](/docs/gene-product-information-gpi-format/).

As of July 2020, here are some examples of IDs:
* [MGD](http://www.informatics.jax.org/){:target="blank"}: MGI:1099800
* [RGD](https://rgd.mcw.edu/){:target="blank"}: RGD:3017
* [SGD](https://www.yeastgenome.org/){:target="blank"}: SGD:S000004328
* [WB](https://wormbase.org/){:target="blank"}: WB:WBGene00019240
* [FB](https://flybase.org/){:target="blank"}: FB:FBgn0035265
* [ZFIN](https://zfin.org/){:target="blank"}: ZFIN:ZDB-GENE-040113-2
* [Homo sapiens](https://www.uniprot.org/){:target="blank"}: UniProtKB:Q9BYF1

For additional reference, GPI files can be downloaded from the GO release at [http://current.geneontology.org/annotations/](http://current.geneontology.org/annotations/index.html){:target="blank"}


## Generic Ribbon, other usages and data model
The Ribbon has been designed as a generic and easy-to-integrate web component. As such, it can represents a variety of data types and be integrated in any website independently of the technologies/frameworks used.

The Ribbon is used for instance within the [Alliance of Genome Resources](https://www.alliancegenome.org/){:target="blank"} to display both GO, Disease and Expression data.

The data provided to the ribbon has to follow a certain JSON schema and a basic example is shown below. It is composed of two top level fields "categories" and "subjects". "categories" contains the data to represent the structure of the ribbon strips (eg how many categories, how many groups/terms under each category) while the "subjects" field contains the number of annotations for each gene and each of the terms described in "categories":

```json
{
    "categories": [
        {
            "id": "cat1-id",
            "label": "cat1-label",
            "description": "",
            "groups": [
                {
                    "id": "cat1-gp1-id",
                    "label": "cat1-gp1-label",
                    "description": "",
                    "type": "All/Term/Other"
                },
                ...
            ]
        }
    ],

    "subjects": [

    ]
}
```

### Ribbon Data Model Examples
* [GO Ribbon of gene HGNC:11998](https://api.geneontology.org/api/ontology/ribbon/?subset=goslim_agr&subject=HGNC:11998&exclude_PB=true&exclude_IBA=false&cross_aspect=false)

* [Disease Ribbon of gene HGNC:11998](https://www.alliancegenome.org/api/gene/*/disease-ribbon-summary?geneID=HGNC:11998)

* [Expression Ribbon of gene HGNC:11998](https://www.alliancegenome.org/api/expression/ribbon-summary?geneID=HGNC:11998)


## Under the hood

The full GO Ribbon web component is available on [ [GitHub](https://github.com/geneontology/wc-ribbon/tree/master/wc-go-ribbon){:target="blank"} ] and [ [NPM](#) ]. It includes all the components needed to display and interact the ribbon strips and table and is pre-configured to fetch data from the GO API. This version can easily be integrated in any website or framework and additional information are available on GitHub.

Subparts of the ribbon can also be integrated independently:
* Ribbon strips: [ [GitHub](https://github.com/geneontology/wc-ribbon/tree/master/wc-ribbon-strips){:target="blank"} ] [ [NPM](https://www.npmjs.com/package/wc-ribbon-strips){:target="blank"} ]: the top part containing the high level term labels as well as the colored cells representing the annotation volume of the genes of interest
* Ribbon table: [ [GitHub](https://github.com/geneontology/wc-ribbon/tree/master/wc-ribbon-table){:target="blank"} ] [ [NPM](https://www.npmjs.com/package/wc-ribbon-table){:target="blank"} ] : the annotation table, which opens upon clicking one of the colored cell
* Ribbon spinner: [ [GitHub](https://github.com/geneontology/wc-ribbon/tree/master/wc-spinner){:target="blank"} ]: generic spinner to notify of loading / blocking process

Code available on [GitHub](https://github.com/geneontology/wc-ribbon)

Powered by the GO API [http://api.geneontology.org/api](http://api.geneontology.org/api)

