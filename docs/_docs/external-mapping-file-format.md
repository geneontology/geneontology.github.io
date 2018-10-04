---
title: External Mapping File Format
permalink: /docs/external-mapping-file-format/
---

# External Mapping File Format

Mappings of GO have been made to other many other classification systems; a full list is available on the Mappings to GO page. This page describes the format of these files.
## Format Specification

The source of the external file is given in the line beginning `!Uses:` `!Uses:http://www.tigr.org/docs/tigr-scripts/egad_scripts/role_reports.spl, 15 aug 2000.`

The line syntax for mappings is:

`external database:term identifier (id/name) > GO:GO term name ; GO:id`

For example:

`TIGR_role:11030 73 Amino acid biosynthesis Glutamate family > GO:glutamine family amino-acid biosynthesis ; GO:0009084`

all on a single line. The relationship between terms from external systems to GO terms can also be one to many; extra lines can be added as follows:

`MultiFun:1.5.1.18 Isoleucine/valine > GO:isoleucine biosynthesis ; GO:0009097`

`MultiFun:1.5.1.18 Isoleucine/valine > GO:valine biosynthesis ; GO:0009099`

If no equivalent GO term exists for a term from another classification system, `GO: .` should be added as a mapping. For example:

`MultiFun:1.5 Building block biosynthesis > GO: .`

