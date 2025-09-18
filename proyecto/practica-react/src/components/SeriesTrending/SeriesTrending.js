import React, { Component } from "react";
import SeriesCard from "../SeriesCard/SeriesCard";
import { Link } from "react-router-dom";

class SeriesTrending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=71f9dd51c9b661ac3cc8a99b148402c4&language=es-ES&page=1")
    
      .then(res => res.json())
      .then(data => this.setState({ series: data.results }))
      .catch(err => console.log("Error: " + err));
  }

  render() {
    return (
      <section>
        <h2 class='titulos'>Series trending</h2>
        <div className="card-container">
          {this.state.series.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            this.state.series.map(function(show, idx) {
              if (idx < 4) {
                return (
                  <SeriesCard
                    key={idx}
                    id={show.id}
                    image={show.poster_path}
                    name={show.name}
                    description={show.overview}
                  />
                );
              } else {
                return null;
              }
            })
          )}
        </div>

        <Link to="/VerTodasSeries">
  <button className='botones'>Ver todas</button>
</Link>
      </section>
    );
  }
}

export default SeriesTrending;
