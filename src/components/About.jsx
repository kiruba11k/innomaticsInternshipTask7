import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-subtitle">We create personalized learning experiences for everyone.</p>

      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a company that believes in empowering people through education.
            Our platform is designed to provide personalized learning experiences
            that adapt to your needs.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://www.innomatics.in/wp-content/uploads/cache/2023/01/IMG_5450-scaled/2374760138.jpg" 
            alt="About us"
          />
        </div>
      </div>

      <button className="about-btn">Learn More</button>
    </div>
  );
};

export default About;
