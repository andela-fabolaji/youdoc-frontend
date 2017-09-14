import apiService from '../utils/apiService';
import {
  signupSuccessful,
  signupFail,
  signinSuccessful,
  logoutSuccessful
} from '../actions/userActions';

export const signupUser = userDetails => {
  return dispatch => {
    return apiService.signUp(userDetails)
      .then(res => {
        if (res.status === 409) {
          dispatch(signupFail('User with email or username already exists'));
        } else {
          console.log(res);
        }
      });
  };
};
