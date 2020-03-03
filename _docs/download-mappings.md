---
title: Cross-references of external classification systems to GO
permalink: /docs/download-mappings/
redirect_from: /page/download-mappings
---

# Cross-references to external classification systems
Many Gene Ontology terms are cross-referenced to corresponding concepts from a number of external vocabularies, including Enzyme Commission numbers, KEGG, Reactome Pathways, and Wikipedia. Please report any errors or suggest alternatives to the [GO helpdesk](http://help.geneontology.org/). 

## Using and citing cross-references and mappings

If you have used a mapping in a publication or presentation, please ensure that you cite both the GO project and the source of the mapping (detailed below). See the [GO citation guide](/docs/go-citation-policy/) for citing the GO project.

## Cross-references format

+ Header describing the date generated and the GO release used, for example: 

     `  ! Generated on 2018-10-05T08:40Z from the ontology 'go' with data version: 'releases/2017-03-31' `

+ Each cross-reference is on a different line, in the format: 

     `  database:term identifier (id/name) > GO:GO term name ; GO:id`
  
     For example:
  
     `  EC:1.1.1.1 > GO:alcohol dehydrogenase (NAD) activity ; GO:0004022`

 + Cross-references to GO mappings can be many-to-many. Each cross-reference is on a separate line of the file.

## Mappings file directory

Direct access to the mappings file directory is available here: [http://current.geneontology.org/ontology/external2go/](http://current.geneontology.org/ontology/external2go/)

## Cross-references files maintained by the GO Consortium

Those cross-references are maintained by GO editors. Please report issues in the [GO GitHub tracker](https://github.com/geneontology/go-ontology/issues/new){:target="blank"}. 

|Mapping |Direct access to file|
|--------|---------|
|**Enzyme Commission (EC) enzyme numbers** <br>[Enzyme Commission](https://www.qmul.ac.uk/sbcs/iubmb/){:target="blank"}; contact: [GO Ontology editors](mailto:go-ontology@lists.stanford.edu) <br>Citation: Hill DP, Davis AP, Richardson JE, Corradi JP, Ringwald M, Eppig JT, Blake JA. Program description: Strategies for biological annotation of mammalian systems: implementing gene ontologies in mouse genome informatics. Genomics. May 2001;74(1):121–8. <br>[ [PMID:11374909](http://www.ncbi.nlm.nih.gov/pubmed/11374909){:target="blank"} \| [doi:10.1006/geno.2001.6513](http://dx.doi.org/10.1006/geno.2001.6513){:target="blank"} ]|	[ec2go](http://geneontology.org/external2go/ec2go)|
|**EAWAG-BBD enzyme IDs**<br> [Swiss Federal Institute of Aquatic Science and Technology Biocatalysis/Biodegradation Database (EAWAG-BBD)](http://eawag-bbd.ethz.ch/aboutBBD.html){:target="blank"}|[um-bbd_enzymeid2go](http://geneontology.org/external2go/um-bbd_enzymeid2go)|
|**EAWAG-BBD pathway IDs**<br> [Swiss Federal Institute of Aquatic Science and Technology Biocatalysis/Biodegradation Database (EAWAG-BBD)](http://eawag-bbd.ethz.ch/aboutBBD.html){:target="blank"}|[um-bbd_pathwayid2go](http://geneontology.org/external2go/um-bbd_pathwayid2go)|
|**EAWAG-BBD reaction IDs**<br> [Swiss Federal Institute of Aquatic Science and Technology Biocatalysis/Biodegradation Database (EAWAG-BBD)](http://eawag-bbd.ethz.ch/aboutBBD.html){:target="blank"}| no link <!--[txt](http://geneontology.org/external2go/um-bbd_reactionid2go)-->|
|**KEGG pathways and reactions**<br> [Kyoto Encyclopaedia of Genes and Genomes](http://www.genome.jp/kegg/){:target="blank"} |[kegg_reaction2go](http://geneontology.org/external2go/kegg_reaction2go)|
|**MetaCyc pathways and reactions**<br>  [MetaCyc](http://metacyc.org/){:target="blank"}|[metacyc2go](http://geneontology.org/external2go/metacyc2go)|
|**Reactome events and catalyst activities**<br> [Reactome](http://www.reactome.org/){:target="blank"}| [reactome2go](http://geneontology.org/external2go/reactome2go)|
|**Rhea Annotated Reactions Database**<br> [Rhea](http://www.ebi.ac.uk/rhea/){:target="blank"}|[rhea2go](http://geneontology.org/external2go/rhea2go)|


## Cross-references files maintained by external groups

Note: Those files are regenerated during the bi-monthly (UniProtKB-GOA release)[https://www.ebi.ac.uk/GOA/]{:target="blank"}. Please report issues in the [GO GitHub tracker](https://github.com/geneontology/go-annotation/issues/new).

|Mapping |Direct access to file|
|--------|---------|
|**HAMAP families** <br>[High-Quality Automated and Manual Annotation of Microbial Proteomes (HAMAP)](http://www.expasy.org/sprot/hamap/){:target="blank"}<br> *Maintainted by the UniProtKB team* <br> [PMID:18849571](http://www.ncbi.nlm.nih.gov/pubmed/18849571){:target="blank"} | [hamap2go](http://geneontology.org/external2go/hamap2go) |
|**InterPro protein families, domains and functional sites**<br>[InterPro](http://www.ebi.ac.uk/interpro/){:target="blank"} <br>*Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:18940856](http://www.ncbi.nlm.nih.gov/pubmed/18940856){:target="blank"} |[interpro2go](http://geneontology.org/external2go/interpro2go)|
|**Pfam domains**<br> [Pfam](http://pfam.xfam.org/){:target="blank"} <br>*Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:18940856](http://www.ncbi.nlm.nih.gov/pubmed/18940856){:target="blank"}|[pfam2go](http://geneontology.org/external2go/pfam2go)|
|**PIRSF protein superfamilies**<br> [PIRSF](http://pir.georgetown.edu/pirwww/dbinfo/pirsf.shtml){:target="blank"} <br>*Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:18940856]|[pirsf2go](http://geneontology.org/external2go/pirsf2go)|
|**PRINTS domains**<br> [PRINTS](http://www.bioinf.manchester.ac.uk/dbbrowser/PRINTS/){:target="blank"}<br>*Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:18940856](http://www.ncbi.nlm.nih.gov/pubmed/18940856){:target="blank"} |[pirsf2go](http://geneontology.org/external2go/pirsf2go)|
|**ProDom domains** <br> [ProDom](http://prodom.prabi.fr/prodom/current/html/home.php){:target="blank"}<br>*Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:18940856](http://www.ncbi.nlm.nih.gov/pubmed/18940856){:target="blank"} |[prodom2go](http://geneontology.org/external2go/prodom2go)|
|**ProSite domains**<br> [ProSite](http://www.expasy.ch/prosite/){:target="blank"} <br>*Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:18940856](http://www.ncbi.nlm.nih.gov/pubmed/18940856){:target="blank"} |[prosite2go](http://geneontology.org/external2go/prosite2go)|
|**Rfam RNA families**<br> [Rfam](http://rfam.xfam.org/){:target="blank"}<br>|[rfam2go](http://geneontology.org/external2go/rfam2go)|
|**SMART domains**<br> [SMART](http://smart.embl-heidelberg.de/){:target="blank"} <br> *Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:29040681](http://www.ncbi.nlm.nih.gov/pubmed/29040681){:target="blank"} |[smart2go](http://geneontology.org/external2go/smart2go)|
|**UniProt Knowledgebase**<br> Mapping of GO terms to UniProt Knowledgebase keywords. <br>*Maintainted by the UniProtKB and UniProtKB-GOA teams* <br> [PMID:25378336](https://www.ncbi.nlm.nih.gov/pubmed/25378336){:target="blank"} |[uniprotkb_kw2go](http://geneontology.org/external2go/uniprotkb_kw2go)|
|**UniProt subcellular location**<br> [UniProt](http://www.uniprot.org/){:target="blank"} <br>*Maintainted by the UniProtKB and UniProtKB-GOA teams*  <br>[PMID:25378336](https://www.ncbi.nlm.nih.gov/pubmed/25378336){:target="blank"} |	[uniprotkb_sl2go](http://geneontology.org/external2go/uniprotkb_sl2go)|

