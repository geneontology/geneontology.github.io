---
title: Guide to GO Evidence Codes
permalink: /docs/guide-go-evidence-codes/
---

# Guide to GO Evidence Codes

A [GO annotation](/docs/go-annotations/) is a statement about the function of a particular gene. Each annotation includes an evidence code to indicate how the annotation to a particular term is supported. 

Manually-assigned evidence codes fall into four general categories: experimental (and experimental from high throughput experiments), computational analysis, author statements, and curatorial statements.


## Experimental Evidence codes
The EXPerimental (EXP) evidence codes indicate that there is evidence from an experiment directly supporting the annotation of the gene. For example, an association between a gene product and its subcellular localization as determined by immunofluorescence would be supported by the Inferred from Direct Assay (IDA) evidence code, a subtype of EXP evidence. Use of an experimental evidence code in a GO annotation indicates that the cited paper displayed results from a physical characterization of a gene or gene product that has supported the association of a GO term. The Experimental Evidence codes are:

- [Inferred from Experiment (EXP)](http://wiki.geneontology.org/index.php/Inferred_from_Experiment_(EXP)){:target="_blank"}
- [Inferred from Direct Assay (IDA)](http://wiki.geneontology.org/index.php/Inferred_from_Direct_Assay_(IDA)){:target="_blank"}
- [Inferred from Physical Interaction (IPI)](http://wiki.geneontology.org/index.php/Inferred_from_Physical_Interaction_(IPI)){:target="_blank"}
- [Inferred from Mutant Phenotype (IMP)](http://wiki.geneontology.org/index.php/Inferred_from_Mutant_Phenotype_(IMP)){:target="_blank"}
- [Inferred from Genetic Interaction (IGI)](http://wiki.geneontology.org/index.php/Inferred_from_Genetic_Interaction_(IGI)){:target="_blank"}
- [Inferred from Expression Pattern (IEP)](http://wiki.geneontology.org/index.php/Inferred_from_Expression_Pattern_(IEP)){:target="_blank"}


## High Throughput (HTP) evidence codes

High throughput (HTP) evidence codes are a type of experimental evidence that indicate that the annotation is supported by high throughput methodologies. Use of HTP evidence codes should be carefully considered and follow the GOC's guidelines for their use. The High Throughput Evidence Codes are:

- [Inferred from High Throughput Experiment (HTP)](http://wiki.geneontology.org/index.php/Inferred_from_High_Throughput_Experiment_(HTP)){:target="_blank"}
- [Inferred from High Throughput Direct Assay (HDA)](http://wiki.geneontology.org/index.php/Inferred_from_High_Throughput_Direct_Assay_(HDA)){:target="_blank"}
- [Inferred from High Throughput Mutant Phenotype (HMP)](http://wiki.geneontology.org/index.php/Inferred_from_High_Throughput_Mutant_Phenotype_(HMP)){:target="_blank"}
- [Inferred from High Throughput Genetic Interaction (HGI)](http://wiki.geneontology.org/index.php/Inferred_from_High_Throughput_Genetic_Interaction_(HGI)){:target="_blank"}
- [Inferred from High Throughput Expression Pattern (HEP)](http://wiki.geneontology.org/index.php/Inferred_from_High_Throughput_Expression_Pattern_(HEP)){:target="_blank"}

## Phylogenetically-inferred annotations
Phylogenetic principles, reconstructing evolutionary events to infer relationships among genes, provide a powerful way to gain insight into gene function. The GOC has supported a dedicated [Phylogenetic Annotation effort](https://www.ncbi.nlm.nih.gov/pubmed/21873635){:target="_blank"} since 2008.

Phylogenetically-based annotations are derived from an explicit model of gain and loss of gene function at specific branches in a phylogenetic tree. Each inferred annotation can be traced to the direct experimental annotations that were used as the basis for that assertion. The GO Phylogenetic Annotation project is now the largest source of manually reviewed annotations in the GO knowledgebase, and it has substantially increased the number of annotations even in organisms that have been well-studied experimentally.

- [Inferred from Biological aspect of Ancestor (IBA)](http://wiki.geneontology.org/index.php/Inferred_from_Biological_aspect_of_Ancestor_(IBA)){:target="_blank"}
- [Inferred from Biological aspect of Descendant (IBD)](http://wiki.geneontology.org/index.php/Inferred_from_Biological_aspect_of_Descendant_(IBD)){:target="_blank"}
- [Inferred from Key Residues (IKR)](http://wiki.geneontology.org/index.php/Inferred_from_Key_Residues_(IKR)){:target="_blank"}
- [Inferred from Rapid Divergence (IRD)](http://wiki.geneontology.org/index.php/Inferred_from_Rapid_Divergence(IRD)){:target="_blank"}

## Computational Analysis evidence codes

Use of the computational analysis evidence codes indicates that the annotation is based on an in silico analysis of the gene sequence and/or other data as described in the cited reference. The evidence codes in this category also indicate a varying degree of curatorial input. The Computational Analysis evidence codes are:

- [Inferred from Sequence or structural Similarity (ISS)](http://wiki.geneontology.org/index.php/Inferred_from_Sequence_or_structural_Similarity_(ISS)){:target="_blank"}
- [Inferred from Sequence Orthology (ISO)](http://wiki.geneontology.org/index.php/Inferred_from_Sequence_Orthology_(ISO)){:target="_blank"}
- [Inferred from Sequence Alignment (ISA)](http://wiki.geneontology.org/index.php/Inferred_from_Sequence_Alignment_(ISA)){:target="_blank"}
- [Inferred from Sequence Model (ISM)](http://wiki.geneontology.org/index.php/Inferred_from_Sequence_Model_(ISM)){:target="_blank"}
- [Inferred from Genomic Context (IGC)](http://wiki.geneontology.org/index.php/Inferred_from_Genomic_Context_(IGC)){:target="_blank"}
- [Inferred from Reviewed Computational Analysis (RCA)](http://wiki.geneontology.org/index.php/Inferred_from_Reviewed_Computational_Analysis_(RCA)){:target="_blank"}

## Author statement evidence codes

Author statement codes indicate that the annotation was made on the basis of a statement made by the author(s) in the reference cited. The Author Statement evidence codes are:

- [Traceable Author Statement (TAS)](http://wiki.geneontology.org/index.php/Traceable_Author_Statement_(TAS)){:target="_blank"}
- [Non-traceable Author Statement (NAS)](http://wiki.geneontology.org/index.php/Non-traceable_Author_Statement_(NAS)){:target="_blank"}

## Curator statement evidence codes

Use of the curatorial statement evidence codes indicates an annotation made on the basis of a curatorial judgement that does not fit into one of the other evidence code classifications. The Curatorial Statement codes:

- [Inferred by Curator (IC)](http://wiki.geneontology.org/index.php/Inferred_by_Curator_(IC)){:target="_blank"}
- [No biological Data available (ND)](http://wiki.geneontology.org/index.php/No_biological_Data_available_(ND)_evidence_code){:target="_blank"}

## Electronic Annotation evidence code
‘Electronic’ (IEA) annotation are not individually reviewed (although the method itself is usually subjected to various quality assessments). IEA-supported annotations are ultimately based on either homology and/or other experimental or sequence information, but cannot generally be traced to an experimental source. Three methods make up the bulk of these annotations. The first, and most comprehensive, method is [InterPro2GO](https://www.ncbi.nlm.nih.gov/pubmed/27899635){:target="_blank"}, which is based on the curated association of a GO term with a generalized sequence model (‘signature’) of a group of homologous proteins. Protein sequences with a statistically significant match to a signature are assigned the GO terms associated with the signature, a form of homology inference. A second method is the computational conversion of UniProt controlled vocabulary terms (including Enzyme Commission numbers describing enzymatic activities, and UniProt keywords describing subcellular locations), to associated GO terms. Lastly, annotations are made based on 1:1 orthologs inferred from Ensembl gene trees, an approach which automatically transfers annotations found experimentally in one gene, to its 1:1 orthologs in the same taxonomic clade (e.g. those within the vertebrate clade, and separately, those within the plant clade).
+ Out of all the evidence codes available, only Inferred from Electronic Annotation (IEA) is not assigned by a curator. 

- [Inferred from Electronic Annotation (IEA)](http://wiki.geneontology.org/index.php/Inferred_from_Electronic_Annotation_(IEA)){:target="_blank"}


