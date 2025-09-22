import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ResultadosBusqueda from "../../components/ResultadosBusqueda/SearchResults";

function Results(props) {
  return (
    <React.Fragment>
    <Navbar />
    <ResultadosBusqueda location={props.location} history={props.history} match={props.match} />
    <Footer />
    </React.Fragment>
  );
}

export default Results;