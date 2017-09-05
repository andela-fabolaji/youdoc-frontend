import React from 'react';
import HomeHeader from '../shared/HomeHeader';
import logo from '../../../public/assets/logo.png';

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <HomeHeader image={logo}/>
        <h1>This is the About Page</h1>
      </div>
    );
  }
}