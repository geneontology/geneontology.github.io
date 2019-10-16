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


    // build from http://software.broadinstitute.org/gsea/msigdb/geneset_page.jsp
    list = [

        { "title": "Genes up-regulated during formation of blood vessels/angiogenesis (source: MSigDB)", 
           "data": [ "APOH", "APP", "CND2", "COL3A1", "COL5A2", "CXCL6", "FGFR1", "FSTL1", "ITGAV", "JAG1", "JAG2", "KCNJ8", "LPL", "LRPAP1", "LUM", "MSX1", "NRP1", "OLR1", "PDGFA", "PF4", "PGLYRP1", "POSTN", "PRG2", "PTK2", "S100A4", "SERPINA5", "SLCO2A1", "SPP1", "STC1", "THBD", "TIMP1", "TNFRSF21", "VAV2", "VCAN", "VEGFA", "VTN" ] 
        },

        { "title": "Genes up-regulated by activation of Notch signaling (source: MSigDB)", 
           "data": ["APH1A","ARRB1","CCND1","CUL1","DLL1","DTX1","DTX2","DTX4","FBXW11","FZD1","FZD5","FZD7","HES1","HEYL","JAG1","KAT2A","LFNG","MAML2","NOTCH1","NOTCH2","NOTCH3","PPARD","PRKCA","PSEN2","PSENEN","RBX1","SAP30","SKP1","ST3GAL6","TCF7L2","WNT2","WNT5A"]
        },

        { "title": "Genes up-regulated by activation of WNT signaling through accumulation of beta catenin (source: MSigDB)", 
           "data": ["CTNNB1","ADAM17","AXIN1","AXIN2","CCND2","CSNK1E","CTNNB1","CUL1","DKK1","DKK4","DLL1","DVL2","FRAT1","FZD1","FZD8","GNAI1","HDAC11","HDAC2","HDAC5","HEY1","HEY2","JAG1","JAG2","KAT2A","LEF1","MAML1","MYC","NCOR2","NCSTN","NKD1","NOTCH1","NOTCH4","NUMB","PPARD","PSEN2","PTCH1","RBPJ","SKP2","TCF7","TP53","WNT1","WNT5B","WNT6"]
        },

        { "title": "Genes up-regulated by activation of hedgehog signaling (source: MSigDB)", 
           "data": ["ACHE","AMOT","CDK5R1","CDK6","CELSR1","CNTFR","CRMP1","DPYSL2","ETS2","GLI1","GPR56","HEY1","HEY2","L1CAM","LDB1","MYH9","NF1","NKX6-1","NRCAM","NRP1","NRP2","OPHN1","PLG","PML","PTCH1","RASA1","RTN1","SCG2","SHH","SLIT1","THY1","TLE1","TLE3","UNC5C","VEGFA","VLDLR"]
        }
        
    ]

    currentPos = Math.round(Math.random() * list.length)

    nextList = function() {
        currentPos = currentPos >= list.length - 1 ? 0 : currentPos + 1;
        return list[currentPos];
    }

    setExample = function() {
        var input_enrichment = document.getElementById("landing_gene_input");
        var input_hint = document.getElementById("input_hint")
        if(input_enrichment) {
            var list = nextList();
            input_enrichment.textContent = list.data.join("\n")
            input_hint.textContent = "Gene set example: " + list.title.toLowerCase();
        }
    }


    const Http = new XMLHttpRequest();
    const go_stats_summary = "http://current.geneontology.org/release_stats/go-stats-summary.json";
    Http.open("GET", go_stats_summary);
    Http.send();
    Http.onreadystatechange=(e)=>{
        if(e.target.status == 200 && Http.responseText != "") {
            var data = JSON.parse(Http.responseText)
            var elt = document.getElementById("id_release_date");
            if(elt) elt.textContent=data.release_date.toLocaleString();
            elt = document.getElementById("id_terms");
            if(elt) elt.textContent=data.ontology.valid_terms.toLocaleString();
            elt = document.getElementById("id_annotations");
            if(elt) elt.textContent=data.annotations.total.toLocaleString();
            elt = document.getElementById("id_geneproducts");
            if(elt) elt.textContent=data.bioentities.total.toLocaleString();
            elt = document.getElementById("id_species");
            if(elt) elt.textContent=data.taxa.total.toLocaleString();
        }
    }

    // const release_date_url = ""
    // const amigo_goterms_url = "http://golr-aux.geneontology.io/solr/select?fq=document_category:%22ontology_class%22&q=*:*&fq=id:GO%5C:*&fq=is_obsolete:false&fl=id&rows=0&wt=json"
    // const amigo_annotations_and_species_url = "http://golr-aux.geneontology.io/solr/select?fq=document_category:%22annotation%22&q=*:*&rows=0&fq=annotation_class:GO%5C:*&wt=json&facet=true&facet.field=taxon&facet.limit=100000&facet.mincount=1"

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
