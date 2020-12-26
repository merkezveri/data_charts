import React from 'react';
import logo from '../figures/logo-white.png';


function Navbar() {
    return (
        <header id="header">
            <nav class="navbar navbar-dark bg-dark border-bottom border-2 mb-4">
                <div className="container justify-content-center">
                    <a class="navbar-brand" href="/"><img src={logo} className="image mb-1" /></a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
