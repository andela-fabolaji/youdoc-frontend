import actionTypes from './actionTypes';

const {
  SIGNUP_SUCCESSFUL,
  SIGNIN_SUCCESSFUL,
  LOGOUT_SUCCESSFUL,
  SIGNUP_FAIL
} = actionTypes;

export const signinSuccessful = user => {
  return {
    type: SIGNIN_SUCCESSFUL,
    user
  };
};

export const signupSuccessful = user => {
  return {
    type: SIGNUP_SUCCESSFUL,
    user
  };
};

export const logoutSuccessful = () => {
  return {
    type: LOGOUT_SUCCESSFUL
  };
};


export const signupFail = error => {
  return {
    type: SIGNUP_FAIL,
    error
  };
};
