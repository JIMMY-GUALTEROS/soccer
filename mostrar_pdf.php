<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_de_realpasion";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consulta para obtener los PDFs
$sql = "SELECT ruta FROM pdfs";
$result = $conn->query($sql);

// Verificar si hay resultados
if ($result->num_rows > 0) {
    echo '<section class="section" style="text-align: center;">';
    echo '<table border="1" style="margin: 0 auto; border-collapse: collapse; width: 80%;">'; // Tabla centrada
    echo '<thead>';
    echo '<tr style="background-color: #f2f2f2;">';
    echo '<th style="padding: 10px; border: 1px solid #ddd;">ID</th>';
    echo '<th style="padding: 10px; border: 1px solid #ddd;">Nombre del Documento</th>';
    echo '</tr>';
    echo '</thead>';
    echo '<tbody>';
    
    $counter = 1; // Contador para IDs
    
    // Salida de cada fila
    while ($row = $result->fetch_assoc()) {
        // Extraer el nombre del archivo de la ruta
        $fileName = basename($row['ruta']);
        
        echo '<tr>';
        echo '<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">' . $counter . '</td>';
        echo '<td style="padding: 10px; border: 1px solid #ddd; text-align: center;">';
        echo '<a href="' . htmlspecialchars($row['ruta']) . '" target="_blank" style="text-decoration: none; color: #007bff;">' . htmlspecialchars($fileName) . '</a>';
        echo '</td>';
        echo '</tr>';
        
        $counter++; // Incrementar el contador
    }
    
    echo '</tbody>';
    echo '</table>';
    echo '</section>';
} else {
    echo '<p style="text-align: center;">No hay documentos PDF subidos.</p>';
}

$conn->close();
?>

