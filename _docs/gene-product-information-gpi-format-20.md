---
title: Gene Product Information (GPI) format 2.0
permalink: /docs/gene-product-information-gpi-format-2.0/

---
# This page describes the Gene Product Information (GPI) 2.0 format. This format has not yet been implemented in GO but is provided to help with the changeover from previous GPAD/GPI versions.
## Currently under construction


# Gene Product Information (GPI) files

The Gene Ontology Consortium stores annotation data, the representation of gene product attributes using GO terms, in tab-delimited text files. Each non-header line in an annotation file represents a single association between a gene product and a GO term with a certain evidence code and the reference to support the link. 

This guide lays out the format specifications for the *G*ene *P*roduct *I*nformation (GPI) 2.0 format.
**Note that the GPI file is the companion file for the [GPAD file](/docs/gene-product-association-data-gpad-format/).
Both files should be submitted together using the same version.** 

GPAD/GPI is intended for internal GO use. GO also provides annotations as [GAF files](/docs/go-annotation-file-gaf-format-2.2/) and reccommends use of the GAF format for most use cases. 

For more general information on annotation, please see the [Introduction to GO annotation](/docs/go-annotations/).

# Changes from the GPI 1.2 to GPI 2.0
**Header**
* **The `gpi-version` header must read `2.0` for this format.**
  
**Columns**
* **Columns 1 & 2 from the GPI 1.2 are now combined in a single column containing an ID in CURIE syntax, e.g. `UniProtKB:P56704`.**
* **NCBI taxon IDs are to be prefixed with `NCBITaxon:` to indicate the source of the ID, e.g. `NCBITaxon:6239`**
* **Dates must now follow the ISO-8601 format YYYY-MM-DD; time may be included as YYYY-MM-DDTHH:MM:SS**
<!-- does col 5 have to be an ontology ID or are ontology labels, entity types ok? -->

# Gene Product Information (GPI) 2.0 format

## GPI Header
### Required information to provide in the header:
All annotation files must start with a single line denoting the file format. The database/group generating the file as listed in dbxrefs.yaml and the ISO-8601 formatted date the file was generated must be included in the header. Example for GPI 2.0:

    !gpi-version: 2.0
    !generated-by: SGD 
    !date-generated: 2024-05-01
    
Other information, such as contact details for the submitter or database group, database URLs, etc. can be included in an association file header by prefixing the line with an exclamation mark (`!`); such lines will be ignored by parsers.

## GPI fields

The file format comprises 11 tab-delimited fields. Fields with multiple values (for example, gene product synonyms) should separate values by pipes.

| **Column** | **Content** | **Required?**	| **Cardinality** | **Example**|
|----------|---------|-------------|---------|--------|
| 1 | [DB:DB_Object_ID](#dbdb-object-id "Definition and requirements for DB:DB Object ID (column 1)") |	required |	1 |	UniProtKB:Q4VCS5-1|
| 2 | [DB_Object_Symbol](#db-object-symbol "Definition and requirements for DB Object Symbol (column 2)") |	required |	1 |	AMOT|
| 3 | [DB_Object_Name](#db-object-name "Definition and requirements for DB Object Name (column 3)") |	optional |	0 or greater |	Angiomotin|
| 4 | [DB_Object_Synonym(s)](#db-object-synonym "Definition and requirements for DB Object Synonym(s) (column 4)") |	optional |	0 or greater |	KIAA1071|
| 5 | [DB_Object_Type](#db-object-type "Definition and requirements for DB Object Type (column 5)") |	required |	1 |	PR:000000001|
| 6 | [DB_Object_Taxon](#db-object-taxon "Definition and requirements for DB Object Taxon (column 6)") |	required |	1 |	NCBITaxon:9606|
| 7 | [Encoded_by](#encoded-by "Definition and requirements for Encoded by (column 7)") | optional | 0 or greater | HGNC:17810 |
| 8 | [Parent_Protein](#parent-protein "Definition and requirements for Parent Protein (column 8)") |	optional |	0 or 1 |	UniProtKB:Q4VCS5|
| 9 | [Protein_Containing_Complex_Members](#protein-containing-complex-members "Definition and requirements for Protein Containing Complex Members (column 9)") | optional | 0 or greater | SGD:S000003821,SGD:S000001456,SGD:S000005047|
| 10 | [DB_Xref(s)](#db-xrefs "Definition and requirements for DB_Xref(s) (column 10)") |	optional |	0 or greater | NCBIGene:154796\|ENSEMBL:ENSG00000126016 |
| 11 | [Gene_Product_Properties](#gene-product-properties "Definition and requirements for Gene Product Properties (column 11)") |	optional |	0 or greater |	db_subset=Swiss-Prot|


### GPI 2.0 example content
    SGD:S000005027  Sal1  ADP/ATP transporter  YNL083W  PR:000000001  NCBItaxon:559292    UniProtKB:D6W196          
    
    SGD:S000217643  CBF1:MET4:MET28CBF1-MET4-MET28 sulfur metabolism transcription factor complex    GO:0032991  NCBItaxon:559292      SGD:S000003821,SGD:S000001456,SGD:S000005047  ComplexPortal:CPX-1016  
    
    RNAcentral:URS0000527F89_9606		Homo sapiens (human) hsa-miR-145-5p    SO:0000276		NCBITaxon:9606  HGNC:31532      NCBIGene:406937\|ENSEMBL:ENSG00000276365  


### Definitions and requirements for field contents

#### DB:DB Object ID
The **DB** prefix is the database abbreviation (namespace) from which the unique identifier **DB Object ID** is drawn and must be one of the values from the set of GO database cross-references. The **DB:DB Object ID** is the combined identifier for the database object.

This field is mandatory, cardinality 1.

<!--In GPI 1.0 format, the identifier may reference a top-level primary gene or gene product identifier, or an identified variant of a gene or gene product, for example identifiers that specify distinct proteins produced by differential splicing, alternative translational starts, post-translational cleavage, or post-translational modification. Identifiers for functional RNAs and protein complexes can also be included in this column. 
    If the gene product is not a top-level gene or gene product identifier, the **Parent_Object_ID** field should contain the canonical form of the gene or gene product. 
    Note that while the **DB_Object_ID** is the identifier for a database object that may be used for annotation, it may or may not correspond exactly to what is described in a paper. For example, a paper describing functional characterization of a protein may result in annotations to the gene encoding the protein (gene ID in **DB_Object_ID**) or annotations to the protein (protein ID in **DB_Object_ID**), depending on annotation practice of the contributing group. 
-->
#### DB Object Symbol
A (unique and valid) symbol to which the **DB:DB_Object_ID** is matched. No white spaces allowed.

The text entered in the **DB_Object_Symbol** should refer to the entity in **DB:DB_Object_ID**. The **DB_Object_Symbol** field should contain a symbol that is recognizable to a biologist wherever possible (gene product symbol, abbreviation widely used in the literature, ORF name, etc.). It is not a unique identifier or an accession number (unlike the **DB:DB_Object_ID**), although IDs can be used as a **DB_Object_Symbol** if there is no more biologically meaningful symbol available (e.g., when an unnamed gene is annotated). For example, several alternative transcripts from one gene may be annotated separately, each with specific gene product identifiers in **DB:DB_Object_ID**, but with the same gene symbol in the **DB_Object_Symbol** column. 

This field is mandatory, cardinality 1.

#### DB Object Name
The name of the gene or gene product in **DB:DB_Object_ID**. The text entered in the **DB_Object_Name** should refer to the entity in **DB:DB_Object_ID**. White spaces are allowed in this field. 

This field is not mandatory, cardinality 0, 1.

#### DB Object Synonym
Alternative names for the entity in **DB:DB_Object_ID**. These entries may be a gene symbol or other text. Note that we strongly recommend that synonyms are included in the GPI file, as this aids the searching of GO.

This field is not mandatory, cardinality 0, 1, >1 [white space allowed]; for cardinality >1 use a pipe to separate entries (e.g. YFL039C\|ABY1\|END7\|actin gene). 

#### DB Object Type
An ontology identifier for the biological entity in **DB:DB_Object_ID** which is annotated with GO. This field uses Sequence Ontology, Protein Ontology, and GO IDs and must correspond to one of the [permitted GPI entity types](https://github.com/geneontology/go-annotation/blob/master/specs/gpad-gpi-2-0.md#gpi-entity-types) or a more granular child term. Common entries include: 

* protein  	PR:000000001
* protein-coding gene SO:0001217
* gene  SO:0000704
* ncRNA  SO:0000655
  ** any subtype of ncRNA in the Sequence Ontology, including ncRNA-coding gene 	 	SO:0001263
* protein-containing complex 	GO:0032991

The object type listed in the **DB_Object_Type** field must match the database entry identified by the **DB:DB_Object_ID**.


This field is mandatory, cardinality 1.

#### DB Object Taxon
The NCBI taxon ID of the species encoding the **DB:DB_Object_ID**, including the prefix `NCBItaxon:`. 

This field is mandatory, cardinality 1.

#### Encoded by
For proteins and transcripts, **Encoded by** refers to the gene ID that encodes those entities.

This field is not mandatory, cardinality 0, 1, >1 ; for cardinality >1 use a pipe to separate entries. 

#### Parent Protein
When column 1 refers to a protein isoform or modified protein, this column refers to the gene-centric reference protein accession of the column 1 entry.

This field is optional, cardinality 0+; multiple identifiers should be pipe-separated.

#### Protein Containing Complex Members
When column 1 references a protein-containing complex, this column contains the gene-centric reference protein accessions.

This field is optional, cardinality 0+; multiple identifiers should be pipe-separated.

#### DB Xrefs
Identifiers for the object in **DB:DB_Object_ID** found in other databases. Identifiers used must be standard 2-part global identifiers, e.g. UniProtKB:Q60FP0. For gene products in model organism databases, **DB_Xrefs** must include the UniProtKB ID, and may also include NCBI gene or protein IDs, etc. 

This field is optional, cardinality 0+; multiple identifiers should be pipe-separated.

#### Gene Product Properties
The Properties column can be filled with a pipe separated list of values in the format "property_name = property_value". There is a fixed vocabulary for the property names and this list can be extended when necessary. Supported properties will include: 'GO annotation complete', "Phenotype annotation complete' (the value for these two properties would be a date), 'Target set' (e.g. Reference Genome, kidney, etc.), 'Database subset' (e.g. Swiss-Prot, TrEMBL). 

This field is optional, cardinality 0+; multiple properties should be pipe-separated.
