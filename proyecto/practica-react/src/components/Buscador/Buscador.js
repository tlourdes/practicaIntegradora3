import React, { Component } from "react";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      tipo: "movie", // valor inicial
    };
  }

  cambiarTexto(e) {
    this.setState({ busqueda: e.target.value });
  }

  cambiarTipo(e) {
    this.setState({ tipo: e.target.value });
  }

  render() {
    return (
      <form action="/search-results" method="get" className="search">
        <input
          type="text"
          name="query" 
          value={this.state.busqueda}
          onChange={(e) => this.cambiarTexto(e)}
          placeholder="Buscar..."
        />

<div className="radios">
          <label>
            <input
              type="radio"
              name="type" 
              value="movie"
              checked={this.state.tipo === "movie"}
              onChange={(e) => this.cambiarTipo(e)}
            />
            Películas
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="tv"
              checked={this.state.tipo === "tv"}
              onChange={(e) => this.cambiarTipo(e)}
            />
            Series
          </label>
        </div>

        <button type="submit" class='botones'>Buscar</button>
      </form>
    );
  }
}

export default Buscador;
