---
title: Archived data
permalink: /docs/archives/
redirect_from: 
- /page/go-mysql-database-guide
- /page/go-mysql-database-schema
- /page/ftp-and-cvs-downloads
- /page/go-annotation-file-gaf-format-10
- /page/go-rdfxml-file-format
- /page/lead-database-guide
- /page/go-tools-registry
---

# Archived data

## General GO archive
The general GO archive which includes both the ontology and annotations under different formats (including deprecated ones) is available at:
[http://archive.geneontology.org/](http://archive.geneontology.org/){:target="blank"}

## Archived ontology files

An archive of the ontology files (in both current and legacy formats) from the first of each month is available on the GO Database archive.  

The archives are arranged by release type, and are split into ontology-only, ontology plus manual annotation, and full database (including electronic annotation) releases.

<a href="ftp://ftp.geneontology.org/go/ontology-archive/">ftp.geneontology.org/go/ontology-archive</a>{:target="blank"}

## Archived MySQL database files
**MySQL database dumps are no longer being produced.**

The legacy MySQL database dumps, from start to final generation, are available at:

<a href="http://archive.geneontology.org/lite/">http://archive.geneontology.org/lite</a>{:target="blank"}

## Repositories 

+ <a href="http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/">CVS repository</a>{:target="blank"}
+ <a href="ftp://ftp.geneontology.org/pub/go/">FTP site</a>{:target="blank"}
+ [SVN access](/docs/SVN-access/){:target="blank"}

## Archived GO subsets

+ There is an [archive of GO subsets](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/){:target="blank"} that were used in the past, but that are no longer maintained or updated. These files have been deposited for two reasons; the first is to give easy access to the GO slim used in a particular publication or analysis; the second is for reuse by others in the community. Because these GO slims are no longer maintained by the authors they may contain GO terms which are now obsolete. All archival GO slims are in the deprecated GO flat file format in which the parentage and relationships were indicated by indentation and punctuation characters (e.g. '%' to indicate an is_a relationship).

_If you are looking for current, actively maintained GO slims, please [see the guide to GO subsets](/docs/go-subset-guide/#download-go-subsets)_

|Topic / Usage |	Information |	Download|
|--------------|--------------|---------|
|Generic GO slim |	Suparna Mundodi and Amelia Ireland Aug 2002 |	[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/generic.0208){:target="blank"}|
|Honey bee ESTs |	C.W. Whitfield, M.R. Band, M.F. Bonaldo, C.G. Kumar, L. Liu, J.R. Pardinas, H.M. Robertson, M.B. Soares, G.E. Robinson, [PMID:11923340](http://www.ncbi.nlm.nih.gov/pubmed/11932240){:target="blank"} Apr 2002 |	[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Apis_EST.0402){:target="blank"}|
|Drosophila |	M. Adams, M. Ashburner, G.M. Rubin, S.E. Lewis et al.; Adams et al., [PMID:10731132](http://www.ncbi.nlm.nih.gov/pubmed/10731132){:target="blank"} Mar 2000 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Drosophila.0200){:target="blank"}|
|Glossina ESTs |	M. Berriman Sep 2002 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Glossina_EST.0905){:target="blank"}|
|UniProtKB-GOA |	N. Mulder, M. Pruess [PMID:12230037](http://www.ncbi.nlm.nih.gov/pubmed/12230037){:target="blank"} Nov 2002 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_goa.2002){:target="blank"}|
|Mouse |	The RIKEN Genome Exploration Group Phase II Team and the FANTOM Consortium [PMID:11217851](http://www.ncbi.nlm.nih.gov/pubmed/11217851){:target="blank"} Feb 2001 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Mouse_Riken.0201){:target="blank"}|
|P. falciparum |	M. Berriman July 2002 |	[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Pfalciparum.2002){:target="blank"}|
|Plant |	Suparna Mundodi Dec 2002 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_plant.2003){:target="blank"}|
|Rice (Beijing) |	J. Yu et al. [PMID:11935017](http://www.ncbi.nlm.nih.gov/pubmed/11935017){:target="blank"} Apr 2002 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Rice_Beijing.0204){:target="blank"}|
|Rice (Syngenta) |	J. Yu et al. [PMID:11935018](http://www.ncbi.nlm.nih.gov/pubmed/11935018){:target="blank"} Apr 2002 |[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_Rice_Syngenta.0204){:target="blank"}|
|Yeast |	SGD curators Aug 2003 	|[old GO format](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/GO_slims/archived_GO_slims/goslim_yeast.2003){:target="blank"}|
|Prokaryotic subset |	GO curators. Replaced by taxon constraints. |[old GO format](http://purl.obolibrary.org/obo/go/releases/2018-06-01/subsets/gosubset_prok.obo){:target="blank"}|

Please contact the <a href="http://help.geneontology.org">GO Helpdesk</a> if you have any questions.
