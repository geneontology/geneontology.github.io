# Contributing to GO 
Research groups may contribute to the Gene Ontology Consortium (GOC) by providing suggestions for updating the ontology (e.g. requesting new terms) or by providing GO annotations.
## How to contribute to the ontology

![ontology-terms-icon.png](http://geneontology.org/contributing-go-term)
## How to contribute GO annotations

If your research group has GO annotations for a species that is not currently included in the GO, whether or not these annotations cover the entire genome, or if your research team has identified gaps or inaccuracies in the current set of GO annotations, this guide is for you. Choose the scenario that best describes your research group and follow the steps as indicated in the following pages.

### Reviewing GO annotations associated with a scientific article

To start, check if there are existing annotations to the paper:  Open a Gene Ontology browser, (e.g. [AmiGO](http://amigo.geneontology.org/amigo), [QuickGO](https://www.ebi.ac.uk/QuickGO/)) and enter a PubMed identifier (PMID) for the paper of interest in the 'Search' field.

Literature annotation involves capturing published information about the exact function of a gene product as a GO annotations. To do this you must read the publications about the gene and write down all the information. This annotation is time-consuming but produces very high quality, species-specific annotation, and brings the information about the gene product into a format in which it can be used in high-throughput experiments. This is an extremely worthwhile process in the long term. It may be best carried out by people who know the function of the gene product, and the associated biology, in great detail; for example experimental scientists who are familiar with the published literature. If you are doing this, then you may like to write and suggest modifications to the ontology structure as well.

Below is a schematic diagram giving an introduction to the steps involved in literature-based GO annotation. 
http://geneontology.org/sites/default/files/public/diag-literature-annot.png

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
 * Write a new issue on the [GOC GitHub Annotation Tracker](https://github.com/geneontology/go-annotation/issues) to request that our curators review each gene or protein. Include:
  - [ ] key PMIDs
  - [ ] a summary of the missing data
  - [ ] list of the wrong annotations
  - [ ] suggest GO annotations to replace them or be added (when applicable)


### Contribute annotations from large datasets

[Contact the GOC](http://help.geneontology.org/) to discuss the best approach for preparing your annotations.
 
#### Genome-scale annotations for Model Organism Databases (MODs) and/or non-model organisms:
     
* Submitting manual annotations:
  - [ ] Write a new issue on the [GOC GitHub Annotation Tracker](https://github.com/geneontology/go-annotation/issues). Each of your annotations should include at least one key literature references (PMIDs) in support of your assertions. Please state whether or not regular updates will be submitted about this annotation.
         
* Submitting Automated Annotations:
   - [ ] Follow the [steps outlined in this guide](http://geneontology.org/page/submitting-go-annotations) to prepare multiple annotations for submission to the GOC.
   - [ ] Submit the finalized annotation file(s) using SVN. Details about how to submit files to the GOC SVN repository are found in our [SVN Help Guide](http://geneontology.org/page/svn-help). When submitting your files, please state whether or not regular updates will be submitted about this annotation.
     
#### Special interest research groups:  
 If your research group has a specific focus for GO annotations, for example genes or gene products localized in ["synapse" (cellular component)](http://amigo.geneontology.org/amigo/term/GO:0045202), then you should first [contact the GOC](http://help.geneontology.org/) to discuss the best approach for your annotations, and then follow the steps outlined on the guide to [Preparing GO Annotations](http://geneontology.org/page/submitting-go-annotations).
