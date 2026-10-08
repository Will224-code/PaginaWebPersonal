//agarramos el valor del formulario
const formulario = document.getElementById("formularioConvertidor");
const monedaElejido = document.getElementById("monedaElejido");
const monedaCambio = document.getElementById("monedaCambio");
const cantidad = document.getElementById("cantidad");
const resultadoFormulario = document.getElementById("resultado");

//damos formato a los numeros
const formatoNumeroResultadoUSD = new Intl.NumberFormat("es-Es",{
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol"
});

const formatoNumeroResultadoMXN = new Intl.NumberFormat("es-Es",{
    style: "currency",
    currency: "MXN",
    currencyDisplay: "symbol"
});

const formatoNumeroResultadoEUR = new Intl.NumberFormat("es-Es",{
    style: "currency",
    currency: "EUR",
    currencyDisplay: "symbol"
});


//logica 
formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    //agarramos valores del formulario
    var tipoMonedaElejida = monedaElejido.value;
    var tipoMonedaCambio = monedaCambio.value;
    var cantidadMoneda = parseFloat(cantidad.value); 
    
    //valores de convercion de monedas
    var valorUSD = 1;
    var valorMXN = 18.00;
    var valorEUR = 0.92;
    var resultado = 0;
    var textoFormato="";

    //operaciones de conversion de monedas
    if(tipoMonedaElejida === "USD" && tipoMonedaCambio === "MXN"){
        resultado = cantidadMoneda * valorMXN;
        textoFormato = formatoNumeroResultadoMXN.format(resultado);
    }

    if(tipoMonedaElejida === "USD" && tipoMonedaCambio === "EUR"){
        resultado = cantidadMoneda * valorEUR;
        textoFormato = formatoNumeroResultadoEUR.format(resultado);
    }

    if(tipoMonedaElejida === "MXN" && tipoMonedaCambio === "USD"){
        resultado = cantidadMoneda / valorMXN;
        textoFormato = formatoNumeroResultadoUSD.format(resultado);
    }

    if(tipoMonedaElejida === "MXN" && tipoMonedaCambio === "EUR"){
        resultado = cantidadMoneda / valorMXN * valorEUR;
        textoFormato = formatoNumeroResultadoEUR.format(resultado);
    }
    
    if(tipoMonedaElejida === "EUR" && tipoMonedaCambio === "USD"){
        resultado = cantidadMoneda / valorEUR;
        textoFormato = formatoNumeroResultadoUSD.format(resultado);
    }

    if(tipoMonedaElejida === "EUR" && tipoMonedaCambio === "MXN"){
        resultado = cantidadMoneda / valorEUR * valorMXN;
        textoFormato = formatoNumeroResultadoMXN.format(resultado);
    }

    if (tipoMonedaElejida === tipoMonedaCambio) {
        resultado = cantidadMoneda;
        
        // Evaluamos cuál moneda es para aplicarle su formato elegante correspondiente
        if (tipoMonedaElejida === "USD") textoFormato = formatoNumeroResultadoUSD.format(resultado);
        if (tipoMonedaElejida === "MXN") textoFormato = formatoNumeroResultadoMXN.format(resultado);
        if (tipoMonedaElejida === "EUR") textoFormato = formatoNumeroResultadoEUR.format(resultado);
    }

    //escribimos el resultado en el output
    resultadoFormulario.innerHTML = "Resultado: " + textoFormato;
});

