// ===== Referencias al DOM =====
const seccionInstrucciones = document.getElementById("seccionInstrucciones");
const seccionJuego = document.getElementById("seccionJuego");
const seccionTransicion = document.getElementById("seccionTransicion");
const seccionResultados = document.getElementById("seccionResultados");

const botonEmpezarJuego = document.getElementById("botonEmpezarJuego");
const botonSiguienteJugador = document.getElementById("botonSiguienteJugador");

const nombreJugadorActualElemento = document.getElementById("nombreJugadorActual");
const contadorPreguntaElemento = document.getElementById("contadorPregunta");
const temporizadorElemento = document.getElementById("temporizador");
const textoPreguntaElemento = document.getElementById("textoPregunta");
const listaOpcionesElemento = document.getElementById("listaOpciones");

const mensajeTransicionElemento = document.getElementById("mensajeTransicion");
const resumenTurnoAnteriorElemento = document.getElementById("resumenTurnoAnterior");

const cuerpoTablaResumenElemento = document.getElementById("cuerpoTablaResumen");
const podioElemento = document.getElementById("podio");

// ===== Estado del juego =====
const nombresJugadores = ["Jugador 1", "Jugador 2", "Jugador 3"];
const tiempoLimitePorJugador = 120; // 2 minutos, en segundos
const preguntasPorJugador = 10;

let indiceJugadorActual = 0;
let indicePreguntaActual = 0;
let tiempoRestante = tiempoLimitePorJugador;
let idIntervaloTemporizador = null;
let preguntasSorteadas = []; // pool de 30 ya mezclado, dividido en bloques de 10 por jugador
let preguntasDelTurno = []; // las 10 preguntas que le tocan al jugador que está jugando ahora

// resultadosJugadores: un objeto por jugador con lo que necesita la tabla y el podio
let resultadosJugadores = nombresJugadores.map(function (nombre) {
  return { nombre: nombre, respondidas: 0, correctas: 0 };
});

// ===== Función auxiliar: cambiar de pantalla =====
function mostrarPantalla(pantallaAMostrar) {
  // Oculta las 4 secciones y muestra únicamente la solicitada
  [seccionInstrucciones, seccionJuego, seccionTransicion, seccionResultados].forEach(function (seccion) {
    seccion.classList.remove("pantallaActiva");
    seccion.classList.add("pantallaOculta");
  });
  pantallaAMostrar.classList.remove("pantallaOculta");
  pantallaAMostrar.classList.add("pantallaActiva");
}

// ===== Mezcla un arreglo sin modificar el original (algoritmo Fisher-Yates) =====
function mezclarArreglo(arregloOriginal) {
  const copia = [...arregloOriginal];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// ===== Inicio del juego (botón "Empezar juego") =====
botonEmpezarJuego.addEventListener("click", function () {
  // Se mezclan las 30 preguntas UNA sola vez por partida.
  // Al dividir el pool mezclado en 3 bloques de 10, cada jugador recibe
  // preguntas distintas entre sí y nunca se repiten dentro de la partida.
  preguntasSorteadas = mezclarArreglo(arregloPreguntas);
  indiceJugadorActual = 0;
  iniciarTurno();
});

// ===== Devuelve las 10 preguntas que le tocan al jugador actual según su índice =====
function obtenerPreguntasDelJugadorActual() {
  const inicio = indiceJugadorActual * preguntasPorJugador;
  return preguntasSorteadas.slice(inicio, inicio + preguntasPorJugador);
}

// ===== Arranca el turno del jugador actual =====
function iniciarTurno() {
  indicePreguntaActual = 0;
  tiempoRestante = tiempoLimitePorJugador;
  preguntasDelTurno = obtenerPreguntasDelJugadorActual();

  nombreJugadorActualElemento.textContent = nombresJugadores[indiceJugadorActual];
  mostrarPantalla(seccionJuego);
  iniciarTemporizador();
  cargarPregunta();
}

// ===== Temporizador: cuenta regresiva por turno =====
function iniciarTemporizador() {
  actualizarTextoTemporizador();
  idIntervaloTemporizador = setInterval(function () {
    tiempoRestante--;
    actualizarTextoTemporizador();

    if (tiempoRestante <= 0) {
      // Se acabó el tiempo: la pregunta en curso (si no fue respondida) se descarta
      finalizarTurno();
    }
  }, 1000);
}

function actualizarTextoTemporizador() {
  temporizadorElemento.textContent = "Tiempo: " + tiempoRestante + "s";
}

// ===== Carga la pregunta actual y genera las opciones dinámicamente =====
function cargarPregunta() {
  const pregunta = preguntasDelTurno[indicePreguntaActual];

  contadorPreguntaElemento.textContent = "Pregunta " + (indicePreguntaActual + 1) + "/" + preguntasPorJugador;
  textoPreguntaElemento.textContent = pregunta.textoPregunta;

  // Limpiamos las opciones anteriores antes de renderizar las nuevas
  listaOpcionesElemento.innerHTML = "";

  pregunta.opciones.forEach(function (textoOpcion, indiceOpcion) {
    const item = document.createElement("li");
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = textoOpcion;
    boton.addEventListener("click", function () {
      manejarRespuesta(indiceOpcion);
    });
    item.appendChild(boton);
    listaOpcionesElemento.appendChild(item);
  });
}

// ===== Procesa la respuesta elegida por el jugador =====
function manejarRespuesta(indiceSeleccionado) {
  const pregunta = preguntasDelTurno[indicePreguntaActual];
  const jugadorActual = resultadosJugadores[indiceJugadorActual];

  jugadorActual.respondidas++;
  if (indiceSeleccionado === pregunta.indiceCorrecta) {
    jugadorActual.correctas++;
  }

  indicePreguntaActual++;

  if (indicePreguntaActual < preguntasPorJugador) {
    cargarPregunta();
  } else {
    // Respondió las 10: termina su turno antes de que se acabe el tiempo
    finalizarTurno();
  }
}

// ===== Cierra el turno del jugador actual (por tiempo agotado o por completar las 10) =====
function finalizarTurno() {
  clearInterval(idIntervaloTemporizador);

  if (indiceJugadorActual < nombresJugadores.length - 1) {
    mostrarTransicion();
  } else {
    mostrarResultadosFinales();
  }
}

// ===== Pantalla intermedia entre un jugador y el siguiente =====
function mostrarTransicion() {
  const jugadorQueTermino = resultadosJugadores[indiceJugadorActual];
  const proximoJugador = nombresJugadores[indiceJugadorActual + 1];

  mensajeTransicionElemento.textContent = "Turno de " + proximoJugador;
  resumenTurnoAnteriorElemento.textContent =
    jugadorQueTermino.nombre + " respondió correctamente " + jugadorQueTermino.correctas + "/" + preguntasPorJugador + " preguntas.";

  mostrarPantalla(seccionTransicion);
}

botonSiguienteJugador.addEventListener("click", function () {
  indiceJugadorActual++;
  iniciarTurno();
});

// ===== Pantalla final: tabla + podio + guardado en localStorage =====
function mostrarResultadosFinales() {
  construirTablaResumen();
  construirPodio();
  guardarResultadosEnLocalStorage();
  mostrarPantalla(seccionResultados);
}

function construirTablaResumen() {
  cuerpoTablaResumenElemento.innerHTML = "";

  resultadosJugadores.forEach(function (jugador) {
    const fila = document.createElement("tr");
    fila.innerHTML =
      "<td>" + jugador.nombre + "</td>" +
      "<td>" + jugador.respondidas + "</td>" +
      "<td>" + jugador.correctas + "</td>";
    cuerpoTablaResumenElemento.appendChild(fila);
  });
}

function construirPodio() {
  // Copiamos el array y lo ordenamos de mayor a menor cantidad de correctas
  const ranking = [...resultadosJugadores].sort(function (a, b) {
    return b.correctas - a.correctas;
  });

  podioElemento.innerHTML = "";

  ranking.forEach(function (jugador, posicion) {
    const puesto = document.createElement("div");
    puesto.className = "puestoPodio";
    puesto.textContent = (posicion + 1) + "° " + jugador.nombre + " (" + jugador.correctas + " correctas)";
    podioElemento.appendChild(puesto);
  });
}

// ===== Persistencia: guarda esta partida en el historial general =====
function guardarResultadosEnLocalStorage() {
  // Leemos el historial existente (o arrancamos un array vacío si es la primera partida)
  const historialGuardado = localStorage.getItem("historialPartidas");
  const historialPartidas = historialGuardado ? JSON.parse(historialGuardado) : [];

  historialPartidas.push({
    fecha: new Date().toISOString(),
    jugadores: resultadosJugadores
  });

  localStorage.setItem("historialPartidas", JSON.stringify(historialPartidas));
}