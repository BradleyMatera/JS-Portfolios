// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< Updated upstream
import { BrowserRouter as Router } from 'react-router-dom';
=======
import App from './components/App';
>>>>>>> Stashed changes
import './index.css';
import App from './App';

ReactDOM.render(
<<<<<<< Updated upstream
  <Router basename="/JS-Portfolios/reactapptest">
    <App />
  </Router>,
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>,
>>>>>>> Stashed changes
  document.getElementById('root')
);
