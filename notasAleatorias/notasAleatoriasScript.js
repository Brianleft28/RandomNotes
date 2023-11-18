var escalaCromatica = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

    function generarNotas() {
      var cantidad = parseInt(document.getElementById("cantidad").value);
      var tonica = document.getElementById("tonica").value;
      var modo = document.getElementById("modo").value;

      if (tonica === "aleatorio") {
        // Obtener una tónica aleatoria
        tonica = escalaCromatica[Math.floor(Math.random() * escalaCromatica.length)];
      }

      if (modo === "aleatorio") {
        // Obtener un modo aleatorio
        var modos = ['jonico', 'dorico', 'frigio', 'lidio', 'mixolidio', 'eolico', 'locrio'];
        modo = modos[Math.floor(Math.random() * modos.length)];
      }

      var tonicaIndex = escalaCromatica.indexOf(tonica);
      var notas = obtenerNotas(tonicaIndex, modo);

      var notasAleatorias = [];
      for (var i = 0; i < cantidad; i++) {
        var notaAleatoria = notas[Math.floor(Math.random() * notas.length)];
        notasAleatorias.push(notaAleatoria);
      }

      var resultado = `Tónica: ${tonica}, Modo: ${modo}<br>Notas: ${notasAleatorias.join(', ')}`;
      document.getElementById("resultado").innerHTML = resultado;
    }

    function obtenerNotas(tonicaIndex, modo) {
      var modos = {
        'jonico': [0, 2, 4, 5, 7, 9, 11],
        'dorico': [0, 2, 3, 5, 7, 9, 10],
        'frigio': [0, 1, 3, 5, 7, 8, 10],
        'lidio': [0, 2, 4, 6, 7, 9, 11],
        'mixolidio': [0, 2, 4, 5, 7, 9, 10],
        'eolico': [0, 2, 3, 5, 7, 8, 10],
        'locrio': [0, 1, 3, 5, 6, 8, 10],
      };

      var formula = modos[modo];

      var notas = [];
      for (var i = 0; i < formula.length; i++) {
        var indiceNota = (tonicaIndex + formula[i]) % 12;
        notas.push(escalaCromatica[indiceNota]);
      }

      return notas;
    }