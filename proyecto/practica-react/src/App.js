import React from "react";
import { Route, Switch } from "react-router-dom";

import "./css/styles.css";

// IMPORTS DE SCREENS
import Home from "./screens/Home/Home";
import Favorites from "./screens/Favorites/Favorites";
import DetalleP from "./screens/Movie/Movie";
import DetalleS from "./screens/Serie/Serie";
import Results from "./screens/Results/Results";
import Error from "./screens/Error/Error";
import VerTodasSeriesTrending from "./screens/SeriesTrending/SeriesTrending";
import VerTodasSeriesPopulares from "./screens/SeriesPopulares/SeriesPopulares";
import PelisCartel from "./screens/PelisCartel/PelisCartel";
import PelisTrending from "./screens/PelisTrending/PelisTrending";

function App() {
  return (
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
        <Route path="/ResultadosBusqueda/:query/:type" exact={true}component={Results} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  );
}

export default App;
