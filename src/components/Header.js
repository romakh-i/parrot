import React, { Component } from 'react'
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom'
import HTTP from '../services/HTTP';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    if (this.props.isLoggedIn)
      this.getUser();
  }

  async getUser() {
    const user = await HTTP.get('/users/me', { auth: this.props.jwt });
    if (user instanceof Error) {
      console.log("Wrong token!");
      this.logOut();
    }
    else this.props.dispatch({ type: 'GET_USER', email: user.email })
  }

  logOut = () => {
    this.props.dispatch({ type: 'UNAUTHORIZE' });
  }

  render() {
    return (
      <header className={(this.props.fixed ? 'fixed ' : '') + 'navbar navbar-expand-md navbar-light bg-header'}>
        <div className="container">
          <Link to="/" className="navbar-brand logo-img">
            <img src={logo} alt="" />
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <nav className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">ALL PRODUCTS</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">ABOUT US</Link>
              </li>
              {!this.props.isLoggedIn ? (
                [(<li key="login" className="nav-item"><Link to="/login" className="nav-link">LOG IN</Link></li>),
                <li key="signup" className="nav-item"><Link to="/signup" className="nav-link">SIGN UP</Link></li>]
              ) : (
                  [(<li key="logout" className="nav-item"><Link to="/" onClick={this.logOut} className="nav-link">LOG OUT</Link></li>),
                  <li key="email" className="nav-item"><Link to="/" className="nav-link">{this.props.email}</Link></li>]
                )}
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  jwt: state.jwt,
  email: state.email
});

export default connect(mapStateToProps)(Header);