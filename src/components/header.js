import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="/" className="navbar-brand">
                Listas
            </Link>  
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink 
                        to='/nueva-lista'
                        className="nav-link"
                        activeClassName="active"
                    >Nueva Lista</NavLink>
                </li>
            </ul>  
        </div>
    </nav>

);
 
export default Header;