function mostrarVentanaEmergente(imagenSrc, nombreProducto, precio, descripcion) {
    document.getElementById("ventanaEmergente").style.display = "block";
    document.getElementById("imagenVentanaEmergente").src = imagenSrc;

    const contenido = `<div style="text-align: center;">
                      <p style="font-size: 14px; color: white;">${nombreProducto}</p>
                      <p style="font-size: 14px; color: white;">${precio}</p>
                      <p style="font-size: 12px; color: white;">${descripcion}</p>
                    </div>`;

    document.getElementById("detallesProducto").innerHTML = contenido;
}

function cerrarVentanaEmergente() {
    document.getElementById("ventanaEmergente").style.display = "none";
}