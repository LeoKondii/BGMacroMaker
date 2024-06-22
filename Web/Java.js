let counter = 0;
let emailLS = [];
const lista = document.getElementById("LCadastro");
const email = document.getElementById("emailADM");
const nome = document.getElementById("nomeADM");
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
    pesq.value="";
}
function LimparPesquisado(){
    var lista = document.getElementById('LCadastro').getElementsByTagName('li');
    for (var i = lista.length - 1; i >= 0; i--) {
        if (!lista[i].classList.contains("hidden")) {
            var textoItem = lista[i].innerText.trim();

            console.log(lista[i].textContent);

            lista[i].remove();
            var usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];
            console.group('teste');
            console.log(textoItem);
            console.log(usuarios);
            usuarios = usuarios.filter(function(x){
                var objItem = textoItem.split('-');
                return !(objItem[0] == x.nomeUsuario && objItem[1] == x.emailUsuario)
            });
            console.log(usuarios);
            localStorage.setItem("Usuarios", JSON.stringify(usuarios));
            console.groupEnd();
            
                //pesquisaU = pesq.value;
               // let filtered = emailLS.filter(emailLS.contains("pesquisaU"));
            //localStorage.setItem("Usuarios", JSON.stringify(filtered));
        }
    }
    pesq.value="";
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
