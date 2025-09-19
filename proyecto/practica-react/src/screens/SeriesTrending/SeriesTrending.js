import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/Footer/Footer";

import SeriesTrending from "../../components/SeriesTrending/SeriesTrending";


function SeriesTrend() {
    return(<React.Fragment>
        <Navbar />

        <main className="main">
           
            <SeriesTrending />
        </main>
        <Footer/>
    </React.Fragment>)
    
}

export default SeriesTrend;