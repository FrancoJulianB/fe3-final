import React from 'react'
import { usePage } from './utils/global.context';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const { pageState, pageDispatch } = usePage();

  const switchTheme = () => {
    pageDispatch({ type: "SWITCH_THEME" });
  };

  return (

    <nav className='navigation'>
       <a href="/" className="brand-name">
        <span className="red-letter">D</span>H Odonto
      </a>
      <div className='navigation-menu'>
        <ul>
            <li>
            <Link to='/home' className="link-item">Home</Link>
          <Link to="/contact" className="link-item">Contact</Link>
          <Link to='/favs' className="link-item">Favs</Link>
          <Link to='/details' className="link-item">Details</Link>
            </li>       
        </ul>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    <div className='switch-theme'>
      <input type="checkbox" id="dark-mode" onChange={switchTheme}/>
      <label for="dark-mode"></label>
      <div class="background"></div>
    </div>
      
    </nav>
    
  )
}

export default Navbar