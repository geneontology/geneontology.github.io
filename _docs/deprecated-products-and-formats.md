---
title: Deprecated products and formats
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

GO is no longer using or supporting the formats.

## Deprecated ontology formats

+ GO provides the Gene Ontology in the OBO 1.4 format. Ontology data is also available in the previous version, OBO 1.2. The GO Consortium no longer uses or supports files in older formats. Should you require a file in this format, the command-line script obo2flat can be used to interconvert between OBO format and the legacy GO format. obo2flat is a Java script and comes as part of the OBO-Edit package; instructions on usage are provided in the OBO-Edit User Guide.
+ OBO-XML is a direct XML serialization of the OBO 1.2 format specification. The schema is specified using RELAX-NG compact syntax: obo-xml.rnc. Currently, only the ontology is available as OBO-XML.
+ The GO is also available in other formats. These other formats are not recommended for new applications, but as many existing applications rely on these downloads we will continue to support them. For users of the GO-RDF/XML version of the ontology, we recommend the OWL RDF/XML version. For OWL users, we continue to support the legacy obo2owl translation, but users are strongly encouraged to switch to the new translation. See the [download ontology documentation page](/docs/download-ontology/) for more information about current file formats.
+ RDF-XML and OWL (old mapping) formats of the ontology
+ OBO-XML and FASTA files were retired in 2018.  
+ [OBO 1.2 File Format Guide](http://owlcollab.github.io/oboformat/doc/GO.format.obo-1_2.html){:target="blank"}: previous iteration of the OBO format
+ [OBO 1.0 File Format Guide](http://owlcollab.github.io/oboformat/doc/GO.format.obo-1_0.html){:target="blank"}: previous iteration of the OBO format

## Deprecated annotation formats

+  [GO Annotation File Format 2.0](/docs/go-annotation-file-gaf-format-20/) 
+  GO Annotation File Format 1.0 was deprecated in June 2010. 

Please contact the <a href="http://help.geneontology.org">GO Helpdesk</a> if you have any questions.
