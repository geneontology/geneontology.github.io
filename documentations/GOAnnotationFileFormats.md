<!-- Deprecated file formats should be on the wiki, e.g. "For the deprecated GAFs 1.0-2.0, please see the documentation on the wiki [HERE]" 
  Also needs the http://wiki.geneontology.org/index.php/Introduction_to_the_GO_Consortium_annotation_set page to be updated. (Link omitted, should be under "see the annotation guide". -->

# GO Annotation File Formats

This page documents the file formats used to store gene associations (annotations), data capturing the attributes of gene products using terms from the Gene Ontology. For more general information on annotation, please see the [GO annotation guide](http://wiki.geneontology.org/index.php/Introduction_to_the_GO_Consortium_annotation_set).
## Annotation File Format Guide

The Gene Ontology Consortium stores annotation data, the representation of gene product attributes using GO terms, in tab-delimited plain text files. Each line in the file represents a single association between a gene product and a GO term with a certain evidence code and the reference to support the link.

There are two annotation file formats:
### Gene Association File (GAF)

* [GAF 2.1](GOAnnotationFileFormat2_1.md) is the latest version of the GAF format. Data has been released in this format since the summer of 2015.
  
  **GAF 2.1 allows the use of pipes and comma in column 8 (with/from column)** compared to GAF 2.0 which allows the use of pipes only. **Pipe will indicate 'OR' and Comma will indicate 'AND'.**
* [GAF 2.0](GOAnnotationFileFormat2_0.md) is the primary format currently used by the GO Consortium.
* [GAF 1.0](GOAnnotationFileFormat1_0.md) is a deprecated format (as of June 2010), which captures slightly less information. The GO Consortium continues to provide files in this format for users who have not yet switched to GAF 2.0.

### Gene Product Association Data (GPAD): The GPAD format is designed to be more normalized than GAF, and is intended to work in conjunction with a separate format for exchanging gene product information (GPI).

* [GPAD 1.1](GeneProductAssociationDataFormat.md) contains the annotation data
* [GPI 1.2](GeneProductInformationFormat.md) contains the data about the gene products
