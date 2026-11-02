<?php
//referencio la conexion
include("conexion.php");

//obtener los datos de la bd
$sql = "SELECT * FROM usuarios"; //seleccionamos todos 
$sql = $conn->query($sql); //ejecutamos la consulta

//creamos un array
$usuarios = array();

//llenamos el array
if ($sql->num_rows > 0) {
    while($fila = $sql->fetch_assoc()) {
        $usuarios[] = $fila;
    }
}

// le avisamos al navegador que lo que va a leer es un formato JSON
header('Content-Type: application/json');

// convertimos el array de PHP a JSON y lo imprimimos para que JS lo cache
echo json_encode($usuarios);

$conn->close();

?>