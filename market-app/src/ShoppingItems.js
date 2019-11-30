
import React from 'react';
import apple from './assets/Apple.png';
import banana from './assets/Banana.png';
import broccoli from './assets/broccoli.png';
import carrot from './assets/carrot.png';
import cherry from './assets/cherry.png';
import corn from './assets/corn.png';
import eggplant from './assets/eggplant.png';
import grapes from './assets/grapes.png';
import lettuce from './assets/lettus.png';
import onion from './assets/onion.png';
import orange from './assets/orange.png';
import pineapple from './assets/pineapple.png';
import potato from './assets/potato.png';
import strawberry from './assets/strawberry.png';
import tomato from './assets/tomato.png';
import watermelon from './assets/watermelon.png';

const products = [
    {
        name: 'apple',
        img: apple,
    },
    {
        name: 'banana',
        img: banana,
    },
    {
        name: 'broccoli',
        img: broccoli,
    },
    {
        name: 'carrot',
        img: carrot,
    },
    {
        name: 'cherry',
        img: cherry,
    },
    {
        name: 'corn',
        img: corn,
    },
    {
        name: 'eggplant',
        img: eggplant,
    },
    {
        name: 'grapes',
        img: grapes,
    },
    {
        name: 'lettuce',
        img: lettuce,
    },
    {
        name: 'onion',
        img: onion,
    },
    {
        name: 'orange',
        img: orange,
    },
    {
        name: 'pineapple',
        img: pineapple,
    },
    {
        name: 'potato',
        img: potato,
    },
    {
        name: 'strawberry',
        img: strawberry,
    },
    {
        name: 'tomato',
        img: tomato,
    },
    {
        name: 'watermelon',
        img: watermelon,
    }
]

// const ShoppingItems = ({ selectItem, products }) => {
//     constructor(props) {
//         super(props);
//         this.state = {
//             : 0,
//         };
//     }

//     return (
//         <div className="itemsContainer">
//             <ul className="gridStore">
//                 <img src={shelf} alt="wood shelf with a 4 by 4 size" />
//                 {this.state.groceryItems.map((groceryValue, i) => {
//                     return (
//                         <li onClick={this.purchasedItem} data-key={i} key={i}>
//                             <img src={product.img} alt={product.name} />
//                             {groceryValue.groceryID}
//                         </li>
//                     )
//                 })}
//             </ul>
//         </div>

//     );
// }

export default ShoppingItems;