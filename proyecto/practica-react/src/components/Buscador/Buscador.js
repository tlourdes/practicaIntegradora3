import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      tipo: "movie", 
      redirigir: false,
    };
  }

  cambiarTexto(e) {
    this.setState({ busqueda: e.target.value });
  }

  cambiarTipo(e) {
    this.setState({ tipo: e.target.value });
  }

  enviarFormulario(e) {
    e.preventDefault();
    if (this.state.busqueda === "") return;
    this.setState({ redirigir: true });
  }

  render() {
    if (this.state.redirigir) {
      return (
        <Navigate
          to={`/search-results?query=${this.state.busqueda}&type=${this.state.tipo}`}
        />
      );
    }

    return (
      <form onSubmit={(e) => this.enviarFormulario(e)}>
        <input
          type="text"
          value={this.state.busqueda}
          onChange={(e) => this.cambiarTexto(e)}
          placeholder="Buscar..."
        />

        <div>
          <label>
            <input
              type="radio"
              value="movie"
              checked={this.state.tipo === "movie"}
              onChange={(e) => this.cambiarTipo(e)}
            />
            Películas
          </label>
          <label>
            <input
              type="radio"
              value="tv"
              checked={this.state.tipo === "tv"}
              onChange={(e) => this.cambiarTipo(e)}
            />
            Series
          </label>
        </div>

        <button type="submit">Buscar</button>
      </form>
    );
  }
}

export default Buscador;
