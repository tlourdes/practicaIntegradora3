import React from 'react';

function DetalleS({ serie }) {
    if (!serie) return <p>Cargando...</p>
  return (
    <div className='sectionDetalleS'>
      <div >
      <h2>{serie.title}</h2>
      <img className='detalleImg'
        src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} //Foto de la portada
    
        alt={serie.name} //Titulo
      />
        <p>Rating: {serie.vote_average}</p>
        <p>Fecha de estreno: {serie.first_air_date}</p>
        <p>Duración: {serie.episode_run_time} minutos</p>
        <p>Sinopsis: {serie.overview}</p>
        <p>Género: {serie.genres ? serie.genres.map(genre => genre.name).join(', ') : 'No disponible'}</p>
        <button>Agregar a favoritos</button>
    </div>
    </div>
  );
}

export default DetalleS;