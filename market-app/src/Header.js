import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
        };
    }

    render() {
        return (
            <header>
                <h1>Juno's Market</h1>
                <div className="neon glow">
                    <h3 className="glow">open</h3>
                </div>
            </header>
        );
    };
};

export default Header;