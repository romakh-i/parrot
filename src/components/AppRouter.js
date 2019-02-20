import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import MainPage from './MainPage';
import LogIn from './LogIn';
import SignUp from './SignUp';


import reducer from '../store/index'
import { createStore } from 'redux';

const store = createStore(reducer);

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />

            <Route path="/signup" render={(props) => (
              !store.getState().isLoggedIn ? <SignUp {...props} /> : <Redirect to="/" />
            )} />
            <Route path="/login" render={(props) => (
              !store.getState().isLoggedIn ? <LogIn {...props} /> : <Redirect to="/" />
            )} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default AppRouter;