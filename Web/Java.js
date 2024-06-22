let counter = 0;
let nomesLS = [];
let emailLS = [];
const lista = document.getElementById("LCadastro");
const email = document.getElementById("emailADM");
const nome = document.getElementById("nomeADM");
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');

function addLista(){
    if(email.value ==='' || nome.value===''){
        alert("campos incompletos");
    }else{
    let li = document.createElement("li");
    let Usuario={
        nomeUsuario: nomeADM.value,
        emailUsuario: emailADM.value,
        id: GID(),
    }
    li.innerHTML=nome.value+'-'+email.value+'-'+`${day}/${month}/${year} `;
    lista.appendChild(li);
    emailLS.push(Usuario);
    localStorage.setItem('Usuarios',JSON.stringify(emailLS));
    }
    email.value="";
    nome.value="";
}

function GID(){
    counter++;
    return counter;
}

function limpaLista(){
    document.getElementById("nomeADM").value = "";
    document.getElementById("emailADM").value = "";
}

function LimparLS(){
    localStorage.clear();
    document.getElementById("LCadastro").innerHTML = "";
}

function remover(){
    var lista = document.getElementById("LCadastro");
    var cadastro = document.getElementById("x");
    var y = document.getElementById(cadastro.value);
    lista.removeChild(y)
    localStorage.removeItem(y)
}