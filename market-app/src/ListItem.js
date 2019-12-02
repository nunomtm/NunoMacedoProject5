import React, { Component } from 'react';
import Increment from './Increment.js';

class ListItem extends Component {
    keypress = (e) => {
        if ((e.key === ' ' || e.key === 'Enter')) {
            this.props.click(e);
        }
    }

    render() {
        return (
            <li key={this.props.itemIndex} className="results">
                <span tabindex="0" id={this.props.itemID} className="delete" onClick={this.props.click} onKeyDown={(e) => this.keypress(e)}> x </span>
                <div className="listItems">
                    {this.props.name}
                    <div className="counter">
                        <Increment
                            itemID={this.props.itemID}
                            name={this.props.name}
                            quantity={this.props.quantity} />
                    </div>
                </div>
            </li>
        );
    }
}

export default ListItem;