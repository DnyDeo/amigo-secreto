let listaDeAmigos = [];
let listaNumerosSorteado = [];
let numeroMaximo = 10;

function agregarAmigo() {

    let nombreDeAmigo = document.getElementById("amigo").value;

    if (/^[A-Za-z]*$/.test(nombreDeAmigo)){
        listaDeAmigos.push(nombreDeAmigo);
        asignarTextoElemento ('listaAmigos',`${listaDeAmigos.join('<br>')}`)
        
    } else if (/^([0-9])*$/.test(nombreDeAmigo)){   
        alert('Ingrese un dato valido') 
    }
    
    console.log(nombreDeAmigo);
    console.log(listaDeAmigos);

    limpiarTexto();
    return nombreDeAmigo;
}

function generarAmigoSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    asignarTextoElemento ('resultado',`${listaDeAmigos[numeroGenerado]}`)
}

generarAmigoSecreto();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto
    return; 
}

function limpiarTexto(){
    document.querySelector('#amigo').value = '';
}