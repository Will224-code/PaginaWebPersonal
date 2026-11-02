<?php
include("conexion.php");

if (isset($_GET['id']) && isset($_GET['usuario'])) {
    $id = $_GET['id'];
    $nuevoUsuario = $_GET['usuario'];
    
    $sql = "UPDATE usuarios SET usuario = '$nuevoUsuario' WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        echo "Usuario modificado correctamente.";
    } else {
        echo "Error al modificar: " . $conn->error;
    }
}
$conn->close();
?>
