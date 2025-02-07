let listaDeAmigos = [];
let i=0

function agregarAmigo() {

    let nombreDeAmigo = document.getElementById("amigo").value;

    if (/^[A-Za-z]+$/.test(nombreDeAmigo)){
        listaDeAmigos.push(nombreDeAmigo);
        asignarTextoElemento ('ul',`${listaDeAmigos[i]}`)
        i++;


    } else if (/^([0-9])*$/.test(nombreDeAmigo)){
        alert('Ingrese un dato valido') 
    }
    
    console.log(nombreDeAmigo);
    console.log(listaDeAmigos);
    
    limpiarTexto();
    return nombreDeAmigo;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function limpiarTexto(){
    document.querySelector('#amigo').value = '';
}