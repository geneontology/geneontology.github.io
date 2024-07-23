---
title: Download GO-CAMs
permalink: /docs/download-go-cams/
---

# Download Causal Activity Models

## GO-CAM download links
+ [Pathway-like GO-CAMs](http://current.geneontology.org/products/ttl/pathway-like_go-cams.tar.gz) as TTLs

<!--- + [GO-CAM TTLs](https://s3.amazonaws.com/geneontology-public/gocam/GO-CAMs.ttl.zip) --->
+ [GO-CAM JNL](http://current.geneontology.org/products/blazegraph/blazegraph-production.jnl.gz)
+ [GO-CAM SIFs](https://s3.amazonaws.com/geneontology-public/gocam/GO-CAMs.sif.zip)



## About GO-CAM formats
+ Available formats:
  + [RDF Turtle (TTL)](https://www.w3.org/TR/turtle/){:target="blank"}, a textual syntax for RDF called Turtle that allows an RDF graph to be completely written in a compact and natural text form, with abbreviations for common usage patterns and datatypes.
  + [BlazeGraph Journal (JNL)](https://www.blazegraph.com/){:target="blank"}, The graph store for GO-CAMs using Blazegraph; this data product is currently deprecated. See also the [GO and RDF/SPARQL guide](/docs/sparql)
  + [Simple Interaction Format (SIF)](http://manual.cytoscape.org/en/stable/Supported_Network_File_Formats.html#sif-format){:target="blank"}, a format convenient for building a graph from a list of interactions.

**Notes**:
* Individual TTLs (1 TTL for 1 GO-CAM) can also be retrieved from the GitHub repository [noctua-models](https://github.com/geneontology/noctua-models/tree/master/models){:target="blank"}.
* When using SIFs with [Cytoscape](https://cytoscape.org/){:target="blank"}, we also provide a [gocam-styles.xml](https://s3.amazonaws.com/geneontology-public/gocam/gocam-styles.xml). Read more in the [GO-CAM documentation](/docs/gocam-overview/#visualization-in-cytoscape).

## Programmatic access to GO-CAMs
As for any resource in GO, GO-CAMs are accessible through the DOI-versioned release stored in [Zenodo](https://doi.org/10.5281/zenodo.1205159){:target="blank"}.

## Error or omission ?
Any errors or omissions in annotations should be reported by writing to the [GO helpdesk](https://help.geneontology.org/){:target="blank"}.
