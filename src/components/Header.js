import React from 'react'
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-transparent">
      <Link to="/" className="navbar-brand logo-img">
        <img src={logo} alt="" />
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">ALL PRODUCTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ABOUT US</a>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">LOG IN</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">SIGN UP</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
