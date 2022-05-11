---
title: Deprecated formats
permalink: /docs/deprecated-products-and-formats/
redirect_from: 
- /page/go-mysql-database-guide
- /page/go-mysql-database-schema
- /page/ftp-and-cvs-downloads
- /page/go-annotation-file-gaf-format-10
- /page/go-rdfxml-file-format
- /page/lead-database-guide
- /page/go-tools-registry
---

# Deprecated formats

## Ontology formats

GO currently provides the Gene Ontology in the OBO 1.2 format (as produced by the OWL API) and other formats; see the [ontology download page](/docs/download-ontology/) for more information about current ontology file formats. 

+ The GO Consortium no longer uses or supports the flat file format, which was deprecated in 2009.
+ OBO-XML and FASTA files were retired in 2018.   OBO-XML was a direct XML serialization of the OBO 1.2 format specification. The schema is specified using RELAX-NG compact syntax: obo-xml.rnc.
+ RDF-XML and OWL (old mapping) formats of the ontology were retired in early 2021. For users of the GO-RDF/XML version of the ontology, we recommend the OWL RDF/XML version. For OWL users, we continue to support the legacy obo2owl translation, but users are strongly encouraged to switch to the new translation. 
+ [OBO 1.2 File Format Guide](http://owlcollab.github.io/oboformat/doc/GO.format.obo-1_2.html){:target="blank"}: previous iteration of the OBO format
+ [OBO 1.0 File Format Guide](http://owlcollab.github.io/oboformat/doc/GO.format.obo-1_0.html){:target="blank"}: previous iteration of the OBO format

## Annotation formats

GO currently provides annotations in GPAD 1.1/GPI 1.2 as well as GAF 2.2, and encourages anyone consuming or producing GAF 2.1 or older to adopt the newest format. See the [annotation download page](/docs/download-go-annotations/) for more information about current annotation file formats.

+  [GO Annotation File Format 2.0](/docs/go-annotation-file-gaf-format-2.0/) was deprecated in March 2021 
+  GO Annotation File Format 1.0 was deprecated in June 2010. 

Please contact the <a href="http://help.geneontology.org">GO Helpdesk</a> if you have any questions.
