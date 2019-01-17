---
title: GO enrichment analysis
permalink: /docs/go-enrichment-analysis/
redirect_from: /page/go-enrichment-analysis/
---

# GO enrichment analysis

One of the main uses of the GO is to perform enrichment analysis on gene sets. For example, given a set of genes that are up-regulated under certain conditions, an enrichment analysis will find which GO terms are over-represented (or under-represented) using annotations for that gene set.
## Enrichment analysis tool

Users can perform enrichment analyses directly from the [home page of the GOC website](http://geneontology.org/). This service connects to the analysis tool from the [PANTHER Classification System](http://pantherdb.org/){:target="_blank"}, which is maintained up to date with GO annotations. The PANTHER classification system is explained in great detail in [Mi H et al, PMID: 23868073](https://www.ncbi.nlm.nih.gov/pubmed/23868073){:target="_blank"}. The [list of supported gene IDs](http://www.pantherdb.org/tips/tips_batchIdSearch_supportedId.jsp){:target="_blank"} is available from the PANTHER website.

### Using the GO enrichment analysis tools

**1. Paste or type the names of the genes to be analyzed, one per row or separated by a comma.** The tool can handle both MOD specific gene names and UniProt IDs (e.g. Rad54 or P38086).

**2. Select the GO aspect (molecular function, biological process, cellular component) for your analysis** (biological process is default).

**3. Select the species your genes come from** (Homo sapiens is default).

**4. Press the submit button. Note that you will be able to upload a REFERENCE (aka "background") LIST at a later step.**

**5. You will be redirected to the results on the PANTHER website.** These results are based on enrichment relative the set of all protein-coding genes in the genome you selected in step 3.

**6. (optional but HIGHLY RECOMMENDED) Add a custom REFERENCE LIST and re-run the analysis.** Press the **"change"** button on the "Reference list" line of the PANTHER analysis summary at the top of the results page, upload the reference list file, and press the **"Launch analysis"** button to re-run the analysis. The reference list should be the list of all the genes from which your smaller analysis list was selected. For example, in a list of differentially expressed genes, the reference list should only contain genes that were detected at all in the experiment, and thus potentially could have been on a list of genes derived from the experiment.

### Interpreting the results table
The results page displays a table that lists **significant shared GO terms (or parents of GO terms)** used to describe the set of genes that users entered on the previous page, the **background frequency**, the **sample frequency**, **expected p-value**, an indication of **over/underrepresentation** for each term, and **p-value**. In addition, the results page displays all the criteria used in the analysis. Any unresolved gene names will be listed on top of the table.

#### Background frequency and sample frequency
*Background frequency* is the number of genes annotated to a GO term in the entire background set, while *sample frequency* is the number of genes annotated to that GO term in the input list. For example, if the input list contains 10 genes and the enrichment is done for biological process in S. cerevisiae whose background set contains 6442 genes, then if 5 out of the 10 input genes are annotated to the GO term: DNA repair, then the sample frequency for DNA repair will be 5/10. Whereas if there are 100 genes annotated to DNA repair in all of the S. cerevisiae genome, then the background frequency will be 100/6442.

#### Overrepresented or underrepresented
The symbols + and - indicate over or underrepresentation of a term.

#### P-value
*P-value* is the probability or chance of seeing at least x number of genes out of the total n genes in the list annotated to a particular GO term, given the proportion of genes in the whole genome that are annotated to that GO Term. That is, the GO terms shared by the genes in the user's list are compared to the background distribution of annotation. The closer the p-value is to zero, the more significant the particular GO term associated with the group of genes is (i.e. the less likely the observed annotation of the particular GO term to a group of genes occurs by chance).

In other words, when searching the process ontology, if all of the genes in a group were associated with "DNA repair", this term would be significant. However, since all genes in the genome (with GO annotations) are indirectly associated with the top level term "biological_process", this would not be significant if all the genes in a group were associated with this very high level term.
## External tools
There are a number of different tools that provide enrichment capabilities. Some of these are web-based, others may require the user download an application or install a local environment. Tools differ in the algorithms they use, and the statistical tests they perform.

Some other examples of enrichment tools are:

* [gProfiler](http://biit.cs.ut.ee/gprofiler/)
* [BiNGO](https://www.psb.ugent.be/cbd/papers/BiNGO/Home.html)
* [Ontologizer](http://ontologizer.de)
* [GOrilla](http://cbl-gorilla.cs.technion.ac.il/)

