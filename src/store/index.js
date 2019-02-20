const initialState = {
  isLoggedIn: false,
  jwt: null,
  email: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTHORIZE':
      return {
        isLoggedIn: true,
        jwt: action.jwt
      };

    case 'UNAUTHORIZE':
      return {
        isLoggedIn: false,
        jwt: null,
        email: null
      };

    case 'GET_USER':
      console.log("auth", action);
      return {
        ...state,
        email: action.email
      };
    default:
      return state;
  }
}

