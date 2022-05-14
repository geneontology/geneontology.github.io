 <!---

THIS FILE IS FOR REFERENCE ONLY

---
title: "GO Annotation file format: GAF 1.0"
permalink: /docs/go-annotation-file-gaf-format-1.0/
redirect_from: 
- /page/go-annotation-file-format-10
---

THIS FILE IS FOR REFERENCE ONLY
--->
THIS FILE IS FOR REFERENCE ONLY
THIS FILE IS FOR REFERENCE ONLY
THIS FILE IS FOR REFERENCE ONLY

# GO Annotation File (GAF) 1.0 (Deprecated)
Annotation data is submitted to the GO Consortium in the form of gene association files, or GAFs. The following document lays out the format specifications for the **deprecated** *G*ene *A*ssociation *F*ile (GAF) 1.0; for the current format please see the [GAF 2.2 guide](/docs/go-annotation-file-gaf-format-2.2/).

### File header

All gene association files must start with a single line denoting the file format, as follows:

    !gaf-version: 1.0

Other information, such as contact details for the submitter or database group, useful link, etc., can be included in an association file by prefixing the line with an exclamation mark (`!`); such lines will be ignored by parsers.
### Annotation File Fields

The annotation flat file format is comprised of 15 tab-delimited fields; *italic text* denotes required fields.


Column 	| Content 	| Required? |	Cardinality |	Example
--------|----------|-----------|-------------|---------
1 |	[*DB*](#db-column-1 "Definition and requirements for DB (column 1)") |	required |	1 |	UniProtKB
2 |	[*DB Object ID*](#db-object-id-column-2 "Definition and requirements for DB Object ID (column 2)")	| required |	1 |	P12345
3 |	[*DB Object Symbol*](#db-object-symbol-column-3 "Definition and requirements for DB Object Symbol (column 3)") |	required |	1 |	PHO3
4 |	[Qualifier](#qualifier-column-4 "Definition and requirements for Qualifier (column 4)") |	optional |	0 or greater |	NOT
5 |	[*GO ID*](#go-id-column-5 "Definition and requirements for GO ID (column 5)") |	required |	1 |	GO:0003993
6 |	[*DB:Reference (\|DB:Reference)*](#dbreference-column-6 "Definition and requirements for DB:Reference (column 6)") |	required |	1 or greater |	SGD_REF:S000047763|PMID:2676709
7 |	[*Evidence Code**](#evidence-code-column-7 "Definition and requirements for Evidence Code (column 7)") 	| required |	1 |	IMP
8 |	[With (or) From](#with-or-from-column-8 "Definition and requirements for With [or] From (column 8)") |	optional | 	0 or greater |	GO:0000346
9 |	[*Aspect*](#aspect-column-9 "Definition and requirements for Aspect (column 9)") 	| required |	1 |	F
10|	[DB Object Name](#db-object-name-column-10 "Definition and requirements for DB Object Name (column 10)") |	optional |	0 or 1 |	Toll-like receptor 4
11|	[DB Object Synonym (\|Synonym)](#db-object-synonym-column-11 "Definition and requirements for DB Object Synonym (column 11)") |	optional |	0 or greater |	hToll|Tollbooth
12| [*DB Object Type*](#db-object-type-column-12 "Definition and requirements for DB Object Type (column 12)") |	required |	1 |	protein
13| [*Taxon(\|taxon)*](#taxon-column-13 "Definition and requirements for Taxon (column 13)") |	required |	1 or 2 |	taxon:9606
14| [*Date*](#date-column-14 "Definition and requirements for Date (column 14)") |	required |	1 |	20090118
15| [*Assigned By*](#assigned-by-column-15 "Definition and requirements for Assigned By (column 15)") |	required | 	1 |	SGD
 
### Definitions and requirements for field contents

#### DB
(Database) refers to the database from which the identifier in **DB object ID** (column 2) is drawn. This is not necessarily the group submitting the file. If a UniProtKB ID is in column 2, column 1 would be **UniProtKB**. 

Must be one of the values from the set of [GO database cross-references](http://amigo.geneontology.org/xrefs)

    this field is mandatory, cardinality 1

#### DB Object ID
(Database object identifier) a unique identifier in **DB** for the item being annotated

    this field is mandatory, cardinality 1

The entry in the **DB object ID** field of the association file is the identifier for the database object, which may or may not correspond exactly to what is described in a paper. For example, a paper describing a protein may support annotations to the gene encoding the protein (gene ID in **DB object ID** field) or annotations to a protein object (protein ID in **DB object ID field**).

#### DB Object Symbol
a (unique and valid) symbol to which **DB object ID** is matched

can use ORF name for otherwise unnamed gene or protein

if gene products are annotated, can use gene product symbol if available, or many gene product annotation entries can share a gene symbol 

    this field is mandatory, cardinality 1

The **DB Object Symbol** field should be a symbol that means something to a biologist wherever possible (a gene symbol, for example). It is not an ID or an accession number (the second column, **DB object ID** provides the unique identifier), although IDs can be used as a **DB object symbol** if there is no more biologically meaningful symbol available (e.g., when an unnamed gene is annotated).

#### Qualifier
flags that modify the interpretation of an annotation

one (or more) of `NOT`, contributes_to, colocalizes_with

    this field is not mandatory; cardinality 0, 1, >1; for cardinality >1 use a pipe to separate entries (e.g. `NOT`|contributes_to)

See also the [documentation on qualifiers](http://geneontology.org/docs/go-annotations/#annotation-qualifiers) in the GO annotation guide

#### GO ID
The GO identifier for the term attributed to the **DB object ID**

    this field is mandatory, cardinality 1

#### DB:Reference
One or more unique identifiers for a single source cited as an authority for the attribution of the **GO ID** to the **DB object ID**. This may be a literature reference or a database record. The syntax is DB:accession_number.

Note that only **one reference can be cited on a single line** in the gene association file. If a reference has identifiers in more than one database, multiple identifiers for that reference can be included on a single line. For example, if the reference is a published paper that has a PubMed ID, we strongly recommend that the PubMed ID be included, as well as an identifier within a model organism database. Note that if the model organism database has an identifier for the reference, that identifier should **always** be included, even if a PubMed ID is also used.

    this field is mandatory, cardinality 1, >1; for cardinality >1 use a pipe to separate entries (e.g. SGD_REF:S000047763|PMID:2676709).

#### Evidence Code
see the [GO evidence code guide](http://geneontology.org/page/guide-go-evidence-codes) for the list of valid evidence codes for GO annotations

    this field is mandatory, cardinality 1

#### With [or] From
One of:

* DB:gene_symbol
* DB:gene_symbol[allele_symbol]
* DB:gene_id
* DB:protein_name
* DB:sequence_id
* GO:GO_id

 this field is not mandatory overall, but is required for some evidence codes (see below and the [evidence code documentation](http://geneontology.org/page/guide-go-evidence-codes) for details); cardinality 0, 1, >1; for cardinality >1 use a pipe to separate entries (e.g. CGSC:pabA\|CGSC:pabB)

Note: This field is used to hold an additional identifier for annotations using certain evidence codes (IC, IEA, IGI, IPI, ISS). For example, it can identify another gene product to which the annotated gene product is similar (ISS) or interacts with (IPI). More information on the meaning of **with or from** column entries is available in the [evidence code documentation](http://geneontology.org/page/guide-go-evidence-codes) entries for the relevant codes.

Cardinality = 0 is not recommended, but is permitted because cases can be found in literature where no database identifier can be found (e.g. physical interaction or sequence similarity to a protein, but no ID provided). Cardinality = 0 is not allowed for ISS annotations made after October 1, 2006. Annotations where evidence is IGI, IPI, or ISS and with cardinality = 0 should link to an explanation of why there is no entry in **with**. Cardinality may be >1 for any of the evidence codes that use with; for IPI and IGI cardinality >1 has a special meaning (see evidence documentation for more information). For cardinality >1 use a pipe to separate entries (e.g. FB:FBgn1111111\|FB:FBgn2222222).

Note that a gene ID may be used in the **with** column for an IPI annotation, or for an ISS annotation based on amino acid sequence or protein structure similarity, if the database does not have identifiers for individual gene products. A gene ID may also be used if the cited reference provides enough information to determine which gene ID should be used, but not enough to establish which protein ID is correct.

'GO:GO_id' is used only when the evidence code is IC, and refers to the GO term(s) used as the basis of a curator inference. In these cases the entry in the 'DB:Reference' column will be that used to assign the GO term(s) from which the inference is made. This field is mandatory for evidence code IC.
The ID is usually an identifier for an individual entry in a database (such as a sequence ID, gene ID, GO ID, etc.). Identifiers from the Center for Biological Sequence Analysis (CBS), however, represent tools used to find homology or sequence similarity; these identifiers can be used in the **with** column for ISS annotations.

The **with** column may *not* be used with the evidence codes IDA, TAS, NAS, or ND.

#### Aspect
one of P (biological process), F (molecular function) or C (cellular component)

    this field is mandatory; cardinality 1

#### DB Object Name
name of gene or gene product

    this field is not mandatory, cardinality 0, 1 [white space allowed]

#### DB Object Synonym
Gene symbol [or other text] 
Note that we strongly recommend that gene synonyms are included in the gene association file, as this aids the searching of GO.

    this field is not mandatory, cardinality 0, 1, >1 [white space allowed]; for cardinality >1 use a pipe to separate entries (e.g. YFL039C|ABY1|END7|actin gene)
 
#### DB Object Type
what kind of thing is being annotated.

one of gene (SO:0000704), transcript (SO:0000673), protein (SO:0000358), protein_structure, complex 

    this field is mandatory, cardinality 1  
    
The object type (gene, transcript, protein, protein_structure, etc.) listed in the **DB object type** field **must** match the database entry identified by the **DB object ID**.  Note that DB object type refers to the database entry (i.e. it represents a protein, functional RNA, etc.); this column does not reflect anything about the GO term or the evidence on which the annotation is based. For example, if your database entry represents a gene, then gene goes in the **DB object type** column, even if the annotation is to a component term relevant to the localization of a protein product of the gene. The text entered in the **DB object name** and **DB object symbol** can refer to the same database entry (recommended), or to a "broader" entity. For example, several alternative transcripts from one gene may be annotated separately, each with a unique transcript **DB object ID**, but list the same gene symbol in the **DB object symbol** column.

#### Taxon
taxonomic identifier(s) 

for cardinality 1, the ID of the species encoding the gene product. 

for cardinality 2, to be used only in conjunction with terms that have the biological process term multi-organism process or the cellular component term host cell as an ancestor. The first taxon ID should be that of the organism encoding the gene or gene product, and the taxon ID after the pipe should be that of the other organism in the interaction. 

    this field is mandatory, cardinality 1, 2; for cardinality 2 use a pipe to separate entries (e.g. taxon:1|taxon:1000) 
   
   See the [GO annotation conventions](https://wiki.geneontology.org/Multi-species_processes) for more information on multi-organism terms.
 
#### Date
Date on which the annotation was made; format is YYYYMMDD

    this field is mandatory, cardinality 1

#### Assigned By
The database which made the annotation

one of the values from the set of [GO database cross-references](http://amigo.geneontology.org/xrefs)

Used for tracking the source of an individual annotation. 

Default value is value entered as the DB (column 1).

Value will differ from column 1 for any annotation that is made by one database and incorporated into another.

    this field is mandatory, cardinality 1
 
 
 
 
Note that several fields contain database cross-reference (dbxrefs) in the format dbname:dbaccession. The fields are: **GO ID** (where dbname is always GO), **DB:Reference**, **With/From**, **Taxon** (where dbname is always **taxon**). For GO IDs, do not repeat the 'GO:' prefix (i.e. always use GO:0000000, not GO:GO:0000000) 



THIS FILE IS FOR REFERENCE ONLY
THIS FILE IS FOR REFERENCE ONLY
THIS FILE IS FOR REFERENCE ONLY
