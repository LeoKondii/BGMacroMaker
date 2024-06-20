let counter = 0;
let nomesLS = [];

function AddUsuario{
    let usuario = {
        nome: nomeUsuario.value,
        id: IDGenerator(),
    }
    adicionarNome(usuario);
}

function adicionarNome(usuario) {
    nomesLS.push(usuario);
    localStorage.setItem('Nome',JSON.stringify(nomesLS));
}

function IDGenerator(){
    counter++;
    return counter;
}