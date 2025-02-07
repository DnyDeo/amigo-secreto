let listaDeAmigos = [];


function agregarAmigo() {
    
    let nombreDeAmigo = document.getElementById("amigo").value;

    if (/^[A-Za-z]+$/.test(nombreDeAmigo)){
        listaDeAmigos.push(nombreDeAmigo);

    } else if (/^([0-9])*$/.test(nombreDeAmigo)){
        alert('Ingrese un dato valido')
    }
   
    console.log(nombreDeAmigo);
    console.log(listaDeAmigos);
    
    limpiarTexto();
    return nombreDeAmigo;
}


function limpiarTexto(){
    document.querySelector('#amigo').value = '';
}