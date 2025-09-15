import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="main-nav">
        <li>
          <Link to="/" >
            Home
          </Link>
        </li>
        <li>
          <Link to="/Peliculas">
            Pelicluas
          </Link>
        </li>
        <li>
          <Link to="/personajes">
            Series
          </Link>
        </li>
        <li>
          <Link to="/Favoritas">
            Favoritas
          </Link>
        </li>
        
      </ul>

      
    </nav>
  );
}

export default Navbar

