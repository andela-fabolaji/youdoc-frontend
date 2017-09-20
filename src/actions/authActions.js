import actionTypes from './actionTypes';

const {
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
} = actionTypes;

export const createUserSuccess = user => {
  return {
    type: CREATE_USER_SUCCESS,
    user
  };
};

export const createUserFail = error => {
  return {
    type: CREATE_USER_FAIL,
    error
  };
};

export const signinSuccess = user => {
  return {
    type: SIGNIN_SUCCESS,
    user
  };
};

export const signinFail = error => {
  return {
    type: SIGNIN_FAIL,
    error
  };
};

