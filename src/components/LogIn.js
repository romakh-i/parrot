import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signIn, getItems } from '../store/actions';
import Form from './Form';

class LogIn extends Component {
  handleSubmit = data => e => {
    e.preventDefault();

    this.props.signIn(data.user);
  }

  render() {
    return (
      <Form title="Authorization"
        submit="Log In"
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  signIn: bindActionCreators(signIn, dispatch),
  getItems: bindActionCreators(getItems, dispatch),
});

export default connect(undefined, mapDispatchToProps)(LogIn);