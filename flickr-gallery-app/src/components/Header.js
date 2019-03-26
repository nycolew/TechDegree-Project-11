import React, { Component } from 'react';

import Form from './Form';
import Navigation from './Navigation';

class Header extends Component {
  render() {
    return (
      <div>
        <Form history={this.props.history} handleSubmit={this.props.handleSubmit} />
        <Navigation />
      </div>
    );
  }
}

export default Header;
