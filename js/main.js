$(function() {

    // $('.collapse').collapse('hide');
    $('.list-group-item.active').parent().parent('.collapse').collapse('show');


    var pages = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
        // datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,

        prefetch: baseurl + '/search.json'
    });

    $('#search-box').typeahead({
        minLength: 0,
        highlight: true
    }, {
        name: 'pages',
        display: 'title',
        source: pages
    });

    $('#search-box').bind('typeahead:select', function(ev, suggestion) {
        window.location.href = suggestion.url;
    });


    // Markdown plain out to bootstrap style
    $('#markdown-content-container table').addClass('table');
    $('#markdown-content-container img').addClass('img-responsive');



    var form = $('form[name="form-search"]'),
        radio = $('input[name="searchtype"]'),
        choice = '';

    radio.change(function(e) {
		choice = this.value;
		
        console.log("receive input: ", e);
        console.log("form: ", form);

        if (choice === 'ontology') {
			form.attr('action', 'http://amigo.geneontology.org/amigo/search/ontology');
		} else if(choice == 'geneproduct') {
			form.attr('action', 'http://amigo.geneontology.org/amigo/search/bioentity');			
        } else {
            form.attr('action', 'http://amigo.geneontology.org/amigo/medial_search');
        }
    });


    const Http = new XMLHttpRequest();
    const url='https://s3.amazonaws.com/geneontology-public/go-meta.json';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
        var data = JSON.parse(Http.responseText)
        document.getElementById("id_release_date").textContent=data.release_date.toLocaleString();
        document.getElementById("id_terms").textContent=data.terms.toLocaleString();
        document.getElementById("id_annotations").textContent=data.annotations.toLocaleString();
        document.getElementById("id_geneproducts").textContent=data.geneproducts.toLocaleString();
        document.getElementById("id_species").textContent=data.species.toLocaleString();
    }

    const release_date_url = ""
    const amigo_goterms_url = "http://golr-aux.geneontology.io/solr/select?fq=document_category:%22ontology_class%22&q=*:*&fq=id:GO%5C:*&fq=is_obsolete:false&fl=id&rows=0&wt=json"
    const amigo_annotations_and_species_url = "http://golr-aux.geneontology.io/solr/select?fq=document_category:%22annotation%22&q=*:*&rows=0&fq=annotation_class:GO%5C:*&wt=json&facet=true&facet.field=taxon&facet.limit=100000&facet.mincount=1"

    // Http.open("GET", amigo_goterms_url);
    // Http.send();
    // Http.onreadystatechange=(e)=>{
    //     var data = JSON.parse(Http.responseText)
    //     document.getElementById("nb-goterms").textContent = data.response.numFound.toLocaleString();
    // }

    // Http.open("GET", amigo_annotations_and_species_url);
    // Http.send();
    // Http.onreadystatechange=(e)=>{
    //     var data = JSON.parse(Http.responseText)
    //     document.getElementById("nb-goannotations").textContent = data.response.numFound.toLocaleString();
    //     document.getElementById("nb-gospecies").textContent = data.facet_counts.facet_fields.length.toLocaleString();
    // }


});
