/*
1 - Declara variables, constantes y arrays
2 - Crea 3 o más funciones JS que generen interacción.
3 - Agrega los ciclos de iteración y/o condicionales necesarios, para que tu proyecto funcione correctamente.
4 - Integra el uso de la Consola JS y de los cuadros de diálogo Prompt, Confirm y Alert
*/

// Dado que no se tiene conocimiento de base de datos aun, se crea un arreglo de objetos para 
// ser usados como datos al momento de modificar o eliminar
let recetas = [
    {
        id: 0,
        titulo: "Frijol con puerco",
        ingredientes: "Puerco, Frijol",
        elaboracion: "Colocar el frijol en agua hirviendo, meter el puerco en trozos al agua, servir"
    },
    {
        id: 1,
        titulo: "Chuletas",
        ingredientes: "Chuletas, Sal",
        elaboracion: "Salar las chuletas, ponerlas a freir en aceite, servir"
    },
    {
        id: 2,
        titulo: "Pollo empanizado",
        ingredientes: "Pollo, Empanizador, Huevo, Aceite",
        elaboracion: "Mezclar el pollo con el huevo y el empanizador, ponerlas a freir en aceite, servir"
    }
]

const cardRecetas = []

let recetasContainer = document.getElementById("recetas-Container")

function renderRecetas(arrRecetas) {
    recetasContainer.innerHTML = ""

    /*     const listaRecetasTitulo = document.createElement("div")
        listaRecetasTitulo.innerHTML = `<h3>Lista actualizada de recetas</h3>`
        recetasContainer.appendChild(listaRecetasTitulo) */

    arrRecetas.forEach(receta => {
        const card = document.createElement("div")
        card.innerHTML = `<h4>${receta.titulo}</h4>
                        <p>${receta.elaboracion}</p>`
        recetasContainer.appendChild(card)
        card.classList.add("listRecetasDinamica")
    })
}

// Creacion de la lista de recetas disponibles para modificar o eliminar. disponibilidad global
concatIdTitulo = []

for (let receta of recetas) {
    concatIdTitulo.push(receta.id + " - " + receta.titulo + "\n")
}

let miFormulario = document.getElementById("formulario")
miFormulario.addEventListener("submit", agregar)

function agregar(e) {
    e.preventDefault()

    let miTitulo = document.getElementById("inputTitulo").value
    let miIngrediente = document.getElementById("inputIngrediente").value
    let miElaboracion = document.getElementById("inputElaboracion").value

    const receta1 = {
        id: recetas.length,
        titulo: miTitulo,
        ingredientes: miIngrediente,
        elaboracion: miElaboracion
    }

    recetas.push(receta1)

    renderRecetas(recetas)

    /* cardRecetas.push(recetas) */
    localStorage.setItem("recetas", JSON.stringify(recetas))
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