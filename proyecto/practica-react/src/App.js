import React from "react";
import { Route, Switch } from "react-router-dom";

// IMPORTS DE COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './css/styles.css';
// IMPORTS DE SCREENS
import Home from './screens/Home/Home';
import Favorites from './screens/Favorites/Favorites';
import DetalleP from './screens/Movie/Movie';
import DetalleS from './screens/Serie/Serie';
import Resultado from './screens/Results/Results';
import VerTodasPeliculas from "./screens/VerTodas/VerTodasPeliculas";
import VerTodasSeries from "./screens/VerTodas/VerTodaSeries";
function App(){
  return(
    <>
      
      <Switch>
        <Route path="/favoritos" exact={true} component={Favorites} />
        <Route path="/pelicula/:id" exact={true} component={DetalleP} />
        <Route path="/serie/:id" exact={true} component={DetalleS} />
        <Route path="/" exact={true} component={Home} />
        <Route path="/VerTodasPeliculas" component={VerTodasPeliculas} />
        <Route path="/VerTodasSeries" component={VerTodasSeries} />
        
       
      </Switch>
     

    </>
  )
}

export default App;
