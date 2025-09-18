import React, { Component } from 'react';

class DetalleS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorito: false,
    };
  }

  componentDidMount() {
    const { serie } = this.props;
    if (serie) {
      let traido = localStorage.getItem("favoritosSeries");
      if (traido !== null) {
        let parseado = JSON.parse(traido);
        if (parseado.includes(serie.id)) {
          this.setState({ favorito: true });
        }
      }
    }
  }

  agregarFavoritos() {
    const { serie } = this.props;
    let favoritos = [];
    let traido = localStorage.getItem("favoritosSeries");

    if (traido === null) {
      favoritos.push(serie.id);
      localStorage.setItem("favoritosSeries", JSON.stringify(favoritos));
    } else {
      let parseado = JSON.parse(traido);
      if (!parseado.includes(serie.id)) {
        parseado.push(serie.id);
        localStorage.setItem("favoritosSeries", JSON.stringify(parseado));
      }
    }
    this.setState({ favorito: true });
  }

  borrarFavoritos() {
    const { serie } = this.props;
    let traido = localStorage.getItem("favoritosSeries");

    if (traido !== null) {
      let parseado = JSON.parse(traido);
      let filtrado = parseado.filter(id => id !== serie.id);
      localStorage.setItem("favoritosSeries", JSON.stringify(filtrado));
    }

    this.setState({ favorito: false });
  }

  render() {
    const { serie } = this.props;

    if (!serie) return <p>Cargando...</p>;

    return (
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
            <p>
              Género: {serie.genres && serie.genres.length > 0 
                ? serie.genres.map(g => g.name).toString() 
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
    );
  }
}

export default DetalleS;
