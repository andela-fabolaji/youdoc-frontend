import api from '../utils/api';
import { signUp, signIn, logOut } from '../actions/userActions';

const endpoints = {
  signup: {
    url: '/users',
    method: 'post'
  }
};

export const signupUser = userDetails => {
  return dispatch => {
    // return axios.post()
  };
};
