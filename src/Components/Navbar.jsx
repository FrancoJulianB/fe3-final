import React from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
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