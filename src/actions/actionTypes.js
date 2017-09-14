import keymirror from 'keymirror-js';

const actionTypes = [
  'SIGNUP_SUCCESSFUL',
  'SIGNIN_SUCCESSFUL',
  'LOGOUT_SUCCESSFUL',
  'SIGNIN_FAIL',
  'SIGNUP_FAIL',
  'LOGOUT_FAIL',
  'CREATE_DOC',
  'EDIT_DOC',
  'DELETE_DOC'
];

export default keymirror(actionTypes);
