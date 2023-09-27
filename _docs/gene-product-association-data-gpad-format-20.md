<!-- DO NOT PUBLISH THIS until GPAD/GPI 2.0 specs are finalised -->


---
title: Gene Product Association Data (GPAD) format 2.0
permalink: /docs/gene-product-association-data-gpad-format-2.0/
---

<!--Qualifiers section is confusing- says "the relationship between the gene product in the DB:DB object ID and the GO ID 
composed of up to three parts: an operator (optional), a modifier (optional) and an atomic relation (required) 
**this field is mandatory**, cardinality 1 or greater than 1, entries pipe-separated" and then "**qualifiers are optional**"
CBS is not DTU, link to DTU (http://www.bioinformatics.dtu.dk/) doesn't seem to be helpful.-->

# Gene Product Association Data (GPAD) files

GPAD files contain annotations for gene products which are further detailed in [GPI files](/docs/gene-product-information-gpi-format/). This page describes the *G*ene *P*roduct *A*ssociation *D*ata (GPAD) 2.0 format.

The Gene Ontology Consortium stores annotation data, the representation of gene product attributes using GO terms, in tab-delimited text files. Each line in the file represents a single association between a gene product and a GO term with a certain evidence code and the reference to support the link. 

GO also provides annotations as [GAF files](/docs/go-annotation-file-gaf-format-2.2/). For more general information on annotation, please see the [Introduction to GO annotation](/docs/go-annotations/).


## Gene Product Association Data (GPAD) 2.0 format
The GPAD file is an alternative means of exchanging annotations from the Gene Association File (GAF). 
The GPAD format is designed to be more normalized than GAF and is intended to work in conjunction with a separate 
format for exchanging gene product information.

All GPAD files must start with a single line denoting the file format, followed by the database generating the file and the date generated. For GPAD 2.0 the header is as follows:

    !gpad-version: 2.0
    !generated-by: MGI
    !date-generated: 2023-01-30
    
Other information, such as contact details for the submitter or database group, useful link, etc., can be included in an 
association file by prefixing the line with an exclamation mark (!); such lines will be ignored by parsers.

GPAD 2.0 sample line:

    UniProtKB:P11678        RO:0002263    GO:0050803     	PMID:30695063    ECO:0000315            2023-01-30    MGI    BFO:0000066(GO:0005829)    contributor-id=orcid:0000-0001-1234-5678

### Annotation file fields
The GPAD format comprises 12 tab-delimited fields; fields with multiple values (for example, gene product synonyms) 
should have these values separated by pipes.

| Column 	| Content 	| Required? 	| Cardinality 	| Example|
|----------|---------|-------------|---------|--------|
|1 |	[DB:DB_Object_ID ](#db-db-object-id "Definition and requirements for DB:DB Object ID (column 1)") | 	required | 1 |	SGD:S000006261 | 
|2 |	[Negation](#negation "Definition and requirements for Negation (column 2)") |	optional |	0 or 1 |	NOT |
|3 |	[Relation](#relation "Definition and requirements for Relation (column 3)") |	required |	1 or greater |	RO:0002263 |
|4 |	[GO ID](#go-id "Definition and requirements for GO ID (column 4)") |	required |	1 |	GO:0019104 |
|5 |	[DB:Reference(s) (\|DB:Reference)](#dbreferences "Definition and requirements for DB:Reference (column 5)") |	required |	1 or greater |	PMID:20727966|
|6 |	[Evidence Code](#evidence-code "Definition and requirements for Evidence Code (column 6)") |	required |	1 |	ECO:0000315|
|7 |	[With (or) From](#with-or-from "Definition and requirements for With [or] From (column 7)") |	optional |	0 or greater |	WB:WBVar00000510|
|8 |	[Interacting taxon ID](#interacting-taxon-id "Definition and requirements for Interacting Taxon ID (column 8)") |	optional |	0 or greater |	NCBITaxon:5476|
|9 |	[Date](#date "Definition and requirements for Date (column 9)")  |	required | 1 |	2019-01-30|
|10 |	[Assigned by](#assigned-by "Definition and requirements for Assigned by (column 10)") |	required | 1 or greater |	PomBase|
|11 |	[Annotation Extension](#annotation-extension "Definition and requirements for Annotation Extension (column 11)") |	optional |	0 or greater |	RO:0002092(GO:0051320)|
|12 |	[Annotation Properties](#annotation-properties "Definition and requirements for Annotation Properties (column 12)") |	optional |	0 or greater |	model-state=production|

### Definitions and requirements for field contents

#### DB:DB Object ID

A unique identifier (from the database in DB) for the item being annotated


The identifier may reference a top-level primary gene or gene product identifier, or an identified variant 
of a gene or gene product. Contents may include protein sequence identifiers: for example, identifiers that specify distinct 
proteins produced by to differential splicing, alternative translational starts, post-translational cleavage or 
post-translational modification. Identifiers for functional RNAs can also be included in this column.
If the gene product is not a top-level gene or gene product identifier, the Gene Product Information (GPI) file should 
contain information about the canonical form of the gene or gene product.

**DB** refers to the database from which the identifier in **DB Object ID** is drawn. This is not necessarily the group submitting 
the file. If a UniProtKB ID is the **DB Object ID**, **DB** should be UniProtKB. Must be one of the values from the set of 
GO database cross-references.

The **DB:DB Object ID** is the identifier for the database object, which may or may not correspond exactly to what is described 
in a paper. For example, a paper describing a protein may support annotations to the gene encoding the protein 
(gene ID in **DB:DB Object ID** field) or annotations to a protein object (protein ID in **DB:DB Object ID** field). 

This field is mandatory, cardinality 1 

#### Negation
Negation is indicated by the 'NOT' value

This field is optional, cardinality 0 or 1.

#### Relation
The relationship between the gene product in the **DB:DB Object ID** field and the **GO ID** composed of up to three parts: an operator 
(optional; see **Negation**), a modifier (optional) and an atomic relation (required).

This field is mandatory, cardinality 1 or greater than 1, entries pipe-separated.

The atomic relations depend upon the term namespace, and should be derived from the RO source file available at https://github.com/oborel/obo-relations.

* Gene product *enables* molecular function
* Gene product *involved in* biological process
* Gene product *part of* protein-containing complex (GO:0032991 and child terms) cellular component 
* Gene product *located in* non-protein-containing complex cellular component 

<!-- UPDATE this table if included- it's from 2020

GO Aspect 	| Relations Ontology Label  | Relations Ontology ID | Usage Guidelines
-----------|---------------------------|----------------------| ------------------ |
Molecular Function | enables | RO:0002327 | Default for MF
Molecular Function | contributes to | RO:0002326 |
Biological Process | involved in | RO:0002331 |
Biological Process | acts upstream of | RO:0002263 |
Biological Process | acts upstream of positive effect | RO:0004034 |
Biological Process | acts upstream of negative effect | RO:0004035 |
Biological Process | acts upstream of or within | RO:0002264 | Default for BP (GO:0008150) and child terms
Biological Process | acts upstream of or within positive effect | RO:0004032 |
Biological Process | acts upstream of or within negative effect | RO:0004033 |
Cellular Component | part of	| BFO:0000050 | Default for protein-containing complex (GO:0032991) and child terms
Cellular Component | located in | RO:0001025 | Default for non-protein-containing complex CC terms
Cellular Component | is active in | RO:0002432 | Used to indicate where a gene product enables its MF
Cellular Component | colocalizes with | RO:0002325 |
-->

#### GO ID
The GO identifier for the term attributed to the DB object ID. Like all other identifiers, this must be in the format dbname:dbaccession

This field is mandatory, cardinality 1. 

#### DB:Reference
One or more unique identifiers for a single source cited as an authority for the attribution of the GO ID to the DB object ID. 
This may be a literature reference or a database record. The syntax is DB:accession. Note that only one reference can be cited 
on a single line in the gene association file. If a reference has identifiers in more than one database, multiple identifiers 
for that reference can be included on a single line. For example, if the reference is a published paper that has a PubMed ID, 
the PubMed ID must be included; if the model organism database has its own identifier for the reference, that can also be 
included.

Valid references are one of: PubMed, DOI, GO_REF, Agricola, MOD reference

This field is mandatory, cardinality 1, >1; for cardinality >1 use a pipe to separate entries (e.g. PMID:2676709|SGD_REF:S000047763). 

#### Evidence code
One of the codes from the [Evidence & Conclusion Ontology](http://www.evidenceontology.org), ECO
This field is mandatory, cardinality 1 

#### With [or] From
Also referred to as **With, From** or the **With/From** column

This field is required for some evidence codes cardinality 0, 1, >1. Pipe-separated entries represent independent evidence; comma-separated entries represent grouped evidence, e.g. two of three genes in a triply mutant organism.
<!--
Need a valid example with pipes and commas

(e.g. UniProtKB:P10620|UniProtKB:P08011)
-->

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
term 'multi-organism process' or the cellular component term 'host' as an ancestor. Identifiers must come from NCBI Taxonomy database and have the `NCBITaxon:` prefix.

This field is mandatory for terms with parentage under 'multi-organism process' or 'host', cardinality 1; annotations to other 
terms should leave this column blank.

See the [GO annotation conventions for more information on multi-organism terms](http://geneontology.org/page/go-annotation-conventions#interactions). 

#### Date
Date on which the annotation was made; format is YYYY-MM-DD. Conforms to the date portion of ISO-8601.

This field is mandatory, cardinality 1.

#### Assigned By
The database which made the annotation one of the values from the set of [GO database cross-references](http://metadata/db-xrefs.yaml); used for tracking 
the source of an individual annotation. Value will differ from the **DB:DB Object ID** column for any annotation that is made by one 
database and incorporated into another.

This field is mandatory, cardinality 1.

#### Annotation Extension
Contains cross references to GO or other ontologies that can be used to qualify or enhance the annotation. The cross-reference 
is prefaced by an appropriate RO or BFO term; references to multiple ontologies can be entered. Allowable ontologies include GO, SO, CL, UBERON, and other anatomy ontologies.

For example, if a gene product has a role in [tetrahydrofolate interconversion](http://amigo.geneontology.org/amigo/term/GO:0035999) during [S phase](http://amigo.geneontology.org/amigo/term/GO:0051320), the **GO ID** (column 4) would be GO:0035999 and 
the **Annotation Extension** column would contain the Relations Ontology and appropriate GO term: [RO:0002092](http://purl.obolibrary.org/obo/RO_0002092)([GO:0051320](http://amigo.geneontology.org/amigo/term/GO:0051320)) . 
Targets of certain processes or functions can also be included in this field to indicate the gene, gene product, or 
chemical involved; for example, if a gene product is annotated to protein kinase activity, the annotation extension 
column would contain the UniProtKB protein ID for the protein phosphorylated in the reaction. See the documentation on 
using the annotation extension column for details of practical usage.

This field is optional, cardinality 0 or greater.

#### Annotation Properties
 The Annotation Properties column can be filled with a pipe separated list of "property_name = property_value".  If the property exists, the property is single valued.

This field is optional, cardinality 0 or greater.
