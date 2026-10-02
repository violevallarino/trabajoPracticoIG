// Juego de dados: El primero a 100

// Referencias al HTML
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
const contenedorJuego = document.querySelector(".juego");

// Variables del juego
let jugador = 1;
let totalJugador1 = 0;
let totalJugador2 = 0;
let puntosActuales = 0;
let partidaTerminada = false;

let historialDados =
    JSON.parse(localStorage.getItem("historialDados")) || [];

let partidasJugadas = historialDados.length;

let victoriasJugador1 = 0;
let victoriasJugador2 = 0;

for (let i = 0; i < historialDados.length; i++) {

    if (historialDados[i].ganador === 1) {
        victoriasJugador1++;
    } else {
        victoriasJugador2++;
    }
}

// Función para tirar un dado
function tirarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Actualiza visualmente el jugador activo
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

// Cambia de jugador
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

// Lanza los dos dados
function lanzarDados() {
    if (partidaTerminada) {
        return;
    }

    const valorDado1 = tirarDado();
    const valorDado2 = tirarDado();

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

        puntosActuales += valorDado1 + valorDado2;

        puntosRonda.textContent = puntosActuales;

        mensajeJuego.textContent =
            "Podés seguir tirando o plantarte.";
    }
}

// El jugador decide plantarse
function plantarse() {

    if (partidaTerminada) {
        return;
    }

    // Sumar los puntos de la ronda al puntaje total
    if (jugador === 1) {

        totalJugador1 += puntosActuales;
        puntaje1.textContent = totalJugador1;

    } else {

        totalJugador2 += puntosActuales;
        puntaje2.textContent = totalJugador2;
    }

    // Comprobar si alguien llegó a 100
    if (totalJugador1 >= 100 || totalJugador2 >= 100) {

        partidaTerminada = true;

        let ganador;
        let puntajeGanador;

        // Determinar ganador de la partida
        if (totalJugador1 >= 100) {

            ganador = 1;
            puntajeGanador = totalJugador1;

        } else {

            ganador = 2;
            puntajeGanador = totalJugador2;
        }

        // Sumar una partida jugada
        partidasJugadas++;

        // Sumar victoria al jugador correspondiente
        if (ganador === 1) {

            victoriasJugador1++;

        } else {

            victoriasJugador2++;
        }

        // Ocultar los dados
        dado1.style.display = "none";
        dado2.style.display = "none";

        // Ocultar botones de juego
        botonLanzar.style.display = "none";
        botonPlantarse.style.display = "none";

        // Cambiar color del contenedor
        contenedorJuego.classList.add("juego-terminado");

        // Mostrar resultado de la partida
        jugadorActual.textContent =
            "¡GANÓ EL JUGADOR " + ganador + "!";

        mensajeJuego.textContent =
            "Jugador " + ganador +
            " ganó esta partida con " +
            puntajeGanador + " puntos.";

        // Guardar resultado de la partida
        const nuevaPartida = {
            jugador1: totalJugador1,
            jugador2: totalJugador2,
            ganador: ganador
        };

        
        historialDados.push(nuevaPartida);

        localStorage.setItem(
            "historialDados",
            JSON.stringify(historialDados)
        );

        guardarRecord("recordDados", puntajeGanador);

        // Mostrar el marcador de la serie
        if (partidasJugadas < 5) {

            mensajeJuego.textContent =
                "Jugador " + ganador +
                " ganó esta partida. " +
                "Serie: Jugador 1 " +
                victoriasJugador1 +
                " - " +
                victoriasJugador2 +
                " Jugador 2. " +
                "Partida " +
                partidasJugadas +
                " de 5.";

        } else {

            // Terminó la serie de 5 partidas
            if (victoriasJugador1 > victoriasJugador2) {

                jugadorActual.textContent =
                    "¡JUGADOR 1 GANÓ LA SERIE!";

            } else if (victoriasJugador2 > victoriasJugador1) {

                jugadorActual.textContent =
                    "¡JUGADOR 2 GANÓ LA SERIE!";

            } else {

                jugadorActual.textContent =
                    "¡LA SERIE TERMINÓ EMPATADA!";
            }

            mensajeJuego.textContent =
                "Resultado final: Jugador 1 " +
                victoriasJugador1 +
                " - " +
                victoriasJugador2 +
                " Jugador 2.";
        }

        return;
    }

    // Si nadie ganó, cambia de jugador
    mensajeJuego.textContent =
        "Jugador " + jugador + " se plantó.";

    cambiarJugador();
}

// Comenzar una nueva partida
function nuevaPartida() {

    // Si ya se jugaron 5 partidas, comenzar una nueva serie
    let historialDados =
    JSON.parse(localStorage.getItem("historialDados")) || [];

if (historialDados.length >= 5) {

    localStorage.removeItem("historialDados");

    partidasJugadas = 0;
    victoriasJugador1 = 0;
    victoriasJugador2 = 0;
}

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

    dado1.style.display = "block";
    dado2.style.display = "block";

    botonLanzar.style.display = "block";
    botonPlantarse.style.display = "block";

    contenedorJuego.classList.remove("juego-terminado");

    jugadorActual.textContent =
        "Jugador 1";

    mensajeJuego.textContent =
        "Nueva partida. ¡Comienza el Jugador 1!";

    actualizarJugador();
}

// Eventos de los botones
botonLanzar.addEventListener("click", lanzarDados);
botonPlantarse.addEventListener("click", plantarse);
botonNuevaPartida.addEventListener("click", nuevaPartida);

// Estado inicial
actualizarJugador();
