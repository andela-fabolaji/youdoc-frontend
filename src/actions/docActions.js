import actionTypes from './actionTypes';

const { CREATE_DOC, EDIT_DOC, DELETE_DOC } = actionTypes;

export const createDoc = (payload) => {
  return {
    type: CREATE_DOC,
    payload
  };
};

export const editDoc = (payload) => {
  return {
    type: EDIT_DOC,
    payload
  };
};

export const deleteDoc = (id) => {
  return {
    type: DELETE_DOC,
    id
  };
};
