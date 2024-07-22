---
title: GO Archive
permalink: /docs/go-archives/
redirect_from:
- /page/go-mysql-database-guide
- /page/go-mysql-database-schema
- /page/ftp-and-cvs-downloads
- /page/go-annotation-file-gaf-format-10
- /page/go-rdfxml-file-format
- /page/lead-database-guide
- /page/go-tools-registry
- /docs/archives/
---

# GO Archive

The GO Archive is a comprehensive collection of the ontology and annotations from 2004. Note that this replaces the former GO CVS, SVN and old archive.

[ [Quick access to the GO Archive](http://release.geneontology.org/){:target="blank"} ]

## About the contents of the GO Archive

### GO release folder hierarchy
* <span style="color: blue">annotations</span> : contains the GO annotations as GAF files. GPAD and GPI files are available from March, 2018 with the newer GO DOI releases
* <span style="color: blue">annotations/gp2protein</span> (up to Feb, 2018) : contains the files mapping gene products (usually MOD ids) to proteins (UniProtKB accession number)
* <span style="color: blue">annotations/gp2rna</span> (up to Feb, 2018): equivalent of gp2protein files but for non-coding RNAs (mapping to RNA central IDs)
* <span style="color: blue">ontology</span> : contains the GO ontology (obo and owl files) - users are recommended to use ontology/go.obo (obo format 1.2) if they don't need to go back further than March 2009 and ontology/gene_ontology.obo (obo format 1.0) if they need to go back to the beginning of the archive
* <span style="color: blue">ontology/extensions</span> (from May, 2015): contains the various ontologies imported or produced by GO
* <span style="color: blue">ontology/external2go</span> : files mapping GO to different resources (e.g. interpro, kegg, reactome, etc)
* <span style="color: blue">ontology/subsets</span> (from Oct, 2004) : contains the GO slims used to simplify the ontology for specific purposes (e.g. goslim_synapse) or organisms (e.g. goslim_pombe) - we recommend to use .obo files (2004-now) rather than old deprecated .go files (2004-2009)
* <span style="color: blue">mysql_dumps</span> (up to Jan, 2017) : contains the MySQL dumps of GO (e.g. -assocdb , -termdb)
* <span style="color: blue">products/annotations</span> : contains the GO annotations provided by the MODs to the GO consortium. Those files are kept for transparency but users are recommended to use the GO annotations in annotations/ as they can differ due to various filtering and checks performed by the GO consortium to ensure quality


### GO subsets in the archive
The GO subsets from 2004 to ~2018 were deposited to give an easy access to the GO slim used in a particular publication or analysis and for reuse by the GO community at the time. Some of these GO slims are no longer maintained by the authors and as such can contain obsoleted GO terms; slims that are still maintained are indicated in bold. Although we recommend to use the .obo files (consistent with our current releases), old and deprecated .go files were kept in the archive. In .go files, parentage and relationships are indicated by indentation and punctuation characters (e.g. '%' to indicate an is_a relationship).

_If you are looking for current, actively maintained GO slims, please [see the guide to GO subsets](/docs/go-subset-guide/#download-go-subsets)_

|Topic / Usage |	Information |
|--------------|--------------|
|**Generic GO slim** |	Suparna Mundodi and Amelia Ireland Aug 2002 |	
|**Aspergillus** |	Subset for Aspergillus |
|**Drosophila** |	M. Adams, M. Ashburner, G.M. Rubin, S.E. Lewis et al.; Adams et al., [PMID:10731132](http://www.ncbi.nlm.nih.gov/pubmed/10731132){:target="blank"} Mar 2000 |
|Glossina ESTs |	M. Berriman Sep 2002 |
|Honey bee ESTs |	C.W. Whitfield, M.R. Band, M.F. Bonaldo, C.G. Kumar, L. Liu, J.R. Pardinas, H.M. Robertson, M.B. Soares, G.E. Robinson, [PMID:11923340](http://www.ncbi.nlm.nih.gov/pubmed/11932240){:target="blank"} Apr 2002 |	
|**Mouse** |	The RIKEN Genome Exploration Group Phase II Team and the FANTOM Consortium [PMID:11217851](http://www.ncbi.nlm.nih.gov/pubmed/11217851){:target="blank"} Feb 2001 |
|P. falciparum |	M. Berriman July 2002 |	
|**Plant** |	Suparna Mundodi Dec 2002 |
|**Prokaryotic subset** |	GO curators. Replaced by taxon constraints. |
|Rice (Beijing) |	J. Yu et al. [PMID:11935017](http://www.ncbi.nlm.nih.gov/pubmed/11935017){:target="blank"} Apr 2002 |
|Rice (Syngenta) |	J. Yu et al. [PMID:11935018](http://www.ncbi.nlm.nih.gov/pubmed/11935018){:target="blank"} Apr 2002 |
|UniProtKB-GOA |	N. Mulder, M. Pruess [PMID:12230037](http://www.ncbi.nlm.nih.gov/pubmed/12230037){:target="blank"} Nov 2002 |
|**Yeast** |	SGD curators Aug 2003 	|
|**Do not manually annotate**|The set of high level terms that are useful for grouping, but should have no direct annotations except from automated tools| 

## Deprecated formats

### Deprecated Ontology formats

GO currently provides the Gene Ontology in the OBO 1.2 format (as produced by the OWL API) and other formats; see the [ontology download page](/docs/download-ontology/) for more information about current ontology file formats. Several file formats may exist in the archives that are no longer supported by GO:

+ The GO Consortium no longer uses or supports the flat file format, which was deprecated in 2009.
+ OBO-XML and FASTA files were retired in 2018.   OBO-XML was a direct XML serialization of the OBO 1.2 format specification. The schema is specified using RELAX-NG compact syntax: obo-xml.rnc.
+ RDF-XML and OWL (old mapping) formats of the ontology were retired in early 2021. For users of the GO-RDF/XML version of the ontology, we recommend the OWL RDF/XML version. For OWL users, we continue to support the legacy obo2owl translation, but users are strongly encouraged to switch to the new translation. 
+ [OBO 1.0 file format](http://owlcollab.github.io/oboformat/doc/GO.format.obo-1_0.html){:target="blank"} was the previous iteration of the OBO format and was retired in 2018.

### Deprecated Annotation formats

GO currently provides annotations in GAF 2.2 as well as GPAD/GPI 2.0, and encourages anyone consuming or producing older versions to adopt the newest format. See the [annotation download page](/docs/download-go-annotations/) for more information about current annotation file formats.

+  GPAD 1.1: [Gene Product Association Data 1.1](/docs/gene-product-association-data-gpad-format-1.1/) are pending deprecation as of 2024
+  GPI 1.1 & 1.2: [Gene Product Information 1.2](docs/gene-product-information-gpi-format/) are pending deprecation as of 2024
+  GAF 2.0: [GO Annotation File Format 2.0](/docs/go-annotation-file-gaf-format-2.0/) was deprecated in March 2021 
+  GAF 1.0: GO Annotation File Format 1.0 was deprecated in June 2010. 

## How the GO Archive was built
The archive was generated using the data scattered across 3 legacy systems, namely the GO CVS, the GO SVN and the old product archive. Each of those systems was created at different times to serve different purposes and they were partially redundant, both in terms of the types of data they contained and in time frames (e.g. SVN was maintained from 2011 to 2018 while CVS was maintained from 2002 to 2018). The project is hosted on [GitHub](https://github.com/geneontology/archive-reconstruction){:target="blank"}.

## "Modern" GO releases (March 2018-present)

* March 2018 - January 2023 <br> In addition to the folder hierarchy described above, the GO DOI releases produced from March 2018 contain additional folders. These folders are only useful to a few people who would want or need to reproduce a GO release, using for instance the set of programs (bin/) and libraries (lib/) available at the time of the release. These were suspended from the March 2023 release.
* Oct 2019 - present <br> GO provides various statistics files in release_stats/.

Please contact the <a href="http://help.geneontology.org">GO Helpdesk</a> if you have any questions.
