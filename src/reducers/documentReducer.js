import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const { CREATE_DOC_SUCCESS } = actionTypes;

export default (state = initialState.documents, action) => {
  switch (action.type) {
    case CREATE_DOC_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.documents)
      ];

    default: return state;
  }
};
