import {axiosWithAuth} from '../../../util/axiosWithAuth';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const logOut = () => (dispatch) => {
  localStorage.clear();
  dispatch({type: LOGOUT});
};

export const loginHandler = (user) => (dispatch) => {
  return axiosWithAuth()
      .post(`/login`, {...user})
      .then((res) => {
        if (!res.data.token) {
          throw new Error();
        };
        localStorage.setItem('token', res.data.token);
        return dispatch({type: 'LOGIN_SUCCESS', payload: {...res.data}});
      })
      .catch((err) => {
        if (!err.response.data) {
          throw new Error();
        };
        return dispatch({type: 'LOGIN_ERROR', payload: {...err.response.data}});
      }).catch(() =>{
        return dispatch({
          type: 'LOGIN_ERROR',
          payload: {
            errors: {network: 'A network error has occured'},
          },
        });
      });
};
