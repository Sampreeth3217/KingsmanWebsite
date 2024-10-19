import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Hero Image */}
      <div className="hero-image-container w-100 my-10">
        <img src="water2.png" alt="Water Quality Monitoring" className="hero-image" />
      </div>

      {/* Hero Content Section */}
      <div className="hero-content">
        <h1 className="hero-title">Real-time Water Quality Monitoring</h1>
        <p className="hero-subtitle">
          Leveraging IoT to provide affordable and efficient solutions for rural communities.
        </p>
        <a href="#learn-more" className="cta-button">Learn More</a>
      </div>

      {/* Problem Definition Section */}
      <section className="problem-definition" id="learn-more">
        <h2 className="section-title">Problem Definition</h2>
        <p className="section-text">
          The primary issue addressed by this research and development project is the lack of proper water quality monitoring systems in rural areas, leading to potential health hazards.
        </p>

        <h3 className="section-subtitle">Key Problems</h3>
        <ul className="problem-list">
          <li>Limited Water Quality Monitoring</li>
          <li>Health Hazards</li>
          <li>Lack of Affordable Solutions</li>
        </ul>
      </section>

      {/* Footer */}
      {/* <footer className="footer">
        <p className="footer-text">© 2024 Water Quality Monitoring System. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default HomePage;
