---
title: GO RDF-XML File Format
permalink: /docs/go-rdfxml-file-format/
---

# GO RDF-XML File Format

The GO Consortium makes ontology and gene association data available as RDF-XML, which can be downloaded from the [GO database archive](http://archive.geneontology.org/latest-termdb/). The document type definition (DTD) is available from [GO CVS web](http://cvsweb.geneontology.org/cgi-bin/cvsweb.cgi/go/www/xml-dtd/go.dtd) or from the directory go/www/xml-dtd/ in the [GO CVS repository](http://geneontology.org/page/ftp-and-cvs-downloads#cvs).
## Sample data

Here's a GO RDF-XML snapshot (with some lines wrapped for legibility):

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE go:go PUBLIC "-//Gene Ontology//Custom XML/RDF Version 2.0//EN" "http://www.geneontology.org/dtd/go.dtd">
<go:go xmlns:go="http://www.geneontology.org/dtd/go.dtd#"
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
    <rdf:RDF>
        <go:term rdf:about="http://www.geneontology.org/go#GO:0000001">
            <go:accession>GO:0000001</go:accession>
            <go:name>mitochondrion inheritance</go:name>
            <go:synonym>mitochondrial inheritance</go:synonym>
            <go:definition>The distribution of mitochondria, including the
            mitochondrial genome, into daughter cells after mitosis or meiosis,
            mediated by interactions between mitochondria and the cytoskeleton.
            </go:definition>
            <go:is_a rdf:resource="http://www.geneontology.org/go#GO:0048308" />
            <go:part_of rdf:resource="http://www.geneontology.org/go#GO:0009530" />
            <go:negatively_regulates
                rdf:resource="http://www.geneontology.org/go#GO:0006312" />
        </go:term>
        <go:term rdf:about="http://www.geneontology.org/go#GO:0000002">
            <go:accession>GO:0000002</go:accession>
            <go:name>mitochondrial genome maintenance</go:name>
            <go:definition>The maintenance of the structure and integrity of the
            mitochondrial genome; includes replication and segregation of the
            mitochondrial chromosome.</go:definition>
            <go:is_a rdf:resource="http://www.geneontology.org/go#GO:0007005" />
            <go:dbxref rdf:parseType="Resource">
                <go:database_symbol>InterPro</go:database_symbol>
                <go:reference>IPR009446</go:reference>
            </go:dbxref>
            <go:dbxref rdf:parseType="Resource">
                <go:database_symbol>Pfam</go:database_symbol>
                <go:reference>PF06420</go:reference>
            </go:dbxref>
        </go:term>
        <go:term rdf:about="http://www.geneontology.org/go#GO:0000003">
            <go:accession>GO:0000003</go:accession>
            <go:name>reproduction</go:name>
            <go:synonym>GO:0019952</go:synonym>
            <go:synonym>GO:0050876</go:synonym>
            <go:synonym>reproductive physiological process</go:synonym>
            <go:definition>The production by an organism of new individuals that
            contain some portion of their genetic material inherited from that
            organism.</go:definition>
            <go:is_a rdf:resource="http://www.geneontology.org/go#GO:0008150" />
            <go:dbxref rdf:parseType="Resource">
                <go:database_symbol>Wikipedia</go:database_symbol>
                <go:reference>Reproduction</go:reference>
            </go:dbxref>
        </go:term>
...
```

## RDF-XML Format Guide

The basic unit of the GO RDF-XML database is GO:termid. Owing to limitations of the XML id and idref attributes (for instance, multiple parentage cannot be represented), the linking mechanism is RDF. RDF provides a much more flexible system for representing trees. To follow the links, note that term mitochondrion inheritance ; GO:0000001 has the attribute:
```
<go:term rdf:about="http://www.geneontology.org/go#GO:0000001">
```
This is roughly equivalent to:
```
<go:term id="go#GO:0000001">
```
In RDF, URLs are used as IDs to make them universally unique. Now, note that term mitochondrion inheritance ; GO:0000001 has the tag
```
<go:is_a rdf:resource="http://www.geneontology.org/go#GO:0048308" />
```
This tag represents the relationship "GO:0000001 isa GO:0048308", i.e. GO:0000001 is a subtype of GO:0048308. Other types of relationship are also possible; in these cases, isa is substituted with the appropriate string; for example:

```
<go:part_of rdf:resource="http://www.geneontology.org/go#GO:0009530" />
<go:negatively_regulates rdf:resource="http://www.geneontology.org/go#GO:0006312" />
```
These lines show the relationships GO:0000001 part of GO:0009530 and GO:0000001 negatively regulates GO:0006312 respectively. See the GO relations documentation for the different relations used in GO.

In addition, each term can have one go:name, go:accession, go:definition, or multiple go:dbxrefs or go:associations. go:name, go:accession and go:definition are self-explanatory. go:dbxref represents the term in an external database, and go:association represents the gene associations of each term. go:association can have both go:evidence, which holds a go:dbxref to the evidence supporting the association, and a go:gene_product, which has the gene symbol and go:dbxref.
## DTD Download

The RDF-XML DTD is available to download.
