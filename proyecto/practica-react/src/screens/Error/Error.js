import React from "react";
import Menu from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Error() {
   
   return (
      <React.Fragment>
         <Menu />
         <h1>Error 404</h1>
         <p> La página que estas buscando no existe </p>
            <Link to="/">Volver al inicio</Link>
         <Footer/>
      </React.Fragment>
   )
    
}

export default Error;