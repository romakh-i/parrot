import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux-immutable";
import thunk from "redux-thunk";
import userReducer from ".";
import Immutable from "immutable";

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(thunk));

  const store = createStore(combineReducers({ user: userReducer }, Immutable.Record({ user: {} })), enhancer);

  return store;
}
