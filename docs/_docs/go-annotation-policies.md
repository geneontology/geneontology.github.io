---
title: GO Annotation Policies
permalink: /docs/go-annotation-policies/
---

Annotation is the process of assigning GO terms to gene products. The annotation data in the GO database is contributed by members of the GO Consortium, and the Consortium is actively encouraging new groups to start contributing annotation. This GO annotation guide includes details about the annotation process.

Collaborating databases annotate their gene products with GO terms, according to two general principles: first, annotations should be attributed to a source; second, each annotation should indicate the evidence on which it is based.
## Long-term maintenance of annotation datasets
Annotation is carried out by curators in a range of bioinformatics database resource groups, such as Mouse Genome Informatics, Saccharomyces Genome Database and FlyBase. These groups then contribute their data to the central GO repository for storage and redistribution. After submission, the annotating groups may retain responsibility for updating the annotation data to take account of changes in annotation practices and in the structure of the ontologies. This is an ongoing responsibility. For groups who prefer not to maintain their annotation dataset in the long term, it is possible to submit data to the GO repository via another database group, which will undertake to maintain the data long-term.
## Avoiding redundancy
Where two or more databases are submitting data on the same species we encourage the model whereby one database group collects all annotation data for that species, removes the redundant (duplicate) annotations, and then submits the total dataset to the central repository. This ensures that no redundant annotations will appear in the master dataset. Please see the list of species and relevant database groups for more details. We understand that annotating groups will also wish to make their full dataset available to the public. For this purpose, the GO Consortium makes all of the individual datasets available from the GO website, via the GO web CVS interface, or from the directory go/gene-associations/ in the GO CVS repository. All of the individual datasets are also listed in the annotation downloads table, and all individual groups will clearly be given credit for the work that they have done. The non-redundant set is only used as the master copy that appears in AmiGO and similar tools.
## Credit for annotation work
Every annotation is marked with the name of the database that made the annotation as well as the name of the database that maintains and submits the annotation. This information is in two separate columns of the gene association file. This ensures that the database making the annotation, and the database maintaining the annotation, will both receive full credit for their work.
## No single established database?
Some model species research communities do not have an established database group with funding and time to commit to long-term maintenance of their datasets. Such groups can contribute annotations to the central repository via the UniProtKB GO Annotation (UniProtKB-GOA) multispecies annotation group. This is also a possible route for those groups just starting out in annotation who may wish to take up the responsibility for long-term maintenance of their datasets at a later date.
## Sample annotation sets
Sample annotation sets are available from a number of the databases in the Consortium; see the teaching resources page to download them. These sets comprise up to ten papers annotated by the database, with description of the GO terms and evidence codes used, along with reasons why these terms were chosen (where applicable).
## GO Annotation Resources
For more information on annotation, please see the following resources:

 * GO annotation conventions
 * GO annotation standard operating procedures
 * Evidence codes used in GO annotation
