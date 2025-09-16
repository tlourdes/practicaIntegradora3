import React, { Component } from "react";

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
            this.setState({ peliculas });

            
            fetchPendientes--;
            if (fetchPendientes === 0) {
              this.setState({ cargando: false });
            }
          })
          .catch(err => {
            console.error(err);
            fetchPendientes--;
            if (fetchPendientes === 0) this.setState({ cargando: false });
          });
      }
    }

    // series
    let favSeries = localStorage.getItem("favoritosSeries");
    if (favSeries !== null) {
      favSeries = JSON.parse(favSeries);
      fetchPendientes += favSeries.length;

      for (let i = 0; i < favSeries.length; i++) {
        fetch("https://api.themoviedb.org/3/tv/" + favSeries[i] + "?api_key=71f9dd51c9b661ac3cc8a99b148402c4&language=es")
          .then(res => res.json())
          .then(data => {
            series.push(data);
            this.setState({ series });

            fetchPendientes--;
            if (fetchPendientes === 0) this.setState({ cargando: false });
          })
          .catch(err => {
            console.error(err);
            fetchPendientes--;
            if (fetchPendientes === 0) this.setState({ cargando: false });
          });
      }
    }


    if (fetchPendientes === 0) {
      this.setState({ cargando: false });
    }
  }

  // para que si borro un favorito deje de aparecer en la pagina
    removeMovie = (id) => {
    let favMovies = JSON.parse(localStorage.getItem("favoritosPelis"));
     let actualizado = favMovies.filter(movieId => movieId !== id);
    localStorage.setItem("favoritosPelis", JSON.stringify(actualizado));
    this.setState({ peliculas: this.state.peliculas.filter(p => p.id !== id) });
       }

  removeSerie = (id) => {
      let favSeries = JSON.parse(localStorage.getItem("favoritosSeries"));
      let actualizado = favSeries.filter(serieId => serieId !== id);
    localStorage.setItem("favoritosSeries", JSON.stringify(actualizado));
    this.setState({ series: this.state.series.filter(s => s.id !== id) });
    }

  render() {
    if (this.state.cargando) {
      return <p>Cargando...</p>;
    
    }

    return (
      <React.Fragment>
        <h2>Películas favoritas</h2>
        <div className="favoritos-container">
          {this.state.peliculas.length === 0 ? <p>No hay películas en favoritos.</p> :
            this.state.peliculas.map((pelicula) => (
              <div key={pelicula.id} className="fav-card">
                <img src={"https://image.tmdb.org/t/p/w500" + pelicula.poster_path} alt={pelicula.title} />
                <h3>{pelicula.title}</h3>
                <p>{pelicula.overview}</p>
                <button onClick={() => this.removeMovie(pelicula.id)}>Eliminar de favoritos</button>
              </div>
            ))
          }
        </div>

        <h2>Series favoritas</h2>
        <div className="favoritos-container">
          {this.state.series.length === 0 ? <p>No hay series en favoritos.</p> :
            this.state.series.map((serie) => (
              <div key={serie.id} className="fav-card">
                <img src={"https://image.tmdb.org/t/p/w500" + serie.poster_path} alt={serie.name} />
                <h3>{serie.name}</h3>
                <p>{serie.overview}</p>
                <button onClick={() => this.removeSerie(serie.id)}>Eliminar de favoritos</button>
              </div>
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Favorites;
