import React, { Component } from "react";
import DetalleS from "../../components/Serie/Serie";

class Detalle extends Component {
    constructor(props) {
      super(props);
      this.state = {
        serie: null,
        cargando: true,

      };
    }

    componentDidMount() {
        const  {id}  = this.props.match.params;
        
        

        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=2e0ef69342c52cb11393cc8472403ddb`)
          .then(res => res.json())
          .then(data => {
            this.setState({ serie: data, cargando: false });
          });
      }

      render() {
        const  {serie, cargando}= this.state;
    
        if (cargando) return <p>Cargando...</p>;
    
 return (
            <div>
              <DetalleS serie={serie} />
     
            </div>
          );
        }
      }

      export default Detalle;  