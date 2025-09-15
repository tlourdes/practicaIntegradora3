import React, { Component } from "react";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      tipo: "pelicula"
    };

    this.cambiarTexto = this.cambiarTexto.bind(this);
    this.cambiarTipo = this.cambiarTipo.bind(this);
    this.buscar = this.buscar.bind(this);
  }

  cambiarTexto(e) {
    this.setState({ query: e.target.value });
  }

  cambiarTipo(e) {
    this.setState({ tipo: e.target.value });
  }

  buscar(e) {
    e.preventDefault();
    console.log("Buscando:", this.state.query, "Tipo:", this.state.tipo);
  }

  render() {
    return (
      <form onSubmit={this.buscar} className="flex gap-2 mb-4">
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="tipo"
              value="pelicula"
              checked={this.state.tipo === "pelicula"}
              onChange={this.cambiarTipo}
            />
            Películas
          </label>
          <label>
            <input
              type="radio"
              name="tipo"
              value="serie"
              checked={this.state.tipo === "serie"}
              onChange={this.cambiarTipo}
            />
            Series
          </label>
        </div>

        <input
          type="text"
          value={this.state.query}
          onChange={this.cambiarTexto}
          placeholder="Buscar..."
          className="border p-2 flex-1 rounded"
        />

        <button type="submit" className="bg-blue-500 text-white px-4 rounded">
          Buscar
        </button>
      </form>
    );
  }
}

export default Buscador;
