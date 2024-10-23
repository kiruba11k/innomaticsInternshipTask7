import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Design from './services/Design';
import Development from './services/Development';
import Consulting from './services/Consulting';
import './service.css'; // Import the updated CSS

const Services = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2 style={{marginTop: '20px' }}>Our Services</h2>
        <div className="col-md-12">
          <p>Innomatics Research Labs is a pioneer in “Transforming Career and Lives” of individuals in the Digital Space by catering advanced training on NASSCOM FutureSkills Prime Certified Data Science, Machine Learning, Artificial Intelligence (AI), Full Stack Development, Amazon Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics, and Digital Marketing. We are passionate about bridging the gap between learning and real-time implementation, so empowering individuals to be industry-ready and help firms in reaping huge benefits is our primary goal.</p>
        </div>

        <ul className="list-group">
          <li className="list-group-item">
            <NavLink to="/services/design">Design</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/services/development">Development</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/services/consulting">Consulting</NavLink>
          </li>
        </ul>
      </div>

      <div className="col-md-8">
        <Routes>
          <Route path="design" element={<Design />} />
          <Route path="development" element={<Development />} />
          <Route path="consulting" element={<Consulting />} />
        </Routes>
      </div>
    </div>
  );
};

export default Services;
