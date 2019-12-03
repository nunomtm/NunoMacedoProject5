import React, { Component } from 'react';

class StoreItems extends Component {
    
    constructor(props){
        super(props);
    }

    keypress = (event) => {
        if((event.key === ' ' || event.key === 'Enter')) {
            this.props.cartItems(this.props.itemID);
        }
    }
    
    handleClick = (event) => {
        if (this.props.disabled) {
            return;
        }
    
        this.props.cartItems(this.props.itemID)   
    }

    render() {
        return (
            <li tabindex="0" onClick={ this.handleClick }
            onKeyDown={ (event) => this.keypress(event) } 
            data-key={ this.props.itemIndex } key={ this.props.itemIndex }>
                <img className={ `groceryProduct animated swing ${this.props.disabled ? "disabled" : ""}` } src={ this.props.productImg } alt={ this.props.itemID } />
            </li>
        );
    }
}

export default StoreItems;