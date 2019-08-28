import HTTP from '../services/HTTP';
import { Types } from './types';

export const signUp = user => dispatch => {
  HTTP.post('/sign_up', user)
    .then(response => {
      dispatch({
        type: Types.AUTHORIZE,
        payload: response,
      });
    })
    .catch(response => console.warn("ERROR: ", response));
}

export const signIn = user => dispatch => {
  HTTP.post('/user_token', { auth: user })
    .then(response => {
      dispatch({
        type: Types.AUTHORIZE,
        payload: response,
      });
    }).catch(response => console.warn("ERROR: ", response));
}

export const logOut = () => dispatch => {
  dispatch({ type: Types.UN_AUTHORIZE });
}

export const getUser = () => dispatch => {
  HTTP.get('/users/me')
    .then(response =>
      dispatch({
        type: Types.GET_USER,
        payload: response,
      })
    );
}

export const getCategories = () => dispatch => {
  HTTP.get('/categories')
    .then(response => {
      dispatch({
        type: Types.GET_CATEGORIES,
        payload: response,
      });
    });
}

export const getItems = () => dispatch => {
  HTTP.get('/items')
    .then(response => {
      dispatch({
        type: Types.GET_ITEMS,
        payload: response,
      });
    });
}

export const createItem = (item) => dispatch => {
  HTTP.post('/items', item)
    .then(response => {
      dispatch({
        type: Types.CREATE_ITEM,
        payload: { item: response },
      });
    });
}