import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeLayout from './components/presentational/layout/home/HomeLayout';
import DashboardLayout from './components/presentational/layout/dashboard/DashboardLayout';
import About from './components/presentational/About';

const PrimaryRoutes = () => ( 
  <div>
    <main>
      <Switch>
        <Route path="/" exact component={HomeLayout}/>
        <Route path="/about" component={About}/>
        <Route path="/dashboard" component={DashboardLayout}/>
        <Redirect to="/"/> 
      </Switch>
    </main>
  </div>
);

export { PrimaryRoutes };