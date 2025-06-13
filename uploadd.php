<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subir Imagen - REAL PASION F.C.</title>
    <link rel="stylesheet" href="estiloformulariomodificar.css">
    <link rel="stylesheet" href="estilo_boton.css"> <!-- Enlace al CSS externo -->
</head>
<body>
    <div class="container">
        <h2>Modificación de Fotos</h2>

        <!-- Enlace "Ver Cambio de la Modificación" en la parte superior izquierda -->
        <a href="campeonatos.php#galeria" class="ver-cambio">Ver Cambio de la Modificación</a>

        <section class="section">
            <h1>Subir Imagen</h1>
            <h3>Estás a punto de subir una imagen en el apartado de Galería de Real Pasion F.C</h3>
            <form action="upload.php" method="post" enctype="multipart/form-data">
                <label for="imagen">Selecciona una imagen:</label>
                <input type="file" name="imagen" id="imagen" required>
                <input type="submit" value="Subir Imagen" class="btn">
            </form>
        </section>

        <section class="section">
            <h1>Actualizar Imagen</h1>
            <form action="actualizar.php" method="POST" enctype="multipart/form-data">
                <label for="id">Selecciona el registro a actualizar:</label>
                <select name="id" id="id" required>
                    <?php
                    $servername = "localhost";
                    $username = "root";
                    $password = "";
                    $dbname = "db_de_realpasion";
                    $conn = new mysqli($servername, $username, $password, $dbname);

                    if ($conn->connect_error) {
                        die("Conexión fallida: " . $conn->connect_error);
                    }

                    $sql = "SELECT id, ruta FROM imagenes";
                    $resultado = $conn->query($sql);

                    if ($resultado->num_rows > 0) {
                        while ($row = $resultado->fetch_assoc()) {
                            echo "<option value='" . $row['id'] . "'>" . basename($row['ruta']) . "</option>";
                        }
                    } else {
                        echo "<option>No hay imágenes disponibles</option>";
                    }
                    ?>
                </select>

                <div id="vistaPrevia">
                    <?php
                    if (isset($_POST['id'])) {
                        $idSeleccionado = $_POST['id'];
                        $sql = "SELECT ruta FROM imagenes WHERE id = $idSeleccionado";
                        $resultado = $conn->query($sql);

                        if ($resultado->num_rows > 0) {
                            $fila = $resultado->fetch_assoc();
                            $rutaImagen = $fila['ruta'];
                            echo "<img src='$rutaImagen' alt='Imagen actual' width='200'>";
                        }
                    }
                    ?>
                </div>

                <label for="imagen">Selecciona una nueva imagen:</label>
                <input type="file" name="imagen" id="imagen" accept="image/*" required>

                <button type="submit" class="btn">Actualizar imagen</button>
            </form>
        </section>

        <section class="section">
            <h1>Borrar Imagen</h1>
            <form action="eliminarfotos.php" method="POST" enctype="multipart/form-data">
                <label for="imagen">Selecciona la imagen a eliminar:</label>
                <select name="imagen" id="imagen">
                    <?php
                    $sql = "SELECT id, ruta FROM imagenes";
                    $resultado = $conn->query($sql);

                    if ($resultado->num_rows > 0) {
                        while ($row = $resultado->fetch_assoc()) {
                            echo "<option value='" . $row['id'] . "'>" . basename($row['ruta']) . "</option>";
                        }
                    } else {
                        echo "<option>No hay imágenes disponibles</option>";
                    }
                    ?>
                </select>
                <button type="submit" name="borrar" class="btn">Eliminar Imagen</button>
            </form>
        </section>
    </div>
</body>
</html>
