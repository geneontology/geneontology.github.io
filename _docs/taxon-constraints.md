---
title: Taxon constraints in the Gene Ontology
permalink: /docs/taxon-constraints/
redirect_from: 
- /cgi-bin/references.cgi
---

# About taxon constraints in the Gene Ontology

GO is intended to cover the full range of species, therefore GO terms are defined to be taxon neutral, avoiding reliance on taxon information for full definition of the given process, function, or component. For certain terms, however, there is implicit taxon specificity, such that the term should only (or never) be used to categorize gene products from particular species. 

Taxon specificity of GO terms is captured using relationships such as `in_taxon` and `never_in_taxon`. All taxon constraints are inherited by sub-types (`is_a`) and parts (`part_of`) of the GO term they are applied to, but are not inherited by `regulates`. Taxon constraints are used to prevent inappropriate annotations from being made. Errors in annotations are automatically detected by looking for inconsistencies between the taxonomic origin of the annotated gene products and the implicit taxon specificity of the GO terms. The inconsistencies are filtered out of the data provided by GO. Taxon constraints are improved (tightened or relaxed) as needed.

## Finding taxon constraints
Taxon constraints are included with every GO release. Find the most recent OBO and OWL versions here:

- [go-computed-taxon-constraints.obo](http://current.geneontology.org/ontology/imports/go-computed-taxon-constraints.obo)
- [go-computed-taxon-constraints.owl](http://current.geneontology.org/ontology/imports/go-computed-taxon-constraints.owl)


Historical versions can be found in the `/ontology/imports/` directory of the [GO release](https://release.geneontology.org/){:target="blank"} of interest. 

Taxon constraints are included in ontology files except go-basic.obo as a property value, e.g. `property_value: RO:0002161 NCBITaxon:40674`. As of September 2024, every GO term that has a taxon constraint (asserted or inferred) will have the taxon constraint directly related in the released ontology. For example, 'GO:0035213 clypeo-labral disc development’ inherits ‘in_taxon Insecta’ from 'GO:0007444 imaginal disc development’; this taxon constraint is now on both terms, rather than just the parent term as in 2024-06-17 and and older releases.

## Taxon groupings (unions)
Sometimes, sets of organisms that a GO term should apply to do not fit neatly in a NCBI taxonomy superclass.  GO has created "union classes" to apply in these situations.  For example, the union class 'Bacteria or Archaea or Viridiplantae or Euglenozoa' captures the set of organisms that carry out photosynthesis (in any form). These classes can be narrowed further if needed by additional taxon constraints- for example, [GO:0009760 C4 photosynthesis](https://amigo.geneontology.org/amigo/term/GO:0009760) is restricted to only [Viridiplantae](http://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?id=33090).

## Finding taxon groupings (unions)
Taxon groupings are in the same `/ontology/imports` directory as the computed taxon constraints file. For the most recent GO release, the OBO and OWL taxon groupings can be found here:

- [go-taxon-groupings.obo](http://current.geneontology.org/ontology/imports/go-taxon-groupings.obo)
- [go-taxon-groupings.owl](http://current.geneontology.org/ontology/imports/go-taxon-groupings.owl)

## Suggest or remove taxon constraints
Improvements can be suggested on the [GitHub go-ontology repository](https://github.com/geneontology/go-ontology/issues/new?assignees=&labels=taxon+constraints&template=taxon-constraint-request.md&title=Taxon+constraint%3A+){:target="blank"}.

## Further reading
- The taxon constraints are further described in [Deegan, Dimmer and Mungall. BMC Bionformatics (2010)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3098089/){:target="blank"}: Formalization of taxon-based constraints to detect inconsistencies in annotation and ontology development. (PMID:20973947)

- Also see [OBO Academy's Guide to Taxon Restrictions](https://oboacademy.github.io/obook/explanation/taxon-constraints-explainer/)
