---
title: GO File Format Guide
permalink: /docs/go-file-format-guide/
---

<!-- Links/info on this page to SQL, needs to be replaced with current info.  Also maybe eliminate formats no longer supported/preferred?? (Old OBO, etc.)-->

# GO File Format Guide
## GO Formats

The GO File Format Guide documents the structure and syntax of the files available on the GO website, to assist users who need to read, write parsers for, or create these files. The following file formats are documented separately:

* [OBO 1.4 File Format Guide](http://owlcollab.github.io/oboformat/doc/obo-syntax.html): the ontology file format used and recommended by the GO Consortium
* [OBO 1.2 File Format Guide](http://owlcollab.github.io/oboformat/doc/GO.format.obo-1_2.html): previous iteration of the OBO format
* [OBO 1.0 File Format Guide](http://owlcollab.github.io/oboformat/doc/GO.format.obo-1_0.html): previous iteration of the OBO format
* [GO RDF-XML format](go-rdfxml-file-format.md)
* [GO annotation ("gene association") file format](GOAnnotationFileFormats.md)
* External mapping file format

~~The combined GO annotation and ontology data is stored as a MySQL database; see the GO database documentation for more information, including the database schema.~~

OBO is fully supported via the OWL-API.

* [OBO format tools in GitHub](https://github.com/oboformat/oboformat-tools): a wrapper for the Java (OWL-API) implementation of a parser for OBOF1.4 syntax and an implementation of the OBOF1.4 mapping to OWL (uses the OWL API)
* [OWL API in Github](https://github.com/owlcs/owlapi): a Java API for creating, manipulating and serialising OWL Ontologies.

 
## Ontology Flat File Formats

The GO Consortium uses the OBO flat file format to store the ontology data. The current version is OBO 1.4, although the ontology data is also available in the previous version, OBO 1.2. The GO Consortium no longer uses or supports files in the legacy GO format. Should you require a file in this format, the command-line script obo2flat can be used to interconvert between OBO format and the legacy GO format. obo2flat is a Java script and comes as part of the OBO-Edit package; instructions on usage are provided in the OBO-Edit User Guide.

### OWL RDF/XML Format

OWL is a standard for ontology languages, produced by the W3C. Details of the translation used for GO is available on the official OboInOwl page.

### Legacy Formats
OBO-XML and FASTA files were retired in 2018.  
