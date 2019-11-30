import React, { Component } from 'react';

class Increment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }

    render() {
        return (
            <div className="increment">
                <button onClick={this.DecreaseItem}> - </button>
                <span className="count"> {this.state.clicks} </span>
                <button onClick={this.IncrementItem}> + </button>
            </div>
        );
    }
}

export default Increment;