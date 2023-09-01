---
title: "GO Annotation file format: GAF 2.0"
permalink: /docs/go-annotation-file-gaf-format-2.0/
redirect_from:
- /page/go-annotation-file-format-20
---


# GO Annotation File (GAF) 2.0 (Deprecated)
This guide lays out the format specifications for the deprecated *G*ene *A*ssociation *F*ile (GAF) 2.0; for the current format please see the [GAF 2.2 guide](/docs/go-annotation-file-gaf-format-2.2/).

GAFs are tab-delimited plain text files, where each line in the file represents a single association between a gene product and a GO term, with an [evidence code](/docs/guide-go-evidence-codes/), the reference to support the link between them, and other information.

GO also provides annotations as [GPAD](/docs/gene-product-association-data-gpad-format/)+[GPI](/docs/gene-product-information-gpi-format/) (companion files). General information about annotation can be found in the [GO annotation introduction](/docs/go-annotations/).

### Changes in GAF 2.0 from GAF 1.0

GAF 2.0 has two additional columns compared to GAF 1.0: annotation extension (column 16) and gene product form ID (column 17).

The addition of gene product form ID (column 17) means that the usage of the DB object ID (column 2) and DB object type (column 12) fields differs from that in GAF 1.0. Please see the descriptions below for full details.
### GAF header

All gene association files must start with a single line denoting the file format, as follows:

    !gaf-version: 2.0

Other information, such as contact details for the submitter or database group, useful link, etc., can be included in an association file by prefixing the line with an exclamation mark (`!`); such lines will be ignored by parsers.
### GAF fields

The annotation flat file format is comprised of 17 tab-delimited fields.


Column 	| Content 	| Required? |	Cardinality |	Example
--------|----------|-----------|-------------|---------
1 |	[DB](#db-column-1 "Definition and requirements for DB (column 1)") |	required |	1 |	UniProtKB
2 |	[DB Object ID](#db-object-id-column-2 "Definition and requirements for DB Object ID (column 2)")	| required |	1 |	P12345
3 |	[DB Object Symbol](#db-object-symbol-column-3 "Definition and requirements for DB Object Symbol (column 3)") |	required |	1 |	PHO3
4 |	[Qualifier](#qualifier-column-4 "Definition and requirements for Qualifier (column 4)") |	optional |	0 or greater |	NOT
5 |	[GO ID](#go-id-column-5 "Definition and requirements for GO ID (column 5)") |	required |	1 |	GO:0003993
6 |	[DB:Reference (\|DB:Reference)](#dbreference-column-6 "Definition and requirements for DB:Reference (column 6)") |	required |	1 or greater |	SGD_REF:S000047763|PMID:2676709
7 |	[Evidence Code](#evidence-code-column-7 "Definition and requirements for Evidence Code (column 7)") 	| required |	1 |	IMP
8 |	[With (or) From](#with-or-from-column-8 "Definition and requirements for With [or] From (column 8)") |	optional | 	0 or greater |	GO:0000346
9 |	[Aspect](#aspect-column-9 "Definition and requirements for Aspect (column 9)") 	| required |	1 |	F
10|	[DB Object Name](#db-object-name-column-10 "Definition and requirements for DB Object Name (column 10)") |	optional |	0 or 1 |	Toll-like receptor 4
11|	[DB Object Synonym (\|Synonym)](#db-object-synonym-column-11 "Definition and requirements for DB Object Synonym (column 11)") |	optional |	0 or greater |	hToll|Tollbooth
12| [DB Object Type](#db-object-type-column-12 "Definition and requirements for DB Object Type (column 12)") |	required |	1 |	protein
13| [Taxon(\|taxon)](#taxon-column-13 "Definition and requirements for Taxon (column 13)") |	required |	1 or 2 |	taxon:9606
14| [Date](#date-column-14 "Definition and requirements for Date (column 14)") |	required |	1 |	20090118
15| [Assigned By](#assigned-by-column-15 "Definition and requirements for Assigned By (column 15)") |	required | 	1 |	SGD
16| [Annotation Extension](#annotation-extension-column-16 "Definition and requirements for Annotation Extension (column 16)") |	optional | 	0 or greater |	part_of(CL:0000576)
17| [Gene Product Form ID](#gene-product-form-id-column-17 "Definition and requirements for Gene Product Form ID (column 17)") |	optional |	0 or 1 |	UniProtKB:P12345-2


### Definitions and requirements for field contents

#### DB (column 1)
Refers to the database from which the identifier in **DB object ID** (column 2) is drawn. This is not necessarily the group submitting the file. If a UniProtKB ID is the **DB object ID** (column 2), DB (column 1) should be UniProtKB.
must be one of the values from the set of [GO database cross-references](https://amigo.geneontology.org/xrefs)

    This field is mandatory, cardinality 1

#### DB Object ID (column 2)
A unique identifier from the database in **DB** (column 1) for the item being annotated.

In GAF 2.0 format, the identifier *must reference a top-level primary gene or gene product identifier*: either a gene, or a protein that has a 1:1 correspondence to a gene. Identifiers referring to particular protein isoforms or post-translationally cleaved or modified proteins are *not* legal values in this field.
The DB object ID (column 2) is the identifier for the database object, which may or may not correspond exactly to what is described in a paper. For example, a paper describing a protein may support annotations to the gene encoding the protein (gene ID in DB object ID field) or annotations to a protein object (protein ID in DB object ID field).

    This field is mandatory, cardinality 1

#### DB Object Symbol (column 3)
A (unique and valid) symbol to which **DB object ID** is matched. Can use ORF name for otherwise unnamed gene or protein.  If gene products are annotated, can use gene product symbol if available, or many gene product annotation entries can share a gene symbol

The **DB Object Symbol** field should be a symbol that means something to a biologist wherever possible (a gene symbol, for example). It is not an ID or an accession number (**DB object ID** [column 2] provides the unique identifier), although IDs can be used as a **DB object symbol** if there is no more biologically meaningful symbol available (e.g., when an unnamed gene is annotated).

    This field is mandatory, cardinality 1

#### Qualifier (column 4)
Flags that modify the interpretation of an annotation
one (or more) of `NOT`, contributes_to, colocalizes_with

    This field is not mandatory; cardinality 0, 1, >1; for cardinality >1 use a pipe to separate entries (e.g. `NOT`|contributes_to)

See also the [documentation on qualifiers](https://geneontology.org/docs/go-annotations/#annotation-qualifiers) in the GO annotation guide

#### GO ID (column 5)
The GO identifier for the term attributed to the **DB object ID**

    This field is mandatory, cardinality 1

#### DB:Reference (column 6)
One or more unique identifiers for a single source cited as an authority for the attribution of the **GO ID** to the **DB object ID**. This may be a literature reference or a database record. The syntax is DB:accession_number.
Note that only **one reference can be cited on a single line** in the gene association file. If a reference has identifiers in more than one database, multiple identifiers for that reference can be included on a single line. For example, if the reference is a published paper that has a PubMed ID, we strongly recommend that the PubMed ID be included, as well as an identifier within a model organism database. Note that if the model organism database has an identifier for the reference, that identifier should **always** be included, even if a PubMed ID is also used.

    This field is mandatory, cardinality 1, >1; for cardinality >1 use a pipe to separate entries (e.g. SGD_REF:S000047763|PMID:2676709).

#### Evidence Code (column 7)
See the [GO evidence code guide](https://geneontology.org/page/guide-go-evidence-codes) for the list of valid evidence codes for GO annotations

    This field is mandatory, cardinality 1

#### With [or] From (column 8)
Also referred to as **with, from** or the **with/from** column.  One of:

* DB:gene_symbol
* DB:gene_symbol[allele_symbol]
* DB:gene_id
* DB:protein_name
* DB:sequence_id
* GO:GO_id
* CHEBI:CHEBI_id

    This field is not mandatory overall, but is required for some evidence codes (see below and the [evidence code documentation](https://geneontology.org/page/guide-go-evidence-codes) for details); cardinality 0, 1, >1; for cardinality >1 use a pipe to separate entries (e.g. CGSC:pabA\|CGSC:pabB)

*Note*: This field is used to hold an additional identifier for annotations using certain evidence codes (IC, IEA, IGI, IPI, ISS). For example, it can identify another gene product to which the annotated gene product is similar (ISS) or interacts with (IPI). More information on the meaning of **with or from** column entries is available in the [evidence code documentation](https://geneontology.org/page/guide-go-evidence-codes) entries for the relevant codes.
Cardinality = 0 is not recommended, but is permitted because cases can be found in literature where no database identifier can be found (e.g. physical interaction or sequence similarity to a protein, but no ID provided). Cardinality = 0 is not allowed for ISS annotations made after October 1, 2006. Annotations where evidence is IGI, IPI, or ISS and with cardinality = 0 should link to an explanation of why there is no entry in **with**. Cardinality may be >1 for any of the evidence codes that use with; for IPI and IGI cardinality >1 has a special meaning (see evidence documentation for more information). For cardinality >1 use a pipe to separate entries (e.g. FB:FBgn1111111\|FB:FBgn2222222).
Note that a gene ID may be used in the **with** column for a IPI annotation, or for an ISS annotation based on amino acid sequence or protein structure similarity, if the database does not have identifiers for individual gene products. A gene ID may also be used if the cited reference provides enough information to determine which gene ID should be used, but not enough to establish which protein ID is correct.
'GO:GO_id' is used only when the evidence code is IC, and refers to the GO term(s) used as the basis of a curator inference. In these cases the entry in the 'DB:Reference' column will be that used to assign the GO term(s) from which the inference is made. This field is mandatory for evidence code IC.
The ID is usually an identifier for an individual entry in a database (such as a sequence ID, gene ID, GO ID, etc.). Identifiers from the Center for Biological Sequence Analysis (CBS), however, represent tools used to find homology or sequence similarity; these identifiers can be used in the **with** column for ISS annotations.
The **with** column may *not* be used with the evidence codes IDA, TAS, NAS, or ND.

#### Aspect (column 9)
Refers to the namespace or ontology to which the **GO ID** (column 5) belongs; one of P (biological process), F (molecular function) or C (cellular component)

    This field is mandatory; cardinality 1

#### DB Object Name (column 10)
Name of gene or gene product

    This field is not mandatory, cardinality 0, 1 [white space allowed]

#### DB Object Synonym (column 11)
Gene symbol [or other text] Note that we strongly recommend that gene synonyms are included in the gene association file, as this aids the searching of GO.

    This field is not mandatory, cardinality 0, 1, >1 [white space allowed]; for cardinality >1 use a pipe to separate entries (e.g. YFL039C|ABY1|END7|actin gene)

#### DB Object Type (column 12)
A description of the type of gene product being annotated. If a **gene product form ID** (column 17) is supplied, the **DB object type** will refer to that entity; if no **gene product form ID** is present, it will refer to the entity that the **DB object symbol** (column 2) is believed to produce and which actively carries out the function or localization described. Is one of the following:
* protein_complex
* protein; transcript
* ncRNA
* rRNA
* tRNA
* snRNA
* snoRNA
* any subtype of ncRNA in the [Sequence Ontology](http://www.sequenceontology.org/browser/obob.cgi)
* If the precise product type is unknown, gene_product should be used.

The object type (gene_product, transcript, protein, protein_complex, etc.) listed in the DB object type field must match the database entry identified by the gene product form ID, or, if this is absent, the expected product of the DB object ID. Note that DB object type refers to the database entry (i.e. it represents a protein, functional RNA, etc.); this column does not reflect anything about the GO term or the evidence on which the annotation is based. For example, if your database entry represents a protein-encoding gene, then protein goes in the DB object type column. The text entered in the DB object name and DB object symbol should refer to the entity in DB object ID. For example, several alternative transcripts from one gene may be annotated separately, each with the same gene ID in DB object ID, and specific gene product identifiers in gene product form ID, but list the same gene symbol in the DB object symbol column.

    This field is mandatory, cardinality 1

#### Taxon (column 13)
Taxonomic identifier(s) For cardinality 1, the ID of the species encoding the gene product. For cardinality 2, to be used only in conjunction with terms that have the biological process term multi-organism process or the cellular component term host cell as an ancestor. The first taxon ID should be that of the organism encoding the gene or gene product, and the taxon ID after the pipe should be that of the other organism in the interaction.

    This field is mandatory, cardinality 1, 2; for cardinality 2 use a pipe to separate entries (e.g. taxon:1|taxon:1000) See the GO annotation conventions for more information on multi-organism terms.

#### Date (column 14)
Date on which the annotation was made; format is YYYYMMDD

    This field is mandatory, cardinality 1

#### Assigned By (column 15)
The database which made the annotation.
One of the values from the set of [GO database cross-references](https://amigo.geneontology.org/xrefs).
Used for tracking the source of an individual annotation. Default value is value entered as the DB (column 1).
Value will differ from column 1 for any annotation that is made by one database and incorporated into another.

    This field is mandatory, cardinality 1

#### Annotation Extension (column 16)
One of:

* DB:gene_id
* DB:sequence_id
* CHEBI:CHEBI_id
* Cell Type Ontology:CL_id
* GO:GO_id

Contains cross references to other ontologies that can be used to qualify or enhance the annotation. The cross-reference is prefaced by an appropriate GO relationship; references to multiple ontologies can be entered. For example, if a gene product is localized to the mitochondria of lymphocytes, the **GO ID** (column 5) would be mitochondrion ; GO:0005439, and the **annotation extension** column would contain a cross-reference to the term lymphocyte from the [Cell Type Ontology](https://obofoundry.org/ontology/cl.html).
    Targets of certain processes or functions can also be included in this field to indicate the gene, gene product, or chemical involved; for example, if a gene product is annotated to protein kinase activity, the annotation extension column would contain the UniProtKB protein ID for the protein phosphorylated in the reaction.
    A discussion of the annotation extension column can be found [on the GO wiki](https://wiki.geneontology.org/index.php/Annotation_Extension).

    This field is optional, cardinality 0 or greater

#### Gene Product Form ID (column 17)
As the DB Object ID (column 2) entry *must* be a canonical entity—a gene OR an abstract protein that has a 1:1 correspondence to a gene—this field allows the annotation of specific variants of that gene or gene product. Contents will frequently include protein sequence identifiers: for example, identifiers that specify distinct proteins produced by to differential splicing, alternative translational starts, post-translational cleavage or post-translational modification. Identifiers for functional RNAs can also be included in this column.
The identifier used must be a standard 2-part global identifier, e.g. UniProtKB:OK0206-2

* When the **gene product form ID** (column 17) is filled with a **protein** identifier, the value in **DB object type** (column 12) must be **protein**. Protein identifiers can include [UniProtKB](https://www.uniprot.org/help/uniprotkb) accession numbers, [NCBI NP](https://www.ncbi.nlm.nih.gov/protein) identifiers or [Protein Ontology (PRO)](https://pir.georgetown.edu/pro/pro.shtml) identifiers.
* When the **gene product form ID** (column 17) is filled with a *functional RNA* identifier, the **DB object type** (column 12) must be either *ncRNA*, *rRNA*, *tRNA*, *snRNA*, or *snoRNA*.

    This column may be left blank; if so, the value in DB object type (column 12) will provide a description of the expected gene product.
More information and examples are available from the [GO wiki page on column 17](https://wiki.geneontology.org/index.php/GAF_Col17_GeneProducts).

Note that several fields contain database cross-reference (dbxrefs) in the format dbname:dbaccession:
* **GO ID** [column 5], where dbname is always GO. For GO IDs, do not repeat the 'GO:' prefix (i.e. always use GO:0000000, not GO:GO:0000000)
* **DB:Reference** (column 6)
* **With or From** (column 8)
* **Taxon** (column 13), where dbname is always taxon
