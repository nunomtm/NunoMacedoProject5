import React, {Component} from 'react';
import './App.css';
import shelf from './assets/resizedShelf.png';
import firebase from './firebase.js';
import Header from './Header.js';
import Increment from './Increment.js';

class App extends Component {

    constructor() {
        super();
        this.state = {
            groceryItems: [],
            userPurchase: '',
            itemsPurchased: '',
            shoppingItems: [],
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

  purchasedItem = (event) => {
      const shoppingItemName = this.state.groceryItems[event.target.getAttribute('data-key')]
    
      const shopping = {
          item: shoppingItemName,
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
      const itemToAddToCart = this.state.itemsPurchased;
    
      if(itemToAddToCart !== '') {
          // const itemsPurchased = itemToAddToCart
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
      return(
          <div>
              <Header />

              <main className="groceryStore wrapper">
                  <div className="shoppingStore">
                      <h2>Shopping Store</h2>
                      <ul className="gridStore">
                          <img src={shelf} alt="wood shelf with a 4 by 4 size"/>
                          {this.state.groceryItems.map((groceryValue, i) => {
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
                      <ul>
                          {this.state.shoppingItems.map((groceryValue, i) => {
                            return(
                                <li key={i} className="results">
                                    <span id={groceryValue.groceryID} className="delete" onClick={this.removeFromCart}> x </span>
                                    <div className="listItems">
                                        {groceryValue.groceryItem}
                                        <div className="counter">
                                            <Increment />
                                        </div>
                                    </div>
                                </li>
                            )
                          })}
                    </ul>
                  </div>
              </main>

              <footer>
                  <p className="wrapper">Copyright &copy; Nuno Macedo - 2019</p>
              </footer>
        </div>
      );
  }
}

export default App;
