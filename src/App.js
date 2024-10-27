import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Gallery from './components/pages/Gallery';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Services" exact Component={Services} />
          <Route path="/Gallery" exact Component={Gallery} />
          <Route path="/About" exact Component={About} />
          <Route path="/Contact" exact Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
