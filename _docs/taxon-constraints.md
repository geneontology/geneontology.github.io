---
title: Taxon constraints in the Gene Ontology
permalink: /docs/ontology-taxon-constraints/
---

# Taxon constraints in the Gene Ontology

GO is intended to cover the full range of species, therefore GO terms are defined to be taxon neutral, avoiding reliance on taxon information for full definition of the given process, function, or component. For certain terms, however, there is obvious implicit taxon specificity, such that the term should only be used to categorize gene products from particular species. Taxon specificity of GO terms is captured using relationships such as "only_in_taxon" and "never_in_taxon". All taxon constraints are inherited by sub-types ("is_a") and parts ("part_of") of the GO term they are applied to (but not "regulates"). Taxon constraints are used to prevent inappropriate annotations from being made. Errors in annotations are automatically detected by looking for inconsistencies between the taxonomic origin of the annotated gene products and the implicit taxon specificity of the GO terms. The inconsistencies are filtered out of the data provided by GO. Taxon constraints are improved (tightened or relaxed) as needed. 
Improvements can be suggested on the [GitHub go-ontology repository]([http://amigo.geneontology.org/amigo/term/GO:0003824](https://github.com/geneontology/go-ontology/issues/new?assignees=&labels=taxon+constraints&template=taxon-constraint-request.md&title=Taxon+constraint%3A+)){:target="blank"}


The taxon constraints are further described in [Deegan, Dimmer and Mungall. BMC Bionformatics (2010)]([http://amigo.geneontology.org/amigo/term/GO:0003824](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3098089/)){:target="blank"}*: Formalization of taxon-based constraints to detect inconsistencies in annotatiton and ontology development. (PMID:20973947).
