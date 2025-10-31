---
title: Annotation files in Gene Product Association Data (GPAD) format
permalink: /docs/gene-product-association-data-gpad-format/
redirect_from: /docs/gene-product-association-data-gpad-format-2.0/
redirect_from: /page/gene-product-association-data-gpad-format
---

# Gene Product Association Data (GPAD) file description
The *G*ene *P*roduct *A*ssociation *D*ata (GPAD) file contains annotation data provided by the Gene Ontology Consortium in standardized tab-delimited text file format. Each line in the file represents an association between a gene product and a GO term, with an [evidence code](/docs/guide-go-evidence-codes/), a reference to support the association, and other data associated with the gene product or the annotation. This page is a summary of GPAD 2.0 format; for full technical details and a summary of changes from previous GPAD formats, [see the GitHub specification page](https://github.com/geneontology/go-annotation/blob/master/specs/gpad-gpi-2-0.md). Note that the GPAD file must be submitted together with the corresponding [GPI file](/docs/gene-product-information-gpi-format-2.0//), based on the same file version.

<strong>GO also provides annotations as [GAF files](/docs/go-annotation-file-gaf-format-2.2/) and recommends use of the GAF format for most use cases. </strong>

For general information on GO annotations, please see the [introduction to GO annotation](/docs/go-annotations/) page.

<!-- Should we keep ? GAF files contains redundant information about gene products. The GPAD/GPI file system normalizes the data by separating the annotations and metadata about gene and gene product entities in two separate files, thus removing redundancy about gene product description in the GAF file and providing a unique and complete set of annotated entities in the GPI file. -->


## GPAD 2.0 format description
 
### File Header

**Mandatory elements of the GPAD 2.0 file header**  

!`gpad-version:` 2.0  <br>
!`generated-by:` database (must be listed in [dbxrefs.yaml](https://github.com/geneontology/go-site/blob/master/metadata/db-xrefs.yaml))  <br>
!`date-generated:` YYYY-MM-DD or YYYY-MM-DDTHH:MM <br>

**Other header elements may be included such as links to the submitters project page, funding sources, ontology versions, etc.**

! URL: e.g. http://www.yeastgenome.org/ <br>
! Project-release: e.g. WS275 <br>
! Funding: e.g. NHGRI <br>
! Columns: file format written out <br>
! go-version: PURL <br>
! ro-version: PURL <br>
! gorel-version: PURL <br>
! eco-version: PURL <br>
    
### GPAD file fields
The GPAD format comprises 12 tab-delimited fields.  Some fields are optional, some fields are mandatory and cardinality varies by field and other conditions.  For fields that permit multiple values, values should be separated by pipes (\|) for `OR` statements and commas (,) for `AND` statements.

| **Column** 	| **Content** 	| **Required?** 	| **Cardinality** 	| **Example** |
|----------|---------|-------------|---------|--------|
|1 |	[DB:DB_Object_ID](#1-db-object-id "Definition and requirements for DB:DB Object ID (column 1)") | 	required | 1 |	SGD:S000002164 | 
|2 |	[Negation](#2-negation "Definition and requirements for Negation (column 2)") |	optional |	0 or 1 |	NOT |
|3 |	[Relation](#3-relation "Definition and requirements for Relation (column 3)") |	required |	1 |	RO:0002331 |
|4 |	[GO ID](#4-go-id "Definition and requirements for GO ID (column 4)") |	required |	1 |	GO:0043409 |
|5 |	[Reference](#5-reference "Definition and requirements for Reference (column 5)") |	required |	1 or greater |	PMID:26546002|
|6 |	[Evidence Code](#6-evidence-code "Definition and requirements for Evidence Code (column 6)") |	required |	1 |	ECO:0000316|
|7 |	[With [or] From](#7-with-or-from "Definition and requirements for With [or] From (column 7)") |	optional |	0 or greater |	SGD:S000003631|
|8 |	[Interacting taxon ID](#8-interacting-taxon-id "Definition and requirements for Interacting taxon ID (column 8)") |	optional |	0 or greater |	NCBITaxon:5476|
|9 |	[Date](#9-date "Definition and requirements for Date (column 9)")  |	required | 1 |	2018-01-19|
|10 |	[Assigned by](#10-assigned-by "Definition and requirements for Assigned by (column 10)") |	required | 1 |	SGD|
|11 |	[Annotation Extension](#11-annotation-extension "Definition and requirements for Annotation Extension (column 11)") |	optional |	0 or greater |	RO:0002233(UniProtKB:Q00772),BFO:0000050(GO:0071852)|
|12 |	[Annotation Properties](#12-annotation-properties "Definition and requirements for Annotation Properties (column 12)") |	optional |	0 or greater |	noctua-model-id=gomodel:6086f4f200000223\|model-state=production\|contributor=orcid:0000-0003-3212-6364|

### Definitions and requirements for field contents

#### 1. DB Object ID
A unique identifier for the item being annotated. The **DB** prefix is the database from which the **DB Object ID** is drawn and must be one of the values from the set of GO database cross-references. The **DB:DB Object ID** is the combined identifier for the database object.  The **DB** is not necessarily the same as the group submitting the file, which is named in column 10 **Assigned by**. Examples:

* UniProtKB:P99999
* SGD:S000002164
* MGI:MGI:1919306

The identifier usually references the canonical form of a gene or gene product including functional RNAs.  Identifiers may also describe gene variants, distinct proteins produced by to differential splicing, alternative translational starts, post-translational cleavage or post-translational modification. If the gene product is not a canonical gene or gene product identifier, the Gene Product Information (GPI) file should contain information about the canonical form of the gene or gene product.
* Cardinality = 1

#### 2. Negation
Negation is indicated by the 'NOT' value.
* Cardinality =  0 or 1

#### 3. Relation
This column is populated with relations from the [Relation Ontology](https://ontobee.org/ontology/RO) that describe how the annotated biological entity relates to the GO term with which it is associated.
See also the [documentation on qualifiers](http://geneontology.org/docs/go-annotations/#gene-product-to-go-term-relations) in the GO annotation guide.

* Cardinality = 1

#### 4. GO ID
The GO identifier for the term attributed to the **DB object ID**. Must be in the format `GO:GOID`.
* Cardinality = 1

#### 5. Reference
One or more unique identifiers for a single source cited as an authority for the attribution of the GO ID to the DB object ID. 
This may be a literature reference or a database record. Valid references are one of: PubMed, DOI, GO_REF, MOD reference. The syntax is `DB:accession`, e.g. PMID:2676709, SGD_REF:S000047763.

Only one reference can be cited on a single line in the gene association file. If a reference has identifiers in more than one database, multiple identifiers for that reference can be 
included on a single line. For example, if the reference is a published paper that has a PubMed ID, the PubMed ID must be included; if the model organism database has its own
identifier for the reference, that can also be included (e. g.: PMID:2676709|SGD_REF:S000047763.)
* Cardinality = 1 or >1
* For cardinality >1, values must be pipe-separated.

#### 6. Evidence code
One of the codes from the [Evidence & Conclusion Ontology](http://www.evidenceontology.org), ECO. See the wiki linked from our [evidence code documentation](http://geneontology.org/page/guide-go-evidence-codes) for more information.
* Cardinality = 1

#### 7. With [or] From
This field is used with specific ECO codes to capture an additional identifier supporting the evidence for the annotation. For example, it can identify another gene product to which the annotated gene product is similar (ISS) or interacts with (IPI). Population of the **With/From** is mandatory for certain evidence codes, see the [documentation for the individual evidence codes](https://wiki.geneontology.org/Guide_to_GO_Evidence_Codes) for more information.
* Cardinality 0, 1, >1 with the following rules:
  * Cardinality must be 0 for evidence codes IDA, TAS, NAS, or ND. 
  * Cardinality must be 1, >1 for IEA, IC, IGI, IPI, ISS & child terms of ISS. 
  * For cardinality >1 pipes or commas may be used: a pipe is used to separate independent evidence (e.g. FB:FBgn1111111\|FB:FBgn2222222). A comma indicates grouped evidence, e.g. two of three genes in a triply mutant organism.

#### 8. Interacting taxon ID
Taxonomic identifier for interacting organism to be used only in conjunction with terms that have the biological process term 'GO:0044419 biological process involved in interspecies interaction between organisms'or the cellular component term 'GO:0018995 host cellular component' as an ancestor. Identifiers must come from NCBI Taxonomy database and have the `NCBITaxon:` prefix.
* Cardinality = 0 or 1
* For cardinality >1, values must be pipe-separated

#### 9. Date
Date on which the annotation was made; format is `YYYY-MM-DD`. Conforms to the date portion of ISO 8601.
* Cardinality = 1

#### 10. Assigned By
The database which made the annotation one of the values from the set of [GOC groups](https://github.com/geneontology/go-site/blob/master/metadata/groups.yaml); used for tracking 
the source of an individual annotation. Value may differ from the **DB:DB Object ID** column: any annotation that is made by one database and incorporated into another retains the original value.
* Cardinality = 1

#### 11. Annotation Extension
Annotation extensions allow GO terms in standard annotations to be further specified, using gene products, chemicals, cell types, anatomical structures, to provide additional biological context. The cross-reference is prefaced by an appropriate relationship from the [Relation Ontology](https://www.ebi.ac.uk/ols4/ontologies/ro). Multiple extensions may be entered. 

* Cardinality = 0, 1, >1
* For cardinality > 1, use of a pipe (\|) specifies an independent statement (OR) and is equivalent to making separate annotations, i.e. not all conditions are required to infer the annotated GO term. Use of a comma (,) specifies a connected statement (AND) and indicates that all conditions are required to infer the annotated GO term. In this case, 'OR' is a weaker statement than 'AND', therefore will be correct in all cases. Pipe and comma separators may be used together in the same annotation extension field. 


#### 12. Annotation Properties
The Annotation Properties column contains a list of "property_name = property_value".  If the property exists, the property is single valued. Annotation properties include [GO-CAM](https://geneontology.org/docs/gocam-overview/) information and comments on annotations. 

Example: id=GOA:2113861687 | noctua-model-id=gomodel:6086f4f200000223 | model-state=production | creation-date=2019-07-20T12:04:08
  
* Cardinality = 0 or 1
* For cardinality > 1, values must be pipe-separated

