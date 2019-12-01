import React, { Component } from 'react';

class Increment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
        };
    }

    incrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    decreaseItem = () => {
        this.setState(prevState =>
            ({ clicks: prevState.clicks ? prevState.clicks - 1 : 0 }));
    }

    render() {
        return (
            <div className="increment">
                <button onClick={this.decreaseItem}> - </button>
                <span className="count"> {this.state.clicks} </span>
                <button onClick={this.incrementItem}> + </button>
            </div>
        );
    }
}

export default Increment;