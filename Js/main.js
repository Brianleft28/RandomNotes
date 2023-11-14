 // Definir las notas posibles para las escalas
 const notas = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

 // Función para generar una escala aleatoria
 function generarEscala() {
     // Seleccionar una nota aleatoria
     const notaAleatoria = notas[Math.floor(Math.random() * notas.length)];

     // Determinar si la escala será mayor, menor o pentatónica (aleatorio)
     const tipoEscala = Math.random() < 0.33 ? 'Mayor' : (Math.random() < 0.5 ? 'Menor' : 'Pentatónica');

     // Construir la escala
     let escala = '';
     switch (tipoEscala) {
         case 'Mayor':
             escala = `${notaAleatoria} Mayor: ${notaAleatoria} ${notas[(notas.indexOf(notaAleatoria) + 2) % 7]} ${notas[(notas.indexOf(notaAleatoria) + 4) % 7]} ${notas[(notas.indexOf(notaAleatoria) + 5) % 7]} ${notas[(notas.indexOf(notaAleatoria) + 7) % 7]} ${notas[(notas.indexOf(notaAleatoria) + 9) % 7]} ${notas[(notas.indexOf(notaAleatoria) + 11) % 7]}`;
             break;
         case 'Menor':
             escala = `${notaAleatoria} Menor: ${notaAleatoria} ${notas[(notas.indexOf(notaAleatoria) + 2) % 7]} ${notas[(notas.indexOf(notaAleatoria) + 3) % 7]} ${notas[(notas.indexOf(notaAleatoria) + 5) % 7]} ${notas[(notas.indexOf(notaAleatoria) + 7) % 7]} ${notas[(notas.indexOf(notaAleatoria) + 8) % 7]} ${notas[(notas.indexOf(notaAleatoria) + 10) % 7]}`;
             break;
         case 'Pentatónica':
             escala = `${notaAleatoria} Pentatónica: ${notaAleatoria} ${notas[(notas.indexOf(notaAleatoria) + 2) % 7]} ${notas[(notas.indexOf(notaAleatoria) + 4) % 7]} ${notas[(notas.indexOf(notaAleatoria) + 7) % 7]} ${notas[(notas.indexOf(notaAleatoria) + 9) % 7]}`;
             break;
     }

     // Mostrar la escala generada
     document.getElementById('scale-display').innerText = escala;
 }
 //////// 
 // RANDOM NOTE 
 ///////
 