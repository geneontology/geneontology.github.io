

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


let elt = document.getElementById("ac");
document.addEventListener("itemSelected", (evt) => {
    let selected = evt.detail.selected;
    // console.log("item selected: ", evt.detail);
    if(selected && selected.id) {
    let ribbon = document.getElementById("ribbon");
    ribbon.subjects += "," + selected.id;
    }
});

function view() {
    var input_enrichment = document.getElementById("ribbon-sandbox-input");
    if(input_enrichment.value.trim() == "") {
        alert("Please provide at least one gene ID");
        return;
    }
    var ids = input_enrichment.value.split("\n");
    var ribbon = document.getElementById("ribbon");
    ribbon.subjects = ids.join(",");
}    