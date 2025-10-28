---
title: Gene Product Information (GPI) format 2.0
permalink: /docs/gene-product-information-gpi-format-2.0/
redirect_from:
- /docs/gene-product-information-gpi-format/

---
# Gene Product Information (GPI) file description
## Purpose
The (*G*ene *P*roduct *I*nformation) (GPI) file represents every annotable biological entity for an organism: protein-coding gene, non-coding RNA genes, protein isoforms (i. e., splice variants) and modified forms, such as cleaved forms or proteins modified by post-translational modifications. The entities should be non-redundant. 

This file is used to normalize annotations to single genes, and to map different identifiers for the same entity across different resources. 

# GPI 2.0 file format

This page is a summary of the GPI 2.0 file format; for full technical details and changes from the previous formal, GPI 1.2, see the [Full GPI 2.0 Specification](https://github.com/geneontology/go-annotation/blob/master/specs/gpad-gpi-2-0.md) page. 
  
## GPI File Header
Each line of the file header must be prefixed with an exclamation mark (`!`). 
### Mandatory elements of the GPI 2.0 file header are: 
- gpi-version
- the name of database or group generating the file, as listed in [dbxrefs.yaml file](https://github.com/geneontology/go-site/blob/master/metadata/db-xrefs.yaml)
- the date the file was generated conforming to the date portion of [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standards, i. e. `YYYY-MM-DD`
- Example GPI 2.0 header:
    ```
    !gpi-version: 2.0
    !generated-by: SGD
    !date-generated: 2024-05-01
    ```   
## Additional header information 
Include project URL and funding sources, or any other information, as long as it is preceded by an exclamation mark (`!`). For example:
     ```
    !URL: http://www.yeastgenome.org/
    !Project-release: WS275
    !Funding: NHGRI grant number HG012212
     ```

## GPI File Contents
The GPI 2.0 file comprises 11 tab-delimited fields. For fields that multiple values, those should be separated by pipes (`|`).
**Required fields are in bold.**

| **Column** | **Content** | **Cardinality** | **Example 1: UniProt protein**| **Example 2: WormBase protein-coding gene** | **Example 3: UniProt isoform**| **Example 4: SGD protein complex** | **Example 5: PomBase protein complex** | **Example 6: UniProt human ncRNA** | **Example 7: FlyBase ncRNA** 
|----------|---------|-------------|---------|--------|--------|--------|
| 1 | **[DB:Object ID](#1-dbdb-object-id "Definition and requirements for DB:DB_Object_ID (column 1)")** |	1 |	UniProtKB:Q4VCS5| 	WB:WBGene00000007 | UniProtKB:Q4VCS5-1|  SGD:S000217643 |  ComplexPortal:CPX-25785  | RNAcentral:URS0000527F89_9606 | FB:FBgn0262451 |  
| 2 | **[Object Symbol](#2-db-object-symbol "Definition and requirements for DB Object Symbol (column 2)")** |	1 |	AMOT| aat-6 | AMOT|  CBF1:MET4:MET28 | SWI5-SWI2 | URS0000527F89_9606 | mir-ban |  
| 3 | [Object Name](#3-db-object-name "Definition and requirements for DB Object Name (column 3)") |	0 or 1 | Angiomotin| Amino acid transporter protein 6 | Angiomotin| sulfur metabolism transcription factor complex | mating-type switching complex |  Homo sapiens (human) hsa-miR-145-5p | bantam |
| 4 | [Object_Synonym(s)](#4-db-object-synonym "Definition and requirements for DB Object Synonym(s) (column 4)") |	0 or > |	KIAA1071| aat-6|T11F9.4 | | |   |  | | 
| 5 | **[Object Type](#5-db-object-type "Definition and requirements for DB Object Type (column 5)")** |	1 |	PR:000000001| SO:0000704 | PR:000000001| GO:0032991 | GO:0032991 |  SO:0000276	| SO:0000276	 |  
| 6 | **[Object Taxon](#6-db-object-taxon "Definition and requirements for DB Object Taxon (column 6)")** | 1 |	NCBITaxon:9606| NCBITaxon:6239| NCBITaxon:9606|  NCBITaxon:559292 |  NCBITaxon:4896 |  NCBITaxon:9606| NCBITaxon:7227 | 
| 7 | [Encoded by](#7-encoded-by "Definition and requirements for Encoded by (column 7)") | 0 or > | HGNC:17810 | | | HGNC:17810 | |HGNC:31532 |  
| 8 | **[Canonical object ID](#8-parent-protein "Definition and requirements for Canonical object ID (column 8)")** | 1 |	UniProtKB:Q4VCS5 | WB:WBGene00000007 | UniProtKB:Q4VCS5 | SGD:S000217643  | ComplexPortal:CPX-25785 |  RNAcentral:URS0000527F89_9606 | FB:FBgn0262451 |  
| 9 | [Protein Complex Members](#9-protein-containing-complex-members "Definition and requirements for Protein Containing Complex Members (column 9)") | 0 or > |  | | |SGD:S000003821 \|<br/>SGD:S000001456 \|<br/>SGD:S000005047| PomBase:SPAC1142.03c \|<br/>PomBase:SPBC409.03	|   | |  
| 10 | [Cross-reference(s)](#10-db-xrefs "Definition and requirements for DB_Xref(s) (column 10)") | 0 or > | NCBIGene:154796 \|<br/>ENSEMBL:ENSG00000126016 | UniProtKB:Q22397 | NCBIGene:154796 \|<br/>ENSEMBL:ENSG00000126016 | ComplexPortal:CPX-1016 |  | ENSG00000276365 |  RNAcentral:URS00002F21DA_7227 |    
| 11 | [Gene Product Properties](#11-gene-product-properties "Definition and requirements for Gene Product Properties (column 11)") | 0 or > |	db_subset=Swiss-Prot | | |  |  | | |  

### Definitions and requirements for GPI 2.0 field contents
#### 1. DB:Object ID
* A unique identifier for the entity being annotated, composed of two elements: a **DB** prefix is the database, that must be described in the GO [dbxrefs.yaml file](https://github.com/geneontology/go-site/blob/master/metadata/db-xrefs.yaml), and a **DB Object ID**, which is the alphanumerical identifier corresponding to the entity. The **DB:DB Object ID** is the combined identifier for the database object. Examples:
  + UniProtKB:P99999
  + SGD:S000002164
  + MGI:MGI:1919306
* The identifier may reference the canonical form of a gene or gene product including functional RNAs, as well as gene variants, distinct proteins produced by to differential splicing, alternative translational starts, post-translational cleavage or post-translational modification. If the gene product is not a canonical gene or gene product identifier, the corresponding canonical form must be referenced in Column 8 (Parent Protein) of the GPI file.
   Note that not all **DB:Object_ID** are necessarily in the same ID space. Some groups use [RNA Central]([url](https://rnacentral.org/)) IDs for RNAs, some groups use [ComplexPortal]([url](https://www.ebi.ac.uk/complexportal)) IDs for protein complexes, and some groups use [Protein Ontology]([url](https://proconsortium.org/)) IDs for modified proteoforms. Together, the unique values in Column 8 correspond to the full set of genes products encoded by the organism, as well as the protein complexes represented in the source database.
* Cardinality = 1

#### 2. Object Symbol
* The unique symbol corresponding to the **DB:Object_ID** in Column 1; usually the name of the gene. No white spaces allowed.
* The symbol is not a unique identifier or an accession number (unlike the **DB:Object_ID**), but if the entity does not have a symbol, the **DB:Object_ID** may be used as **Object Symbol**. For example, several alternative transcripts from one gene may be annotated separately, each with specific gene product identifiers in **DB:Object_ID**, but with the same gene symbol in the **Object_Symbol** column. 
* Cardinality = 1

#### 3. Object Name
* The name of the gene or gene product corresponding to the **DB:Object_ID** in Column 1. White spaces are allowed in this field. 
* Cardinality = 0 or 1

#### 4. Object Synonym
* Alternative names for the entity in **DB:Object_ID** in Column 1. These entries may be a gene symbol, clone ID, or any other label ot identifier. Object synonyms are useful for searching. 
* Cardinality = 0, 1, > 1; for cardinality > 1, values must be pipe-separated. 

#### 5. Object Type
* An ontology identifier describing the class of biological entity of the **DB:Object_ID** in Column 1. The ontology identifier must be a value from Protein Ontology for proteins,  Gene Ontology for protein complexes, or Sequence Ontology for all other entities. Allowed entity types: 
  * [PR:000000001](http://purl.obolibrary.org/obo/PR_000000001): protein 
  * [GO:0032991](http://purl.obolibrary.org/obo/GO_0032991): protein-containing complex 
  * [SO:0001217](http://purl.obolibrary.org/obo/SO_0001217): protein-coding gene 
  * [SO:0000655](http://purl.obolibrary.org/obo/SO_0000655): ncRNA or any SO child term
  * [SO:0001263](http://purl.obolibrary.org/obo/SO_0001263): ncRNA-coding gene or any SO child term
  * [SO:0000336](http://purl.obolibrary.org/obo/SO_0000336): pseudogene
    
* **Note on object types**: This field should descibe the type of biological object as defined by the contributing database. For example, [WormBase identifiers](https://wormbase.org/species/c_elegans/gene/WBGene00000001) represent [genes](http://purl.obolibrary.org/obo/SO_0000704), PomBase identifiers represent [protein-coding genes](http://purl.obolibrary.org/obo/SO_0001217), and [SGD identifiers](https://www.yeastgenome.org/locus/S000002429) represent [proteins](http://purl.obolibrary.org/obo/PR_000000001). 
* GO does not allow '[gene](http://purl.obolibrary.org/obo/SO_0000704)' and 'gene product' as biological entity types, as this does not allow to differentiate between proteins and ncRNAs products. 
* Cardinality = 1

#### 6. Object Taxon
* The [NCBI taxon ID](https://www.ncbi.nlm.nih.gov/taxonomy) of the organism (species or strain) encoding the **DB:Object_ID** from Column 1, in the format `NCBITaxon:numerical_identifier`. 
* Cardinality = 1

#### 7. Encoded by
* For proteins and transcripts, **Encoded by** refers to the gene ID that encodes those entities, e.g. ENSG00000197153.
* Cardinality = 0, 1, > 1; for cardinality > 1, values must be pipe-separated. 

#### 8. Canonical object ID
* If the **DB:Object_ID** in Column 1 describes a gene, a gene-centric reference protein accession or a protein complex, then this column should repeat the DB:Object_ID from Column 1.
* If the **DB:Object_ID** in Column 1 describes an entity derived from a gene product such as a protein isoform, a modified protein or a processed transcript (e. g.  miRNA), then this column refers to the gene-centric ID of the Column 1 entry.
* If the **DB:Object_ID** in Column 1 is of a type for which the organism's gene set represented by the GPI does not have IDs for a specific type of entity (for example, uncloned genes), then this column should repeat the DB:Object_ID from Column 1.
* Cardinality = 1

#### 9. Protein-Containing Complex Members
* When the **DB:Object_ID** in Column 1 describes a protein-containing complex, this column contains the gene-centric canonical protein identifiers.
* Cardinality = 0, 1, > 1; for cardinality > 1, values must be pipe-separated.

#### 10. Database cross-references (DB_Xrefs)
* Identifiers for the object in **DB:Object_ID** found in other databases. Identifiers used must be standard 2-part global identifiers: a namespace and a value, separated by a colon, e.g. UniProtKB:Q60FP0.
* This field is mandatory if the prefix in column 1 is not one of: UniProtKB, RNACentral, ComplexPortal. In these cases, **DB_Xrefs** must include the correponding UniProtKB ID, RNACentral, or ComplexPortal as appropriate according to the Object Type (see Column 5).
* Note that RNACentral IDs contain the taxon ID of the entity appended after an 'underscore' character ("_"): see [RNACentral:URS00002F21DA]((https://rnacentral.org/rna/URS00002F21DA)] (generic for several organism) versus [[RNACentral:URS00002F21DA]_7227](https://rnacentral.org/rna/URS00002F21DA/7227) (specific for Drosophila melanogaster).
* Additional cross references such as NCBI gene or protein IDs, HGNC, etc, may also be included.
* Cardinality = 0, 1, > 1; for cardinality > 1, values must be pipe-separated. 

#### 11. Gene Product Properties
* The Properties column can be filled with a pipe separated list of values in the format "property_name = property_value". There is a fixed vocabulary for the property names as indicated in the table below:

Property |	Allowed usages per annotation	| Value Grammar | 	Example	| Comment 
|----------|---------|----------|----------|----------|
'db-subset'	| 0 or 1		| 'TrEMBL' or 'Swiss-Prot'	| 	db-subset=TrEMBL		| The status of a UniProtKB accession with respect to curator review. |
'uniprot-proteome' | 	0 or 1	|  ID	|  uniprot-proteome=UP000001940 | 	A unique UniProtKB identifier for the set of proteins that constitute an organism's proteome. |
'go-annotation-complete' | 	0 or 1	|  Date_Or_Date_Time	|  2019-02-05	|  Indicates the date on which a curator determined that the set of GO annotations for a given entity is complete with respect to GO annotation. Complete means that all information about a gene has been captured as a GO term, but not necessarily that all possible supporting evidence is annotated. |
'go-annotation-summary' | 	0 or 1	|  Text	|  go-annotation-summary=Sterol binding protein with a role in intracellular sterol transport; localizes to mitochondria and the cortical ER	A textual gene or gene product description. |
* Cardinality = 0, 1, > 1; for cardinality > 1, values must be pipe-separated.  |
