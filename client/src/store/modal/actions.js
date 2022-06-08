export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const NAVLINKS = 'NAVLINKS';

export const toggleModal = () => (dispatch) => {
  return dispatch({
    type: 'TOGGLE_MODAL',
  });
  ;
};
