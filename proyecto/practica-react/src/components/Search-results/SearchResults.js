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

    if (!busqueda || !tipo) {
      console.warn("Faltan parámetros de búsqueda");
      this.setState({ resultados: [] });
      return;
    }

    const apiKey = "71f9dd51c9b661ac3cc8a99b148402c4"; 

    fetch(
      `https://api.themoviedb.org/3/search/${tipo}?api_key=${apiKey}&language=es-ES&query=${busqueda}`
    )
      .then((res) => res.json())
      .then((datos) => {
        this.setState({
          resultados: datos.results || [],
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
      <div>
        <h2>Resultados de búsqueda</h2>
        <div className="grid-resultados">
          {resultados.map((item) => {
            let titulo = item.title || item.name;

            return (
              <div key={item.id} className="card">
                {item.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                    alt={titulo}
                  />
                )}
                <h3>{titulo}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ResultadosBusqueda;
