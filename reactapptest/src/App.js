import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">Brad Matera</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">Experience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
      <section id="hero" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="https://assets.codepen.io/11481450/378488580_10224604160040229_4952889523349077754_n.jpg" alt="Brad Matera" className="img-fluid rounded-circle mb-4" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-4">Brad Matera</h1>
              <p className="lead">Full Stack Web Developer | Passionate Learner | Problem Solver</p>
              <a href="#about" className="btn btn-primary btn-lg">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
