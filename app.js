let listaDeAmigos = [];

function agregarAmigo() {
    // Valida el dato, agrega a la matrix y muestra en forma de lista
    let nombreDeAmigo = document.getElementById("amigo").value;
    if (/^[A-Za-z]+$/.test(nombreDeAmigo)){
        listaDeAmigos.push(nombreDeAmigo);
        asignarTextoElemento ('listaAmigos',`${listaDeAmigos.join('<br>')}`)
    } 
    // Valida el dato y alerta la necesidad de un dato valido
    else if (/^([0-9])*$/.test(nombreDeAmigo)){   
        alert('Ingrese un dato valido') 
    }

    // Limpia la caja y se prepara para un proximo dato
    limpiarTexto();
    return nombreDeAmigo;
}

function generarAmigoSecreto() {
    // Conoce la cantidad de datos insertados
    let numeroMaximo = listaDeAmigos.length;
    // Asigna un numero aletorio en funcion de la cantidad de datos ingresados
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Resta 1 para no enviar un dato superior a la matrix (0,1,2,3...) y se tiene en cuenta el dato 0
    let numeroGeneradoIncluidoElCero =numeroGenerado-1;
    // Evalua la cantidad de datos ingresados para realizar un sorteo justo
    if (numeroMaximo <=1){
        alert('Por favor ingrese al menos dos nombres') 
    }
    // Sortea el dato acorde al numero generado
    else {
    asignarTextoElemento ('resultado',`El amigo secreto sorteado es: ${listaDeAmigos[numeroGeneradoIncluidoElCero]}`)
    // Reinicia condiciones y se prepara para el proximo sorteo
    condicionesIniciales();
    return numeroMaximo; 
    }
}

// Funcion de asignacion de texto
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto
    return; 
}

// Funcion de limpieza de texto
function limpiarTexto(){
    document.getElementById('amigo').value = '';
    asignarTextoElemento ('resultado','');   
}

// Funcion de reset
function condicionesIniciales(){
    asignarTextoElemento ('listaAmigos','');
    document.getElementById('amigo').value = '';
    listaDeAmigos = [];
}