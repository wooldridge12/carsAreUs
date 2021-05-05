//This page is for; creating the change eventListener for the radio button list in the black boxes on the DOM for paintColor page. This is repeated in 3 other modules.

import { setPaintColor, getPaintColors } from "./database.js"



const colors = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "color") {
            setPaintColor(parseInt(event.target.value))
        }
    }

)

export const paintColors = () => {
    let html = "<ul>"

    const listItems = colors.map(color => {
        return `<li>
            <input type="radio" name="color" value="${color.id}" /> ${color.color}
        </li>`
    })

    html += listItems.join("")
    html += "<ul>"

    return html
}

