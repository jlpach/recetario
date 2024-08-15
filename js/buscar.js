/* let cartStorage = localStorage.getItem("recetas")
cartStorage = JSON.parse(cartStorage) */

let cardContainer = document.getElementById("cardRecetaBuscar")

fetch("../recetas.json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        renderRecetasBuscador(data.recetas)
    })
    .catch(error => {
        /*             Swal.fire({
                        title: "Ocurrio un error",
                        text: "Al cargar las recetas algo fallo. Contacta a tu administrador.",
                    }); */
        throw new Error('Error al cargar el archivo JSON');
    })


function renderRecetasBuscador(cardItems) {
    /*     console.log(cardItems) */
    if (cardItems === "empty") {
        const card = document.createElement("div")
        card.className = "secRecetaBuscar"

        card.innerHTML = `<h5>Aún no hay recetas, agrega una.</5>
                            <p>
                                <a href="../pages/crear.html" rel="noopener noreferrer">
                                    Crear Receta
                                </a>
                            </p>`

        cardContainer.appendChild(card)
    } else {
        for (const receta of cardItems) {
            const card = document.createElement("div")
            card.className = "secRecetaBuscar"

            card.innerHTML = `<div class="card text-center mb-3 shadow-sm secRecetaBuscar" style = "width: 18rem;" >
                                <div class="card-body">
                                    <h5 class="card-title">${receta.titulo}</h5>
                                    <p class="card-text">${receta.elaboracion}</p>
                                    <a href="#" class="btn btn-primary">Detalles</a>
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
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            let inputTextoBuscador = document.getElementById("inputBuscador").value

            /*             let textoEncontrado = data.recetas.find(encontrado => encontrado.titulo == inputTextoBuscador) */

            let textoEncontrado = data.recetas.find(encontrado => encontrado.titulo.includes(inputTextoBuscador))

            console.log(textoEncontrado.titulo)

            if (textoEncontrado != undefined) {

                const card = document.createElement("div")
                card.className = "secRecetaBuscar"

                cardContainer.innerHTML = ""

                card.innerHTML = `<div class="card text-center mb-3 shadow-sm secRecetaBuscar" style = "width: 18rem;" >
                                <div class="card-body">
                                    <h5 class="card-title">${textoEncontrado.titulo}</h5>
                                    <p class="card-text">${textoEncontrado.elaboracion}</p>
                                    <a href="#" class="btn btn-primary">Detalles</a>
                                </div>
                        </div >`

                cardContainer.appendChild(card)
            }
            /*             textoEncontrado.forEach(element => {
                            const card = document.createElement("div")
                            card.className = "secRecetaBuscar"
            
                            card.innerHTML = `<div class="card text-center mb-3 shadow-sm secRecetaBuscar" style = "width: 18rem;" >
                                            <div class="card-body">
                                                <h5 class="card-title">${element.titulo}</h5>
                                                <p class="card-text">${element.elaboracion}</p>
                                                <a href="#" class="btn btn-primary">Detalles</a>
                                            </div>
                                    </div >`
            
                            cardContainer.appendChild(card)
                        }); */
        })
        .catch(error => {
            /*             Swal.fire({
                            title: "Ocurrio un error",
                            text: "Al cargar las recetas algo fallo. Contacta a tu administrador.",
                        }); */
            console.log(error)
            throw new Error('Error al usar el archivo JSON');
            /* console.log("Error al cargar la card del buscador") */
        })

}