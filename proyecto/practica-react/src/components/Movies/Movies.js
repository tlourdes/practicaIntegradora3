import React, { Component } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { Link } from "react-router-dom";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=71f9dd51c9b661ac3cc8a99b148402c4&language=es-ES&page=1")
    .then(res => res.json())
    .then(data => this.setState({ movies: data.results }))
    .catch(err => console.log("Error: " + err));
  }

  render() {
    return (
      <section>
        <h2>Películas en Cartel</h2>
        <div className="card-container">
          {this.state.movies.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            this.state.movies.map(function(movie, idx) {
              if (idx < 4){
                return (
                <MoviesCard
                  key={idx}
                  id={movie.id}
                  image={movie.poster_path}
                  name={movie.title}
                  description={movie.overview}
                />
              );
              } else{return null;}
              
            })
          )}
        </div>

        <Link to="/ver-todas-peliculas">
          <button class='botones'>Ver todas</button>
        </Link>
      </section>
    );
  }
}

export default Movies;
