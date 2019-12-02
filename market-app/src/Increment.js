import React, { Component } from 'react';
import firebase from './firebase.js';

class Increment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: this.props.quantity,
        };
    }

    incrementItem = () => {
        const increaseClick = this.state.clicks + 1
        this.updateQuantity(increaseClick)
    }

    decreaseItem = () => {
        const reduceClick = this.state.clicks <= 1 ? 1 : this.state.clicks - 1;
        this.updateQuantity(reduceClick)
    }

    updateQuantity = (quantity) => {
        this.setState({ clicks: quantity });
        const dbRef = firebase.database().ref()
        dbRef.child('shoppingCart')
            .child(this.props.itemID)
            .update({ quantity: quantity });
        
    }

    render() {
        return (
            <div className="increment">
                <button onClick={this.decreaseItem}> - </button>
                <span className="count"> {this.props.quantity} </span>
                <button onClick={this.incrementItem}> + </button>
            </div>
        );
    }
}

export default Increment;