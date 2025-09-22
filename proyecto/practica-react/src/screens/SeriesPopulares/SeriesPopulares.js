import React, { Component } from 'react';
import SeriesCard from '../../components/SeriesCard/SeriesCard';
import VerMas from '../../components/VerMas/VerMas';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FilterSeries from '../../components/FilterSeries/FilterSeries';


//DE ESTA FORMA CARGAN LAS PRIMERAS 20 PELICULAS/SERIES NO TODAS 
class VerTodasSeriesPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      cargando: true,
      MostrarMas: 8,
      pagina: 1,
      seriesFiltradas : []
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=71f9dd51c9b661ac3cc8a99b148402c4&language=es-ES&page=${this.state.pagina}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ series: data.results, seriesFiltradas: data.results,cargando: false, pagina: this.state.pagina + 1  });
      })
      .catch((error) => {
        console.error('Error al obtener las series:', error);
        this.setState({ cargando: false });
      });
  }

  MostrarMasSeries = () => { 
    fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=71f9dd51c9b661ac3cc8a99b148402c4&language=es-ES&page=${this.state.pagina}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({ series: data.results.concat(data.results), cargando: false, pagina: this.state.pagina + 1  });
    })
    .catch((error) => {
      console.error('Error al obtener las series:', error);
      this.setState({ cargando: false });
    });

    this.setState((a) => ({
      MostrarMas: a.MostrarMas + 4,
    }));
  };
  filtrarSeries = (texto) => {
  const busqueda = texto.toLowerCase();
  const filtradas = this.state.seriesFiltradas.filter(serie =>
  serie.name.toLowerCase().includes(busqueda));
  this.setState({ series: filtradas });
};

  render() {
    const series = this.state.series;
    const MostrarMas = this.state.MostrarMas;
    const cargando = this.state.cargando;

    if (cargando) {return <React.Fragment> <Navbar /><p>Cargando...</p><Footer /></React.Fragment>};


    let botonVerMas = "";
  if (MostrarMas < series.length) {
    botonVerMas = <VerMas onClick={this.MostrarMasSeries} />;
  } // solo aparece el boton si hay mas para mostrar

    return (
      <React.Fragment>
      <Navbar />
      <FilterSeries filtrar={this.filtrarSeries} series={this.state.series}/>
      <section>
        <h2>Todas las series Populares</h2>
        <div className="card-container">
          {series.map((elem, idx) => {
            if (idx < MostrarMas) {
              return (
                <SeriesCard
                  key={idx}
                  id={elem.id}
                  image={elem.poster_path}
                  name={elem.name}   
                  description={elem.overview}
                />
              );
            }
            return null;
          })}
        </div>

      {botonVerMas}
      </section>
      <Footer />
    </React.Fragment>
    );
  }
}

export default VerTodasSeriesPopulares;