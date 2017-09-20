import { combineReducers } from 'redux';
import auth from './authReducer';
import documents from './documentReducer';

const rootReducer = combineReducers({
  auth,
  documents
});

export default rootReducer;
