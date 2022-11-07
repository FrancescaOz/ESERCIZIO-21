//variabili globali//
var btn = document.getElementById('bottone');
var dati = [];//array del documento

//creo l'oggetto//
function DatiForm(_nome, _cognome, _eta) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.eta = _eta;
};

window.addEventListener('DOMContentLoaded', init);

function init() {
    if (dati.length > 0) {
        stampaDati();
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let newNome = document.getElementById('nome').value;
    let newCognome = document.getElementById('cognome').value;
    let newEta = document.getElementById('eta').value;


    let newDati = new DatiForm(newNome, newCognome, newEta);

    if ((newNome == '' || newNome == 'undefined') || (newCognome == '' || newCognome == 'undefined') || (newEta == '' || newEta == 'undefined')) {
        document.getElementById('error').innerHTML = '**Attenzione, convalidare tutti i campi';
        return;
    } else {

        dati.push(newDati);
        stampaDati();
        cancellaForm();
    }

})

function stampaDati() {
    let lista = document.getElementById('lista');
    lista.innerHTML = '';
    var userinput = document.getElementById('eta').value;
    var eta = new Date(userinput);

    //calcula i mesi di differenza dalla data corrente
    var month_diff = Date.now() - eta.getTime();
    //converte il calcolo in una data
    var age_dt = new Date(month_diff);
    //estrapola l'annno dal risultato   
    var year = age_dt.getUTCFullYear();
    //ora calcola l'età dell'utente
    var age = Math.abs(year - 1970);
    lista.innerHTML += `<tr><th class="w-30 bg bg-primary bg-opacity-10">${nome.value}</th><th class="w-30 bg bg-primary bg-opacity-10">${cognome.value}</th><th class="w-30 bg bg-primary bg-opacity-10">${age}</th></tr>`

}

function cancellaForm() {
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('eta').value = '';
}