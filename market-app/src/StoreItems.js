import React, { Component } from 'react';

class StoreItems extends Component {
    render() {
        return (
            <li tabindex="0" onClick={() => this.props.cartItems(this.props.itemID)} onKeyDown={() => this.props.cartItems(this.props.itemID)} data-key={this.props.itemIndex} key={this.props.itemIndex}>
                <img className="groceryProduct animated swing" src={this.props.productImg} alt={this.props.itemID} />
            </li>
        );
    }
}

export default StoreItems;