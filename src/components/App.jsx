import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { PrimaryRoutes } from '../routes';

const App = () => (
  <Router>
    <PrimaryRoutes/>
  </Router>
);

export default App;