import React from 'react';
// import { faLink } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work : Projects</h1>
        <div className="work-list">
          <div className="work">
            <img src="sm_img.png" alt="Social Media App" /> 
            <div className="layer">
              <h3>Social Media App</h3>
              <p>The app connects you to talented people around the world.</p>
              <a href="#">
                {/* <FontAwesomeIcon icon={faLink} /> */}
              </a>
            </div>
          </div>
          
          <div className="work">
            <img src="chart_img.png" alt="Chart Application" /> 
            <div className="layer">
              <h3>Chart Application</h3>
              <p>The app connects you to talented people around the world.</p>
              <a href="#">
                {/* <FontAwesomeIcon icon={faLink} /> */}
              </a>
            </div>
          </div>
          
          <div className="work">
            <img src="ecom_img.png" alt="E-commerce Website" /> 
            <div className="layer">
              <h3>E-commerce</h3>
              <p>The app connects you to talented people around the world.</p>
              <a href="#">
                {/* <FontAwesomeIcon icon={faLink} /> */}
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">See more</a>
      </div>
    </div>
  );
};

export default Portfolio;