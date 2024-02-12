let numeroMaximo = 100;
let intentos = 0;
let listaNumerosSecretos = [];

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = `Escribe un número del 1 al ${numeroMaximo}`;
let numeroSecreto = 0;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Acertaste Perro! Lo hiciste ${(intentos === 1 ) ? 'a la primera' : `en ${intentos} intentos`}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto < numeroUsuario){
            asignarTextoElemento('p','Nop, el numero es menor');
        }else{
            asignarTextoElemento('p','Nop, el numero es mayor');
        }
        intentos++;    
        limpia();  
}
}

function limpia() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSecretos);
    //si ya se sortearon todos los numeros
    if (listaNumerosSecretos.length == numeroMaximo) {
        asignarTextoElemento('p','Todos los numeros posibles ya fueron sorteados');
    //Si el numero generado esta en la lista hacemos una operacion y si no hacemos otra
    } else { 
    if (listaNumerosSecretos.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSecretos.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function reiniciarJuego() {
    //limpiar caja
    limpia();
    //indicar mensaje de intervalo
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    deshabilitarBoton();
    //inicializar numero de intentos
    
}

function condicionesIniciales() {
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', `Escribe un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
console.log(numeroSecreto);
}

function deshabilitarBoton(){
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
