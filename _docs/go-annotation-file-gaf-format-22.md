---
title: GO Association File (GAF) format
permalink: /docs/go-annotation-file-gaf-format-2.2/
redirect_from:
- /page/go-annotation-file-gaf-format-22
- /page/go-annotation-file-formats

---

<!--Comment transferred from gaf-format-2.1 page: Column 12 needs rewriting. Currently refers to "DB Object Symbol (column 2)"; should either be DB object ID or column 3.  Column 8 is too long.
Suggestion: can we use "optional" instead of "not mandatory"?-->



# GO Association File (GAF) 2.2

This guide lays out the format specifications for the **G**ene **A**ssociation **F**ile (GAF) 2.2 introduced in March 2021; for the older format please see the [GAF 2.1 guide](/docs/go-annotation-file-gaf-format-2.1/).

The Gene Ontology Consortium provides annotation data, the representation of gene product attributes using GO terms, in standardized tab-delimited text files. Each line in the file represents a single association between a gene product and a GO term, with an [evidence code](/docs/guide-go-evidence-codes/) and the reference to support the association.

GO also provides annotations as [GPAD](/docs/gene-product-association-data-gpad-format/)+[GPI](/docs/gene-product-information-gpi-format/).  

For more general information on annotation, please see the [introduction to GO annotation](/docs/go-annotations/).

## GO Association File (GAF) 2.2

### GAF Header

Three lines are required in the GAF 2.2 header as shown below.  Note that the header must start by denoting the GAF file version.

    !gaf-version: 2.2
    !generated-by: database listed in [dbxrefs.yaml](https://github.com/geneontology/go-site/blob/master/metadata/db-xrefs.yaml)
    !date-generated: YYYY-MM-DD or YYYY-MM-DDTHH:MM

Other information, such as links to the submitters project page, funding sources, ontology versions, etc., can be included in an association file as shown below.

    !URL: e.g. http://www.yeastgenome.org/
    !Project-release: e.g. WS275
    !Funding: e.g. NHGRI
    !Columns: file format written out
    !go-version: PURL
    !ro-version: PURL
    !gorel-version: PURL
    !eco-version: PURL


### GAF fields

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


### Definitions and requirements for field contents

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
A (unique and valid) symbol associated with the **DB object ID**.
The DB object symbol can be an open reading frame (ORF) name for an otherwise unnamed gene or protein.
If gene products are annotated, can use gene product symbol if available. Many gene product annotation entries can share a gene symbol.

    This field is mandatory, cardinality 1.

The **DB Object Symbol** field should be text that means something to a biologist wherever possible (a gene symbol, for example). It should not be an ID or an accession number (**DB object ID** [column 2] provides the unique identifier), although IDs can be used as a **DB Object Symbol** if there is no more biologically meaningful symbol available (e.g., for unnamed genes).


#### Relation (column 4)
This column is populated with relations from the [Relation Ontology](https://ontobee.org/ontology/RO) that describe how the annotated biological entity relates to the GO term with which it is associated. [**Negation**](https://wiki.geneontology.org/Elements_of_an_annotation#Negation) is represented by prepending "NOT" to a relation with a pipe.

    This field is mandatory, cardinality 1 or 2; for cardinality 2 use a pipe to separate the "NOT" from the relation (e.g. "NOT|contributes_to" or "NOT|enables").

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

Some permitted values are:

        DB:gene_symbol
        DB:gene_symbol[allele_symbol]
        DB:gene_id
        DB:protein_name
        DB:sequence_id
        GO:GO_id
        CHEBI:CHEBI_id
        IntAct:Complex _id
        RNAcentral:RNAcentral_id
        more...

Multiple entries are allowed in the **With/From** field for certain evidence codes (see below) and they must be separated with either a pipe or a comma. The pipe (\|) specifies an independent statement (OR) and is equivalent to making separate annotations, i.e. not all conditions are required to infer the annotated GO term. The comma (,) specifies a connected statement (AND) and indicates that all conditions are required to infer the annotated GO term. In this case, 'OR' is a weaker statement than 'AND', therefore will be correct in all cases. Pipe and comma separators may be used together in the same **With/From** field.

    This field is required for some evidence codes, cardinality 0, 1, >1.

The **With/From** field may be populated with multiple identifiers when making annotations using the following evidence codes: IMP, IGI, IPI, IC, ISS, ISA, ISO, ISM, IGC, IBA, IKR, RCA, IEA.

Annotations made using the following evidence codes may only use the pipe operator in the **With/From** field: ISS, ISA, ISO, ISM, IBA, IKR, RCA, IEA. It is not mandatory to use pipes, however, and some groups may prefer to make separate annotations.

Annotations made using the following evidence codes may use the pipe or comma operators in the **With/From** field: IMP, IGI, IPI, IC, IGC.

##### Examples

1. Recording variation IDs for allelic variations in the With/from column for the IMP evidence code: Multiple pipe-separated values in the **With/From** field indicate that the process is inferred from each perturbation independently. If more than one variation within the same locus resulted in a phenotype, those variations should be comma-separated (implying AND). For example, two different deletion mutations and one RNAi inactivation support the same GO annotation for a ***C. elegans*** gene. The identifiers for the variations and the curated RNAi experiment are pipe-separated in the **With/From** for this annotation: WB:WBVar00091989\|WB:WBVar00249869\|WB:WBRNAi00084583.
2. Recording gene IDs for genetic interactions in the **With/From** column for the IGI evidence code: Pipe-separated (OR) values should be used to indicate individual genetic interactions that result in the same inference for a process. Multiple values indicating triple mutants, for example, should be comma-separated (AND). For example, a triply mutant animal supports annotation to a specific process using IGI evidence. In this case, the gene identifiers are comma-separated in the **With/From** indicating that the process is inferred from mutations in all three genes together: WBGene00000035,WBGene00000036, the gene that is the object of the annotation and the genes included in the **With/From** column.
3. Recording IDs in the **With/From** column for the IEA evidence code: Multiple, pipe-separated InterPro accessions are used for IEA-based annotations and indicate individual (unconnected) inferences. For e.g. annotations to cell redox homeostasis (GO:0045454) that are inferred from mappings of three InterPro domains to GO:0045454: InterPro:IPR005746\|InterPro:IPR013766\|InterPro:IPR017937.

Note that a gene ID may be used in the **With/From** column for a IPI annotation, or for an ISS annotation based on amino acid sequence or protein structure similarity, if the database does not have identifiers for individual gene products. A gene ID may also be used if the cited reference provides enough information to determine which gene ID should be used, but not enough to establish which protein ID is correct.

'GO:GO_id' is used only when the evidence code is IC, and refers to the GO term(s) used as the basis of a curator inference. In these cases the entry in the 'Reference' column will be that used to assign the GO term(s) from which the IC inference is dervied. The **With/From** is mandatory for evidence code IC.

The ID used in the **With/From** field should be an identifier for an individual entry in a database (such as a sequence ID, gene ID, GO ID, etc.). 

#### Aspect (column 9)
Refers to the specific branch of the GO to which the **GO ID** (column 5) belongs: P (biological process), F (molecular function) or C (cellular component).

    This field is mandatory; cardinality 1.


#### DB Object Name (column 10)
Name of the annotated gene or gene product.

    This field is not mandatory, cardinality 0, 1 [white space allowed].


#### DB Object Synonym (column 11)
A gene symbol [or other text] that denotes another name by which the annotated gene or gene product might be known.  We strongly recommend that gene synonyms are included in the gene association file, as this aids the searching of GO.

    This field is not mandatory, cardinality 0, 1, >1 [white space allowed]; for cardinality >1 use a pipe to separate entries (e.g. YFL039C|ABY1|END7|actin gene).


#### DB Object Type (column 12)
A description of the type of gene product being annotated.  If a **Gene Product Form ID** (column 17) is supplied, the **DB Object Type** will refer to that entity; if no **Gene Product Form ID** is present, it will refer to the entity that the **DB Object Symbol** (column 2) is believed to produce.  **DB Object Type** will be one of the following: protein_complex; protein; transcript; ncRNA; rRNA; tRNA; snRNA; snoRNA; or any subtype of ncRNA in the [Sequence Ontology](http://www.sequenceontology.org/browser/obob.cgi).  If the precise product type is unknown, gene_product should be used.

    This field is mandatory, cardinality 1.

The object type (gene_product, transcript, protein, protein_complex, etc.) listed in the **DB Object Type** field must match the database entry identified by the **Gene Product Form ID**, or, if this is absent, the expected product of the **DB Object ID**. Note that **DB Object Type** refers to the database entry (i.e. it represents a protein, functional RNA, etc.); this column does not reflect anything about the GO term or the evidence on which the annotation is based. For example, if your database entry represents a protein-encoding gene, then protein goes in the **DB Object Type** column. The text entered in the **DB Object Name** and **DB Object Symbol** should refer to the entity in **DB Object ID**. For example, several alternative transcripts from one gene may be annotated separately, each with the same gene ID in **DB Object ID**, and specific gene product identifiers in **Gene Product Form ID**, but list the same gene symbol in the **DB Object Symbol** column.


#### Taxon (column 13)
The NCBI taxonomic identifier(s) of the annotated entity.

 This field is mandatory, cardinality 1, 2; for cardinality 2 use a pipe to separate entries (e.g. taxon:1|taxon:1000)

For cardinality 1, the ID is that of the species encoding the gene product. 

Cardinality 2 is to be used only in conjunction with terms that have the biological process term 'GO:0044419 biological process involved in interspecies interaction between organisms' or the cellular component term  'GO:0018995 host cellular component' as an ancestor. The first taxon ID should be that of the organism encoding the gene or gene product annotated, while the taxon ID after the pipe should be that of the other organism in the interaction.

See the [GO annotation conventions for more information on multi-organism terms](http://geneontology.org/page/go-annotation-conventions#interactions).


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
