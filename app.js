let numeroSecreto = 0; //numero secreto e intentos se generan en la funcion mas abajo de condicionesIniciales()
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //parseInt nos forza a que el input sea numero y no string

    if (numeroDeUsuario === numeroSecreto) {
        asignarElementoTexto('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //tomamos el boton de reinicio (html) y le quitamos el atributo de deshabilitado (ahora esta habilitado), DENTRO del bloque de codigo de condicion de acierto
    } else { //el usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarElementoTexto('p', 'El número secreto es menor');
        } else {
            asignarElementoTexto('p', 'El número secreto es mayor');
        }
        intentos++; //contador incremental
        limpiarCaja(); //funcion que limpia la caja (dentro del bloque de error else1!)
    }
    return;
}

function generarNumeroSecreto() { //funcion que genera el numero secreto
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //generar num random del 1-10

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarElementoTexto('p', 'Ya se sortearon todos los números posibles');
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) { //si el numero sorteado ya existe en la lista
            return generarNumeroSecreto(); //se repite la funcion

        } else { //si no
            listaNumerosSorteados.push(numeroGenerado); //pasamos el nuevo num al final de la lista
            return numeroGenerado; //y obtenemos ese numero en la variable numeroGenerado
        }
    }
}

function limpiarCaja() { // funcion que limpia la caja
  document.querySelector('#valorUsuario').value = '';  //seleccionamos la cajita por id a traves del #, indicamos que nos referimos al valor .value y declaramos que debe quedar vacío
}

function condicionesIniciales() {
    asignarElementoTexto('h1', 'Juego del número secreto!');
    asignarElementoTexto('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() { //que se debe reiniciar?
    //limpiar la caja
    limpiarCaja();
    //indicar msj de intervalo de numeros
    //generar el num secreto
    //inicializar el numero de intentos (contador)
     condicionesIniciales();
     //desabilitar el boton de nuevo juego
     document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();