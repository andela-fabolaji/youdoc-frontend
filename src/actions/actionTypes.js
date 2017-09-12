import keymirror from 'keymirror-js';

const userActions = [
  'SIGNUP',
  'SIGNIN',
  'LOGOUT'
];

const docActions = [
  'CREATE',
  'EDIT',
  'DELETE'
];

export const userActionTypes = keymirror(userActions);
export const docActionTypes = keymirror(docActions);
