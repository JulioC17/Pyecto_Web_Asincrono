import "./main.css"

const mainTemplates = () => `
<ul id = "lista"></ul>
`

const main = () => {
    document.querySelector("main").innerHTML = mainTemplates()
}

export default main