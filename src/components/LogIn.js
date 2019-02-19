import React, { Component } from 'react';
import Form from './Form';
import HTTP from '../services/HTTP';

class LogIn extends Component {

  handleSubmit = async (event) => {
    const { target } = event;
    const body = {
      auth: {
        [target.email.name]: target.email.value,
        [target.password.name]: target.password.value
      }
    };

    return await HTTP.post('/user_token', { body });
  }

  render() {
    return (
      <Form title="Authorization" submit="Log In" handleSubmit={this.handleSubmit} />
    )
  }
}

export default LogIn;