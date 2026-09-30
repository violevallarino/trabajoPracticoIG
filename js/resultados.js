// Resultados de los juegos

const resultadoDados = document.querySelector("#resultado-dados");

// Obtener el historial de partidas
const historialDados =
    JSON.parse(localStorage.getItem("historialDados")) || [];

// Comprobar si hay partidas guardadas
if (historialDados.length === 0) {

    resultadoDados.innerHTML =
        "<p>Todavía no hay partidas registradas.</p>";

} else {

    // Crear la tabla
    const tabla = document.createElement("table");

    // Crear encabezado
    const encabezado = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");

    const columnaPartida = document.createElement("th");
    columnaPartida.textContent = "Partida";

    const columnaJugador1 = document.createElement("th");
    columnaJugador1.textContent = "Jugador 1";

    const columnaJugador2 = document.createElement("th");
    columnaJugador2.textContent = "Jugador 2";

    const columnaGanador = document.createElement("th");
    columnaGanador.textContent = "Ganador";

    filaEncabezado.appendChild(columnaPartida);
    filaEncabezado.appendChild(columnaJugador1);
    filaEncabezado.appendChild(columnaJugador2);
    filaEncabezado.appendChild(columnaGanador);

    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);

    // Crear cuerpo de la tabla
    const cuerpoTabla = document.createElement("tbody");

    // Recorrer todas las partidas
    for (let i = 0; i < historialDados.length; i++) {

        const fila = document.createElement("tr");

        const numeroPartida = document.createElement("td");
        numeroPartida.textContent = i + 1;

        const puntajeJugador1 = document.createElement("td");
        puntajeJugador1.textContent =
            historialDados[i].jugador1;

        const puntajeJugador2 = document.createElement("td");
        puntajeJugador2.textContent =
            historialDados[i].jugador2;

        const ganador = document.createElement("td");
        ganador.textContent =
            "Jugador " + historialDados[i].ganador;

        fila.appendChild(numeroPartida);
        fila.appendChild(puntajeJugador1);
        fila.appendChild(puntajeJugador2);
        fila.appendChild(ganador);

        cuerpoTabla.appendChild(fila);
    }

    // Agregar el cuerpo a la tabla
    tabla.appendChild(cuerpoTabla);

    // Mostrar la tabla
    resultadoDados.appendChild(tabla);
}