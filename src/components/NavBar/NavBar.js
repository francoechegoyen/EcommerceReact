import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import CartHover from "../cartcomponent/CartIcon";
import { Button } from "../button/Button";
import './NavBar.css';

class NavBar extends Component {
    state = { clicked: false }

handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
}

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">NutriMax<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}>
                    </i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                       return (
                        <li key={index}>
                            <a className={item.cName} href = {item.url}>
                                {item.title}
                            </a>
                        </li>
                       )
                    })}
                </ul>
                <button className="btn">Ingresar</button>
                <div className="carrito">
                <CartHover />
                </div>
            </nav>
        )
    }
}

export default NavBar;