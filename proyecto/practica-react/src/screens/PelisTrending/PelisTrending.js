/* import React from "react";
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

export default PelisTrending; */

import React, { Component } from 'react';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import VerMas from '../../components/VerMas/VerMas';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

class VerTodasPeliculasTrending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      cargando: true,
      MostrarMas: 8,
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=71f9dd51c9b661ac3cc8a99b148402c4&language=es-ES&page=1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ peliculas: data.results, cargando: false });
      })
      .catch((error) => {
        console.error('Error al obtener las películas:', error);
        this.setState({ cargando: false });
      });
  }

  MostrarMasPeliculas = () => {
    this.setState((prevState) => ({
      MostrarMas: prevState.MostrarMas + 4,
    }));
  };

  render() {
    const { peliculas, MostrarMas, cargando } = this.state;

    if (cargando) return <React.Fragment> <Navbar /><p>Cargando...</p><Footer /></React.Fragment>;

    return (
      <React.Fragment>
        <Navbar />
      
      <section>
        <h2>Todas las películas trending</h2>
        <div className="card-container">
          {peliculas.map((elem, idx) => {
            if (idx < MostrarMas) {
              return (
                <MoviesCard
                  key={idx}
                  id={elem.id}
                  image={elem.poster_path}
                  name={elem.title}
                  description={elem.overview}
                />
              );
            }
            return null;
          })}
        </div>

        {MostrarMas < peliculas.length && (
          <VerMas onClick={this.MostrarMasPeliculas} />
        )}
      </section>
      <Footer />
      </React.Fragment>
    );
  }
}

export default VerTodasPeliculasTrending;