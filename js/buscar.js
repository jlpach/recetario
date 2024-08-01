let cartStorage = localStorage.getItem("recetas")
cartStorage = JSON.parse(cartStorage)

console.log("cartStorage: ", cartStorage)

if (cartStorage === null)
    cartStorage = "empty"

let cardContainer = document.getElementById("cardRecetaBuscar")

function renderRecetasBuscador(cardItems) {
    if (cardItems === "empty") {
        const card = document.createElement("div")

        card.innerHTML = `<h5>Aún no hay recetas, agrega una.</5>
        <p><a href="./pages/crear.html" rel="noopener noreferrer">Crear Receta</a></p>`

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

