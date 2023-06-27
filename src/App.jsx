import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { ContextProvider, usePage } from './Components/utils/global.context';
import './App.css'

function App() {
  const {pageState} = usePage();
  console.log(pageState);
  const appClassName = pageState.theme ? 'dark-theme' : 'light-theme';

  return (
    <div className={`app ${appClassName}`}>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
