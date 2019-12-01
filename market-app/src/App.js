import React, { Component } from 'react';
import './App.css';
import shelf from './assets/resizedShelf.png';
// import apple from './assets/Apple.png';
import firebase from './firebase.js';
import Header from './Header.js';
import Increment from './Increment.js';
import Footer from './Footer.js';
import ShoppingItems from './ShoppingItems.js';
import images from './images';
// import assets from './assets/';

class App extends Component {

    constructor() {
        super();
        this.state = {
            groceryItems: [],
            itemsPurchased: '',
            shoppingItems: [],
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();

        dbRef.on('value', (snapshot) => {
            const items = snapshot.val();

            const newItems = [];
            for (let key in items.shoppingStore) {
                const individualItems = {
                    groceryID: key,
                    groceryItem: items.shoppingStore[key],
                }

                newItems.push(individualItems)
            }

            const bagItems = [];
            for (let key in items.shoppingList) {
                const baggedItems = {
                    groceryID: key,
                    groceryItem: items.shoppingList[key],
                }

                bagItems.push(baggedItems)
            }

            this.setState({
                groceryItems: newItems,
                shoppingItems: bagItems,
            })
        })
    }

    purchasedItem = (shoppingItemName) => {
        const dbRef = firebase.database().ref().child('shoppingList')

        dbRef.push({
            name: shoppingItemName,
            quantity: 1
        });
    }

    addToCart = (event) => {
        const itemToAddToCart = this.state.itemsPurchased;

        if (itemToAddToCart !== '') {
            this.setState({
                itemsPurchased: '',
            })
        }
    }

    removeFromCart = (event) => {
        const dbRef = firebase.database().ref().child('shoppingList');

        dbRef.child(event.target.id).remove();
    }

    render() {
        return (
            <div>
                <Header />

                <main className="groceryStore wrapper">
                    <div className="shoppingStore">
                        <h2>Shopping Store</h2>
                        <ul className="gridStore">
                            <img className="shelf" src={shelf} alt="wood shelf with a 4 by 4 size"/>
                            {this.state.groceryItems.map((groceryValue, i) => {
                                return (
                                    <li onClick={() => this.purchasedItem(groceryValue.groceryID)} data-key={i} key={i}>
                                        <img className="groceryProduct animated swing" src={images[groceryValue.groceryID]} alt={groceryValue.groceryID}/>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="shoppingList">
                        <h2>Shopping List</h2>
                        <ul>
                            {this.state.shoppingItems.map((groceryValue, i) => {
                                return (
                                    <li key={i} className="results">
                                        <span id={groceryValue.groceryID} className="delete" onClick={this.removeFromCart}> x </span>
                                        <div className="listItems">
                                            {groceryValue.groceryItem.name}
                                            <div className="counter">
                                                <Increment
                                                    itemID={groceryValue.groceryID}
                                                    name={groceryValue.groceryItem.name}
                                                    quantity={groceryValue.groceryItem.quantity}/>
                                            </div>
                                        </div>
                                    </li>
                                    <ListItem
                                        itemID={groceryValue.groceryID}
                                        click={this.removeFromCart}
                                        itemIndex={i}
                                        name={groceryValue.groceryItem.name}
                                        quantity={groceryValue.groceryItem.quantity}/>

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
