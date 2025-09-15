import React from "react";
import { Link } from "react-router-dom";

function SeriesCard(props) {
  return (
    <article className="card">
      <img src={"https://image.tmdb.org/t/p/w500" + props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>

      <Link to={"/serie/" + props.id}>
        <button>Ir a detalle</button>
      </Link>

      <button>Agregar a favoritos</button> {/* hacer para q se guarde en favoritos  */}
    </article>
  );
}

export default SeriesCard;

