let amigos = [];
let amigo = document.getElementById('amigo');

function adicionarAmigos() {

    if ( amigo == "") {
        alert("Por favor, insira um nome.");
    } else {
        let str = amigo.value.trim()
        let listaAmigos = amigos.push(str);
        montarLista()
        limparCampo()
    } 
}

function limparCampo() {
    let amigo = document.getElementById('amigo');
    amigo.value = "";
}

function montarLista() {
    let listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');   
        li.textContent = amigos[i];  
        listaAmigos.appendChild(li);
    }  
}
