function generarEscalaAleatoria() {
    // Notas musicales posibles
    const notas = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  
    // Tipo de alteraciones posibles: bemol, sostenido o ninguno
    const alteraciones = ['b', '#', ''];
  
    // Seleccionar una nota aleatoria
    const notaInicial = notas[Math.floor(Math.random() * notas.length)];
  
    // Seleccionar una alteración aleatoria
    const alteracionInicial = alteraciones[Math.floor(Math.random() * alteraciones.length)];
  
    // Construir la primera nota de la escala
    let notaActual = notaInicial + alteracionInicial;
  
    // Crear un array para almacenar la escala
    const escala = [notaActual];
  
    // Definir la secuencia de tonos y semitonos para una escala mayor
    const secuenciaIntervalos = [2, 2, 1, 2, 2, 2, 1];
  
    // Generar las notas restantes de la escala
    for (let i = 0; i < secuenciaIntervalos.length; i++) {
      // Obtener el siguiente intervalo de la secuencia
      const intervalo = secuenciaIntervalos[i];
  
      // Calcular la posición de la próxima nota en el array de notas
      let siguientePosicion = (notas.indexOf(notaActual[0]) + intervalo) % notas.length;
  
      // Seleccionar una alteración aleatoria para la próxima nota
      const siguienteAlteracion = alteraciones[Math.floor(Math.random() * alteraciones.length)];
  
      // Construir la próxima nota de la escala
      notaActual = notas[siguientePosicion] + siguienteAlteracion;
  
      // Agregar la nota a la escala
      escala.push(notaActual);
    }
  
    return escala;
  }
  
  // Ejemplo de uso
  /* const escalaAleatoria = generarEscalaAleatoria();
  console.log('Escala Aleatoria:', escalaAleatoria); */

  const escalaAleatoria = document.getElementById('note-display');
    escalaAleatoria.innerText = 'Escala Aleatoria: ' + escalaAleatoria.join(', ');