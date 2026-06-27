---
title: Download annotations
permalink: /docs/download-go-annotations/
redirect_from:
- /download-go-annotations
- /GO.downloads.annotations.shtml
- /page/download-annotations
- /page/downloads
- /page/lead-database-downloads
---

# Download annotations

### Getting annotations for a selected organism

This page has instructions for getting GO annotations for almost any organism. If your organism is not available from these main sources:

* <i class="fa fa-download"></i> **[Official GO products](/docs/download-go-annotations/downloads/)**
* <i class="fa fa-external-link"></i> **[UniProt GAFs by proteome](https://ftp.ebi.ac.uk/pub/databases/GO/goa/proteomes/){:target="_blank"}**  
* <i class="fa fa-external-link"></i> **[NCBI RefSeq](https://ftp.ncbi.nlm.nih.gov/genomes/refseq/){:target="_blank"}**

We recommend using <i class="fa fa-external-link"></i> **[InterProScan](https://interproscan-docs.readthedocs.io/en/latest/){:target="_blank"}** for unannotated organisms.

Jump to a section:
- [Commonly studied organisms](/docs/download-go-annotations/#1-commonly-studied-organisms)
- [All other organisms](/docs/download-go-annotations/#2-all-other-organisms)
- [Can't find annotations](/docs/download-go-annotations/#3-if-you-cannot-find-annotations-for-your-organism-for-download-as-described-above)
- [Genome not available](/docs/download-go-annotations/#4-if-your-organisms-genome-sequence-is-not-yet-publicly-available)

#### Required Files
Most tools that use GO annotations take two input files: 
1. a file with the **annotations** (in Gene Annotation Format, or GAF)
2. a file with the GO **ontology** structure (in Open Biomedical Ontology Format, or OBO)
   
Because the ontology and annotations are constantly being improved over time, we recommend downloading the latest version of the annotations for your organism and the corresponding ontology file for that GO version. The version should be specified in the header of the annotation file. 

#### Citing GO
To ensure reproducibility for any publication where GO was used at any point in the research, please include:
* [appropriate GO publication(s)- refer to the full GO citation policy](/docs/go-citation-policy/)
* the URL where the files were obtained
* the date on the header of the GAF file
* the ontology version number

### 1. Commonly studied organisms
<i class="fa fa-download"></i> **[Download GAF annotation files for commonly-studied species](/docs/download-go-annotations/downloads/)**

For organisms with many expert-curated GO annotations (those with MODs, dedicated databases, etc.), we recommend downloading annotations from the links in the above-linked table. These organisms often have a large number of manual annotations supported by direct experimental evidence as well as annotations based on other evidence types.
<!-- * Most of these have two downloads available, one with the full set of GO annotations, and one with only the “core” function annotations (PAN-GO) for each organism. /-->
* These annotations should be used with the [latest version of the GO ontology](http://current.geneontology.org/ontology/index.html).
* GPAD/GPI files are available in the [/annotations/](http://current.geneontology.org/annotations/index.html){:target="_blank"} directory for specialized use cases. See format pages: [GPAD](/docs/gene-product-association-data-gpad-format/), [GPI](/docs/gene-product-information-gpi-format/).

### 2. All other organisms
For all other organisms we recommend downloading annotations from one of the following sources: UniProt or NCBI RefSeq. Both of these provide highly accurate computational methods. The header of the annotation file specifies the version of the ontology you should use to accompany the annotation file. Older versions of the [GO ontology can be downloaded from the GO download archives](http://release.geneontology.org/).

* <i class="fa fa-external-link"></i> **[UniProt GAFs by proteome](https://ftp.ebi.ac.uk/pub/databases/GO/goa/proteomes/){:target="_blank"}:** Annotation files are available for about 20,000 complete proteomes (one protein sequence per protein-coding gene). Use these files if you want to use **UniProtKB identifiers**.

  * Go to [https://ftp.ebi.ac.uk/pub/databases/GO/goa/proteomes/](https://ftp.ebi.ac.uk/pub/databases/GO/goa/proteomes/){:target="_blank"}
  * Navigate to your organism & download the `.goa` file, e.g. [`22426.A_gambiae.goa`](https://ftp.ebi.ac.uk/pub/databases/GO/goa/proteomes/22426.A_gambiae.goa){:target="_blank"}  
    *Tip: use your browser's in-page search to find the species name.*
    
* <i class="fa fa-external-link"></i> **[NCBI RefSeq](https://ftp.ncbi.nlm.nih.gov/genomes/refseq/){:target="_blank"}:** If your organism has a reference genome assembly in NCBI in the RefSeq collection (RefSeqs have assembly accessions starting with `GCF_`), GO annotations are available in GAF format through NCBI Gene identifiers. Annotation files are available for all eukaryotic genomes available at NCBI RefSeq.

> <i class="fa-solid fa-triangle-exclamation"></i> Note: GO annotations are not currently available at NCBI for archaea, bacteria or viruses. GO annotations are not currently available at NCBI for eukaryotic genomes only in GenBank (only accession starts with `GCA_`).
  * Start at [NCBI Genomes](https://www.ncbi.nlm.nih.gov/datasets/genome/){:target="_blank"}
  * Enter your organism in the search box near the top of the page and click Search, e.g. [Anopheles gambiae](https://www.ncbi.nlm.nih.gov/datasets/genome/?taxon=7165){:target="_blank"}. You can also start typing to see suggested options. If you select an organism from the dropdown, it will immediately take you to the next step.
    <br><img src="/assets/NCBIrefseq1_sep2025.png" alt="NCBI Genomes search" width="600" div style="border: 2px solid black;"/><br>
  * Select the [reference assembly](https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_943734735.2/){:target="_blank"} in the results; this entry is indicated with a green "reference genome" icon and a `GCF_` identifer listed in the RefSeq column
    <br><img src="/assets/NCBIrefseq2_sep2025.png" alt="NCBI reference assembly" width="600" div style="border: 2px solid black;"/><br>
  * Click on the [FTP link](https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/943/734/735/GCF_943734735.2_idAnoGambNW_F1_1/){:target="_blank"}
    <br><img src="/assets/NCBIrefseq3_sep2025.png" alt="NCBI FTP link to GAF" width="600" div style="border: 2px solid black;"/><br>
  * Download the file with the suffix `gene_ontology.gaf.gz`, e.g. `GCF_943734735.2-RS_2023_12_gene_ontology.gaf.gz`
    <br><img src="/assets/NCBIrefseq4_sep2025.png" alt="NCBI FTP link to GAF" width="600" div style="border: 2px solid black;"/><br>
 
### 3. If you cannot find annotations for your organism for download as described above
[<i class="fa fa-question-circle"></i> **Get help from the GO helpdesk**](https://help.geneontology.org/).

### 4. If your organism's genome sequence is not yet publicly available
For example, if you have a set of new (protein) sequences that you want to annotate with GO terms, we recommend that you generate annotations using the latest version of InterProScan.
For most genomic analyses, your input file should have one protein sequence per protein-coding gene, though any set of protein sequences can be used.

<i class="fa fa-external-link"></i> **[Download InterProScan](https://www.ebi.ac.uk/interpro/about/interproscan/){:target="_blank"}**

## More information on GO annotation formats
+ GO has monthly releases
+ Annotation files are taxon-specific, with a few exceptions including the Reactome and *Candida* Genome Database files
+ Current format guides:
  + [GAF format 2.2](/docs/go-annotation-file-gaf-format-2.2/)
  + [GPAD](/docs/gene-product-association-data-gpad-format/) + [GPI](/docs/gene-product-information-gpi-format/) companion files

## Programmatic access to GO annotations

GO annotations are accessible through DOI-versioned releases stored in Zenodo:

+ [<i class="fa fa-archive"></i> **Full data bundles**](https://doi.org/10.5281/zenodo.1205166){:target="_blank"}: Access the complete archive of the current release or any archived release from `2018-07-02` onward

+ [<i class="fa fa-list"></i> **Release references**](https://doi.org/10.5281/zenodo.1205159){:target="_blank"}: DOI-versioned references for each monthly GO release from `2018-08-09` onward
  
+ [<i class="fa fa-folder-open"></i> **Older releases**](http://release.geneontology.org/){:target="_blank"}: Releases from `2004-03-01` onward are also available

## Error or omission?

Any errors or omissions in annotations should be reported by [<i class="fa fa-question-circle"></i> **writing to the GO helpdesk**](http://help.geneontology.org/){:target="_blank"}.
