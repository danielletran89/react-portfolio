import React from 'react';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Navbar />
      <br />
      <About />
      <br />
      <Portfolio />
      <br />
      <Contact />
      <br />
      <Footer />
      <br />
    </div>
  );
}

export default App;
