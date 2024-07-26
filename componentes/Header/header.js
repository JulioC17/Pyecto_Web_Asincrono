import "./header.css"

const headerTemplates = () => `
<img width="48" height="48" src="https://img.icons8.com/color/48/pinterest--v1.png" alt="pinterest--v1"/>
<input  id = "input" type = "text" placeholder = "Escribe algo..."/>
<select>
    <option id disabled selected="deshabilitada">Imagenes</option>
    <option id ="numero1">15 Imágenes</option>
    <option id ="numero2">20 Imágenes</option>
    <option id ="numero3">30 Imágenes</option>
</select>
<button id = "searchBtn">Buscar</button>

`


const header = () => {
    document.querySelector("header").innerHTML = headerTemplates()
}

export default header