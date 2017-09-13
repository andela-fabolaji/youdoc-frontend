import keymirror from 'keymirror-js';

const actionTypes = [
  'SIGNUP',
  'SIGNIN',
  'LOGOUT',
  'CREATE_DOC',
  'EDIT_DOC',
  'DELETE_DOC'
];

export default keymirror(actionTypes);
