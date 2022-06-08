import axios from 'axios';

const baseURL = 'http://127.0.0.1:5000';


// Finds Token and Checks when it expires
export const axiosWithAuth = () => axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {
    Authorization: localStorage.getItem('token'),
  },
});


