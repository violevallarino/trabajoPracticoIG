// arregloPreguntas: pool de 30 preguntas. En juego.js se sortean 10 distintas por jugador.
// indiceCorrecta apunta a la posición dentro de "opciones" que es la respuesta válida.
const arregloPreguntas = [
  {
    textoPregunta: "¿Cuál es el río más largo que corre íntegramente dentro del territorio argentino?",
    opciones: ["Río Colorado", "Río Salado", "Río Pilcomayo"],
    indiceCorrecta: 0
  },
  {
    textoPregunta: "¿En qué provincia argentina se encuentra el famoso Cerro de los Siete Colores?",
    opciones: ["Salta", "Jujuy", "Catamarca"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Cómo se llama el tradicional viento cálido y seco que sopla en la región de Cuyo?",
    opciones: ["Sudestada", "Pampero", "Zonda"],
    indiceCorrecta: 2
  },
  {
    textoPregunta: "¿Qué escritor argentino fundó la emblemática revista literaria Sur en 1931?",
    opciones: ["Jorge Luis Borges", "Adolfo Bioy Casares", "Victoria Ocampo"],
    indiceCorrecta: 2
  },
  {
    textoPregunta: "¿Cómo se llama el primer álbum de estudio de Patricio Rey y sus Redonditos de Ricota, lanzado oficialmente en 1985?",
    opciones: ["Oktubre", "Gulp!", "Un Baión para el Ojo Idiota"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Qué científico argentino recibió el Premio Nobel de Química en 1970?",
    opciones: ["Bernardo Houssay", "Luis Leloir", "César Milstein"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Cuál es el pico más alto de la Cordillera de los Andes y de todo el continente americano, ubicado en Mendoza?",
    opciones: ["Monte Pissis", "Volcán Ojos del Salado", "Cerro Aconcagua"],
    indiceCorrecta: 2
  },
  {
    textoPregunta: "¿En qué ciudad argentina se celebra anualmente la Fiesta Nacional de la Cerveza (Oktoberfest)?",
    opciones: ["San Carlos de Bariloche", "Villa General Belgrano", "Tandil"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Qué artista plástico argentino es mundialmente famoso por sus obras de arte cinético y sus esferas?",
    opciones: ["Antonio Berni", "Julio Le Parc", "Benito Quinquela Martín"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Cuántos municipios tiene la provincia de Buenos Aires?",
    opciones: ["135", "93", "67"],
    indiceCorrecta: 0
  },
  {
    textoPregunta: "¿Cuál fue la primera novela publicada por Julio Cortázar, considerada una obra clave de la literatura fantástica argentina?",
    opciones: ["Rayuela", "Los premios", "Bestiario"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Cuántos países son limítrofes de Argentina?",
    opciones: ["3", "5", "4"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿En qué provincia se encuentra el yacimiento arqueológico y geológico de Ischigualasto, conocido como Valle de la Luna?",
    opciones: ["La Rioja", "San Juan", "Neuquén"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Qué compositor y bandoneonista argentino revolucionó el tango creando el llamado \"Nuevo Tango\"?",
    opciones: ["Aníbal Troilo", "Astor Piazzolla", "Osvaldo Pugliese"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Cuántas provincias tiene Argentina?",
    opciones: ["23", "24", "25"],
    indiceCorrecta: 0
  },
  {
    textoPregunta: "¿Cuál es el nombre del gigantesco sistema de humedales ubicado en el centro de la provincia de Corrientes?",
    opciones: ["Delta del Paraná", "Esteros del Iberá", "Salinas Grandes"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Cuántos discos de estudio tiene la banda Patricio Rey y sus Redonditos de Ricota?",
    opciones: ["12", "9", "10"],
    indiceCorrecta: 2
  },
  {
    textoPregunta: "¿En qué provincia se encuentra el Parque Nacional El Palmar, famoso por proteger las palmeras yatay?",
    opciones: ["Corrientes", "Entre Ríos", "Misiones"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Cómo se llama el estrecho brazo de mar que separa la Patagonia continental de la Isla Grande de Tierra del Fuego?",
    opciones: ["Canal Beagle", "Estrecho de Magallanes", "Paso Drake"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Qué poeta y autor argentino escribió los versos del célebre tango Mi noche triste?",
    opciones: ["Enrique Santos Discépolo", "Pascual Contursi", "Homero Manzi"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Cuál de las siguientes ciudades es la capital de la provincia de La Pampa?",
    opciones: ["General Pico", "Santa Rosa", "Toay"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Qué destacado pintor argentino retrató magistralmente la vida de los conventillos y la actividad portuaria de La Boca?",
    opciones: ["Emilio Pettoruti", "Benito Quinquela Martín", "Cándido López"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿En qué año se sancionó la ley del sufragio femenino en Argentina, impulsada fuertemente por Eva Perón?",
    opciones: ["1912", "1947", "1955"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Qué importante reserva natural de fauna marina se encuentra en la costa de la provincia del Chubut?",
    opciones: ["Cabo Vírgenes", "Península Valdés", "San Antonio Oeste"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Cuál es el nombre del imponente glaciar ubicado en el Lago Argentino que no deja de avanzar y retroceder?",
    opciones: ["Glaciar Upsala", "Glaciar Spegazzini", "Glaciar Perito Moreno"],
    indiceCorrecta: 2
  },
  {
    textoPregunta: "¿Qué notable escritora argentina publicó la célebre novela Las invitadas y cuentos fantásticos de gran reconocimiento?",
    opciones: ["Alejandra Pizarnik", "Silvina Ocampo", "Alfonsina Storni"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿En qué provincia argentina se encuentra el sitio geológico de formaciones rocosas llamado Talampaya?",
    opciones: ["San Juan", "La Rioja", "Salta"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Cómo se denomina el fenómeno meteorológico oceánico caracterizado por un fuerte aumento del nivel del mar en el Río de la Plata debido a vientos del este o sudeste?",
    opciones: ["Viento Zonda", "Sudestada", "Pampero"],
    indiceCorrecta: 1
  },
  {
    textoPregunta: "¿Qué científico argentino ganó el Premio Nobel de Fisiología o Medicina en 1947 por sus descubrimientos sobre la glándula pituitaria?",
    opciones: ["Luis Leloir", "César Milstein", "Bernardo Houssay"],
    indiceCorrecta: 2
  },
  {
    textoPregunta: "¿En qué localidad de la Provincia de Buenos Aires se lleva a cabo todos los años la Fiesta Nacional del Gaucho?",
    opciones: ["San Antonio de Areco", "General Madariaga", "Chascomús"],
    indiceCorrecta: 1
  }
];