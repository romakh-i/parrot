import { Types } from "./types";
import { fromJS } from "immutable";

const initialState = fromJS({
  isLoggedIn: false,
  jwt: null,
  email: null,
  items: [],
  myItems: [],
  categories: [],
});

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Types.AUTHORIZE:
      console.warn('object', state)

      return state.set("isLoggedIn", true)
        .set("jwt", action.payload.jwt);

    case Types.UN_AUTHORIZE:
      return initialState;

    case Types.GET_USER:
      return state.set("email", action.payload.email)
        .set("myItems", fromJS(action.payload.items));

    case Types.GET_CATEGORIES:
      return state.set("categories", fromJS(action.payload.categories));

    case Types.GET_ITEMS:
      return state.set("items", fromJS(action.payload.items));

    case Types.CREATE_ITEM: {
      const items = state.get("items").push(fromJS(action.payload.items));

      return state.set("myItems", items);
    }

    default:
      return state;
  }
}

