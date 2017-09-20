import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/configureStore';
import routes from './routes';

import './styles/app.scss';

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.querySelector('#app')
);
