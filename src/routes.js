import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeLayout from './components/presentational/layout/home/HomeLayout';
import DashboardLayout from './components/presentational/layout/dashboard/DashboardLayout';
import About from './components/presentational/About';

const routes = (
  <Router>
    <Switch>
      <Route path="/" exact component={HomeLayout}/>
      <Route path="/about" component={About}/>
      <Route path="/dashboard" component={DashboardLayout}/>
      <Route render={() => <p>Page Not found</p>}/>
    </Switch>
  </Router>
);

export default routes ;
