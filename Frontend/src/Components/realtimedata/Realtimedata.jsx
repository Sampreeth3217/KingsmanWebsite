import React, { Component } from 'react';
import StartFirebase from "../firebaseConfig";
import { ref, onValue } from "firebase/database";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
// import './Map.css';

const db = StartFirebase();

class MapWithSensorData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      selectedSensor: 'sensors1', // Default sensor
    };
  }

  componentDidMount() {
    this.fetchSensorData(this.state.selectedSensor); // Fetch initial data for the default sensor
  }

  fetchSensorData(sensorName) {
    const dbref = ref(db, sensorName);
    onValue(dbref, (snapshot) => {
      const data = snapshot.val();
      console.log(`Data received from Firebase (${sensorName}):`, data);
      this.setState({ data });
    }, (error) => {
      console.error(`Error fetching data for ${sensorName}:`, error);
    });
  }

  handleRadioChange = (sensorName) => {
    this.setState({ selectedSensor: sensorName });
    this.fetchSensorData(sensorName); // Fetch new data based on selected sensor
  };

  renderTooltip = (sensorName, data) => (
    <Tooltip id="sensor-tooltip">
      <strong>{sensorName}</strong>: {data ? JSON.stringify(data) : 'No data available'}
    </Tooltip>
  );

  render() {
    const { data, selectedSensor } = this.state;

    return (
      <div className="container">
        <div className="map-wrapper">
          {/* Map Image */}
          <img src='map.png' alt="Map" className="map-image" />

          {/* Radio buttons overlaid on the map with tooltip display */}
          {[1, 2, 3, 4].map((i) => {
            const sensorName = `sensors${i}`;
            return (
              <OverlayTrigger
                key={sensorName}
                placement="top"
                overlay={this.renderTooltip(sensorName, data)}
              >
                <input
                  type="radio"
                  name="sensor"
                  className={`radio-button radio-${i}`}
                  checked={selectedSensor === sensorName}
                  onChange={() => this.handleRadioChange(sensorName)}
                />
              </OverlayTrigger>
            );
          })}
        </div>

        {/* Display Data Below the Map */}
        {/* <div className="sensor-data">
          <h3>Data from {selectedSensor}</h3>
          <pre>{data ? JSON.stringify(data, null, 2) : 'No data available'}</pre>
        </div> */}
      </div>
    );
  }
}

export default MapWithSensorData;
