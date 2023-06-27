import React, { useContext, useState } from 'react'
import { usePage } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const { pageState, pageDispatch } = usePage();

  const switchTheme = () => {
    console.log(pageState);
    pageDispatch({ type: "SWITCH_THEME" });
  };

  return (
      <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={switchTheme}>Change theme</button>
    </nav>
    
  )
}

export default Navbar