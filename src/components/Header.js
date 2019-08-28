import React, { Component } from 'react'
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser, logOut } from '../store/actions';


class Header extends Component {
  constructor(props) {
    super(props);

    if (this.props.isLoggedIn)
      this.props.getUser();
  }

  logOut = () => {
    this.props.logOut();
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
  isLoggedIn: state.getIn(["user", "isLoggedIn"]),
  jwt: state.getIn(["user", "jwt"]),
  email: state.getIn(["user", "email"]),
});

const mapDispatchToProps = (dispatch) => ({
  getUser: bindActionCreators(getUser, dispatch),
  logOut: bindActionCreators(logOut, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);