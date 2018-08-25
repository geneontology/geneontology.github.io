---
layout: post
title:  "Announcement: Change in GO xrefs to Reactome"
author: cjmungall
---

The GO is changing the identifiers used in Reactome cross-references (xrefs).


Currently we create xrefs IDs of the form "Reactome:REACT_XXXXX". These will be changed to canonical Reactome xrefs of the form Reactome:R-HSA-YYYYYY. An additional change is that we will only include xrefs to the human reaction, and will not include xrefs propagated to other species (let us know if you need these, and we can provide a method for obtaining these from Reactome).

You can find more details and add any comments to this GitHub pull request
<a href="https://github.com/geneontology/go-ontology/pull/15921">https://github.com/geneontology/go-ontology/pull/15921</a>

This will take effect on the August version of GO. If you need to access a frozen version with the old IDs in place you can use version URLs such as:

* http://purl.obolibrary.org/obo/go/releases/2018-06-01/go.obo
* http://purl.obolibrary.org/obo/go/releases/2018-06-01/go.owl
