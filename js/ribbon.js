

gene_list = [

    {
        "title": "N/A",
        "data": ["RGD:3889"]
    },

    {
        "title": "N/A",
        "data": ["UniProtKB:Q9BYF1", "UniProtKB:O15393"]
    },

    {
        "title": "N/A",
        "data": ["RGD:2139"]
    },

    {
        "title": "N/A",
        "data": ["RGD:3017"]
    }

]

currentPos = Math.round(Math.random() * gene_list.length)

function nextExample() {
    currentPos = currentPos >= gene_list.length - 1 ? 0 : currentPos + 1;
    return gene_list[currentPos];
}

function getExample() {
    var input_enrichment = document.getElementById("ribbon-sandbox-input");

    if (input_enrichment) {
        var list = nextExample();
        input_enrichment.value = list.data.join("\n")
    }
}

function view() {
    var input_enrichment = document.getElementById("ribbon-sandbox-input");
    var ids = input_enrichment.value.split("\n");
    loadRibbonStrips(ids);
}

var baseAPIURL = "http://api.geneontology.org/api";

async function loadRibbonStrips(subjects) {
    document.getElementById("ribbon-strips").innerHTML = "";
    document.getElementById("ribbon-table").innerHTML = "";
    
    subjects = subjects.join("&subject=");
    var query = baseAPIURL + '/ontology/ribbon/?subset=goslim_agr&subject=' + subjects;
    
    // fetch the json data
    var response = await fetch(query);
    var data = await response.json();

    // create the ribbon strips element
    var element = await document.createElement("wc-ribbon-strips");
    element.setAttribute("data", JSON.stringify(data));
    element.setAttribute("binary-color", "false");
    element.setAttribute("category-all-style", 1);
    element.setAttribute("new-tab", "true");
    element.setAttribute("selection-mode", 0);
    element.setAttribute("subject-position", 1);
    element.setAttribute("fire-event-on-empty-cells", false);
    
    element.setAttribute("show-other-group", true);
    element.setAttribute("add-cell-all", true);
    
    await document.getElementById("ribbon-strips").appendChild(element);

    // add a listener whenever a cell is clicked
    document.addEventListener('cellClick', function hideMenu(e, v) {
        console.log('Cell Clicked', e.detail);
        loadAssociations(e.detail);
    });

    // add a listener whenever a group is clicked
    document.addEventListener('groupClick', function hideMenu(e, v) {
        console.log('Group Clicked', e.detail);
    });
}


async function loadAssociations(details) {
    var group = details.group;
    var group_ids, group_labels;

    var subject_ids = details.subjects.map(elt => elt.id);
    var subject_labels = details.subjects.map(elt => elt.label);

    if (group == 'all') {
        // var groups = this.state.ribbon.categories.map(elt => {
        //   return elt.id;
        // });
        // group = groups.join('&slim=');
        // } else if (group instanceof Array) {
        //   group_id = group.join('&slim=');
    } else {
        group_ids = group.id;
        group_labels = group.label;
    }

    let tableElement = document.getElementById("ribbon-table");
    tableElement.innerHTML = "<wc-spinner spinner-style='default' spinner-color='blue'></wc-spinner>"

    subject_ids = subject_ids.join('&subject=');
    var query = baseAPIURL + '/bioentityset/slimmer/function?slim=' + group_ids + '&subject=' + subject_ids + '&rows=-1';
    console.log("query: ", query);

    // fetch the json data
    var response = await fetch(query);
    var data = await response.json();

    console.log("Data fetched: ", data);

    // create the ribbon strips element
    var element = await document.createElement("wc-ribbon-table");
    element.setAttribute("bio-link-data", JSON.stringify(data));
    element.setAttribute("group-by", "term,qualifier");
    element.setAttribute("hide-columns", "qualifier,aspect");
    
    tableElement.innerHTML = "<h3>Annotations for <b>" + group_labels + "</b> and <b>" + subject_labels.join(", ") + "</b> gene(s)</h3>";
    await document.getElementById("ribbon-table").appendChild(element);

}

