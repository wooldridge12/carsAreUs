//This page is for; calling all functions that we have made and to diplay them in the main HTML. Imagen this is the megaPhone guy in the center of town calling all functions to coem together and work and put Their HTML in  [lace of the functions.]

import { paintColors } from "./paintColor.js"
import { interiorStyles } from "./interior.js"
import { technologySelection } from "./Technology.js"
import { wheelStyles } from "./wheels.js"
import { addCustomOrder } from "./database.js"
import { orders } from "./orders.js"
import { selectedCatagory } from "./Catagory.js"


//This is the main button on the page that you click and it calls for addCustomerOrder() and spits out a order recept at the bottom.
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)


//This is the HTML created from all functions and the main casrRUs function. Take this as the whole team showed up and is working together.
export const carsRUs = () => {
    return `
    <h1 class="title fixFont">Cars R Us!<h1>
    <p class="littleTitle fixFont">Welcome to CARS R US lets get to making your dream car. You choose, we make.</p>
    
    <article class="choices">
    <div class="flexbox">
        
        <section class="choices__paintColor regularTextInBoxes">
            <h2 class="textSizeOfSelections">Paint Colors<h2>
            ${paintColors()}
        </section>
        
        <section class="choices__interior regularTextInBoxes">
            <h2 class="textSizeOfSelections">Interior<h2>
            ${interiorStyles()}
        </section>
        
        <section class="choices__technology regularTextInBoxes">
            <h2 class="textSizeOfSelections">Technology<h2>
            ${technologySelection()}
        </section>
        
        <section class="choices__wheels regularTextInBoxes">
            <h2 class="textSizeOfSelections">Wheels<h2>
            ${wheelStyles()}
        </section>
        
        <section class="choices__catagory regularTextInBoxees">
            <h2 class="textSizeOfSelections">Catagory</h2>
        ${selectedCatagory()}
        </section>
        </article>
        
        
        <article>
            <button id="orderButton">Create My New Car!</button>
        </article>
        
        <article class="customOrders">
            <h2 class="customOrderText">My Custom Cars</h2>
            ${orders()}
            </div>
        </article>`
}