import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className='nav-header light-blue lighten-2'>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Recipes</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                </ul>
            </div>
        </nav>
    )
}

export default Header;