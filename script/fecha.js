// agarra el contenedor div para la implementacion del reloj
const seccionFecha = document.getElementById("fecha");

//opciones de configuracion de la fecha y hora
var configuracionFecha = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year:   "numeric"
};

var configuracionHora = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
}

//funcion para actualizar la fecha
function fechaActualizada() {

    // creamos un objeto de fecha para obtener la fecha actual 
    const fecha = new Date();

    // La fecha, día y hora actual en el índice
    var fechaActual = fecha.toLocaleDateString("es-ES", configuracionFecha);
    var horaActual = fecha.toLocaleTimeString("es-Es", configuracionHora);

    //escribir la fecha y hora
    seccionFecha.innerHTML = "Fecha: "+ fechaActual + "<br> Hora:" + horaActual;
}

// llamamos la funcion de intervalo para que se actualice cada segundo
setInterval(fechaActualizada, 1000);

//llamamos la funcion 
fechaActualizada();