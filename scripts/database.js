const database = {
    paintColors: [{
        id: 1,
        color: "Silver"
    },{
        id: 2,
        color: "Midnight Blue"
    },{
        id: 3,
        color: "FireBrick Red"
    },{
        id: 4,
        color: "Spring Green"
    }],
    interiors: [{
        id: 1,
        type: "Beige Fabric"
    },{
        id: 2,
        type: "Charcoal Fabric"
    },{
        id: 3,
        type: "White Leather"
    },{
        id: 4,
        type: "Black Leather"
    }],
    technologies: [{
        id: 1,
        type: "Basic Package"
    },{     
        id: 2,
        type: "Navigation Package"
   },{
         id: 3,
         type: "Visilbility Package"
    },{           
         id: 4,
         type: "Ultra Package"
        }],
    wheels: [{
        id: 1,
        type: "17-inch Pair Radial"
    },{
        id: 2,
    type    : "17-inch Pair Radial Black"
    },{
        id: 3,
        type: "18-inch Pair Spoke Silver"
    },{
        id: 4,
        type: "18-inch Pair Spoke Black"
    }]
    }

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

