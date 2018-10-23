---
title: FAQs
permalink: /docs/faq/
---

[Does the GO ID have any meaning?](/faq/does-go-id-have-any-meaning)
--------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Does the GO ID have any meaning?"></span>
FAQ tags: 

[ontology](/faq-tags/ontology)

GO IDs are unique identifiers, however, they do not encode any information about a term or its position relative to other terms in the tree. See [more about GO terms](/docs/ontology/).

[How do I use GO's Term Enrichment tool?](/faq/how-do-i-use-gos-term-enrichment-tool)
-------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I use GO's Term Enrichment tool?"></span>
FAQ tags: 

[analysis](/faq-tags/analysis)

One of the main uses of the GO is to perform enrichment analysis on gene sets. For example, given a set of genes that are up-regulated under certain conditions, an enrichment analysis will find which GO terms are over-represented (or under-represented) using annotations for that gene set.

Users can perform enrichment analyses directly from the [home page of the GOC website](http://geneontology.org/). Details about the tool, how to use it, and how to interpret the results are available from the [GO Enrichment Analysis page](/docs/go-enrichment-analysis/).

[How do I find the annotations (mappings) for Entrez, NCBI or other IDs?](/faq/how-do-i-find-annotations-mappings-entrez-ncbi-or-other-ids)
-------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I find the annotations (mappings) if I have a list of Entrez, NCBI or other IDs?"></span>
FAQ tags: 

[mappings](/faq-tags/mappings)
[analysis](/faq-tags/analysis)

To search the GO database, a list of Entrez IDs, NCBI IDs, etc. needs to be converted to UniProtKB or model organism database IDs.

UniProt and the [Protein Information Resource (PIR)](https://pir.georgetown.edu/pirwww/index.shtml){:target="blank"} have similar ID mapping tools to help with the conversion:

-   <http://www.uniprot.org/uploadlists/>
-   <http://pir.georgetown.edu/pirwww/search/idmapping.shtml>

GO annotations from QuickGO can be filtered for many parameters and provide mappings to several IDs, e.g NCBI or Ensembl gene IDs: <http://www.ebi.ac.uk/QuickGO/GAnnotation>

[How can I calculate the "level" of a GO term?](/faq/how-can-i-calculate-level-go-term)
---------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How can I calculate the &quot;level&quot; of a GO term?"></span>
FAQ tags: 

[ontology](/faq-tags/ontology)

GO terms do not occupy strict fixed levels in the hierarchy. Because GO is structured as a graph, terms would appear at different 'levels' if different paths were followed through the graph. This is especially true if one mixes the different relations used to connect terms. 

A more informative metric would be the information content of the node based on annotations. See, for example, the work of [Alterovitz et al.](http://nar.oxfordjournals.org/content/35/suppl_1/D322.abstract){:target="blank"}.

[What is an OWL file?](/faq/what-owl-file)
------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is an OWL file?"></span>
FAQ tags: 

[format](/faq-tags/format)

[software](/faq-tags/software)

OWL is the acronym for Web Ontology Language, a standard produced by the W3C. GO in OWL is based on a translation from OBO to OWL and is available for download [here](/docs/download-ontology/). OWL files can be opened in an editing tool such as [Protege](http://protege.stanford.edu/){:target="blank"}.

[What is the best way to obtain the GO annotations for a list of UniProt Accession Numbers in batch?](/faq/what-best-way-obtain-go-annotations-list-uniprot-accession-numbers-batch)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is the best way to obtain the GO annotations for a list of UniProt accessions?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

[database](/faq-tags/database)

[downloads](/faq-tags/downloads)

With UniProt accession numbers, you can obtain all GO annotations by parsing a GOA gene association file, which are provided in a simple tab-delimited format. These files are available from the [GOA FTP site](ftp://ftp.ebi.ac.uk/pub/databases/GO/goa/).

The GOA project offers users a number of different files; for example:

-   [all UniProtKB proteins with GO annotation](ftp://ftp.ebi.ac.uk/pub/databases/GO/goa/UNIPROT/gene_association.go_uniprot.gz)
-   [human proteins](ftp://ftp.ebi.ac.uk/pub/databases/GO/goa/HUMAN/gene_association.goa_human.gz)
-   if you were only interested in proteins from a particular species, we also provide non-redundant, species-specific files for human, mouse, rat, zebrafish, chicken, cow and Arabidopsis proteins (these files are created using the International Protein Index (IPI) - which provides a top level guide to the main databases that describe the proteomes of higher eukaryotic organisms)

Further information on the content and format of our gene association files can be found in the [ReadMe](http://www.ebi.ac.uk/GOA/goaHelp.html){:target="blank"}.

Please contact [GOA help](mailto:goa@ebi.ac.uk) for further assistance.

[How do I map a set of annotations to high level GO terms (GO slim)?](/faq/how-do-i-map-set-annotations-high-level-go-terms-go-slim)
------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I  map a set of gene products or annotations to high level GO terms (GO slim)?"></span>
FAQ tags: 

[analysis](/faq-tags/analysis)

[annotation](/faq-tags/annotation)

[ontology](/faq-tags/ontology)

[software](/faq-tags/software)

[go_slim](/faq-tags/go_slim)

* One method is to use [GO Term Mapper](https://go.princeton.edu/cgi-bin/GOTermMapper){:target="blank"}.  Choose the aspect (Molecular Function, Biological Process, or Cellular Component) and indicate if you want to map to a generic slim or one curated for your organism (for example, the *S. cerevisiae* slim omits terms applicable only to plants or bacteria).

* In order to map your annotations to a GO slim, use the [Map2Slim](https://github.com/owlcollab/owltools/wiki/Map2Slim){:target="blank"} option in OWLTools. Given a GO slim file, and a current ontology (in one or more files), the Map2Slim script will map a gene association file (containing annotations to the full GO) to the terms in the GO slim. This script is an option of OWLTools, and it can be used to either create a new gene association file, which contains the most pertinent GO slim accessions, or in count-mode, in which case it will give distinct gene product counts for each slim term.

Background information and details on how to download, install, and implement OWLTools, as well as instructions on how to run the Map2Slim script are available from the OWLTools Wiki at <https://github.com/owlcollab/owltools/wiki/Map2Slim>.

Read more or download the [GO slims here](/docs/go-subset-guide/).

[What is OBO file format?](/faq/what-obo-file-format)
-----------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is OBO file format?"></span>
FAQ tags: 

[format](/faq-tags/format)

[software](/faq-tags/software)

The OBO file format is one of the formats that the Gene Ontology is made available in. The most recent version is [OBO 1.4](http://owlcollab.github.io/oboformat/doc/obo-syntax.html){:target="blank"}. The OBO format is designed to be more human readable than XML based formats. GO can be accessed in this format [here](/docs/download-ontology/).

[What are the advantages and disadvantages of manual annotation?](/faq/what-are-advantages-and-disadvantages-manual-annotation)
-------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What are the advantages and disadvantages of manual annotation?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

The most reliable annotations are those made manually by database curators based on primary and occasionally on review literature. Manual annotations usually cite experimental evidence that provides strong support for the association of a GO term with a gene product, and can be done at a very detailed level. 
The chief disadvantage of manual annotation is that it is labor-intensive, requiring a lot of time and effort from trained biologists.

[How do I annotate a novel genome with GO annotations?](/faq/how-do-i-annotate-de-novo-assembled-transcriptome-against-go-database)
----------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I annotate a de novo assembled transcriptome against the GO database?"></span>
FAQ tags: 

[analysis](/faq-tags/analysis)

[annotation](/faq-tags/annotation)

[database](/faq-tags/database)

[third-party tools](/faq-tags/third-party-tools)

Currently, GO recommends groups submit their transcriptomes to [NCBI](https://www.ncbi.nlm.nih.gov/).  These submissions will reach [UniProt](https://www.uniprot.org/){:target="blank"}, where [InterPro2GO](https://www.ebi.ac.uk/GOA/InterPro2GO){:target="blank"} automatically creates GO annotations.  These annotations, made with the IEA evidence codes ([Inferred from Electronic Annotation](guide-go-evidence-codes.md
)), will available in a future GO release.

GO does not recommend groups create their own IEAs with internal tools due to reproducability and accuracy concerns.

[How do I browse the GO?](/faq/how-do-i-browse-go)
--------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I browse the GO?"></span>
FAQ tags: 

[amigo](/faq-tags/amigo)

[general](/faq-tags/general)

+ The GO Consortium has developed [AmiGO](http://amigo.geneontology.org){:target="blank"} for searching and browsing the Gene Ontology and the gene products that member databases have annotated using GO terms. The quick search field autocompletes gene products and GO Terms.  Choosing an auto-completed choice from the drop-down will return the summary page for that gene product or term. + + + Alternatively terms can be entered by free text and the user will be allowed to choose whether the search will return genes, terms or annotations. For more information on using AmiGO, see the [AmiGO help](http://wiki.geneontology.org/index.php/AmiGO_2_Manual){:target="blank"} documentation.

Learn more about Retrieving GO Data Using AmiGO, API, Files, and Tools from [our chapter in the Gene Ontology Handbook](https://link.springer.com/protocol/10.1007%2F978-1-4939-3743-1_11){:target="blank"}.

[How can I do term enrichment analysis for a species that is not present in the list from AmiGO?](/faq/how-can-i-do-term-enrichment-analysis-species-not-present-list-amigo)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How can I do term enrichment analysis for a species that is not present in the list from AmiGO?"></span>
FAQ tags: 

[amigo](/faq-tags/amigo)

[analysis](/faq-tags/analysis)

[annotation](/faq-tags/annotation)

[software](/faq-tags/software)


PANTHER, which supports the backend of the GO enrichment, provides the list of the species found in the left side of GO website. Besides the 110+ genomes listed there, PANTHER supports another 800+ genomes from the reference proteome project for users to generate GO annotations (ftp://ftp.pantherdb.org/generic_mapping/). 

If your organism is not one of the nearly 1000 genomes supported in PANTHER, there are two options:

* The first option is to contact the reference proteome project (https://www.ebi.ac.uk/reference_proteomes) and work with them to incorporate the genome in their project. Once that is done, you can use the regular process to generate the GO annotation file. 

* The second option is to score your genomes against the PANTHER HMM library. Read our Nature protocol paper (https://www.nature.com/articles/nprot.2013.092), and find the details in Box 2 of the paper.


[How can I programmatically get a list of GO terms associated with a gene identifier?](/faq/how-can-i-programmatically-get-list-go-terms-associated-gene-identifier)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How can I programmatically get a list of GO terms associated with a gene identifier?"></span>
FAQ tags: 

[analysis](/faq-tags/analysis)

[annotation](/faq-tags/annotation)

[ontology](/faq-tags/ontology)

[third-party tools](/faq-tags/third-party-tools)

**Need an answer- Chris?

[How do I become a member of the GO Consortium?](/faq/how-do-i-become-member-go-consortium)
-------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I become a member of the GO Consortium?"></span>
FAQ tags: 

[consortium](/faq-tags/consortium)

The most important criterion for GO Consortium membership is that the members contribute something to the collection of resources that we make available to the public (almost all members contribute annotations; several contribute to the ontologies; a few contribute software). The scientists involved in working with GO in these member groups communicate via the GO mailing lists and [GitHub](https://github.com/geneontology/){:target="_blank"} to discuss development issues in the ontologies. If you represent a database that wishes to join the GO Consortium please [contact the GOC](http://help.geneontology.org/). 

Anyone with a more general interest in the GO may join the gofriends@geneontology.org mailing list or subscribe to the [Twitter feed](https://twitter.com/news4go){:target="_blank"} (@news4go) to receive updates about the GO.

[How do I cite the GO?](/faq/how-do-i-cite-go-0)
------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I cite the GO?"></span>
FAQ tags: 

[general](/faq-tags/general)

Citation information for the Gene Ontology can be found on the [GO Citation Policy](/page/go-citation-policy) page.

[What is the minimum information to include in a functional analysis paper?](/faq/what-minimum-information-include-functional-analysis-paper)
---------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is the minimum information to include in a functional analysis paper?"></span>
FAQ tags: 

[analysis](/faq-tags/analysis)

[general](/faq-tags/general)

Most journals require authors to submit high-throughput data to public repository as a prerequisite for publication. As part of this process, the methods used to analyse data need to be reported in detail; this applies to both statistical and functional analysis. For papers describing enrichment analysis using GO, this means that the methods section should include the following information, to ensure the analysis is reproducible (an important criteria for reviewers' approval):
1.  What analysis tool was used and what version
2.  What statistical analysis method was applied, and what correction factors were applied if any
3.  Date/release version of both the GO ontology file and the GO annotation file used
4.  Background genome/proteome/dataset used in the analysis, including strain if applicable
5.  Whether any enriched terms were excluded from the results due to low numbers of query genes associated with the term (e.g., if you only included GO terms in the results which have more than 3 query genes)
6.  [Please cite the appropriate GO papers](/docs/go-citation-policy/)

The supplemental data files should include:
1.  List of the IDs used and the IDs which were rejected by the analysis tool, if any
2.  Full list of enriched terms

When undertaking the functional analysis and interpreting the results, consider:
1.  Is the number of genes analysed statistically valid? Or is the number too small to observe enrichment, or too large for the enrichment to be meaningful. (E.g., for a microarray experiment with ~25,000 interrogated transcripts, it would be difficult to observe enrichment when analysing less than 150 IDs; if the list were longer than 3,000 IDs, clearer results would require further filtering, e.g. based on significance threshold or fold change. This is only a rough guide.)
2.  Consider using more than one functional analysis tool, as well as fine-tuning the parameters used. You may also wish to look at overlap between results from different approaches.
3.  Think about the biology. E.g., if you need/wish to make a choice among enriched terms to show in a summary table, use descriptive GO terms. Do not only pick terms you're particularly interested in, and consider that very broad or generic terms, such as 'metabolic process', can be uninformative.

[How do I get the term names for my list of GO ids?](/faq/how-do-i-get-term-names-my-list-go-ids)
-------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I get the term names for my list of GO ids?"></span>
FAQ tags: 

[mappings](/faq-tags/mappings)

[ontology](/faq-tags/ontology)

You can use the YeastMine Analyze tool available at SGD to retrieve the GO term names for each ID. Here is how-
1.  Go to the Analyze tool on YeastMine - <http://yeastmine.yeastgenome.org/yeastmine/bag.do>
2.  In the Select Type pull down, select `GO Term`
3.  Enter your GO ids or upload a list in the full format (GO:0016020, GO:0016301...)
4.  Click on `Create List`. The tool offers several options to download the list.

[Where can I view or download the complete sets of GO annotations?](/faq/where-can-i-view-or-download-complete-sets-go-annotations)
-----------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Where can I view or download the complete sets of GO annotations?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

[general](/faq-tags/general)

Annotations can be [downloaded here](http://current.geneontology.org/products/pages/downloads.html).  

[What is a GAF file?](/faq/what-gaf-file)
-----------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is a GAF file?"></span>
FAQ tags: 

[format](/faq-tags/format)

[software](/faq-tags/software)

A GAF file is a GO annotation file containing annotations made to the GO by a contributing resource such as FlyBase or Pombase. See more information [here](/docs/go-annotation-file-gaf-format-21/).

[Can a single gene product be annotated with more than one GO term?](/faq/can-single-gene-product-be-annotated-more-one-go-term)
--------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Can a single gene product be annotated with more than one GO term?"></span>
FAQ tags: 

[analysis](/faq-tags/analysis)

[annotation](/faq-tags/annotation)

[ontology](/faq-tags/ontology)

### Yes!

It is **possible and usually expected** for a single gene/gene product to be associated with more than one GO term. The fact that you may have found that there are two or more different GO terms associated with a single gene/gene product in your results should not be a cause for concern.

The Gene Ontology allows users to describe a gene/gene product in detail, considering three main aspects: its molecular function, the biological process in which it participates, and its cellular location:

    For example, this gene product from zebrafish has numerous GO terms associated with it: <http://amigo.geneontology.org/amigo/gene_product/ZFIN:ZDB-GENE-990415-121>
    -   In this example, each term describes details about this gene's molecular function, localization in the cell, or its involvement in certain biological processes. One GO term explains that this gene product carries out the molecular function of selectively interacting with DNA (DNA binding) – (<http://amigo.geneontology.org/amigo/term/GO:0003677>), while a different GO term explains that this gene product is found in the nucleus of the cell (<http://amigo.geneontology.org/amigo/term/GO:0005634>).

Trying to write one single term that describes in detail everything about a gene/gene product in a single statement would require the existence of as many terms as genes there are - for all species - in the planet. This would be very unpractical and not easily scalable. Instead, the use of ontologies help us organize information in a way that allows researchers to use the same term to describe a characteristic that is shared by more than one gene product (e.g. all the genes involved in the process 'translation'), and more than one term to describe all the characteristics of each gene product, as in the example above. **This is a reason why you would see more than one GO term associated to a single gene / gene product**.

[What is a 'gene product'?](/faq/what-gene-product)
---------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is a 'gene product'?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

GO uses the term 'gene product' to refer collectively to genes and any entities encoded by the gene, e.g. proteins and functional RNAs.


[What are the advantages and disadvantages of automatic annotation?](/faq/what-are-advantages-and-disadvantages-automatic-annotation)
-------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What are the advantages and disadvantages of automatic annotation?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

One advantage of automatic annotation is speed: wholly or partially automated methods facilitate the annotation of much larger sets of known or predicted gene products than can be produced manually. Automated annotation methods generally yields more broad (less detailed) annotations compared to manual annotation.

[I want to use GO, but I don't know where to begin](/faq/i-want-use-go-i-dont-know-where-begin)
-----------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="I want to use GO, but I don't know where to begin"></span>
FAQ tags: 

[general](/faq-tags/general)

There are a number of possibilities for how researchers can make use the GO.

The Gene Ontology website (<http://geneontology.org/>) is a very good place to begin learning about our resources, how they are produced, and how we maintain them. It also illustrates how the research community most commonly makes use of these resources and how they can contribute. Exploring the items under the **"Documentation"** menu will provide you with a very informative overview.

[What are all the possible uses of GO?](/faq/what-are-all-possible-uses-go)
---------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What are all the possible uses of GO?"></span>
FAQ tags: 

[general](/faq-tags/general)

It would be impossible to list all the potential applications of GO, but applications for which GO has already been used include the following:

-   integrating proteomic information from different organisms;
-   assigning functions to protein domains;
-   finding functional similarities in genes that are overexpressed or underexpressed in diseases and as we age;
-   predicting the likelihood that a particular gene is involved in diseases that haven't yet been mapped to specific genes;
-   analysing groups of genes that are co-expressed during development;
-   developing automated ways of deriving information about gene function from the literature;
-   verifying models of genetic, metabolic and product interaction networks.

For references to these and other studies that have used GO, see the [GO Publications](/page/publications).

[Why do we need GO?](/faq/why-do-we-need-go)
--------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Why do we need GO?"></span>
FAQ tags: 

[general](/faq-tags/general)

To ask meaningful questions, biologists often need to retrieve and analyse data from disparate sources. For example, if you were searching for new targets for antibiotics, you might want to find all the gene products that are involved in bacterial protein synthesis, but that have significantly different sequences or structures from those in humans. But if one database describes these molecules as being involved in 'translation', whereas another uses the phrase 'protein synthesis', it will be difficult for you - and even harder for a computer - to find functionally equivalent terms.

The Gene Ontology (GO) project is a collaborative effort to address the need for consistent descriptions of gene products in different databases. The GO collaborators are developing three ontologies - a word used by computer scientists to mean 'specifications of a relational vocabulary' - that describe biological processes, cellular components and molecular functions in a species-independent manner.

Ontologies provide a vocabulary for representing and communicating knowledge about a topic, and a set of relationships that hold among the terms of the vocabulary. They can be structurally very complex, or relatively simple. Most importantly, ontologies capture domain knowledge in a way that can easily be dealt with by a computer . Because the terms in an ontology and the relationships between the terms are carefully defined, the use of ontologies facilitates making standard annotations, improves computational queries, and can support the construction of inference statements from the information at hand.

Genomic sequencing projects and microarray experiments alike produce electronically-generated data flows that require computer accessible systems to work with the information. As systems that make domain knowledge available to both humans and computers, bio-ontologies such as GO and the many other bio-ontologies being created (see the OBO web page for some examples) for are essential to the process of extracting biological insight from enormous sets of data.

[Can I download the ontologies as an Excel spreadsheet?](/faq/can-i-download-ontologies-excel-spreadsheet)
----------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Can I download the ontologies as an Excel spreadsheet?"></span>
FAQ tags: 

[ontology](/faq-tags/ontology)

It is not possible to download the ontologies as a tabulated spreadsheet. The complex graph structure of GO, where terms can have one or more parent terms, makes it impractical to be rendered as a spreadsheet. It would probably also be too big for software packages such as Excel to cope with.

[What is the GO?](/faq/what-go)
-------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is the GO?"></span>
FAQ tags: 

[general](/faq-tags/general)

The Gene Ontology (GO) project is a collaborative effort to address the need for consistent descriptions of gene products in different databases. The GO collaborators are developing three structured, controlled vocabularies (ontologies) that describe gene products in terms of their associated biological processes, cellular components and molecular functions in a species-independent manner. There are three separate aspects to this effort: first, we write and maintain the ontologies themselves; second, we make cross-links between the ontologies and the genes and gene products in the collaborating databases; and third, we develop tools that facilitate the creation, maintenance and use of ontologies.

The use of GO terms by several collaborating databases facilitates uniform queries across them. The controlled vocabularies are structured so that you can query them at different levels: for example, you can use GO to find all the gene products in the mouse genome that are involved in signal transduction, or you can zoom in on all the receptor tyrosine kinases. This structure also allows annotators to assign properties to gene products at different levels, depending on how much is known about a gene product.

[What data does AmiGO use? Are there IEAs? If so, which ones?](/faq/what-data-does-amigo-use-are-there-ieas-if-so-which-ones)
-----------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What data does AmiGO use? Are there IEAs? If so, which ones?"></span>
FAQ tags: 

[amigo](/faq-tags/amigo)

AmiGO is reloaded approximately once a week. The files currently loaded into the public AmiGO instance can always be seen [here](http://amigo.geneontology.org/amigo/load_details).

AmiGO does currently load full Inferred from Electronic Annotations (IEAs) from UniProt, although this is [in development](https://github.com/geneontology/amigo/issues/48). For a more full discussion of the data loaded into AmiGO, please see [the FAQ](http://geneontology.org/faq/what-are-differences-between-data-available-amigo-and-those-quickgo).

[What is annotation?](/faq/what-annotation)
-------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is annotation?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

What does it mean to do GO annotation of genes or proteins? Terms from the Gene Ontology are applied in the annotation of [gene products](http://geneontology.org/faq/what-gene-product) or protein complexes in biological databases. GO annotations are associations made between gene products or protein complexes and the GO terms that describe them.  An annotation also includes an evidence code and a reference that supports the gene product/term association.

[How is the GO used in genome analysis?](/faq/how-go-used-genome-analysis)
--------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How is the GO used in genome analysis?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

[general](/faq-tags/general)

*Functional annotation of newly sequenced genomes*: Genome and full-length cDNA sequence projects often include computational (putative) assignments of molecular function based on sequence similarity to annotated genes or sequences. A common tactic now is to use a computational approach to establish some threshold sequence similarity to a SWISS-PROT sequence. Then the GO associations to the SWISS-PROT sequence can be retrieved and associated with the gene model. Under the GO guidelines, the evidence code for this event would be 'inferred from electronic annotation' (IEA).

*Functional groupings of gene products*: One aspect of the use of the GO for annotation of large data sets is the ability to group gene products to some high level term. For example, while gene products may be precisely annotated as having role in a particular function in carbohydrate metabolism (i.e., glucose catabolism), in the summary documentation of the data set, all gene products functioning in carbohydrate metabolism could be grouped together as being involved in the more general phenomena 'carbohydrate metabolism'. Various sets of GO terms have been used to summarize experimental data sets in this way. The expectation is that published sets of high-level GO terms used in genome annotations and publications will be archived at the GO site. Some of these 'GO slims' are already available.

[How do I install AmiGO locally?](/faq/how-do-i-install-amigo-locally)
----------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I install AmiGO locally?"></span>
FAQ tags: 

[amigo](/faq-tags/amigo)

[software](/faq-tags/software)

Full documentation for downloading and installing AmiGO is available [here](http://wiki.geneontology.org/index.php/AmiGO_2_Manual:_Installation_(2.4.x)).

[What is the best way to link into AmiGO?](/faq/what-best-way-link-amigo)
-------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is the best way to link into AmiGO?"></span>
FAQ tags: 

[amigo](/faq-tags/amigo)

[software](/faq-tags/software)

Please refer to the [AmiGO 2 wiki manual](http://wiki.geneontology.org/index.php/AmiGO_2_Manual:_Linking).

[Where have the 'unknown' terms gone?](/faq/where-have-unknown-terms-gone)
--------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Where have the 'unknown' terms gone?"></span>
FAQ tags: 

[ontology](/faq-tags/ontology)

Good principles of ontological design state that terms should represent biological entities that actually exist, e.g., functional activities that are catalyzed by enzymes, biological processes that are carried out in cells, specific locations or complexes in cells, etc. To adhere to these principles the Gene Ontology Consortium has removed the terms, "biological process unknown" (GO:0000004), "molecular function unknown" (GO:0005554) and "cellular component unknown" (GO:0008372) from the ontology. The "unknown" terms violated this principle of sound ontological design because they did not represent actual biological entities but instead represented annotation status. Annotations to "unknown" terms distinguished between genes that were curated when no information was available and genes that were not yet curated (i.e., not annotated). 

Annotation status is now indicated by annotating to the root nodes, i.e. "biological\_process" (GO:0008150), "molecular\_function" (GO:0003674), or "cellular\_component" (GO:0005575). These annotations continue to signify that a given gene product is expected to have a molecular function, biological process, or cellular component, but that no information was available as of the date of annotation. Adhering to principles of correct ontology design should allow GO users to take advantage of existing tools and reasoning methods developed by the ontological community.

[What is an evidence code?](/faq/what-evidence-code)
----------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is an evidence code?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

Every annotation must be attributed to a source, which may be a literature reference, another database or a computational analysis. The annotation must indicate what kind of evidence is found in the cited source to support the association between the gene product and the GO term. A simple controlled vocabulary is used to record evidence; and the evidence codes are simply the three-letter codes used to signify the type of evidence cited. More information on the meaning and use of the evidence codes can be found in the [GO evidence codes documentation](/page/guide-go-evidence-codes).

[How are gene products associated with GO terms?](/faq/how-are-gene-products-associated-go-terms)
-------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How are gene products associated with GO terms?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

A gene product can be annotated to zero or more nodes of each ontology, at any level within each ontology; annotation of a gene product to one ontology is independent of its annotation to other ontologies. Annotations should reflect the normal function, process, or localization (component) of the gene product; an activity or location observed only in a mutant or disease state is therefore not usually included. The member databases of the GO Consortium use manual and automated methods to annotate genes or gene products using GO terms. Both manual and automated annotations are made according to two principles: first, every annotation must be attributed to a source, which may be a literature reference, another database or a computational analysis; second, the annotation must indicate what kind of evidence is found in the cited source to support the association between the gene product and the GO term. GO uses a simple controlled vocabulary to indicate the type of evidence found in the cited reference to support the annotation.

[I have a question about gene or protein nomenclature](/faq/i-have-question-about-gene-or-protein-nomenclature)
---------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="I have a question about gene or protein nomenclature"></span>
FAQ tags: 

[general](/faq-tags/general)

The GO Consortium is not involved in naming genes at all, in any organism. The GO vocabularies describe attributes of gene products; they are not collections of gene names or protein names.

Gene names are generally standardized within an organism but not necessarily between organisms (with some notable exceptions, such as the ongoing effort to make human and mouse gene names consistent). We suggest that you direct your query to the database or nomenclature committee for your organism. For example, human gene names are maintained by the HUGO Gene Nomenclature Committee (HGNC), mouse gene names by MGI, etc.

[How do I create a user defined "GO slim"?](/faq/how-do-i-create-user-defined-go-slim)
--------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I create a user defined &quot;GO slim&quot;?"></span>
FAQ tags: 

[other](/faq-tags/other)

GO hosts a number of predefined Slim sets, a generic GO slim, and a number of slims tailored to give good annotation coverage for some well studied/annotated model species. The available GO slimming tools also provide an option to upload your own term set. For most applications you usually need to adjust the terms in the slim to represent your results (i.e to reduce the number of terms, or to replace terms in regions of special interest with more specific children). The generic GO slims or organism specific slims are a good starting point to create your own GO slim. When creating a slim you should still ensure that it covers as many annotated genes in your set as possible. To enable interpretation of your results you should also report how many genes are annotated but not in your slim, and how many genes do not slim (i.e map only to the root node and are therefore 'unknown').

[Can a gene or gene product be annotated to more than one term from an ontology?](/faq/can-gene-or-gene-product-be-annotated-more-one-term-ontology)
----------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Can a gene or gene product be annotated to more than one term from an ontology?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

Yes, a gene product can be annotated to zero or more nodes of each ontology, at any level within each ontology.
See [the GO annotation guide](http://geneontology.org/page/go-annotation-policies) for more information.

[How do I find manually annotated gene products only, i.e. how do I sort by evidence code?](/faq/how-do-i-find-manually-annotated-gene-products-only-ie-how-do-i-sort-evidence-code)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content=" How do I find manually annotated gene products only, i.e. how do I sort by evidence code?"></span>
FAQ tags: 

[amigo](/faq-tags/amigo)

Search results can be filtered using the filter menu on the left-hand side of the results page of an AmiGO search. Using the drop-down menu a variety of evidence codes or evidence code combinations can be added or removed to filter the set.

[Where can I find software to allow me to browse the GO terms and annotations?](/faq/where-can-i-find-software-allow-me-browse-go-terms-and-annotations)
--------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Where can I find software to allow me to browse the GO terms and annotations?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

[general](/faq-tags/general)

[software](/faq-tags/software)

GO terms and annotations are browsed using various tools. The GO Consortium supports both [AmiGO](http://amigo.geneontology.org/amigo) and [QuickGO](http://www.ebi.ac.uk/QuickGO/).

[AmiGO](http://amigo.geneontology.org) was developed for searching and browsing the Gene Ontology and the gene products that member databases have annotated using GO terms. Entering a search term into the quick search menu and choosing an auto-completed choice from the drop-down will return the summary page for that gene product or term. Alternatively terms can be entered by free text and the user will be allowed to choose whether the search will return genes, terms or annotations. For more information on using AmiGO, see the [AmiGO help](http://wiki.geneontology.org/index.php/AmiGO_2_Manual) documentation.

Learn more about Retrieving GO Data Using AmiGO, QuickGO, API, Files, and Tools from [our chapter in the Gene Ontology Handbook](https://link.springer.com/protocol/10.1007%2F978-1-4939-3743-1_11).

[How can I contribute to GO?](/faq/how-can-i-contribute-go)
-----------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How can I contribute to GO?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

[general](/faq-tags/general)

[ontology](/faq-tags/ontology)

[participation](/faq-tags/participation)

[submission](/faq-tags/submission)

**We welcome your contributions!**

The GO project is constantly evolving, and we welcome feedback from all users. Research groups may contribute to the GOC by either providing suggestions for updating the ontology (e.g. requests for new terms) or by providing annotations, that is, associations between genes or gene products and ontology terms. Suggested edits are reviewed by the ontology editors and implemented where appropriate.

To learn more about the best approach to contributing GO annotations or sharing your suggestions for updates to the ontology please visit our documentation on [Contributing to GO](http://geneontology.org/page/contributing-go).

Please be sure to [contact the GOC](http://geneontology.org/form/contact-go) before carrying out any annotation work you intend to submit; this will ensure that GOC mentors and trainers can be of assistance in producing data sets in agreement with the GOC annotation policies and format requirements.

[What gene or protein IDs should I use?](/faq/what-gene-or-protein-ids-should-i-use)
------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What gene or protein IDs should I use?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

[format](/faq-tags/format)

The [list of authoritative database groups](/page/authoritative-database-groups) for certain species lists the database groups who assume sole responsibility for collecting and submitting annotations for one or more species. If you can convert your IDs into the IDs used by that database group, you will be able to find the data you are looking for far more quickly and efficiently.

We maintain a list of [suggested resources](http://geneontology.org/page/download-mappings) for mapping gene and protein IDs.


[What are the recommended data access policies for your services?](/faq/what-are-recommended-data-access-policies-your-services)
--------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What are the recommended data access policies for your services?"></span>
FAQ tags: 

[amigo](/faq-tags/amigo)

[database](/faq-tags/database)

[software](/faq-tags/software)

AmiGO and the GO relational database servers are a shared resource and thus we require data mining to be performed in a manner that allows others to utilize this resource at the same time. Any activity that mines the GO database or uses AmiGO must be controlled so that only one request is made at a time. If this is not sufficient, you may download and install the database locally. You can also retrieve all the source files that define the data within the database. More details on the database, including downloads and installation, can be found in the GO [database guide](/page/lead-database-guide).

For more information please contact the [GO helpdesk](/form/contact-go).

[Does the Term Enrichment tool have a limit on the number genes in the input file?](/faq/does-term-enrichment-tool-have-limit-number-genes-input-file)
------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Does the Term Enrichment tool have a limit on the number genes in the input file?"></span>
FAQ tags: 

[analysis](/faq-tags/analysis)

[errors and bugs](/faq-tags/errors-and-bugs)

Yes, there is a limit.

We're aware that our Term Enrichment tool on the homepage of the Gene Ontology Website cannot handle very large gene lists. The root of the problem is that at a certain number, the input (gene list) is too large for the form; however there is not an exact number at which it fails. One way to solve the problem, should you come across this situation, is to reduce the size of the input file by reducing the number of genes.

Alternatively, annotators can use the PANTHER Term Enrichment tool directly, without AmiGO as an intermediary; this would still be the exact same analysis with the GO data. To perform term enrichment analysis directly from the PANTHER website, visit [http://pantherdb.org](http://pantherdb.org/). Once you upload or paste your gene list, select the 'Statistical overrepresentation test' option (in Step3) to perform the term enrichment.

Although we would like to correct this as quickly as possible, we may not be able to immediately address the matter. You can keep track of our progress on this particular issue following this entry in our bug tracker on GitHub: <https://github.com/geneontology/amigo/issues/198>

We will try to have a fix prepared and put into production as soon as possible.

[What is the status of the GO MySQL database?](/faq/what-status-go-mysql-database)
----------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is the status of the GO MySQL database?"></span>
FAQ tags: 

[database](/faq-tags/database)

[software](/faq-tags/software)

While the GO MySQL database is currently considered to be in "legacy" mode, meaning that there will likely not be any new developments on it, it is a widely used and convenient resource for many types of queries. More information about it can be found in the [GO MySQL Database Guide](/page/go-mysql-database-guide).

[What am I allowed to do with the data?](/faq/what-am-i-allowed-do-data)
------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What am I allowed to do with the data?"></span>
FAQ tags: 

[general](/faq-tags/general)

The use and license of all GO data, software, and materials are covered on the [Use and license](/page/use-and-license) page.

[What is beyond the scope of the GO project?](/faq/what-beyond-scope-go-project)
--------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is beyond the scope of the GO project?"></span>
FAQ tags: 

[general](/faq-tags/general)

[ontology](/faq-tags/ontology)

Almost as important as understanding the scope of the GO project is understanding what the GO project is not. The most common misapprehensions are (1) that the GO is a system for naming genes and proteins and (2) that the GO attempts to describe all of biology. The GO neither names genes or gene products, nor does it attempt to provide structured vocabularies beyond its three domains: molecular function, biological process and cellular component. GO is not a nomenclature for genes or gene products. The vocabularies describe molecular phenomena (e.g. programmed cell death), not biological objects (e.g. proteins or genes). Sharing gene product names would entail tracking evolutionary histories and reflecting both orthologous and paralogous relationships between gene products. Different research communities have different naming conventions. Different organisms have different numbers of members in gene families. The GO project focuses on the development of vocabularies to describe attributes of biological objects, not on the naming of the objects themselves. This point is particularly important to understand because many genes and gene products are named for their function.

[Where can I find the number of terms in each of the ontologies?](/faq/where-can-i-find-number-terms-each-ontologies)
---------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Where can I find the number of terms in each of the ontologies?"></span>
FAQ tags: 

[amigo](/faq-tags/amigo)

[ontology](/faq-tags/ontology)

You can find the number of terms on each of the ontologies by going to [AmiGO](http://amigo.geneontology.org/):

Under the 'Advanced Search' section in the middle of the page, use the drop-down menu to choose "Ontology". You don't need to type anything on the 'Quick search' box.
This action will send you to the ['Information about Ontology search'](http://amigo.geneontology.org/amigo/search/ontology) page. There, open the 'Ontology source' filter menu on the left. You will see that as of October-27-2015 the number of terms on per ontology were:
-   28,912 Biological process
-   10,900 Molecular Function
-   4,016 Celular component

If you need a reference for this information, you can cite the use of AmiGO according to information found at [http://geneontology.org/page/go-citation-policy\#GO\_Data](). You can find additional general information about these and other topics on the GOC's 2015 publication in Oxford's NAR at [http://nar.oxfordjournals.org/content/43/D1/D1049]()

[How often does automatic annotation give results that are consistent with manual annotation?](/faq/how-often-does-automatic-annotation-give-results-are-consistent-manual-annotation)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How often does automatic annotation give results that are consistent with manual annotation?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

I
n general, electronic annotations are rarely incorrect, as they are annotations to very high-level GO terms. For example, the GOA group at EBI reports:

Usually manual annotation simply provides deeper-level terms in GO. In 93% of cases GOA's electronic annotation is in the same GO lineage as the manual annotation. Some users have used our manual annotation to assess the quality of their automatic GO annotation techniques. They have found a few manual annotation errors by Proteome Inc. but no errors (so far) of manual annotation by Swiss-Prot staff have been reported to GOA. A few InterPro2GO errors have been reported but not very many. So, in general, our electronic techniques are very accurate, and are sometimes based on manual annotation. For example, Swiss-Prot keywords are usually manually annotated to Swiss-Prot entries; by using a mapping of Swiss-Prot keywords to GO, GOA inherits the high quality of Swiss-Prot manual annotation.

Text from [Clark, et al., 2005](http://www.ncbi.nlm.nih.gov/pubmed/16010001?dopt=Abstract)

"The quality of electronic annotation has recently been assessed in some detail (Camon et al., 2005). This research found that in the worst case scenario, the generation of electronic annotations using the interpro2go, spkw2go, and ec2go mapping files precisely predicted the correct GO term 60% to 70% of the time, with the remainder of the predictions being to insufficiently specific GO terms. The high precision was found to be due to the basing of electronic annotations on manually curated mapping files. Curators noted that it was more important for database curation to be accurate than to have complete coverage, and the figures above demonstrate that this is the tendency with electronic annotation."

[I want to use the database files but...](/faq/i-want-use-database-files)
-------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="I want to use the database files but..."></span>
FAQ tags: 

[database](/faq-tags/database)

[software](/faq-tags/software)

The \*.txt files must be imported into a MySQL instance using mysqlimport. They are not intended to be loaded into excel or parsed using custom tools. Why are so many of the .txt files empty?

For some exports of the GO database, some tables will necessarily be empty. For example, the termdb dump by design omits any data on genes or gene associations, so the corresponding tables are mepty. MySQL requires a file be present for every table, hence there will be some tables with 0 rows in the .txt files.

[How is annotation quality controlled to ensure consistency between databases?](/faq/how-annotation-quality-controlled-ensure-consistency-between-databases)
------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How is annotation quality controlled to ensure consistency between databases?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

The accuracy of GO annotations is a high priority for all members of the GO Consortium. Each member organization is responsible for keeping its own annotations accurate and up to date, and for correcting any errors. Users can report errors to the [GO helpdesk](http://geneontology.org/form/contact-go); any comments on annotations will be forwarded to the appropriate contributing group.

The GO Consortium is also looking into possible ways to improve quality assurance further, such as manually reviewing selected annotations and developing tools to automate detection of potentially erroneous annotations.

[What criteria are used to annotate genes with GO terms?](/faq/what-criteria-are-used-annotate-genes-go-terms)
--------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What criteria are used to annotate genes with GO terms?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

A variety of criteria are used for each annotation including experimental results, sequence similarity and curator judgement.
See the [GO annotation guide](/page/go-annotation-policies) for more information.

[What is the difference between the filtered and unfiltered versions of the GOA UniProt gene associations files?](/faq/what-difference-between-filtered-and-unfiltered-versions-goa-uniprot-gene-associations-files)
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is the difference between the filtered and unfiltered versions of the GOA UniProt gene associations files?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

[downloads](/faq-tags/downloads)

The filtered version available on the GO Download's site (gene\_association.goa\_uniprot\_noiea ) does not contain annotations for those species where a different Consortium group is primarily responsible for providing GO annotations and also excludes annotations made using automated methods. For example, SGD is responsible for annotations for S. cerevisiae and GO annotations for S. cerevisiae are not part of the filtered version of the gene\_association.goa\_uniprot\_noiea file. Filtered version of the UniProt gene\_associations file is available on the GO website (<http://geneontology.org/page/download-annotations>). The unfiltered version of the file is available on GOA's FTP site- [ftp://ftp.ebi.ac.uk/pub/databases/GO/goa/UNIPROT/gene\_association.goa\_un...](ftp://ftp.ebi.ac.uk/pub/databases/GO/goa/UNIPROT/gene_association.goa_uniprot.gz)

[How do I find terms, annotations, or gene products in the database?](/faq/how-do-i-find-terms-annotations-or-gene-products-database)
-------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I find terms, annotations, or gene products in the database?"></span>
FAQ tags: 

[database](/faq-tags/database)

[software](/faq-tags/software)

We maintain a set of [examples](http://wiki.geneontology.org/index.php/Example_Queries) that cover, or can be used as a base to cover, most common queries. This is also the set used with [GOOSE](http://amigo.geneontology.org/goose).

[Who makes up the GO Consortium?](/faq/who-makes-go-consortium)
---------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Who makes up the GO Consortium?"></span>
FAQ tags: 

[consortium](/faq-tags/consortium)

Back in 1998, the GO project began as a collaboration between three model organism databases, namely Flybase (Drosophila), the Saccharomyces Genome Database (SGD), and the Mouse Genome Database (MGD). Today, the GO Consortium is formed by many databases, including several of the world's major repositories for plant, animal, and microbial genomes. Visit [this page to see a complete list of member organizations](http://geneontology.org/page/go-consortium-contributors-list) of the Gene Ontology Consortium.

[Sometimes the number of GO annotations changes significantly over a short period of time. Why?](/faq/sometimes-number-go-annotations-changes-significantly-over-short-period-time-why)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Sometimes the number of GO annotations changes significantly over a short period of time. Why?"></span>
FAQ tags: 

[general](/faq-tags/general)

[annotation](/faq-tags/annotation)

Most annotations in association files are electronically inferred (IEA). As with all types of annotations, IEAs change over time, with an overall increasing trend. However, in the specific case of IEAs, significant fluctuations in numbers may sometimes be observed over a short period of time. Nearly always, these are not due to bugs, but rather to the following reasons and/or to a combination thereof:
-   All IEA annotations that are over one year old are removed from association files. This is part of quality control procedures. Another procedure the GO started implementing in mid-2014 are taxonomic checks. A technical summary of annotation QC checks may be found here: <http://geneontology.org/page/annotation-quality-control>
-   Electronic annotations are provided to UniProt-GOA by various groups, including Ensembl, InterPro and UniProt. UniProt-GOA then includes these in their annotation files that they submit to the GO Consortium. There are numerous reasons why electronic annotations can fluctuate; e.g., InterPro may have changed a mapping that affected a large number of annotations; a mapping between a GO term and a UniProt keyword may have been added or removed; Ensembl may have changed their orthology sets; new quality checking procedures may have been introduced; a supplying group may have had a problem providing the annotations. Since electronic annotations tend to hit a large number of proteins, it is more likely to observe larger fluctuations than one would in a manual annotation set. UniProt-GOA aims to record all the known changes to the datasets they provide in the release notes here: <http://www.ebi.ac.uk/GOA/news>
-   New genome assemblies for various species are periodically released, and that may contribute to changes in gene annotations.
-   Changes are good. Our knowledge foundation is growing and increasing and information is continuing to be added based on existing, older literature.
-   Relevant paper: [Understanding how and why the Gene Ontology and its annotations evolve: the GO within UniProt.](http://www.ncbi.nlm.nih.gov/pubmed/24641996)

However, if you think that an observed change in the size of an annotation file cannot be explained by any of the above, and suspect a bug, please contact us using our [Contact Form](http://geneontology.org/form/contact-go).

[Who funds GO?](/faq/who-funds-go)
----------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Who funds GO?"></span>
FAQ tags: 

[consortium](/faq-tags/consortium)

Direct support for the Gene Ontology Consortium is provided by an R01 grant from the National Human Genome Research Institute (NHGRI) \[grant HG02273\]. Funding for the GO member organizations is detailed [here](http://geneontology.org/page/go-consortium-contributors-list).

[Why are the ontologies initially produced in OBO flat file format instead of XML?](/faq/why-are-ontologies-initially-produced-obo-flat-file-format-instead-xml)
----------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Why are the ontologies initially produced in OBO flat file format instead of XML?"></span>
FAQ tags: 

[format](/faq-tags/format)

[software](/faq-tags/software)

The ontologies are initially produced in the specially designed [OBO flat file format](http://www.geneontology.org/GO.format.obo-1_2.shtml). They are converted to XML once a month for the convenience of users who require this facility. Both formats and many others are available in the [GO downloads section](http://geneontology.org/page/downloads). We use the OBO flat file format because it is human-readable, and also because the file is much smaller without the XML tags. This means that it is much quicker and easier for the curators to handle the file on a day-to-basis.

[Can a term in one ontology have parents in one of the other two ontologies?](/faq/can-term-one-ontology-have-parents-one-other-two-ontologies)
-----------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Can a term in one ontology have parents in one of the other two ontologies?"></span>
FAQ tags: 

[ontology](/faq-tags/ontology)

Yes - there are links between molecular function, biological process, and cellular component ontologies. Note that any one term will ONLY have *is\_a* parentage up to one of the root terms.

[Which biological domains are supported by GO?](/faq/which-biological-domains-are-supported-go)
-----------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Which biological domains are supported by GO?"></span>
FAQ tags: 

[general](/faq-tags/general)

The current ontologies of the GO project are molecular function, biological process, and cellular component. The ontologies are developed to include all terms falling into these domains without consideration of whether the biological attribute is restricted to certain taxonomic groups. Therefore, biological processes that occur only in plants (e.g. photosynthesis) or mammals (e.g. lactation) are included. Other biological ontologies are discussed in the [OBO web site](http://www.obofoundry.org/).

[What is "GO slimming" ?](/faq/what-go-slimming)
------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is &quot;GO slimming&quot; ?"></span>
FAQ tags: 

[other](/faq-tags/other)

Mapping granular annotations of a set of genes to one or more high-level, broader parent terms is referred to as "GO slimming". GO slimming is commonly used to report an overview of a genome or to a set of summarize experimental results. GO hosts a number of predefined Slim sets, a generic GO slim, and a number of slims tailored to give good coverage for some well studied/annotated model species. GO slimming will only be successful if the organism of interest has a body of GO annotation in the GO database (either electronic or manual). If your organism of interest has no publicly available GO data refer to the FAQ to annotate a gene set &lt;&gt;

[What is a GPAD file?](/faq/what-gpad-file)
-------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is a GPAD file?"></span>
FAQ tags: 

[format](/faq-tags/format)

[software](/faq-tags/software)

The GPAD - Gene Product Association File Format - is an alternative means of exchanging annotations from the [Gene Association File (GAF)](http://geneontology.org/page/go-annotation-file-gaf-format-20). The GPAD format is designed to be more normalized than GAF, and is intended to work in conjunction with a separate format for exchanging gene product information. The GPAD specification is defined in detail [here](http://geneontology.org/page/gene-product-association-data-gpad-format)

[What is GO "content"?](/faq/what-go-content)
---------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is GO &quot;content&quot;?"></span>
FAQ tags: 

[ontology](/faq-tags/ontology)

GO content refers to the content of the ontologies themselves and the biology underlying it. It includes anything to do with terms and their organisation, definitions, synonyms and the relationships between terms.

[Can a term that is listed in two places in an ontology file have children in one place but not in the other?](/faq/can-term-listed-two-places-ontology-file-have-children-one-place-not-other)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Can a term that is listed in two places in an ontology file have children in one place but not in the other?"></span>
FAQ tags: 

[ontology](/faq-tags/ontology)

No - the term will always have the same children wherever, and however many times it appears.

[How do I submit annotations to GO?](/faq/how-do-i-submit-annotations-go)
-------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I submit annotations to GO?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

[participation](/faq-tags/participation)

[submission](/faq-tags/submission)

**We welcome your contributions!**

We welcome contributions to the Gene Ontology project, both in terms of annotations and for feedback and additions to the ontology.

Before making contributions, we recommend that y contact the Gene Ontology Consortium (GOC) *before* annotation work is carried out; this will ensure that GOC mentors and trainers can be of assistance in producing data sets in agreement with the GOC annotation policies and format requirements.

To learn more details, visit the page on [http://geneontology.org/page/contributing-go](http://geneontology.org/contribute-annotations).

[Why won't the RDF-XML file parse using RDF parsers?](/faq/why-wont-rdf-xml-file-parse-using-rdf-parsers)
---------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Why won't the RDF-XML file parse using RDF parsers?"></span>
FAQ tags: 

[format](/faq-tags/format)

[software](/faq-tags/software)

The GO RDF-XML format was originally developed some time ago, before the advent of OWL. It has a few unusual features that render it more of a pseudo-rdf format. The actual RDF is embedded within a xml element - this should be stripped out before handing to RDF parsers. Note that the GO RDF-XML conforms to a DTD, something that is not normally a requirement of RDF. This is because most people parse the file using conventional XML parsers rather than XML tools. We are working on a more up to date RDF representation of GO.

[Why are some gene products annotated to both a parent term and a child term?](/faq/why-are-some-gene-products-annotated-both-parent-term-and-child-term)
---------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Why are some gene products annotated to both a parent term and a child term?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

This is done when there is explicit evidence to support separate annotations; usually it means that there is strong evidence for a more general annotation (parent term) and weaker evidence supporting a more specific annotation (child term).

From the [GO annotation guide]():

Uncertain knowledge of where a gene product operates should be denoted by annotating it to two nodes, one of which can be a parent of the other. For instance, a yeast gene product known to be in the nucleolus, but also experimentally observed in the nucleus generally, can be annotated to both nucleolus and nucleus in the cell component ontology. Even though annotation to nucleolus alone implies that a gene product is also in the nucleus, annotate to both so as to explicitly indicate that it has been reported in the two locations. The two annotations may have the same or different supporting evidence.

[How can I generate files in the old GO flat file format?](/faq/how-can-i-generate-files-old-go-flat-file-format)
-----------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How can I generate files in the old GO flat file format?"></span>
FAQ tags: 

[format](/faq-tags/format)

[software](/faq-tags/software)

As of August 1, 2009, the original GO flat file format was deprecated and is no longer be provided by the GO Consortium.

The OBO-Edit project, which used to generate the flat file format, has been [*mothballed*](http://oboedit.org/).

[Where can I find software to allow me to edit the GO terms?](/faq/where-can-i-find-software-allow-me-edit-go-terms)
--------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Where can I find software to allow me to edit the GO terms?"></span>
FAQ tags: 

[ontology](/faq-tags/ontology)

[software](/faq-tags/software)

-   [Protege](http://protege.stanford.edu/): Protege is a free, open-source ontology editor and framework for building intelligent systems. At this time, all ontology editors for GO use this program.
-   [OBO-Edit - **now deprecated**](http://oboedit.org/): OBO-Edit was developed by the software group at the Berkeley Drosophila Genome Project (BDGP), specifically for ontology editing; it ensured that file syntax remained correct. Until recently, it was also used for editing GO, but its use has been deprecated.

[What is an ontology?](/faq/what-ontology)
------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is an ontology?"></span>
FAQ tags: 

[ontology](/faq-tags/ontology)

Ontologies are 'specifications of a relational vocabulary'. In other words they are sets of defined terms like the sort that you would find in a dictionary, but the terms are given hierarchical relationships to one another. The terms in a given vocabulary are likely to be restricted to those used in a particular field or domain, and in the case of GO, the terms are all biological.

[Reporting GO slim results, why shouldn't I display my "GO slim" results as a pie chart ?](/faq/reporting-go-slim-results-why-shouldnt-i-display-my-go-slim-results-pie-chart)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Reporting GO slim results, why shouldn't I  display my &quot;GO slim&quot; results as a pie chart ?"></span>
FAQ tags: 

[other](/faq-tags/other)

The numbers provided by a GO slim are an annotation count not a gene product count, and so gene products may be present in more than one bin. Therefore displaying GO slim totals as percentages is not meaningful. For your results to be interpreted fully, you should also report how many genes are annotated but not in your slim, and how many genes do not slim.

[What are the differences between the data available in AmiGO and those on QuickGO?](/faq/what-are-differences-between-data-available-amigo-and-those-quickgo)
--------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What are the differences between the data available in AmiGO and those on QuickGO?"></span>
FAQ tags: 

[amigo](/faq-tags/amigo)

[annotation](/faq-tags/annotation)

These are some of the differences between EBI-GOA (QuickGO) and GO Central (AmiGO) when it comes to entities.

GO Central recommends that GAF annotations are made to genes, that is 1:1 equivalents. In GOA (and consequently in QuickGO) annotations are made to proteins, and there may be multiple proteins per gene, sometimes representing different isoforms. You will see this reflected in different numbers for mouse annotations for example.

This is a very important difference, one that users can see when comparing UIs, but more importantly, it is about the underlying datasets and whether a gene-centric or protein-centric worldview is chosen.

Additionally, GO Central omits the majority of the sequences and IEA \[electronic\] annotations from UniProtKB from the weekly database builds due to the large size of the data set. For those species with a dedicated authoritative database group, such as Drosophila, mouse or Saccharomyces, UniProtKB annotations are collected and submitted by the dedicated group, and hence the UniProtKB IEA annotations for these species do appear in the GO database. As an NHGRI funded resource, GO Central focuses on annotations that elucidate human genes or genes of relevance to human health in some way. GO Central also includes plants, as well as the 200 genomes of the "Quest for Orthologs" project. More datasets will be supported depending on available resources.

You can learn more about this subject at <http://geneontology.org/page/lead-database-guide#why> and at <http://geneontology.org/page/download-annotations>

[What is a GPI file?](/faq/what-gpi-file)
-----------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What is a GPI file?"></span>
FAQ tags: 

[format](/faq-tags/format)

[software](/faq-tags/software)

A GPI - Gene Product Information file is used to submit gene and gene product information to the GO Consortium. The specification is [here](http://geneontology.org/page/gene-product-information-gpi-format). Please note that annotation information relationships between GO terms and annotations made to them uses [GPAD](http://geneontology.org/page/gene-product-information-gpi-format) format files

[How can I suggest new GO terms?](/faq/how-can-i-suggest-new-go-terms)
----------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How can I suggest new GO terms?"></span>
FAQ tags: 

[ontology](/faq-tags/ontology)

The GO vocabularies are updated on a regular basis, and suggestions from the community for additional terms or for other improvements are very welcome. Please visit the page ["Contributing to the Ontology"](http://geneontology.org/contributing-go-term) for details on how to submit your contributions.

[What are mappings?](/faq/what-are-mappings)
--------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What are mappings?"></span>
FAQ tags: 

[mappings](/faq-tags/mappings)

The files contain concepts from systems external to GO e.g. Enzyme Commission numbers, SWISS-PROT keywords and TIGR roles, indexed to equivalent GO terms. The mappings are typically made manually; details can be found in the file header. See the [Mappings to GO](/page/download-mappings) for files available.

[Why are Interpro2go mappings not updated with GOA releases?](/faq/why-are-interpro2go-mappings-not-updated-goa-releases)
-------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Why are Interpro2go mappings not updated with GOA releases?"></span>
FAQ tags: 

[mappings](/faq-tags/mappings)

GOA is updated in accordance with the latest data released by its core databases (SWISS-PROT, TrEMBL, InterPro, Ensembl) as well as mappings of SWISS-PROT Keywords, InterPro and Enzyme Commission (EC) terms to GO. Each of GOA's core databases produces its own releases; for example, InterPro has dependencies on the member databases of InterPro. InterPro2GO is updated at regular intervals but not always in keeping with monthly schedule of GOA releases.

[What are the file formats used by the Gene Ontology?](/faq/what-are-file-formats-used-gene-ontology)
-----------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="What are the file formats used by the Gene Ontology?"></span>
FAQ tags: 

[format](/faq-tags/format)

[software](/faq-tags/software)

A general introduction to the project's file formats is [available](http://geneontology.org/page/file-format-guide). This page provides information about the file formats relevant to the ontology and the files used to express ontology-gene product annotations.

[Where can I find software to allow me to make or edit GO annotations?](/faq/where-can-i-find-software-allow-me-make-or-edit-go-annotations)
--------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="Where can I find software to allow me to make or edit GO annotations?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

[software](/faq-tags/software)

GO annotations can be made and edited using various database-specific tools. Please contact the relevant database to find out how their GO annotation is done. The GMOD online tool, [Canto](http://gmod.org/wiki/Canto), supports functional gene annotation by community researchers as well as by professional curators.

[How do I access older versions of gene association files?](/faq/how-do-i-access-older-versions-gene-association-files)
-----------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I access older versions of gene association files?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

[downloads](/faq-tags/downloads)

Here are several options:
1.  old database dumps, requires knowledge of schema and SQL for retrieving info, need to be able to restore the whole db
2.  CVS attic for individual gene\_association files
3.  cvs repository for individual gene\_association files
4.  svn repository for individual gene\_association files
5.  GOA archive of gene association files

[How do I find all annotations for species X that I can't find in AmiGO?](/faq/how-do-i-find-all-annotations-species-x-i-cant-find-amigo)
-----------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How do I find all annotations for species X that I can't find in AmiGO?"></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

[downloads](/faq-tags/downloads)

[software](/faq-tags/software)

[third-party tools](/faq-tags/third-party-tools)

Open the QuickGO web-page <http://www.ebi.ac.uk/QuickGO/>
Click on the Search and Filter GO annotation sets link located beneath the search box
This will lead you to an Annotation download page where you can click the filter icon (Located to the right hand side of the page)
The filter annotations page you will see has a list of filter options located at the top of the page. Click on taxon to input the taxon identifier of the species you would like to get GO annotations for (Example: Taxon identifier 6279 for Brugia malayi)
Click submit to get your results. If you click on the Statistics icon and then through the different tabs on the page that pop up, you can see the breakdown of the different annotations.
-   Number of annotations 37380 (example)
-   Number of distinct proteins 8357 (example)

[How are binary interactions curated by the IntAct group selected for export to GO as protein binding (GO:0005515) annotations?](/faq/how-are-binary-interactions-curated-intact-group-selected-export-go-protein-binding-go0005515)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span class="rdf-meta element-hidden" property="dc:title" content="How are binary interactions curated by the IntAct group selected for export to GO as protein binding (GO:0005515) annotations? "></span>
FAQ tags: 

[annotation](/faq-tags/annotation)

All binary interactions evidences in the IntAct database, including those generated by Spoke expansion of co-complex data, are clustered to produce a non-redundant set of protein pairs. Each binary pair is then scored, using a simple addition of the cumulated value of a weighted score for the interaction detection method and the interaction type for each interaction evidence associated with that binary pair. Only experimental data is scored, inferred interactions, for example, would not be scored, and any low confidence data, or data manually tagged by a curator for exclusion from the process, are also not scored. Isoforms and post-processed protein chains are regarded as individual proteins for scoring purposes. Score weightings were determined using the PSI-MI CV.

Once the interactions have been scored, a cut-off filter of 9 has been established, below which the interaction is not exported to UniProtKB and to the Gene Ontology annotation files. Additional rules ensure that any protein pair scoring above 9 must also include at least one evidence of a binary pair, excluding spoke expanded data, before export to UniProtKB/GOA.

These criteria ensure that:

\* Only experimental data is used for making the decision to export the protein pair to UniProtKB/GOA as a true binary interacting pair

\* The export decision is always based on at least two pieces of experimental data. A single evidence cannot score highly enough to trigger an export

\* An export cannot be triggered if the protein pair only ever co-occurs in larger complexes, there must be at least one evidence that the proteins are probably in physical contact.

IMEx will only call an interaction 'direct' when performed with 2 purified molecules in vitro so any method using whole cells or cell lysates would not be regarded as direct. The described methodology will give you binary i.e. either direct or involved in the same small complex.

For more details, please see the [corresponding entry](http://www.ebi.ac.uk/intact/about/faq?conversationContext=5#8) on the the IntAct FAQ page.

