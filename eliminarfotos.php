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

// Procesar la eliminación de la imagen
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['borrar'])) {
    $imagenId = $_POST['imagen'];

    // Obtener la ruta de la imagen desde la base de datos
    $sql = "SELECT ruta FROM imagenes WHERE id = $imagenId";
    $resultado = $conn->query($sql);

    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_assoc();
        $rutaImagen = $fila['ruta'];

        // Verificar si el archivo existe y eliminarlo del servidor
        if (file_exists($rutaImagen)) {
            if (unlink($rutaImagen)) {
                // Eliminar la referencia de la imagen en la base de datos
                $sql = "DELETE FROM imagenes WHERE id = $imagenId";
                if ($conn->query($sql) === TRUE) {
                    echo "Imagen eliminada correctamente.";
                } else {
                    echo "Error al eliminar la imagen de la base de datos: " . $conn->error;
                }
            } else {
                echo "Error al eliminar la imagen del servidor.";
            }
        } else {
            echo "La imagen no existe en el servidor.";
        }
    } else {
        echo "Imagen no encontrada.";
    }
}

$conn->close();
?>
