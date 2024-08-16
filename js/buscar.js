let cardContainer = document.getElementById("cardRecetaBuscar")

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
        renderRecetasBuscador(data.recetas)
    })
    .catch(error => {
        Swal.fire({
            title: "Ocurrio un error",
            text: "Al cargar las recetas algo fallo. Contacta a tu administrador.",
        });
    })

function renderRecetasBuscador(cardItems) {
    if (cardItems === "empty") {
        Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "Aún no hay recetas, agrega una.",
            footer: '<a href="../pages/crear.html" rel="noopener noreferrer">Ir a crear recetas</a>'
        });
    } else {
        for (const receta of cardItems) {
            const card = document.createElement("div")
            card.className = "secRecetaBuscar"

            card.innerHTML = `<div class="card text-center mb-3 shadow-sm" style = "width: 18rem;" >
                                <div class="card-body">
                                    <h5 class="card-title">${receta.titulo}</h5>
                                    <p class="card-text">${receta.elaboracion}</p>
                                    <a href="../pages/detalle.html" class="btn btn-primary">Detalles</a>
                                </div>
                        </div >`

            cardContainer.appendChild(card)
        }
    }
}

let entradaBuscarRecetas = document.getElementById("buscador")
entradaBuscarRecetas.addEventListener("keyup", buscarRecetas)

function buscarRecetas(e) {
    e.preventDefault()

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
            let inputTextoBuscador = document.getElementById("inputBuscador").value
            let textoEncontrado = data.recetas.find(encontrado => encontrado.titulo.includes(inputTextoBuscador))

            try {
                if (textoEncontrado != undefined) {
                    const card = document.createElement("div")
                    card.className = "secRecetaBuscar"

                    cardContainer.innerHTML = ""

                    card.innerHTML = `<div class="card text-center mb-3 shadow-sm secRecetaBuscar" style = "width: 18rem;" >
                                <div class="card-body">
                                    <h5 class="card-title">${textoEncontrado.titulo}</h5>
                                    <p class="card-text">${textoEncontrado.elaboracion}</p>
                                    <a href="../pages/detalle.html" class="btn btn-primary">Detalles</a>
                                </div>
                        </div >`

                    cardContainer.appendChild(card)
                }
            } catch {
                Swal.fire({
                    icon: "info",
                    title: "Oops...",
                    text: "No se encontró ninguna receta. Intenta con otra palabra clave."
                });
            }

            if (inputTextoBuscador === '') {
                cardContainer.innerHTML = ""

                for (const receta of data.recetas) {
                    const card = document.createElement("div")
                    card.className = "secRecetaBuscar"
                    card.innerHTML = `<div class="card text-center mb-3 shadow-sm" style = "width: 18rem;" >
                                        <div class="card-body">
                                            <h5 class="card-title">${receta.titulo}</h5>
                                            <p class="card-text">${receta.elaboracion}</p>
                                            <a href="../pages/detalle.html" class="btn btn-primary">Detalles</a>
                                        </div>
                                </div >`

                    cardContainer.appendChild(card)
                }
            }
        })
        .catch(error => {
            Swal.fire({
                title: "Ocurrio un error",
                text: "Al cargar las recetas algo fallo. Contacta a tu administrador.",
            });

        })

}