import React, { useState } from 'react';
import './Map.css'; 
import Realtimedata from '../realtimedata/Realtimedata';

const Map = () => {
  const [selectedSensor, setSelectedSensor] = useState(1);

  const handleRadioChange = (radioId) => {
    setSelectedSensor(radioId);
  };

  return (
    <div className="container">
      <div className="map-wrapper">
        {/* Map Image */}
        {/* <img src='map.png' alt="Map" className="map-image" /> */}
        
        {/* Radio Buttons overlaying on the map */}
        {/* <input 
          type="radio" 
          name="sensor" 
          className="radio-button radio-1" 
          checked={selectedSensor === 1}
          onChange={() => handleRadioChange(1)} 
        />
        <input 
          type="radio" 
          name="sensor" 
          className="radio-button radio-2" 
          checked={selectedSensor === 2}
          onChange={() => handleRadioChange(2)} 
        />
        <input 
          type="radio" 
          name="sensor" 
          className="radio-button radio-3" 
          checked={selectedSensor === 3}
          onChange={() => handleRadioChange(3)} 
        />
        <input 
          type="radio" 
          name="sensor" 
          className="radio-button radio-4" 
          checked={selectedSensor === 4}
          onChange={() => handleRadioChange(4)} 
        /> */}
      </div>

      {/* Display Real-time data for selected sensor */}
      <div className="sensor-data">
        <Realtimedata radioId={selectedSensor} />
      </div>
    </div>
  );
};

export default Map;
