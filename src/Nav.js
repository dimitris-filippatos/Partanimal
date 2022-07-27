import React from "react";
import {Link} from "react-router-dom"
import Party from "./icons/Party";

function Nav() {
  return (
    <nav className="navbar">
      <Party />
     <Link to="/">Partanimal</Link>
     <Link to="/fest">Festivals</Link>
     <Link to="/contact">Contact</Link>
     
    </nav>
  );
}

export default Nav;
