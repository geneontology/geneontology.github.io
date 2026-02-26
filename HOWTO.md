# Guidelines for Editing the Site

## Set the local url of a page

The actual link of the page you are creating is defined by the `permalink` field in each markdown file.
For instance, the current `permalink`of the [About Page](https://github.com/geneontology/geneontology.github.io/blob/master/_docs/about.md) is `/docs/about/`

In essence, the `permalink` defines the local url for users to access this site (the `/doc/about/` example would transcribe in `https://geneontology.github.io/docs/about/`)

## Reference a local page

Whenever you want to create a link to one of the above local page, use the `permalink` of the page you want to reference (e.g. in any markdown, to reference the [About Page](https://github.com/geneontology/geneontology.github.io/blob/master/_docs/about.md), the link is:
`[description of the link](/docs/about/)`

## Reference a page and open it in a new tab
`[link description](https://wiki.geneontology.org/index.php/Introduction_to_Annotation){:target="_blank"}`

As a general rule, all internal pages should open in the same tab and all external pages we reference should open in a new tab

## Integrate an external image
`![link description](https://wallpaperstudio10.com/wallpaper-download-197580-1024x640.jpg)`

## Integrate a local image
`![link description](/assets/my_image_name.jpg)`

## Highlight text
Use simple [backquote](https://www.computerhope.com/jargon/b/backquot.htm) to `highlight` any text

## Highlight code
Use triple backquote for the start line, without anything else, and an identical triple backquote for the endline (also with nothing else on the line)
```
pyvenv venv
source venv/bin/activate
pip install -r requirements.txt
export PYTHONPATH=.:$PYTHONPATH
python biolink/app.py
```

## Line breaks
Use a simple `---`

## Adding references and foonotes
You can reference a footnote by:
* adding a `[^1]` in the text where you want the reference to be displayed
* adding at the end of your markdown file the actual footnote e.g. `[^1]: My awesome footnote`

## Create table
Always add a clean line before and after the markdown table. Example:

|Organism or Usage |	OBO format | OWL format | json format |yaml format |
|------------------|-------------|------------|-------------|------------|
|GO slim AGR Developed by GO Consortium for the [Alliance of Genomes Resources](https://www.alliancegenome.org/) |[goslim_agr.obo](https://current.geneontology.org/ontology/subsets/goslim_agr.obo)| [goslim_agr.owl]

## Quote a line
To quote a line, start the line with a `>`
> this is a quoted line

## Search functionalities
If you want your page to be searchable, add `tags` in the [front matter](http://assemble.io/docs/YAML-front-matter.html) of each page with the following syntax:
```
tags: ['go', 'ontology', 'relation']
```

## Additional Comments
* the sitemap used to populate the navigation bar is located in `_data/docs.yml`
* images from geneontology.org that you want to reuse should be stored here: [https://github.com/geneontology/geneontology.github.io/tree/master/assets](https://github.com/geneontology/geneontology.github.io/tree/master/assets)
* we want to lower the data transfer as much as possible (faster site & soft github limit of 100GB / month). To achieve that:
  * whenever possible, prefer JPEG files. PNG files should be used only when you need some transparency
  * if images have unreasonable sizes, we can run an algorithm to automatically resize them (e.g. with respect to possible data transfer limit)

## Viewing your changes
All changes made on the master branch of this repository should reflect after a few seconds on [https://geneontology.github.io](https://geneontology.github.io).

When this site is deployed in production, it will also be accessible through the usual [https://geneontology.org](https://geneontology.org)

## Search capabilities
Site search is powered by [Pagefind](https://pagefind.app/), a static search engine that runs entirely client-side. The search index is generated automatically during the GitHub Actions build — no manual indexing step is needed.


## Other useful links
* [GitHub markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/)
* [Bootstrap templates](https://getbootstrap.com/docs/3.3/getting-started/)
* [Jekyll documentation](https://jekyllrb.com/docs/)
* [Jekyll cheatsheet](https://devhints.io/jekyll)
* [GitHub Jekyll basics](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)
