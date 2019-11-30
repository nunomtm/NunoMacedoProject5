import React, {Component} from 'react';
import './App.css';
import firebase from './firebase.js'
import shelf from './assets/resizedShelf.png'
import carrot from './assets/carrot.png'

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
    console.log(this.state.groceryItems[event.target.getAttribute('data-key')])
    
    const shoppingItemName = this.state.groceryItems[event.target.getAttribute('data-key')]
    const timesClicked = 1
    
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
    const itemToAddToCart = this.state.itemsPurchased;
    
    if(itemToAddToCart !== '') {
      const itemsPurchased = itemToAddToCart
      this.setState({
        itemsPurchased: '',
      })
    }
  }
  
  // track the number o times clicked

  render() {
    return(
      <div>
        <header>
            <h1>Quick Market</h1>
        </header>

        <main className="groceryStore wrapper">
          
          <div className="divider">
              <h2>Shopping Store</h2>
              <ul className="gridStore">
              <img src={shelf} alt="wood shelf with a 4 by 4 size"/>
                {this.state.groceryItems.map((groceryValue, i) => {
                  return(
                    <li onClick={this.purchasedItem} data-key={i} key={i}>
                      {/* <img src={carrot} alt="" /> */}
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
                      {groceryValue.groceryItem}
                      <div className="counter">
                        <a href=""><span className="minus"> - </span></a>
                        <span className="amount"> # </span>
                        <a href=""><span className="plus"> + </span></a>
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
