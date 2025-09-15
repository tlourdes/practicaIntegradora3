import { Component } from "react";
import { Link } from "react-router-dom";

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoriteMovies: [],
      favoriteSeries: []
    };
  }

  componentDidMount() {
     let moviesStorage = localStorage.getItem("favoriteMovies");
    let seriesStorage = localStorage.getItem("favoriteSeries");
    if (moviesStorage !== null) {
      this.setState({ favoriteMovies: JSON.parse(moviesStorage) });
    }
    if (seriesStorage !== null) {
      this.setState({ favoriteSeries: JSON.parse(seriesStorage) });
    }
  }



  removeMovie(id) {
    let nuevaLista = this.state.favoriteMovies.filter(movie => movie.id !== id);
    this.setState({ favoriteMovies: nuevaLista });
    localStorage.setItem("favoriteMovies", JSON.stringify(nuevaLista));
  }

  removeSeries(id) {
    let nuevaLista = this.state.favoriteSeries.filter(serie => serie.id !== id);
    this.setState({ favoriteSeries: nuevaLista });
    localStorage.setItem("favoriteSeries", JSON.stringify(nuevaLista));
  }



  render() {
    return (
      <section>
        <h2>Mis Favoritos</h2>

        <div>
          <h3>Películas Favoritas</h3>
          <div className="favoritos">
            {this.state.favoriteMovies.length === 0 ? (
              <p>No tenes películas favoritas. </p>
            ) : (
              this.state.favoriteMovies.map((movie, idx) => (
                <div key={idx} className="favorite-card">
                  <Link to={`/pelicula/${movie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.image}`}
                      alt={movie.name}
                    />
                    <h4>{movie.name}</h4>
                  </Link>
                  <button onClick={() => this.removeMovie(movie.id)}>
                    Eliminar de favoritos
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        <div>
          <h3>Series Favoritas</h3>
          <div className="favoritos">
            {this.state.favoriteSeries.length === 0 ? (
              <p>No tenes series favoritas.</p>
            ) : (
              this.state.favoriteSeries.map((serie, idx) => (
                <div key={idx} className="favorite-card">
                  <Link to={`/serie/${serie.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${serie.image}`}
                      alt={serie.name}
                    />
                    <h4>{serie.name}</h4>
                  </Link>
                  <button onClick={() => this.removeSeries(serie.id)}>
                    Eliminar de favoritos
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Favorites;
