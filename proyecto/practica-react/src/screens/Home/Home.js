import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Movies from "../../components/Movies/Movies";
import Series from "../../components/Series/Series";
import Footer from "../../components/Footer/Footer";
import Buscador from "../../components/Buscador/Buscador";

function Home() {
    return(<React.Fragment>
        <Navbar />
        <Buscador />
        <main className="main">
            <Movies />
            <Series />
        </main>
        <Footer/>
    </React.Fragment>)
    
}

export default Home;