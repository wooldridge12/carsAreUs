import { paintColors } from "./paintColor.js"
import { interiorStyles } from "./interior.js"
import { technologySelection } from "./Technology.js"
import { wheelStyles } from "./wheels.js"



document.addEventListener(
    "click",
    (event) => {

    }
)


//rememeber ${}
//Creating the HTMl.
export const carsRUs = () => {
    return `
    <h1>Cars R Us!<h1>
    
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
        </article>
        
        <article>
            <button id="orderButton">Create My New Car!</button>
        </article>
        
        <article class="customOrders">
            <h2 class="customOrderText">My Custom Cars</h2>
            
            </div>
        </article>`
}