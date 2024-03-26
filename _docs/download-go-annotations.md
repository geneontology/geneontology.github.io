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
Most tools that use GO annotations take two input files, a file with the annotations (in Gene Annotation Format, or GAF), and a file with the GO ontology structure (in Open Biomedical Ontology Format, or OBO). Because the ontology and annotations are being improved over time, we recommend downloading the latest version of the annotations for your organism, and the corresponding ontology version as specified below. In addition to the file URL, please report in any publications the date on the header of the GAF file, and ontology version number, to ensure reproducibility.

## Commonly studied organisms 
The [GAF download page](http://current.geneontology.org/products/pages/downloads.html) has annotations for selected species. For organisms with many expert-curated GO annotations (MODs, etc.), we recommend downloading annotations from the links in the above-linked table. These organisms often have a large number of annotations supported by direct experimental evidence, as well as annotations based on other evidence types.

[GAF format](/docs/go-annotation-file-gaf-format-2.2/) annotations, as well as the [GPAD](/docs/gene-product-association-data-gpad-format/)+[GPI](/docs/gene-product-information-gpi-format/) companion files, are available from the [/annotations/](http://current.geneontology.org/annotations/index.html){:target="blank"} directory of the current release: [http://current.geneontology.org](http://current.geneontology.org){:target="blank"}

### Other organisms
For all other organisms we recommend downloading annotations from one of the following sources, which use highly accurate computational methods:

+ [UniProt GAFs by proteome](https://ftp.ebi.ac.uk/pub/databases/GO/goa/proteomes/){:target="blank"}: for a large number of complete proteomes, existing GO annotations can be found through EBI's FTP server

+ [NCBI RefSeq](https://ftp.ncbi.nlm.nih.gov/genomes/refseq/){:target="blank"}: if your organism has a reference sequence in NCBI, GO annotations are available through NCBI's FTP server
  + Navigate to your organism, e.g. [Anopheles_gambiae](https://ftp.ncbi.nlm.nih.gov/genomes/refseq/invertebrate/Anopheles_gambiae/representative/GCF_000005575.2_AgamP3/){:target="blank"}
  + Download the file with the suffix gene_ontology.gaf.gz
These annotations should be used with GO ontology version noted in the header of the GAF 

## About GO annotation formats
+ Released monthly
+ Files are taxon-specific, with a few exceptions including the Reactome and *Candida* Genome Database files
+ Current format guides:
  + [GAF format](/docs/go-annotation-file-gaf-format-2.2/) 
  + [GPAD](/docs/gene-product-association-data-gpad-format/) + [GPI](/docs/gene-product-information-gpi-format/) companion files
  
## Programmatic access to GO annotations
As for any resource in GO, GO annotations are accessible through the DOI-versioned release stored in [Zenodo](https://doi.org/10.5281/zenodo.1205159){:target="blank"} and can be retrieved using BDBag. Read more about [programmatic access](/docs/tools-guide/#programmatic-download-bdbag).

## Error or omission ?
Any errors or omissions in annotations should be reported by writing to the [GO helpdesk](http://help.geneontology.org/){:target="blank"}
