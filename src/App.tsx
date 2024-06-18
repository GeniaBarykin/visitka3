import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>    
        <Home />          
        <Skills />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default App;
