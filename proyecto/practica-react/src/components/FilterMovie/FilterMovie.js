import React, { Component } from "react";
import MoviesCard from '../../components/MoviesCard/MoviesCard';

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
    const peliculas  = this.props.peliculas;
    const busqueda = this.state.busqueda;

    const resultados = peliculas.filter(p =>
      p.title.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Buscar película..."
          value={busqueda}
          onChange={this.cambiarBusqueda}
        />
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
      </div>
    );
  }
}

export default FilterMovie;

