import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/About';
import MainApp from './pages/MainApp';
import ContactUs from './pages/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<MainApp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element = {<ContactUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;