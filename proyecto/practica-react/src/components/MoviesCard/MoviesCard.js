import React, { Component } from "react";
import { Link } from "react-router-dom";

class MoviesCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
          favoritos:false
        };
      }

        componentDidMount(){
    let traido = localStorage.getItem("favoritosPelis");
    if(traido !== null){
        let parseado = JSON.parse(traido);
        if(parseado.includes(this.props.id)){
            this.setState({ favoritos:true });
        }
    }
}

      agregarFavoritos(){

        let favoritos = []

         let traido = localStorage.getItem("favoritosPelis")

        if (traido === null) {
            favoritos.push(this.props.id)
            let stringifiado = JSON.stringify(favoritos)
            localStorage.setItem("favoritosPelis", stringifiado)
        }else{
            let parseado = JSON.parse(traido)
            parseado.push(this.props.id)
            let stringifiado = JSON.stringify(parseado)
            localStorage.setItem("favoritosPelis", stringifiado)
        }

        this.setState({
            favoritos:true
        })
      }

      quitarFavoritos(){

        let traido = localStorage.getItem("favoritosPelis")
        let parseado = JSON.parse(traido)
        let filtrado = parseado.filter(id => id !== this.props.id)
        let stringifiado = JSON.stringify(filtrado)
        localStorage.setItem("favoritosPelis", stringifiado)


        this.setState({
            favoritos:false
        })
      }

render(){
  return (
    <article className="card">
      <img src={"https://image.tmdb.org/t/p/w500" + this.props.image} alt={this.props.name} />
      <h3>{this.props.name}</h3>
      <p>{this.props.description}</p>

      <Link to={"/pelicula/" + this.props.id}>
        <button>Ir a detalle</button>
      </Link>

    {this.state.favoritos ? <button onClick={() => this.quitarFavoritos()}>Eliminar de favoritos</button> : 
      <button onClick={() => this.agregarFavoritos()}>Agregar a favoritos</button>}

    </article>
  );
}
}

export default MoviesCard;

