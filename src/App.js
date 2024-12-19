import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';
import './tailwind.output.css'; // Updated import path

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <Header />
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="toggle-dark-mode"
        >
          Toggle Dark Mode
        </button>
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Home /></motion.div>} />
          <Route path="/about" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><About /></motion.div>} />
          <Route path="/skills" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Skills /></motion.div>} />
          <Route path="/projects" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Projects /></motion.div>} />
          <Route path="/certifications" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Certifications /></motion.div>} />
          <Route path="/contact" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Contact /></motion.div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
