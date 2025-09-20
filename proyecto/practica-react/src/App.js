import React from "react";
import { Route, Switch } from "react-router-dom";



import './css/styles.css';
// IMPORTS DE SCREENS
import Results from "./screens/Results/Results";   
import Error from "./screens/Error/Error";
import VerTodasPeliculas from "./screens/VerTodas/VerTodasPeliculas";
import VerTodasSeries from "./screens/VerTodas/VerTodaSeries";
import VerTodasSeriesTrending from "./screens/SeriesTrending/SeriesTrending";
import VerTodasSeriesPopulares from "./screens/SeriesPopulares/SeriesPopulares";
import PelisCartel from "./screens/PelisCartel/PelisCartel";
import PelisTrending from "./screens/PelisTrending/PelisTrending";

function App(){
  return(
    <>
      
      <Switch>
        <Route path="/favoritos" exact={true} component={Favorites} />
        <Route path="/pelicula/:id" exact={true} component={DetalleP} />
        <Route path="/serie/:id" exact={true} component={DetalleS} />
        <Route path="/" exact={true} component={Home} />
        <Route path="/SeriesTrending" exact={true} component={VerTodasSeriesTrending} />
        <Route path="/SeriesPopulares" exact={true} component={VerTodasSeriesPopulares} /> 
        <Route path="/PeliculasCartel" exact={true} component={PelisCartel} />
        <Route path="/PeliculasTrending" exact={true} component={PelisTrending} />
        <Route path="" component={Error} />
        <Route path="/VerTodasPeliculas" component={VerTodasPeliculas} />
        <Route path="/ResultadosBusqueda" component={Results} />
        <Route path="/VerTodasSeries" component={VerTodasSeries} />
        <Route path="/ResultadosBusqueda" component={Results} />
        
      </Switch>
     

    </>
  )
}

export default App;