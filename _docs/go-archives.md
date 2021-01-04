---
title: GO Archive
permalink: /docs/go-archives/
# redirect_from: 
# - /page/go-mysql-database-guide
# - /page/go-mysql-database-schema
# - /page/ftp-and-cvs-downloads
# - /page/go-annotation-file-gaf-format-10
# - /page/go-rdfxml-file-format
# - /page/lead-database-guide
# - /page/go-tools-registry
---

# GO Archive

The Gene Ontology consortium has released in December 2020 a comprehensive archive covering the past 15 years of GO data with a consistent format and file structure for both the ontology and annotations.

[ [Quick access to the GO Archive](http://release.geneontology.org/){:target="blank"} ]

## Archive content and consistency

The GO archive contains the monthly releases built from 2004 to Feb 2018 with the deprecated GO CVS, SVN and product archives. The archive also contains all the GO DOI monthly releases (start in March 2018). Each monthly release was built using the same folder hierarchy as our current GO DOI releases:

<table align="center" style="width: 100%">
    <tr>
        <td><img width="650" src="/assets/GO_release_2004.png" alt="GO Archive - 2014 release"><div style="text-align: center">2014 monthly release</div></td>
        <td><img width="650" src="/assets/GO_release_2018.png" alt="GO Archive - 2018 release"><div style="text-align: center">2018 monthly release</div></td>
    </tr>
</table>

## Archive folder hierarchy
* <span style="color: blue">annotations/</span> : contains the GO annotations as GAF files. GPAD and GPI files are available from March, 2018 with the GO DOI releases
* <span style="color: blue">annotations/gp2protein/</span> (*) : contains the files mapping gene products (usually MOD ids) to proteins (UniProtKB accession number)
* <span style="color: blue">annotations/gp2rna/</span> (*): equivalent of gp2protein files but for non-coding RNAs (mapping to RNA central IDs)
* <span style="color: blue">ontology/</span> : contains the GO ontology (obo and owl files) - users are recommended to use ontology/go.obo if they don't need to go back further than March 2009 and ontology/gene_ontology.obo (old obo format) if they need to go back to the beginning of the archive
* <span style="color: blue">ontology/extensions/</span> (**): contains the various ontologies imported or produced by GO
* <span style="color: blue">ontology/external2go/</span> : files mapping GO to different resources (e.g. interpro, kegg, reactome, etc)
* <span style="color: blue">ontology/subsets/</span> (***) : contains the GO slims used to simplify the ontology for specific purposes (e.g. goslim_synapse) or organisms (e.g. goslim_pombe) - we recommend to use .obo files rather than old deprecated .go files
* <span style="color: blue">mysql_dumps/</span> (****) : contains the MySQL dumps of GO (e.g. -assocdb , -termdb)
* <span style="color: blue">products/annotations</span> : contains the GO annotations provided by the MODs to the GO consortium. Those files are kept for transparency but users are recommended to use the GO annotations in annotations/ as they can differ due to various filtering and checks performed by the GO consortium to ensure quality

<p>
(*) : up to Feb, 2018
(**) : from May, 2015
(***) : from Oct, 2004
(****) : up to Jan, 2017
</p>


## Additional note on GO subsets
The GO subsets from 2004 to 2018 were deposited to give an easy access to the GO slim used in a particular publication or analysis and for reuse by the GO community at the time. Some of these GO slims are no longer maintained by the authors and as such can contain obsoleted GO terms. Although we recommend to use the .obo files (consistent with our current releases), old and deprecated .go files were kept in the archive. In .go files, parentage and relationships are indicated by indentation and punctuation characters (e.g. '%' to indicate an is_a relationship).

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


## GO DOI releases (March 2018+)
In addition to the folder hierarchy described above, the GO DOI releases produced from March 2018 contain additional folders. These folders are only useful to a few people who would want or need to reproduce a GO release, using for instance the set of programs (bin/) and libraries (lib/) available at the time of the release. Starting from Oct 2019, GO also provides various statistics files in release_stats/.

## How the GO Archive was built
The archive was generated using the data scattered across 3 legacy systems, namely the GO CVS, the GO SVN and the old product archive. Each of those systems was created at different times to serve different purposes and they were partially redundant, both in terms of the types of data they contained and in time frames (e.g. SVN was maintained from 2011 to 2018 while CVS was maintained from 2002 to 2018). The project is hosted on [GitHub](https://github.com/geneontology/archive-reconstruction){:target="blank"}.


Please contact the <a href="http://help.geneontology.org">GO Helpdesk</a> if you have any questions.
