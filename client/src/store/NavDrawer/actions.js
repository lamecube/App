export const TOGGLE_NAVDRAWER = 'TOGGLE_NAVDRAWER';
export const NAVLINKS = 'NAVLINKS';

export const toggleNav = () => (dispatch) => {
  return dispatch({
    type: 'TOGGLE_NAVDRAWER',
  });
  ;
};
