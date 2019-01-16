---
title: Guide to GO Subsets
permalink: /docs/go-subset-guide/
redirect_from: /page/go-subset-guide
---

# Guide to GO subsets
## About subsets
##### What are GO subsets?

- GO subsets (also known as GO slims) are cut-down versions of the GO containing a subset of the terms. They are specified by tags within the ontology that indicate if a given term is a member of a particular subset.

##### Why might a GO subset be useful?

- GO subsets are particularly useful for providing an overview of the range of functions and processes found in a given clade or organism's genome. Given a coarse grained view of the ontology content without the detail of the specific fine-grained terms, these slims can offer an overall sense of the key biological functions that are vital to an organism. For example, the limited number of opsin genes in bedbugs, or the abundance of kinins in ticks.
- GO subsets are also useful for addressing specific research needs in particular areas of biology. For instance, if a researcher is only interested in a particular branch of biology, perhaps aging or fruit ripening, they have no need for terms from other branches and can focus solely on those terms under one branch of the ontology.
- GO subsets can also be useful for simplifying searches or annotation processes. By reducing the number of choices a user is presented with the overall process can be  expedited.

##### Who can create a subset?
- GO provides a generic subset which, like the GO itself, is not species-specific, and which should be suitable for most purposes. In addition, many model organism-specific subsets have been created by [GO consortium members](/docs/go-consortium/) and are available for download as listed below.
- Alternatively, users and user communities can create their own GO subsets. Please contact the [GO helpdesk](/docs/help/) for more information about creating and submitting your GO subsets.

##### How are GO subsets maintained?
- It is up to the people who have created a GO subset to maintain it or not maintain it, if they intend to keep it for reasons of reproducibility. If the developers of a GO subset want to keep it current with the GO they will need to periodically review GO for new terms and other changes.

##### Related tools
- __Map2Slim option in OWLTools__ Given a GO subset, a current ontology, and specific gene product associations to precise terms from this current ontology, the Map2Slim script will map these term associations up to their respective broader terms from the GO subset. This script is an option of OWLTools, and it can be used to either create a new gene associations file, which contains the same annotations but made to the subset terms; or in count-mode, in which case it will give distinct gene product counts for each subset term. Background information and details on how to download, install, and implement OWLTools, as well as instructions on how to run the Map2Slim script are available from the <a href="https://github.com/owlcollab/owltools/wiki/Map2Slim">OWLTools Wiki</a>{:target="blank"} .

- __On the web__ Similarly, there are a couple of online tools that may be of use. The first is the [Princeton slimming tool](http://go.princeton.edu/){:target="blank"} , the second is the legacy [AmiGO slimmer](http://amigo1.geneontology.org/cgi-bin/amigo/slimmer){:target="blank"} . It should be noted that online tools do often contain limitations and timeouts.

##### GO "*__anti-slims__*"

For internal checking purposes, GO maintains two "anti-slims", terms to which annotations should not be made. "Anti-slim" terms should never be used when creating a subset.


|**Subset name**|**Usage** |**File name** |**OBO format** |**OWL format** |**json format** |**yaml format** |
|------------------|----------|----------|----------|----------|----------|----------|
|**Do not annotate**|The set of high level terms that are useful for grouping, but should have no direct annotations| gocheck_do_not_annotate |[obo](http://current.geneontology.org/ontology/subsets/gocheck_do_not_annotate.obo){:target="blank"} | [owl](http://current.geneontology.org/ontology/subsets/gocheck_do_not_annotate.owl){:target="blank"}  |[json](http://current.geneontology.org/ontology/subsets/gocheck_do_not_annotate.json){:target="blank"}  |[yaml](http://current.geneontology.org/ontology/subsets/gocheck_do_not_annotate.yaml){:target="blank"} |
|**Do not manually annotate**|The set of high level terms that are useful for grouping, but should have no direct annotations except from automated tools| gocheck_do_not_manually_annotate|[obo](http://current.geneontology.org/ontology/subsets/gocheck_do_not_manually_annotate.obo){:target="blank"} |[owl](http://current.geneontology.org/ontology/subsets/gocheck_do_not_manually_annotate.owl){:target="blank"}  |[json](http://current.geneontology.org/ontology/subsets/gocheck_do_not_manually_annotate.json){:target="blank"}  |[yaml](http://current.geneontology.org/ontology/subsets/gocheck_do_not_manually_annotate.yaml){:target="blank"} |


## GO subsets download

The GO subsets in this list are maintained as part of the GO flat file. The files available below for download are generated by script from that file.


|**Subset name**|**Maintainer**|**File name**|**OBO format**|**OWL format**|**json format**|**yaml format**|
|------------------|-------------|-------------|-------------|------------|-------------|------------|
|**GO slim AGR subset**|Developed by GO Consortium for the [Alliance of Genomes Resources](https://www.alliancegenome.org/){:target="blank"} |goslim_agr  |[obo](http://current.geneontology.org/ontology/subsets/goslim_agr.obo){:target="blank"} |[owl](http://current.geneontology.org/ontology/subsets/goslim_agr.owl){:target="blank"}  |[json](http://current.geneontology.org/ontology/subsets/goslim_agr.json){:target="blank"}  |[yaml](http://current.geneontology.org/ontology/subsets/goslim_agr.yaml){:target="blank"} |
|**Generic GO subset**|GO Consortium |goslim_generic|[obo](http://current.geneontology.org/ontology/subsets/goslim_generic.obo){:target="blank"} | [owl](http://current.geneontology.org/ontology/subsets/goslim_generic.owl){:target="blank"}  |[json](http://current.geneontology.org/ontology/subsets/goslim_generic.json){:target="blank"}  |[yaml](http://current.geneontology.org/ontology/subsets/goslim_generic.yaml){:target="blank"} |
|**Aspergillus subset**|[Aspergillus Genome Data](http://www.aspgd.org/){:target="blank"} |goslim_aspergillus|[obo](http://current.geneontology.org/ontology/subsets/goslim_aspergillus.obo){:target="blank"} |[owl](http://current.geneontology.org/ontology/subsets/goslim_aspergillus.owl){:target="blank"}  |[json](http://current.geneontology.org/ontology/subsets/goslim_aspergillus.json){:target="blank"}  |[yaml](http://current.geneontology.org/ontology/subsets/goslim_aspergillus.yaml){:target="blank"} |
|**Candida albicans subset**|[Candida Genome Database](http://www.candidagenome.org/){:target="blank"} |goslim_candida|[obo](http://current.geneontology.org/ontology/subsets/goslim_candida.obo){:target="blank"} |[owl](http://current.geneontology.org/ontology/subsets/goslim_candida.owl){:target="blank"}  |[json](http://current.geneontology.org/ontology/subsets/goslim_candida.json){:target="blank"}  |[yaml](http://current.geneontology.org/ontology/subsets/goslim_candida.yaml){:target="blank"} |
|**Chembl Drug Target subset**|[ChEMBL](https://www.ebi.ac.uk/chembl/){:target="blank"} |goslim_chembl|[obo](http://current.geneontology.org/ontology/subsets/goslim_chembl.obo){:target="blank"} | [owl](http://current.geneontology.org/ontology/subsets/goslim_chembl.owl){:target="blank"}  |[json](http://current.geneontology.org/ontology/subsets/goslim_chembl.json){:target="blank"}  |[yaml](http://current.geneontology.org/ontology/subsets/goslim_chembl.yaml){:target="blank"} |
|**Metagenomics subset**|[InterPro](http://www.ebi.ac.uk/interpro/){:target="blank"}  group|goslim_metagenomic|[obo](http://current.geneontology.org/ontology/subsets/goslim_metagenomics.obo){:target="blank"} | [owl](http://current.geneontology.org/ontology/subsets/goslim_metagenomics.owl){:target="blank"}  |[json](http://current.geneontology.org/ontology/subsets/goslim_metagenomics.json){:target="blank"}  |[yaml](http://current.geneontology.org/ontology/subsets/goslim_metagenomics.yaml){:target="blank"} |
|**Mouse GO slim**|[Mouse Genome Informatics](http://www.informatics.jax.org/){:target="blank"} |goslim_mouse|[obo](http://current.geneontology.org/ontology/subsets/goslim_mouse.obo){:target="blank"} |[owl](http://current.geneontology.org/ontology/subsets/goslim_mouse.owl){:target="blank"}  |[json](http://current.geneontology.org/ontology/subsets/goslim_mouse.json){:target="blank"}  |[yaml](http://current.geneontology.org/ontology/subsets/goslim_mouse.yaml){:target="blank"} |
|**Plant subset**|[The Arabidopsis Information Resource](https://www.arabidopsis.org/){:target="blank"} |goslim_plant|[obo](http://current.geneontology.org/ontology/subsets/goslim_plant.obo){:target="blank"} |[owl](http://current.geneontology.org/ontology/subsets/goslim_plant.owl){:target="blank"}  |[json](http://current.geneontology.org/ontology/subsets/goslim_plant.json){:target="blank"}  |[yaml](http://current.geneontology.org/ontology/subsets/goslim_plant.yaml){:target="blank"} |
|**Protein Information Resource subset**|[PIR](https://pir.georgetown.edu/){:target="blank"} |goslim_pir|[obo](http://current.geneontology.org/ontology/subsets/goslim_pir.obo){:target="blank"} |[owl](http://current.geneontology.org/ontology/subsets/goslim_pir.owl){:target="blank"}  |[json](http://current.geneontology.org/ontology/subsets/goslim_pir.json){:target="blank"}  | [yaml](http://current.geneontology.org/ontology/subsets/goslim_pir.yaml){:target="blank"} |
|**Schizosaccharomyces pombe subset**|[PomBase](https://www.pombase.org/){:target="blank"} |goslim_pombe|[obo](http://current.geneontology.org/ontology/subsets/goslim_pombe.obo){:target="blank"} | [owl](http://current.geneontology.org/ontology/subsets/goslim_pombe.owl){:target="blank"}  |[json](http://current.geneontology.org/ontology/subsets/goslim_pombe.json){:target="blank"}  |[yaml](http://current.geneontology.org/ontology/subsets/goslim_pombe.yaml){:target="blank"} |
|**Yeast subset**|[Saccharomyces Genome Database](https://www.yeastgenome.org/){:target="blank"} |goslim_yeast|[obo](http://current.geneontology.org/ontology/subsets/goslim_yeast.obo){:target="blank"} |[owl](http://current.geneontology.org/ontology/subsets/goslim_yeast.owl){:target="blank"}  |[json](http://current.geneontology.org/ontology/subsets/goslim_yeast.json){:target="blank"}  |[yaml](http://current.geneontology.org/ontology/subsets/goslim_yeast.yaml){:target="blank"} |
