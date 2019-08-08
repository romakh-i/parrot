let _store;

export const setStore = store => _store = store;

export const getState = () => {
  return _store && _store.getState() || {};
}

export const dispatch = action => {
  return _store && _store.dispatch(action) || undefined;
}

export default {
  setStore,
  getState,
  dispatch,
}
