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


});
