const cardRecetas = []

let recetasContainer = document.getElementById("recetas-Container")

function renderRecetas(arrRecetas) {
    recetasContainer.innerHTML = ""

    arrRecetas.forEach(receta => {
        const card = document.createElement("div")
        card.className = "secRecetaBuscar"
        card.innerHTML = `<div class="card text-center mb-3 shadow-sm" style = "width: 18rem;" >
                                <div class="card-body">
                                    <h4 class="card-title">${receta.titulo}</h4>
                                    <p class="card-text">${receta.elaboracion}</p>
                                    <a href="../pages/detalle.html" class="btn btn-primary">Detalles</a>
                                </div>
                        </div >`
        recetasContainer.appendChild(card)
    })
}

let miFormulario = document.getElementById("formulario")
miFormulario.addEventListener("submit", agregar)

function agregar(e) {
    e.preventDefault()

    let miTitulo = document.getElementById("inputTitulo").value
    let miIngrediente = document.getElementById("inputIngrediente").value
    let miElaboracion = document.getElementById("inputElaboracion").value

    fetch("../recetas.json")
        .then(response => {
            if (!response.ok) {
                Swal.fire({
                    title: "Ocurrio un error",
                    text: "Al cargar las recetas algo fallo. Contacta a tu administrador.",
                });
            }
            return response.json();
        })
        .then(data => {
            const receta1 = {
                id: data.recetas.length + 1,
                titulo: miTitulo,
                ingredientes: miIngrediente,
                elaboracion: miElaboracion
            }

            data.recetas.push(receta1)
            localStorage.setItem("data.recetas", JSON.stringify(data.recetas))
            renderRecetas(data.recetas)
        })
        .catch(error => {
            Swal.fire({
                title: "Ocurrio un error",
                text: "Al cargar las recetas algo fallo. Contacta a tu administrador.",
            });
        })
}






function modificar() {
    // Mostrar lista de recetas para seleccionar una a modificar

    // Verificar si el número ingresado es válido y está dentro del rango de recetas existentes
    if (recetaSeleccionada >= 0 && recetaSeleccionada < recetas.length) {
        // Mostrar los detalles de la receta seleccionada
        let receta = recetas[recetaSeleccionada];

        switch (opcionModificar) {
            case 1:
                // Modificar título
                receta.titulo = nuevoTitulo;

                // NOTA: Activa el inspector de codigo para ver el resultado en la consola
                console.log(receta.titulo)
                break;
            case 2:
                // Modificar ingredientes
                let nuevosIngredientes = [];
                /* let ingrediente = prompt("Ingrese un nuevo ingrediente (o dejar vacío para salir):"); */
                while (ingrediente !== "") {
                    nuevosIngredientes.push(ingrediente);
                    /* ingrediente = prompt("Ingrese otro ingrediente (o dejar vacío para salir):"); */
                }
                receta.ingredientes = nuevosIngredientes;
                /* alert("Ingredientes modificados exitosamente.");
 */
                // NOTA: Activa el inspector de codigo para ver el resultado en la consola
                console.log(receta.ingredientes)
                break;
            case 3:
                // Modificar elaboración
                /* let nuevaElaboracion = prompt("Ingrese la nueva elaboración:"); */
                receta.elaboracion = nuevaElaboracion;
                /* alert("Elaboración modificada exitosamente."); */

                // NOTA: Activa el inspector de codigo para ver el resultado en la consola
                console.log(receta.elaboracion)
                break;
            case 4:
                alert("Saliendo de la modificación.");
                break;
            default:
                alert("Opción inválida.");
        }
    } else {
        alert("Número de receta inválido.");
    }
}

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
    console.log(recetas)
}