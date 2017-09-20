import actions from './actionTypes';

const {
  CREATE_DOC_SUCCESS,
} = actions ;

export const createDocSuccess = (document) => {
  return {
    type: CREATE_DOC_SUCCESS,
    document
  };
};
