let counter = 0;
const lista = document.getElementById("LCadastro");
const email = document.getElementById("emailADM");
const nome = document.getElementById("nomeADM");
const emailCa = document.getElementById("emailC");
const nomeCa = document.getElementById("nomeC");
const pesq = document.getElementById("pesquisa");
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
        li.innerHTML= `${nome.value}-${email.value}-${day}/${month}/${year}`;
        lista.appendChild(li);
        let json = JSON.parse(localStorage.getItem("Usuarios")) || [];
        json.push(Usuario);
        localStorage.setItem('Usuarios',JSON.stringify(json));
    }
    email.value="";
    nome.value="";
}

function addListaCadastro(){
    if(emailCa.value ==='' || nomeCa.value===''){
        alert("campos incompletos");
    }else{
        let Usuario={
            nomeUsuario: nomeC.value,
            emailUsuario: emailC.value,
            id: GID(),
        }
        let json = JSON.parse(localStorage.getItem("Usuarios")) || [];
        json.push(Usuario);
        localStorage.setItem('Usuarios',JSON.stringify(json));
    }
    emailCa.value="";
    nomeCa.value="";
}

function carregaLista(){
    let json = JSON.parse(localStorage.getItem("Usuarios")) || [];
    for( var i = 0; i<json.length; i++){
        let li = document.createElement("li");
        li.innerHTML= `${json[i].nomeUsuario}-${json[i].emailUsuario}`;
        lista.appendChild(li);
    }
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
    pesq.value="";
}
function LimparPesquisado(){
    var lista = document.getElementById('LCadastro').getElementsByTagName('li');
    for (var i = lista.length - 1; i >= 0; i--) {
        if (!lista[i].classList.contains("hidden")) {
            var textoItem = lista[i].innerText.trim();
            lista[i].remove();

            var usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];
            usuarios = usuarios.filter(function(x){
                var objItem = textoItem.split('-');
                return !(objItem[0] == x.nomeUsuario && objItem[1] == x.emailUsuario)
            });
            localStorage.setItem("Usuarios", JSON.stringify(usuarios));
        }
    }
    pesq.value="";
    pesquisa(pesq);
}


function pesquisa(campo){
    var pesquisa  = campo.value.toLowerCase();
    var lista     = document.getElementById('LCadastro').getElementsByTagName('li');
    for (var i = 0; i < lista.length; i++) {
        var texto = lista[i].textContent.toLowerCase();
        if (texto.includes(pesquisa)) {
            lista[i].classList.remove("hidden");
        } else {
            lista[i].classList.add("hidden");
        }
    }
}

carregaLista();