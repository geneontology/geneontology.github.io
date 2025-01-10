---
title: GO citation policy and license
permalink: /docs/go-citation-policy/
redirect_from:
- /page/go-citation-policy
- /page/use-and-license
- /faq/how-do-i-cite-go-0
---

# GO citation policy and license

## Citing GO

We ask that whenever using the GO and/or annotations in a publication, please cite the two papers below (the original paper describing GO, and our most recent update paper):
+ Ashburner et al. Gene ontology: tool for the unification of biology. Nat Genet. 2000 May;25(1):25-9. DOI: [10.1038/75556](https://doi.org/10.1038/75556){:target="blank"} \[[abstract](https://www.ncbi.nlm.nih.gov/pubmed/10802651){:target="blank"} \| [full text](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3037419/){:target="blank"}\]
+ The Gene Ontology Consortium. The Gene Ontology knowledgebase in 2023. Genetics. 2023 May 4;224(1):iyad031. DOI: [10.1093/genetics/iyad031](https://doi.org/10.1093/genetics/iyad031){:target="blank"}  \[[abstract](https://pubmed.ncbi.nlm.nih.gov/36866529/){:target="blank"} \| [full text](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10158837/pdf/iyad031.pdf){:target="blank"}\]


If you used a specific software/analysis tool in your research, in addition to the two publications above, please also cite the tool used according to the following list:
+ **GO Enrichment Analysis**: Thomas PD, Ebert D, Muruganujan A, Mushayahama T, Albou LP, Mi H. PANTHER: Making genome-scale phylogenetics accessible to all. Protein Sci. 2022 Jan;31(1):8-22. [DOI:10.1002/pro.4218](https://doi.org/10.1002/pro.4218){:target="blank"} \[[abstract](https://pubmed.ncbi.nlm.nih.gov/34717010/){:target="blank"} \| [full text](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8740835/){:target="blank"}\]
+ **AmiGO**: Carbon S, Ireland A, Mungall CJ, Shu S, Marshall B, Lewis S, AmiGO Hub, Web Presence Working Group. AmiGO: online access to ontology and annotation data. Bioinformatics. 2009 Jan;25(2):288-289. [DOI:10.1093/bioinformatics/btn615](https://doi.org/10.1093/bioinformatics/btn615){:target="blank"} \[[abstract](https://www.ncbi.nlm.nih.gov/pubmed/19033274){:target="blank"} \| [full text](http://bioinformatics.oxfordjournals.org/content/25/2/288.full.pdf+html){:target="blank"}\]
+ **GO-CAMs**: Thomas PD, Hill DP, Mi H, Osumi-Sutherland D, Van Auken K, Carbon S, Balhoff JP, Albou LP, Good B, Gaudet P, Lewis SE, Mungall CJ. Gene Ontology Causal Activity Modeling (GO-CAM) moves beyond GO annotations to structured descriptions of biological functions and systems. Nat Genet. 2019 Oct;51(10):1429-1433. DOI: [10.1038/s41588-019-0500-1](https://doi.org/10.1038/s41588-019-0500-1){:target="blank"} \[[abstract](https://pubmed.ncbi.nlm.nih.gov/31548717/){:target="blank"} \| [full text](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7012280/pdf/nihms-1067180.pdf){:target="blank"}\]


If you produce tools and/or services that use GO data, the user should be provided with the GO release date and DOI along with the results (e.g. "2024-01-17" and "DOI: [10.5281/zenodo.10536401](https://doi.org/10.5281/zenodo.10536401){:target="blank"}").

## Citing data from downloads

If you wish to cite data provided by the Gene Ontology knowledgebase, either from AmiGO or the files downloaded from the GO website, please state the release date and/or version number of the data, preferably both; e.g. "2024-01-17" and "[10.5281/zenodo.10536401](https://doi.org/10.5281/zenodo.10536401){:target="blank"}". Both annotation and ontology data may change over time, and to reproduce the results of an analysis, it is important that the same initial GO data is used.

## Citing data from AmiGO

The data release can be found in the [AmiGO](https://amigo.geneontology.org/amigo){:target="blank"} page footer on the right-hand side. To cite the annotations of individual database groups please see the GO publications list.

## Best practices for linking to GO entities
GO uses persistent uniform resource locator (PURLs) for all the objects it describes. If you use or provide links to the following entities, please ensure you are using PURLs. Examples:
* GO terms: https://purl.obolibrary.org/obo/GO_0022008
* GO_REFs: https://purl.obolibrary.org/obo/go/references/0000015
* GO-CAM models: https://model.geneontology.org/65c57c3400001018
* GO ontology (versions)
  * current: https://purl.obolibrary.org/obo/go/go.owl
  * snapshot: https://purl.obolibrary.org/obo/go/snapshot/go.owl
  * dated release: https://purl.obolibrary.org/obo/go/releases/2024-01-17/go.owl

Technical documentation can be found on the [OBOFoundry GitHub site](https://github.com/OBOFoundry/purl.obolibrary.org/blob/master/README.md){:target="blank"}.

## License

Gene Ontology Consortium data and data products are licensed under the [Creative Commons Attribution 4.0 Unported License](https://creativecommons.org/licenses/by/4.0/legalcode){:target="blank"}. A human-readable version and explanation is available at the [Creative Commons website](https://creativecommons.org/licenses/by/4.0/){:target="blank"}. For information about how to properly credit data use, please review the [Creative Commons FAQ](http://wiki.creativecommons.org/Frequently_Asked_Questions){:target="blank"} or contact the GO Helpdesk.

We ask that when using or citing GO data that the particular release is mentioned. For example, we'd ask that the date (e.g. "2024-01-17") is included where applicable, and optionally the Zenodo DOI (e.g. "10.5281/zenodo.10536401"). Links, where applicable, would be a useful addition for end-users.

### Attribution

According to the terms of GO's [CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/legalcode#s3a1){:target="blank"}, those using our data publicly or redistributing it must provide:

* "identification of the creator(s) of the Licensed Material and any others designated to receive attribution, in any reasonable manner requested by the Licensor (including by pseudonym if designated);"
*  "a copyright notice;"
*  "a notice that refers to this Public License;"
*  "a notice that refers to the disclaimer of warranties;"
*  "a URI or hyperlink to the Licensed Material to the extent reasonably practicable;"

"...in any reasonable manner based on the medium, means, and context...".

For example, if you are offering downloads containing GO data, have a data licensing page in your application, or refer to licensed data in your documentation, an appropriate notice may be:

> [Gene Ontology](https://geneontology.org) data from the [2024-01-17 release](http://release.geneontology.org/2024-01-17) ([DOI:10.5281/zenodo.10536401](https://doi.org/10.5281/zenodo.10536401){:target="blank"}) is made available under the terms of the [CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/legalcode).

For further reading, suggest:

* [Creative Commons Recommended Practices for Attribution](https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution){:target="blank"}
* [Creative Commons FAQ](https://creativecommons.org/faq/){:target="blank"}

### Software

GOC software and tools are under their own licenses; please see their respective homepages for further details.

## GO logo

If you intend to use the logo on your website, please include a link to the GO home page, https://geneontology.org. Please [contact the GO Helpdesk](http://help.geneontology.org) if you need a larger or higher resolution version. The logo is subject to our use and license.

The GO logo is available in four sizes. For reuse, please do not hotlink images, but download them instead (e.g. right click the appropriate image and size, then select "Save Link As"):

| **Mini (and favicon)** | **Small** | **Regular** | **Large** |
|------|-------|---------|-------|
| [![mini logo](/assets/go-logo.mini.png){:width="100"}](/assets/go-logo.mini.png){:target="blank"} | [![small logo](/assets/go-logo.small.png){:width="100"}](/assets/go-logo.small.png){:target="blank"} | [![regular logo](/assets/go-logo.png){:width="100"}](/assets/go-logo.png){:target="blank"} | [![full logo](/assets/go-logo.large.png){:width="100"}](/assets/go-logo.large.png){:target="blank"} |
| [![fav icon](/assets/go-logo-favicon.ico){:width="50"}](/assets/go-logo-favicon.ico){:target="blank"} | [![mini icon](/assets/go-logo-icon.mini.png){:width="50"}](/assets/go-logo-icon.mini.png){:target="blank"} | [![small icon](/assets/go-logo-icon.small.png){:width="50"}](/assets/go-logo-icon.small.png){:target="blank"} | [![regular icon](/assets/go-logo-icon.png){:width="50"}](/assets/go-logo-icon.png){:target="blank"} |

## Website disclaimer

All information on this website is copyright © 1999–2025 Gene Ontology Consortium. Permission to use the information contained in this database was given by the researchers and institutes who contributed or published the information. Users of the data are solely responsible for compliance with any copyright restrictions. Documents from this server are provided "AS-IS" without any warranty, expressed or implied.
