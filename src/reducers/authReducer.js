import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const {
  CREATE_USER_SUCCESS,
  SIGNIN_SUCCESS
} = actionTypes;

const authReducer = (state = initialState.auth, action) => {
  const { type } = action;

  switch(type) {
    case CREATE_USER_SUCCESS:
      return Object.assign({}, state, {
        user: action.user
      });
    
    case SIGNIN_SUCCESS:
      return Object.assign({}, state, {
        user: action.user
      });
    default: return state;
  }
};

export default authReducer;
