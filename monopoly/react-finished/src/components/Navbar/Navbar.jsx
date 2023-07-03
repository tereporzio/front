import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
        <nav className="navbar">
            <NavLink to="/" className="logo-display">
                <img src="../src/assets/logo_tigre.png" alt="logo-image" className="logo-image" />
                
            </NavLink>
            <ul className="navbar-links-container">
                <li className="navbar-element">
                    <NavLink to="home" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Home
                    </NavLink>
                </li>
                <li className="navbar-element"> 
                    <NavLink to="about-us" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Acerca 
                    </NavLink>
                </li>
                <li className="navbar-element">
                    <NavLink to="playlist" className={({isActive}) => isActive ? "navbar-link name" : "navbar-link"}>
                        Reglas
                    </NavLink>    
                
                </li>

     
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;