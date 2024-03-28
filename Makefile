.PHONY: _data/gorefs.yaml

_data/gorefs.yaml:
	wget -O $@ https://raw.githubusercontent.com/geneontology/go-site/master/metadata/gorefs.yaml
