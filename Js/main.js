const notas = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const modosGriegos = ['Jonico', 'Dorico', 'Frigio', 'Lidio', 'Mixolidio', 'Eolico', 'Locrio'];

function generarEscalaAleatoria() {
  const notaPrincipal = notas[Math.floor(Math.random() * notas.length)];
  const modoGriego = modosGriegos[Math.floor(Math.random() * modosGriegos.length)];
  const indiceNotaPrincipal = notas.indexOf(notaPrincipal);

  const notasEscala = construirEscala(indiceNotaPrincipal, obtenerPatronIntervalos(modoGriego));

  mostrarResultados(notaPrincipal, modoGriego, notasEscala);
}

function generarEscalaPorModo(modo) {
  const notaPrincipal = notas[Math.floor(Math.random() * notas.length)];
  const indiceNotaPrincipal = notas.indexOf(notaPrincipal);
  const patronIntervalos = obtenerPatronIntervalos(modo);

  const notasEscala = construirEscala(indiceNotaPrincipal, patronIntervalos);

  mostrarResultados(notaPrincipal, modo, notasEscala);
}

function generarEscala() {
  const modoSelector = document.getElementById('modoSelector');
  const modoSeleccionado = modoSelector.value;

  if (modoSeleccionado === 'aleatorio') {
    generarEscalaAleatoria();
  } else {
    generarEscalaPorModo(modoSeleccionado);
  }
}

function mostrarResultados(notaPrincipal, modoGriego, notasEscala) {
  document.getElementById('notaPrincipal').textContent = `Nota Principal: ${notaPrincipal}`;
  document.getElementById('modoGriego').textContent = `Modo Griego: ${modoGriego}`;
  document.getElementById('notasEscala').textContent = `Notas de la Escala: ${notasEscala.join(', ')}`;
}

function obtenerPatronIntervalos(modo) {
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
      return ['S', 'T', 'T', 'S', 'T', 'T', 'T'];
    default:
      return ['T', 'T', 'S', 'T', 'T', 'T', 'S'];
  }
}

function construirEscala(indiceNotaPrincipal, patronIntervalos) {
  const notasEscala = [notas[indiceNotaPrincipal]];

  let indiceActual = indiceNotaPrincipal;


  for (const intervalo of patronIntervalos) {
    if (intervalo === 'T') {
      indiceActual = (indiceActual + 2) % notas.length;
    } else if (intervalo === 'S') {
      indiceActual = (indiceActual + 1) % notas.length;
    }
// asdasd asegurrar cambio push
    notasEscala.push(notas[indiceActual]);
  }

  return notasEscala;
}

function sumar () {
  
}