<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "u379243797_jimmygusuarios"; // Cambia por tu usuario de MySQL
$password = "J1006722282y#09"; // Cambia por tu contraseña de MySQL
$dbname = "u379243797_jimmyusuarios";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Obtener datos del formulario
$user = $_POST['username'];
$pass = $_POST['password'];

// Consultar base de datos para verificar credenciales
$sql = "SELECT * FROM usuarios WHERE username = '$user' AND password = '$pass'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Usuario y contraseña coinciden
    header("Location: https://www.entuhogar.coca-cola.com.co/productos");
    exit();
} else {
    // Usuario o contraseña incorrectos
    echo "Usuario o contraseña incorrectos.";
}

$conn->close();
?>
