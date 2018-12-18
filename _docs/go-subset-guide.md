---
title: Guide to GO Subsets
permalink: /docs/go-subset-guide/
redirect_from: /page/go-subset-guide
---

# Guide to GO Subsets
## About subsets
##### What are GO subsets?

- GO subsets (also known as GO slims) are cut-down versions of the GO containing a subset of the terms. They are specified by tags within the ontology that indicate if a given term is a member of a particular subset.

##### Why might a GO subset be useful?

- GO subsets are particularly useful for providing an overview of the range of functions and processes found in a given clade or organism's genome. Given a coarse grained view of the ontology content without the detail of the specific fine-grained terms, these slims can offer an overall sense of the key biological functions that are vital to an organism. For example, the limited number of opsin genes in bedbugs, or the abundance of kinins in ticks.
- GO subsets are also useful for addressing specific research needs in particular areas of biology. For instance, if a researcher is only interested in a particular branch of biology, perhaps aging or fruit ripening, they have no need for terms from other branches and can focus solely on those terms under one branch of the ontology.
- GO subsets can also be useful for simplifying searches or annotation processes. By reducing the number of choices a user is presented with the overall process can be  expedited.

##### Who can create a subset?
- GO provides a generic subset which, like the GO itself, is not species-specific, and which should be suitable for most purposes. In addition, many model organism-specific subsets have been created by [GO consortium members](/docs/go-consortium/) and are available for download as listed below.
- Alternatively, users and user communities can create their own GO subsets. Please email the [GO helpdesk](/docs/downloads/) for more information about creating and submitting your GO subsets.

##### How are GO subsets maintained?
- It is up to the people who have created a GO subset to maintain it or not maintain it, if they intend to keep it for reasons of reproducibility. If the developers of a GO subset want to keep it current with the GO they will need to periodically review GO for new terms and other changes.

##### Related tools
- __Map2Slim option in OWLTools__ Given a GO subset, a current ontology, and specific gene product associations to precise terms from this current ontology, the Map2Slim script will map these term associations up to their respective broader terms from the GO subset. This script is an option of OWLTools, and it can be used to either create a new gene associations file, which contains the same annotations but made to the subset terms; or in count-mode, in which case it will give distinct gene product counts for each subset term. Background information and details on how to download, install, and implement OWLTools, as well as instructions on how to run the Map2Slim script are available from the <a href="https://github.com/owlcollab/owltools/wiki/Map2Slim">OWLTools Wiki</a>.

- __On the web__ Similarly, there are a couple of online tools that may be of use. The first is the [Princeton slimming tool](http://go.princeton.edu/), the second is the legacy [AmiGO slimmer](http://amigo1.geneontology.org/cgi-bin/amigo/slimmer). It should be noted that online tools do often contain limitations and timeouts.

##### GO "*__Anti-slims__*"

For internal checking purposes, GO maintains two "anti-slims", terms to which annotations should not be made. "Anti-slim" terms should never be used when creating a subset.


|**Subset name**|**Usage** |**File name** |**OBO format** |**OWL format** |**json format** |**yaml format** |
|------------------|----------|----------|----------|----------|----------|----------|
|**Do not annotate**|The set of high level terms that are useful for grouping, but should have no direct annotations| gocheck_do_not_annotate |[obo](http://current.geneontology.org/ontology/subsets/goslim_gocheck_do_not_annotate.obo)| [owl](http://current.geneontology.org/ontology/subsets/goslim_gocheck_do_not_annotate.owl) |[json](http://current.geneontology.org/ontology/subsets/goslim_gocheck_do_not_annotate.json) |[yaml](http://current.geneontology.org/ontology/subsets/goslim_gocheck_do_not_annotate.yaml)|
|**Do not manually annotate**|The set of high level terms that are useful for grouping, but should have no direct annotations except from automated tools| gocheck_do_not_manually_annotate|[obo](http://current.geneontology.org/ontology/subsets/goslim_gocheck_do_not_manually_annotate.obo)|[owl](http://current.geneontology.org/ontology/subsets/goslim_gocheck_do_not_manually_annotate.owl) |[json](http://current.geneontology.org/ontology/subsets/goslim_gocheck_do_not_manually_annotate.json) |[yaml](http://current.geneontology.org/ontology/subsets/goslim_gocheck_do_not_manually_annotate.yaml)|


## GO subsets download

The GO subsets in this list are maintained as part of the GO flat file. The files available below for download are generated by script from that file.


|**Subset name**|**Maintainer**|**File name**|**OBO format**|**OWL format**|**json format**|**yaml format**|
|------------------|-------------|-------------|-------------|------------|-------------|------------|
|**GO slim AGR subset**|Developed by GO Consortium for the [Alliance of Genomes Resources](https://www.alliancegenome.org/)|goslim_agr  |[obo](http://current.geneontology.org/ontology/subsets/goslim_agr.obo)|[owl](http://current.geneontology.org/ontology/subsets/goslim_agr.owl) |[json](http://current.geneontology.org/ontology/subsets/goslim_agr.json) |[yaml](http://current.geneontology.org/ontology/subsets/goslim_agr.yaml)|
|**Generic GO subset**|GO Consortium |goslim_generic|[obo](http://current.geneontology.org/ontology/subsets/goslim_generic.obo)| [owl](http://current.geneontology.org/ontology/subsets/goslim_generic.owl) |[json](http://current.geneontology.org/ontology/subsets/goslim_generic.json) |[yaml](http://current.geneontology.org/ontology/subsets/goslim_generic.yaml)|
|**Aspergillus subset**|[Aspergillus Genome Data](http://www.aspgd.org/)|goslim_aspergillus|[obo](http://current.geneontology.org/ontology/subsets/goslim_aspergillus.obo)|[owl](http://current.geneontology.org/ontology/subsets/goslim_aspergillus.owl) |[json](http://current.geneontology.org/ontology/subsets/goslim_aspergillus.json) |[yaml](http://current.geneontology.org/ontology/subsets/goslim_aspergillus.yaml)|
|**Candida albicans subset**|[Candida Genome Database](http://www.candidagenome.org/)|goslim_candida|[obo](http://current.geneontology.org/ontology/subsets/goslim_candida.obo)|[owl](http://current.geneontology.org/ontology/subsets/goslim_candida.owl) |[json](http://current.geneontology.org/ontology/subsets/goslim_candida.json) |[yaml](http://current.geneontology.org/ontology/subsets/goslim_candida.yaml)|
|**Chembl Drug Target subset**|[ChEMBL](https://www.ebi.ac.uk/chembl/)|goslim_chembl|[obo](http://current.geneontology.org/ontology/subsets/goslim_chembl.obo)| [owl](http://current.geneontology.org/ontology/subsets/goslim_chembl.owl) |[json](http://current.geneontology.org/ontology/subsets/goslim_chembl.json) |[yaml](http://current.geneontology.org/ontology/subsets/goslim_chembl.yaml)|
|**Metagenomics subset**|[InterPro](http://www.ebi.ac.uk/interpro/) group|goslim_metagenomic|[obo](http://current.geneontology.org/ontology/subsets/goslim_metagenomics.obo)| [owl](http://current.geneontology.org/ontology/subsets/goslim_metagenomics.owl) |[json](http://current.geneontology.org/ontology/subsets/goslim_metagenomics.json) |[yaml](http://current.geneontology.org/ontology/subsets/goslim_metagenomics.yaml)|
|**Mouse GO slim**|[Mouse Genome Informatics](http://www.informatics.jax.org/)|goslim_mouse|[obo](http://current.geneontology.org/ontology/subsets/goslim_mouse.obo)|[owl](http://current.geneontology.org/ontology/subsets/goslim_mouse.owl) |[json](http://current.geneontology.org/ontology/subsets/goslim_mouse.json) |[yaml](http://current.geneontology.org/ontology/subsets/goslim_mouse.yaml)|
|**Plant subset**|[The Arabidopsis Information Resource](https://www.arabidopsis.org/)|goslim_plant|[obo](http://current.geneontology.org/ontology/subsets/goslim_plant.obo)|[owl](http://current.geneontology.org/ontology/subsets/goslim_plant.owl) |[json](http://current.geneontology.org/ontology/subsets/goslim_plant.json) |[yaml](http://current.geneontology.org/ontology/subsets/goslim_plant.yaml)|
|**Protein Information Resource subset**|[PIR](https://pir.georgetown.edu/)|goslim_pir|[obo](http://current.geneontology.org/ontology/subsets/goslim_pir.obo)|[owl](http://current.geneontology.org/ontology/subsets/goslim_pir.owl) |[json](http://current.geneontology.org/ontology/subsets/goslim_pir.json) | [yaml](http://current.geneontology.org/ontology/subsets/goslim_pir.yaml)|
|**Schizosaccharomyces pombe subset**|[PomBase](https://www.pombase.org/)|goslim_pombe|[obo](http://current.geneontology.org/ontology/subsets/goslim_pombe.obo)| [owl](http://current.geneontology.org/ontology/subsets/goslim_pombe.owl) |[json](http://current.geneontology.org/ontology/subsets/goslim_pombe.json) |[yaml](http://current.geneontology.org/ontology/subsets/goslim_pombe.yaml)|
|**Yeast subset**|[Saccharomyces Genome Database](https://www.yeastgenome.org/)|goslim_yeast|[obo](http://current.geneontology.org/ontology/subsets/goslim_yeast.obo)|[owl](http://current.geneontology.org/ontology/subsets/goslim_yeast.owl) |[json](http://current.geneontology.org/ontology/subsets/goslim_yeast.json) |[yaml](http://current.geneontology.org/ontology/subsets/goslim_yeast.yaml)|
