// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <Router basename="/JS-Portfolios/reactapptest">
    <App />
  </Router>,
  document.getElementById('root')
);
