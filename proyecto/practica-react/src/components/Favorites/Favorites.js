import React, { Component } from "react";
import { Link } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import SeriesCard from "../SeriesCard/SeriesCard";

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      series: [],
      cargando: true
    };
  }

  componentDidMount() {
    let peliculas = [];
    let series = [];

    // cuento los fetchs pendientes para desp hacer el cargando
    let fetchPendientes = 0;

    // peliculas
    let favMovies = localStorage.getItem("favoritosPelis");
    if (favMovies !== null) {
      favMovies = JSON.parse(favMovies);
      fetchPendientes += favMovies.length;

      for (let i = 0; i < favMovies.length; i++) {
        fetch("https://api.themoviedb.org/3/movie/" + favMovies[i] + "?api_key=71f9dd51c9b661ac3cc8a99b148402c4&language=es")
          .then(res => res.json())
          .then(data => {
            peliculas.push(data);
            let nuevasPeliculas = peliculas
            this.setState({ peliculas: nuevasPeliculas });

            
            fetchPendientes--;
            if (fetchPendientes === 0) {
              this.setState({ cargando: false });
            }
          })
          .catch(e => {
            console.error(e);
            fetchPendientes--;
            if (fetchPendientes === 0) {
              this.setState({ cargando: false });
            }
          });
      }
    }

    // series
    let favSeries = localStorage.getItem("favoritosSeries");
    if (favSeries !== null) {
      favSeries = JSON.parse(favSeries);
      fetchPendientes += favSeries.length;

      for (let i = 0; i < favSeries.length; i++) {
        fetch(
          "https://api.themoviedb.org/3/tv/" +
            favSeries[i] +
            "?api_key=71f9dd51c9b661ac3cc8a99b148402c4&language=es"
        )
          .then((res) => res.json())
          .then((data) => {
            series.push(data);
            this.setState({ series: [...series] });

            fetchPendientes--;
            if (fetchPendientes === 0) this.setState({ cargando: false });
          })
          .catch((e) => {
            console.error(e);
            fetchPendientes--;
            if (fetchPendientes === 0) this.setState({ cargando: false });
          });
      }
    }

    if (fetchPendientes === 0) {
      this.setState({ cargando: false });
    }
  }

  render() {
    if (this.state.cargando) {
      return <p>Cargando...</p>;
    }

    return (
      <React.Fragment>
        <section>
          <h2>Películas favoritas</h2>
          <div className="card-container">
            {this.state.peliculas.length === 0 ? (
              <p>No hay películas en favoritos.</p>
            ) : (
              this.state.peliculas.map((pelicula) => (
                <MoviesCard
                  key={pelicula.id}
                  id={pelicula.id}
                  image={pelicula.poster_path}
                  name={pelicula.title}
                  description={pelicula.overview}
                />
              ))
            )}
          </div>
        </section>

        <section>
          <h2>Series favoritas</h2>
          <div className="card-container">
            {this.state.series.length === 0 ? (
              <p>No hay series en favoritos.</p>
            ) : (
              this.state.series.map((serie) => (
                <SeriesCard
                  key={serie.id}
                  id={serie.id}
                  image={serie.poster_path}
                  name={serie.name}
                  description={serie.overview}
                />
              ))
            )}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Favorites;
