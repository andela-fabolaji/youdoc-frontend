import apiService from '../utils/apiService';
import {
  createUserSuccess,
  createUserFail,
  signinSuccess,
  signinFail
} from '../actions/authActions';
import tokenService from '../utils/tokenService';

export const signUp = userDetails => {
  return dispatch => {
    return apiService.signUp(userDetails)
      .then(res => {
        if (res.status === 409) {
          dispatch(createUserFail('User with email or username already exists'));
        } else {
          const token = res.data.data.credential.token;
          tokenService.setToken(token);
          dispatch(createUserSuccess())
        }
      });
  };
};

export const signIn = loginDetails => {
  return dispatch => {
    return apiService.signIn(loginDetails)
  }
};