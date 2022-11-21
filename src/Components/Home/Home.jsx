import React, { Component } from "react";
import"./home.css"
import IcotecImg from "./IcotecImg/IcotecImg";
import foto from "../../assets/iconostec/fotoms.jpeg"


export class Home extends Component {
  render() { 
    return (
        <section className="acerca-de" > 
        <div className="contenedor">
                <div className="foto">
                    <img src={foto} width="200px" alt="Matias salvatore"  id="acercade"/>
                </div>
                <div className="texto" >
                      <h3 className="titulo"> Me presento...</h3>
                        <p className="texto-acerca-de" />
                        Soy una persona que <span> constantemente me estoy capacitando y adquiriendo nuevas habilidades. </span> 
                        En el año 2021 empece a capacitarme en <span>programación. </span>
                        Primero me capacité en <span>desarrollo Web </span>con conocimientos sobre HTML, CSS y Javascripts, actualmente puedo decir que soy desarrollador web Full Stack, gracias a <a href="https://www.thebridge.tech/" target="_blank" rel="noopener noreferrer">The bridge Talent.</a> 
                        Adquiriendo conocimientos en las siguientes tecnologías.
                        <IcotecImg/>
                        <p>Me considero proactivo y con capacidad de autonomía, intentando siempre 
                           <span> sumar valor a los equipos de trabajo que integro.</span></p>
                    </div>
                 
        </div>
        </section>
    );
  }
}

export default Home;

