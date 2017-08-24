import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/presentational/Home';
import About from './components/presentational/About';

const PrimaryRoutes = () => ( 
  <div>
    <main>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        {/* <Route path="/dashboard" component={Dashboard}/> */}
        <Redirect to="/" />
      </Switch>
    </main>
  </div>
);

export { PrimaryRoutes };