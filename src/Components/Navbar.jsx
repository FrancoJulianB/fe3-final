import React from 'react'
import { Link } from 'react-router-dom';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <ul>
       
          <li>
          <Link to="/contact">Contact</Link>
          <Link to='/details'>Details</Link>
          <Link to='/favs'>Favs</Link>
          <Link to='/home'>Home</Link>
          </li>       
        
      </ul>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar