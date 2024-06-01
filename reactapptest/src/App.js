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
     <section id="about" className="py-5">
  <div className="container">
    <h2 className="text-center mb-5">About Me</h2>
    <div className="row">
      <div className="col-lg-6">
        <p>Hello! I'm Brad Matera, a passionate full stack web developer with a strong drive to create meaningful and impactful digital experiences. I believe in the power of technology to solve problems and make a positive difference in people's lives.</p>
        <p>As a dedicated student at Full Sail University, I am constantly expanding my knowledge and skills in web development, exploring cutting-edge technologies and frameworks. My journey in computing began in 1992, fueled by a fascination with video games, which has since evolved into a deep passion for coding, app development, and the exciting realms of machine learning and artificial intelligence.</p>
      </div>
      <div className="col-lg-6">
        <p>Throughout my career, I have honed a wide range of skills, including web design, HTML, CSS, JavaScript, and various frameworks such as React, Vue, and Angular. I am committed to creating accessible, responsive, and user-friendly web applications that not only meet but exceed the expectations of users and clients alike.</p>
        <p>Beyond my technical expertise, I am a strong advocate for community engagement, volunteering, and leveraging technology for social good. I believe in the power of collaboration, continuous learning, and pushing the boundaries of what's possible in the digital landscape.</p>
        <p>If you're looking for a dedicated and versatile web developer who can bring your ideas to life, let's connect and embark on an exciting journey together!</p>
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
          <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="GitHub JS Portfolio"/>
          <div className="card-body">
            <h5 className="card-title">GitHub JS Portfolio</h5>
            <p className="card-text">A portfolio showcasing my JavaScript projects.</p>
            <a href="https://github.com/BradleyMatera/JS-Portfolios" target="_blank" className="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card">
          <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="UI Cheat Sheet"/>
          <div className="card-body">
            <h5 className="card-title">UI Cheat Sheet</h5>
            <p className="card-text">A collection of simple UI examples.</p>
            <a href="https://github.com/BradleyMatera/ui-cheat-sheet" target="_blank" className="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card">
          <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Best of React"/>
          <div className="card-body">
            <h5 className="card-title">Best of React</h5>
            <p className="card-text">A ranked list of awesome React open-source libraries and tools.</p>
            <a href="https://github.com/BradleyMatera/best-of-react" target="_blank" className="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="skills" className="py-5">
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
            <h5 className="card-title">Healthcare Specialist</h5>
            <h6 className="card-subtitle mb-2 text-muted">US Army</h6>
            <p className="card-text">
              Served as a Healthcare Specialist in the US Army, providing medical care in high-pressure environments, including deployment to Kandahar, Afghanistan. Gained expertise in crisis management, teamwork, and mission success.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Junior Developer</h5>
            <h6 className="card-subtitle mb-2 text-muted">Freelance</h6>
            <p className="card-text">
              Developed and maintained web applications using HTML, CSS, and JavaScript. Managed YouTube content and academic projects, bringing a unique perspective to web development through hands-on experience and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  
  );
}

export default App;
