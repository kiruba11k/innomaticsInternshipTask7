import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img
              src="https://www.innomatics.in/wp-content/uploads/2023/01/Innomatics-Logo1.png"
              width="260"
              alt="Innomatics Research Labs Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#features">
                Features
              </a>
              <a className="nav-link" href="#services">
                Services
              </a>
              <a className="nav-link" href="#testimonial">
                Testimonials
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
