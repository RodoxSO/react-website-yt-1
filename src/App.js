import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import  Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/Services" exact Component={Services} />
          <Route path="/Products" exact Component={Products} />
          <Route path="/Sign-up" exact Component={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;
