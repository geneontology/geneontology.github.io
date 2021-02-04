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

     `  ! Generated on 2018-10-05T08:40Z from the ontology 'go' with data version: 'releases/YYYY-MM-DD' `

+ Each cross-reference is on a different line, in the format: 

     `  database:term identifier (id/name) > GO:GO term name ; GO:id`
  
     For example:
  
     `  EC:1.1.1.1 > GO:alcohol dehydrogenase (NAD) activity ; GO:0004022`

 +Note that cross-references to GO mappings can be many-to-many. 

## Mappings file directory

Direct access to the mappings file directory is available here: [http://current.geneontology.org/ontology/external2go/](http://current.geneontology.org/ontology/external2go/). Additional meta data about those external databases, prefixes and URLs can be retrieved from the GO dbxrefs available as both [ [JSON](http://current.geneontology.org/metadata/db-xrefs.json){:target="blank"} ] and [ [YAML](http://current.geneontology.org/metadata/db-xrefs.yaml){:target="blank"} ] files.

## Cross-references maintained by the GO Consortium

Those cross-references are maintained by GO editors. Please report issues in the [GO GitHub tracker](https://github.com/geneontology/go-ontology/issues/new){:target="blank"}. 

|**Mapping** |**Entities mapped**|**Direct access to mapping file**|
|--------|---------|---------|
|[EC: Enzyme Commission](https://www.qmul.ac.uk/sbcs/iubmb/){:target="blank"}| EC numbers |[ec2go](http://geneontology.org/external2go/ec2go)|
|[EAWAG-BBD](http://eawag-bbd.ethz.ch/aboutBBD.html){:target="blank"} | Enzymes |[um-bbd_enzymeid2go](http://geneontology.org/external2go/um-bbd_enzymeid2go)|
|[EAWAG-BBD](http://eawag-bbd.ethz.ch/aboutBBD.html){:target="blank"} | Pathways |[um-bbd_pathwayid2go](http://geneontology.org/external2go/um-bbd_pathwayid2go)|
|[EAWAG-BBD](http://eawag-bbd.ethz.ch/aboutBBD.html){:target="blank"} | Reactions |[um-bbd_reactionid2go](http://geneontology.org/external2go/um-bbd_reactionid2go)|
|[KEGG: Kyoto Encyclopaedia of Genes and Genomes ](http://www.genome.jp/kegg/){:target="blank"} | Pathways and reactions  |[kegg_reaction2go](http://geneontology.org/external2go/kegg_reaction2go)|
|[MetaCyc](http://metacyc.org/){:target="blank"} | Pathways and reactions |[metacyc2go](http://geneontology.org/external2go/metacyc2go)|
|[Reactome](http://www.reactome.org/){:target="blank"} | Events and catalyst activities |[reactome2go](http://geneontology.org/external2go/reactome2go)|
|[Rhea](https://www.rhea-db.org/){:target="blank"}|Biochemical reactions |[rhea2go](http://geneontology.org/external2go/rhea2go)|


## Cross-references maintained by external groups

Note: Those files are regenerated during the bi-monthly [UniProtKB-GOA release](https://www.ebi.ac.uk/GOA/){:target="blank"}. Please report issues in the [GO GitHub tracker](https://github.com/geneontology/go-annotation/issues/new).


|**Mapping** |**Direct access to mapping file**|
|--------|---------|
|[HAMAP: High-Quality Automated and Manual Annotation of Microbial Proteomes - Families](http://www.expasy.org/sprot/hamap/){:target="blank"} <br> *Maintainted by the [UniProtKB](https://www.uniprot.org/){:target="blank"} team* <br> [PMID:18849571](http://www.ncbi.nlm.nih.gov/pubmed/18849571){:target="blank"} |[hamap2go](http://geneontology.org/external2go/hamap2go) |
|[InterPro - Protein families, domains and functional sites](http://www.ebi.ac.uk/interpro/){:target="blank"} <br>*Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:18940856](http://www.ncbi.nlm.nih.gov/pubmed/18940856){:target="blank"} |[interpro2go](http://geneontology.org/external2go/interpro2go)|
|[Pfam domains](http://pfam.xfam.org/){:target="blank"} <br>*Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:18940856](http://www.ncbi.nlm.nih.gov/pubmed/18940856){:target="blank"}|[pfam2go](http://geneontology.org/external2go/pfam2go)|
|[PIRSF - Protein superfamilies](http://pir.georgetown.edu/pirwww/dbinfo/pirsf.shtml){:target="blank"} <br>*Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:18940856](http://www.ncbi.nlm.nih.gov/pubmed/18940856){:target="blank"}|[pirsf2go](http://geneontology.org/external2go/pirsf2go)|
|[PRINTS - Domains](http://www.bioinf.manchester.ac.uk/dbbrowser/PRINTS/){:target="blank"}<br>*Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:18940856](http://www.ncbi.nlm.nih.gov/pubmed/18940856){:target="blank"} |[pirsf2go](http://geneontology.org/external2go/pirsf2go)|
|[ProDom - Domains](http://prodom.prabi.fr/prodom/current/html/home.php){:target="blank"} <br>*Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:18940856](http://www.ncbi.nlm.nih.gov/pubmed/18940856){:target="blank"} |[prodom2go](http://geneontology.org/external2go/prodom2go)|
|[ProSite - Domains](http://www.expasy.ch/prosite/){:target="blank"}<br>*Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:18940856](http://www.ncbi.nlm.nih.gov/pubmed/18940856){:target="blank"} |[prosite2go](http://geneontology.org/external2go/prosite2go)|
|[Rfam - RNA families](http://rfam.xfam.org/){:target="blank"}<br>|[rfam2go](http://geneontology.org/external2go/rfam2go)|
|[SMART - Domains](http://smart.embl-heidelberg.de/){:target="blank"}<br> *Maintainted by the [InterPro](http://www.ebi.ac.uk/interpro/) team* <br>[PMID:29040681](http://www.ncbi.nlm.nih.gov/pubmed/29040681){:target="blank"} |[smart2go](http://geneontology.org/external2go/smart2go)|
|[UniProt Keywords](https://www.uniprot.org/keywords/)<br>Mapping of GO terms to UniProt Knowledgebase keywords. <br>*Maintainted by the [UniProt](http://www.uniprot.org/){:target="blank"} and [UniProtKB-GOA](https://www.ebi.ac.uk/GOA/){:target="blank"}* <br> [PMID:25378336](https://www.ncbi.nlm.nih.gov/pubmed/25378336){:target="blank"} |[uniprotkb_kw2go](http://geneontology.org/external2go/uniprotkb_kw2go)|
|[UniProt Subcellular location](https://www.uniprot.org/locations/)<br> Mapping of GO terms to UniProt Subcellular location terms. <br>*Maintainted by the [UniProt](http://www.uniprot.org/){:target="blank"} and [UniProtKB-GOA](https://www.ebi.ac.uk/GOA/)*{:target="blank"}<br>[PMID:25378336](https://www.ncbi.nlm.nih.gov/pubmed/25378336){:target="blank"} |[uniprotkb_sl2go](http://geneontology.org/external2go/uniprotkb_sl2go)|
|[UniRules](https://www.uniprot.org/unirule/)<br> Mapping of GO terms to UniProt Subcellular location terms. <br>*Maintainted by the [UniProt](http://www.uniprot.org/){:target="blank"} team* |[unirule2go](http://geneontology.org/external2go/unirule2go)|


## Archived cross-references

|**Mapping** |**Last update** |**Direct access to mapping file**|
|--------|------------|---------|
|**COG - Functional categories** <br>[Clusters of Orthologous Groups (COG)](https://www.ncbi.nlm.nih.gov/COG/index.html){:target="blank"}<br> *Constructed by Michael Ashburner and Jane Lomax* |June 2004 |	cog2go|
|**EGAD: Expressed Gene Anatomy Database** <br> *Constructed by Michael Ashburner* | Oct 2000 | egad2go|
|**GenProtEC: E. coli Genome and Proteome functional categories** <br>*Constructed by Heather Butler and Michael Ashburner*|Dec 2000 	|genprotec2go|
|**TIGRFAM: JCVI protein families**<br>[JCVI (TIGRFAM) protein families](https://www.jcvi.org/publications/tigrfams-protein-family-resource-functional-identification-proteins){:target="blank"}<br>*Constructed by Michelle Gwinn and other TIGR staff*| NA |	tigrfams2go|
|**JCVI roles**<br>[JCVI roles](https://www.jcvi.org/){:target="blank"}<br>  *Constructed by Michael Ashburner*|Jan 2004 	| tigr2go|
|**MIPS FunCat**<br>[MIPS Functional Catalogue (FunCat)](http://mips.gsf.de/funcatDB/){:target="blank"}<br> *Constructed by Michael Ashburner and Midori Harris*|NA|	mips2go|
|**MultiFun cell function assignment schema classifications**<br>  *Constructed by Michael Ashburner, Jane Lomax and Margrethe Hauge Serres*|Dec 2005 |	multifun2go|
