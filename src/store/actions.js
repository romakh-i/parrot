import HTTP from '../services/HTTP';
import { Types } from './types';

export const signIn = target => dispatch => {
  HTTP.post('/user_token', {
    auth: {
      [target.email.name]: target.email.value,
      [target.password.name]: target.password.value
    }
  }).then(response => {
    dispatch({
      type: Types.AUTHORIZE,
      payload: response,
    });
    console.warn(response);
  });
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