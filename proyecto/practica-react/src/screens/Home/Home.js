import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Movies from "../../components/Movies/Movies";
import Series from "../../components/Series/Series";
import Footer from "../../components/Footer/Footer";
import Buscador from "../../components/Buscador/Buscador";

function Home() {
    return(<React.Fragment>
        <Buscador />
        <main className="main">
            <Movies />
            <Series />
        </main>
    </React.Fragment>)
    
}

export default Home;