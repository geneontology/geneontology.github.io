---
title: Gene Product Information (GPI) format 2.0
permalink: /docs/gene-product-information-gpi-format-2.0/
redirect_from:
- /docs/gene-product-information-gpi-format/

---
# Gene Product Information (GPI) file description
The (*G*ene *P*roduct *I*nformation) (GPI) file represents every annotable entity in an organism: protein-coding gene, non-coding RNA genes, protein isoforms (i. e., splice variants) and modified forms, such as cleaved forms or proteins modified by post-translational modifications. The entities should be non-redundant. 

This file is used to normalize annotations to single genes, and to map different identifiers for the same entity across different resources. 

# GPI 2.0 file format

This page is a summary of the GPI 2.0 file format; for full technical details and changes from the previous formal, GPI 1.2, see the [Full GPI 2.0 Specification](https://github.com/geneontology/go-annotation/blob/master/specs/gpad-gpi-2-0.md) page. 
  
## GPI File Header
Each line of the file header must be prefixed with an exclamation mark (`!`). 
Mandatory elements of the GPI 2.0 file header are: 
- gpi-version
- the name of database or group generating the file, as listed in [dbxrefs.yaml file](https://github.com/geneontology/go-site/blob/master/metadata/db-xrefs.yaml)
- the date the file was generated conforming to the date portion of [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standards, i. e. `YYYY-MM-DD`
- Example GPI 2.0 header:

  !gpi-version: 2.0
  !generated-by: SGD
  !date-generated: 2024-05-01
    
- Additional information may also be included, for example project URL and funding sources. For example:
  
    !URL: http://www.yeastgenome.org/
    !Project-release: WS275
    !Funding: NHGRI grant number HG012212

## GPI file fields

The GPI 2.0 file comprises 11 tab-delimited fields. For fields that multiple values, those should be separated by pipes (`|`).
**Required fields are shown with an asterisk (*).**

| **Column** | **Content** | **Cardinality** | **Example 1: protein**| **Example 2: isoform**| **Example 3: protein complex** | **Example 4: modified form**  | **Example 5: ncRNA**
|----------|---------|-------------|---------|--------|
| 1 | **[DB:Object ID](#1-dbdb-object-id "Definition and requirements for DB:DB_Object_ID (column 1)")(*)** |	1 |	UniProtKB:Q4VCS5| 	UniProtKB:Q4VCS5-1|  SGD:S000217643 | PR:Q9DAQ4-1 |  RNAcentral:URS0000527F89_9606 | 
| 2 | **[Object Symbol](#2-db-object-symbol "Definition and requirements for DB Object Symbol (column 2)")** |	1 |	AMOT| AMOT|  CBF1:MET4:MET28 | m1700003E16Rik/iso:m1 | URS0000527F89_9606 | 
| 3 | [Object Name](#3-db-object-name "Definition and requirements for DB Object Name (column 3)") |	0 or 1 | Angiomotin| Angiomotin| sulfur metabolism transcription factor complex | uncharacterized protein C2orf81 homolog isoform m1 (mouse) | Homo sapiens (human) hsa-miR-145-5p | 
| 4 | [Object_Synonym(s)](#4-db-object-synonym "Definition and requirements for DB Object Synonym(s) (column 4)") |	0 or > |	KIAA1071| KIAA1071| | m1700003E16Rik/iso:m1	PR:000000001 |  | 
| 5 | **[Object Type](#5-db-object-type "Definition and requirements for DB Object Type (column 5)")** |	1 |	PR:000000001| PR:000000001| GO:0032991 | PR:000000001 | SO:0000276	
| 6 | **[Object Taxon](#6-db-object-taxon "Definition and requirements for DB Object Taxon (column 6)")** | 1 |	NCBITaxon:9606| NCBITaxon:9606|  NCBITaxon:559292 | NCBITaxon:10090	| NCBITaxon:9606| 
| 7 | [Encoded by](#7-encoded-by "Definition and requirements for Encoded by (column 7)") | 0 or > | HGNC:17810 | HGNC:17810 | | MGI:MGI:1919087 | HGNC:31532 |
| 8 | [Parent Protein](#8-parent-protein "Definition and requirements for Parent Protein (column 8)") |		0 or 1 |	| UniProtKB:Q4VCS5 | | PR:Q9DAQ4 | |
| 9 | [Protein Complex Members](#9-protein-containing-complex-members "Definition and requirements for Protein Containing Complex Members (column 9)") | 0 or > | | |SGD:S000003821 \|<br/>SGD:S000001456 \|<br/>SGD:S000005047| | |
| 10 | [Cross-reference(s)](#10-db-xrefs "Definition and requirements for DB_Xref(s) (column 10)") | 0 or > | NCBIGene:154796 \|<br/>ENSEMBL:ENSG00000126016 | NCBIGene:154796 \|<br/>ENSEMBL:ENSG00000126016 | ComplexPortal:CPX-1016 | UniProtKB:Q9DAQ4-1 | ENSG00000276365 | 
| 11 | [Gene Product Properties](#11-gene-product-properties "Definition and requirements for Gene Product Properties (column 11)") | 0 or > |	db_subset=Swiss-Prot| | | | 

### Definitions and requirements for field contents

#### 1. DB:Object ID
* A unique identifier for the entity being annotated, composed of two elements: a **DB** prefix is the database, that must be described in the GO [dbxrefs.yaml file](https://github.com/geneontology/go-site/blob/master/metadata/db-xrefs.yaml), and a **DB Object ID**, which is the alphanumerical identifier corresponding to the entity. The **DB:DB Object ID** is the combined identifier for the database object. Examples:

    UniProtKB:P99999
    SGD:S000002164
    MGI:MGI:1919306

The identifier may reference the canonical form of a gene or gene product including functional RNAs, as well as gene variants, distinct proteins produced by to differential splicing, alternative translational starts, post-translational cleavage or post-translational modification. If the gene product is not a canonical gene or gene product identifier, the corresponding canonical form must be referenced in Column 8 (Parent Protein) of the GPI file. 

* Cardinality = 1

#### 2. Object Symbol
The unique symbol corresponding to the **DB:Object_ID** in Column 1; usually the name of the gene. No white spaces allowed.

The symbol is not a unique identifier or an accession number (unlike the **DB:Object_ID**), but if the entity does not have a symbol, the **DB:Object_ID** may be used as **Object Symbol**. For example, several alternative transcripts from one gene may be annotated separately, each with specific gene product identifiers in **DB:Object_ID**, but with the same gene symbol in the **Object_Symbol** column. 

* Cardinality = 1

#### 3. Object Name
The name of the gene or gene product corresponding to the **DB:Object_ID** in Column 1. White spaces are allowed in this field. 

* Cardinality = 0 or 1

#### 4. Object Synonym
Alternative names for the entity in **DB:Object_ID** in Column 1. These entries may be a gene symbol, clone ID, or any other label ot identifier. Object synonyms are useful for searching. 

* Cardinality = 0, 1, > 1; for cardinality > 1, values must be pipe-separated. 

#### 5. Object Type
An ontology identifier describing the class of biological entity of the **DB:Object_ID** in Column 1. The ontology identifier must be a value from Protein Ontology for proteins,  Gene Ontology for protein complexes, or Sequence Ontology for all other entities. Allowed entity types: 

* [PR:000000001](http://purl.obolibrary.org/obo/PR_000000001): protein 
* [GO:0032991](http://purl.obolibrary.org/obo/PR_000000001): protein-containing complex 
* [SO:0001217](http://purl.obolibrary.org/obo/SO_0001217): protein-coding gene 
* [SO:0000704](http://purl.obolibrary.org/obo/SO_0000704): gene 
* [SO:0000655](http://purl.obolibrary.org/obo/SO_0000655): ncRNA or any SO child term
* [SO:0001263](http://purl.obolibrary.org/obo/SO_0001263): ncRNA-coding gene or any SO child term

**Note on object types**: This field should descibe the type of biological object as defined by the contributing database. For example, [WormBase identifiers](https://wormbase.org/species/c_elegans/gene/WBGene00000001) represent [genes](http://purl.obolibrary.org/obo/SO_0000704), PomBase identifiers represent [protein-coding genes](http://purl.obolibrary.org/obo/SO_0001217), and [SGD identifiers](https://www.yeastgenome.org/locus/S000002429) represent [proteins](http://purl.obolibrary.org/obo/PR_000000001). 

GO strongly recommends against using 'gene' or 'gene product' as this does not allow to differentiate between proteins and ncRNAs. 

<!--- 
SGD feature type named ORF in SGD --->

* Cardinality = 1

#### 6. Object Taxon
The [NCBI taxon ID](https://www.ncbi.nlm.nih.gov/taxonomy) of the organism (species or strain) encoding the **DB:Object_ID** from Column 1, in the format `NCBITaxon:numerical_identifier`. 

* Cardinality = 1

#### 7. Encoded by
For proteins and transcripts, **Encoded by** refers to the gene ID that encodes those entities, e.g. ENSG00000197153.

* Cardinality = 0, 1, > 1; for cardinality > 1, values must be pipe-separated. 

#### 8. Parent Protein
When the **DB:Object_ID** in Column 1 describes a protein isoform or a modified protein, this column refers to the gene-centric reference protein accession of the column 1 entry.

* Cardinality = 0, 1, > 1; for cardinality >1, values must be pipe-separated. 
<!--- 
How can that be??? this should be 0,1 --->


#### 9. Protein-Containing Complex Members
When the **DB:Object_ID** in Column 1 describes a protein-containing complex, this column contains the gene-centric reference protein accessions.

* Cardinality = 0, 1, > 1; for cardinality > 1, values must be pipe-separated. 

#### 10. Database cross-references (DB_Xrefs)
Identifiers for the object in **DB:Object_ID** found in other databases. Identifiers used must be standard 2-part global identifiers, e.g. UniProtKB:Q60FP0. For proteins in model organism databases, **DB_Xrefs** must include the correponding UniProtKB ID, and may also include NCBI gene or protein IDs, etc. 

* Cardinality = 0, 1, > 1; for cardinality > 1, values must be pipe-separated. 

#### 11. Gene Product Properties
The Properties column can be filled with a pipe separated list of values in the format "property_name = property_value". There is a fixed vocabulary for the property names and this list can be extended when necessary. Supported properties will include: 'GO annotation complete', "Phenotype annotation complete' (the value for these two properties would be a date), 'Target set' (e.g. Reference Genome, kidney, etc.), 'Database subset' (e.g. Swiss-Prot, TrEMBL). 

* Cardinality = 0, 1, > 1; for cardinality > 1, values must be pipe-separated. 
