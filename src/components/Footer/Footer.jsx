import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='FooterModule'>
            <div className="RedesSociales">
                <div />
                <div className="BotonesRedesSociales">
                    <button className="BotonRedSocial"><img className='IconoRedSocial' src="../public/multimedia/facebook.png" alt="" /></button>
                    <button className='BotonRedSocial'><img className='IconoRedSocial' src="../public/multimedia/instagram.png" alt="" /></button>
                    <button className='BotonRedSocial'><img className='IconoRedSocial' src="../public/multimedia/twitter.png" alt="" /></button>
                    <button className='BotonRedSocial'><img className='IconoRedSocial' src="../public/multimedia/youtube.png" alt="" /></button>
                </div>
                <div />
                <div />
                <div />
            </div>

            <div className="botones">

                <section className="Section">
                    <button className='BotonInfo'><p>Audio Descriptivo</p></button>
                    <button className='BotonInfo'><p>Relaciones con inversionistas</p></button>
                    <button className='BotonInfo'><p>Privacidad</p></button>
                    <button className='BotonInfo'><p>Contáctanos</p></button>
                    <button className='BotonCodigoServicio' ><p>Código de Servicio</p></button>
                    <p className='Copyright'>© 1997 - 2023 Netflix, Inc.</p>
                </section>

                <section className='Section'>
                    <button className='BotonInfo'><p>Centro de ayuda</p></button>
                    <button className='BotonInfo'><p>Empleo</p></button>
                    <button className='BotonInfo'><p>Avisos legales</p></button>
                </section>

                <section className='Section'>
                    <button className='BotonInfo'><p>Tarjetas de regalo</p></button>
                    <button className='BotonInfo'><p>Tienda de Netflix</p></button>
                    <button className='BotonInfo'><p>Preferencias de cookies</p></button>
                </section>

                <section className="Section">
                    <button className='BotonInfo'><p>Prensa</p></button>
                    <button className='BotonInfo'><p>Términos de uso</p></button>
                    <button className='BotonInfo'><p>Información corporativa</p></button>
                </section>

            </div>

        </footer>
    )
}
