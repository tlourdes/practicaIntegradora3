
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Home from "./screens/Home/Home";


function App() {
  return( <Switch>
  
    <Route path="/" exact={true} component={Home} />
   
    
  </Switch>)
 

}

export default App;
