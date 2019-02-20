import React, { Component } from 'react';
import Form from './Form';
import HTTP from '../services/HTTP';

class SignUp extends Component {

  handleSubmit = async (target) => {
    const body = {
      user: {
        [target.email.name]: target.email.value,
        [target.password.name]: target.password.value
      }
    };

    return await HTTP.post('/sign_up', body);
  }

  render() {
    return (
      <Form title="Registration" submit="Sign Up" handleSubmit={this.handleSubmit} />
    )
  }
}

export default SignUp