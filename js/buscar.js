let cardContainer = document.getElementById("cardRecetaBuscar")

mostrarRecetasAgregadas = []
mostrarRecetasAgregadas = JSON.parse(localStorage.getItem("datarecetas"))

let entradaBuscarRecetas = document.getElementById("buscador")
entradaBuscarRecetas.addEventListener("keyup", buscarRecetas)

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
        renderRecetasBuscador(mostrarRecetasAgregadas)
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
                                    <a href="../pages/detalle.html" class="btn btn-primary recetaAgregarDetalle" id="${receta.id}">Detalles</a>
                                </div>
                        </div >`

            cardContainer.appendChild(card)

            agregarRecetaDetalles()
        }
    }
}

function agregarRecetaDetalles() {
    detalleBoton = document.querySelectorAll(".recetaAgregarDetalle")
    detalleBoton.forEach(boton => {
        boton.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = mostrarRecetasAgregadas.find(producto => producto.id == productId)

            recetasAgregadas = []
            recetasAgregadas.push(selectedProduct)

            localStorage.setItem("datarecetaseleccionada", JSON.stringify(recetasAgregadas))
        }
    })
}

function buscarRecetas(e) {
    e.preventDefault()

    try {
        let mostrarRecetasAgregadas = JSON.parse(localStorage.getItem("datarecetas")) || []
        let inputTextoBuscador = document.getElementById("inputBuscador").value.toLowerCase()
        let textoEncontrado = mostrarRecetasAgregadas.find(encontrado => encontrado.titulo.toLowerCase().includes(inputTextoBuscador))

        try {
            if (textoEncontrado != undefined) {
                const card = document.createElement("div")
                card.className = "secRecetaBuscar"

                cardContainer.innerHTML = ""

                card.innerHTML = `<div class="card text-center mb-3 shadow-sm secRecetaBuscar" style = "width: 18rem;" >
                            <div class="card-body">
                                <h5 class="card-title">${textoEncontrado.titulo}</h5>
                                <p class="card-text">${textoEncontrado.elaboracion}</p>
                                <a href="../pages/detalle.html" class="btn btn-primary recetaAgregarDetalle" id="${textoEncontrado.id}">Detalles</a>
                            </div>
                    </div >`

                cardContainer.appendChild(card)

                agregarRecetaDetalles()
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

            for (const receta of mostrarRecetasAgregadas) {
                const card = document.createElement("div")
                card.className = "secRecetaBuscar"

                card.innerHTML = `<div class="card text-center mb-3 shadow-sm" style = "width: 18rem;" >
                                    <div class="card-body">
                                        <h5 class="card-title">${receta.titulo}</h5>
                                        <p class="card-text">${receta.elaboracion}</p>
                                        <a href="../pages/detalle.html" class="btn btn-primary recetaAgregarDetalle" id="${receta.id}">Detalles</a>
                                    </div>
                            </div >`

                cardContainer.appendChild(card)

                agregarRecetaDetalles()
            }
        }
    } catch (error) {
        Swal.fire({
            title: "Ocurrio un error",
            text: "Al cargar las recetas algo fallo. Contacta a tu administrador.",
        });
    }
}