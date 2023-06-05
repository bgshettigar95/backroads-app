import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
