import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/Footer/Footer";

import Pelis from "../../components/MoviesTrending/MoviesTrending";


function PelisTrending() {
    return(<React.Fragment>
        <Navbar />

        <main className="main">

            <Pelis />
        </main>
        <Footer/>
    </React.Fragment>)
    
}

export default PelisTrending;