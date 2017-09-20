import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/about/About';

const routes = (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route render={() => <p>Page Not found</p>}/>
    </Switch>
  </Router>
);

export default routes ;
