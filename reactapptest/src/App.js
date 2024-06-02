import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router basename="/JS-Portfolios/reactapptest">
      <div className="App">
        {/* Your navigation and routes */}
      </div>
    </Router>
  );
}

export default App;