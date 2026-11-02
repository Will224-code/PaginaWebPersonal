<?php
$host = "sql202.infinityfree.com";
$user = "if0_43332435";
$password = "wRGDQFCOT96cul";
$database = "if0_43332435_pagina_web_personal";
$port = 3306; // Opcional, pero recomendable

// Creamos la conexión especificando el puerto
$conn = new mysqli($host, $user, $password, $database, $port);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>