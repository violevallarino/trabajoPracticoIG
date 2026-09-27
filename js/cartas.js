let areaDeJuego = document.querySelector("#juego");

areaDeJuego.hidden = true; // Para que el juego este oculto ante de empezar

let vidas = 3;
let puntos = 0;
let cartaNumero = 0; // Carta en mesa

// Botones

const btnEmpezar = document.querySelector("#botonEmpezar");
const btnMayor = document.querySelector("#botonMayor");
const btnMenor = document.querySelector("#botonMenor");

let cartaImagen = document.querySelector("#imagenCarta");

// Para ir editando el texto de los puntos y las vidas restantes:

const puntosActuales = document.querySelector("#puntos");
const vidasActuales = document.querySelector("#vidas");

// Funcion que saca un numero aleatorio para tener la carta aleatoria

const cartaAleatoria = () => {
    return Math.floor(Math.random() * 10) + 1;
};

// Cuando el boton se presione, aparecerá el juego y una carta

btnEmpezar.addEventListener("click", function() {
    areaDeJuego.hidden = false
    btnEmpezar.hidden = true
});



