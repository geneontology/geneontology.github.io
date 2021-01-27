---
title: Submitting GO Annotations
permalink: /docs/submitting-go-annotations/
---
# Overview
 * **Contact**- Please [contact our Helpdesk](http://help.geneontology.org/) first to determine if your annotations are suitable for GO.  A number of factors affect this, including availability of your group to maintain the annotations for the forseeable future, methods used to assign GO terms, etc.  If your group has never submitted annotations, or hasn't been active in the GO community in a while, we strongly recommend contacting us as a first step.
 * **Prepare**- GOC encourages use of [GAF 2.2](/docs/go-annotation-file-gaf-format-2.2/), as of March 2021. 
 * **Submit**- GOC asks that all submitting groups provide a static address that always contains the group's most recent GAF.  This GAF will be retreived by GO on demand and ensure the group's most recent file is always used for the monthly production pipeline.
 The address for a group's GAF should appear in the `source` line (approximately line 19) of the group's yaml file.  For example, MGI's file [mgi.yaml](https://github.com/geneontology/go-site/blob/master/metadata/datasets/mgi.yaml) contains the line:
 
 ` source: http://www.informatics.jax.org/downloads/reports/gene_association.mgi.gz`
 
 MGI provides a  GAF, [GPAD](/docs/gene-product-association-data-gpad-format) and [GPI](/docs/gene-product-information-gpi-format) in their [mgi.yaml](https://github.com/geneontology/go-site/blob/master/metadata/datasets/mgi.yaml); please see [zfin.yaml](https://github.com/geneontology/go-site/blob/master/metadata/datasets/zfin.yaml) for an example with only a GAF and a GPI.  Providing a GPI and GPAD in addition to the GAF is preferred.
 
 GO is happy to modify your group's yaml file if requested: please [contact the GOC](http://help.geneontology.org/).
 
 * **Review**- Once annotations have been processed by GO, groups will be able to access error reports.  Please use the reports to make changes to the next month's GAF: 
   * monthly error reports will be accessible through release.geneontology.org [for example, January 2021](http://release.geneontology.org/2021-01-01/reports/index.html)
   * http://snapshot.geneontology.org/reports/index.html has reports that are updated thoughout the month, not just for the releases

# Preparing GO Annotations for Submission

This page documents the steps required to take when supplying Gene Ontology annotations to the GO Consortium (GOC). 
For general information on how to conduct GO annotations, please see the 
[GO Annotation Policies Guide](http://geneontology.org/page/go-annotation-policies).
## Steps to prepare GO annotations for submission to the GOC
## 1. Contact the Gene Ontology Consortium

Please [contact the GOC](http://help.geneontology.org/) before carrying out the annotation work; this will ensure that GOC mentors and trainers can 
be of assistance in producing data sets in agreement with the GOC annotation policies and format requirements.
 
## 2. Provide a GAF 2.2

Research groups looking to supply Gene Ontology annotations to the Consortium must submit an appropriately formatted 
annotation file that conforms to syntactic and semantic requirements of the Consortium. The primary GO annotation format 
is the Gene Association Format (GAF): as of March 2021 we use GAF 2.2. This page contains details on how to build and populate the GAF 2.2 File.

Please ensure that:

 * Submissions are made using this flat, tab-delimited format file: GAF 2.2
 * The file has the correct file header
 * The file has the correct number of columns, even if some of them are not populated with data
 * If the file contains column names, these must be commented out using an exclamation mark (!) at the start of the line
 * The file contains no leading or trailing spaces

 
### 2.1 Make annotations to UniProtKB accessions or NCBI identifiers

 *  **Human data, MODs**: The ideal object identifiers for annotations are stable database identifiers. That is, ideally, 
    all annotations should describe the activities or locations of protein accession from the [UniProt KnowledgeBase 
    (UniProtKB)](https://www.uniprot.org/help/uniprotkb) that are present in the [UniProt Reference Proteome Files](https://www.uniprot.org/help/reference_proteome).
 * **Non-MODs**: If this is not possible, research groups should first ensure that alternative identifiers are also stable, 
    and then provide identifier mapping files (i.e. gp2protein, gp2rna; see below), where equivalent UniProtKB or NCBI 
    identifiers should be supplied. A gp_unlocalized file should also be provided where no sequence or genomic location 
    is known for a gene identifier.
 * **If mapping to UniProtKB or NCBI identifiers is not a possibility**: In this case the research group should contact the 
    GOC to explore the alternatives.

 
### 2.2 Provide a database name

Each research group must provide a database name, which will be used to acknowledge the annotation set and to appropriately 
credit your work. This name would be visible in the 'assigned_by' field (Column 15) of all the annotation lines that the 
group is contributing. This name will also be added to the list of annotation providers.
 
### 2.3 Include bibliographic references

Each annotation line must include the citation of a bibliographic reference, which details the methods and results from 
which the annotation was made. The reference should be either a PubMed identifier or an abstract (GO_REF) describing how 
the annotation was made. Please see the Gene Ontology Reference Collection for a list of all current GO references.
 
## 3. State whether or not regular updates will be submitted

For research groups conducting curation, it is not always necessary to commit to supplying regular updates for their 
annotations. When the research team chooses to enter 'Longer-term Annotation Contribution / Collaboration' as the 
submitting group, a primary point of contact must also be identified so that requests may be redirected and proper 
action on such requests may be taken in a timely manner. The GOC will take responsibility for corrections and updates 
to datasets included in non-recurring submissions or those from annotation groups that become 'inactive' annotation providers.
   
## 4. Identifier Mapping Files

Providing complete identifier mapping files is necessary for:
 * Downloading sequences from UniProtKB and NCBI. These sequences are used for inferencing annotations in a 
    phylogenetic context using the Phylogenetic Annotation and Inference Tool (PAINT).
 * Searching for GO annotations in AmiGO, using other database cross-reference IDs (UniProt or NCBI).
 * Helping to keep track of IDs and annotations, removing duplicates, etc.

Please be aware: when identifier mapping is carried out, due to different database release cycles, sequence 
identifiers that should correspond with each other may not always display the same data.
### 4.1 gp2protein file

 * The gp2protein format specifications are described here.
 * The gp2protein mapping file must contain the complete list of protein-coding genes in the respective organism 
    (or community), including those proteins not annotated to GO.
 * The first column should contain all gene or gene product identifiers (these are typically MOD-specific identifiers). 
    The second column should contain mappings to canonical identifiers. Protein coding genes must map to UniProtKB 
    accessions (preferably Swiss-Prot, otherwise TrEMBL). If identifiers are unavailable in UniProtKB, NCBI identifiers 
    (NP_ and XP_) are permissible.
 * If the annotation group is satisfied with identifier mappings from an external identifier type to UniProtKB accessions, 
    as supplied by the UniProt Knowledgebase cross-references, then UniProtKB will take the responsibility of supplying 
    the external ID -> UniProtKB mapping to the GO.

### 4.2 gp2rna file

 * The gp2rna format specifications are similar to those of gp2protein files. The differences between the two are 
    described here.
 * If the annotation file includes non-coding RNAs (ncRNAs), then the corresponding gp2rna file must include all 
    ncRNA genes currently identified in the genome build, including ncRNAs not annotated to GO.
 * Functional ncRNAs must map to NCBI (NR_ or XR_) if available; if unavailable, leave the field blank.

### 4.3 gp_unlocalized file

 * If your database supplies gene identifiers that have been manually curated from the literature, where no sequence 
    or genomic location is known (such genes have been sometimes described as 'unlocalized genes', 'single heritable traits' 
    or 'phenotypic orphans'), then you should additionally supply a complete gp_unlocalized_file.
 * This file should contain a list of all the non-genome localized gene identifiers available, including those not annotated 
    to GO.
 * The file must meet the gp_unlocalized format specification, which should be similar to the gp2protein file format.

### 4.4 Exceptions for Macromolecular Complexes

 * If the annotation file includes macromolecular complexes as the subject of the annotation, no corresponding entry is 
    required for the gp2protein file. Only gene or gene product mappings should be included.
 * Groups must regularly update their gp2protein or gp2rna files (i.e. in response to UniProtKB's feedback on inclusion 
    of obsolete or secondary UniProtKB accessions in a group's gp2protein, or in the case NCBI identifiers are made obsolete). 
 * For groups who provide authoritative files for a species, or who are funded by the GO NIH grant, please consult the 
    description of GO annotation activities by central GO Consortium members.

# Submit

Annotations will need to be available at a stable, permanent URL accessible by GO. This must be added to the group's yaml in the GO Github repo: /go-site/metadata/datasets/nameofgroup.yaml

# Review

Both new and established groups that commit to be species owners will need to review annotations after submission.  Annotations need to be checked periodically to ensure ontology changes, curation best practices, and biological knowledge are accurately reflected in the annotations. 

Any annotations that violate the GO_rules constraints will be listed in http://snapshot.geneontology.org/reports/index.html.  This report contains the rule number, a description of the rule, severity of the violation, and the full annotation line from the GAF. A less detailed graphical view can be found at http://current.geneontology.org/reports/gorule-report.html; click any link in your group's column to be taken to the detailed HTML report.

* WARNING= these are typically minor infractions or ones that have been fixed automatically by the pipeline.  It is strongly recommended these are manually fixed for the next submission/release.
* ERROR= these are removed from the release.  These must be manually fixed in order to appear in any subsequent release.

If you feel like your annotation is correct, but the rule is overly restrictive, please contact us to review the GORULE.


