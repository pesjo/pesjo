import React from 'react'
import '/Users/pernilla/Documents/portfolio/portfolio/src/App.css';
import { Nav, NavLink, Bars, NavMenu } from "./elements";
import Logo from "./logo.png";


function Navbar({ toggle }) {

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img></img>
                </NavLink>
                <Bars size={30} onClick={toggle}>
                </Bars>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        WORK
                </NavLink>
                    <NavLink to="/about" activeStyle>
                        ABOUT
                </NavLink>
                </NavMenu>

            </Nav>
        </>



    );
}

export default Navbar;
