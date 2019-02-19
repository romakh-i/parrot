import React, { Component } from 'react'
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom'
import HTTP from '../services/HTTP';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: !!localStorage.getItem('jwt') };
    if (this.state.isLoggedIn) this.getUser();
  }

  async getUser() {
    const user = await HTTP.get('/users/me', { auth: localStorage.getItem('jwt') });
    this.setState({ email: user.email })
  }

  logOut(event) {
    localStorage.removeItem('jwt');
    window.location.reload();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-transparent" >
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
              <a className="nav-link" href="/">ALL PRODUCTS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">ABOUT US</a>
            </li>
            {!this.state.isLoggedIn ? (
              [(<li key="login" className="nav-item"><Link to="/login" className="nav-link">LOG IN</Link></li>),
              <li key="signup" className="nav-item"><Link to="/signup" className="nav-link">SIGN UP</Link></li>]
            ) : (
                [(<li key="logout" className="nav-item"><Link to="/" onClick={this.logOut} className="nav-link">LOG OUT</Link></li>),
                <li key="email" className="nav-item"><Link to="/" className="nav-link">{this.state.email}</Link></li>]
              )}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header