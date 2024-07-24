---
title: Download annotations
permalink: /docs/download-go-annotations/
redirect_from:
- download-go-annotations
- GO.downloads.annotations.shtml
- /page/download-annotations
---

# Download annotations

### Getting annotations for a selected organism

This page has instructions for getting GO annotations for almost any organism. If your organism is not available in the [official GO products](http://current.geneontology.org/products/pages/downloads.html), [UniProt GAFs by proteome](https://ftp.ebi.ac.uk/pub/databases/GO/goa/proteomes/){:target="blank"}, or [NCBI RefSeq](https://ftp.ncbi.nlm.nih.gov/genomes/refseq/){:target="blank"}, we recommend using the latest version of [InterProScan](https://interproscan-docs.readthedocs.io/en/latest/){:target="blank"} for unannotated organisms.

Jump to a section:
- [Commonly studied organisms](/docs/download-go-annotations/#1-commonly-studied-organisms)
- [All other organisms](/docs/download-go-annotations/#2-all-other-organisms)

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

### [1. Commonly studied organisms](http://current.geneontology.org/products/pages/downloads.html)
[This GAF download page has annotations for selected commonly-studied species](http://current.geneontology.org/products/pages/downloads.html).

For organisms with many expert-curated GO annotations (those with MODs, dedicated databases, etc.), we recommend downloading annotations from the links in the above-linked table. These organisms often have a large number of manual annotations supported by direct experimental evidence as well as annotations based on other evidence types.
<!-- * Most of these have two downloads available, one with the full set of GO annotations, and one with only the “core” function annotations (PAN-GO) for each organism. /-->
* These annotations should be used with the [latest version of the GO ontology](http://current.geneontology.org/ontology/index.html).
* Annotations for these organisms are also available as GPAD/GPI companion files; see the [/annotations/](http://current.geneontology.org/annotations/index.html){:target="blank"} directory of the current release [http://current.geneontology.org](http://current.geneontology.org){:target="blank"}. For more information on these infrequently used filetypes see the format pages for [GPAD](/docs/gene-product-association-data-gpad-format/)+[GPI](/docs/gene-product-information-gpi-format/).

### 2. All other organisms
For all other organisms we recommend downloading annotations from one of the following sources: UniProt or NCBI RefSeq. Both of these provide highly accurate computational methods. The header of the annotation file specifies the version of the ontology you should use to accompany the annotation file. Older versions of the [GO ontology can be downloaded from the GO download archives](http://release.geneontology.org/).

* [UniProt GAFs by proteome](https://ftp.ebi.ac.uk/pub/databases/GO/goa/proteomes/){:target="blank"}: Annotation files are available for about 20,000 complete proteomes (one protein sequence per protein-coding gene). Use these files if you want to use **UniProtKB identifiers**.
  * Go to [https://ftp.ebi.ac.uk/pub/databases/GO/goa/proteomes/](https://ftp.ebi.ac.uk/pub/databases/GO/goa/proteomes/){:target="blank"}
  * Navigate to your organism & download the `.goa` file, e.g. [`22426.A_gambiae.goa`](https://ftp.ebi.ac.uk/pub/databases/GO/goa/proteomes/22426.A_gambiae.goa){:target="blank"}  
    *Tip: use your browser's in-page search to find the species name.*

* [NCBI RefSeq](https://ftp.ncbi.nlm.nih.gov/genomes/refseq/){:target="blank"}: If your organism has a reference genome assembly in NCBI, GO annotations are available in GAF format through NCBI Gene identifiers. Annotation files are available for all eukaryotic genomes available at NCBI RefSeq. Note that GO annotations are not currently available for archaea, bacteria or viruses.
  * Start at the [NCBI homepage](https://www.ncbi.nlm.nih.gov/){:target="blank"}
  * Enter your organism in the search box near the top of the page and click Search, e.g. [Anopheles gambiae](https://www.ncbi.nlm.nih.gov/search/all/?term=Anopheles%20gambiae){:target="blank"}
    <br><img src="/assets/NCBIsearchbox.png" alt="NCBI homepage search" width="600"/><br>
  * Follow the ["Genomes" link](https://www.ncbi.nlm.nih.gov/datasets/genome/?taxon=7165){:target="blank"}
    <br><img src="/assets/NCBIgenomelink.png" alt="NCBI Genomes link" width="600"/><br>
  * Select the [reference assembly](https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_943734735.2/){:target="blank"} at the top of the list; this entry is indicated with a green "reference genome" icon and a GCF identifer listed in the RefSeq column
    <br><img src="/assets/NCBIrefgenome.png" alt="NCBI reference assembly" width="600"/><br>
  * Click on the [FTP link](https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/943/734/735/GCF_943734735.2_idAnoGambNW_F1_1/){:target="blank"}
    <br><img src="/assets/NCBIftp.png" alt="NCBI FTP link to GAF" width="600"/><br>
  * Download the file with the suffix `gene_ontology.gaf.gz`, e.g. `GCF_943734735.2-RS_2023_12_gene_ontology.gaf.gz`
 
### 3. If you cannot find annotations for your organism for download as described above
[Get help from the GO helpdesk](https://help.geneontology.org/).

### 4. If your organism’s genome sequence is not yet publicly available
For example, if you have a set of new (protein) sequences that you want to annotate with GO terms, we recommend that you generate annotations using the latest version of InterProScan.
For most genomic analyses, your input file should have one protein sequence per protein-coding gene, though any set of protein sequences can be used.
Download InterProScan at [https://www.ebi.ac.uk/interpro/about/interproscan](https://www.ebi.ac.uk/interpro/about/interproscan/){:target="blank"}.

## More information on GO annotation formats
+ GO has monthly releases
+ Annotation files are taxon-specific, with a few exceptions including the Reactome and *Candida* Genome Database files
+ Current format guides:
  + [GAF format 2.2](/docs/go-annotation-file-gaf-format-2.2/)
  + [GPAD](/docs/gene-product-association-data-gpad-format/) + [GPI](/docs/gene-product-information-gpi-format/) companion files

## Programmatic access to GO annotations
As for any resource in GO, GO annotations are accessible through the DOI-versioned release stored in [Zenodo](https://doi.org/10.5281/zenodo.1205159){:target="blank"}.

## Error or omission?
Any errors or omissions in annotations should be reported by writing to the [GO helpdesk](http://help.geneontology.org/){:target="blank"}.
