import React from "react";
function FilterMovie (){
    return(
        <div>
            <forms action="/ResultadosFilterMovie" method="get" className="Search">
                <input
                    type="text"
                    name="query" 
                    value={this.state.busqueda}
                    onChange={(e) => this.cambiarTexto(e)}
                    placeholder="Buscar..."/>
            </forms>
        </div>
    )
}

export default FilterMovie;