import React, {Component} from 'react';
import './App.css';
import firebase from './firebase.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      groceryItems: [],
      purchase: '',
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (snapshot) => {
      const items = snapshot.val();

      const newItems = [];
      for(let key in items.shoppingStore) {
        const individualItems = {
          groceryID: key,
          groceryItem: items[key],
        }

        newItems.push(individualItems)
      }

      const bagItems = [];
      for (let key in items.shoppingList) {
        const baggedItems = {
          groceryID: key,
          groceryItem: items[key],
        }

        bagItems.push(baggedItems)
      }

      this.setState({
        groceryItems: newItems,
        shoppingItems: bagItems,
      })
    })
  }

  purchasedItem = (event) => {
    // console.log('I was clicked', event.target.getAttribute('data-key'))
    // Name of the item clicked 
    console.log(this.state.groceryItems[event.target.getAttribute('data-key')])
    // Create an object to storage the items
    const shoppingItemName = this.state.groceryItems[event.target.getAttribute('data-key')]
    const timesClicked = 1
    // push the object to firebase in the shoppinList folder
    const shopping = {
      item: shoppingItemName,
      count: timesClicked,
    }

    const dbRef = firebase.database().ref().child('shoppingList')
  
    if(shoppingItemName !== '') {
      dbRef.push(shopping.item.groceryID);
      this.setState({
        userPurchase: '',
      })
    }

    this.setState ({
      purchase: event.target.getAttribute('data-key'),
    })
  }

  
  addToCart = (event) => {
    
    
    const itemToAddToCart = this.state.userPurchase;
    
    if(itemToAddToCart !== '') {
      const userPurchase = itemToAddToCart
      this.setState({
        userPurchase: '',
      })
    }
  }
  
  // track the number o times clicked

  render() {
    return(
      <div>
        <h1>Shopping Cart</h1>

          <div className="groceryStore">
            <ul>
              {/* {console.log(this.state.groceryItems)} */}
              {this.state.groceryItems.map((groceryValue, i) => {
                // console.log(groceryValue)
                return(
                  <li onClick={this.purchasedItem} data-key={i} key={i}>
                    {groceryValue.groceryID}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="shoppingList">
            <h2>Shopping List</h2>

            {/* <ul>
              {this.state.userPurchase.map((purchaseValue, i) => {
                  return (
                    <li onChange={this.addToCart} key={i}>
                      {purchaseValue.groceryID}
                    </li>
                  )
              })}
            </ul> */}
          </div>

          <footer>
            Copyright &copy; Nuno Macedo - 2019
          </footer>
      </div>
    );
  }
}

export default App;
