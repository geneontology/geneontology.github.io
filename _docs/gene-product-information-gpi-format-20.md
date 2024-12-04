---
title: Gene Product Information (GPI) format 2.0
permalink: /docs/gene-product-information-gpi-format-2.0/
redirect_from:
- /docs/gene-product-information-gpi-format/

---
# About GPAD/GPI files

The Gene Ontology Consortium stores annotation data, the representation of gene product attributes using GO terms, in tab-delimited text files. *G*ene *P*roduct *A*ssociation *D*ata (GPAD) and (*G*ene *P*roduct *I*nformation) (GPI) companion files reduce the redundancy of the [Gene Association File (GAF)](/docs/go-annotation-file-gaf-format-2.2/). GAF files contains information about gene products that are present in each line of the GAF: each non-header line in an annotation file represents a single association between a gene product and a GO term with a certain evidence code and the reference to support the link. The GPAD/GPI file system normalizes the data by separating the annotations and metadata about gene and gene product entities in two separate files. GPAD/GPI is intended for internal GO use. 

GO also provides annotations as [GAF files](/docs/go-annotation-file-gaf-format-2.2/) and recommends use of the GAF format for most use cases. For more general information on annotation, please see the [Introduction to GO annotation](/docs/go-annotations/).


# Gene Product Information (GPI) 2.0 file guidelines

This page is a summary of the Gene Product Information Data (GPI) 2.0 format; for full technical details and changes from GPI 1.2 [see the GitHub specification page](https://github.com/geneontology/go-annotation/blob/master/specs/gpad-gpi-2-0.md). 
**Note that the GPI file is the companion file for the [GPAD file](/docs/gene-product-association-data-gpad-format/).
Both files should be submitted together using the same version.** 

## Changes from the GPI 1.2 to GPI 2.0
* **Characters allowed in all fields have been explicitly specified**
* **Extensions in file names are: `*.gpad` and `*.gpi`**
  
**Header**
* **The `gpi-version:` header must read `2.0` for this format.**
  
**Columns**
* **Columns 1 & 2 in the GPI 1.2 are now combined in a single column containing an ID in CURIE syntax, e.g. `UniProtKB:P56704`.**
* **NCBI taxon IDs are to be prefixed with `NCBITaxon:` to indicate the source of the ID, e.g. `NCBITaxon:6239`**

## GPI Header
All annotation files MUST start with a single line denoting the file format. The database/group generating the file, as listed in dbxrefs.yaml, and the ISO-8601 formatted date the file was generated MUST also be included in the header. Example for GPI 2.0:

    !gpi-version: 2.0
    !generated-by: SGD 
    !date-generated: 2024-05-01
    
The group in the `generated-by` field must be present in the [dbxrefs.yaml file](https://github.com/geneontology/go-site/blob/master/metadata/db-xrefs.yaml). The year must be `YYYY-MM-DD`, conforming to the date portion of [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standards. Submitting groups may choose to include optional additional information in a file header by prefixing the line with an exclamation mark (`!`); such lines will be ignored by parsers. For example:

    !URL: http://www.yeastgenome.org/
    !Project-release: WS275
    !Funding: NHGRI grant number HG012212
    !go-version: https://doi.org/10.5281/zenodo.8436609

## GPI file fields

The file format comprises 11 tab-delimited fields. Fields with multiple values (for example, gene product synonyms) should separate values by pipes.
**Required fields are shown in bold.**

| **Column** | **Content** | **Cardinality** | **Example 1: protein**| **Example 2: isoform**| **Example 3: complex** | **Example 3: ncRNA**
|----------|---------|-------------|---------|--------|
| 1 | **[DB:Object ID](#1-dbdb-object-id "Definition and requirements for DB:DB_Object_ID (column 1)")** |	1 |	UniProtKB:Q4VCS5| 	UniProtKB:Q4VCS5-1|  SGD:S000217643 |  RNAcentral:URS0000527F89_9606 | 
| 2 | **[Object Symbol](#2-db-object-symbol "Definition and requirements for DB Object Symbol (column 2)")** |	1 |	AMOT| AMOT|  CBF1:MET4:MET28 | URS0000527F89_9606 | 
| 3 | [Object Name](#3-db-object-name "Definition and requirements for DB Object Name (column 3)") |	0 or > | Angiomotin| Angiomotin| sulfur metabolism transcription factor complex | Homo sapiens (human) hsa-miR-145-5p | 
| 4 | [Object_Synonym(s)](#4-db-object-synonym "Definition and requirements for DB Object Synonym(s) (column 4)") |	0 or > |	KIAA1071| KIAA1071| | | 
| 5 | **[Object Type](#5-db-object-type "Definition and requirements for DB Object Type (column 5)")** |	1 |	PR:000000001| PR:000000001| GO:0032991 |  SO:0000276	
| 6 | **[Object Taxon](#6-db-object-taxon "Definition and requirements for DB Object Taxon (column 6)")** | 1 |	NCBITaxon:9606| NCBITaxon:9606|  NCBITaxon:559292 | NCBITaxon:9606| 
| 7 | [Encoded by](#7-encoded-by "Definition and requirements for Encoded by (column 7)") | 0 or > | HGNC:17810 | HGNC:17810 | | HGNC:31532 |
| 8 | [Parent Protein](#8-parent-protein "Definition and requirements for Parent Protein (column 8)") |		0 or 1 |	| UniProtKB:Q4VCS5 | | |
| 9 | [Protein Complex Members](#9-protein-containing-complex-members "Definition and requirements for Protein Containing Complex Members (column 9)") | 0 or greater | | |SGD:S000003821 \|<br/>SGD:S000001456 \|<br/>SGD:S000005047| | 
| 10 | [Cross-reference(s)](#10-db-xrefs "Definition and requirements for DB_Xref(s) (column 10)") | 0 or > | NCBIGene:154796 \|<br/>ENSEMBL:ENSG00000126016 | NCBIGene:154796 \|<br/>ENSEMBL:ENSG00000126016 | ComplexPortal:CPX-1016 | ENSG00000276365 | 
| 11 | [Gene Product Properties](#11-gene-product-properties "Definition and requirements for Gene Product Properties (column 11)") | 0 or > |	db_subset=Swiss-Prot| | | | 

### Definitions and requirements for field contents

#### 1. DB:Object ID
A unique identifier for the item being annotated. The **DB** prefix is the database from which the **DB Object ID** is drawn and must be one of the values from the set of GO database cross-references. The **DB:DB Object ID** is the combined identifier for the database object. Examples:

* `UniProtKB:P99999`
* `SGD:S000002164`
* `MGI:MGI:1919306`

The identifier usually references the canonical form of a gene or gene product including functional RNAs.  Identifiers may also describe gene variants, distinct proteins produced by to differential splicing, alternative translational starts, post-translational cleavage or post-translational modification. If the gene product is not a canonical gene or gene product identifier, the Gene Product Information (GPI) file should contain information about the canonical form of the gene or gene product.

This field is mandatory, cardinality 1.

#### 2. Object Symbol
A (unique and valid) symbol to which the **DB:Object_ID** is matched. No white spaces allowed.

The text entered in the **DB_Object_Symbol** should refer to the entity in **DB:Object_ID**. The **Object_Symbol** field should contain a symbol that is recognizable to a biologist wherever possible (gene product symbol, abbreviation widely used in the literature, ORF name, etc.). It is not a unique identifier or an accession number (unlike the **DB:Object_ID**), although IDs can be used as a **Object_Symbol** if there is no more biologically meaningful symbol available (e.g., when an unnamed gene is annotated). For example, several alternative transcripts from one gene may be annotated separately, each with specific gene product identifiers in **DB:Object_ID**, but with the same gene symbol in the **Object_Symbol** column. 

This field is mandatory, cardinality 1.

#### 3. Object Name
The name of the gene or gene product in **DB:Object_ID**. The text entered in the **Object_Name** should refer to the entity in **DB:Object_ID**. White spaces are allowed in this field. 

This field is not mandatory, cardinality 0, 1.

#### 4. Object Synonym
Alternative names for the entity in **DB:Object_ID**. These entries may be a gene symbol or other text. Note that we strongly recommend that synonyms are included in the GPI file, as this aids the searching of GO.

This field is not mandatory, cardinality 0, 1, >1 [white space allowed]; for cardinality >1 use a pipe to separate entries (e.g. YFL039C\|ABY1\|END7\|actin gene). 

#### 5. Object Type
An ontology identifier for the biological entity in **DB:Object_ID** which is annotated with GO. This field uses Sequence Ontology, Protein Ontology, and GO IDs and must correspond to one of the [permitted GPI entity types](https://github.com/geneontology/go-annotation/blob/master/specs/gpad-gpi-2-0.md#gpi-entity-types) or a more granular child term. Common entries include: 

* protein  	PR:000000001
* protein-coding gene SO:0001217
* gene  SO:0000704
* ncRNA  SO:0000655
  * any subtype of ncRNA in the Sequence Ontology, including ncRNA-coding gene 	 	SO:0001263
* protein-containing complex 	GO:0032991

The object type listed in the **Object_Type** field must match the database entry identified by the **DB:Object_ID**.

This field is mandatory, cardinality 1.

#### 6. Object Taxon
The NCBI taxon ID of the species encoding the **DB:Object_ID**, including the prefix `NCBITaxon:`. 

This field is mandatory, cardinality 1.

#### 7. Encoded by
For proteins and transcripts, **Encoded by** refers to the gene ID that encodes those entities, e.g. ENSG00000197153.

This field is not mandatory, cardinality 0, 1, >1 ; for cardinality >1, use a pipe to separate entries. 

#### 8. Parent Protein
When column 1 refers to a protein isoform or modified protein, this column refers to the gene-centric reference protein accession of the column 1 entry.

This field is not mandatory, cardinality 0, 1, >1 ; for cardinality >1, use a pipe to separate entries. 

#### 9. Protein-Containing Complex Members
When column 1 references a protein-containing complex, this column contains the gene-centric reference protein accessions.

This field is not mandatory, cardinality 0, 1, >1 ; for cardinality >1, use a pipe to separate entries. 

#### 10. Database cross-references (DB_Xrefs)
Identifiers for the object in **DB:Object_ID** found in other databases. Identifiers used must be standard 2-part global identifiers, e.g. UniProtKB:Q60FP0. For proteins in model organism databases, **DB_Xrefs** must include the correponding UniProtKB ID, and may also include NCBI gene or protein IDs, etc. 

This field is not mandatory, cardinality 0, 1, >1 ; for cardinality >1, use a pipe to separate entries. 

#### 11. Gene Product Properties
The Properties column can be filled with a pipe separated list of values in the format "property_name = property_value". There is a fixed vocabulary for the property names and this list can be extended when necessary. Supported properties will include: 'GO annotation complete', "Phenotype annotation complete' (the value for these two properties would be a date), 'Target set' (e.g. Reference Genome, kidney, etc.), 'Database subset' (e.g. Swiss-Prot, TrEMBL). 

This field is not mandatory, cardinality 0, 1, >1 ; for cardinality >1, use a pipe to separate entries. 
