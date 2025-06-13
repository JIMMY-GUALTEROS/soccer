<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "root"; // Cambia por tu usuario de MySQL
$password = ""; // Cambia por tu contraseña de MySQL
$dbname = "db_de_realpasion";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Obtener datos del formulario
$user = $_POST['username'];
$pass = $_POST['password'];

// Verificar si el nombre de usuario ya está en uso (usando consultas preparadas)
$sql_check = "SELECT * FROM usuarios WHERE username = ?";
$stmt_check = $conn->prepare($sql_check);
$stmt_check->bind_param("s", $user);
$stmt_check->execute();
$result_check = $stmt_check->get_result();

if ($result_check->num_rows > 0) {
    // El nombre de usuario ya está en uso
    echo "El nombre de usuario ya existe. Por favor elige otro.";
} else {
    // Encriptar la contraseña antes de insertarla
    $hashed_pass = password_hash($pass, PASSWORD_DEFAULT);

    // Insertar nuevo usuario con la contraseña encriptada
    $sql = "INSERT INTO usuarios (username, password) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $user, $hashed_pass);

    if ($stmt->execute()) {
        echo "Usuario registrado exitosamente";
    } else {
        echo "Error: " . $stmt->error;
    }
}

$stmt_check->close();
$conn->close();
?>
