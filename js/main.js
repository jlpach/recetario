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
        ingredientes: ["Puerco", "Frijol"],
        elaboracion: "Colocar el frijol en agua hirviendo, meter el puerco en trozos al agua, servir"
    },
    {
        id: 1,
        titulo: "Chuletas",
        ingredientes: ["Chuletas", "Sal"],
        elaboracion: "Salar las chuletas, ponerlas a freir en aceite, servir"
    },
    {
        id: 2,
        titulo: "Pollo empanizado",
        ingredientes: ["Pollo", "Empanizador", "Huevo", "Aceite"],
        elaboracion: "Mezclar el pollo con el huevo y el empanizador, ponerlas a freir en aceite, servir"
    }
]

// Creacion de la lista de recetas disponibles para modificar o eliminar. disponibilidad global
concatIdTitulo = []

//for (let i = 0; i < recetas.length; i++) {
for (let receta of recetas) {
    //concatIdTitulo.push(recetas[i].id + " - " + recetas[i].titulo + "\n")
    concatIdTitulo.push(receta.id + " - " + receta.titulo + "\n")
}

function agregar() {
    let agregaTitulo = prompt("Agrega el título de la receta")
    let agregaIngrediente = []
    let agregaElaboracion = prompt("Agregar la explicaión de como cocinarias la receta")
    let ingredientesArray = parseInt(prompt("Escribe 1 si deseas agregar un ingrediente. \n\nPresiona 2 para salir.\n\n"))

    // creacion de un objeto que permita almacenar los datos necesarios para una receta
    const receta1 = {
        titulo: agregaTitulo,
        ingredientes: agregaIngrediente,
        elaboracion: agregaElaboracion
    }

    // Pedir al usuario uno o varios ingredientes
    while (ingredientesArray !== 2) {
        if (ingredientesArray === 1) {
            if (agregaIngrediente === undefined || agregaIngrediente.length === 0) {
                let primerIngrediente = prompt("Ingresa un ingrediente")
                agregaIngrediente.push(primerIngrediente)
            } else {
                let otroIngrediente = prompt("Ingresa otro ingrediente")
                agregaIngrediente.push(otroIngrediente)
            }
        } else {
            alert("Numero incorrecto")
        }

        ingredientesArray = parseInt(prompt("Escribe 1 si deseas agregar un ingrediente. \n\nPresiona 2 para salir.\n\n"))
    }

    alert("Receta agregada exitosamente. \n\nPresiona Enter para continuar.")

    // NOTA: Activa el inspector de codigo para ver el resultado en la consola
    console.log(receta1)
}

function modificar() {
    // Mostrar lista de recetas para seleccionar una a modificar
    let recetaSeleccionada = parseInt(prompt("Ingrese el número de la receta que desea modificar: \n" + concatIdTitulo));

    // Verificar si el número ingresado es válido y está dentro del rango de recetas existentes
    if (recetaSeleccionada >= 0 && recetaSeleccionada < recetas.length) {
        // Mostrar los detalles de la receta seleccionada
        let receta = recetas[recetaSeleccionada];

        // Mostrar opciones para modificar
        let opcionModificar = parseInt(prompt(
            "Qué deseas modificar?\n" +
            "1 - Título\n" +
            "2 - Ingredientes\n" +
            "3 - Elaboración\n" +
            "4 - Salir"
        ));

        switch (opcionModificar) {
            case 1:
                // Modificar título
                let nuevoTitulo = prompt("Ingresa el nuevo título:");
                receta.titulo = nuevoTitulo;
                alert("Título modificado exitosamente.");

                // NOTA: Activa el inspector de codigo para ver el resultado en la consola
                console.log(receta.titulo)
                break;
            case 2:
                // Modificar ingredientes
                let nuevosIngredientes = [];
                let ingrediente = prompt("Ingrese un nuevo ingrediente (o dejar vacío para salir):");
                while (ingrediente !== "") {
                    nuevosIngredientes.push(ingrediente);
                    ingrediente = prompt("Ingrese otro ingrediente (o dejar vacío para salir):");
                }
                receta.ingredientes = nuevosIngredientes;
                alert("Ingredientes modificados exitosamente.");

                // NOTA: Activa el inspector de codigo para ver el resultado en la consola
                console.log(receta.ingredientes)
                break;
            case 3:
                // Modificar elaboración
                let nuevaElaboracion = prompt("Ingrese la nueva elaboración:");
                receta.elaboracion = nuevaElaboracion;
                alert("Elaboración modificada exitosamente.");

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
    let recetaSeleccionada = parseInt(prompt("Ingrese el número de la receta que desea eliminar: \n" + concatIdTitulo));

    // Verificar si el número ingresado es válido y está dentro del rango de recetas existentes
    if (recetaSeleccionada >= 0 && recetaSeleccionada < recetas.length) {
        // Confirmar eliminación con el usuario
        let confirmarEliminar = confirm("¿Estás seguro que deseas eliminar la receta '" + recetas[recetaSeleccionada].titulo + "'?");

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

// Inicializacion del programa
let iniciar = parseInt(prompt("Ingresa el numero que corresponda a la acción que deseas hacer:"
    + "\n1 - Crear receta nueva."
    + "\n2 - Modificar receta existente."
    + "\n3 - Eliminar receta existente."
    + "\n4 - Salir."))

// Seleccion de funcion a ejecutar
while (iniciar !== 4) {
    switch (iniciar) {
        case 1:
            agregar()
            break
        case 2:
            modificar()
            break
        case 3:
            eliminar()
            break
        default:
            alert("Opcion incorrecta")
    }

    iniciar = parseInt(prompt("Ingresa el numero que corresponda a la acción que deseas hacer:"
        + "\n1 - Crear receta nueva."
        + "\n2 - Modificar receta existente."
        + "\n3 - Eliminar receta existente."
        + "\n4 - Salir."))
}

// Alerta que avisa de la finalizacion del programa
alert("Programa finalizado, presiona Enter para cerrar")