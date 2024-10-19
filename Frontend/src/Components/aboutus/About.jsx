import React from 'react'
import './About.css'
function About() {
  return (
    <div className='about'>
        <div className='about-solution'>
        <h1>Aquavigil</h1>
        <p className='about-text'>
        AquaVigil is a smart water management solution using <span>real-time monitoring</span>, <span>AI</span>, and <span>IoT sensors</span> (pH, flow, TDS, and water level) to detect water quality issues and predict demand. Powered by <span>ESP32 microcontrollers</span>, it efficiently 
        transmits data for analysis, identifying contamination, leaks, and usage trends.
The system integrates <span>geospatial analysis</span> (GIS) for real-time mapping of water networks, 
enabling targeted responses. Built with <span>React</span>, <span>Node.js</span>, <span>Firebase</span>, and <span>MongoDB Atlas</span>, AquaVigil is scalable, cost-effective (₹3000 per module), and reduces water waste and operational costs.
Future enhancements include better AI models, additional sensors, and renewable energy options, 
making AquaVigil a sustainable solution for current and future water challenges.nd renewable energy options, making AquaVigil a sustainable solution for current and future water challenges.
        </p>
        </div>
    </div>
  )
}
export default About