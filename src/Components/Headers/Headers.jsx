import React, { Component } from "react";
import"./Headers.css"



export class Headers extends Component {
  render() { 
    return (
<header>
		
    <div className="contenedor">
        <nav className="menu">
            <a href="#acercade">Acerca de</a>
            <a href="#portfolio">Trabajos</a>
            <a href="#contacto">Contacto</a>
        </nav>
    </div>
    <div className="contenedor-texto">
                <div className="texto">
                    <h1 className="nombre">Matias Salvatore Tadey</h1>
                    <h2 className="profesional"> Desarrollador <b>Full-Stack</b></h2>
                </div>
    </div>

</header>
    );
  }
}

export default Headers;

