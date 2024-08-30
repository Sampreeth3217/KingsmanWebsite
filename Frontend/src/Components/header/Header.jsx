import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <h3>MyApp</h3>
      </div>
      <ul className='nav justify-content-end'>
          <li className='nav-item'>
            <Link to="/login" className='nav-link text-white'><h5>Login</h5></Link>
          </li>
          <li className='nav-item'>
            <Link to="/region" className='nav-link text-white'><h5>Region</h5></Link>
          </li>
          <li className='nav-item'>
            <Link to="/map" className='nav-link text-white'><h5>Map</h5></Link>
          </li>
          <li className='nav-item'>
            <Link to="/about" className='nav-link text-white'><h5>AboutUs</h5></Link>
          </li>
      </ul>
    </div>
  )
}
export default Header