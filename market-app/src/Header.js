import React, { Component } from 'react';

class Header extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         header: '',
    //     };
    // }

    render() {
        return (
            <header>
                <h1 className="animated fadeInDown">Juno's Market</h1>
                {/* <span className="nameN1 animated fadeIn">N</span><span className="nameN glow">N</span> */}
                <div className="neon glow">
                    <h3 className="glow">open</h3>
                </div>
            </header>
        );
    };
};

export default Header;