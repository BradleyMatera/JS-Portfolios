import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Experience from './Experience.js';
import Contact from './Contact.js';
import './App.css';

const handleSubmit = (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  alert(`Thank you for your message, ${name}! I will get back to you soon.`);

  event.target.name.value = '';
  event.target.email.value = '';
  event.target.message.value = '';
};

function App() {
  return (
    <Router basename="/JS-Portfolios/reactapptest">
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">Brad Matera</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section id="hero" className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  src="https://assets.codepen.io/11481450/378488580_10224604160040229_4952889523349077754_n.jpg"
                  alt="Brad Matera"
                  className="img-fluid rounded-circle mb-4"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-4">Brad Matera</h1>
                <p className="lead">
                  Full Stack Web Developer | Passionate Learner | Problem Solver
                </p>
                <a href="#about" className="btn btn-primary btn-lg">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">About Me</h2>
            <div className="row">
              <div className="col-lg-6">
                <p>
                  Hello! I'm Brad Matera, a passionate full stack web developer
                  with a strong drive to create meaningful and impactful digital
                  experiences. I believe in the power of technology to solve
                  problems and make a positive difference in people's lives.
                </p>
                <p>
                  As a dedicated student at Full Sail University, I am
                  constantly expanding my knowledge and skills in web
                  development, exploring cutting-edge technologies and
                  frameworks. My journey in computing began in 1992, fueled by a
                  fascination with video games, which has since evolved into a
                  deep passion for coding, app development, and the exciting
                  realms of machine learning and artificial intelligence.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  Throughout my career, I have honed a wide range of skills,
                  including web design, HTML, CSS, JavaScript, and various
                  frameworks such as React, Vue, and Angular. I am committed to
                  creating accessible, responsive, and user-friendly web
                  applications that not only meet but exceed the expectations of
                  users and clients alike.
                </p>
                <p>
                  Beyond my technical expertise, I am a strong advocate for
                  community engagement, volunteering, and leveraging technology
                  for social good. I believe in the power of collaboration,
                  continuous learning, and pushing the boundaries of what's
                  possible in the digital landscape.
                </p>
                <p>
                  If you're looking for a dedicated and versatile web developer
                  who can bring your ideas to life, let's connect and embark on
                  an exciting journey together!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Featured Projects</h2>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img
                    src="https://via.placeholder.com/300x200"
                    className="card-img-top"
                    alt="GitHub JS Portfolio"
                  />
                  <div className="card-body">
                    <h5 className="card-title">GitHub JS Portfolio</h5>
                    <p className="card-text">
                      A portfolio showcasing my JavaScript projects.
                    </p>
                    <a
                      href="https://github.com/BradleyMatera/JS-Portfolios"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img
                    src="https://via.placeholder.com/300x200"
                    className="card-img-top"
                    alt="UI Cheat Sheet"
                  />
                  <div className="card-body">
                    <h5 className="card-title">UI Cheat Sheet</h5>
                    <p className="card-text">
                      A collection of simple UI examples.
                    </p>
                    <a
                      href="https://github.com/BradleyMatera/ui-cheat-sheet"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img
                    src="https://via.placeholder.com/300x200"
                    className="card-img-top"
                    alt="Best of React"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Best of React</h5>
                    <p className="card-text">
                      A ranked list of awesome React open-source libraries and
                      tools.
                    </p>
                    <a
                      href="https://github.com/BradleyMatera/best-of-react"
                      target="_blank"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Skills & Expertise</h2>
            <div className="row">
              <div className="col-lg-6">
                <h4>Web Development</h4>
                <ul className="list-group mb-4">
                  <li className="list-group-item">HTML5</li>
                  <li className="list-group-item">CSS3</li>
                  <li className="list-group-item">JavaScript</li>
                  <li className="list-group-item">React</li>
                  <li className="list-group-item">Vue</li>
                  <li className="list-group-item">Angular</li>
                  <li className="list-group-item">Node.js</li>
                  <li className="list-group-item">Express.js</li>
                  <li className="list-group-item">MongoDB</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h4>Additional Skills</h4>
                <ul className="list-group mb-4">
                  <li className="list-group-item">Machine Learning</li>
                  <li className="list-group-item">Artificial Intelligence</li>
                  <li className="list-group-item">UI/UX Design</li>
                  <li className="list-group-item">Responsive Design</li>
                  <li className="list-group-item">Accessibility</li>
                  <li className="list-group-item">Git</li>
                  <li className="list-group-item">Agile Methodologies</li>
                  <li className="list-group-item">Problem Solving</li>
                  <li className="list-group-item">Communication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Professional Experience</h2>
            <div className="row">
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Junior Developer</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Full Sail University Projects
                    </h6>
                    <p className="card-text">
                      Developed and maintained web applications using HTML, CSS,
                      and JavaScript. Collaborated with team members on various
                      academic projects, ensuring timely completion and
                      adherence to project specifications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Health Care Specialist</h5>
                    <h6 className="card-subtitle mb-2 text-muted">US Army</h6>
                    <p className="card-text">
                      Provided comprehensive healthcare support in high-stress
                      environments. Demonstrated exceptional crisis management
                      skills and the ability to perform under pressure during
                      deployment in Kandahar, Afghanistan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Get in Touch</h2>
            <div className="row">
              <div className="col-lg-6 mb-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Contact Info</h5>
                    <p className="card-text">
                      <i className="fas fa-map-marker-alt me-2"></i> Olympia,
                      WA, USA
                      <br />
                      <i className="fas fa-envelope me-2"></i>
                      bradmatera@gmail.com
                      <br />
                      <i className="fas fa-phone me-2"></i> +1 (360) 970-0581
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://www.linkedin.com/in/brad-matera-889179260/"
                    target="_blank"
                    className="btn btn-outline-primary me-3"
                  >
                    <i className="fab fa-linkedin me-2"></i> LinkedIn
                  </a>
                  <a
                    href="https://github.com/chunkywizard1992"
                    target="_blank"
                    className="btn btn-outline-dark me-3"
                  >
                    <i className="fab fa-github me-2"></i> GitHub
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCo4EcyuHEjfSfozw8LrwfZg"
                    target="_blank"
                    className="btn btn-outline-danger"
                  >
                    <i className="fab fa-youtube me-2"></i> YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-4 bg-dark text-white">
          <div className="container">
            <p className="text-center mb-0">
              &copy; 2024 Brad Matera. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;