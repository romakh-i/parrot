import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wrapper from './Wrapper';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      redirect: !!localStorage.getItem('jwt')
    }
  }

  notify = (text) => toast(text + "!", { position: toast.POSITION.TOP_CENTER, className: 'toast-notif' });

  handleChange = ({ target: { name, value } }) => {
    this.setState(prevState => ({
      user: { ...prevState.user, [name]: value }
    }));
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await this.props.handleSubmit(e.target);

    if (response.errors) {
      for (const key in response.errors)
        if (key !== 'password_digest')
          response.errors[key].forEach((el) => this.notify(key.charAt(0).toUpperCase() + key.slice(1) + ' ' + el))
    } else if (response instanceof Error)
      this.notify('Entered wrong data!');
    else {
      this.props.dispatch({ type: 'AUTHORIZE', jwt: response.jwt });
    }
  }

  successRedirect = () => {
    if (this.props.isLoggedIn)
      return <Redirect to='/' />
  }

  render() {
    return (
      <Wrapper>
        {this.successRedirect()}
        <div className="container">
          <div className="row">
            <form className="signup-form" onSubmit={this.handleSubmit}>
              <label className="text-center form-title">{this.props.title}</label>
              <input type="text" className="form-control" name="email" placeholder="Email" onChange={this.handleChange} />
              <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleChange} />
              <input type="submit" className="form-control" value={this.props.submit}></input>
            </form>
          </div>
        </div>
        <ToastContainer />
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
});


export default connect(mapStateToProps)(Form);