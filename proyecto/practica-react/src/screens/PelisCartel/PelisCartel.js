import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/Footer/Footer";

import Pelis from "../../components/Movies/Movies";


function PelisCartel() {
    return(<React.Fragment>
        <Navbar />

        <main className="main">

            <Pelis />
        </main>
        <Footer/>
    </React.Fragment>)
    
}

export default PelisCartel;