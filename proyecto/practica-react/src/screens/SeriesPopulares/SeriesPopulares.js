import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/Footer/Footer";

import Series from "../../components/Series/Series";


function SeriesPopulares() {
    return(<React.Fragment>
        <Navbar />

        <main className="main">
           
            <Series />
        </main>
        <Footer/>
    </React.Fragment>)
    
}

export default SeriesPopulares;