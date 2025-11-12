!/usr/bin/env python3
!"""
!Update downloads.html with organism metadata from goex.yaml
!Usage: python3 update_downloads.py
!"""

import urllib.request
import sys


def parse_yaml_simple(yaml_text):
    """Simple YAML parser for the goex.yaml structure"""
    organisms = []
    current_org = None

    for line in yaml_text.split('\n'):
        line = line.rstrip()
        if not line or line.startswith('#'):
            continue

        # Start of organisms list
        if line.strip() == 'organisms:':
            continue

        # New organism entry
        if line.startswith('  - '):
            if current_org:
                organisms.append(current_org)
            current_org = {}
            # Parse the first field
            key_value = line[4:].split(':', 1)
            if len(key_value) == 2:
                key = key_value[0].strip()
                value = key_value[1].strip()
                current_org[key] = value
        elif line.startswith('    ') and current_org is not None:
            # Continuation of current organism
            key_value = line.strip().split(':', 1)
            if len(key_value) == 2:
                key = key_value[0].strip()
                value = key_value[1].strip()
                current_org[key] = value

    # Add last organism
    if current_org:
        organisms.append(current_org)

    return organisms


def download_goex_yaml():
    """Download goex.yaml from GitHub"""
    url = 'https://raw.githubusercontent.com/geneontology/go-site/master/metadata/goex.yaml'
    print(f'Downloading {url}...', file=sys.stderr)

    with urllib.request.urlopen(url) as response:
        return response.read().decode('utf-8')


def get_taxonomic_group_name(ncbi_taxon_id):
    """Map NCBITaxon ID to common taxonomic group name"""
    # Mapping of NCBITaxon IDs to common names
    taxon_map = {
        'NCBITaxon:2': 'Bacteria',
        'NCBITaxon:2157': 'Archaea',
        'NCBITaxon:2759': 'Eukaryota',
        'NCBITaxon:4751': 'Fungi',
        'NCBITaxon:4762': 'Oomycetes',
        'NCBITaxon:6072': 'Invertebrates',
        'NCBITaxon:6231': 'Nematodes',
        'NCBITaxon:6656': 'Arthropods',
        'NCBITaxon:7742': 'Vertebrates',
        'NCBITaxon:33090': 'Plants',
        'NCBITaxon:33208': 'Metazoa',
        'NCBITaxon:33630': 'Alveolata',
        'NCBITaxon:554915': 'Amoebozoa',
        'NCBITaxon:10239': 'Viruses',
    }

    return taxon_map.get(ncbi_taxon_id, ncbi_taxon_id)


def generate_table_row(org, code):
    """Generate a single table row for an organism"""
    full_name = org.get('full_name', '')
    common_name = org.get('common_name_goc', '') or org.get('common_name_uniprot', '')
    taxonomic_group_id = org.get('taxonomic_group', '')
    taxonomic_group = get_taxonomic_group_name(taxonomic_group_id)

    return f'''        <tr>
          <td>{full_name}</td>
          <td>{common_name}</td>
          <td>{taxonomic_group}</td>
          <td><a href="https://skyhook.geneontology.io/pipeline-from-goa/main/annotations/{code}.gaf.gz">{code}.gaf.gz</a></td>
          <td><a href="https://skyhook.geneontology.io/pipeline-from-goa/main/annotations/{code}-uniprot.gaf.gz">{code}-uniprot.gaf.gz</a></td>
          <td><a href="https://ftp.ebi.ac.uk/pub/contrib/goa/goex/current/gpi/{code}.gpi.gz">{code}.gpi.gz</a></td>
        </tr>'''


def generate_tables(organisms):
    """Generate both Common Model Organisms and All Organisms tables"""

    # Define common model organisms
    common_organisms = [
        'CAEEL',  # Caenorhabditis elegans
        'DANRE',  # Danio rerio
        'DROME',  # Drosophila melanogaster
        'HUMAN',  # Homo sapiens
        'MOUSE',  # Mus musculus
        'RAT',    # Rattus norvegicus
        'YEAST',  # Saccharomyces cerevisiae
        'SCHPO',  # Schizosaccharomyces pombe
        'XENLA',  # Xenopus laevis
    ]

    # Sort organisms by full_name
    organisms_sorted = sorted(organisms, key=lambda x: x.get('full_name', ''))

    # Generate Common Model Organisms table
    common_rows = []
    for org in organisms_sorted:
        code = org.get('code_uniprot', '')
        if code in common_organisms:
            common_rows.append(generate_table_row(org, code))

    common_table = f'''  <h2>Common Model Organisms</h2>
  <div class="table-responsive">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Organism</th>
          <th>Common Name</th>
          <th>Taxonomic Group</th>
          <th>MOD ID-centric File</th>
          <th>UniProt ID-centric File</th>
          <th>GPI File</th>
        </tr>
      </thead>
      <tbody>
{chr(10).join(common_rows)}
      </tbody>
    </table>
  </div>'''

    # Generate All Organisms table
    all_rows = []
    for org in organisms_sorted:
        code = org.get('code_uniprot', '')
        if code:
            all_rows.append(generate_table_row(org, code))

    all_table = f'''
  <h2>All Organisms</h2>
  <div class="table-responsive">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Organism</th>
          <th>Common Name</th>
          <th>Taxonomic Group</th>
          <th>MOD ID-centric File</th>
          <th>UniProt ID-centric File</th>
          <th>GPI File</th>
        </tr>
      </thead>
      <tbody>
{chr(10).join(all_rows)}
      </tbody>
    </table>
  </div>'''

    return common_table + all_table


def generate_downloads_html(new_tables, output_file='downloads.html'):
    """Generate complete downloads.html file"""

    html_content = f'''---
layout: default
title: Downloads
---

<div class="container">
  <h1>GO Annotation Downloads</h1>

  <h2>Overview</h2>
  <p>Gene association files ingested from GO Consortium members are shown in the table below. These files follow the GO annotation format and are compressed using gzip. Please consult the upstream resource information for additional context. If you find any annotation errors, please report them through the <a href="http://help.geneontology.org/">GO Helpdesk</a>.</p>

  <h2>Filtered Files</h2>
  <p>The files shown below are taxon-specific files created through collaborative efforts, particularly from model organism database groups. All the files in this table have been filtered using the annotation file QC pipeline. A critical filtering requirement restricts particular organism IDs to specific authorized projects. The current list of authoritative groups and major model organisms can be found in the tables below.</p>

{new_tables}
</div>

<style>
  .container {{
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }}

  h1 {{
    margin-bottom: 30px;
  }}

  h2 {{
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 1.5em;
  }}

  p {{
    margin-bottom: 20px;
    color: #666;
    line-height: 1.6;
  }}

  .table-responsive {{
    overflow-x: auto;
  }}

  table {{
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }}

  th {{
    background-color: #f8f9fa;
    font-weight: bold;
    text-align: left;
    padding: 12px;
    border-bottom: 2px solid #dee2e6;
    position: sticky;
    top: 0;
  }}

  td {{
    padding: 10px 12px;
    border-bottom: 1px solid #dee2e6;
  }}

  tr:hover {{
    background-color: #f8f9fa;
  }}

  a {{
    color: #007bff;
    text-decoration: none;
  }}

  a:hover {{
    text-decoration: underline;
  }}
</style>
'''

    print(f'Writing {output_file}...', file=sys.stderr)
    with open(output_file, 'w') as f:
        f.write(html_content)

    print(f'Successfully generated {output_file}', file=sys.stderr)


def main():
    """Main function"""
    try:
        # Download YAML
        yaml_content = download_goex_yaml()

        # Parse YAML
        print('Parsing YAML...', file=sys.stderr)
        organisms = parse_yaml_simple(yaml_content)
        print(f'Found {len(organisms)} organisms', file=sys.stderr)

        # Generate tables
        print('Generating tables...', file=sys.stderr)
        new_tables = generate_tables(organisms)

        # Generate downloads.html
        generate_downloads_html(new_tables)

    except Exception as e:
        print(f'Error: {e}', file=sys.stderr)
        sys.exit(1)


if __name__ == '__main__':
    main()
