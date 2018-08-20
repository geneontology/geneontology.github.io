<!-- This had two tables.  I did not preserve the formatting --> 

# Download Ontology
## Currently available

This page describes the various versions of Gene Ontology available for download. Note that there are some changes to download locations. You should be able to right-click (or ctrl-click on Mac) on the file link and then "save as" to your computer. OBO files are human-readable (in addition to machine-readable) and can be opened in any text editor.
Name 	Permanent URL 	Description
GO ontology downloads (daily releases) go-basic.obo 	http://purl.obolibrary.org/obo/go/go-basic.obo 	Filtered, for use with legacy tools
go.obo 	http://purl.obolibrary.org/obo/go.obo 	Core ontology (OBO Format)
go.owl 	http://purl.obolibrary.org/obo/go.owl 	Core ontology (OWL RDF/XML)
extensions/go-plus.owl 	http://purl.obolibrary.org/obo/go/extensions/go-plus.owl 	Core plus additional axioms, vetted
### go-basic.obo

This is the basic version of the GO filtered such that the graph is guaranteed to be acyclic, and annotations can be propagated up the graph. The relations included are is_a, part_of, regulates, negatively_regulates and positively_regulates. This version excludes relationships that cross the 3 main GO hierarchies. This is the version that should be used with most GO-based annotation tools.
### go.obo and go.owl

These files contain the core GO ontology in two formats, OBO and OWL-RDF/XML. This view includes relationships not in the filtered version of GO including has_part and occurs_in. The set of relationships used is likely to extend over time. Many of these relationships may not be safe for propagating annotations across, so this version should not be used with legacy GO tools. This version currently excludes relationships to external ontologies.
### go-plus.owl

This is the fully axiomatised of the GO. It includes cross ontology relationships (axioms) and imports additional required ontologies including ChEBI, cell ontology and Uberon. It also includes a complete set of relationship types including some not in go.obo/go.owl. This version is only available in OWL.
## Subsets

GO slims are subsets of terms in the ontology. GO slims give a broad overview of the ontology content without the detail of the specific fine grained terms. More information in the GO slim guide.
## Mappings of GO to other classification systems

GO classes have been mapped to a number of other, external, classification systems. Click here to view and download these mappings.
## Legacy Downloads

The GO is also available in a number of other formats. These other formats are not recommended for new applications, but as many existing applications rely on these downloads we will continue to support them. For users of the GO-RDF/XML version of the ontology, we recommend the OWL RDF/XML version (see above). For OWL users, we continue to support the legacy obo2owl translation, but users are strongly encouraged to switch to the new translation (see above).
Database tables
MySQL database dump [database schema] 	Filtered ontology 	Daily 	MySQL database dump
SQL database dump [database schema] 	Filtered ontology 	Daily 	SQL database dump
XML format
RDF-XML [format guide] 	Filtered ontology 	Daily 	rdf-xml.gz
OBO-XML [format guide; OBO-XML RNC; OBO-XML RNG] 	Filtered ontology 	Daily 	obo-xml.gz
OWL (old mapping) [format guide] 	Filtered ontology 	Daily 	owl.gz
### Archives and previous versions

An archive of the ontology files (in both current and legacy formats) from the first of each month is available on the GO website, or by downloading previous revisions of the ontology files via the GO web CVS interface, or from the directory go/ontology/ in the GO CVS repository.
