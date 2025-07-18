---
title: Annotation files in Gene Product Association Data (GPAD) format
permalink: /docs/gene-product-association-data-gpad-format/
redirect_from: /docs/gene-product-association-data-gpad-format-2.0/
redirect_from: /page/gene-product-association-data-gpad-format
---

# Gene Product Association Data (GPAD) files

The Gene Ontology Consortium stores annotation data, the representation of gene product attributes using GO terms, in tab-delimited text files. Each line in the file represents a single association between a gene product and a GO term with a certain evidence code and the reference to support the link. This page describes GPAD 2.0.

*G*ene *P*roduct *A*ssociation *D*ata (GPAD) and (*G*ene *P*roduct *I*nformation) (GPI) companion files reduce the redundancy of the Gene Association File (GAF). GAF files contains information about gene products that are present in each line of the GAF: each non-header line in an annotation file represents a single association between a gene product and a GO term with a certain evidence code and the reference to support the link. The GPAD/GPI file system normalizes the data by separating the annotations and metadata about gene and gene product entities in two separate files. GPAD/GPI is intended for internal GO use. 

>GO also provides annotations as [GAF files](/docs/go-annotation-file-gaf-format-2.2/) and recommends use of the GAF format for most use cases. For more general information on annotation, please see the [Introduction to GO annotation](/docs/go-annotations/).

# Gene Product Association Data (GPAD) 2.0 format guidelines

This page is a summary of the current Gene Product Association Data (GPAD) 2.0 format; for full technical details and a summary of changes from previous GPAD formats, [see the GitHub specification page](https://github.com/geneontology/go-annotation/blob/master/specs/gpad-gpi-2-0.md). 
**Note that the GPAD file is the companion file for the [GPI file](/docs/gene-product-information-gpi-format-2.0//).
Both files should be submitted together using the same version.** 

## Changes from GPAD 1.1 to GPAD 2.0
* **Characters allowed in all fields have been explicitly specified**
* **Extensions in file names are: `*.gpad` and `*.gpi`**
  
**Header**
* **The `gpad-version:` header must read `2.0` for this format.**

**Columns**
* **Columns 1 and 2 in the GPAD 1.2 are now combined in a single column containing an id in CURIE syntax, e.g. `UniProtKB:P56704`.**
* **Negation is captured in a separate column, column 2, using the text string 'NOT'**
* **Gene product-to-term relations captured in column 3 use a Relations Ontology (RO) identifier instead of a text string.**
* **The With/From column, column 7, may contain identifiers separated by commas as well as pipes.**
* **NCBI taxon ids are prefixed with `NCBITaxon:` to indicate the source of the id, e.g. `NCBITaxon:6239`**
* **Annotation Extensions in column 11 will use a Relation_ID, rather than a Relation_Symbol, in the Relational_Expression, e.g. `RO:0002233(UniProtKB:Q00362)`**
* **Dates follow the ISO-8601 format, e.g. `YYYY-MM-DD`; time may be included as `YYYY-MM-DDTHH:MM:SS`**


## GPAD Header
All annotation files MUST start with a single line denoting the file format and version. The database/group generating the file, as listed in dbxrefs.yaml, and the ISO-8601 formatted date the file was generated MUST also be in the header as in the following example:

    !gpad-version: 2.0
    !generated-by: MGI
    !date-generated: 2024-01-30
    
The group in the `generated-by` field must be present in the [dbxrefs.yaml file](https://github.com/geneontology/go-site/blob/master/metadata/db-xrefs.yaml). The year must be `YYYY-MM-DD`, conforming to the date portion of [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standards. Submitting groups may choose to include optional additional information in a file header by prefixing the line with an exclamation mark (`!`); such lines will be ignored by parsers. For example:

    !URL: http://www.yeastgenome.org/
    !Project-release: WS275
    !Funding: NHGRI grant number HG012212
    !Columns: DB:DB_Object_ID Negation    Relation    GO ID    DB:Reference(s)    Evidence Code    With (or) From    Interacting taxon ID    Date    Assigned by    Annotation Extension    Annotation Properties
    !go-version: https://doi.org/10.5281/zenodo.8436609
    
## GPAD file fields
The GPAD format comprises 12 tab-delimited fields.  Some fields are optional, some fields are mandatory and cardinality varies by field and other conditions.  For fields that permit multiple values, values should be separated by pipes (\|) for `OR` statements and commas (,) for `AND` statements.

| **Column** 	| **Content** 	| **Required?** 	| **Cardinality** 	| **Example** |
|----------|---------|-------------|---------|--------|
|1 |	[DB:DB_Object_ID ](#1-db-db-object-id "Definition and requirements for DB:DB Object ID (column 1)") | 	required | 1 |	SGD:S000002164 | 
|2 |	[Negation](#2-negation "Definition and requirements for Negation (column 2)") |	optional |	0 or 1 |	NOT |
|3 |	[Relation](#3-relation "Definition and requirements for Relation (column 3)") |	required |	1 |	RO:0002331 |
|4 |	[GO ID](#4-go-id "Definition and requirements for GO ID (column 4)") |	required |	1 |	GO:0043409 |
|5 |	[DB:Reference(s) (\|DB:Reference)](#5-dbreferences "Definition and requirements for DB:Reference (column 5)") |	required |	1 or greater |	PMID:26546002|
|6 |	[Evidence Code](#6-evidence-code "Definition and requirements for Evidence Code (column 6)") |	required |	1 |	ECO:0000316|
|7 |	[With (or) From](#7-with-or-from "Definition and requirements for With [or] From (column 7)") |	optional |	0 or greater |	SGD:S000003631|
|8 |	[Interacting taxon ID](#8-interacting-taxon-id "Definition and requirements for Interacting taxon ID (column 8)") |	optional |	0 or greater |	NCBITaxon:5476|
|9 |	[Date](#9-date "Definition and requirements for Date (column 9)")  |	required | 1 |	2018-01-19|
|10 |	[Assigned by](#10-assigned-by "Definition and requirements for Assigned by (column 10)") |	required | 1 |	SGD|
|11 |	[Annotation Extension](#11-annotation-extension "Definition and requirements for Annotation Extension (column 11)") |	optional |	0 or greater |	RO:0002233(UniProtKB:Q00772),BFO:0000050(GO:0071852)|
|12 |	[Annotation Properties](#12-annotation-properties "Definition and requirements for Annotation Properties (column 12)") |	optional |	0 or greater |	noctua-model-id=gomodel:6086f4f200000223\|model-state=production\|contributor=orcid:0000-0003-3212-6364|

### GPAD 2.0 examples

    SGD:S000002164	NOT	RO:0002331	GO:0043409	PMID:26546002	ECO:0000316	SGD:S000003631		2018-01-19	SGD	RO:0002233(UniProtKB:Q00772),BFO:0000050(GO:0071852)	noctua-model-id=gomodel:6086f4f200000223|model-state=production|contributor=orcid:0000-0003-3212-6364
    UniProtKB:A0AA85ABI6		RO:0002327	GO:0017128	GO_REF:0000118	ECO:0007826	PANTHER:PTHR23248:SF9		2024-04-08	TreeGrafter		id=GOA:8034655976|comment=go_evidence:IEA


### Definitions and requirements for field contents

#### 1. DB:DB Object ID
A unique identifier for the item being annotated. The **DB** prefix is the database from which the **DB Object ID** is drawn and must be one of the values from the set of GO database cross-references. The **DB:DB Object ID** is the combined identifier for the database object.  The **DB** is not necessarily the same as the group submitting the file, which is named in column 10 **Assigned by**. Examples:

* UniProtKB:P99999
* SGD:S000002164
* MGI:MGI:1919306

The identifier usually references the canonical form of a gene or gene product including functional RNAs.  Identifiers may also describe gene variants, distinct proteins produced by to differential splicing, alternative translational starts, post-translational cleavage or post-translational modification. If the gene product is not a canonical gene or gene product identifier, the Gene Product Information (GPI) file should contain information about the canonical form of the gene or gene product.

This field is mandatory, cardinality 1.

#### 2. Negation
Negation is indicated by the 'NOT' value.

This field is optional, cardinality 0 or 1.

#### 3. Relation
The relations depend upon the term namespace, and must be in the below list of current allowed Gene Product to GO Term Relations. 

This field is mandatory, cardinality 1.

<!--- # Allowed Gene Product to GO Term Relations -->

| **GO Aspect** 	| **Relations Ontology Label**  | **Relations Ontology ID** | **Usage Guidelines** |
|-----------|---------------------------|----------------------|------------------|
|Molecular Function | enables | `RO:0002327` | Default for all `GO:0003674 molecular_function` & child terms|
|Molecular Function | contributes to | `RO:0002326` | |
|Biological Process | involved in | `RO:0002331` | |
|Biological Process | acts upstream of | `RO:0002263` | |
|Biological Process | acts upstream of positive effect | `RO:0004034` | |
|Biological Process | acts upstream of negative effect | `RO:0004035` | |
|Biological Process | acts upstream of or within | `RO:0002264` | Default for all `GO:0008150  biological_process` & child terms|
|Biological Process | acts upstream of or within positive effect | `RO:0004032` | |
|Biological Process | acts upstream of or within negative effect | `RO:0004033` | |
|Cellular Component | part of	| `BFO:0000050` | Default for all `GO:0032991 protein-containing complex` & child terms|
|Cellular Component | located in | `RO:0001025` | Default for `GO:0005575 cellular_component` *except* protein-containing complex|
|Cellular Component | is active in | `RO:0002432` | Used to indicate where a gene product enables its MF|
|Cellular Component | colocalizes with | `RO:0002325` |

#### 4. GO ID
The GO identifier for the term attributed to the **DB object ID**. Must be in the format `GO:GOID`.

This field is mandatory, cardinality 1. 

#### 5. DB:Reference
One or more unique identifiers for a single source cited as an authority for the attribution of the GO ID to the DB object ID. 
This may be a literature reference or a database record. Valid references are one of: PubMed, DOI, GO_REF, Agricola, MOD reference. The syntax is `DB:accession`. 

Only one reference can be cited on a single line in the gene association file. If a reference has identifiers in more than one database, multiple identifiers 
for that reference can be included on a single line. For example, if the reference is a published paper that has a PubMed ID, 
the PubMed ID must be included; if the model organism database has its own identifier for the reference, that can also be 
included (e.g. `PMID:2676709|SGD_REF:S000047763`)

This field is mandatory, cardinality 1, >1; for cardinality >1 use a pipe to separate entries.

#### 6. Evidence code
One of the codes from the [Evidence & Conclusion Ontology](http://www.evidenceontology.org), ECO. See the wiki linked from our [evidence code documentation](http://geneontology.org/page/guide-go-evidence-codes) for more information.

This field is mandatory, cardinality 1.

#### 7. With [or] From
Also referred to as **With, From** or the **With/From** column.

This field is used to hold an identifier for annotations using certain evidence codes: ECO:0000305 ([IC](https://wiki.geneontology.org/index.php/Inferred_by_Curator_(IC)));
ECO:0000203, ECO:0000256, and ECO:0000265 ([IEA & child terms](https://wiki.geneontology.org/index.php/Inferred_from_Electronic_Annotation_(IEA))); ECO:00000316 ([IGI](https://wiki.geneontology.org/Inferred_from_Genetic_Interaction_(IGI))); ECO:0000021 ([IPI](https://wiki.geneontology.org/Inferred_from_Physical_Interaction_(IPI))); ECO:0000031, ECO:0000250 and ECO:0000255 ([ISS & child terms](https://wiki.geneontology.org/Inferred_from_Sequence_or_structural_Similarity_(ISS))). 
This column can identify another gene product to which the annotated gene product is similar (ECO:0000031, ECO:0000250 and ECO:0000255, ISS) or interacts with (ECO:0000021, IPI). 

The **With [or] From** column may not be used with the evidence codes ECO:0000314 ([IDA](https://wiki.geneontology.org/index.php/Inferred_from_Direct_Assay_(IDA))), ECO:0000304 ([TAS](https://wiki.geneontology.org/Traceable_Author_Statement_(TAS))), ECO:0000303 ([NAS](https://wiki.geneontology.org/Non-traceable_Author_Statement_(NAS))), or ECO:0000307 ([ND](https://wiki.geneontology.org/No_biological_Data_available_(ND)_evidence_code)). 

A GO:ID is used only when the evidence code is IC, and refers to the GO term(s) used as the basis of a 
curator inference. In these cases the entry in the **DB:Reference** column will be that used to assign the GO term(s) 
from which the inference is made.

Cardinality 0, 1, >1 with the following rules:

* Cardinality must be 0 for evidence codes IDA, TAS, NAS, or ND. 

* Cardinality must be 1, >1 for IEA, IC, IGI, IPI, ISS & child terms of ISS. 

For cardinality >1 use a pipe to separate independent evidence (e.g. FB:FBgn1111111\|FB:FBgn2222222). Use commas to indicate grouped evidence, e.g. two of three genes in a triply mutant organism.

#### 8. Interacting taxon ID
Taxonomic identifier for interacting organism to be used only in conjunction with terms that have the biological process term 'GO:0044419 biological process involved in interspecies interaction between organisms'or the cellular component term 'GO:0018995 host cellular component' as an ancestor. Identifiers must come from NCBI Taxonomy database and have the `NCBITaxon:` prefix.

This field is optional, cardinality 0 or greater.

#### 9. Date
Date on which the annotation was made; format is `YYYY-MM-DD`. Conforms to the date portion of ISO 8601.

This field is mandatory, cardinality 1.

#### 10. Assigned By
The database which made the annotation one of the values from the set of [GOC groups](https://github.com/geneontology/go-site/blob/master/metadata/groups.yaml); used for tracking 
the source of an individual annotation. Value may differ from the **DB:DB Object ID** column: any annotation that is made by one database and incorporated into another retains the original value.

This field is mandatory, cardinality 1.

#### 11. Annotation Extension
Annotation extensions allow GO terms in standard annotations to be further specified, using gene products, chemicals, cell types, anatomical structures. The ontology terms used to extend annotations are GO term or external ontologies and build a more complete model of biological systems.

For example, if a gene product has a role in [tetrahydrofolate interconversion](http://amigo.geneontology.org/amigo/term/GO:0035999) during [S phase](http://amigo.geneontology.org/amigo/term/GO:0051320), the **GO ID** (column 4) would be GO:0035999 and 
the **Annotation Extension** column would contain the Relations Ontology and appropriate GO term: [RO:0002092](http://purl.obolibrary.org/obo/RO_0002092)([GO:0051320](http://amigo.geneontology.org/amigo/term/GO:0051320)). 
Targets of certain processes or functions can also be included in this field to indicate the gene, gene product, or 
chemical involved; for example, if a gene product is annotated to protein kinase activity, the annotation extension 
column would contain the UniProtKB protein ID for the protein phosphorylated in the reaction. See the documentation on 
using the [annotation extension column](https://wiki.geneontology.org/Annotation_Extension) for details of practical usage.

This field is optional, cardinality 0 or greater.

#### 12. Annotation Properties
The Annotation Properties column contains a list of "property_name = property_value".  If the property exists, the property is single valued. Annotation properties include [GO-CAM](https://geneontology.org/docs/gocam-overview/) information and comments on annotations. Examples:

* id=GOA:2113861687
* noctua-model-id=gomodel:6086f4f200000223
* model-state=production
* creation-date=2019-07-20T12:04:08

This field is not mandatory, cardinality 0, 1, >1 ; for cardinality >1 use a pipe to separate entries
