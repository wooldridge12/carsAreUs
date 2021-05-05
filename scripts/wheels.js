//This page is for; creating the change eventListener for the radio button list in the black boxes on the DOM for wheels page.This is repeated in 3 other modules.

import { setWheel, getWheels } from "./database.js"



const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const wheelStyles = () => {
    let html = "<ul>"

    const listItems = wheels.map(wheel => {
        return `<li>
        <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.type}
    </li>`
    })

    html += listItems.join("")
    html += "<ul>"

    return html
}