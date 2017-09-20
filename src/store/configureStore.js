import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from '../reducers/initialState';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools(
  applyMiddleware(
    thunk
  )
);

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers
);

export default store;
