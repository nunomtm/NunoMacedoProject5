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
                {/* <span className="nameJ animated hinge">J</span><span className="nameN animated glow">N</span> */}
                <div className="neon glow">
                    <h3 className="glow">open</h3>
                </div>
            </header>
        );
    };
};

export default Header;