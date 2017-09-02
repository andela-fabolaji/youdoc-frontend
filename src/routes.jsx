import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeLayout from './components/presentational/layout/Home/HomeLayout';
import About from './components/presentational/About';

const PrimaryRoutes = () => ( 
  <div>
    <main>
      <Switch>
        <Route path="/" exact component={HomeLayout}/>
        <Route path="/about" exact component={About}/>
        {/* <Route path="/dashboard" component={Dashboard}/> */}
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
);

export { PrimaryRoutes };