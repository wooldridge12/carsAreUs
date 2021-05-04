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