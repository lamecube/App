import {TOGGLE_NAVDRAWER} from './actions';

const initialState = {
  navDrawer: false,
};

export const navDrawer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAVDRAWER:
      return {
        ...state,
        navDrawer: !state.navDrawer,
      };
    default:
      return state;
  }
};
