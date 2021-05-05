//This page is in charge of the bottom orders section. This page is for; interating through objects to find one object and spitting out the price and types of what people ordered. Also, adding all prices up and giving up a total for the order. and giving us a HTML format for the main carsRUs.js module.

import { getPaintColors, getInteriors, getTechnologies, getWheels, getOrders } from "./database.js"


//I am creating variable to store the getFunctions.
const colors = getPaintColors()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()


//This is a function, breaking down item by id and creating a html format to go to carsRUs.js
const buildOrderListItem = (order) => {
    const foundColor = colors.find(
        (color) => {
            if (color.id === order.paintColorId) {
                return true
            }
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            if (interior.id === order.interiorId) {
                return true
            }
        }
    )

    const foundTechnology = technologies.find(
        (technology) => {
            if (technology.id === order.technologyId) {
                return true
            }
        }
    )

    const foundWheel = wheels.find(
        (wheel) => {
            if (wheel.id === order.wheelId) {
                return true
            }
        }
    )
        //adding all prices togeter in a variable of total price
    const totalPrice = (foundColor.price + foundInterior.price + foundTechnology.price + foundWheel.price)
    //returning html and impletmenting all of the const variable function of found we just created.
    return `<li>
    <div class="orderNumber">Order #${order.id}</div> <div class="textOfWords">Your car is the color of ;</div> <div class="highLights">${foundColor.color}</div><div class="textOfWords"> Interior package of ;</div> <div class="highLights">${foundInterior.type}</div><div class="textOfWords"> Technology package of ; </div><div class="highLights">${foundTechnology.type}</div><div class="textOfWords">with atire package of ;</div> <div class="highLights">${foundWheel.type}</div> <div class="textOfWords">The total cost will be ;</div> <div class="moneyHighLight">$${totalPrice.toFixed(2)} </div>
    </li>`
}

//this is to export the whole page in a variable of orders.
export const orders = () => {
    
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "<ul>"
    
    return html
}