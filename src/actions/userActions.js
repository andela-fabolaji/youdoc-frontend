import { userActionTypes as types } from './actionTypes';

// action creators
export const signin = (payload) => {
  return {
    type: types.SIGNIN,
    payload
  };
};

export const signup = (payload) => {
  return {
    type: types.SIGNUP,
    payload
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};
