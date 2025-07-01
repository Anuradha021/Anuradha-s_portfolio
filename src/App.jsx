import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Services from './components/pages/Temp';
import Contact from './components/pages/Contact';
import Hero from './components/pages/Hero';
import Resume from './components/pages/Resume';
import Work from './components/pages/Work';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>} />
        
        <Route path="/services" element={<Services/>} />
        <Route path="/Resume" element={<Resume/>} />
        <Route path="/work" element={<Work/>} />

        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;