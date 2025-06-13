<?php
$conn = new mysqli("localhost", "root", "", "db_de_realpasion");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['pdf'];

    // Obtener la ruta del archivo
    $sql = "SELECT ruta FROM pdfs WHERE id=$id";
    $resultado = $conn->query($sql);

    if ($resultado->num_rows > 0) {
        $fila = $resultado->fetch_assoc();
        $rutaPDF = $fila['ruta'];

        // Eliminar el archivo físico
        if (unlink($rutaPDF)) {
            // Eliminar registro de la base de datos
            $sql = "DELETE FROM pdfs WHERE id=$id";
            if ($conn->query($sql) === TRUE) {
                echo "Archivo PDF eliminado correctamente.";
            } else {
                echo "Error al eliminar de la base de datos: " . $conn->error;
            }
        } else {
            echo "Error al eliminar el archivo físico.";
        }
    }
}
$conn->close();
?>
