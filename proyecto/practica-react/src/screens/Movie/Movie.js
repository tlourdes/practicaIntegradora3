import React, { Component } from "react";
import DetalleP from "../../components/Movie/Movie";

class Detalle extends Component {
    constructor(props) {
      super(props);
      this.state = {
        movie: null,
        cargando: true,

      };
    }

    componentDidMount() {
        const  {id}  = this.props.match.params;
        
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e0ef69342c52cb11393cc8472403ddb`)
          .then(res => res.json())
          .then(data => {
            this.setState({ movie: data, cargando: false });
          });
      }

      render() {
        const  {movie, cargando}= this.state;
    
        if (cargando) return <p>Cargando...</p>;
    
 return (
            <div>
              <DetalleP movie={movie} />
     
            </div>
          );
        }
      }

      export default Detalle;  