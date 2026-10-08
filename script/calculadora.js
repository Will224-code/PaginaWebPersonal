// llamamos a los elementos del formulario
const formularioCalculadora = document.getElementById('formCalculadora');
const numero1Input = document.getElementById('numero1');
const numero2Input = document.getElementById('numero2');
const resultadoOutput = document.getElementById('resultadoCalculadora');

// logica de los calculos
formularioCalculadora.addEventListener('submit', function(evento) {

    evento.preventDefault();

    //suma
    var suma = parseFloat(numero1Input.value) + parseFloat(numero2Input.value);

    //resta
    var resta = parseFloat(numero1Input.value) - parseFloat(numero2Input.value);

    //multiplicacion
    var multiplicacion = parseFloat(numero1Input.value) * parseFloat(numero2Input.value);

    // division
    let division = "";
    if (parseFloat(numero2Input.value) === 0) { 
        division = "No se puede dividir entre 0";
    } else {
        division = parseFloat(numero1Input.value) / parseFloat(numero2Input.value);
    }

    //mostrar resultado
    resultadoOutput.innerHTML = 
    "suma: "+ suma + "<br>"+ 
    "resta:"+ resta + "<br>"+
    "multiplicacion:"+ multiplicacion + "<br>"+
    "division:"+ division ;
});

