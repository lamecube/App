import {USERS_ERRORS, USERS_SUCCESS} from './users';


const initialState = {
  fetching: true,
  error: null,
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_SUCCESS:
      return {
        ...state,
        fetching: !state.fetching,
        users: action.payload,
      };
    case USERS_ERRORS:
      return {
        ...state,
        fetching: !state.fetching,
        error: action.payload,
      };
    default:
      return state;
  }
};
