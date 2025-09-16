import React from "react";
import { Route, Switch } from "react-router-dom";

// IMPORTS DE COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// IMPORTS DE SCREENS
import Home from './screens/Home/Home';
import Favorites from './screens/Favorites/Favorites';
import DetalleP from './screens/Movie/Movie';
import DetalleS from './screens/Serie/Serie';
import Resultado from './screens/Results/Results';


function App(){
  return(
    <>
      <Navbar />
      <Switch>
        <Route path="/favoritos" exact={true} component={Favorites} />
        <Route path="/pelicula/:id" exact={true} component={DetalleP} />
        <Route path="/serie/:id" exact={true} component={DetalleS} />
        <Route path="/" exact={true} component={Home} />
       
      </Switch>
      <Footer />
    </>
  )
}

export default App;
