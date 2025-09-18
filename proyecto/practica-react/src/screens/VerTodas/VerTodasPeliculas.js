import React, { Component } from 'react';
import MoviesCard from '../../components/MoviesCard/MoviesCard';
import VerMas from '../../components/VerMas/VerMas';

class VerTodasPeliculas extends Component {
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

  MostrarMasPeliculas = () => {
    this.setState((prevState) => ({
      MostrarMas: prevState.MostrarMas + 4,
    }));
  };

  render() {
    const { peliculas, MostrarMas, cargando } = this.state;

    if (cargando) return <p>Cargando...</p>;

    return (
      <section>
        <h2>Todas las películas en cartelera</h2>
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
    );
  }
}

export default VerTodasPeliculas;
