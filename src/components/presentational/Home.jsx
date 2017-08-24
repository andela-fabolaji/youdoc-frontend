import React, { Component } from 'react';
import HomeHeader from '../shared/HomeHeader';
import logo from '../../../public/assets/logo.png';

export default class Home extends Component {
  render () {
    return (
      <div>
        <HomeHeader image={logo}/>
        <h1>This is the home Page</h1>
      </div>
    );
  }
}