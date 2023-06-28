
import React from 'react';
import { ContextProvider, usePage } from './Components/utils/global.context';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';


function App() {
  const {pageState} = usePage();
  const appClassName = pageState.theme ? 'dark-theme' : 'light-theme';

  return (

    <Router>
      <div className={`app ${appClassName}`}>
        <Navbar />
        <Routes>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/details" element={<Detail/>} />
          <Route path="/favs" element={<Favs/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
