<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_de_realpasion";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener las imágenes más recientes primero
$query = "SELECT ruta FROM imagenes ORDER BY id DESC"; // ID DESC para mostrar primero las últimas imágenes
$resultado = mysqli_query($conn, $query);

$rutas_imagenes = [];
while ($fila = mysqli_fetch_assoc($resultado)) {
    $rutas_imagenes[] = htmlspecialchars($fila['ruta']);
}

mysqli_close($conn);
?>
