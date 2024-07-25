---
title: Contributing GO annotations
permalink: /docs/contributing-to-go/
redirect_from: 
- /docs/submitting-go-annotations/
---

# Contributing GO annotations
While most GO annotations are produced by [members of the GO Consortium](/docs/go-consortium/), we welcome feedback as well as annotations from the research community.

## Suggesting revisions for existing annotations
Researchers who notice either missing or inaccurate annotations for a gene or a GO term can [send this information to the GO Consortium](http://help.geneontology.org/){:target="blank"}.

###  1. Gather all necessary information
- Literature citation (PMID if available)
- Description of the issue: the gene product and the term combination that you suggest be reviewed and why you believe this is incorrect
- A suggestion for a solution, if possible

### 2. Communicate with the GO annotation team
* The preferred way is to create tickets in the [GO-annotation tracking system](https://github.com/geneontology/go-annotation/issues){:target="_blank"}. This allows you to monitor the progress on work on the issue and participate in the discussion with GO annotation team members. Instructions about how to create an account and use the GitHub repository can be found [here](/docs/how-to-submit-requests/). 
* Alternatively, contact the [GO helpdesk](http://help.geneontology.org/){:target="blank"} with your request.

## Contributing new GO annotations
Our recommendation for annotating novel genomes is to [submit transcripts to NCBI](https://www.ncbi.nlm.nih.gov/). These submissions will reach [UniProt](https://www.uniprot.org/){:target="blank"}, where [InterPro2GO](https://www.ebi.ac.uk/GOA/InterPro2GO){:target="blank"} will automatically create high-quality ([IEA](/docs/guide-go-evidence-codes/)) GO annotations.  These annotations will be made available in a future GO release. GO does not recommend that groups create their own IEAs with internal tools due to reproducibility and accuracy concerns. 

Research groups who wish to generate manual GO annotations from experimental data- for instance, new annotations for genes of a species that is not currently annotated in GO, or annotating specific genes for a given biological research domain- can contribute these annotations to the GO knowledgebase. **Please contact us early in your project to establish the data exchange process between your group and GO.** GO will make sure you have access to the proper documentation and training materials to ensure your annotations meet the GO guidelines.

GO annotation files must be in [GAF 2.2](/docs/go-annotation-file-gaf-format-2.2/) and contain:
- UniProt IDs, or IDs that can be mapped to UniProt, for each annotated entity
- precise & informative valid GO terms for each entity, taking in to account taxon constraints and term restrictions
- PMID of the published literature describing the methods and findings
- a precise [evidence code](/docs/guide-go-evidence-codes/)
- other mandatory elements are listed in the [GAF 2.2 documentation](/docs/go-annotation-file-gaf-format-2.2/)

Other information, such as mapping files, may be required in addition to the GAF.

## Contributing your expertise
The Gene Ontology Consortium welcomes contributions from experts in any area of biology to help us improve the annotations. [Contact us](mailto:help@geneontology.org) to start contributing or improving GO annotations. 
