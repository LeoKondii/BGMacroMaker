let counter = 0;
let counter2 = 0;
let nomesLS = [];
let emailLS = [];

function AddUsuario{
    let usuario = {
        nome: nomeUsuario.value,
        id: IDGenerator(),
    }
    adicionarNome(usuario);
}

function AddEmail{
    let email = {
        email: emailUsuario.value,
        id: IDGenerator2(),
    }
    adicionarEmail(email);
}

function adicionarNome(usuario) {
    nomesLS.push(usuario);
    localStorage.setItem('Nome',JSON.stringify(nomesLS));
}

function adicionarEmail(email) {
    emailLS.push(email);
    localStorage.setItem('email',JSON.stringify(emailLS));
}

function IDGenerator(){
    counter++;
    return counter;
}

function IDGenerator2(){
    counter2++;
    return counter2;
}

function LimparLS(){
    localStorage.clear;
}

function Remover(){
    emailLS.splice(index, 1);
    localStorage.setItem('email', JSON.stringify(emailLS));
}