const notas = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const modosGriegos = ['Jonico', 'Dorico', 'Frigio', 'Lidio', 'Mixolidio', 'Eolico', 'Locrio'];

function generarEscalaAleatoria() {
  // Obtención del valor seleccionado en el campo de selección de nota
  const notaSelector = document.getElementById('notaSelector');
  // Obtención del valor seleccionado en el campo de selección de nota
  const notaPrincipal = notaSelector.value === 'aleatorio' ?
    notas[Math.floor(Math.random() * notas.length)] :
   // Si no es 'aleatorio', toma la nota seleccionada directamente
    notaSelector.value;

   // Obtención del valor seleccionado en el campo de selección de modo griego
  const modoSelector = document.getElementById('modoSelector');
  const modoGriegoAleatorio = modoSelector.value === 'aleatorio' ?
  // Si es 'aleatorio', selecciona un modo griego al azar de la matriz 'modosGriegos'
  modosGriegos[Math.floor(Math.random() * modosGriegos.length)] :
  // Si no es 'aleatorio', toma el modo griego seleccionado directamente
  modoSelector.value;

    // Obtención del índice de la nota principal en la matriz de notas
    const indiceNotaPrincipal = notas.indexOf(notaPrincipal);

  // Construcción de la escala utilizando la función 'construirEscala'
    // Se pasa el índice de la nota principal y el patrón de intervalos obtenido por el modo griego
    const notasEscala = construirEscala(indiceNotaPrincipal, obtenerPatronIntervalosPorModo(modoGriegoAleatorio));

  // Construcción de los grados de la escala utilizando la función 'construirGradosEscala'
  // Se pasan las notas de la escala y el modo griego
    const gradosEscala = construirGradosEscala(notasEscala, modoGriegoAleatorio);


  // Muestra el nombre del modo griego en el display
  document.getElementById('modoGriego').textContent = `Modo Griego: ${modoGriegoAleatorio}`;
  
  // Llama a la función mostrarResultados con el modo griego aleatorio
  mostrarResultados(notaPrincipal, modoGriegoAleatorio, notasEscala, gradosEscala);
}

function generarEscalaPorModo(modo) {
  // Obtención del valor seleccionado en el campo de selección de nota
  const notaPrincipal = document.getElementById('notaSelector').value;

  // Obtención del índice de la nota principal en la matriz de notas
  const indiceNotaPrincipal = notas.indexOf(notaPrincipal);

  // Obtención del patrón de intervalos para el modo proporcionado como argumento
  const patronIntervalos = obtenerPatronIntervalosPorModo(modo);

  // Construcción de la escala utilizando la función 'construirEscala'
  // Se pasa el índice de la nota principal y el patrón de intervalos del modo
  const notasEscala = construirEscala(indiceNotaPrincipal, patronIntervalos);

  // Construcción de los grados de la escala utilizando la función 'construirGradosEscala'
  // Se pasan las notas de la escala y el modo proporcionado como argumento
  const gradosEscala = construirGradosEscala(notasEscala, modo);

  // Mostrar los resultados utilizando la función 'mostrarResultados'
  // Se pasan la nota principal, el modo, las notas de la escala y los grados de la escala
  mostrarResultados(notaPrincipal, modo, notasEscala, gradosEscala);
}

function generarEscala() {
  // Obtención del elemento 'modoSelector' del DOM
  const modoSelector = document.getElementById('modoSelector');

  // Obtención del valor seleccionado en 'modoSelector'
  const modoSeleccionado = modoSelector.value;

  // Verificación del valor seleccionado en 'notaSelector'
  if (document.getElementById('notaSelector').value === 'aleatorio') {
  // Si 'notaSelector' es 'aleatorio', llamar a la función 'generarEscalaAleatoria'
  generarEscalaAleatoria();
  } else {
  // Si no es 'aleatorio', llamar a la función 'generarEscalaPorModo' con el modo seleccionado
  generarEscalaPorModo(modoSeleccionado);
}
}

function mostrarResultados(notaPrincipal, modoGriego, notasEscala, gradosEscala) {
  // Actualización del contenido del elemento con id 'notaPrincipal' en el DOM
  document.getElementById('notaPrincipal').textContent = `Nota Principal: ${notaPrincipal}`;

  // Actualización del contenido del elemento con id 'modoGriego' en el DOM
  document.getElementById('modoGriego').textContent = `Modo Griego: ${modoGriego}`;

  // Actualización del contenido del elemento con id 'notasEscala' en el DOM
  document.getElementById('notasEscala').textContent = `Notas de la Escala: ${notasEscala.join(', ')}`;

  // Actualización del contenido del elemento con id 'gradosEscala' en el DOM
  // Se utiliza innerHTML para permitir el formato HTML, y join para unir los grados con saltos de línea
  document.getElementById('gradosEscala').innerHTML = `<strong>Grados de la Escala:</strong><br>${gradosEscala.join('<br>')}`;
}

function obtenerPatronIntervalosPorModo(modo) {
  switch (modo.toLowerCase()) {
    case 'jonico':
      return ['T', 'T', 'S', 'T', 'T', 'T', 'S'];
    case 'dorico':
      return ['T', 'S', 'T', 'T', 'T', 'S', 'T'];
    case 'frigio':
      return ['S', 'T', 'T', 'T', 'S', 'T', 'T'];
    case 'lidio':
      return ['T', 'T', 'T', 'S', 'T', 'T', 'S'];
    case 'mixolidio':
      return ['T', 'T', 'S', 'T', 'T', 'S', 'T'];
    case 'eolico':
      return ['T', 'S', 'T', 'T', 'S', 'T', 'T'];
    case 'locrio':
      return ['S', 'T', 'T', 'S', 'T', 'T', 'S'];
    default:
      // En caso de un valor no reconocido, devolver el modo jónico como predeterminado
      return ['T', 'T', 'S', 'T', 'T', 'T', 'S'];
  }
}

function construirEscala(indiceNotaPrincipal, patronIntervalos) {
  // Inicialización de la matriz 'notasEscala' con la nota principal en la posición 'indiceNotaPrincipal'
  const notasEscala = [notas[indiceNotaPrincipal]];

  // Inicialización del índice actual con 'indiceNotaPrincipal'
  let indiceActual = indiceNotaPrincipal;

  // Iteración sobre cada intervalo en el patrón de intervalos
  for (const intervalo of patronIntervalos) {
  // Si el intervalo es 'T' (tono), actualiza el índice actual sumando 2 y aplicando módulo
  if (intervalo === 'T') {
    indiceActual = (indiceActual + 2) % notas.length;
  } else if (intervalo === 'S') {
    // Si el intervalo es 'S' (semiTono), actualiza el índice actual sumando 1 y aplicando módulo
    indiceActual = (indiceActual + 1) % notas.length;
  }

  // Agrega la nota correspondiente al índice actual a la matriz 'notasEscala'
  notasEscala.push(notas[indiceActual]);
}

// Devuelve la matriz 'notasEscala' construida
return notasEscala;
}

function construirGradosEscala(notasEscala, modoGriego) {
  // Inicialización de la matriz 'gradosEscala'
  const gradosEscala = [];

  // Iteración sobre cada nota en la matriz 'notasEscala'
  for (let i = 0; i < notasEscala.length; i++) {
  // Creación del grado en formato 'i + 1°'
  const grado = `${i + 1}°`;

  // Obtención del tipo de acorde por modo y posición en la escala
  const tipoAcorde = obtenerTipoAcordePorModo(modoGriego, i);

  // Obtención de la nota fundamental de la escala en la posición actual
  const notaFundamental = notasEscala[i];

  // Construcción de la cadena con la información del grado, tipo de acorde y nota fundamental
  gradosEscala.push(`${grado}: ${tipoAcorde} (${notaFundamental})`);
  }

  // Devuelve la matriz 'gradosEscala' construida
  return gradosEscala;
}

function obtenerTipoAcordePorModo(modoGriego, indice) {
  switch (modoGriego.toLowerCase()) {
    case 'jonico':
      return indice === 0 || indice === 3 || indice === 4 || indice === 7 ? 'mayor' : (indice === 1 || indice === 2 || indice === 5 ? 'menor' : 'disminuido');
    
    case 'dorico':
      return indice === 0 || indice === 1 || indice === 4 || indice === 7 ? 'menor' : (indice === 2 || indice === 3 || indice === 6 ? 'mayor' : 'disminuido');
    
    case 'frigio':
      return indice === 0 || indice === 3 || indice === 6 || indice === 7 ? 'menor' : (indice === 1 || indice === 2 || indice === 5 ? 'mayor' : 'disminuido');
    
    case 'lidio':
      return indice === 0 || indice === 1 || indice === 4 || indice === 7 ? 'mayor' : (indice === 2 || indice === 5 || indice === 6 ? 'menor' : 'disminuido');
    
    case 'mixolidio':
      return indice === 0 || indice === 3 || indice === 6 || indice === 7 ? 'mayor' : (indice === 1 || indice === 4 || indice === 5 ? 'menor' : 'disminuido');
    
    case 'eolico':
      return indice === 0 || indice === 3 || indice === 4 || indice === 7 ? 'menor' : (indice === 2 || indice === 5 || indice === 6 ? 'mayor' : 'disminuido');
    
    case 'locrio':
      return indice === 0 || indice === 7 ? 'disminuido' : (indice === 1 || indice === 4 || indice === 5 ? 'mayor' : 'menor');
    default:
      return '';
  }
}

function mostrarResultados(notaPrincipal, modoGriego, notasEscala, gradosEscala) {
  // Actualización del contenido del elemento con id 'notaPrincipal' en el DOM
  document.getElementById('notaPrincipal').textContent = `Nota Principal: ${notaPrincipal}`;

  // Actualización del contenido del elemento con id 'modoGriego' en el DOM
  // Si hay un modo griego, se muestra; de lo contrario, se deja vacío
  document.getElementById('modoGriego').textContent = modoGriego ? `Modo Griego: ${modoGriego}` : '';

  // Actualización del contenido del elemento con id 'notasEscala' en el DOM
  document.getElementById('notasEscala').textContent = `Notas de la Escala: ${notasEscala.join(', ')}`;

  // Obtención del contenedor de los grados de la escala en el DOM
  const gradosEscalaContainer = document.getElementById('gradosEscala');
  gradosEscalaContainer.innerHTML = `<strong>Grados de la Escala:</strong><br>`;

  // Iteración sobre los grados de la escala y asignación de colores
  for (let i = 0; i < gradosEscala.length; i++) {
  // Obtención del grado actual
  const grado = gradosEscala[i];

  // Obtención del tipo de acorde por modo y posición en la escala
  const tipoAcorde = obtenerTipoAcordePorModo(modoGriego, i);

  // Obtención del color según el tipo de acorde
  const color = obtenerColorPorTipoAcorde(tipoAcorde);

  // Definición del color del texto (blanco o negro) según el tipo de acorde
  const textoColor = tipoAcorde === 'disminuido' ? 'black' : 'white';

  // Construcción de la cadena HTML con el grado coloreado
  const gradoHTML = `<span style="background-color: ${color}; color: ${textoColor};">${grado}</span>`;

  // Agregado del grado HTML al contenedor de grados de la escala
  gradosEscalaContainer.innerHTML += `${gradoHTML}<br>`;
}
}

function obtenerColorPorTipoAcorde(tipoAcorde) {
// Función que devuelve un color basado en el tipo de acorde proporcionado
  switch (tipoAcorde) {
    // Si el tipo de acorde es 'mayor', devuelve un color rojo con 50% de opacidad
    case 'mayor':
      return 'rgba(255, 0, 0, 0.5)';
    // Si el tipo de acorde es 'menor', devuelve un color azul con 50% de opacidad
    case 'menor':
      return 'rgba(0, 0, 255, 0.5)';
    // Si el tipo de acorde es 'disminuido', devuelve un color amarillo con 100% de opacidad
    case 'disminuido':
      return 'rgba(255, 255, 0, 1)';
    // En cualquier otro caso, devuelve un color transparente (cambiar según sea necesario)
    default:
      return 'rgba(255, 255, 255, 0)';
  }
}
