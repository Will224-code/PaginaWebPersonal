"use strict";

// 1. Atrapamos el formulario y la etiqueta output de resultado
const formulario = document.getElementById("formularioContacto");
const mensajeOutput = document.getElementById("mensajeValidacion");

// 2. Escuchamos el evento de envío (submit)
formulario.addEventListener("submit", (evento) => {
    
    // Frenamos la recarga de la página para procesar con JS
    evento.preventDefault();

    // 3. Mostramos el mensaje solicitado en la pantalla de forma elegante
    mensajeOutput.textContent = "Enviado Validación de formularios de contacto.html";
    
    // Opcional: Le damos un estilo verde al texto directo desde JS
    mensajeOutput.style.color = "green";
    mensajeOutput.style.fontWeight = "bold";

    // Opcional: Si quieres limpiar las casillas después de enviar, descomenta la siguiente línea:
    // formulario.reset();
});
