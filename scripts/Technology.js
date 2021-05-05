//This page is for; creating the change eventListener for the radio button list in the black boxes on the DOM for technology page. This is repeated in 3 other modules.

import { setTechnology, getTechnologies } from "./database.js"



const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const technologySelection = () => {
    let html = "<ul>"

    const listItems = technologies.map(technology => {
        return `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.type}
        </li>`
    })

    html += listItems.join("")
    html += "<ul>"

    return html
}