// estado.js
// Script compartido por todas las páginas del sitio.
// Se encarga de:
//   1) Marcar en el menú de navegación los juegos que ya tienen
//      un récord guardado en localStorage (agrega la clase "jugado").
//   2) Ofrecer una función común para que cada juego guarde su récord.

// Relación entre la clave usada en localStorage y el valor del
// atributo data-juego del enlace correspondiente en el <nav>.
const JUEGOS = [
  { clave: "recordCartas", juego: "cartas" },
  { clave: "recordDados", juego: "dados" },
  { clave: "recordPreguntas", juego: "preguntas" }
];

// Recorre los juegos y agrega la clase "jugado" al enlace del menú
// (identificado por data-juego, no por id) si ya existe un récord
// guardado para ese juego.
function marcarJuegosJugados() {
  JUEGOS.forEach(function (item) {
    const yaJugado = localStorage.getItem(item.clave) !== null;
    const enlace = document.querySelector('.enlaceJuego[data-juego="' + item.juego + '"]');

    if (enlace && yaJugado) {
      enlace.classList.add("jugado");
    }
  });
}

// Guarda el récord de un juego en localStorage si el puntaje nuevo
// es mayor al que ya estaba guardado (o si todavía no había ninguno).
//
// IMPORTANTE: esta función no se llama sola. Cada juego (cartas.js,
// dados.js, preguntas.js) tiene que llamarla explícitamente en el
// momento en que termina una partida y ya se sabe el puntaje final.
// Ejemplo de uso dentro de cartas.js:
//   guardarRecord("recordCartas", puntajeFinal);
function guardarRecord(clave, puntajeNuevo) {
  const recordActual = Number(localStorage.getItem(clave)) || 0;

  if (puntajeNuevo > recordActual) {
    localStorage.setItem(clave, puntajeNuevo);
  }

  // Se vuelve a marcar el menú por si estamos en la misma página
  // en la que se acaba de guardar el récord (ej. tras "Nueva partida").
  marcarJuegosJugados();
}

document.addEventListener("DOMContentLoaded", marcarJuegosJugados);