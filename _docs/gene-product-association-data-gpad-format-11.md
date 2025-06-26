---
title: Gene Product Association Data (GPAD) format 1.1
permalink: /docs/gene-product-association-data-gpad-format-1.1/
redirect_from: /docs/gene-product-association-data-gpad-format-1.2/
---

<!-- DB object ID section refers to GPAD 1.0.  What about in 1.1?  
Qualifiers section is confusing- says "the relationship between the gene product in the DB:DB object ID and the GO ID 
composed of up to three parts: an operator (optional), a modifier (optional) and an atomic relation (required) 
**this field is mandatory**, cardinality 1 or greater than 1, entries pipe-separated" and then "**qualifiers are optional**"
CBS is not DTU, link to DTU (http://www.bioinformatics.dtu.dk/) doesn't seem to be helpful.-->

# Gene Product Association Data (GPAD) files

GPAD files contain annotations for gene products which are further detailed in [GPI files](/docs/gene-product-information-gpi-format/). This page describes the *G*ene *P*roduct *A*ssociation *D*ata (GPAD) 1.1 and 1.2 format- for the current GPAD version, please see the [GPAD 2.0 guide](http://geneontology.org/docs/gene-product-association-data-gpad-format/).

The Gene Ontology Consortium stores annotation data, the representation of gene product attributes using GO terms, in tab-delimited text files. Each line in the file represents a single association between a gene product and a GO term with a certain evidence code and the reference to support the link. 

GO also provides annotations as [GAF files](/docs/go-annotation-file-gaf-format-2.2/). For more general information on annotation, please see the [Introduction to GO annotation](/docs/go-annotations/).

## Gene Product Association Data (GPAD) 1.1 format
The GPAD file is an alternative means of exchanging annotations from the Gene Association File (GAF). 
The GPAD format is designed to be more normalized than GAF and is intended to work in conjunction with a separate 
format for exchanging gene product information.
All annotation files must start with a single line denoting the file format. For GPAD 1.1 it is as follows:

    !gpa-version: 1.1
    
Other information, such as contact details for the submitter or database group, useful link, etc., can be included in an 
association file by prefixing the line with an exclamation mark (!); such lines will be ignored by parsers.
### Annotation file fields
The GPAD format comprises 12 tab-delimited fields, fields with multiple values (for example, gene product synonyms) 
should have these values separated by pipes.

| Column 	| Content 	| Required? 	| Cardinality 	| Example|
|----------|---------|-------------|---------|--------|
|1 |	[DB](#db "Definition and requirements for DB (column 1)") | 	required |	1 |	SGD| 
|2 |	[DB Object ID](#db-object-id "Definition and requirements for DB Object ID (column 2)") |	required |	1 |	P12345 |
|3 |	[Qualifier](#qualifier "Definition and requirements for Qualifier (column 3)") |	required |	1 or greater |	enables |
|4 |	[GO ID](#go-id "Definition and requirements for GO ID (column 4)") |	required |	1 |	GO:0019104 |
|5 |	[DB:Reference(s) (\|DB:Reference)](#dbreferences "Definition and requirements for DB:Reference (column 5)") |	required |	1 or greater |	PMID:20727966|
|6 |	[Evidence Code](#evidence-code "Definition and requirements for Evidence Code (column 6)") |	required |	1 |	ECO:0000021|
|7 |	[With (or) From](#with-or-from "Definition and requirements for With [or] From (column 7)") |	optional |	0 or greater |	Ensembl:ENSRNOP00000010579|
|8 |	[Interacting taxon ID](#interacting-taxon-id "Definition and requirements for Interacting Taxon ID (column 8)") |	optional |	0 or 1 |	4896|
|9 |	[Date](#date "Definition and requirements for Date (column 9)")  |	required | 1 |	20130529|
|10 |	[Assigned by](#assigned-by "Definition and requirements for Assigned by (column 10)") |	required | 1 |	PomBase|
|11 |	[Annotation Extension](#annotation-extension "Definition and requirements for Annotation Extension (column 11)") |	optional |	0 or greater |	occurs_in(GO:0005739)|
|12 |	[Annotation Properties](#annotation-properties "Definition and requirements for Annotation Properties (column 12)") |	optional |	0 or greater |	annotation_identifier = 2113431320|

### Definitions and requirements for field contents

#### DB
Refers to the database from which the identifier in **DB Object ID** is drawn. This is not necessarily the group submitting 
the file. If a UniProtKB ID is the **DB Object ID**, **DB** should be UniProtKB. Must be one of the values from the set of 
GO database cross-references.

This field is mandatory, cardinality 1 

#### DB Object ID
A unique identifier (from the database in DB) for the item being annotated

This field is mandatory, cardinality 1.

In GPAD 1.0 format, the identifier may reference a top-level primary gene or gene product identifier, or an identified variant 
of a gene or gene product. Contents may include protein sequence identifiers: for example, identifiers that specify distinct 
proteins produced by to differential splicing, alternative translational starts, post-translational cleavage or 
post-translational modification. Identifiers for functional RNAs can also be included in this column.
If the gene product is not a top-level gene or gene product identifier, the Gene Product Information (GPI) file should 
contain information about the canonical form of the gene or gene product.
The **DB Object ID** is the identifier for the database object, which may or may not correspond exactly to what is described 
in a paper. For example, a paper describing a protein may support annotations to the gene encoding the protein 
(gene ID in **DB Object ID** field) or annotations to a protein object (protein ID in **DB Object ID** field). 

#### Relations between Gene Products and GO Terms (also known as 'Qualifier')
The relationship between the gene product in the DB: **DB Object ID** and the GO ID composed of up to three parts: 
* a Gene Product to Term relation (required); this relation depends upon the term namespace. Default relations are as follows:
** Gene product *enables* molecular function
** Gene product *involved in* biological process
** Gene product *located in* cellular anatomical entity; Gene product  *part of* protein-containing complex.
  See [Annotation_Relations for Standard Annotation Dpcumentation](https://wiki.geneontology.org/Annotation_Relations#Standard_Annotation_Relations) for other allowed relations.
* an operator, "NOT"  optional)
* a qualifier (or modifier): either "contributes to" and "colocalizes with" (optional)  

This field is mandatory, cardinality 1 or greater than 1. Entries pipe-separated.

#### GO ID
The GO identifier for the term attributed to the DB object ID.

This field is mandatory, cardinality 1. 

#### DB:Reference
One or more unique identifiers for a single source cited as an authority for the attribution of the GO ID to the DB object ID. 
This may be a literature reference or a database record. The syntax is DB:accession. Note that only one reference can be cited 
on a single line in the gene association file. If a reference has identifiers in more than one database, multiple identifiers 
for that reference can be included on a single line. For example, if the reference is a published paper that has a PubMed ID, 
the PubMed ID must be included; if the model organism database has its own identifier for the reference, that can also be 
included.

This field is mandatory, cardinality 1, >1; for cardinality >1 use a pipe to separate entries (e.g. PMID:2676709|SGD_REF:S000047763). 

#### Evidence code
One of the codes from the [Evidence & Conclusion Ontology](http://www.evidenceontology.org), ECO
This field is mandatory, cardinality 1 

#### With [or] From
Also referred to as **With, From** or the **With/From** column

This field is required for some evidence codes cardinality 0, 1, >1; for cardinality >1 use a pipe to separate entries 
(e.g. UniProtKB:P10620|UniProtKB:P08011)

*Note*: This field is used to hold an additional identifier for annotations using certain evidence codes: ECO:0000305 [IC];
ECO:0000203, 0256, and 0265 [all IEA];ECO:00000316 [IGI]; ECO:0000021 [IPI]; ECO:0000031, 0250 and 0255 [all ISS].

For example, it can identify another gene product to which the annotated gene product is similar (ECO:0000031, 0250 and 0255, 
ISS) or interacts with (ECO:0000021, IPI).

More information on the meaning of with or from column entries is available in the [evidence code documentation](http://geneontology.org/page/guide-go-evidence-codes)
 for the relevant codes.

Cardinality = 0 is not recommended, but is permitted because cases can be found in literature where no database identifier 
can be found(e.g. physical interaction or sequence similarity to a protein, but no ID provided). Cardinality = 0 is not allowed 
for ISS annotations (ECO:0000031, ECO:0000250 and ECO:0000255) made after October 1, 2006. Annotations where evidence is 
ECO:0000316 [IGI], ECO:0000021 [IPI], or ECO:0000031, ECO:0000250 or ECO:0000255 [all ISS] and with cardinality = 0 should 
link to an explanation of why there is no entry in with. Cardinality may be >1 for any of the evidence codes that use with; 
for ECO:0000021 [IPI] and ECO:00000316 [IGI], cardinality >1 has a special meaning (see evidence documentation for 
more information). For cardinality >1 use a pipe to separate entries (e.g. FB:FBgn1111111|FB:FBgn2222222).

Note that a gene ID may be used in the with column for a ECO:0000021 [IPI] annotation, or for an ECO:0000031, ECO:0000250 
or ECO:0000255 [all ISS] annotation based on amino acid sequence or protein structure similarity, if the database does not 
have identifiers for individual gene products. A gene ID may also be used if the cited reference provides enough information 
to determine which gene ID should be used, but not enough to establish which protein ID is correct.

A GO:ID is used only when the evidence code is ECO:0000305 [IC], and refers to the GO term(s) used as the basis of a 
curator inference. In these cases the entry in the **DB:Reference** column will be that used to assign the GO term(s) 
from which the inference is made. This field is mandatory for evidence code ECO:0000305 [IC].

The ID is usually an identifier for an individual entry in a database (such as a sequence ID, gene ID, GO ID, etc.). 
Identifiers from the Center for Biological Sequence Analysis (CBS), however, represent tools used to find homology 
or sequence similarity; these identifiers can be used in the with column for ECO:0000031, ECO:0000250 or ECO:0000255 
[ISS] annotations.

The with column may not be used with the evidence codes ECO:0000314 [IDA], ECO:0000304 [TAS], ECO:0000303 [NAS], or 
ECO:0000307 [ND].

#### Interacting taxon ID
Taxonomic identifier for interacting organism to be used only in conjunction with terms that have the biological process 
term 'multi-organism process' or the cellular component term 'host' as an ancestor.

This field is mandatory for terms with parentage under 'multi-organism process' or 'host', cardinality 1; annotations to other 
terms should leave this column blank.

See the [GO annotation conventions for more information on multi-organism terms](http://geneontology.org/page/go-annotation-conventions#interactions). 

#### Date
Date on which the annotation was made; format is YYYYMMDD.

This field is mandatory, cardinality 1.

#### Assigned By
The database which made the annotation one of the values from the set of GO database cross-references; used for tracking 
the source of an individual annotation. Value will differ from the DB column for any annotation that is made by one 
database and incorporated into another.

This field is mandatory, cardinality 1.

#### Annotation Extension
Contains cross references to other ontologies that can be used to qualify or enhance the annotation. The cross-reference 
is prefaced by an appropriate GO relationship; references to multiple ontologies can be entered. For example, if a gene 
product is localized to the mitochondria of lymphocytes, the GO ID (column 5) would be mitochondrion ; GO:0005439, and 
the annotation extension column would contain a cross-reference to the term lymphocyte from the Cell Type Ontology. 
Targets of certain processes or functions can also be included in this field to indicate the gene, gene product, or 
chemical involved; for example, if a gene product is annotated to protein kinase activity, the annotation extension 
column would contain the UniProtKB protein ID for the protein phosphorylated in the reaction. See the documentation on 
using the annotation extension column for details of practical usage.

This field is optional, cardinality 0 or greater.

Note that several fields contain database cross-reference (dbxrefs) in the format dbname:dbaccession. The fields are: 
GO ID; Reference; With or From; and Annotation Extension.

#### Annotation Properties
 The Annotation Properties column can be filled with a pipe separated list of "property_name = property_value". 
There will be a fixed vocabulary for the property names and this list can be extended when necessary. 
 The initial supported properties would be curator_name and annotation_identifier, but can be extended to 
include curator_ID, modification_date, creation_date, annotation_notes, etc.

This field is optional, cardinality 0 or greater.

## Gene Product Association Data (GPAD) 1.2 format
From 2018 until the GPAD/GPI 2.0 files were formalized in mid 2024, GO generated a GPAD 1.2. 
These can be identified by the header: 

    !gpa-version: 1.2

In GPAD 1.2, qualifiers are required; in some draft specifications of GPAD 1.1 this field was not required. GPAD 1.2 files meet the specifications on this page.
