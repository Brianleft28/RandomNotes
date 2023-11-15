// Definición de las notas musicales
const notas = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Función para generar notas aleatorias sin repeticiones consecutivas
function generarNotas() {
    // Obtener el número de notas deseado del input
    const noteCountInput = document.getElementById('note-count');
    const noteCount = parseInt(noteCountInput.value, 10);

    // Validar que el número de notas esté en el rango correcto
    if (isNaN(noteCount) || noteCount < 2 || noteCount > 12) {
        alert('Please, enter a number from 2 to 12');
        return;
    }

    // Generar notas aleatorias sin repeticiones consecutivas
    let notasGeneradas = [];
    let notaAnterior = '';

    for (let i = 0; i < noteCount; i++) {
        let notaAleatoria;

        do {
            notaAleatoria = notas[Math.floor(Math.random() * notas.length)];
        } while (notaAleatoria === notaAnterior);

        notasGeneradas.push(notaAleatoria);
        notaAnterior = notaAleatoria;
    }

    // Mostrar las notas generadas en el elemento con id "note-display"
    const noteDisplay = document.getElementById('note-display');
    noteDisplay.innerText = 'Notas Generadas: ' + notasGeneradas.join(', ');
}