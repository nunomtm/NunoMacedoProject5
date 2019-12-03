import React, { Component } from 'react';
import Swal from 'sweetalert2'

class Header extends Component {

    info = (event) => {
        Swal.fire({
            title: 'How to use the app',
            text: "Welcome to Juno's Market! You can go ahead and start shopping through the store items on the right and you can click on them or tab through. Once you do that the item you have selected will be added to the shopping cart and you can increase the quantity as you need, If you don't need that item selected anymore, just click on the X in red to remove from the shopping cart. Thanks for shopping at Juno's Market! See you soon!",
            showCloseButton: true,
            imageUrl: require('./assets/info.jpg'),
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }

    render() {
        return (
            <header>
                <h1 className="animated fadeInDown">Juno's Market</h1><span className="firstLetter glow"><div className="secondLetter animated fadeInDown">N</div></span>
                <div className="neon glow">
                    <h3 className="glow">open</h3>
                </div>
                <a tabindex="0" className="moreInfo" onClick={ this.info }>
                    <i class="fas fa-info-circle"></i>
                </a>
            </header>
        );
    };
};

export default Header;