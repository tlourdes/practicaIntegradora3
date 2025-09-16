
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Home from "./screens/Home/Home";
import Favorites from "./screens/Favorites/Favorites";


function App() {
  return( <Switch>
    <Route path="/favoritos" exact={true} component={Favorites} />
    <Route path="/" exact={true} component={Home} />
   
    
  </Switch>)
 

}

export default App;
