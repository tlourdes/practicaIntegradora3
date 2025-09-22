import React, { Component } from 'react';

class DetalleP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorito: false,
    };
  }

  componentDidMount() {
    let movie = this.props.movie;
    if (movie) {
      let traido = localStorage.getItem("favoritosPelis");
      if (traido !== null) {
        console.log("entre al if");
        
        let parseado = JSON.parse(traido);
        let encontrado = false;
        for (let i = 0; i < parseado.length; i++) {
          if (parseado[i] === movie.id) {
            encontrado = true;
            
          }
        }
        if (encontrado) {
          this.setState({ favorito: true });
        }
      }
    }
  }

  agregarFavoritos() {
    let  movie  = this.props.movie;
    let favoritos = [];
    let traido = localStorage.getItem("favoritosPelis");

    if (traido === null) {
      favoritos.push(movie.id);
      localStorage.setItem("favoritosPelis", JSON.stringify(favoritos));
    } else {
      let parseado = JSON.parse(traido);
      let yaExiste = false;
      for (let i = 0; i < parseado.length; i++) {
        if (parseado[i] === movie.id) {
          yaExiste = true;
  
        }
      }
      if (yaExiste!== null) {  
        parseado.push(movie.id);
        localStorage.setItem("favoritosPelis", JSON.stringify(parseado));
      }
    }
    this.setState({ favorito: true });
  }

  borrarFavoritos() {
    let  movie  = this.props.movie;
    let traido = localStorage.getItem("favoritosPelis");

    if (traido !== null) {
      let parseado = JSON.parse(traido);
      let filtrado = parseado.filter(id => id !== movie.id);
      localStorage.setItem("favoritosPelis", JSON.stringify(filtrado));
    }

    this.setState({ favorito: false });
  }

  render() {
    let movie = this.props.movie;
    let generos ="No disponible";

    if (movie.genres && movie.genres.length > 0) { // si tiene genero y hay mas de uno
      generos = "";
      for (let i = 0; i < movie.genres.length; i++) {
        generos += movie.genres[i].name;
        if (i < movie.genres.length - 1) { // si no es el ultimo le pongo coma
          generos += ", ";
        }
      }
    }

    

    return (
       !movie ? (   //si no es null ni undefined
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
             <p>Género: {generos}</p>


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
