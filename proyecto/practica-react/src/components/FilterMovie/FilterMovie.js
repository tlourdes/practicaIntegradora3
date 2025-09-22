import React, { Component } from "react";

class FilterMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { busqueda: "" };
  }

  cambiarBusqueda = (e) => {
    const texto = e.target.value;
    this.setState({ busqueda: texto });
    this.props.filtrar(texto); 
  };
  

  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Buscar película..."
          value={this.state.busqueda}
          onChange={this.cambiarBusqueda}
        />
      </div>
    );
  }
}

export default FilterMovie;


