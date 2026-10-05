# trabajoPracticoIG
Trabajo practico grupal

Nombre del proyecto:La Mesa Dorada
carrera de Artes Multimediales
Materia: Informática general I
Catedra: Drelichman
Turno: Mañana

Integrantes: 
Violeta Vallarino ( Preguntas )
Kiara Furci ( Cartas )
Brisa Albornoz ( Dados )

Se trabajó en su desarrollo durante Septiembre-Octubre 2026

Este sitio web consiste en una agrupación de 3 distintos juegos en un mismo sitio, uno en relación a las cartas, a los dados y un cuestionario de preguntas . En el menú de navegación se permite ingresar a las 6 páginas desarrolladas. 

En primer lugar, se encuentra el Inicio. En está página podrás encontrar una pequeña introducción sobre qué trata este sitio y su composición, tres tableros con un resumen de cada juego y sus respectivos botones para acceder a ellos directamente, y debajo una lista nombrando a las desarrolladoras del sitio.

Para la creación de cada juego, fuimos anotando ideas en común que teníamos y combinandolas con el uso de la IA (Claude, Gemini y ChatGPT). Igualmente, mientras íbamos trabajando en el desarrollo de cada uno, hubieron cambios de las ideas que teníamos planteadas en un principio, que permitieron mejorar la ejecución total de estos. 

Según el orden del menú de navegación, el segundo sitio es el juego de cartas: “¿Mayor o Menor?”. Este juego es bastante simple. Consiste en que al empezar aparecerán dos cartas, la de la izquierda boca arriba y la de la derecha boca abajo. El objetivo del jugador, es adivinar si la próxima carta, que es la que está boca abajo, es mayor o menor que el valor de la carta actual. Para esto, están los botones de menor y mayor. Si aciertas, sumás un punto. Si perdés, restas una vida. Y el empate no suma, ni perjudica.  En total son tres vidas. Al llegar a cero, aparecerá una pantalla de “Game Over”, y en 5 segundos se reiniciará la página para poder jugar de vuelta. Los datos de cada partida jugada junto con los puntos ganados, aparecerán en el sitio de resultados.  

Para resumir un poco el sistema de este juego, funciona dando un número random que va a ser igual al valor de las imágenes de las cartas. Cuando se presione alguno de los dos botones, va a llamar a aquella función que randomiza y lo va a pegar en el src de las imágenes que corresponden en el html, y va a poner la imagen que estaba en la derecha, a la izquierda. Dentro de esos mismos botones se va a verificar con el if si el número aleatorio es mayor o menor (dependiendo de cada botón) y se va a sumar un punto si es correcto y con el else if se resta un punto en caso de que no coincida con el botón presionado.
Algunos problemas en el desarrollo de este juego eran que el empate restaba puntos, o que al tocar muchas veces algún botón, las vidas se mareaban y empezaban a tomar valores negativos. Esto fue solucionado deshabilitando los botones dentro de los botones y volviendo a habilitarlos en una condición que dice que los habilite si vidas es mayor a cero. Y con el error del empate, se intercambió el else de los if de los botones, por un else if, permitiendo que solo se resten las vidas si el resultado era incorrecto.

El tercer sitio del navegador es el juego de los dados: “El primero a 100”. A diferencia del primer juego, este funciona con dos jugadores desde un mismo dispositivo. El objetivo es que mediante los valores aleatorios de los dos dados (del 1 al 6), uno consiga llegar a 100 puntos o más antes que el otro. La manera de conseguir puntos funciona mediante los dos botones de debajo de los dados “Lanzar dados” y “Plantarse”, aparte de otro botón que te permite comenzar una nueva partida. Cada vez que un jugador toca el botón para lanzar dados, acumula la suma de aquellos dados, mientras más presione, más puntos irá acumulando. Por otro lado, está el botón de plantarse, que permite guardar los puntos acumulados. La dificultad de este juego, es qué si sale un dado con el valor de “1”, los puntos que no se guardaron al plantarse se pierden y pasa el turno al otro jugador. Por esto, se deben de ir acumulando puntos guardados al plantarse e ir avanzando hasta llegar a 100. Este juego está pensado para que se jueguen 5 rondas, por lo que al ir ganando aparecerá un mensaje con las partidas ganadas de cada uno, dentro de esas 5 rondas.

Este juego funciona mediante una función que genera un número aleatorio del 1 al 6, que es igual al valor de las imágenes de los dados. Al presionar el botón de “Lanzar dados”, se llama a esa función dos veces (por los dos dados) y cada resultado se pega la imágen del html. Luego, con un if se verifica si en alguno de los dados salió un 1. Si sale aquel valor, los puntos acumulados en esa ronda vuelven a 0 y pasa el turno del otro jugador. Si no, se entra al else, donde se suman los dos valores a los puntos de la ronda, y el jugador decide si sigue tirando dados o se planta. Cuando presiona “Plantarse”, los puntos de la ronda se suman al puntaje total del jugador que está jugando, y pasa el turno al otro jugador. Cada vez que se cambia de turno, se actualiza el estado del jugador agregando o sacando una clase (mediante js). En el momento que uno de los dos llegue a 100 puntos, se ocultan los dados y los botones, se muestra el ganador y se guarda el resultado en el localstorage, para que después se pueda mostrar en la página de resultados.
Lo que fuimos corrigiendo durante el desarrollo fueron temas de puntaje, ya que era demasiado tedioso llegar a un puntaje alto o que algunos botones desaparecían al ganar y faltaba poner alguna pantalla de ganadores.

La cuarta página del sitio es el juego de preguntas: “Pensá Rápido”. Este juego consiste de tres participantes, que por turnos deben de resolver 10 preguntas multiple choice con un contador de 120 segundos. Al terminar las 3 rondas, aparecerá una pantalla que marca las respuestas contestadas por cada jugador y las correctas. Y debajo de estos resultados, se muestra quien de los tres es el ganador, y se le asigna su premio (Fotos de perritos generados con la API). Al igual que en el segundo juego, funciona desde un mismo dispositivo, pero cada jugador deberá esperar a que el de delante termine de contestar las preguntas o se acabe su tiempo.

Organización de archivos y carpetas
El proyecto está organizado separando los archivos HTML, CSS, JavaScript e imágenes para facilitar el desarrollo y el mantenimiento del sitio.
La estructura principal es:

trabajoPracticoIG/
│
├── index.html
├── cartas.html
├── dados.html
├── preguntas.html
├── resultados.html
│
├── css/
│   └── archivo.css
│
├── js/
│   ├── cartas.js
│   ├── dados.js
│   ├── preguntas.js
│   ├── datosPreguntas.js
│   ├── resultados.js
│   └── estado.js
│
└── img/
    └── imágenes utilizadas por los juegos

Los archivos HTML corresponden a las diferentes páginas del sitio. index.html funciona como página de inicio y desde el menú de navegación se puede acceder a los diferentes juegos y a la página de resultados.
La carpeta css contiene la hoja de estilos general del sitio. Se utiliza un único archivo CSS para mantener una identidad visual común entre las distintas páginas.
La carpeta js contiene los archivos JavaScript que controlan la lógica y la interacción de cada juego. Cada juego tiene su propio archivo para separar las funcionalidades y facilitar la organización del código. También se incluyen archivos destinados a los datos de las preguntas, los resultados y el estado general del sitio.
La carpeta img contiene las imágenes utilizadas en la interfaz, como las cartas, los dados y otros recursos gráficos.


Tecnologías utilizadas

Para el desarrollo del proyecto se utilizaron principalmente:
HTML5: para construir la estructura y el contenido de las diferentes páginas.
CSS3: para desarrollar el diseño visual, la distribución de los elementos, los estados visuales y la adaptación de la interfaz.
JavaScript: para desarrollar la lógica de los juegos y generar la interacción con el usuario.
DOM (Document Object Model): para seleccionar y modificar elementos HTML desde JavaScript.
LocalStorage: para guardar información de las partidas y conservar los resultados en el navegador.
JSON: para transformar los datos antes de almacenarlos y recuperarlos desde localStorage.
API externa: se utilizó Dog CEO en el juego de preguntas para obtener imágenes de perros que funcionan como premios para los jugadores.
GitHub: se utilizó para trabajar de manera colaborativa, compartir el código y mantener organizado el proyecto.


API utilizada: Dog CEO

Para el juego de preguntas se utilizó la API pública Dog CEO, que permite obtener información e imágenes relacionadas con diferentes razas de perros.
La API se utiliza específicamente para obtener las imágenes que aparecen como premio al finalizar el juego. De esta manera, el premio del ganador no es siempre una imagen fija, sino que puede obtenerse de manera dinámica mediante una solicitud a la API.
La respuesta de la API contiene información relacionada con la imagen solicitada, principalmente la URL que permite acceder al archivo de imagen. Desde JavaScript se utiliza esa información para modificar el elemento correspondiente de la página y mostrar la imagen obtenida.


Principales decisiones técnicas

Durante el desarrollo se tomaron diferentes decisiones técnicas para organizar el proyecto y resolver las necesidades de cada juego.
Una de las principales decisiones fue separar la lógica de cada juego en archivos JavaScript independientes. De esta manera, cartas.js, dados.js y preguntas.js contienen las funcionalidades específicas de cada juego, evitando concentrar todo el código en un único archivo.
También se decidió utilizar una única hoja de estilos (archivo.css) para mantener una identidad visual común en todo el sitio y evitar repetir estilos en cada página.
Para la interacción con los juegos se utilizó JavaScript y manipulación del DOM. Esto permite que los elementos de la página cambien según las acciones del usuario sin tener que recargar constantemente el documento.
En el juego de dados se utilizaron valores aleatorios mediante Math.random() y Math.floor() para representar los resultados de los dados. En el juego de cartas se utilizó el mismo principio para determinar los valores de las cartas.
Para conservar los resultados de las partidas se decidió utilizar localStorage, ya que permite almacenar información directamente en el navegador y recuperarla posteriormente desde la página de resultados. Como localStorage almacena los datos como texto, se utilizó JSON para convertir arrays y objetos a un formato que pudiera guardarse y luego volver a convertirse en datos utilizables mediante JSON.stringify() y JSON.parse().
Otra decisión fue utilizar clases CSS controladas desde JavaScript para representar diferentes estados de los juegos. Por ejemplo, en el juego de dados se puede identificar visualmente al jugador que tiene el turno y modificar la interfaz cuando la partida termina.
En el juego de preguntas se decidió utilizar una API externa para incorporar contenido dinámico al proyecto. Dog CEO fue utilizada para obtener las imágenes de perros que aparecen como premio para el ganador, integrando así una fuente externa de datos al funcionamiento del sitio.
Finalmente, durante el desarrollo se fueron modificando algunas decisiones iniciales a partir de las pruebas realizadas. Esto permitió corregir errores de funcionamiento, mejorar la experiencia de juego y adaptar las mecánicas a las posibilidades técnicas del proyecto.


DECLARACIÓN DE USO DE IA

Para este trabajo utilizamos ChatGPT y Claude, ambos en sus versiones gratuitas. Las
usamos las tres integrantes del grupo y en todas las etapas del desarrollo, sin asignar una
herramienta a cada tarea. Las consultas abarcaron la idea y las reglas de los juegos, la
escritura de código HTML, CSS y JavaScript, la búsqueda de errores, la construcción de
los estilos, la integración de la API y la documentación. Claude también se usó para
redactar esta declaración y el resto del README, y para revisar los archivos del proyecto.
Además, utilizamos las herramientas para estudiar y comprender las líneas de código que
se nos dificultaban, de modo que pudiéramos explicarlas y modificarlas por nuestra
cuenta.
Cada una de nosotras se encargó de un juego, pero nos ayudamos entre nosotras con los
errores y con el CSS, y en esos casos también recurrimos a las herramientas. Para elegir
la API consultamos a varias herramientas, comparamos las opciones que nos dieron y nos
quedamos con la de dog.ceo porque es simple, no necesita clave y resulta simpática como
premio del juego de preguntas.
El aporte más útil fue la explicación de localStorage. Una de las herramientas nos la dio
con un ejemplo muy gráfico, y eso nos permitió aplicarlo de manera consciente para
guardar el historial de las partidas de dados, los récords y el resultado del juego de
preguntas. También recibimos ayuda para guardar las preguntas en un archivo aparte,
traerlas desde el juego y consultar la API.
No aceptamos todas las propuestas que recibimos. Descartamos un juego de cartas más
complejo, que incluía más jugadores, y rechazamos usar una API para obtener las
preguntas. También rechazamos distintas decisiones de estilo del CSS. Las preguntas no
fueron generadas por IA: las tomamos de una página de preguntas de cultura general y le
sumamos algunas propias.
Durante el desarrollo detectamos varios problemas; el menú de navegación no coincidía
con la página en la que estábamos al abrir Resultados,el juego de cartas se rompía
cuando se tocaban los botones muy rápido y restaba una vida cuando las dos cartas
tenían el mismo valor, el resultado del juego de preguntas se perdía al pasar a otro juego
y volver, entre otros. Frente a estos problemas revisamos las lineas de código y probamos diferentes soluciones hasta lograr arreglarlo. 
 Para probar la API, desconectamos internet de la computadora y jugamos una
partida completa. Verificamos que, sin conexión, el juego mostraba igual la foto de premio,
que en ese caso es una imagen local.
En resumen, la inteligencia artificial fue para nosotras una herramienta de consulta y de apoyo, y no una forma de resolver el trabajo sin comprenderlo. Nos permitió explorar alternativas, entender conceptos que todavía no dominábamos, como el uso de localStorage, y encontrar el origen de errores que solas nos habrían llevado mucho más tiempo. Sin embargo, no aceptamos todas las respuestas tal como llegaban, descartamos propuestas y verificamos por nuestra cuenta que el sitio funcionara como debería. Ese proceso de consultar, evaluar, modificar y comprobar nos obligó a entender cada parte del código que forma parte de la entrega. Por eso consideramos que la colaboración con las herramientas fue crítica y no pasiva. Ellas aportaron ideas y explicaciones, pero las decisiones finales, las pruebas y la responsabilidad sobre el resultado fueron nuestras, y cada una de nosotras puede explicar y modificar el proyecto completo durante la defensa.
