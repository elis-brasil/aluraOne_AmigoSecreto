let amigos = [];
let amigo = document.getElementById('amigo');
//let amigo = document.querySelector('input');

function adicionarAmigos() {

    if ( amigo == "") {
        alert("Por favor, insira um nome.");
    } else {
        let listaAmigos = amigos.push(amigo).toString();
        limparCampo()
        console.log(listaAmigos);
    } 
}

function limparCampo() {
    let amigo = document.getElementById('amigo');
    amigo.value = "";
}
