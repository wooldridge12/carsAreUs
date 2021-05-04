import { setInterior, getInteriors } from "./database.js"


//this section is creating the radio buttons for the dom.
const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior"){
            setInterior(parseInt(event.target.value))
        }
    }
)

export const interiorStyles = () => {
    let html = "<ul>"
    const listItems = interiors.map(interior => {
        return `<li>
        <input type="radio" name="interior" value="${interior.id}" /> ${interior.type} </li>`
    })

    html += listItems.join("")

    html+= "<ul>"
    return html
}