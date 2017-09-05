import { docActionTypes as types } from './actionTypes';

// action creators
export const createDoc = (payload) => {
  return {
    type: types.CREATE,
    payload
  };
};

export const editDoc = (payload) => {
  return {
    type: types.EDIT,
    payload
  };
};

export const deleteDoc = () => {
  return {
    type: types.DELETE
  };
};