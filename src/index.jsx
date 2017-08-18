import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import TestComponent  from './TestComponent';

class App extends Component {
  render () {
    return (
      <TestComponent labelOn="on" labelOff="off"/>
    );
  }
}

render(
  <App />, document.querySelector('#app')
);