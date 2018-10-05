---
title: Gene Product Information (GPI) Format
permalink: /docs/gene-product-information-gpi-format/

---

# Gene Product Information (GPI) Files
+ The Gene Ontology Consortium stores annotation data, the representation of gene product attributes using GO terms, in tab-delimited text files. Each line in the file represents a single association between a gene product and a GO term with a certain evidence code and the reference to support the link. This page describes the Gene Product Information (GPI) 1.2 format. 
+ **Note that the GPI file is the companion file for the [GPAD file](/docs/gene-product-association-data-gpad-format/).**
+ GO also provides annotations as [GAF files](/docs/go-annotation-file-gaf-format-21/).
+ For more general information on annotation, please see the [Introduction to GO annotation page](/docs/go-annotations/).

# Gene Product Information (GPI) 1.2 format

## GPI format version
All annotation files must start with a single line denoting the file format. For GPI it is as follows:

    !gpi-version: 1.2
Other information, such as contact details for the submitter or database group, useful links, etc., can be included in an association file by prefixing the line with an exclamation mark (**!**); such lines will be ignored by parsers.
## Annotation File Fields

The file format comprises 10 tab-delimited fields. Fields with multiple values (for example, gene product synonyms) should separate values by pipes.

| **Column** | **Content** | **Required?**	| **Cardinality** | **Example**|
|----------|---------|-------------|---------|--------|
| 1 | [DB](#db "Definition and requirements for DB (column 1)") |	required |	1 |	UniProtKB|
| 2 | [DB_Object_ID](#db-object-id "Definition and requirements for DB Object ID (column 2)") |	required |	1 |	Q4VCS5-1|
| 3 | [DB_Object_Symbol](#db-object-symbol "Definition and requirements for DB Object Symbol (column 3)") |	required |	1 |	AMOT|
| 4 | [DB_Object_Name](#db-object-name "Definition and requirements for DB Object Name (column 4)") |	optional |	0 or greater |	Angiomotin|
| 5 | [DB_Object_Synonym(s)](#db-object-synonyms "Definition and requirements for DB Object Synonym(s) (column 5)") |	optional |	0 or greater |	AMOT|KIAA1071|
| 6 | [DB_Object_Type](#db-object-type "Definition and requirements for DB Object Type (column 6)") |	required |	1 |	protein|
| 7 | [Taxon](#taxon "Definition and requirements for Taxon (column 1)") |	required |	1 |	taxon:9606|
| 8 | [Parent_Object_ID](#parent-object-id "Definition and requirements for Parent Object ID (column 8)") |	optional |	0 or 1 |	UniProtKB:Q4VCS5|
| 9 | [DB_Xref(s)](#db-xrefs "Definition and requirements for DB_Xref(s) (column 9)") |	optional |	0 or greater | |
| 10 | [Properties](#properties "Definition and requirements for Properties (column 10)") |	optional |	0 or greater |	db_subset=Swiss-Prot|

### Definitions and requirements for field contents

#### DB
The database abbreviation (namespace) for the source of the **DB_Object_ID**.\
This field is mandatory; cardinality 1.
#### DB_Object_ID
A unique identifier (from the database in DB) for the item being annotated.\
This field is mandatory, cardinality 1.\
In GPI 1.0 format, the identifier may reference a top-level primary gene or gene product identifier, or an identified variant of a gene or gene product, for example identifiers that specify distinct proteins produced by differential splicing, alternative translational starts, post-translational cleavage, or post-translational modification. Identifiers for functional RNAs and protein complexes can also be included in this column. 
    If the gene product is not a top-level gene or gene product identifier, the **Parent_Object_ID** field should contain the canonical form of the gene or gene product. 
    Note that while the **DB_Object_ID** is the identifier for a database object that may be used for annotation, it may or may not correspond exactly to what is described in a paper. For example, a paper describing functional characterization of a protein may result in annotations to the gene encoding the protein (gene ID in **DB_Object_ID**) or annotations to the protein (protein ID in **DB_Object_ID**), depending on annotation practice of the contributing group. 
#### DB_Object_Symbol
A (unique and valid) symbol to which the **DB_Object_ID** is matched.\
This field is mandatory, cardinality 1.\
The **DB_Object_Symbol** field should contain a symbol that is recognizable to a biologist wherever possible (an abbreviation widely used in the literature, for example). It is not a unique identifier or an accession number (unlike the **DB_Object_ID**), although IDs can be used as a **DB_Object_Symbol** if there is no more biologically meaningful symbol available (e.g., when an unnamed gene is annotated). ORF names can be used for otherwise unnamed genes or proteins. If gene products are annotated, the gene product symbol can be used if available. Many gene product annotation entries may share a gene symbol. 
The text entered in the **DB_Object_Name** and **DB_Object_Symbol** should refer to the entity in **DB_Object_ID**. For example, several alternative transcripts from one gene may be annotated separately, each with specific gene product identifiers in **DB_Object_ID**, but with the same gene symbol in the **DB_Object_Symbol** column. 
#### DB_Object_Name
The name of the gene or gene product in **DB_Object_ID**.\
This field is not mandatory, cardinality 0, 1 [white space allowed]\
The text entered in the **DB_Object_Name** and **DB_Object_Symbol** should refer to the entity in **DB_Object_ID**. 
#### DB_Object_Synonym
These entries may be a gene symbol or other text. Note that we strongly recommend that synonyms are included in the GPI file, as this aids the searching of GO.\
This field is not mandatory, cardinality 0, 1, >1 [white space allowed]; for cardinality >1 use a pipe to separate entries (e.g. YFL039C|ABY1|END7|actin gene). 
#### DB_Object_Type
A description of the type of the gene or gene product being annotated. This field uses Sequence Ontology labels and may correspond to one of the following: gene, protein_complex; protein; transcript; ncRNA; rRNA; tRNA; snRNA; snoRNA; or any subtype of ncRNA in the Sequence Ontology. If the precise product type is unknown, gene_product should be used.\
This field is mandatory, cardinality 1.\
The object type (gene, transcript, protein, protein_complex, etc.) listed in the **DB_Object_Type** field must match the database entry identified by the **DB_Object_ID**. Note that **DB_Object_Type** refers to the database entry (i.e. it represents a protein, functional RNA, etc.); this column does not reflect anything about the GO term or the evidence on which the annotation is based. 
#### Taxon
The NCBI taxon ID of the species encoding the gene product.\
This field is mandatory, cardinality 1.\
The taxon should be specified as a number with the prefix "taxon". 
#### Parent_Object_ID
If the **DB_Object_ID** refers to a variant of a gene product, this column will hold the identifier of the gene product from which it was derived.\
This field is mandatory, cardinality 1, when variant forms of a gene product (e.g. identifiers that specify distinct proteins produced by differential splicing, alternative translational starts, post-translational cleavage or post-translational modification) are represented in **DB_Object_ID**. If the **DB_Object_ID** refers to the canonical form of a gene product, this column should be blank.\
The identifier used must be a standard 2-part global identifier, e.g. UniProtKB:OK0206 
The entity in the **Parent_Object_ID** column may not necessarily be the canonical form of the gene product; the canonical form would be identifiable as an entry for that gene product in the GPI file that would have the **Parent_Object_ID** blank. 
#### DB_Xrefs
Identifiers for the object in **DB_Object_ID** found in other databases.\
This field is optional, cardinality 0+; multiple identifiers should be pipe-separated.\
Identifiers used must be a standard 2-part global identifiers, e.g. UniProtKB:OK0206 
This column should be used to record IDs for this object in other databases; for gene products in model organism databases, this must include the UniProtKB ID, and may also include NCBI gene or protein IDs, etc. 
#### Properties
This field is optional, cardinality 0+; multiple properties should be pipe-separated.\
The Properties column can be filled with a pipe separated list of values in the format "property_name = property_value". There is a fixed vocabulary for the property names and this list can be extended when necessary. Supported properties will include: 'GO annotation complete', "Phenotype annotation complete' (the value for these two properties would be a date), 'Target set' (e.g. Reference Genome, Kidney etc.), 'Database subset' (e.g. Swiss-Prot, TrEMBL). 
