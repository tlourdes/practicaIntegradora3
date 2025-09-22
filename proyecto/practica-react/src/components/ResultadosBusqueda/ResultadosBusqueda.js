import React, { Component } from "react";

class ResultadosBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
    };
  }

  componentDidMount() {
    this.buscarResultados();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.buscarResultados();
    }
  }

  buscarResultados() {
    const parametros = new URLSearchParams(this.props.location.search);
    const busqueda = parametros.get("query");
    const tipo = parametros.get("type");

    console.log("location.search:", this.props.location.search);
    console.log("query:", busqueda, "type:", tipo);

    const apiKey = "71f9dd51c9b661ac3cc8a99b148402c4"; 

    fetch(
      `https://api.themoviedb.org/3/search/${tipo}?api_key=${apiKey}&language=es-ES&query=${busqueda}`
    )
      .then((res) => res.json())
      .then((datos) => {
        let resultadosObtenidos;
        if (datos) {
          resultadosObtenidos = datos.results;
        } else {
          resultadosObtenidos = [];
        }

        this.setState({
          resultados: resultadosObtenidos,
        });
      })
      .catch((err) => {
        console.error("Error al buscar:", err);
      });
  }

  render() {
    const { resultados } = this.state;

    if (resultados.length === 0) {
      return (
        <div>
          <h2>Resultados de búsqueda</h2>
          <p>No se encontraron resultados.</p>
        </div>
      );
    }

    return (
      <section>
        <h2>Resultados de búsqueda</h2>
{if(tipo === 'movie'){        
  <h3>Películas</h3> } 

this.state.peliculas.map((pelicula) => (
                <MoviesCard
                  key={pelicula.id}
                  id={pelicula.id}
                  image={pelicula.poster_path}
                  name={pelicula.title}
                  description={pelicula.overview}
                />

  else if (tipo === 'tv')
  { <h3>Series</h3> }
  this.state.series.map((serie) => (
    <SeriesCard
      key={serie.id}
      id={serie.id}
      image={serie.poster_path}
      name={serie.name}
      description={serie.overview}
    />
  }

        <div className="card-container">
          {resultados.map((item) => {
            let titulo;

            if (item.title) {
              titulo = item.title;
            } else if (item.name) {
              titulo = item.name;
            } else {
              titulo = "Título no disponible";
            }

            let poster;
            if (item.poster_path) {
              poster = (
                <img
                  src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                  alt={titulo}
                />
              );
            } else {
              poster = null;
            }

            return (
              <div key={item.id} className="card">
                {poster}
                <h3>{titulo}</h3>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default ResultadosBusqueda;
