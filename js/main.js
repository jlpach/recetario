const cardRecetas = []

let recetasContainer = document.getElementById("recetas-Container")

let miFormulario = document.getElementById("formulario")
miFormulario.addEventListener("submit", agregar)

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
            localStorage.setItem("datarecetas", JSON.stringify(data.recetas))
            renderRecetas(data.recetas)
        })
        .catch(error => {
            Swal.fire({
                title: "Ocurrio un error",
                text: "Al cargar las recetas algo fallo. Contacta a tu administrador.",
            });
        })
}