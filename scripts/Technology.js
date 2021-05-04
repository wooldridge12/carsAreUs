import { setTechnology, getTechnologies } from "./database.js"



const devices = getTechnologies()

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

    const listItems = devices.map(device => {
        return `<li>
            <input type="radio" name="device" value="${device.id}" /> ${device.type}
        </li>`
    })

    html += listItems.join("")
    html += "<ul>"

    return html
}