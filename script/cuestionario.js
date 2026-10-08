// 1. Atrapamos el botón y el output para el resultado
const botonVerificar = document.getElementById("verificar");
const resultadoQuiz = document.getElementById("resultadoCuestionario");

// 2. Escuchamos el clic del botón
botonVerificar.addEventListener("click", () => {
    
    // El truco definitivo: Buscamos el input con el name "capital" que esté seleccionado (:checked)
    const opcionSeleccionada = document.querySelector('input[name="capital"]:checked');

    // Validación por si el usuario no ha marcado nada todavía
    if (!opcionSeleccionada) {
        resultadoQuiz.textContent = "Por favor, selecciona una opción.";
        return; // Detiene el código aquí
    }

    // 3. Revisamos el valor de la opción que el usuario eligió
    if (opcionSeleccionada.value === "correcto") {
        resultadoQuiz.textContent = "¡Correcto!.";
    } else {
        resultadoQuiz.textContent = "Incorrecto Inténtalo de nuevo.";
    }
});
