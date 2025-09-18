import React, { Component } from 'react';

class DetalleP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorito: false,
    };
  }

  componentDidMount() {
    const movie = this.props.movie;
    if (movie) {
      let traido = localStorage.getItem("favoritosMovies");
      if (traido !== null) {
        let parseado = JSON.parse(traido);
        if (parseado.includes(movie.id)) {
          this.setState({ favorito: true });
        }
      }
    }
  }

  agregarFavoritos() {
    const  movie  = this.props.movie;
    let favoritos = [];
    let traido = localStorage.getItem("favoritosMovies");

    if (traido === null) {
      favoritos.push(movie.id);
      localStorage.setItem("favoritosMovies", JSON.stringify(favoritos));
    } else {
      let parseado = JSON.parse(traido);
      if (!parseado.includes(movie.id)) {
        parseado.push(movie.id);
        localStorage.setItem("favoritosMovies", JSON.stringify(parseado));
      }
    }
    this.setState({ favorito: true });
  }

  borrarFavoritos() {
    const  movie  = this.props.movie;
    let traido = localStorage.getItem("favoritosMovies");

    if (traido !== null) {
      let parseado = JSON.parse(traido);
      let filtrado = parseado.filter(id => id !== movie.id);
      localStorage.setItem("favoritosMovies", JSON.stringify(filtrado));
    }

    this.setState({ favorito: false });
  }

  render() {
    const movie = this.props.movie;

    

    return (
       !movie ? (
      <h3>Cargando...</h3> 
    ) : (
      <div className='sectionDetalle'>
        <div>
          <h2>{movie.title}</h2>
          <img
            className='detalleImg'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="detalleInfo">
            <p>Rating: {movie.vote_average}</p>
            <p>Fecha de estreno: {movie.release_date}</p>
            <p>Duración: {movie.runtime} minutos</p>
            <p>Sinopsis: {movie.overview}</p>
            <p>
              Género: {movie.genres && movie.genres.length > 0
                ? movie.genres.map(g => g.name).toString()
                : "No disponible"}
            </p>

            {this.state.favorito ? (
              <button className="botones" onClick={() => this.borrarFavoritos()}>
                Eliminar de favoritos
              </button>
            ) : (
              <button className="botones" onClick={() => this.agregarFavoritos()}>
                Agregar a favoritos
              </button>
            )}
          </div>
        </div>
      </div>
    )
    );
  }
}

export default DetalleP;
