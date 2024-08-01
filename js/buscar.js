let cartStorage = localStorage.getItem("cardRecetas")
cartStorage = JSON.parse(cartStorage)

console.log(cartStorage)

cartStorage.forEach(item => {
    console.log(item.titulo)
})

let cardContainer = document.getElementById("cardRecetaBuscar")

function renderRecetasBuscador(cardItems) {
    cardItems.forEach(receta => {
        const card = document.createElement("div")

        card.innerHTML = `<div class="card text-center mb-3" style = "width: 18rem;" >
                                <div class="card-body">
                                    <h5 class="card-title">${receta.titulo}</h5>
                                    <p class="card-text">${receta.elaboracion}</p>
                                    <a href="#" class="btn btn-primary">Detalles</a>
                                </div>
                          </div >`

        cardContainer.appendChild(card)
    })
}

renderRecetasBuscador(cartStorage)

