import React from "react";
import './Home.css';
function Home() {
  return (
    <div className="text-center">
      <div className="container w-100 h-100">
        <div className="image-container">
          <img src="water2.png" alt="Not available" className="img-fluid" />
        </div>
        <div className="problem text-start">
          <h2>Problem Definition</h2>
          <p>
            The primary problem addressed by this research and development project is the lack of proper water quality monitoring systems in rural areas, leading to potential health hazards. The absence of real-time information about water quality makes it challenging to ensure access to clean and safe drinking water, which is a fundamental human right. The proposed project aims to develop a solution that leverages Internet of Things (IoT) technology to monitor water quality efficiently and affordably.
          </p>
          <h2>Key Problems</h2>
          <h4>Limited Water Quality Monitoring:</h4>
          <p>
            Many rural areas lack effective water quality monitoring systems, making it difficult to detect and address potential issues promptly.
          </p>
          <h4>Health Hazards:</h4>
          <p>
            Without real-time information on water quality, communities are at risk of consuming contaminated water, leading to health problems.
          </p>
          <h4>Lack of Affordable Solutions:</h4>
          <p>
            Existing water quality monitoring systems are expensive and not easily accessible to rural communities with limited resources.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
