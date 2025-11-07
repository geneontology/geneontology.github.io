---
title: Guidelines and Best Practices for External Resources Using GO 
permalink: /docs/guidelines-external/
---

# Best Practices: <br> Guidelines for Resources Presenting Gene Ontology Predictions & Annotations

This document is aimed at resources external to the GO Consortium who present or use GO data. The following information contains the best practices for Gene Ontology (GO) prediction and annotation, emphasizing the importance of data integrity, specificity in annotations, and adherence to logical constraints. By following these guidelines, researchers can enhance the accuracy and reliability of their GO-related work, ultimately contributing to the quality of biological data representation.

## Data and Ontology Integrity

### Source Data
**Authoritative Source** : Always use up-to-date, authoritative Gene Ontology data. The GO Consortium is the sole reliable source. Avoid third-party data, which may be outdated.

### Ontology Graph
**Latest Version**: Use the latest GO ontology graph (available at https://current.geneontology.org/ontology) for predictions and evaluations.The GO Consortium frequently refactors the Ontology, including adding, removing, and changing the parentage of terms. These changes directly impact annotation propagation and the accuracy of your results. Refer to the GO Consortium stats page for the extent of these changes.

### Obsolete and Do Not Annotate Terms
**Avoid Obsolete Terms**: Do not make predictions to terms that are obsolete or tagged with `do not annotate` in the OBO file. These terms are either uninformative or are being phased out. For example, many single-step biological process (BP) terms like 'protein phosphorylation' are better represented as molecular functions (MF) like 'protein kinase activity'. For a deeper understanding of the reasons behind refactoring and obsoletion, review the latest GO Consortium paper. This will provide essential context for interpreting the Ontology.
* The Gene Ontology Consortium. The Gene Ontology knowledgebase in 2023. Genetics. 2023 May 4;224(1):iyad031. DOI: 10.1093/genetics/iyad031 [abstract | full text]

## Evaluation
### Evidence Codes
**Inclusive Evaluation**: Do not exclude any valid evidence codes (e.g., IEA, IBA) when evaluating against existing data. There is no hierarchy of evidence codes; each provides valuable context.
  Note: The RCA code is being retired due to a high false-positive rate. Annotations to RCA, if any, should be omitted.

## Annotation Prediction
### Specificity
**Targeted Predictions**: Predictions should be as specific as possible. Do not predict a GO term if a more specific annotation already exists for that gene product in the GO hierarchy. Similarly, do not predict every ancestor of a given term; focus on the most informative prediction.

### Logical Constraints
**Taxon Constraints**: Strictly adhere to taxon constraints and understand the difference between in_taxon and never_in_taxon. Taxon constraints propagate down the GO graph.

**Regulation**: Do not predict 'regulation of' a process if the gene is part of that process. A gene product can regulate an activity within a process, but this is a distinct annotation and not a generic 'regulation of BP'.

**`NOT` Qualifiers**: Observe existing annotations with the `NOT` qualifier. This should prevent more specific annotations to those terms.

## Quality Control and Sanity Checks
### False Positives
**Sanity Checks**: Implement sanity checks to identify obvious false positives. For example, a ribosomal protein subunit cannot be annotated to both cytoplasmic ribosome & mitochondrial ribosome, or to both cytoplasmic translation & mitochondrial translation. For InterPro-based annotations, confirm that the relevant family or domain is actually present in the protein. Keep a list of these checks, as there will be many.

### Annotation Blocklist
**Maintain a blocklist**: Keep an annotation blocklist for problematic terms. For example:
* GO:0070062 extracellular exosome: Many annotations to this term may be questionable (and not relevant to fission yeast, they aren't even restricted to secreted proteins)
* Apoptosis: Be aware of problematic annotations to 'apoptotic process', especially if taxon constraints are not applied correctly.

### Output Explainability
**Explainability**: Ensure that all prediction outputs are explainable. This is crucial for transparency and for users to understand the basis of the predictions.

## Additional Considerations
### Phenotype Annotations
**Phenotype Representation**: Some species have a large number of annotations that should be more appropriately represented as phenotypes. While this can be a source of issues, implementing the other rules will help to reduce these. For the rest, you may need additional criteria.
### Understanding the Data
Benchmarking: Ideally, different types of input data should be benchmarked to assess their quality and impact on the prediction model. This provides a more robust and reliable approach.

## Contact Us
If you need clarification or assistance with any of these guidelines, please [contact us](mailto:help@geneontology.org).
