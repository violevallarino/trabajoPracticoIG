let areaDeJuego = document.querySelector("#juego");
let perderJuego = document.querySelector("#gameOver");

areaDeJuego.hidden = true; // Para que el juego este oculto ante de empezar
perderJuego.hidden = true; // Para que el game over este oculto antes de empezar

let vidas = 3;
let puntos = 0;
let cartaNumero = 0; // Carta en mesa (actual)

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

// Imagenes

let cartaDorso = document.querySelector("#imagenCarta");
let actualCarta = document.querySelector("#cartaActual");


// Cuando el boton se presione, aparecerá el juego y una carta

btnEmpezar.addEventListener("click", function() {
    areaDeJuego.hidden = false
    btnEmpezar.hidden = true

    // Sale la carta random y se asigna a la imagen
    cartaNumero = cartaAleatoria();

    actualCarta.src = "img/" + cartaNumero + ".png";
    actualCarta.alt = "Carta" + cartaNumero;

    cartaDorso.src = "img/dorso.png";

});

// Boton Mayor

btnMayor.addEventListener("click", function() {

    // Sale la carta aleatoria
    let proximaCarta = cartaAleatoria();

    cartaDorso.src = "img/" + proximaCarta + ".png";

    /* Se compara, si la proxima carta es mayor a la carta guardada en cartaNumero, se suman puntos y se muestran esos puntos
    Si no (else), se resta una vida y se muestra que se resta esa vida */

    if (proximaCarta > cartaNumero) {
        puntos++;
        puntosActuales.innerText = puntos;
    } else {
        vidas--;
        vidasActuales.innerText = vidas;
    };

    setTimeout(function() {

        // Se espera un tiempo para que la persona vea el cambio, y luego se cambian las cartas

        cartaNumero = proximaCarta
        actualCarta.src = "img/" + cartaNumero + ".png";
        cartaDorso.src = "img/dorso.png";

        verificarFinal();
    }, 1500);
});

// Ahora sucede lo mismo pero con el boton Menor

btnMenor.addEventListener("click", function() {

    let proximaCarta = cartaAleatoria();

    cartaDorso.src = "img/" + proximaCarta + ".png";

    if (proximaCarta < cartaNumero) {
        puntos++;
        puntosActuales.innerText = puntos;
    } else {
        vidas--;
        vidasActuales.innerText = vidas;
    };

    setTimeout(function() {

        // Se espera un tiempo para que la persona vea el cambio, y luego se cambian las cartas

        cartaNumero = proximaCarta
        actualCarta.src = "img/" + cartaNumero + ".png";
        cartaDorso.src = "img/dorso.png";

        verificarFinal();
    }, 1000);
});

// Funcion que detecta cuando termina el juego y en 5 segundos lo reinicia

function verificarFinal() {
    if (vidas === 0) {
        areaDeJuego.hidden = true;
        perderJuego.hidden = false;
        btnEmpezar.hidden = true;

        setTimeout(() => {
            location.reload();
        }, 5000);
    };
}
