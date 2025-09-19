/* import React from "react";
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

export default SeriesPopulares; */

import React, { Component } from 'react';
import SeriesCard from '../../components/SeriesCard/SeriesCard';
import VerMas from '../../components/VerMas/VerMas';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


//DE ESTA FORMA CARGAN LAS PRIMERAS 20 PELICULAS/SERIES NO TODAS 
class VerTodasSeriesPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      cargando: true,
      MostrarMas: 8,
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=71f9dd51c9b661ac3cc8a99b148402c4&language=es-ES&page=1')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ series: data.results, cargando: false });
      })
      .catch((error) => {
        console.error('Error al obtener las series:', error);
        this.setState({ cargando: false });
      });
  }

  MostrarMasSeries = () => {
    this.setState((prevState) => ({
      MostrarMas: prevState.MostrarMas + 4,
    }));
  };

  render() {
    const { series, MostrarMas, cargando } = this.state;

    if (cargando) return <React.Fragment> <Navbar /><p>Cargando...</p><Footer /></React.Fragment>;

    return (
      <React.Fragment>
      <Navbar />
      <section>
        <h2>Todas las series Populares</h2>
        <div className="card-container">
          {series.map((elem, idx) => {
            if (idx < MostrarMas) {
              return (
                <SeriesCard
                  key={idx}
                  id={elem.id}
                  image={elem.poster_path}
                  name={elem.name}   
                  description={elem.overview}
                />
              );
            }
            return null;
          })}
        </div>

        {MostrarMas < series.length && (
          <VerMas onClick={this.MostrarMasSeries} />
        )}
      </section>
      <Footer />
    </React.Fragment>
    );
  }
}

export default VerTodasSeriesPopulares;