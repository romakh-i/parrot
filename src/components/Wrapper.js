import React, { Component } from 'react';
import Header from './Header';

class Wrapper extends Component {
  render() {
    return (
      <div className="content">
        <Header fixed={this.props.headerFixed} />
        {this.props.children}
      </div>
    )
  }
}

export default Wrapper