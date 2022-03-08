---
title: Guide to GO subsets
permalink: /docs/go-subset-guide/
redirect_from: 
- /page/go-subset-guide
- GO.slims.shtml
---

# Guide to GO subsets
## About subsets
##### What are GO subsets?

- GO subsets (also known as GO slims) are cut-down versions of the GO containing a subset of the terms. They are specified by tags within the ontology that indicate if a given term is a member of a particular subset.

##### Why might a GO subset be useful?

- GO subsets are particularly useful for providing an overview of the range of functions and processes found in a given clade or organism's genome. Given a coarse grained view of the ontology content without the detail of the specific fine-grained terms, these slims can offer an overall sense of the key biological functions that are vital to an organism. For example, the limited number of opsin genes in bedbugs, or the abundance of kinins in ticks.
- GO subsets are also useful for addressing specific research needs in particular areas of biology. For instance, if a researcher is only interested in a particular branch of biology, perhaps aging or fruit ripening, they have no need for terms from other branches and can focus solely on those terms under one branch of the ontology.
- GO subsets can also be useful for simplifying searches or annotation operations. By reducing the number of choices a user is presented with their overall efficiency can be improved.

##### Who can create a subset?
- GO provides a generic subset which, like the GO itself, is not species-specific, and which should be suitable for most purposes. In addition, many model organism-specific subsets have been created by [GO consortium members](/docs/go-consortium/) and are available for download as listed below.
- Alternatively, users and user communities can create their own GO subsets. Please contact the [GO helpdesk](http://help.geneontology.org/){:target="blank"} for more information about creating and submitting your GO subsets.

##### How are GO subsets maintained?
- It is up to the people who have created a GO subset to maintain it or not maintain it, if they intend to keep it for reasons of reproducibility. If the developers of a GO subset want to keep it current with the GO they will need to periodically review GO for new terms and other changes.

## Download GO subsets
GO subsets are part of the ontology but can also be downloaded as separated files in the [download ontology section](/docs/download-ontology/#subsets).

## Related tools
- __Map2Slim option in OWLTools__:
Given a GO subset, a current ontology, and specific gene product associations to precise terms from this current ontology, the Map2Slim script will map these term associations up to their respective broader terms from the GO subset. This script is an option of OWLTools, and it can be used to either create a new gene associations file, which contains the same annotations but made to the subset terms; or in count-mode, in which case it will give distinct gene product counts for each subset term. Background information and details on how to download, install, and implement OWLTools, as well as instructions on how to run the Map2Slim script are available from the <a href="https://github.com/owlcollab/owltools/wiki/Map2Slim">OWLTools Wiki</a>{:target="blank"}.

- __On the web__:
Similarly, there are online tools that may be of use including the [Princeton slimming tool](http://go.princeton.edu/){:target="blank"}. It should be noted that online tools do often contain limitations and timeouts.
