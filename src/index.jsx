import 'babel-polyfill';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import App from './components/App';
import './styles/app.scss';


render(
  <App />,
  document.querySelector('#app')
);
