---
title: Contributing GO annotations
permalink: /docs/contributing-to-go/
redirect_from: 
- /docs/submitting-go-annotations/
---

# Contributing GO annotations
While most GO annotations are produced by [members of the GO Consortium](/docs/go-consortium/), we welcome feedback as well as annotations from the research community.

## Suggesting revisions for existing annotations
Researchers who notice either missing or inaccurate annotations for a gene or a GO term can [send this information to the GO Consortium](https://help.geneontology.org/){:target="_blank"}.

### 1. Gather all necessary information
- Literature citation (PMID if available)
- Description of the issue: the gene product and the term combination that you suggest be reviewed and why you believe this is incorrect
- A suggestion for a solution, if possible

### 2. Communicate with the GO annotation team
* The preferred way is to create tickets in the [GO-annotation tracking system](https://github.com/geneontology/go-annotation/issues){:target="_blank"}. This allows you to monitor the progress on work on the issue and participate in the discussion with GO annotation team members. Instructions about how to create an account and use the GitHub repository can be found [here](/docs/how-to-submit-requests/).
* Alternatively, contact the [GO helpdesk](https://help.geneontology.org/){:target="_blank"} with your request.

## Contributing new GO annotations

### Background
The value of the GO knowledgebase depends on the accuracy and long-term maintenance of its contents. For this reason, the GOC applies the same evidence and quality standards to every annotation set, regardless of how it was produced, and does not accept unsolicited annotation sets.

Membership in the GOC is required for any group contributing GO annotations and must comply with all GO guidelines and data standards. The contributing group is responsible for the ongoing maintenance of its annotation set (or for transferring ownership to a GOC group willing to assume that responsibility) and for responding promptly to requests for corrections or improvements to annotations. The GOC does not have the resources to adopt or maintain automated annotation sets that are not part of the established GO pipeline on a contributor's behalf.

### Low-throughput manual annotation
Research groups producing manual GO annotations from experimental data documented in peer-reviewed publications — for example, manually annotating genes in a species not yet represented in GO or curating specific genes within a biological research domain — may contribute these to the GO knowledgebase. Contact us early in your project so that training can be provided to ensure your annotations meet GO guidelines.

### Large-scale annotation sets
Annotations generated at scale, for example, by text mining, large language models (LLMs), or other predictive methods, are held to the same evidence standards as all other GO annotations. Such datasets are only considered for incorporation within a pre-agreed framework. Any dataset provided must adhere to GO curation standards and traceability and be able to clearly demonstrate added value to the existing knowledgebase. All datasets must be manually evaluated by GO curators before inclusion. Unreviewed predictions will not be considered.

For experimental high-throughput (HTP) annotations, the GO policy is [published here](https://doi.org/10.1093/database/baz007){:target="_blank"}.

### LLM-assisted GO curation
AI tools may be useful in identifying research literature for GO curation and, with sufficient direction, may be used to assist in suggesting appropriate GO term–gene associations from experimental data. However, due to the limitations of AI, all such associations must undergo manual review by a trained GO biocurator to confirm their experimental basis, correct annotation, and compliance with GO curation standards. As all such annotations must be manually reviewed, it is appropriate to use a [GO experimental evidence code](/docs/guide-go-evidence-codes/), rather than a computational evidence code.

### Annotation of a novel genome
For GO annotation of newly sequenced genomes, we recommend that you generate annotations using the latest version of [InterProScan](https://www.ebi.ac.uk/interpro/about/interproscan/){:target="_blank"}. Please [contact us](https://help.geneontology.org/){:target="_blank"} for further advice and guidance.

### File format requirements
GO annotation files must be in [GAF 2.2](/docs/go-annotation-file-gaf-format-2.2/) and contain:
- UniProt IDs, or IDs that can be mapped to UniProt, for each annotated entity
- precise, informative, and valid GO terms for each entity, taking into account taxon constraints and term restrictions
- the PMID of the published literature describing the methods and findings
- a precise [evidence code](/docs/guide-go-evidence-codes/)
- all other mandatory elements listed in the [GAF 2.2 documentation](/docs/go-annotation-file-gaf-format-2.2/)
- conformance to [GO rules](https://github.com/geneontology/go-site/blob/master/metadata/rules/README.md){:target="_blank"}

Additional information, such as mapping files, may also be required.

## Contributing your expertise
The Gene Ontology Consortium welcomes contributions from experts in any area of biology to help us improve the annotations. [Contact us](https://help.geneontology.org/){:target="_blank"} to start contributing or improving GO annotations.
