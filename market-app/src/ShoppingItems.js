
import React, { Component } from 'react';
import apple from './assets/apple.png';
import banana from './assets/banana.png';
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

// const products = [
//     {
//         name: 'apple',
//         img: apple,
//     },
//     {
//         name: 'banana',
//         img: banana,
//     },
//     {
//         name: 'broccoli',
//         img: broccoli,
//     },
//     {
//         name: 'carrot',
//         img: carrot,
//     },
//     {
//         name: 'cherry',
//         img: cherry,
//     },
//     {
//         name: 'corn',
//         img: corn,
//     },
//     {
//         name: 'eggplant',
//         img: eggplant,
//     },
//     {
//         name: 'grapes',
//         img: grapes,
//     },
//     {
//         name: 'lettuce',
//         img: lettuce,
//     },
//     {
//         name: 'onion',
//         img: onion,
//     },
//     {
//         name: 'orange',
//         img: orange,
//     },
//     {
//         name: 'pineapple',
//         img: pineapple,
//     },
//     {
//         name: 'potato',
//         img: potato,
//     },
//     {
//         name: 'strawberry',
//         img: strawberry,
//     },
//     {
//         name: 'tomato',
//         img: tomato,
//     },
//     {
//         name: 'watermelon',
//         img: watermelon,
//     }
// ]

class ShoppingItems extends Component {
    constructor() {
        super();
        this.state = {
            img: '',
        };
    }

    render() {
        // const { name, img } = this.props;
        return (
            <div>
                {/* <img src={require(`${img}`)} alt={(`${name}`)}/> */}
                <img className="groceryProduct animated swing" src={apple} alt="apple" />
                <img className="groceryProduct animated swing" src={banana} alt="" />
                <img className="groceryProduct animated swing" src={broccoli} alt="" />
                <img className="groceryProduct animated swing" src={carrot} alt="" />
                <img className="groceryProduct animated swing" src={cherry} alt="" />
                <img className="groceryProduct animated swing" src={corn} alt="" />
                <img className="groceryProduct animated swing" src={eggplant} alt="" />
                <img className="groceryProduct animated swing" src={grapes} alt="" />
                <img className="groceryProduct animated swing" src={lettuce} alt="" />
                <img className="groceryProduct animated swing" src={onion} alt="" />
                <img className="groceryProduct animated swing" src={orange} alt="" />
                <img className="groceryProduct animated swing" src={pineapple} alt="" />
                <img className="groceryProduct animated swing" src={potato} alt="" />
                <img className="groceryProduct animated swing" src={strawberry} alt="" />
                <img className="groceryProduct animated swing" src={tomato} alt="" />
                <img className="groceryProduct animated swing" src={watermelon} alt="" />
            </div>
        );
    }
}

// class ShoppingItems extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: [],
//         };
//     }

//     render() {
//         return(
//             {this.state.products.map(product)} => {
//                 return(
//                     <img src={this.state.products.img} alt={this.state.products.name}
//                 )
//             }
//         )
//     }
// }

export default ShoppingItems;