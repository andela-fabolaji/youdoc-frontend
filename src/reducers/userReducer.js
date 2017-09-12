import { signin, signup, logout } from '../actions/userActions';

const userReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'SIGNUP':
      return Object.assign({}, state, {
        user: payload
      });
    default: return state;
  }
};

export default userReducer;
