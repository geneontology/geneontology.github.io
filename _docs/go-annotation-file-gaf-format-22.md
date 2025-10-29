---
title: GO Association File (GAF) format
permalink: /docs/go-annotation-file-gaf-format-2.2/
redirect_from:
- /page/go-annotation-file-gaf-format-22
- /page/go-annotation-file-formats

---

<!--Comment transferred from gaf-format-2.1 page: Column 12 needs rewriting. Currently refers to "DB Object Symbol (column 2)"; should either be DB object ID or column 3.  Column 8 is too long.
Suggestion: can we use "optional" instead of "not mandatory"?-->

# Gene Association File (GAF) file description
The *G*ene *A*ssociation *F*ile (GAF) file contains annotation data provided by the Gene Ontology Consortium in standardized tab-delimited text files. Each line in the file represents an association between a gene product and a GO term, with an [evidence code](/docs/guide-go-evidence-codes/), a reference to support the association, and other data associated with the gene product or the annotation. This page describes the GAF 2.2 file format.

GO also provides annotations as [GPAD](/docs/gene-product-association-data-gpad-format/)+[GPI](/docs/gene-product-information-gpi-format/).  

For general information on GO annotations, please see the [introduction to GO annotation](/docs/go-annotations/) page.

# GAF 2.2 format description

## File Header

**Mandatory elements of the GAF 2.2 file header**  

!`gaf-version:` 2.2  <br>
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

## GAF 2.2 fields

The annotation flat file format is comprised of 17 tab-delimited fields.

| **Column** 	| **Content** 	| **Required?** 	| **Cardinality** 	| **Example**|
|----------|---------|-------------|---------|--------|
| 1 	| [DB](#db-column-1 "Definition and requirements for DB (column 1)")	| required 	| 1 |	UniProtKB|
| 2 	| [DB Object ID](#db-object-id-column-2 "Definition and requirements for DB Object ID (column 2)") 	| required 	| 1 |	P12345|
| 3 	| [DB Object Symbol](#db-object-symbol-column-3 "Definition and requirements for DB Object Symbol (column 3)") 	| required 	| 1 |	GOT2|
| 4 	| [Relation](#relation-column-4 "Definition and requirements for Relation (column 4)") 	| required 	| 1 (pipe-separated with NOT for negation) |	involved_in or NOT\|involved_in|
| 5 	| [GO ID](#go-id-column-5 "Definition and requirements for GO ID (column 5)") 	| required 	| 1 |	GO:0006457|
| 6 	| [Reference](#reference-column-6 "Definition and requirements for Reference (column 6)") 	| required 	| 1 or greater |	PMID:9683573|
| 7 	| [Evidence Code](#evidence-code-column-7 "Definition and requirements for Evidence Code (column 7)") 	| required 	| 1 |	TAS|
| 8 	| [With (or) From](#with-or-from-column-8 "Definition and requirements for With [or] From (column 8)") 	| optional 	| 0 or greater |	GO:0000346 \|UniProtKB:P00508|
| 9 	| [Aspect](#aspect-column-9 "Definition and requirements for Aspect (column 9)") 	| required 	| 1 |	P|
| 10 	| [DB Object Name](#db-object-name-column-10 "Definition and requirements for DB Object Name (column 10)") 	| optional |	0 or 1 |	Aspartate aminotransferase, mitochondrial|
| 11 	| [DB Object Synonym](#db-object-synonym-column-11 "Definition and requirements for DB Object Synonym (column 11)") 	| optional |	0 or greater |	mAspAT|
| 12 	| [DB Object Type](#db-object-type-column-12 "Definition and requirements for DB Object Type (column 12)") 	| required |	1 |	protein|
| 13 	| [Taxon](#taxon-column-13 "Definition and requirements for Taxon (column 13)")	| required |	1 or 2 |	taxon:9986 or taxon:9986\|taxon:652611|
| 14 	| [Date](#date-column-14 "Definition and requirements for Date (column 14)") 	| required |	1 |	20111018|
| 15 	| [Assigned By](#assigned-by-column-15 "Definition and requirements for Assigned By (column 15)") 	| required |	1 |	HGNC|
| 16 	| [Annotation Extension](#annotation-extension-column-16 "Definition and requirements for Annotation Extension (column 16)") 	| optional |	0 or greater |	part_of(CL:0000576)|
| 17 	| [Gene Product Form ID](#gene-product-form-id-column-17 "Definition and requirements for Gene Product Form ID (column 17)") 	| optional |	0 or 1 |	UniProtKB:P12345-2|


## Definitions and requirements for field contents

#### DB (column 1)
Refers to the database from which the identifier of the biological entity described in **DB object ID** (column 2) is drawn. For example, if a UniProtKB ID is the **DB object ID** (column 2), **DB** (column 1) should be UniProtKB.

Must be one of the values from [GO database cross-references](http://amigo.geneontology.org/xrefs).

    This field is mandatory, cardinality 1.

#### DB Object ID (column 2)
A unique identifier from the database in DB (column 1) describing the biological entity annotated. 

    This field is mandatory, cardinality 1.

Note that the identifier **must reference a top-level primary gene or gene product identifier**: either a gene, or a protein that has a 1:1 correspondence to a gene. Identifiers referring to particular protein isoforms or post-translationally cleaved or modified proteins are *not* allowed in this field of the GAF file; such identifiers are captured in the [Gene Product Form ID](#gene-product-form-id-column-17 "Definition and requirements for Gene Product Form ID (column 17)").

The **DB object ID** is the identifier for the database object, which may or may not correspond exactly to what is described in a paper. For example, a paper describing a protein may support annotations to a gene encoding a protein (gene ID in **DB object ID** field) or annotations to the protein (protein ID in **DB object ID** field).


#### DB Object Symbol (column 3)
A name for the entity represented by the **DB object ID**. The **DB Object Symbol** field should be text that means something to a biologist wherever possible (a gene symbol, for example). If the entity has no name, the DB object ID can be used as a **DB Object Symbol**.

    This field is mandatory, cardinality 1.

#### Relation (column 4)
This column is populated with relations from the [Relation Ontology](https://ontobee.org/ontology/RO) that describe how the annotated biological entity relates to the GO term with which it is associated. [**Negation**](https://wiki.geneontology.org/Elements_of_an_annotation#Negation) is represented by prepending "NOT" to a relation with a pipe.

    This field is mandatory, cardinality 1. For negation, a pipe must be used to separate the "NOT" from the relation (e.g. "NOT|contributes_to" or "NOT|enables").

**If no relation is provided by a contributing group, default values (shown in bold below) will be added during file processing in the GO Central pipeline. The default relation represents the most general relation.**

See also the [documentation on qualifiers](http://geneontology.org/docs/go-annotations/#annotation-qualifiers) in the GO annotation guide.


| **GO Aspect** | **Default relation** | **Default relation for root annotations** | **Other allowed relations** |
|----------|---------|-------------|------------|
| **Molecular Function** | [**enables**](https://wiki.geneontology.org/Enables) | [enables](https://wiki.geneontology.org/Enables) | [contributes_to](https://wiki.geneontology.org/Contributes_to) |
| **Biological Process** | [**acts_upstream_of_or_within**](https://wiki.geneontology.org/Acts_upstream_of_or_within)  |  [involved_in](https://wiki.geneontology.org/Involved_in) |[acts_upstream_of](https://wiki.geneontology.org/Acts_upstream_of), [acts_upstream_of_positive_effect](https://wiki.geneontology.org/Acts_upstream_of,_positive_effect), [acts_upstream_of_negative_effect](https://wiki.geneontology.org/Acts_upstream_of,_negative_effect), [acts_upstream_of_or_within_negative_effect](https://wiki.geneontology.org/Acts_upstream_of_or_within,_negative_effect), [acts_upstream_of_or_within_positive_effect](https://wiki.geneontology.org/Acts_upstream_of_or_within,_positive_effect) |
| **Cellular Component** | [**located_in** ](http://purl.obolibrary.org/obo/RO_0001025) for [cellular anatomical entity](http://amigo.geneontology.org/amigo/term/GO:0110165) and [virion component](http://amigo.geneontology.org/amigo/term/GO:0044423#display-lineage-tab) & child terms; [**part_of**](https://wiki.geneontology.org/Part_of_relation) for [protein-containing complex](GO:0032991 protein-containing complex) & child terms | [is_active_in](https://wiki.geneontology.org/Is_active_in) | [colocalizes_with](https://wiki.geneontology.org/Colocalizes_with)

#### GO ID (column 5)
The GO identifier for the term associated with the **DB object ID**.

    This field is mandatory, cardinality 1.

#### Reference (column 6)
One or more unique identifiers for a single reference cited as the source experiment or method for atributing the **GO ID** to the **DB Object ID**. This may be a literature reference (PMID or DOI) or a [GOREF internal reference record](https://github.com/geneontology/go-site/blob/master/metadata/gorefs.yaml). The syntax is DB:accession_number.

Note that **only one unique reference can be cited on a single line** in the GAF. If a reference has identifiers in more than one database, multiple identifiers for that reference can be included on a single line, separated by a pipe. For example, if a reference has a PMID and a model organism database reference, the PMID **must** be included but the model orgainsm database identifier may be included, as well. Note that if a model organism database has an identifier for the reference, that identifier should **always** be included, even if a PubMed ID is also used.

    This field is mandatory, cardinality 1, >1; for cardinality >1 use a pipe to separate entries (e.g. PMID:2676709|SGD_REF:S000047763).


#### Evidence Code (column 7)
See  [GO-ECO mapping file](https://github.com/evidenceontology/evidenceontology/blob/master/gaf-eco-mapping.txt) and the [GO Evidence code guide](http://geneontology.org/page/guide-go-evidence-codes) for the list of valid evidence codes for GO annotations.

    This field is mandatory, cardinality 1.


#### With [or] From (column 8)
Also referred to as **With, From** or the **With/From** column.
This field is used with specific ECO codes to capture an additional identifier supporting the evidence for the annotation. For example, it can identify another gene product to which the annotated gene product is similar (ISS) or interacts with (IPI). Population of the **With/From** is mandatory for certain evidence codes, see the [documentation for the individual evidence codes](https://wiki.geneontology.org/Guide_to_GO_Evidence_Codes) for more information.

Multiple values are allowed in the **With/From** field for certain evidence codes (and they must be separated with either a pipe or a comma. The pipe (\|) specifies an independent statement (OR) and is equivalent to making separate annotations, i.e. not all conditions are required to infer the annotated GO term. The comma (,) specifies a connected statement (AND) and indicates that all conditions are required to infer the annotated GO term. In this case, 'OR' is a weaker statement than 'AND', therefore will be correct in all cases. Pipe and comma separators may be used together in the same **With/From** field.

    Cardinality 0, 1, >1 with the following rules:

* Cardinality must be 0 for evidence codes IDA, TAS, NAS, or ND. 

* Cardinality must be 1, >1 for IEA, IC, IGI, IPI, ISS & child terms of ISS. 

For cardinality >1 a pipe is used to separate independent evidence (e.g. FB:FBgn1111111\|FB:FBgn2222222). A commas indicates grouped evidence, e.g. two of three genes in a triply mutant organism.


#### Aspect (column 9)
Refers to the specific branch of the GO to which the **GO ID** (column 5) belongs: P (biological process), F (molecular function) or C (cellular component).

    This field is mandatory; cardinality 1.


#### DB Object Name (column 10)
Name of the annotated gene or gene product.

    This field is not mandatory, cardinality 0, 1 [white space allowed].


#### DB Object Synonym (column 11)
A gene symbol [or other text] that denotes another name by which the annotated gene or gene product might be known. 

    This field is not mandatory, cardinality 0, 1, >1 [white space allowed]; for cardinality >1 use a pipe to separate entries (e.g. YFL039C|ABY1|END7|actin gene).


#### DB Object Type (column 12)
* An ontology identifier describing the class of biological entity of the **DB:Object_ID** in Column 1. The ontology identifier must be a value from Protein Ontology for proteins,  Gene Ontology for protein complexes, or Sequence Ontology for all other entities. Allowed entity types: 
  *  protein ([PR:000000001](http://purl.obolibrary.org/obo/PR_000000001))
  * [GO:0032991](http://purl.obolibrary.org/obo/GO_0032991): protein-containing complex 
  * [SO:0001217](http://purl.obolibrary.org/obo/SO_0001217): protein-coding gene 
  * [SO:0000655](http://purl.obolibrary.org/obo/SO_0000655): ncRNA or any SO child term
  * [SO:0001263](http://purl.obolibrary.org/obo/SO_0001263): ncRNA-coding gene or any SO child term
  * [SO:0000336](http://purl.obolibrary.org/obo/SO_0000336): pseudogene
    
    This field is mandatory, cardinality 1.


#### Taxon (column 13)
The NCBI taxonomic identifier(s) of the annotated entity (column 1). It is also possible to capture a second taxonomic identifier for an interacting organism, in conjunction with terms that have the biological process term 'GO:0044419 biological process involved in interspecies interaction between organisms'or the cellular component term 'GO:0018995 host cellular component' as an ancestor. 

 This field is mandatory, cardinality 1, 2; for cardinality 2 use a pipe to separate entries.

Identifiers must come from NCBI Taxonomy database and have the `taxon:` prefix (e.g. taxon:1|taxon:1000)


#### Date (column 14)
Date on which the annotation was made; format is YYYYMMDD.

    This field is mandatory, cardinality 1.


#### Assigned By (column 15)
The database that made the annotation.

This column must use one of the values from the set of [GO database cross-references](https://github.com/geneontology/go-site/blob/master/metadata/db-xrefs.yaml).

The value of this column is used for tracking the source of an individual annotation, but will differ from the value in column 1 for any annotation that is made by one database and incorporated into another.

    This field is mandatory, cardinality 1.


#### Annotation Extension (column 16)
 One of:

        DB:gene_id
        DB:sequence_id
        CHEBI:CHEBI_id
        Anatomy Ontology:anatomy_id
        Life Stage Ontology:lifestage_id
        GO:GO_id

This column contains cross references to other ontologies used to qualify or enhance the annotation with additional biological context. The cross-reference is prefaced by an appropriate relationship from the Relations Ontology; references to multiple ontologies can be entered. For example, if a gene product is active in the mitochondria of lymphocytes, the **GO ID** (column 5) would be GO:0005739 and the annotation extension column would contain a relationship and cross-reference to the term lymphocyte, ***part of***(CL:0000542) from the Cell Type Ontology.

Targets of certain processes or functions can also be included in this field to indicate the gene, gene product, or chemical involved; for example, if a gene product is annotated to protein kinase activity, the annotation extension column would contain the UniProtKB protein ID for the protein phosphorylated in the reaction.

The pipe (\|) specifies an independent statement (OR) and is equivalent to making separate annotations, i.e. not all conditions are required to infer the annotated GO term. The comma (,) specifies a connected statement (AND) and indicates that all conditions are required to infer the annotated GO term. In this case, 'OR' is a weaker statement than 'AND', therefore will be correct in all cases. Pipe and comma separators may be used together in the same **Annotation Extension** field.

See the documentation on using the **Annotation Extension** column for details of practical usage; a wider discussion of the annotation extension column can be found on the <a href="http://wiki.geneontology.org/index.php/Annotation_Extension">GO internal documentation site</a>.

    This field is optional, cardinality 0, 1, >1.


#### Gene Product Form ID (column 17)
As the **DB Object ID** (column 2) must be a canonical entity, i.e. a gene OR a representative protein that has a 1:1 correspondence to a gene—this column captures specific isoforms or post-translationally processed forms of that gene or gene product. Contents will frequently include protein sequence identifiers: for example, identifiers that specify distinct proteins produced by to differential splicing, alternative translational starts, post-translational cleavage or post-translational modification. Identifiers for functional RNAs can also be included in this column.

The identifier used must be a standard 2-part global identifier, e.g. UniProtKB:OK0206-2
* When the **Gene Product Form ID** is filled with a protein identifier, the value in **DB Object Type** (column 12) must be protein. Protein identifiers can include UniProtKB accession numbers, NCBI NP identifiers or Protein Ontology (PRO) identifiers.
* When the **Gene Product Form ID** is filled with a functional RNA identifier, the **DB Object Type** (column 12) must be either ncRNA, rRNA, tRNA, snRNA, or snoRNA

This column may be left blank; if so, the value in **DB Object Type** (column 12) will provide a description of the expected gene product.

More information and examples are available from the <a href="http://wiki.geneontology.org/index.php/GAF_Col17_GeneProducts">GO internal documentation on column 17</a>.
