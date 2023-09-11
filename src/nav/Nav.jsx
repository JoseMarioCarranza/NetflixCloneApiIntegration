import { NavLink } from 'react-router-dom';
import "./Nav.css"

export default function NavComponet() {
  return (
    <header>
      <div className="MenuPrincipal">
        <NavLink className="buttonMenu" to="/"><img className='logo' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" /></NavLink>
        <NavLink className="buttonMenu" to="/">Todas las peliculas</NavLink>
        <NavLink className="buttonMenu" to="/independientes">Independientes</NavLink>
        <NavLink className="buttonMenu" to="/comedia">Comedia</NavLink>
        <NavLink className="buttonMenu" to="/">Acerca de nosotros</NavLink>
      </div>
      <div className="IconosDerecha">
        <NavLink className="buttonMenu" to="/"><img className='imgLupa' src="../public/multimedia/lupa_blanca.png" alt="" /></NavLink>
        <NavLink className="buttonMenu" to="/"><img className='imgMenu' src="../public/multimedia/campana_blanca.png" alt="" /></NavLink>
        <NavLink className="buttonMenu" to="/"><img className='imgMenu' src="../public/multimedia/img_perfil_netflix.png" alt="" /></NavLink>
      </div>
    </header>
  )
}