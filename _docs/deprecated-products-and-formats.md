---
title: Deprecated Products and Formats
permalink: /docs/deprecated-products-and-formats/
---

# Deprecated Products and Formats

GO is no longer using the following products and formats: 

## Deprecated ontology formats
+ GO provides the Gene Ontology in the OBO 1.4 format. Ontology data is also available in the previous version, OBO 1.2. The GO Consortium no longer uses or supports files in older formats. Should you require a file in this format, the command-line script obo2flat can be used to interconvert between OBO format and the legacy GO format. obo2flat is a Java script and comes as part of the OBO-Edit package; instructions on usage are provided in the OBO-Edit User Guide.

+ OBO-XML is a direct XML serialization of the OBO 1.2 format specification. The schema is specified using RELAX-NG compact syntax: obo-xml.rnc. Currently, only the ontology is available as OBO-XML.

+ The GO is also available in other formats. These other formats are not recommended for new applications, but as many existing applications rely on these downloads we will continue to support them. For users of the GO-RDF/XML version of the ontology, we recommend the OWL RDF/XML version. For OWL users, we continue to support the legacy obo2owl translation, but users are strongly encouraged to switch to the new translation (see [Download ontology documentation](/docs/download-ontology/) for more information.

|**XML format** Database tables ||||
|----------------|---|---|---|
|RDF-XML [format guide](go-rdfxml-file-format.md) |	Filtered ontology |	Daily |	<a href="http://archive.geneontology.org/latest-termdb/go_daily-termdb.rdf-xml.gz">rdf-xml.gz</a>|
|OWL (old mapping) <a href="http://www.bioontology.org/wiki/index.php/OboInOwl:Main_Page">format guide</a>|	Filtered ontology |	Daily |	<a href="http://archive.geneontology.org/latest-termdb/go_daily-termdb.owl.gz">owl.gz</a>|
+ OBO-XML and FASTA files were retired in 2018.  
+ [OBO 1.2 File Format Guide](http://owlcollab.github.io/oboformat/doc/GO.format.obo-1_2.html): previous iteration of the OBO format
+ [OBO 1.0 File Format Guide](http://owlcollab.github.io/oboformat/doc/GO.format.obo-1_0.html): previous iteration of the OBO format

### Archived ontology files

+ An archive of the ontology files (in both current and legacy formats) from the first of each month is available on the GO website: <a href="ftp://ftp.geneontology.org/go/ontology-archive/">ftp.geneontology.org/go/ontology-archive</a>

## Deprecated annotation formats

+  [GO Annotation File Format 2.0](/docs/go-annotation-file-gaf-format-20/) 
+  GO Annotation File Format 1.0 was deprecated in June 2010. 

## Databases and schemas
+ MySQL database dumps are no longer being produced. 


## Repositories 
+ <a href="http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/">CVS repository</a>
+ <a href="ftp://ftp.geneontology.org/pub/go/">FTP site</a>

## Archived GO Subsets

+ There is an [archive of deprecated GO subsets](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/) that are no longer maintained or updated. These files have been deposited for two reasons; the first is to give easy access to the GO slim used in a particular publication or analysis; the second is for reuse by others in the community.

+ The following GO slims are no longer maintained by the authors, and they may contain GO terms which are now obsolete. All archival GO slims are in the deprecated GO flat file format.
### Archived GO slims for download
|Topic / Usage |	Information |	Download|
|--------------|--------------|---------|
|Generic GO slim |	Suparna Mundodi and Amelia Ireland Aug 2002 |	[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/generic.0208)|
|Honey bee ESTs |	C.W. Whitfield, M.R. Band, M.F. Bonaldo, C.G. Kumar, L. Liu, J.R. Pardinas, H.M. Robertson, M.B. Soares, G.E. Robinson, [PMID:11923340](http://www.ncbi.nlm.nih.gov/pubmed/11932240) Apr 2002 |	[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Apis_EST.0402)|
|Drosophila |	M. Adams, M. Ashburner, G.M. Rubin, S.E. Lewis et al.; Adams et al., [PMID:10731132](http://www.ncbi.nlm.nih.gov/pubmed/10731132) Mar 2000 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Drosophila.0200)|
|Glossina ESTs |	M. Berriman Sep 2002 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Glossina_EST.0905)|
|UniProtKB-GOA |	N. Mulder, M. Pruess [PMID:12230037](http://www.ncbi.nlm.nih.gov/pubmed/12230037) Nov 2002 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_goa.2002)|
|Mouse |	The RIKEN Genome Exploration Group Phase II Team and the FANTOM Consortium [PMID:11217851](http://www.ncbi.nlm.nih.gov/pubmed/11217851) Feb 2001 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Mouse_Riken.0201)|
|P. falciparum |	M. Berriman July 2002 |	[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Pfalciparum.2002)|
|Plant |	Suparna Mundodi Dec 2002 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_plant.2003)|
|Rice (Beijing) |	J. Yu et al. [PMID:11935017](http://www.ncbi.nlm.nih.gov/pubmed/11935017) Apr 2002 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Rice_Beijing.0204)|
|Rice (Syngenta) |	J. Yu et al. [PMID:11935018](http://www.ncbi.nlm.nih.gov/pubmed/11935018) Apr 2002 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Rice_Syngenta.0204)|
|Yeast |	SGD curators Aug 2003 	|[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_yeast.2003)|
|Prokaryotic subset |	GO curators. Replaced by taxon constraints. |[old GO format](http://purl.obolibrary.org/obo/go/releases/2018-06-01/subsets/gosubset_prok.obo)|

Please contact the <a href="http://help.geneontology.org">GO Helpdesk</a> if you have any questions.
