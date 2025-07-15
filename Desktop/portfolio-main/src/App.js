import React from 'react';
import Home from './component/Home';
import Works from "./component/Works";
import Contact from './component/Contact';
import About from './component/About';
import "./App.css";
import "./responsive.css";

function App() {
  return (
    <div className="App">
      <>
        <div className='header_container'>
          <header className="site-header row">
            <div className="header-logo">Grig</div>
            <nav className="header-nav">
              <a href="#home">Home</a>
              <a href="#works">Works</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>
        </div>

        <section id="home" className='row'><Home /></section>
        <section id="about" className='row'><About /></section>
        <section id="works" className='row'><Works /></section>
        <section id="contact" className='row'><Contact /></section>
      </>
    </div>
  );
}

export default App;
