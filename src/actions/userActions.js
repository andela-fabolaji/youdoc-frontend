import { userActionTypes as types } from './actionTypes';

// action creators
export const login = (payload) => {
  return {
    type: types.LOGIN,
    payload
  };
};

export const signup = (payload) => {
  return {
    type: types.CREATE,
    payload
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};