import {axiosWithAuth} from '../../../util/axiosWithAuth';

export const LOADING_USERS = 'LOADING_USERS';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_ERRORS = 'USERS_ERRORS';

export const getUsers = () => (dispatch) => {
  return axiosWithAuth()
      .get('/users')
      .then((res) => {
        return dispatch({type: USERS_SUCCESS, payload: res.data.users});
      })
      .catch((err) => {
        return dispatch({type: USERS_SUCCESS, payload: err.response.data});
      });
};
