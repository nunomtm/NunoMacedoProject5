import React, { Component } from 'react';

class StoreItems extends Component {
    keypress = (e) => {
        if((e.key === ' ' || e.key === 'Enter')) {
            this.props.cartItems(this.props.itemID);
        }
    }

    render() {
        return (
            <li tabindex="0" onClick={() => this.props.cartItems(this.props.itemID)}
            onKeyDown={(e) => this.keypress(e)} 
            data-key={this.props.itemIndex} key={this.props.itemIndex}>
                <img className="groceryProduct animated swing" src={this.props.productImg} alt={this.props.itemID} />
            </li>
        );
    }
}

export default StoreItems;