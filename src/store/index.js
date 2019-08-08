import { Types } from "./types";

const initialState = {
  isLoggedIn: false,
  jwt: null,
  email: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Types.AUTHORIZE:
      return {
        isLoggedIn: true,
        jwt: action.payload.jwt
      };

    case Types.UN_AUTHORIZE:
      return {
        isLoggedIn: false,
        jwt: null,
        email: null
      };

    case Types.GET_USER:
      console.log("auth", action);
      return {
        ...state,
        email: action.email
      };

    case Types.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };

    case Types.GET_ITEMS:
      return {
        ...state,
        items: action.payload.items,
      };

    case Types.CREATE_ITEM: {
      const items = state.items;
      items.push(action.payload.item);

      return {
        ...state,
        items,
      };
    }

    default:
      return state;
  }
}

