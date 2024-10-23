import React from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import myGif from '../assets/Online learning.gif';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <h1 style={{ fontSize: '8rem' }}>
            The <span className="glow-text">Best LMS</span> for <br />
            <span className="glow-text">personalised</span> <br />
            learning
          </h1>
          
          <div className="box">
            <div className="wave-one"></div>
            <div className="wave-two"></div>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <img
            src={myGif}
            alt="An animated description"
            className="img-fluid"
            style={{
                width: '120%', 
                maxWidth: '900px', 
                marginLeft: '60px', 
                display: 'block' 
              }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
