let counter = 0;
let counter2 = 0;
let nomesLS = [];
let emailLS = [];
const lista = document.getElementById("LCadastro");
const email = document.getElementById("emailADM");
const nome = document.getElementById("nomeADM");

function addLista(){
    let li = document.createElement("li");
    li.innerText=nome.value;
    lista.appendChild(li);
}