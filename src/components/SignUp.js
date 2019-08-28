import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp } from '../store/actions';
import Form from './Form';

class SignUp extends Component {
  handleSubmit = data => e => {
    e.preventDefault();

    this.props.signUp(data);
  }

  render() {
    return (
      <Form title="Registration"
        submit="Sign Up"
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: bindActionCreators(signUp, dispatch),
});

export default connect(undefined, mapDispatchToProps)(SignUp);