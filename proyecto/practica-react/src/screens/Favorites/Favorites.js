import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Favorites from "../../components/Favorites/Favorites";
import Footer from "../../components/Footer/Footer";


function Home() {
    return(<React.Fragment>
        <Navbar />
       
        <main className="favorites-main">
            <Favorites />
        </main>
        <Footer />
    </React.Fragment>)
    
}

export default Home;