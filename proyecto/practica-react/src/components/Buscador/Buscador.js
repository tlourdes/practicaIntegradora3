import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
       busqueda: "",
      tipo: "movie",
    };
  }

  cambiarTexto(e) {
    this.setState({ busqueda: e.target.value.toLowerCase() });
  }

  cambiarTipo(e) {
    this.setState({ tipo: e.target.value });
  }

  ejecutarBusqueda(e) {
    e.preventDefault();
    this.props.history.push(
      `/ResultadosBusqueda/${this.state.busqueda}/${this.state.tipo}`
    );
  }

  render() {
    return (
          <form onSubmit={(e) => this.ejecutarBusqueda(e)} className="search">
        <input
          type="text"
          value={this.state.busqueda}
          onChange={(e) => this.cambiarTexto(e)}
          placeholder="Buscar..."
        />

        <div className="radios">
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

        <button type="submit" className="botones">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Buscador);
