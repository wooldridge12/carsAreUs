//This page is for; The data obviously! Also it creates the set() and get() functions for import and export data. 

const database = {
    paintColors: [{
        id: 1,
        color: "Silver",
        price: 299.79
    },{
        id: 2,
        color: "Midnight Blue",
        price: 899.89
    },{
        id: 3,
        color: "FireBrick Red",
        price: 599.36
    },{
        id: 4,
        color: "Spring Green",
        price: 449.99
    }],
    interiors: [{
        id: 1,
        type: "Beige Fabric",
        price: 387.99
    },{
        id: 2,
        type: "Charcoal Fabric",
        price: 399.99
    },{
        id: 3,
        type: "White Leather",
        price: 799.99
    },{
        id: 4,
        type: "Black Leather",
        price: 699.99
    }],
    technologies: [{
        id: 1,
        type: "Basic Package",
        price: 0
    },{     
        id: 2,
        type: "Navigation Package",
        price: 1229.89
   },{
         id: 3,
         type: "Visilbility Package",
         price: 899.99
    },{           
         id: 4,
         type: "Ultra Package",
         price: 3999.99
        }],
    wheels: [{
        id: 1,
        type: "17-inch Pair Radial",
        price: 149.99
    },{
        id: 2,
        type: "17-inch Pair Radial Black",
        price: 199.99
    },{
        id: 3,
        type: "18-inch Pair Spoke Silver",
        price: 499.99
    },{
        id: 4,
        type: "18-inch Pair Spoke Black",
        price: 549.99
    }],
    catagories: [ {id: 1, type: "car"},
                {id: 2, type: "suv"},
                {id: 3, type: "truck"}
              ],
    customOrders: [
        {
            id: 1,
            paintColorId: 2,
            interiorId: 1,
            technologyId: 2,
            wheelId: 1,
            catagoryId: 1
        }
    ],
    //for storing chosen options
    orderBuilder: {},
    
    }

    //responible for setting the state
    export const setPaintColor = (id) => {
        database.orderBuilder.paintColorId = id
    }
    export const setInterior = (id) => {
        database.orderBuilder.interiorId = id
    }
    export const setTechnology = (id) => {
        database.orderBuilder.technologyId = id
    }
    export const setWheel = (id) => {
        database.orderBuilder.wheelId = id
    }
    export const setCatagory = (id) => {
        database.orderBuilder.catagoryId = id
    }

    // this is responsible for exporting objects in arrays.
    export const getPaintColors = () => {
        return [...database.paintColors]
    }
    export const getInteriors = () => {
        return[...database.interiors]
    }
    export const getTechnologies = () => {
        return [...database.technologies]
    }
    export const getWheels = () => {
        return [...database.wheels]
    }
    export const getOrders = () => {
        return [...database.customOrders]
    }
    export const getCatagories = () => {
        return [...database.catagories]
    }

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}

    newOrder.id = [...database.customOrders].pop().id + 1
    
    newOrder.timestamp = Date.now()
    
    database.customOrders.push(newOrder)
    
    database.orderBuilder = {}
    
    document.dispatchEvent(new CustomEvent("stateChanged"))
}