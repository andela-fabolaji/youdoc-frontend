const userReducer = (state = {}, action) => {
  const { type } = action;

  switch(type) {
    case 'SIGNUP_SUCCESSFUL':
      return Object.assign({}, state, {
        user: action.user
      });
    case 'SIGNUP_FAIL':
      return Object.assign({}, state, {
        error: action.error
      })
    default: return state;
  }
};

export default userReducer;
