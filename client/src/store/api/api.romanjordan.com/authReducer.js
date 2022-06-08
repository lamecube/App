import {LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT} from './auth';

const checkLogedIn = () =>{
  return localStorage.getItem('token') ?
    true :
    false;
};

const initialState = {
  loggedIn: checkLogedIn(),
  errors: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case LOGOUT:
      return {
        loggedIn: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loggedIn: false,
        errors: {...action.payload.errors},
      };
    default:
      return state;
  }
};
