import React, { Component } from 'react';
import Header from './Header';

class Wrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default Wrapper