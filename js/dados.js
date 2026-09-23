// Juego de dados: El primero a 100

// Referencias a elementos del HTML
const jugadorActual = document.querySelector("#jugador-actual");

const jugador1 = document.querySelector("#jugador-1");
const jugador2 = document.querySelector("#jugador-2");

const puntaje1 = document.querySelector("#puntaje-1");
const puntaje2 = document.querySelector("#puntaje-2");

const dado1 = document.querySelector("#dado-1");
const dado2 = document.querySelector("#dado-2");

const puntosRonda = document.querySelector("#puntos-ronda");

const botonLanzar = document.querySelector("#boton-lanzar");
const botonPlantarse = document.querySelector("#boton-plantarse");
const botonNuevaPartida = document.querySelector("#boton-nueva-partida");

const mensajeJuego = document.querySelector("#mensaje-juego");


// Variables del juego
let jugador = 1;
let totalJugador1 = 0;
let totalJugador2 = 0;
let puntosActuales = 0;
let partidaTerminada = false;


// Función para tirar un dado
function tirarDado() {
    return Math.floor(Math.random() * 6) + 1;
}


// Función para actualizar qué jugador está activo
function actualizarJugador() {

    jugadorActual.textContent = "Jugador " + jugador;

    if (jugador === 1) {
        jugador1.classList.add("jugador-activo");
        jugador2.classList.remove("jugador-activo");
    } else {
        jugador1.classList.remove("jugador-activo");
        jugador2.classList.add("jugador-activo");
    }
}


// Función para cambiar de jugador
function cambiarJugador() {

    puntosActuales = 0;
    puntosRonda.textContent = "0";

    if (jugador === 1) {
        jugador = 2;
    } else {
        jugador = 1;
    }

    actualizarJugador();
}


// Función para lanzar los dos dados
function lanzarDados() {

    if (partidaTerminada) {
        return;
    }

    const valorDado1 = tirarDado();
    const valorDado2 = tirarDado();

    // Cambiamos las imágenes según el resultado
    dado1.src = "img/dado-" + valorDado1 + ".png";
    dado2.src = "img/dado-" + valorDado2 + ".png";

    // Si alguno de los dados es 1, se pierde la ronda
    if (valorDado1 === 1 || valorDado2 === 1) {

        puntosActuales = 0;
        puntosRonda.textContent = "0";

        mensajeJuego.textContent =
            "Salió un 1. Perdiste los puntos de esta ronda.";

        cambiarJugador();

    } else {

        // Sumamos los dados a los puntos de la ronda
        puntosActuales += valorDado1 + valorDado2;

        puntosRonda.textContent = puntosActuales;

        mensajeJuego.textContent =
            "Podés seguir tirando o plantarte.";
    }
}


// Función para plantarse
function plantarse() {

    if (partidaTerminada) {
        return;
    }

    // Se agregan los puntos de la ronda al puntaje total
    if (jugador === 1) {

        totalJugador1 += puntosActuales;
        puntaje1.textContent = totalJugador1;

    } else {

        totalJugador2 += puntosActuales;
        puntaje2.textContent = totalJugador2;
    }

    // Verificamos si llegó a 100
    if (totalJugador1 >= 100 || totalJugador2 >= 100) {

        partidaTerminada = true;

        let ganador;

        if (totalJugador1 >= 100) {
            ganador = 1;
        } else {
            ganador = 2;
        }

        jugadorActual.textContent = "Ganó el Jugador " + ganador;

        mensajeJuego.textContent =
            "¡Jugador " + ganador + " ganó la partida!";

        // Guardamos el puntaje final como récord
        let puntajeFinal;

        if (ganador === 1) {
            puntajeFinal = totalJugador1;
        } else {
            puntajeFinal = totalJugador2;
        }

        guardarRecord("recordDados", puntajeFinal);

        return;
    }

    mensajeJuego.textContent =
        "Jugador " + jugador + " se plantó.";

    cambiarJugador();
}


// Función para comenzar una nueva partida
function nuevaPartida() {

    jugador = 1;
    totalJugador1 = 0;
    totalJugador2 = 0;
    puntosActuales = 0;
    partidaTerminada = false;

    puntaje1.textContent = "0";
    puntaje2.textContent = "0";
    puntosRonda.textContent = "0";

    dado1.src = "img/dado-1.png";
    dado2.src = "img/dado-1.png";

    mensajeJuego.textContent = "Nueva partida. ¡Comienza el Jugador 1!";

    actualizarJugador();
}


// Eventos de los botones
botonLanzar.addEventListener("click", lanzarDados);
botonPlantarse.addEventListener("click", plantarse);
botonNuevaPartida.addEventListener("click", nuevaPartida);


// Estado inicial
actualizarJugador();