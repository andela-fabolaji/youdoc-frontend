import actionTypes from './actionTypes';

const { SIGNUP, SIGNIN, LOGOUT } = actionTypes;

export const signIn = (payload) => {
  return {
    type: SIGNIN,
    payload
  };
};

export const signUp = (payload) => {
  return {
    type: SIGNUP,
    payload
  };
};

export const logOut = () => {
  return {
    type: LOGOUT
  };
};
