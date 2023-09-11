import React from 'react'
import './PrincipalMovie.css'

export default function PrincipalMovie() {
    return (
        <section className='PeliculaPrincipal'>
            <div className="Informacion">
                <img className='LogoPelicula' src="../public/multimedia/logo_her.png" alt="" />
                <p className='SinopsisPelicula'>
                    En el futuro, Theodore Twombly es un escritor de cartas que se<br />
                    enamora de Samantha, un sistema operativo de inteligencia artificial.<br />
                    A medida que su relación se desarrolla, Theodore debe enfrentar las<br />
                    preguntas sobre el amor, la identidad y la naturaleza de la realidad.<br />
                </p>

                <div className="seccionDeBotones">

                    <button className='BotonReproducir'>
                        <div className="ContenidoBoton">
                            <img className='iconoboton' src="../public/multimedia/reproducir.png" alt="" />Reproducir
                        </div>
                    </button>

                    <button className='BotonInformacion'>
                        <div className="ContenidoBoton">
                            <img className='iconoboton' src="../public/multimedia/informacion.png" alt="" />Más información
                        </div>
                    </button>

                </div>

            </div>

        </section>
    )
}