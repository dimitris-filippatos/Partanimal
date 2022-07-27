import React from "react";
import {Link} from "react-router-dom"
import logo from "./logo.png"

function Nav() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className= "logo"/>
     <Link to="/">Partanimal</Link>
     <Link to="/fest">Festivals</Link>
     <Link to="/contact">Contact</Link>
     
    </nav>
  );
}

export default Nav;
