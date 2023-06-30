import React from 'react'
import { usePage } from './utils/global.context';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";


const Navbar = () => {
  const { pageState, pageDispatch } = usePage();

  const switchTheme = () => {
    pageDispatch({ type: "SWITCH_THEME" });
  };

  const className = () => {
    if (pageState.theme){
    return 'dark-theme'
    } else{
    return 'light-theme'
    }
  }

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
            </li>       
        </ul>
      </div>
      
      <div className='switch-button'>
        <input type="checkbox" className="checkbox" id="checkbox" onChange={switchTheme} />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className={`ball ${className()}`}></span>
        </label>
      </div>
      
    </nav>
    
  )
}

export default Navbar