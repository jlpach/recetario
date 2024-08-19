let recetasContainer = document.getElementById("seccionDetalles")
let mostrarRecetaAgregada = []
mostrarRecetaAgregada = JSON.parse(localStorage.getItem("datarecetaseleccionada"))

function renderRecetas(arrRecetas) {
    recetasContainer.innerHTML = ""

    arrRecetas.forEach(receta => {
        const card = document.createElement("div")
        card.className = "secRecetaBuscar"
        card.innerHTML = `<div class="card text-center mb-3 shadow-sm" style = "width: 18rem;" >
                                <div class="card-body">
                                    <h4 class="card-title">${receta.titulo}</h4>
                                    <h5>Ingredientes:</h5>
                                    <p class="card-text">${receta.ingredientes}</p>
                                    <h5>Elaboración:</h5>
                                    <p class="card-text">${receta.elaboracion}</p>
                                    <a href="../pages/buscar.html" class="btn btn-primary" id="regresar">Regresar</a>
                                    <a href="../pages/buscar.html" class="btn btn-primary eliminarBoton" id="eliminar">Eliminar</a>
                                </div>
                        </div >`
        recetasContainer.appendChild(card)
    })
}

renderRecetas(mostrarRecetaAgregada)

function eliminar() {
    // Mostrar lista de recetas para seleccionar una a eliminar
    /* let recetaSeleccionada = parseInt(prompt("Ingrese el número de la receta que desea eliminar: \n" + concatIdTitulo)); */

    // Verificar si el número ingresado es válido y está dentro del rango de recetas existentes
    if (recetaSeleccionada >= 0 && recetaSeleccionada < recetas.length) {
        // Confirmar eliminación con el usuario
        /*  let confirmarEliminar = confirm("¿Estás seguro que deseas eliminar la receta '" + recetas[recetaSeleccionada].titulo + "'?"); */

        if (confirmarEliminar) {
            // Eliminar la receta del array
            recetas.splice(recetaSeleccionada, 1);
            alert("Receta eliminada exitosamente.");
        } else {
            alert("Eliminación cancelada.");
        }
    } else {
        alert("Número de receta inválido.");
    }

    // NOTA: Activa el inspector de codigo para ver el resultado en la consola
}