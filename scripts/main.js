//This page is for; rendering the HTML or displaying it to the DOM. which you can tell by the index.html stating the id of container.

import { carsRUs } from "./carsRUs.js"



const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRUs()
}


renderAllHTML()


document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})