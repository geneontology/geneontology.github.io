---
title: Contributing GO Annotations
permalink: /docs/contributing-to-go/
---

# Contributing GO Annotations
Most GO annotations are produced by members of the [GO Consortium](/docs/go-consortium/), but we also welcome annotations from the research community. 

## How to suggest revisions for existing annotations
Researchers who notice either missing or inaccurate annotations for a gene or a GO term can send this information to the GO ontology consortium, by either [contact the GO Helpdesk](http://help.geneontology.org/), or using the [GO-annotation GitHub site](https://github.com/geneontology/go-annotation/issues) to add suggestions. Information about how to create an account and use the GitHub repository can  be found [here](/docs/how-to-submit-requests/).

## How to contribute new GO annotations

Research groups who wish to generate GO annotations, for instance new annotations for genes of a species that is not currently annotated in  GO, annotating specific genes for a given biological research domain, can contribute these annotations to the GO database. 


### Contribute annotations from large-scale datasets

 If you work on a previously unannotated organism, or your research group has a specific research expertise that could be used to produce GO annotations:
 
 * [Contact the GOC](http://help.geneontology.org/) to discuss the best approach for your annotations and to ensure you are the only group working on your organism.  If you would be interested in taking ownership for an organism with outdated annotations, we can help you find the right people to contact as well.
 * Training of new curators will be arranged, if needed, with an existing GOC mentor. 
 * A representative of your group will need to [join GitHub](/docs/how-to-submit-requests/) in order to maintain your group's annotations.  Once a representative is designated, the GOC will also generate internal files needed to submit your annotations to GO.

#### Not enough annotations to justify joining GO?
* Submit one or just a few manual annotations by adding a new issue on the [GOC GitHub Annotation Tracker](https://github.com/geneontology/go-annotation/issues). Each of your annotations should include at least one key literature reference (PMID) in support of your assertions. Please state whether or not regular updates will be submitted about this annotation.

#### Automated Annotations
If your group is interested in generating a large number of automated/electronic annotations, please be aware that InterPro2GO is the only source of [IEAs, Inferred from Electronic Annotation](http://wiki.geneontology.org/index.php/Inferred_from_Electronic_Annotation_(IEA)) recognized by the GOC.  Submit your transcripts or other data to UniProt, and they will automatically generate IEAs from your data.  Once your organism is in UniProt, [contact the GOC](http://help.geneontology.org/) and we will gladly assist in curator training so your group can add manual annotations as well.

### Reviewing GO annotations associated with a scientific article
Literature annotation involves capturing published information about the exact function of a gene product as a GO annotations. This curation process is time-consuming but produces very high quality, species-specific annotation; the accuracy and uniform format of annotations allows the information to be used in high-throughput experiments. GO curation may be best carried out by people who know the function of the gene product and the associated biology in great detail- for example, experimental scientists who are familiar with the published literature. If you are an expert in a gene product or a particular field, then you may like to [suggest modifications to the ontology structure](/docs/contributing-to-go-terms/) as well.

Below is a schematic diagram giving an introduction to the steps involved in literature-based GO annotation. 
http://geneontology.org/sites/default/files/public/diag-literature-annot.png

To begin, check if there are existing annotations to the paper:  open a Gene Ontology browser, (e.g. [AmiGO](http://amigo.geneontology.org/amigo), [QuickGO](https://www.ebi.ac.uk/QuickGO/)) and enter a PubMed identifier (PMID) for the paper of interest in the 'Search' field.

#### If GO annotations are listed in the results:
1. Check whether the paper has been annotated by GO curators.
2. Click on the PMID and browse annotations associated with the paper.
   * If you agree that the annotations accurately represent the data, you are done!
   * If you think the annotations could be improved: Write a new issue on the 'GOC GitHub Annotation Tracker', indicating that these annotations should be reviewed. Include:
   - [ ]  a PMID 
   - [ ] the name of the species investigated in the experiment that led to this publication
   - [ ] *Please state whether or not regular updates will be submitted about this annotation*.
     
#### If no results are listed using this PMID:
 This means the paper has not been annotated by GO curators.
  * Write a new issue on the 'GOC GitHub Annotation Tracker', indicating that this is a new annotation. Include:
  - [ ] a PMID 
  - [ ] the name of the species investigated in the experiment that led to this publication
  - [ ] *Please state whether or not regular updates will be submitted about this annotation*.
  
### Reviewing GO annotations for a gene or protein

To start, check if there are existing annotations to the gene or protein of interest: open a Gene Ontology browser (e.g. AmiGO, QuickGO) and search for the gene or gene protein record of interest by entering it in the 'Search' field, then browse associated annotations and follow links to see the full list of annotations:

### If the gene or protein has comprehensive and correct annotations:
 * You are done!
     
### If the gene or protein has missing or incorrect annotations.
 * Write a new issue on the [GOC GitHub Annotation Tracker](https://github.com/geneontology/go-annotation/issues){:target="blank"} to request that our curators review each gene or protein. Include:
  - [ ] key PMIDs
  - [ ] a summary of the missing data
  - [ ] list of the wrong annotations
  - [ ] suggest GO annotations to replace them or be added (when applicable)
