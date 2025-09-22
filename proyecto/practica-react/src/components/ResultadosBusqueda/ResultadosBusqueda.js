import React, { Component } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import SeriesCard from "../SeriesCard/SeriesCard";

class ResultadosBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      tipo: "",
      cargando: true
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

    const busqueda = this.props.match.params.query;
    const tipo = this.props.match.params.type;

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
          tipo: tipo,
          cargando: false
        });
      })
      .catch((err) => {
        console.error("Error al buscar:", err);
      });
  }

  render() {
    const resultados = this.state.resultados;
    const tipo = this.state.tipo;

    if (this.state.cargando) {
      return <p>Cargando...</p>;
    }

    if (resultados.length === 0) {
      return (
        <div>
          <h2>Resultados de búsqueda</h2>
          <p>No se encontraron resultados.</p>
        </div>
      );
    }
    let contenido

    if (tipo === "movie") {
      contenido = (
       
          <div className="card-container">
          {resultados.map((pelicula) => (
            <MoviesCard
              key={pelicula.id}
              id={pelicula.id}
              image={pelicula.poster_path}
              name={pelicula.title}
              description={pelicula.overview}
            />
            
          ))}
          </div>
    
      );
    } else if(tipo === "tv") {
      contenido = (
      
          <div className="card-container">
          {resultados.map((serie) => (
            <SeriesCard
              key={serie.id}
              id={serie.id}
              image={serie.poster_path}
              name={serie.name}
              description={serie.overview}
            />
          ))}
          </div>
    
      );
    }
    return (
      <section>
        <h2>Resultados de búsqueda</h2>
        {contenido}
      </section>
    );
  }
}

export default ResultadosBusqueda;
