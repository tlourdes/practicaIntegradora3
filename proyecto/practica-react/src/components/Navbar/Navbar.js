import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Navbar() {
  return (
    <nav>
        <div className="logo">
        <img src="/img/logo.png"></img> 
  </div>

      <ul className="main-nav">
        <li>
          <Link to="/" >
            Home
          </Link>
        </li>
        <li>
          <Link to="/VerTodasPeliculas">
            Peliculas
          </Link>
        </li>
        <li>
          <Link to="/VerTodasSeries">
            Series
          </Link>
        </li>
        <li>
          <Link to="/favoritos">
            Favoritas
          </Link>
        </li>
        
      </ul>

      
    </nav>
  );
}

export default Navbar

