let recetasContainer = document.getElementById("seccionDetalles")

let mostrarRecetaAgregada = []
mostrarRecetaAgregada = JSON.parse(localStorage.getItem("datarecetaseleccionada"))

todasLasRecetasAgregadas = JSON.parse(localStorage.getItem("datarecetas")) || []

renderRecetas(mostrarRecetaAgregada)

function renderRecetas(arrRecetas) {
    recetasContainer.innerHTML = "";

    arrRecetas.forEach(receta => {
        const card = document.createElement("div");
        card.className = "secRecetaBuscar";
        card.innerHTML = `<div class="card text-center mb-3 shadow-sm" style = "width: 18rem;" >
                                <div class="card-body">
                                    <h4 class="card-title">${receta.titulo}</h4>
                                    <h5>Ingredientes:</h5>
                                    <p class="card-text">${receta.ingredientes}</p>
                                    <h5>Elaboración:</h5>
                                    <p class="card-text">${receta.elaboracion}</p>
                                    <a href="../pages/buscar.html" class="btn btn-primary" id="regresar">Regresar</a>
                                    <a href="#" class="btn btn-primary eliminarBoton" data-id="${receta.id}">Eliminar</a>
                                </div>
                        </div>`;

        recetasContainer.appendChild(card);
    });
}

recetasContainer.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target && e.target.classList.contains("eliminarBoton")) {
        const recetaId = e.target.getAttribute("data-id");
        Swal.fire({
            title: "¿Estás seguro de borrar la receta?",
            text: "¡No podrás revertir la acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, bórralo!"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminar(recetaId);

                Swal.fire({
                    title: "¡Borrado!",
                    text: "Receta borrada exitosamente.",
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.assign("../pages/buscar.html");
                    }
                });
            }
        });
    }
});

function eliminar(id) {
    const posicion = todasLasRecetasAgregadas.findIndex(receta => receta.id == id);
    if (posicion !== -1) {
        todasLasRecetasAgregadas.splice(posicion, 1);
        localStorage.setItem("datarecetas", JSON.stringify(todasLasRecetasAgregadas));
    }
}