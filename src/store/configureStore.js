import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux-immutable";
import thunk from "redux-thunk";
// import { persistStore, persistReducer } from "redux-persist";
// import reducer from "../reducers";
// import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
// import storage from 'redux-persist/es/storage';
import userReducer from ".";

// const persistConfig = {
//   key: "root",
//   storage,
//   stateReconciler: autoMergeLevel2,
//   // whitelist: ["user", "localization", "chat"],
//   // blacklist: ["navigation", "isLoading", "hasErrored", "form", "sockets", "listings", "bookings", "chat"],
//   version: 1,
// };

export default function configureStore() {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(thunk));
  // const pReducer = persistReducer(persistConfig, userReducer);
  const store = createStore(userReducer, enhancer);
  // const persister = persistStore(store, undefined, onCompletion);

  return store;
}
