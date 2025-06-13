<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión de PDFs - REAL PASION F.C.</title>
    <link rel="stylesheet" href="estiloformulariomodificar.css">
    <link rel="stylesheet" href="estilo_boton.css"> <!-- Enlace al CSS externo -->
</head>
<body>
    <div class="container">
        <h2>Modificación de Archivos PDF</h2>

         <!-- Enlace "Ver Cambio de la Modificación" en la parte superior izquierda -->
         <a href="campeonatos (2).php" class="ver-cambio">Ver Cambio de la Modificación</a>


        <!-- Sección para subir PDF -->
        <section class="section">
            <h1>Subir PDF</h1>
            <h3>Estás a punto de subir un archivo PDF en el apartado de Campeonatos de Real Pasion F.C</h3>
            <form action="subir_pdf.php" method="post" enctype="multipart/form-data">
                <label for="pdf">Selecciona un archivo PDF:</label>
                <input type="file" name="pdf" id="pdf" accept="application/pdf" required>
                <input type="submit" value="Subir PDF" class="btn">
            </form>
        </section>

        <!-- Sección para actualizar PDF -->
        <section class="section">
            <h1>Actualizar PDF</h1>
            <form action="actualizar_pdf.php" method="POST" enctype="multipart/form-data">
                <label for="id">Selecciona el registro a actualizar:</label>
                <select name="id" id="id" required>
                    <?php
                    $conn = new mysqli("localhost", "root", "", "db_de_realpasion");
                    if ($conn->connect_error) {
                        die("Conexión fallida: " . $conn->connect_error);
                    }

                    $sql = "SELECT id, ruta FROM pdfs";
                    $resultado = $conn->query($sql);

                    if ($resultado->num_rows > 0) {
                        while ($row = $resultado->fetch_assoc()) {
                            echo "<option value='" . $row['id'] . "'>" . basename($row['ruta']) . "</option>";
                        }
                    } else {
                        echo "<option>No hay archivos PDF disponibles</option>";
                    }
                    ?>
                </select>

                <div id="vistaPrevia">
                    <?php
                    if (isset($_POST['id'])) {
                        $idSeleccionado = $_POST['id'];
                        $sql = "SELECT ruta FROM pdfs WHERE id = $idSeleccionado";
                        $resultado = $conn->query($sql);

                        if ($resultado->num_rows > 0) {
                            $fila = $resultado->fetch_assoc();
                            $rutaPDF = $fila['ruta'];
                            echo "<p>Archivo actual: <a href='$rutaPDF' target='_blank'>" . basename($rutaPDF) . "</a></p>";
                        }
                    }
                    ?>
                </div>

                <label for="pdf">Selecciona un nuevo archivo PDF:</label>
                <input type="file" name="pdf" id="pdf" accept="application/pdf" required>
                <button type="submit" class="btn">Actualizar PDF</button>
            </form>
        </section>

        <!-- Sección para eliminar PDF -->
        <section class="section">
            <h1>Eliminar PDF</h1>
            <form action="eliminar_pdf.php" method="POST" enctype="multipart/form-data">
                <label for="pdf">Selecciona el archivo PDF a eliminar:</label>
                <select name="pdf" id="pdf">
                    <?php
                    $sql = "SELECT id, ruta FROM pdfs";
                    $resultado = $conn->query($sql);

                    if ($resultado->num_rows > 0) {
                        while ($row = $resultado->fetch_assoc()) {
                            echo "<option value='" . $row['id'] . "'>" . basename($row['ruta']) . "</option>";
                        }
                    } else {
                        echo "<option>No hay archivos PDF disponibles</option>";
                    }
                    ?>
                </select>
                <button type="submit" name="borrar" class="btn">Eliminar PDF</button>
            </form>
        </section>
    </div>
</body>
</html>
