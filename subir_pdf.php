<?php
$conn = new mysqli("localhost", "root", "", "db_de_realpasion");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $pdf = $_FILES['pdf'];
    $nombrePDF = basename($pdf['name']);
    $ruta = 'pdf/' . $nombrePDF;

    if (move_uploaded_file($pdf['tmp_name'], $ruta)) {
        $sql = "INSERT INTO pdfs (ruta) VALUES ('$ruta')";
        if ($conn->query($sql) === TRUE) {
            echo "Archivo PDF subido correctamente.";
        } else {
            echo "Error al guardar en la base de datos: " . $conn->error;
        }
    } else {
        echo "Error al subir el archivo PDF.";
    }
}
$conn->close();
?>
