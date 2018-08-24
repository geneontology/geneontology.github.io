# Guide to GO Evidence Codes

A GO annotation consists of a GO term associated with a specific reference that describes the work or analysis upon which the association between a specific GO term and gene product is based. Each annotation must also include an evidence code to indicate how the annotation to a particular term is supported. Although evidence codes do reflect the type of work or analysis described in the cited reference which supports the GO term to gene product association, they are not necessarily a classification of types of experiments/analyses. Note that these evidence codes are intended for use in conjunction with GO terms, and should not be considered in isolation from the terms. If a reference describes multiple methods that each provide evidence to make a GO annotation to a particular term, then multiple annotations with identical GO identifiers and reference identifiers but different evidence codes may be made.

Out of all the evidence codes available, only Inferred from Electronic Annotation (IEA) is not assigned by a curator. Manually-assigned evidence codes fall into four general categories: experimental (and experimental from high throughput experiments), computational analysis, author statements, and curatorial statements.

## Experimental Evidence codes

Use of an experimental evidence code in a GO annotation indicates that the cited paper displayed results from a physical characterization of a gene or gene product that has supported the association of a GO term. The Experimental Evidence codes are:

   [Inferred from Experiment (EXP)](http://wiki.geneontology.org/index.php/Inferred_from_Experiment_(EXP))  
   [Inferred from Direct Assay (IDA)](http://wiki.geneontology.org/index.php/Inferred_from_Direct_Assay_(IDA))  
   [Inferred from Physical Interaction (IPI)](http://wiki.geneontology.org/index.php/Inferred_from_Physical_Interaction_(IPI))  
   [Inferred from Mutant Phenotype (IMP)](http://wiki.geneontology.org/index.php/Inferred_from_Mutant_Phenotype_(IMP))  
   [Inferred from Genetic Interaction (IGI)](http://wiki.geneontology.org/index.php/Inferred_from_Genetic_Interaction_(IGI))  
   [Inferred from Expression Pattern (IEP)](http://wiki.geneontology.org/index.php/Inferred_from_Expression_Pattern_(IEP))  

## High Throughput (HTP) evidence codes

High throughput (HTP) evidence codes may be used to make annotations based upon high throughput methodologies. Use of HTP evidence codes should be carefully considered and follow the GOC's guidelines for their use. The High Throughput Evidence Codes are:

   [Inferred from High Throughput Experiment (HTP)](http://wiki.geneontology.org/index.php/Inferred_from_High_Throughput_Experiment_(HTP))  
   [Inferred from High Throughput Direct Assay (HDA)](http://wiki.geneontology.org/index.php/Inferred_from_High_Throughput_Direct_Assay_(HDA))  
   [Inferred from High Throughput Mutant Phenotype (HMP)](http://wiki.geneontology.org/index.php/Inferred_from_High_Throughput_Mutant_Phenotype_(HMP))  
   [Inferred from High Throughput Genetic Interaction (HGI)](http://wiki.geneontology.org/index.php/Inferred_from_High_Throughput_Genetic_Interaction_(HGI))  
   [Inferred from High Throughput Expression Pattern (HEP)](http://wiki.geneontology.org/index.php/Inferred_from_High_Throughput_Expression_Pattern_(HEP))  

## Computational Analysis evidence codes

Use of the computational analysis evidence codes indicates that the annotation is based on an in silico analysis of the gene sequence and/or other data as described in the cited reference. The evidence codes in this category also indicate a varying degree of curatorial input. The Computational Analysis evidence codes are:

   [Inferred from Sequence or structural Similarity (ISS)](http://wiki.geneontology.org/index.php/Inferred_from_Sequence_or_structural_Similarity_(ISS))  
   [Inferred from Sequence Orthology (ISO)](http://wiki.geneontology.org/index.php/Inferred_from_Sequence_Orthology_(ISO))  
   [Inferred from Sequence Alignment (ISA)](http://wiki.geneontology.org/index.php/Inferred_from_Sequence_Alignment_(ISA))  
   [Inferred from Sequence Model (ISM)](http://wiki.geneontology.org/index.php/Inferred_from_Sequence_Model_(ISM))  
   [Inferred from Genomic Context (IGC)](http://wiki.geneontology.org/index.php/Inferred_from_Genomic_Context_(IGC))  
   [Inferred from Biological aspect of Ancestor (IBA)](http://wiki.geneontology.org/index.php/Inferred_from_Biological_aspect_of_Ancestor_(IBA))  
   [Inferred from Biological aspect of Descendant (IBD)](http://wiki.geneontology.org/index.php/Inferred_from_Biological_aspect_of_Descendant_(IBD))  
   [Inferred from Key Residues (IKR)](http://wiki.geneontology.org/index.php/Inferred_from_Key_Residues_(IKR))  
   [Inferred from Rapid Divergence (IRD)](http://wiki.geneontology.org/index.php/Inferred_from_Rapid_Divergence(IRD))  
   [Inferred from Reviewed Computational Analysis (RCA)](http://wiki.geneontology.org/index.php/Inferred_from_Reviewed_Computational_Analysis_(RCA))  

## Author statement evidence codes

Author statement codes indicate that the annotation was made on the basis of a statement made by the author(s) in the reference cited. The Author Statement evidence codes are:

   [Traceable Author Statement (TAS)](http://wiki.geneontology.org/index.php/Traceable_Author_Statement_(TAS))  
   [Non-traceable Author Statement (NAS)](http://wiki.geneontology.org/index.php/Non-traceable_Author_Statement_(NAS))  

## Curator statement evidence codes

Use of the curatorial statement evidence codes indicates an annotation made on the basis of a curatorial judgement that does not fit into one of the other evidence code classifications. The Curatorial Statement codes:

   [Inferred by Curator (IC)](http://wiki.geneontology.org/index.php/Inferred_by_Curator_(IC))  
   [No biological Data available (ND)](http://wiki.geneontology.org/index.php/No_biological_Data_available_(ND)_evidence_code)  

## Electronic Annotation evidence code

All of the above evidence codes are assigned by curators. However, GO also uses one evidence code that is assigned by automated methods, without curatorial judgement. The Automatically-Assigned evidence code is

   [Inferred from Electronic Annotation (IEA)](http://wiki.geneontology.org/index.php/Inferred_from_Electronic_Annotation_(IEA))  
