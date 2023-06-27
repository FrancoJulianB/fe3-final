import React from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { ContextProvider, usePage } from './Components/utils/global.context';
import './App.css'

function App() {
  const {pageState} = usePage();
  console.log(pageState);
  return (
    <div className= 'app' style={pageState.themeDetails}>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
