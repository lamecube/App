import axios from 'axios';
export const LOADING_NASA = 'LOADING_NASA';
export const NASA_SUCCESS = 'NASA_SUCCESS';
export const NASA_ERRORS = 'NASA_ERRORS';

export const getNasa = () => (dispatch) => {
  return axios
      .get('https://api.nasa.gov/planetary/apod?api_key=Vs3LQj9D86waEPHeKiA85dzxdgXbKBSBxjIhqdxc')
      .then((res) => {
        return dispatch({type: NASA_SUCCESS, payload: res.data});
      })
      .catch((err) => {
        return dispatch({type: NASA_SUCCESS, payload: err.response});
      });
};
