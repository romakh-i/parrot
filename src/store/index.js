import { Types } from "./types";
import { fromJS } from "immutable";

const initialState = fromJS({
  isLoggedIn: false,
  jwt: null,
  email: null,
  items: [],
  myItems: [],
});

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Types.AUTHORIZE:
      return {
        isLoggedIn: true,
        jwt: action.payload.jwt
      };

    case Types.UN_AUTHORIZE:
      return { ...initialState };

    case Types.GET_USER:
      return {
        ...state,
        email: action.payload.email,
        myItems: action.payload.items,
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

