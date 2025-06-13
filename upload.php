<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root"; // Cambia por tu usuario de MySQL
$password = ""; // Cambia por tu contraseña de MySQL
$dbname = "db_de_realpasion";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Ruta donde se guardarán las imágenes
$ruta = 'uploads/';
if (!file_exists($ruta)) {
    mkdir($ruta, 0777, true);
}

// Procesar la imagen subida
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $imagen = $_FILES['imagen'];
    $nombreImagen = basename($imagen['name']);
    $rutaCompleta = $ruta . $nombreImagen;

    // Comprobar si el archivo es una imagen
    $tipoImagen = mime_content_type($imagen['tmp_name']);
    if (strpos($tipoImagen, 'image') === false) {
        die("El archivo no es una imagen.");
    }

    // Mover la imagen a la carpeta deseada
    if (move_uploaded_file($imagen['tmp_name'], $rutaCompleta)) {
        // Guardar la ruta en la base de datos
        $sql = "INSERT INTO imagenes (ruta) VALUES ('$rutaCompleta')";
        if ($conn->query($sql) === TRUE) {
            echo "Imagen subida y guardada en la base de datos.";
        } else {
            echo "Error al guardar en la base de datos: " . $conn->error;
        }
    } else {
        echo "Error al mover la imagen.";
    }
}

$conn->close();
?>
