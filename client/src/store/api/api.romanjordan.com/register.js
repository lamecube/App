import {axiosWithAuth} from '../../../../util/axiosWithAuth';

export const LOADING_REGISTRATION = 'LOADING_REGISTRATION';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERRORS = 'REGISTRATION_ERRORS';

export const register = () => (dispatch) => {
  return axiosWithAuth()
      .get('/register')
      .then((res) => {
        return dispatch({type: REGISTRATION_SUCCESS, payload: res.data});
      })
      .catch((err) => {
        return dispatch({type: REGISTRATION_SUCCESS, payload: err.response});
      });
};