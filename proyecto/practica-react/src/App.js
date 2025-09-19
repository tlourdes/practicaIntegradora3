import React from "react";
import { Route, Switch } from "react-router-dom";



import './css/styles.css';
// IMPORTS DE SCREENS
import Home from './screens/Home/Home';
import Favorites from './screens/Favorites/Favorites';
import DetalleP from './screens/Movie/Movie';
import DetalleS from './screens/Serie/Serie';
import Resultado from './screens/Results/Results';
import VerTodasPeliculas from "./screens/VerTodas/VerTodasPeliculas";
import VerTodasSeries from "./screens/VerTodas/VerTodaSeries";
import Error from "./screens/Error/Error";

import SeriesTrending from "./screens/SeriesTrending/SeriesTrending";
import SeriesPopulares from "./screens/SeriesPopulares/SeriesPopulares";
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
        <Route path="/VerTodasPeliculas" exact={true} component={VerTodasPeliculas} />
        <Route path="/VerTodasSeries" exact={true} component={VerTodasSeries} />
    
    
    <Route path="/SeriesTrending" exact={true} component={SeriesTrending} />
      <Route path="/SeriesPopulares" exact={true} component={SeriesPopulares} /> 
      <Route path="/PeliculasCartel" exact={true} component={PelisCartel} />
      <Route path="/PeliculasTrending" exact={true} component={PelisTrending} />
       <Route path="" component={Error} />
        
       
      </Switch>
     

    </>
  )
}

export default App;