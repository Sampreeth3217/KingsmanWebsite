import React from 'react';
import './Map.css'; 
import Realtimedata from '../realtimedata/Realtimedata';
const Map= () => {
  return (
    <div className="container">
      <div>
        <img src='map.png' alt="Map" className="map-image" />
        {[...Array(10).keys()].map((i) => (
          <Realtimedata key={i} radioId={i + 1} />
        ))}
      </div>
    </div>
  );
};
export default Map;

// import React from 'react';
// import './Map.css'; 
// import Realtimedata from '../realtimedata/Realtimedata'; 
// const MapWithRadioButtons = () => {
//   return (
//     <div className="container">
//       <div>
//         <img src='map.png' alt="Map" className="map-image" />
//         <input type="radio" name="house" className="radio-button radio-1" />
//         <input type="radio" name="house" className="radio-button radio-2" />
//         <input type="radio" name="house" className="radio-button radio-3" />
//         <input type="radio" name="house" className="radio-button radio-4" />
//         <input type="radio" name="house" className="radio-button radio-5" />
//         <input type="radio" name="house" className="radio-button radio-6" />
//         <input type="radio" name="house" className="radio-button radio-7" />
//         <input type="radio" name="house" className="radio-button radio-8" />
//         <input type="radio" name="house" className="radio-button radio-9" />
//         <input type="radio" name="house" className="radio-button radio-10" />
//       </div>
//       <div>
//         <Realtimedata /> 
//       </div>
//     </div>
//   );
// };
// export default MapWithRadioButtons;