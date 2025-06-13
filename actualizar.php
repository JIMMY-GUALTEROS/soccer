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

// Procesar la actualización de la imagen
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $imagenId = $_POST['id'];
    $nuevaImagen = $_FILES['imagen'];

    // Obtener la ruta de la imagen actual desde la base de datos
    $sql = "SELECT ruta FROM imagenes WHERE id = $imagenId";
    $resultado = $conn->query($sql);

    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_assoc();
        $rutaImagenActual = $fila['ruta'];

        // Eliminar la imagen anterior del servidor
        if (file_exists($rutaImagenActual)) {
            unlink($rutaImagenActual);
        }

        // Procesar la nueva imagen
        $ruta = 'uploads/';
        $nombreImagen = basename($nuevaImagen['name']);
        $rutaCompleta = $ruta . $nombreImagen;

        // Comprobar si el archivo es una imagen
        $tipoImagen = mime_content_type($nuevaImagen['tmp_name']);
        if (strpos($tipoImagen, 'image') === false) {
            die("El archivo no es una imagen válida.");
        }

        // Mover la nueva imagen a la carpeta de uploads
        if (move_uploaded_file($nuevaImagen['tmp_name'], $rutaCompleta)) {
            // Actualizar la ruta de la imagen en la base de datos
            $sql = "UPDATE imagenes SET ruta = '$rutaCompleta' WHERE id = $imagenId";
            if ($conn->query($sql) === TRUE) {
                echo "Imagen actualizada correctamente.";
            } else {
                echo "Error al actualizar la imagen en la base de datos: " . $conn->error;
            }
        } else {
            echo "Error al mover la nueva imagen.";
        }
    } else {
        echo "Registro de imagen no encontrado.";
    }
}

$conn->close();
?>
