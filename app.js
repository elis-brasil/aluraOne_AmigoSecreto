let amigos = [];
let amigo = document.getElementById("amigo");

function adicionarAmigos() {
    if (amigo.value.trim() === "") {
        alert("Por favor, insira um nome.");
    } else {
        let str = amigo.value.trim();
        amigos.push(str);
        montarLista();
        limparCampo();
    } 
}

function limparCampo() {
    let amigo = document.getElementById("amigo");
    amigo.value = "";
}

function montarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');  
        li.textContent = amigos[i];  
        listaAmigos.appendChild(li);
    }  
}

function sortearAmigo() {
    let qtdAmigos = amigos.length;
    if (qtdAmigos === 0) {
        alert("Por favor, insira um amigo.");
    } else { 
        let amigoSorteado =  Math.floor(Math.random() * qtdAmigos);
        let resultado = document.getElementById("resultado");
        listaAmigos.innerHTML = "";
        resultado.innerHTML = amigos[amigoSorteado];
    }  
}


