import PolarBear from '../../images/fabric/polar-bear.png';
import Bees from '../../images/fabric/bees.jpg';
import Boats from '../../images/fabric/boats.jpg';
import Mushrooms from '../../images/fabric/mushrooms.jpg';
import Peaches from '../../images/fabric/peaches.jpg';
import Penguins from '../../images/fabric/penguins.jpg';






const InventoryData = [
    {id: 1,
    image: PolarBear,
    type: "Sweater",
    name: "Polar Bear",
    fabric: "Organic Cotton",
    description: "this is where you have a description of the patter or product or whatever you would like to have in here",
    price: 35,
    available: 5

    },
    {id: 2,
    image: Bees,
    name: "Bees",
    type: "Sweater",
    fabric: "Organic Cotton",
    description: "this is where you have a description of the patter or product or whatever you would like to have in here",
    price: 40,
    available: 5
    },
    {id: 3,
    image: Boats,
    name: "Boats",
    type: "Pants",
    fabric: "Organic Cotton",
    description: "this is where you have a description of the patter or product or whatever you would like to have in here",
    price: 45,
    available: 2,
    size: [{
        id: 1,
        size: "3M",
        available: 4,
    },
    {
        id: 2,
        size: "6M",
        available: 0,
    },
    {
        id: 3,
        size: "12M",
        available: 1,
    }]
    },
    {id: 4,
    image: Mushrooms,
    name: "Murshrooms",
    type: "Pants",
    fabric: "Cotton",
    description: "this is where you have a description of the patter or product or whatever you would like to have in here",
    price: 35,
    available: 0,
    size: [{
        id: 1,
        size: "3M",
        available: 4,
    },
    {
        id: 2,
        size: "6M",
        available: 0,
    },
    {
        id: 3,
        size: "12M",
        available: 1,
    }]
    },
    {id: 5,
    image: Peaches,
    name: "Peaches",
    type: "Sweater",
    fabric: "Cotton",
    description: "this is where you have a description of the patter or product or whatever you would like to have in here",
    price: 35,
    available: 7,
    size: [{
        id: 1,
        size: "3M",
        available: 4,
    },
    {
        id: 2,
        size: "6M",
        available: 0,
    },
    {
        id: 3,
        size: "12M",
        available: 1,
    }]
    },
    {id: 6,
    image: Penguins,
    name: "Penguins",
    type: "Pants",
    fabric: "Cotton",
    description: "this is where you have a description of the patter or product or whatever you would like to have in here",
    price: 20,
    available: 6
    },
];

export default InventoryData;
