import './style.css'
import header from './componentes/Header/header'
import main from './componentes/Main/main'
import footer from './componentes/footer/footer'


const arranque = () => {
    header()
    main()
    footer()
    getPhotos("cuba", 10)
}

const getPhotos = async (keyword,page) => {
const data = await fetch (`https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=${page}&client_id=${import.meta.env.VITE_CLIENT_ID}`)
const results = await data.json()
const photos = results.results
printPhotos (photos)
}

const printPhotos = (photos) => {
const lista = document.getElementById("lista")
const error = document.createElement("h2")
error.innerText = "No he encontrado resultados de tu búsqueda"

lista.innerHTML = ""

for (const photo of photos) {
    const listado = document.createElement("li")
    listado.innerHTML = `<img src = ${photo.urls.regular}/>`
    lista.appendChild(listado)
    }
    if ( photos.length === 0){
        lista.innerHTML = ""
        lista.appendChild(error)
    }
    
}

arranque ()

document.querySelector("#searchBtn").addEventListener("click", () => {
const inputValue = document.querySelector("#input").value
const selectValue = document.querySelector("select").value

if(selectValue === "Imagenes"){
    getPhotos(inputValue, 10)
    
}else {
    getPhotos(inputValue, selectValue)
    
}
})





 
