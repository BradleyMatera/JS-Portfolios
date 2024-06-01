import React from 'react';

const Home = () => {
  return (
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
  );
};

export default Home;
