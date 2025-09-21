

import React, { Component } from 'react';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import VerMas from '../../components/VerMas/VerMas';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

class VerTodasPeliculasCartel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      cargando: true,
      MostrarMas: 8,
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=71f9dd51c9b661ac3cc8a99b148402c4&language=es-ES&page=1')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ peliculas: data.results, cargando: false });
      })
      .catch((error) => {
        console.error('Error al obtener las películas:', error);
        this.setState({ cargando: false });
      });
  }

  MostrarMasPeliculas = () => { // aca nose si le tendria q poner un let peor si le pongo un let no m funciona el this.
    this.setState((a) => ({
      MostrarMas: a.MostrarMas + 4,
    }));
  };

  render() {
    const peliculas = this.state.peliculas;
    const MostrarMas = this.state.MostrarMas;
    const cargando = this.state.cargando;


    if (cargando) {return <React.Fragment> <Navbar /><p>Cargando...</p><Footer /></React.Fragment>};

    let botonVerMas = "";
  if (MostrarMas < peliculas.length) {
    botonVerMas = <VerMas onClick={this.MostrarMasPeliculas} />;
  } // solo aparece el boton si hay mas para mostrar

    return (
      <React.Fragment>
        <Navbar />
      
      <section>
        <h2>Todas las películas en cartel</h2>
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

      {botonVerMas}
      </section>
      <Footer />
      </React.Fragment>
    );
  }
}

export default VerTodasPeliculasCartel;

