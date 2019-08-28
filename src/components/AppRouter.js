import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import MainPage from './MainPage';
import LogIn from './LogIn';
import SignUp from './SignUp';

import configureStore from '../store/configureStore';
export const store = configureStore();

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />

            <Route path="/signup" render={(props) => (
              !store.getState().getIn(["user", "isLoggedIn"]) ? <SignUp {...props} /> : <Redirect to="/" />
            )} />
            <Route path="/login" render={(props) => (
              !store.getState().getIn(["user", "isLoggedIn"]) ? <LogIn {...props} /> : <Redirect to="/" />
            )} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default AppRouter;