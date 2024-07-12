import React from 'react';
import ashImage from './assests/ash.png'; 

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Pokedex</h1>
            <img src={ashImage} alt="Ash Ketchum" className="navbar-image" />
        </nav>
    );
}
 
export default Navbar;
