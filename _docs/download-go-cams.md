---
title: Download GO-CAMs
permalink: /docs/download-go-cams/
---

# Download Causal Activity Models

## GO-CAM download links
+ [GO-CAM JSON](https://current.geneontology.org/go-cams/json/) — one JSON file per GO-CAM, in the user-friendly GO-CAM JSON format
+ DEPRECATED [Pathway-like GO-CAMs](http://current.geneontology.org/products/ttl/pathway-like_go-cams.tar.gz) as TTLs



## About GO-CAM formats
+ Available formats:
  + [GO-CAM JSON](https://geneontology.github.io/gocam-py/){:target="blank"}, a user-friendly, LinkML-defined JSON serialization of GO-CAM models. This is the recommended format for most programmatic users; the schema is documented in the [gocam-py documentation](https://geneontology.github.io/gocam-py/){:target="blank"}.
  + DEPRECATED [RDF Turtle (TTL)](https://www.w3.org/TR/turtle/){:target="blank"}, a textual syntax for RDF called Turtle that allows an RDF graph to be completely written in a compact and natural text form, with abbreviations for common usage patterns and datatypes.

**Notes**:
* Individual TTLs (1 TTL for 1 GO-CAM) can also be retrieved from the GitHub repository [noctua-models](https://github.com/geneontology/noctua-models/tree/master/models){:target="blank"}.


## Programmatic access to GO-CAMs
As for any resource in GO, GO-CAMs are accessible through the DOI-versioned release stored in [Zenodo](https://doi.org/10.5281/zenodo.1205159){:target="blank"}.

GO-CAM models can also be retrieved individually, or by taxon or publication, through the [GO API](https://api.geneontology.org/){:target="blank"}. For example, [`/api/gocam-model/{id}`](https://api.geneontology.org/api/gocam-model/5323da1800000002){:target="blank"} returns a single model in GO-CAM JSON format. See [Programmatic Access to Gene Ontology](/docs/tools-guide/#access-go-cam-models) for details.

Advanced users can work with GO-CAM models in Python using the [gocam-py](https://github.com/geneontology/gocam-py){:target="blank"} package, which also defines the GO-CAM JSON schema.

## Error or omission ?
Any errors or omissions in annotations should be reported by writing to the [GO helpdesk](https://help.geneontology.org/){:target="blank"}.
