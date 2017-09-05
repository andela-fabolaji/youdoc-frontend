import keymirror from 'keymirror-js';

const userActions = [
  'CREATE',
  'LOGIN',
  'LOGOUT'
];

const docActions = [
  'CREATE',
  'EDIT',
  'DELETE'
];

export const userActionTypes = keymirror(userActions);
export const docActionTypes = keymirror(docActions);