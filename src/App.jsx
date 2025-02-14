import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';
import { motion } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
          <About />
          <Projects />
          <Footer />
        </motion.main>
      </div>
    </Router>
  );
}

export default App;
