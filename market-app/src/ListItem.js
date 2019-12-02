import React, { Component } from 'react';
import Increment from './Increment.js';

class ListItem extends Component {
    keypress = (event) => {
        if ((event.key === ' ' || event.key === 'Enter')) {
            this.props.click(event);
        }
    }

    render() {
        return (
            <li key={ this.props.itemIndex } className="results">
                <span tabindex="0" id={ this.props.itemID } className="delete" onClick={ this.props.click } onKeyDown={ (event) => this.keypress(event) }> x </span>
                <div className="listItems">
                    { this.props.name }
                    <div className="counter">
                        <Increment
                            itemID={ this.props.itemID }
                            name={ this.props.name }
                            quantity={ this.props.quantity } />
                    </div>
                </div>
            </li>
        );
    }
}

export default ListItem;