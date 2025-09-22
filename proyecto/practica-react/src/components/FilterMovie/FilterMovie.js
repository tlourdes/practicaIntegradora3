import React, { Component } from "react";

class FilterMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
    };
  }

  cambiarBusqueda = (e) => {
    this.setState({ busqueda: e.target.value });
  };

  render() {
    const { peliculas } = this.props;
    const { busqueda } = this.state;

    const resultados = peliculas.filter((pelicula) =>
      pelicula.title.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Buscar película..."
          value={busqueda}
          onChange={this.cambiarBusqueda}
        />
        <ul>
          {resultados.map((pelicula) => (
            <li key={pelicula.id}>{pelicula.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FilterMovie;
