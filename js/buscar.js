let cartStorage = localStorage.getItem("recetas")
cartStorage = JSON.parse(cartStorage)

let cardContainer = document.getElementById("cardRecetaBuscar")

function renderRecetasBuscador(cardItems) {
    console.log(cardItems.length)
    if (cardItems.length === 0 || cardItems.length === undefined) {
        const card = document.createElement("div")

        card.innerHTML = `<a href="./pages/crear.html" rel="noopener noreferrer">Crear Recetas</a>`

        cardContainer.appendChild(card)
    } else {
        for (const receta of cardItems) {
            const card = document.createElement("div")

            card.innerHTML = `<div class="card text-center mb-3" style = "width: 18rem;" >
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

renderRecetasBuscador(cartStorage)

