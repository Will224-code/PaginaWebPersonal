<?php
// referencio la conexion
include("conexion.php");

// obtener los datos del formulario
$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

//insertar los datos
$sql = "INSERT INTO usuarios (usuario, contrasena) VALUES ('$usuario', '$contrasena')";

//EJECUTA la orden
$conn->query($sql);               

//muestra un mensaje
echo "Usuario guardado";          
$conn->close();
?>