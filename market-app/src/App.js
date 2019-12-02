import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';
import shelf from './assets/shelf.png';
import notePad from './assets/notePad.png';
import images from './images';
import Header from './Header.js';
import StoreItems from './StoreItems.js';
import ListItem from './ListItem'
import Footer from './Footer.js';


class App extends Component {

    constructor() {
        super();
        this.state = {
            groceryItems: [],
            groceryCart: [],
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();

        dbRef.on('value', (snapshot) => {
            const product = snapshot.val();

            const storeItems = [];
            for (let key in product.Inventory) {
                const individualProducts = {
                    groceryName: key,
                    groceryInventory: product.Inventory[key],
                }

                storeItems.push(individualProducts)
            }

            const cartItems = [];
            for (let key in product.shoppingCart) {
                const cartProducts = {
                    groceryName: key,
                    groceryInventory: product.shoppingCart[key],
                }

                cartItems.push(cartProducts)
            }

            this.setState({
                groceryItems: storeItems,
                groceryCart: cartItems,
            })
        })
    }

    purchasedItem = (shoppingItemName) => {
        const dbRef = firebase.database().ref().child('shoppingCart')

        dbRef.push({
            name: shoppingItemName,
            quantity: 1
        });
    }

    removeFromCart = (event) => {
        const dbRef = firebase.database().ref().child('shoppingCart');

        dbRef.child(event.target.id).remove();
    }

    render() {
        return (
            <div>
                <Header />

                <main className="groceryStore wrapper">
                    <div className="shoppingStore">
                        <h2>Store Inventory</h2>
                        <ul className="gridStore">
                            <img className="shelf" src={ shelf } alt="wood shelf with a 4 by 4 size"/>
                            {this.state.groceryItems.map((groceryValue, i) => {
                                let itemInCart = false;
                                this.state.groceryCart.forEach( (item) => {
                                    if(groceryValue.groceryName === item.groceryInventory.name){
                                        itemInCart = true;
                                    }
                                })
                                return (
                                    <StoreItems 
                                        cartItems={ this.purchasedItem }
                                        click={ this.removeFromCart }
                                        itemID={ groceryValue.groceryName }
                                        itemIndex={ i }
                                        disabled={ itemInCart }
                                        productImg={ images[groceryValue.groceryName] }
                                    />
                                )
                            })}
                        </ul>
                    </div>

                    <div className="shoppingCart">
                        <h2>Shopping Cart</h2>
                        <ul>
                            <img className="notePad" src={ notePad } alt="small white note pad" />
                            {this.state.groceryCart.map((groceryValue, i) => {
                                return (
                                    <ListItem
                                        itemID={ groceryValue.groceryName }
                                        click={ this.removeFromCart }
                                        itemIndex={ i }
                                        name={ groceryValue.groceryInventory.name }
                                        quantity={ groceryValue.groceryInventory.quantity }
                                    />
                                )
                            })}
                        </ul>
                    </div>
                </main>

                <Footer />
            </div>
        );
    }
}

export default App;
