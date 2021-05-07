import { getCatagories, setCatagory } from "./database.js"

const catagories = getCatagories()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.name === "catagory"){
            setCatagory(parseInt(event.target.value))
        }
    }
)

export const selectedCatagory = () => {
    let html = "<ul>"
    const listItems = catagories.map(catagory =>{
        return `<li>
        <input type="radio" name="catagory" value="${catagory.id}" /> ${catagory.type} </li>`
    })

    html += listItems.join("")

    html+= "<ul>"
    return html
}