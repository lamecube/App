import {TOGGLE_MODAL} from './actions';

const initialState = {
  display: false,
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        display: !state.display,
      };
    default:
      return state;
  }
};
