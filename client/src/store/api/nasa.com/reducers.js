import {NASA_ERRORS, NASA_SUCCESS} from './actions';


const initialState = {
  fetching: true,
  error: null,
  nasa: {},
};

export const nasaReducer = (state = initialState, action) => {
  switch (action.type) {
    case NASA_SUCCESS:
      return {
        ...state,
        fetching: !state.fetching,
        nasa: action.payload,
      };
    case NASA_ERRORS:
      return {
        ...state,
        fetching: !state.fetching,
        error: action.payload,
      };
    default:
      return state;
  }
};
