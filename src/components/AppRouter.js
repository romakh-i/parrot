import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainPhoto from './MainPhoto';
import LogIn from './LogIn';
import SignUp from './SignUp';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPhoto} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRouter