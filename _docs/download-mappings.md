---
title: Cross-references of external classification systems to GO
permalink: /docs/download-mappings/
redirect_from: /page/download-mappings
---

# Cross-references to external classification systems

Direct access to the mappings file directory is available here: [https://current.geneontology.org/ontology/external2go/](https://current.geneontology.org/ontology/external2go/).

External classification systems mapped to GO terms: 

|**Database resource** |**Scope**|**Relevant GO aspect(s)**|**Direct access to mapping file(s)**|
|--------|---------|---------|---------|
|[Enzyme Commission (EC)](https://enzyme.expasy.org/){:target="blank"}| Reactions| Molecular Function |[ec2go](https://geneontology.org/external2go/ec2go)|
|[KEGG: Kyoto Encyclopaedia of Genes and Genomes ](http://www.genome.jp/kegg/){:target="blank"} | Reactions |Molecular Function|[kegg_reaction2go](https://geneontology.org/external2go/kegg_reaction2go)|
|[HAMAP](http://www.expasy.org/sprot/hamap/){:target="blank"} | High-Quality Automated and Manual Annotation of Microbial Proteomes |All aspects | [hamap2go](https://geneontology.org/external2go/hamap2go) |
|[InterPro](http://www.ebi.ac.uk/interpro/){:target="blank"} | Protein families, domains and functional sites. Ecnompasses contributing databases: [PantherDB](https://www.pantherdb.org/), [PFAM](http://pfam.xfam.org/), [PIRSF](https://proteininformationresource.org/pirsf/), [PRINTS], [PROSITE](https://prosite.expasy.org/) and [SMART](https://smart.embl-heidelberg.de/) |All aspects | [interpro2go](https://geneontology.org/external2go/interpro2go)|
|[MetaCyc](http://metacyc.org/){:target="blank"} | Pathways and reactions |Molecular Function & Biological Process | [metacyc2go](https://geneontology.org/external2go/metacyc2go)|
|[Reactome](http://www.reactome.org/){:target="blank"} | Events and catalyst activities|Molecular Function  |[reactome2go](https://geneontology.org/external2go/reactome2go)|
|[Rfam - RNA families](http://rfam.xfam.org/){:target="blank"}<br>| RNA entities| All aspects| [rfam2go](https://geneontology.org/external2go/rfam2go)|
|[Rhea](https://www.rhea-db.org/){:target="blank"}| Reactions | Molecular Function|[rhea2go](https://geneontology.org/external2go/rhea2go)|
|[UM-BBD](http://eawag-bbd.ethz.ch/aboutBBD.html){:target="blank"} | Biocatalysis/Biodegradation Database: enzymes, reactions and pathways |Molecular Function  & Biological Process|[um-bbd_enzymeid2go](https://geneontology.org/external2go/um-bbd_enzymeid2go)<br>[um-bbd_reactionid2go](https://geneontology.org/external2go/um-bbd_reactionid2go)<br>[um-bbd_pathwayid2go](https://geneontology.org/external2go/um-bbd_pathwayid2go)  |
|[UniProt Keywords](https://www.uniprot.org/keywords/){:target="blank"}| Mapping of GO terms to UniProt Knowledgebase keywords. | All aspects| [uniprotkb_kw2go](https://geneontology.org/external2go/uniprotkb_kw2go)|
|[UniProt Subcellular location](https://www.uniprot.org/locations/){:target="blank"}| Mapping of GO terms to UniProt Subcellular location terms | Cellular Component| [uniprotkb_sl2go](https://geneontology.org/external2go/uniprotkb_sl2go)|
|[UniRules](https://www.uniprot.org/help/unirule){:target="blank"}|UniProt Automatic Annotation pipeline| All aspects| [unirule2go](https://geneontology.org/external2go/unirule2go)|
[Wikipedia](https://www.wikipedia.org/){:target="blank"} | General | All aspects | [wikipedia2go](https://current.geneontology.org/ontology/external2go/wikipedia2go)


## Cross-references files format

+ Header describing the date generated and the GO release used, for example:

     `! Generated on 2018-10-05T08:40Z from the ontology 'go' with data version: 'releases/YYYY-MM-DD'`

+ Each cross-reference is on a different line, in the format:

     `database:term identifier (id/name) > GO:GO term name ; GO:id`

     For example: `EC:1.1.1.1 > GO:alcohol dehydrogenase (NAD+) activity ; GO:0004022`

## Mapping types & cardinality
+ Certain types of cross-references to GO mappings can be many-to-many.
+ Cross-references can be one of 4 types: exact, broad, narrow general database cross references
     + **Exact database cross references**: GO and cross reference object have the same meaning.
          + Cardinality: 1:1 
     + **Narrow database cross references**: The concept represented by the cross-reference represents a *narrower* or more specific concept than the GO term.
          + Cardinality: 1 GO:n narrow cross-references
     + **Broad database cross references**: The concept represented by the cross-reference represents a *broader* or more general concept than the GO term.
          + Cardinality: n:n 
     + **Related database cross references**: The concept represented by the cross-reference is broad in some aspect, narrow in another. 
          + Cardinality: n:n 
+ Cross references deprecated in the source database should not be included in GO. 

## Using and citing cross-references and mappings

If you have used a mapping in a publication or presentation, please ensure that you cite both the GO knowledgebase and the source of the mapping (detailed below). See the [GO citation guide](/docs/go-citation-policy/) for citing the GO knowledgebase.


