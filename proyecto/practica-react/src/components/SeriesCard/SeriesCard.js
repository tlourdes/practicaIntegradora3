import React, {Component} from "react";
import { Link } from "react-router-dom";

class SeriesCard extends Component{
constructor(props) {
        super(props);
        this.state = {
          favoritos:false,
           verDescripcion: false,      
          textoBoton: "Ver descripción"
        };
      }

      componentDidMount(){
    let traido = localStorage.getItem("favoritosSeries");
    if(traido !== null){
        let parseado = JSON.parse(traido);let encontrado = false;
        for (let i = 0; i < parseado.length; i++) {
            if (parseado[i] === this.props.id) {
                encontrado = true;
                
            }
        }
        if (encontrado) {
            this.setState({ favoritos: true });  //si esta en favs el boton va a decir "eliminar de favoritos"
        }
    }
}
    //boton agregar

    agregarFavoritos(){
        let favoritos = []

        let traido = localStorage.getItem("favoritosSeries")

        if (traido === null) {
            favoritos.push(this.props.id)
            let stringifiado = JSON.stringify(favoritos)
            localStorage.setItem("favoritosSeries", stringifiado)
        }else{
            let parseado = JSON.parse(traido)
            parseado.push(this.props.id)
            let stringifiado = JSON.stringify(parseado)
            localStorage.setItem("favoritosSeries", stringifiado)
        }

        this.setState({
            favoritos:true
        })
    }

        //boton borrar
    borrarFavoritos(){

      let traido = localStorage.getItem("favoritosSeries")
       if (traido !== null) {
      let parseado = JSON.parse(traido);
      let filtrado = parseado.filter(id => id !== this.props.id);
      let stringifiado = JSON.stringify(filtrado);
      localStorage.setItem("favoritosSeries", stringifiado);
    }

        this.setState({
            favoritos:false
        })
      }
      verDescripcion() {
    if (this.state.verDescripcion) {
      this.setState({
        verDescripcion: false,
        textoBoton: "Ver descripción"
      });
    } else {
      this.setState({
        verDescripcion: true,
        textoBoton: "Ocultar descripción"
      });
    }
  }

    render(){

  let descripcion ="";
  if (this.state.verDescripcion) {
     descripcion = <p>{this.props.description}</p>;
  }
  return (
    <article className="card">
      <img src={"https://image.tmdb.org/t/p/w500" + this.props.image} alt={this.props.name} />
      <h3>{this.props.name}</h3>
      
      <button className="botonDescripción" onClick={() => this.verDescripcion()}>{this.state.textoBoton}</button>
      {descripcion}

      <div className="card-buttons">
      <Link to={"/serie/" + this.props.id}>
        <button>Ir a detalle</button>
      </Link>

         {this.state.favoritos ? <button onClick={() => this.borrarFavoritos()}>Eliminar de favoritos</button> : 
      <button onClick={() => this.agregarFavoritos()}>Agregar a favoritos</button>}
</div>
    </article>
  );
}
};
export default SeriesCard;

