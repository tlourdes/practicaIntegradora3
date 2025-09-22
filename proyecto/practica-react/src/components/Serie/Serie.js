import React, { Component } from 'react';

class DetalleS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorito: false,
    };
  }

  componentDidMount() {
    let serie = this.props.serie;
    if (serie) {
      let traido = localStorage.getItem("favoritosSeries");
      if (traido !== null) {
        let parseado = JSON.parse(traido);
        let encontrado = false;
        for (let i = 0; i < parseado.length; i++) {
          if (parseado[i] === serie.id) {
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
    let  serie  = this.props.serie;
    let favoritos = [];
    let traido = localStorage.getItem("favoritosSeries");

    if (traido === null) {
      favoritos.push(serie.id);
      localStorage.setItem("favoritosSeries", JSON.stringify(favoritos));
    } else {
      let parseado = JSON.parse(traido);
      let yaExiste = false;
      for (let i = 0; i < parseado.length; i++) {
        if (parseado[i] === serie.id) {
          yaExiste = true;
  
        }
      }
      if (yaExiste!== null) {  
        parseado.push(serie.id);
        localStorage.setItem("favoritosSeries", JSON.stringify(parseado));
      }
    }
    this.setState({ favorito: true });
  }

  borrarFavoritos() {
    let serie  = this.props.serie;
    let traido = localStorage.getItem("favoritosSeries");

    if (traido !== null) {
      let parseado = JSON.parse(traido);
      let filtrado = parseado.filter(id => id !== serie.id);
      localStorage.setItem("favoritosSeries", JSON.stringify(filtrado));
    }

    this.setState({ favorito: false });
  }

  render() {
    let  serie  = this.props.serie;
     let generos ="No disponible";
 if (serie.genres && serie.genres.length > 0) { // si tiene genero y hay mas de uno
      generos = "";
      for (let i = 0; i < serie.genres.length; i++) {
        generos += serie.genres[i].name;
        if (i < serie.genres.length - 1) { // si no es el ultimo le pongo coma
          generos += ", ";
        }
      }
    }
  

    return (
        !serie ? (   //si no es null ni undefined
      <h3>Cargando...</h3> 
    ) : (
      <div className='sectionDetalle'>
        <div>
          <h2>{serie.title}</h2>
          <img
            className='detalleImg'
            src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
            alt={serie.name}
          />
          <div className="detalleInfo">
            <p>Rating: {serie.vote_average}</p>
            <p>Fecha de estreno: {serie.first_air_date}</p>
            <p>Duración: {serie.episode_run_time} minutos</p>
            <p>Sinopsis: {serie.overview}</p>
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

export default DetalleS;
