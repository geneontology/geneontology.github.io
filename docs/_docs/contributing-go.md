# Contributing to GO 
Research groups may contribute to the Gene Ontology Consortium (GOC) by providing suggestions for updating the ontology (e.g. requesting new terms) or by providing GO annotations.
## How to contribute to the ontology

[<img src="http://geneontology.org/sites/default/files/u602/ontology-terms-icon.png" width="225" height="256" title="Add New Terms, Synonyms, or Clarify Definitions">](http://geneontology.org/contributing-go-term)

[<img src="http://geneontology.org/sites/default/files/u602/annotating-papers-small.png" width="196" height="256" title="Annotating a paper">](#reviewing-go-annotations-associated-with-a-scientific-article)
[<img src="http://geneontology.org/sites/default/files/u602/annotating-genes-proteins-small.png" width="256" height="256" title="Large sets of annotations">](#reviewing-go-annotations-for-a-gene-or-protein)
[<img src="http://geneontology.org/sites/default/files/u602/large-datasets-curation-icon-mmt.png" width="256" height="256" title="Add New Terms, Synonyms, or Clarify Definitions">](#contribute-annotations-from-large-datasets)

## How to contribute GO annotations

If your research group has GO annotations for a species that is not currently included in the GO, whether or not these annotations cover the entire genome, or if your research team has identified gaps or inaccuracies in the current set of GO annotations, this guide is for you. Choose the scenario that best describes your research group and follow the steps as indicated in the following pages.

---
[<img src="http://geneontology.org/sites/default/files/u602/annotating-papers-small.png" width="100" height="144" title="Annotating a paper">](#reviewing-go-annotations-associated-with-a-scientific-article)
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
  
---
[<img src="http://geneontology.org/sites/default/files/u602/annotating-genes-proteins-small.png" width="144" height="144" title="Large sets of annotations">](#reviewing-go-annotations-for-a-gene-or-protein)
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
  
---
[<img src="http://geneontology.org/sites/default/files/u602/large-datasets-curation-icon-mmt.png" width="144" height="144" title="Add New Terms, Synonyms, or Clarify Definitions">](#contribute-annotations-from-large-datasets)
### Contribute annotations from large datasets

If the below scenarios do not apply to your group, [contact the GOC](http://help.geneontology.org/) to discuss the best approach for preparing your annotations.

#### Existing MODs/groups
 * **Prepare**- GOC encourages use of [GAF 2.1](/docs/go-annotation-file-gaf-format-21/), although [GAF 2.0](/docs/go-annotation-file-gaf-format-20/) is still accepted.  If you're reading this, now is a great time to make the minor changes and upgrade to 2.1!
 * **Submit**- GOC asks that all submitting groups provide a static address that always contains the group's most recent GAF.  This GAF will be retreived by GO on demand and ensure the group's most recent file is always used for the monthly production pipeline.
 The address for a group's GAF should appear in the `source` line (approximately line 19) of the group's yaml file.  For example, MGI's file [mgi.yaml](https://github.com/geneontology/go-site/blob/master/metadata/datasets/mgi.yaml) contains the line:
 
 ` source: http://www.informatics.jax.org/downloads/reports/gene_association.mgi.gz`
 
 MGI provides a  GAF, [GPAD](/docs/gene-product-association-data-gpad-format) and [GPI](/docs/gene-product-information-gpi-format) in their [mgi.yaml](https://github.com/geneontology/go-site/blob/master/metadata/datasets/mgi.yaml); please see [zfin.yaml](https://github.com/geneontology/go-site/blob/master/metadata/datasets/zfin.yaml) for an example with only a GAF and a GPI.  Providing a GPI and GPAD in addition to the GAF is preferred.
 
 GO is happy to modify your group's yaml if requested: please [contact the GOC](http://help.geneontology.org/).
 
 * **Review**- Once annotations have been processed by GO, groups will be able to access error reports.  Please use the reports to make changes to the next month's GAF: 
   * monthly error reports will be accessible through release.geneontology.org [for example, October 2018](http://release.geneontology.org/2018-10-01/reports/index.html)
   * http://snapshot.geneontology.org/reports/index.html has reports that are updated thoughout the month, not just for the releases
 
 #### New groups/Special interest research groups:  
 If you represent a previously unannotated organism, or your research group has a specific focus for GO annotations, for example genes or gene products localized in ["synapse" (cellular component)](http://amigo.geneontology.org/amigo/term/GO:0045202), GO values your contributions. 
 * [Contact the GOC](http://help.geneontology.org/) to discuss the best approach for your annotations and to ensure you are the only group working on your organism.  If you would be interested in taking ownership for an organism with outdated annotations, we can help you find the right people to contact as well.
 * A representative of your group will need to join GitHub in order to maintain your group's annotations.  Once a representative is designated, the GOC will also generate the yaml file needed to submit your annotations to GO.
 * Training of new curators will be arranged, if needed, with an existing GOC mentor.

#### Not enough annotations to justify joining GO?
* Submit one or just a few manual annotations by adding a new issue on the [GOC GitHub Annotation Tracker](https://github.com/geneontology/go-annotation/issues). Each of your annotations should include at least one key literature references (PMIDs) in support of your assertions. Please state whether or not regular updates will be submitted about this annotation.

#### Automated Annotations
If your group is interested in generating a large number of automated/electronic annotations, please be aware that InterPro2GO is the only source of [IEAs, Inferred from Electronic Annotation](http://wiki.geneontology.org/index.php/Inferred_from_Electronic_Annotation_(IEA)) recognized by the GOC.  Please submit your transcripts or other data to UniProt, and they will automatically generate IEAs from your data.
