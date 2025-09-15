import React, { Component } from "react";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      cargando: false,
      error: null,
    };
  }

  componenteMount() {
    this.buscarAPI();
  }

  componentedUpdate(prevProps) {
    if (
      prevProps.query !== this.props.query ||
      prevProps.tipo !== this.props.tipo
    ) {
      this.buscarAPI();
    }
  }

  buscarAPI() {
    const { query, tipo } = this.props;

    if (!query) return;

    this.setState({ cargando: true, error: null });

    const apiKey = "71f9dd51c9b661ac3cc8a99b148402c4"; 
    let buscarTipo;
    if (tipo === "pelicula") {
    buscarTipo = "movie";
    } else {
    buscarTipo = "tv";
    }

    const url = `https://api.themoviedb.org/3/search/${buscarTipo}?api_key=${apiKey}&query=${encodeURIComponent(
      query
    )}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({ resultados: data.results, cargando: false })
      )
      .catch((err) =>
        this.setState({ error: "Error al buscar", cargando: false })
      );
  }

  render() {
    const { resultados, cargando, error } = this.state;

    if (cargando) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;
    if (!resultados || resultados.length === 0) return <div>No hay resultados</div>;

    return (
      <div className="mt-4">
        {resultados.map((item) => (
          <div key={item.id} className="border p-2 mb-2 rounded">
            <h3 className="font-bold">
              {this.props.tipo === "pelicula" ? item.title : item.name}
            </h3>
            <p>{item.overview}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResults;
