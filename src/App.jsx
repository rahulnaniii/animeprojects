// src/App.jsx
import React from 'react';
import'./App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from'./pages/home';
import About from'./pages/About';
import Contact from'./pages/Contact';
import Navbar from './components/nav';
import Projects from './pages/projects';
function App() {
  return (
       
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<p>Main</p>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
      </>
  );
}

export default App;
